// ========================================================
// ỨNG DỤNG TẠP CHÍ SỬ THI NGHỆ THUẬT (FINE-ART EDITORIAL)
// THE CHRONICLER: ĐẠI VIỆT HƯ CẤU TOÀN THƯ
// ========================================================

const STORAGE_KEY_EVENTS = "CHRONICLE_WARS_EVENTS";
const STORAGE_KEY_CONFIG = "CHRONICLE_WARS_CONFIG";

const DEFAULT_PAYMENT_CONFIG = {
  bankBin: "970422",
  bankAccount: "0988888888",
  accountHolder: "VIEN SU HOC HU CAU",
  bankName: "MBBank"
};

let eventsData = loadEvents();
let paymentConfig = loadPaymentConfig();
let currentEventIndex = 2; // Mặc định mở bài chuyên khảo Năm 2031 (Bách Khoa lên Sao Hỏa)

// ========================================================
// LOCAL STORAGE & DATA
// ========================================================

function loadEvents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_EVENTS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [...INITIAL_EVENTS];
}

function saveEvents(events) {
  try {
    localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(events));
    eventsData = events;
  } catch (e) {}
}

function loadPaymentConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (raw) return { ...DEFAULT_PAYMENT_CONFIG, ...JSON.parse(raw) };
  } catch (e) {}
  return { ...DEFAULT_PAYMENT_CONFIG };
}

function savePaymentConfig(cfg) {
  try {
    localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(cfg));
    paymentConfig = cfg;
  } catch (e) {}
}

// ========================================================
// HIỆU ỨNG ÂM THANH XÚC GIÁC (TACTILE AUDIO ASMR)
// ========================================================

function playStampSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.65, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) {}
}

function playPageTurnSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const bufferSize = ctx.sampleRate * 0.13;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 850;
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.13);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
  } catch (e) {}
}

function playVictoryTrumpet() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const notes = [293.66, 369.99, 440.00, 587.33];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
      gain.gain.setValueAtTime(0.15, ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.1);
      osc.stop(ctx.currentTime + idx * 0.1 + 0.48);
    });
  } catch (e) {}
}

function triggerFineConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c49a45', '#9b2226', '#1a1816', '#fbf8f2']
    });
  }
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl text-xs font-semibold border pointer-events-auto transform transition-all duration-300 ${
    type === "war"
      ? "bg-[#1a1816] text-[#c49a45] border-[#c49a45]/40 shadow-stone-900/30 font-serif"
      : "bg-[#1a1816] text-white border-stone-700 shadow-stone-900/30"
  }`;

  toast.innerHTML = `
    <span class="text-base">${type === 'war' ? '🏛️' : '📜'}</span>
    <div class="flex-1 font-editorial text-sm">${message}</div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function formatVND(amount) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
}

// ========================================================
// RENDER BÀI CHUYÊN KHẢO LỊCH SỬ NGHỆ THUẬT (FEATURE MONOGRAPH)
// ========================================================

function renderFeaturedMonograph() {
  const sorted = [...eventsData].sort((a, b) => a.year - b.year);
  if (sorted.length === 0) return;

  if (currentEventIndex >= sorted.length) currentEventIndex = 0;
  if (currentEventIndex < 0) currentEventIndex = sorted.length - 1;

  const evt = sorted[currentEventIndex];

  // 1. Niên hiệu & Kỷ nguyên
  const eraObj = (typeof ERAS !== "undefined") ? (ERAS.find(e => e.id === evt.eraId) || ERAS[1]) : { roman: "LIBER I", name: "Kỷ Khởi Nguyên" };
  document.getElementById("mono-era-roman").textContent = eraObj.roman || "CHƯƠNG II";
  document.getElementById("mono-era-name").textContent = eraObj.name.toUpperCase();
  document.getElementById("mono-year-display").textContent = evt.dateFormatted || `NĂM ${evt.year}`;

  // 2. Tiêu đề & Phụ đề
  document.getElementById("mono-headline").textContent = evt.title;
  document.getElementById("mono-subtitle").textContent = evt.subtitle || `Khảo luận văn hiến về sự kiện chấn động diễn ra vào năm ${evt.year}.`;

  // 3. Lạc khoản tác giả & Giá trị bảo chứng
  document.getElementById("mono-byline-author").textContent = evt.author;
  document.getElementById("mono-bounty-val").textContent = formatVND(evt.currentPrice);
  document.getElementById("mono-category").textContent = evt.category || "Chính Sử Triều Đình";
  document.getElementById("mono-timestamp").textContent = evt.updatedAt || "Vĩnh Hằng Niên";

  // 4. Tranh khắc bản gỗ (Woodcut plate)
  document.getElementById("mono-woodcut-caption").textContent = evt.artworkTitle || `Bản khắc gỗ giám tuyển số ${evt.year % 100}: Khung cảnh năm ${evt.year}`;
  document.getElementById("mono-woodcut-icon").textContent = evt.artworkIcon || "🏛️";

  // 5. Nội dung áng văn chính sử
  document.getElementById("mono-content-body").textContent = evt.content || evt.summary;

  // 6. Con dấu Triện Son chính biên
  const sealTarget = document.getElementById("mono-seal-target");
  if (sealTarget) {
    sealTarget.classList.remove("animate-seal-stamp");
    void sealTarget.offsetWidth;
    sealTarget.classList.add("animate-seal-stamp");
  }

  // 7. Khu vực Chiến Địa Viết Đè (Rewriting Salon)
  const minBid = evt.currentPrice + 20000;
  document.getElementById("salon-target-year").textContent = evt.year;
  document.getElementById("salon-min-bid-hint").textContent = formatVND(minBid);
  const bidInput = document.getElementById("salon-bid-input");
  bidInput.value = minBid;
  bidInput.min = minBid;

  // Cập nhật mã VietQR động
  updateSalonVietQR(minBid, evt.year);

  // 8. Tập lưu trữ Dã Sử Bị Bác Bỏ (Retracted Theses)
  renderRetractedTheses(evt);

  // 9. Cập nhật thanh Niên Biểu Giám Tuyển ở đầu trang
  renderCuratedTimelineStrip(sorted);

  // 10. Thống kê chung
  renderMastheadStats();
}

