const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '.deploy_config.json');
if (!fs.existsSync(configPath)) {
  console.error('[LỖI] Không tìm thấy file .deploy_config.json!');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const { owner, repo, branch, token, files } = config;

async function api(endpoint, options = {}) {
  const url = `https://api.github.com/repos/${owner}/${repo}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `token ${token}`,
      'User-Agent': 'Chronicler-AutoDeploy',
      'Accept': 'application/vnd.github.v3+json',
      ...(options.headers || {})
    }
  });
  return { status: res.status, data: await res.json() };
}

async function getRemoteFileInfo(filePath) {
  try {
    const res = await api(`/contents/${filePath}?ref=${branch}`);
    if (res.status === 200 && res.data) {
      return res.data;
    }
  } catch (e) {}
  return null;
}

async function syncFile(fileName) {
  const localPath = path.join(__dirname, fileName);
  if (!fs.existsSync(localPath)) {
    console.log(`[BỎ QUA] Không tìm thấy tệp cục bộ: ${fileName}`);
    return;
  }

  const localBuffer = fs.readFileSync(localPath);
  const base64Content = localBuffer.toString('base64');
  const remoteInfo = await getRemoteFileInfo(fileName);

  // So sánh nội dung từ xa nếu có
  if (remoteInfo && remoteInfo.content) {
    const cleanRemote = remoteInfo.content.replace(/\s/g, '');
    const cleanLocal = base64Content.replace(/\s/g, '');
    if (cleanRemote === cleanLocal) {
      console.log(`[ĐỒNG BỘ] ${fileName} (Không có thay đổi, giữ nguyên)`);
      return;
    }
  }

  const payload = {
    message: `Cập nhật ${fileName} - ${new Date().toLocaleString('vi-VN')}`,
    content: base64Content,
    branch: branch
  };

  if (remoteInfo && remoteInfo.sha) {
    payload.sha = remoteInfo.sha;
  }

  const res = await api(`/contents/${fileName}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  });

  if (res.status === 200 || res.status === 201) {
    console.log(`[THÀNH CÔNG] Đã đẩy lên GitHub: ${fileName}`);
  } else {
    console.error(`[THẤT BẠI] Lỗi khi tải lên ${fileName}:`, res.data);
  }
}

async function main() {
  console.log(`====================================================`);
  console.log(`Đang đồng bộ dự án lên: https://github.com/${owner}/${repo}`);
  console.log(`Thời gian: ${new Date().toLocaleString('vi-VN')}`);
  console.log(`====================================================`);

  for (const f of files) {
    await syncFile(f);
  }

  console.log(`----------------------------------------------------`);
  console.log(`Đồng bộ hoàn tất!`);
  console.log(`Website trực tuyến: https://${owner}.github.io/${repo}/`);
}

main().catch(console.error);

