// Danh sách các ngân hàng tại Việt Nam theo chuẩn NAPAS VietQR
const VIETNAM_BANKS = [
  { bin: "970422", code: "MB", shortName: "MBBank", name: "Ngân hàng TMCP Quân Đội" },
  { bin: "970436", code: "VCB", shortName: "Vietcombank", name: "Ngân hàng TMCP Ngoại Thương Việt Nam" },
  { bin: "970407", code: "TCB", shortName: "Techcombank", name: "Ngân hàng TMCP Kỹ Thương Việt Nam" },
  { bin: "970416", code: "ACB", shortName: "ACB", name: "Ngân hàng TMCP Á Châu" },
  { bin: "970432", code: "VPB", shortName: "VPBank", name: "Ngân hàng TMCP Việt Nam Thịnh Vượng" },
  { bin: "970418", code: "BIDV", shortName: "BIDV", name: "Ngân hàng TMCP Đầu Tư và Phát Triển Việt Nam" },
  { bin: "970415", code: "CTG", shortName: "VietinBank", name: "Ngân hàng TMCP Công Thương Việt Nam" },
  { bin: "970423", code: "TPB", shortName: "TPBank", name: "Ngân hàng TMCP Tiên Phong" },
  { bin: "970405", code: "VBA", shortName: "Agribank", name: "Ngân hàng Nông nghiệp và PTNT Việt Nam" },
  { bin: "970441", code: "VIB", shortName: "VIB", name: "Ngân hàng TMCP Quốc tế Việt Nam" },
  { bin: "970403", code: "STB", shortName: "Sacombank", name: "Ngân hàng TMCP Sài Gòn Thương Tín" },
  { bin: "970443", code: "SHB", shortName: "SHB", name: "Ngân hàng TMCP Sài Gòn - Hà Nội" },
  { bin: "970437", code: "HDB", shortName: "HDBank", name: "Ngân hàng TMCP Phát Triển TP.HCM" },
  { bin: "970426", code: "MSB", shortName: "MSB", name: "Ngân hàng TMCP Hàng Hải Việt Nam" },
  { bin: "970448", code: "OCB", shortName: "OCB", name: "Ngân hàng TMCP Phương Đông" },
  { bin: "970440", code: "SEAB", shortName: "SeABank", name: "Ngân hàng TMCP Đông Nam Á" },
  { bin: "970454", code: "TIMO", shortName: "Timo (BVBank)", name: "Ngân hàng Bản Việt - Timo" },
  { bin: "546034", code: "CAKE", shortName: "Cake by VPBank", name: "Ngân hàng số Cake by VPBank" },
  { bin: "970449", code: "LPB", shortName: "LPBank", name: "Ngân hàng TMCP Lộc Phát Việt Nam" },
  { bin: "970452", code: "KLB", shortName: "Kienlongbank", name: "Ngân hàng TMCP Kiên Long" },
  { bin: "970428", code: "NAB", shortName: "Nam A Bank", name: "Ngân hàng TMCP Nam Á" },
  { bin: "970429", code: "SCB", shortName: "SCB", name: "Ngân hàng TMCP Sài Gòn" },
  { bin: "970414", code: "OJB", shortName: "OceanBank", name: "Ngân hàng Thương mại TNHH MTV Đại Dương" }
];