function updateSalonVietQR(amount, year) {
  const qrImg = document.getElementById("salon-vietqr-img");
  if (!qrImg) return;
  const memo = `SU CHIEN ${year}`.replace(/[^a-zA-Z0-9 ]/g, "");
  const qrUrl = `https://img.vietqr.io/image/${paymentConfig.bankBin}-${paymentConfig.bankAccount}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(memo)}&accountName=${encodeURIComponent(paymentConfig.accountHolder)}`;
  qrImg.src = qrUrl;

  document.getElementById("salon-qr-amount").textContent = formatVND(amount);
  document.getElementById("salon-qr-memo").textContent = memo;
}

function renderRetractedTheses(evt) {
  const container = document.getElementById("retracted-theses-list");
  if (!container) return;

  if (evt.history && evt.history.length > 0) {
    container.innerHTML = evt.history.map(h => `
      <div class="retracted-thesis-card">
        <div class="flex items-center justify-between text-xs text-stone-500 mb-1">
          <span class="font-semibold text-stone-700 line-through">${h.title}</span>
          <span class="font-mono text-stone-600">${formatVND(h.price)}</span>
        </div>
        <p class="text-xs text-stone-600 italic">"${h.summary}"</p>
        <span class="text-[11px] text-stone-400 block mt-1 font-sans">— Luận án của: ${h.author} (Bị phế truất ngày ${h.overwrittenAt || 'xưa kia'})</span>
      </div>
    `).join("");
  } else {
    container.innerHTML = `
      <p class="text-xs text-stone-400 italic py-2">
        Trang sử này chưa từng ghi nhận bản thảo đối lập nào. Mọi giả thuyết khác đều chưa đủ sức nặng để thách thức.
      </p>
    `;
  }
}

// ========================================================
// THANH NIÊN BIỂU GIÁM TUYỂN (CURATED TIMELINE STRIP)
// ========================================================

function renderCuratedTimelineStrip(sorted) {
  const container = document.getElementById("curated-timeline-strip");
  if (!container) return;

  container.innerHTML = sorted.map((evt, idx) => {
    const isActive = idx === currentEventIndex;
    const isHot = (evt.overwritesCount || 0) >= 3;

    return `
      <button
        type="button"
        onclick="selectMonographByIndex(${idx})"
        aria-pressed="${isActive}"
        class="curated-year-tab ${isActive ? 'active' : ''}"
        title="${evt.title}"
      >
        <span>${isHot ? '🔥' : '❖'}</span>
        <span>${evt.year}</span>
        ${isHot ? `<span class="text-[10px] ml-1 text-red-400 font-bold">(${evt.overwritesCount})</span>` : ''}
      </button>
    `;
  }).join("");

  const activeTab = container.children[currentEventIndex];
  if (activeTab) {
    activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }
}

function selectMonographByIndex(idx) {
  currentEventIndex = idx;
  playPageTurnSound();
  renderFeaturedMonograph();
}

function nextMonograph() {
  currentEventIndex++;
  playPageTurnSound();
  renderFeaturedMonograph();
}

function prevMonograph() {
  currentEventIndex--;
  playPageTurnSound();
  renderFeaturedMonograph();
}

// XÁC NHẬN LẬT ĐỔ BẢN THẢO TẠI REWRITING SALON
function handleSalonOverwrite(e) {
  e.preventDefault();
  const sorted = [...eventsData].sort((a, b) => a.year - b.year);
  const evt = sorted[currentEventIndex];
  if (!evt) return;

  const author = document.getElementById("salon-input-author").value.trim() || "Sử Gia Mới";
  const title = document.getElementById("salon-input-title").value.trim();
  const subtitle = document.getElementById("salon-input-subtitle").value.trim();
  const content = document.getElementById("salon-input-content").value.trim();
  const bid = parseInt(document.getElementById("salon-bid-input").value) || (evt.currentPrice + 20000);

  if (bid <= evt.currentPrice) {
    alert(`Khoản kinh phí bảo chứng phải vượt quá giá trị hiện hành (${formatVND(evt.currentPrice)})!`);
    return;
  }

  // 1. Chuyển sử cũ vào Tập Dã Sử Bị Bác Bỏ
  if (!evt.history) evt.history = [];
  evt.history.unshift({
    price: evt.currentPrice,
    author: evt.author,
    title: evt.title,
    summary: evt.summary || evt.subtitle,
    overwrittenAt: new Date().toLocaleDateString('vi-VN')
  });

  // 2. Ghi đè bằng Chuyên khảo mới
  evt.author = author;
  evt.title = title;
  evt.subtitle = subtitle || `Luận đề mới về biến cố năm ${evt.year}.`;
  evt.content = content;
  evt.summary = content.slice(0, 140) + "...";
  evt.currentPrice = bid;
  evt.overwritesCount = (evt.overwritesCount || 0) + 1;
  evt.updatedAt = new Date().toLocaleDateString('vi-VN');

  saveEvents(eventsData);

  // 3. Hiệu ứng trang trọng
  playStampSound();
  playVictoryTrumpet();
  triggerFineConfetti();

  renderFeaturedMonograph();
  showToast(`🏛️ Sử gia "${author}" đã lật đổ chính biên năm ${evt.year} với mức bảo chứng ${formatVND(bid)}!`, "war");
  document.getElementById("salon-overwrite-form").reset();
}

// Thử nghiệm con dấu triện son nảy mực
function triggerInteractiveSealDemo() {
  playStampSound();
  const seal = document.getElementById("mono-seal-target");
  if (seal) {
    seal.classList.remove("animate-seal-stamp");
    void seal.offsetWidth;
    seal.classList.add("animate-seal-stamp");
  }
  showToast("🔴 Đã đóng Con Dấu Triện Son Khâm Định!", "war");
}

function renderMastheadStats() {
  const totalEvents = eventsData.length;
  const totalBounty = eventsData.reduce((sum, evt) => sum + (evt.currentPrice || 0), 0);
  const totalOverwrites = eventsData.reduce((sum, evt) => sum + (evt.overwritesCount || 0), 0);

  const totalEl = document.getElementById("stat-masthead-events");
  const bountyEl = document.getElementById("stat-masthead-bounty");
  const overwritesEl = document.getElementById("stat-masthead-overwrites");

  if (totalEl) totalEl.textContent = `${totalEvents} Chuyên Luận`;
  if (bountyEl) bountyEl.textContent = formatVND(totalBounty);
  if (overwritesEl) overwritesEl.textContent = `${totalOverwrites} Lần Lật Đổ`;
}

// ========================================================
// KHỞI THẢO MỐC NĂM MỚI (NEW MONOGRAPH)
// ========================================================

function openNewMonographModal() {
  document.getElementById("new-monograph-modal").classList.remove("hidden");
}

function closeNewMonographModal() {
  document.getElementById("new-monograph-modal").classList.add("hidden");
}

function handleCreateMonograph(e) {
  e.preventDefault();
  const year = parseInt(document.getElementById("create-mono-year").value);
  const title = document.getElementById("create-mono-title").value.trim();
  const subtitle = document.getElementById("create-mono-subtitle").value.trim() || `Khảo luận sự kiện năm ${year}.`;
  const author = document.getElementById("create-mono-author").value.trim() || "Học Giả Ẩn Danh";
  const category = document.getElementById("create-mono-category").value;
  const content = document.getElementById("create-mono-content").value.trim();
  const price = parseInt(document.getElementById("create-mono-price").value) || 50000;

  let eraId = "near_future";
  if (year >= 2036 && year <= 2060) eraId = "tech_age";
  else if (year >= 2061 && year <= 2150) eraId = "space_age";
  else if (year >= 2151) eraId = "cosmic_age";

  const newEvt = {
    id: "evt_" + year + "_" + Date.now(),
    year: year,
    dateFormatted: `NĂM ${year}`,
    eraId: eraId,
    title: title,
    subtitle: subtitle,
    summary: content.slice(0, 130) + "...",
    content: content,
    artworkTitle: `Bản khắc số ${year % 100}: Biến cố khởi thủy năm ${year}`,
    artworkIcon: "🏛️",
    category: category,
    author: author,
    currentPrice: price,
    overwritesCount: 0,
    updatedAt: new Date().toLocaleDateString('vi-VN'),
    history: []
  };

  eventsData.push(newEvt);
  eventsData.sort((a, b) => a.year - b.year);
  saveEvents(eventsData);

  currentEventIndex = eventsData.findIndex(e => e.id === newEvt.id);
  if (currentEventIndex === -1) currentEventIndex = 0;

  playStampSound();
  triggerFineConfetti();
  closeNewMonographModal();
  renderFeaturedMonograph();
  showToast(`✨ Chuyên luận năm ${year} đã được công bố bởi ${author}!`, "war");
  document.getElementById("create-monograph-form").reset();
}

// Cài đặt tài khoản ngân hàng nhận tiền
function openConfigModal() {
  document.getElementById("config-modal").classList.remove("hidden");
  document.getElementById("cfg-bank-acc").value = paymentConfig.bankAccount;
  document.getElementById("cfg-holder").value = paymentConfig.accountHolder;
  const select = document.getElementById("cfg-bank-select");
  if (select && typeof CHRONICLE_BANKS !== "undefined") {
    select.innerHTML = CHRONICLE_BANKS.map(b => `
      <option value="${b.bin}" ${b.bin === paymentConfig.bankBin ? 'selected' : ''}>${b.shortName} - ${b.name}</option>
    `).join("");
  }
}

function closeConfigModal() {
  document.getElementById("config-modal").classList.add("hidden");
}

function saveConfigForm(e) {
  e.preventDefault();
  paymentConfig.bankBin = document.getElementById("cfg-bank-select").value;
  paymentConfig.bankAccount = document.getElementById("cfg-bank-acc").value.trim();
  paymentConfig.accountHolder = document.getElementById("cfg-holder").value.trim().toUpperCase();
  const found = CHRONICLE_BANKS.find(b => b.bin === paymentConfig.bankBin);
  if (found) paymentConfig.bankName = found.shortName;
  savePaymentConfig(paymentConfig);
  closeConfigModal();
  showToast("Đã lưu tài khoản bảo trợ sử quán!");
  renderFeaturedMonograph();
}

// Xuất file và In ấn
function printEditorialEdition() {
  window.print();
}

function exportEditorialMarkdown() {
  const sorted = [...eventsData].sort((a, b) => a.year - b.year);
  let md = `# THE CHRONICLER: ĐẠI VIỆT HƯ CẤU TOÀN THƯ\n## (ÉDITION D'ART • TẬP THỂ SỬ GIA)\n\n---\n\n`;
  sorted.forEach(evt => {
    md += `### ${evt.dateFormatted || 'NĂM ' + evt.year}: ${evt.title}\n`;
    md += `*${evt.subtitle || ''}*\n\n`;
    md += `> **Sử quan:** ${evt.author} | **Bảo chứng:** ${formatVND(evt.currentPrice)} | **Bộ môn:** ${evt.category || 'Chính sử'}\n\n`;
    md += `${evt.content || evt.summary}\n\n`;
    if (evt.history && evt.history.length > 0) {
      md += `#### Tài liệu tham khảo đã bị bác bỏ:\n`;
      evt.history.forEach(h => md += `- *"${h.title}"* của tác giả ${h.author} (${formatVND(h.price)})\n`);
      md += `\n`;
    }
    md += `---\n\n`;
  });
  const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `The-Chronicler-Editorial-Edition.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Đã tải xuống bản thảo chuyên khảo Markdown!");
}

function resetDefaultEvents() {
  if (confirm("Khôi phục lại dòng lịch sử nguyên bản?")) {
    saveEvents(INITIAL_EVENTS);
    currentEventIndex = 2;
    renderFeaturedMonograph();
    showToast("Đã khôi phục tập sử liệu ban đầu!");
  }
}

// ========================================================
// KHỞI CHẠY KHI TẢI TRANG
// ========================================================

window.addEventListener("DOMContentLoaded", () => {
  renderFeaturedMonograph();

  const bidInput = document.getElementById("salon-bid-input");
  if (bidInput) {
    bidInput.addEventListener("input", (e) => {
      const sorted = [...eventsData].sort((a, b) => a.year - b.year);
      const evt = sorted[currentEventIndex];
      if (!evt) return;
      const val = parseInt(e.target.value) || (evt.currentPrice + 20000);
      updateSalonVietQR(val, evt.year);
    });
  }
});
