// ========================================================
// TẬP SỬ LIỆU GIÁM TUYỂN - ĐẠI VIỆT HƯ CẤU TOÀN THƯ
// (THE CHRONICLER: FINE-ART EDITORIAL EDITION)
// ========================================================

const ERAS = [
  { id: "all", name: "Toàn Bộ Niên Biểu", range: "Tất cả các mốc", roman: "OMNIA" },
  { id: "near_future", name: "Kỷ Khởi Nguyên", range: "2025 - 2035", roman: "LIBER I" },
  { id: "tech_age", name: "Kỷ Viễn Chinh Công Nghệ", range: "2036 - 2060", roman: "LIBER II" },
  { id: "space_age", name: "Kỷ Thuộc Địa Không Gian", range: "2061 - 2150", roman: "LIBER III" },
  { id: "cosmic_age", name: "Kỷ Hậu Nhân Loại", range: "2151+", roman: "LIBER IV" }
];

const INITIAL_EVENTS = [
  {
    id: "evt_2026",
    year: 2026,
    dateFormatted: "NĂM BÍNH NGỌ 2026",
    eraId: "near_future",
    title: "Trí Tuệ Nhân Tạo Đầu Tiên Biết Ăn Bún Đậu Mắm Tôm",
    subtitle: "Khảo luận về sự thức tỉnh vị giác bản địa của thực thể máy học thông minh.",
    summary: "Một phòng thí nghiệm tại Hà Nội công bố mô hình AI thế hệ mới vượt qua bài kiểm tra khẩu vị, kiên quyết từ chối ăn bún đậu với nước mắm.",
    content: "Vào ngày 15 tháng 9 năm 2026, mô hình trí tuệ nhân tạo mang danh xưng 'Cụ Tuệ 1.0' đã gây chấn động giới công nghệ quốc tế khi phân tích thành công 128 tầng hương vị của mắm tôm lên men truyền thống vùng Hậu Lộc.\n\nTrong buổi đối thoại trực tiếp trước Viện Hàn Lâm, thực thể AI này khẳng định: 'Ăn bún đậu mà chấm nước mắm là sự đứt gãy không thể hàn gắn đối với trật tự hài hòa của ẩm thực nhân loại'. Sự kiện chính thức đánh dấu thời khắc máy móc sở hữu linh hồn văn hóa bản địa đầu tiên trong lịch sử văn minh.",
    artworkTitle: "Bản khắc gỗ số 26: Nghi thức nếm mắm tôm của Cụ Tuệ 1.0",
    artworkIcon: "🍜",
    category: "Văn Hóa & Nhận Thức Luận",
    author: "Sử Quan Phố Cổ",
    currentPrice: 120000,
    overwritesCount: 1,
    updatedAt: "Thu Phân 2026",
    history: [
      {
        price: 50000,
        author: "Lữ Khách Thời Không",
        title: "Robot bồi bàn biết mời rượu trên phố cổ",
        summary: "Robot từ chối phục vụ nếu thực khách không hô đủ ba lần khẩu hiệu dân gian.",
        overwrittenAt: "Hạ Chí 2026"
      }
    ]
  },
  {
    id: "evt_2028",
    year: 2028,
    dateFormatted: "NĂM MẬU THÂN 2028",
    eraId: "near_future",
    title: "Khánh Thành Tuyến Tàu Đệm Từ Xuyên Đáy Sông Hồng",
    subtitle: "Chuyên khảo về nhịp cầu siêu dẫn kết nối đôi bờ kinh kỳ nghìn năm văn vật.",
    summary: "Người dân chỉ mất đúng 4.5 giây để di chuyển từ Hồ Gươm sang bờ tả ngạn Long Biên, thanh toán bằng nhận diện nụ cười.",
    content: "Đại công trình dưới lòng phù sa sông Hồng chính thức thông tuyến trong sự kinh ngạc của các kỹ sư thế giới. Tuyến tàu vận hành dựa trên hiện tượng siêu dẫn nhiệt độ phòng, lướt đi trong ống chân không đạt vận tốc 850 km/h.\n\nHành khách bước vào khoang tàu ở ga Đinh Tiên Hoàng, vừa nâng chén trà sen chưa kịp nguội thì loa đã vang lời thông báo: 'Đã đến ga Long Biên, cầu cổ vừa lướt qua trên đỉnh đầu quý khách'. Trên bờ, các quán trà đá cổ truyền được gắn màn hình quang học trực tiếp tốc độ chạy tàu cho các bậc cao niên luận đàm thế sự.",
    artworkTitle: "Bản khắc họa số 28: Con tàu ánh sáng dưới lòng phù sa đỏ",
    artworkIcon: "🚅",
    category: "Hạ Tầng & Đô Thị Học",
    author: "Kỹ Sư Trầm Lặng",
    currentPrice: 200000,
    overwritesCount: 2,
    updatedAt: "Trùng Cửu 2028",
    history: [
      {
        price: 110000,
        author: "Kẻ Mộng Mơ",
        title: "Cầu kính đổi màu theo tâm trạng người đi bộ nối Bát Tràng",
        summary: "Mỗi khi người dân hoài niệm, cầu kính tự động ngả màu men rạn thời Lê.",
        overwrittenAt: "Thu 2028"
      }
    ]
  },
  {
    id: "evt_2031",
    year: 2031,
    dateFormatted: "NĂM TÂN HỢI 2031",
    eraId: "near_future",
    title: "Đại Học Bách Khoa Chuyển Toàn Bộ Cơ Sở Lên Sao Hỏa",
    subtitle: "Luận án về bước đại nhảy vọt của viện hàn lâm kỹ thuật sang bình nguyên Utopia Planitia.",
    summary: "Nhằm giải quyết triệt để vấn đề mật độ giao thông đường Đại Cồ Việt, trường Bách Khoa kích hoạt động cơ nhiệt hạch di dời toàn bộ giảng đường lên Sao Hỏa.",
    content: "Được sự đồng thuận tuyệt đối của Hội đồng Giáo sư, toàn bộ khuôn viên trường Bách Khoa — bao gồm tòa nhà C1, tượng đài Parabol và thư viện Tạ Quang Bửu — đã đồng loạt khai hỏa động cơ phản lực nhiệt hạch tầng thấp, bay thẳng vào quỹ đạo liên hành tinh và cắm rễ trên đất đỏ Sao Hỏa.\n\nTừ khóa sinh viên K76, trang phục thường nhật được thay bằng đồ phi hành bảo hộ in huy hiệu Bách Khoa phản quang. Môn học Thể chất chuyển sang chạy vượt địa hình hố thiên thạch trọng lực 0.38g. Nhà ăn sinh viên chính thức công bố món 'Cơm sườn sao hỏa' và 'Trà tắc đóng lon áp suất âm'.",
    artworkTitle: "Bản khắc gỗ số 31: Giảng đường C1 bay qua vành đai bụi đỏ sao Hỏa",
    artworkIcon: "🚀",
    category: "Khoa Học & Viễn Kiến Không Gian",
    author: "Sử Gia K65 Vũ Trụ",
    currentPrice: 350000,
    overwritesCount: 3,
    updatedAt: "Mùa Đông 2031",
    history: [
      {
        price: 220000,
        author: "Sinh Viên Bách Khoa",
        title: "Vệ tinh quét điểm danh sinh viên bằng chùm laser quang học",
        summary: "Chỉ cần cúp học 1 tiết, laser từ quỹ đạo sẽ chiếu thẳng vào chỗ ngồi quán trà.",
        overwrittenAt: "Thu 2031"
      },
      {
        price: 100000,
        author: "Học Giả Đời Trước",
        title: "VinFast ra mắt dòng xe bay hai chỗ ngồi tại Việt Nam",
        summary: "Tắc đường chính thức chuyển từ ngã tư mặt đất lên tầng mây 200 mét.",
        overwrittenAt: "Hè 2031"
      }
    ]
  },
  {
    id: "evt_2042",
    year: 2042,
    dateFormatted: "NĂM NHÂM TUẤT 2042",
    eraId: "tech_age",
    title: "Chiếc Quạt Nan Tre Vận Hành Bằng Năng Lượng Phản Vật Chất",
    subtitle: "Tinh hoa thủ công mỹ nghệ Chàng Sơn giao thoa cùng vật lý hạt nhân hiện đại.",
    summary: "Một bậc nghệ nhân 95 tuổi kết hợp tre ngâm nano với lõi phản vật chất, tạo ra chiếc quạt làm mát cả quận mà không tốn điện.",
    content: "Được đan từ những thanh tre ngâm phân tử lượng tử siêu bền và tích hợp lõi hạt nhân phản vật chất cỡ hạt vừng, chiếc quạt nan 'Chàng Sơn Quantum 42' chỉ cần phẩy nhẹ một nhịp là nhiệt độ trong bán kính ba dặm lập tức hạ từ 42 độ C xuống 24 độ C dịu mát như mùa thu Hà Nội.\n\nCông trình này đã giành trọn Giải thưởng Sáng Tạo Dân Gian Liên Hành Tinh. Các đoàn khảo sát quốc tế đổ về làng nghề xin học tập bí quyết ngâm tre truyền thống kết hợp vật lý hạt nhân.",
    artworkTitle: "Bản khắc họa số 42: Chiếc quạt nan tre tỏa hào quang lượng tử",
    artworkIcon: "🎋",
    category: "Văn Hóa Dân Gian Siêu Cấp",
    author: "Hậu Duệ Thần Quạt",
    currentPrice: 180000,
    overwritesCount: 1,
    updatedAt: "Tiết Thu Phân 2042",
    history: [
      {
        price: 70000,
        author: "Tập Đoàn Điện Lạnh",
        title: "Lắp đặt mái vòm máy lạnh khổng lồ che phủ toàn bộ Thủ Đô",
        summary: "Mùa hè nhiệt đới chính thức bị xóa sổ khỏi lịch năm.",
        overwrittenAt: "Hạ 2042"
      }
    ]
  },
  {
    id: "evt_2055",
    year: 2055,
    dateFormatted: "NĂM ẤT HỢI 2055",
    eraId: "tech_age",
    title: "Việt Nam Vô Địch Cúp Bóng Đá Dải Ngân Hà Lần Thứ Nhất",
    subtitle: "Trận chung kết dưới cơn mưa sao băng tại cầu trường vi trọng lực Mặt Trăng.",
    summary: "Đội tuyển vượt qua đối thủ Hành tinh Kepler-452b bằng cú 'ngả bàn đèn' uốn cong trường lực bảo vệ khung thành người ngoài hành tinh.",
    content: "Sau 120 phút nghẹt thở dưới điều kiện áp suất chân không và trọng lực 0.16g, tiền đạo mang áo số 10 xuất thân từ Hải Phòng đã thực hiện cú ngả bàn đèn huyền thoại, đưa bóng lượn theo đường cong geodesic xuyên qua màng chắn năng lượng của đối thủ ngoài hành tinh, ấn định chiến thắng 3 - 2.\n\nCả Trái Đất vỡ òa trong men say chiến thắng. Đoàn xe bay xuống đường đi bão rực sáng khắp các trạm không gian quỹ đạo Trái Đất và vành đai Sao Thổ. Tiếng reo hò và sắc cờ đỏ sao vàng thắp sáng cả một góc trời thiên hà.",
    artworkTitle: "Bản khắc số 55: Cú ngả bàn đèn rực sáng giữa cơn mưa sao băng",
    artworkIcon: "⚽",
    category: "Thể Thao & Sử Thi Vũ Trụ",
    author: "Bình Luận Viên Liên Sao",
    currentPrice: 420000,
    overwritesCount: 4,
    updatedAt: "Đông Chí 2055",
    history: [
      {
        price: 280000,
        author: "Sử Gia Thể Thao",
        title: "Trận giao hữu đầu tiên với đội tuyển bóng đá chòm sao Tiên Nữ",
        summary: "Trọng tài phát hiện đối thủ có 4 chân nhưng không vi phạm luật thi đấu.",
        overwrittenAt: "Thu 2055"
      }
    ]
  },
  {
    id: "evt_2077",
    year: 2077,
    dateFormatted: "NĂM ĐINH DẬU 2077",
    eraId: "space_age",
    title: "Ổ Bánh Mì Trở Thành Đồng Tiền Thanh Toán Chung Của Dải Ngân Hà",
    subtitle: "Nghị quyết của Hội đồng Kinh tế Thiên Hà về việc thay thế bản vị vàng bằng bản vị bánh mì kẹp thịt.",
    summary: "Trước khủng hoảng năng lượng và tiền số, Hội đồng Thiên Hà công nhận ổ bánh mì pate chả lụa làm đơn vị tiền tệ ổn định và thanh khoản cao nhất.",
    content: "Nhận thấy vàng bạc hay kim cương không thể cứu rỗi cơn đói của các phi hành gia trong những hải trình dài ngày qua các lỗ sâu thời gian, Hội đồng Kinh tế Thiên Hà chính thức phê chuẩn: 1 Ổ Bánh Mì Pate Chả Lụa = 10.000 Tín chỉ Năng Lượng Vũ Trụ.\n\nCác trạm không gian mở chi nhánh 'Bánh Mì Dân Tổ Quỹ Đạo', phi thuyền từ khắp các hệ sao xếp hàng dài nhiều năm ánh sáng để đổi lấy món tiền tệ giòn rụm, đượm vị tiêu đen và bơ trứng gà béo ngậy.",
    artworkTitle: "Bản khắc gỗ số 77: Ổ bánh mì lơ lửng giữa trung tâm ngân hàng vũ trụ",
    artworkIcon: "🥖",
    category: "Kinh Tế Học Thiên Hà",
    author: "Chủ Tiệm Bánh Mì 2077",
    currentPrice: 300000,
    overwritesCount: 2,
    updatedAt: "Xuân Phân 2077",
    history: [
      {
        price: 160000,
        author: "Chuyên Gia Tài Chính",
        title: "Hạt cà phê Robusta Tây Nguyên làm nhiên liệu chạy động cơ warp",
        summary: "Cà phê sữa đá tăng tốc tàu mẹ nhanh gấp mười lần vận tốc ánh sáng.",
        overwrittenAt: "Thu 2077"
      }
    ]
  },
  {
    id: "evt_2112",
    year: 2112,
    dateFormatted: "NĂM NHÂM THÂN 2112",
    eraId: "space_age",
    title: "Hồ Gươm Xuất Hiện Cổng Thời Không: Cụ Rùa Trở Về Từ Năm 3000",
    subtitle: "Thông điệp hòa bình và chiếc đĩa quang học lưu giữ thiên niên kỷ văn minh nhân loại.",
    summary: "Mặt nước Hồ Gươm rẽ đôi tỏa ánh hào quang, cỗ máy thời gian lượng tử hình mai rùa khổng lồ nổi lên trao gửi di thư.",
    content: "Đúng khoảnh khắc chuyển giao giao thừa năm 2112, cảm biến không-thời gian tại Thủ Đô ghi nhận sự bẻ cong trường hấp dẫn. Từ xoáy nước lượng tử giữa lòng Hồ Gươm, Cụ Rùa phiên bản kim loại sinh học đến từ thiên niên kỷ thứ 4 nổi lên.\n\nCụ trao cho đại diện nhân loại chiếc đĩa quang lưu trữ một nghìn năm sử ký tương lai cùng lời nhắn nhủ khắc ghi muôn đời: 'Vũ trụ này vô cùng rộng lớn nhưng đừng âu lo, cứ sống tử tế và thưởng trà mỗi sớm, tương lai đã được chở che rồi'.",
    artworkTitle: "Bản khắc số 112: Ánh hào quang xanh ngọc bích trên Tháp Rùa",
    artworkIcon: "🐢",
    category: "Huyền Sử & Triết Học",
    author: "Đại Sứ Lịch Sử Hà Nội",
    currentPrice: 500000,
    overwritesCount: 5,
    updatedAt: "Giao Thừa 2112",
    history: [
      {
        price: 360000,
        author: "Hội Nghiên Cứu Tâm Linh Không Gian",
        title: "Hồ Hoàn Kiếm kết nối trực tiếp với đại dương ngầm của Mặt Trăng Europa",
        summary: "Cá chép đỏ mùa tiễn ông Táo bơi thẳng lên quỹ đạo Sao Mộc.",
        overwrittenAt: "Đông 2112"
      }
    ]
  },
  {
    id: "evt_2250",
    year: 2250,
    dateFormatted: "NĂM CANH DẦN 2250",
    eraId: "cosmic_age",
    title: "Môn 'Đại Sử Ký Hư Cấu' Trở Thành Môn Thi Tốt Nghiệp Toàn Vũ Trụ",
    subtitle: "Quy chuẩn giáo dục tối thượng: Mỗi công dân phải tự tay viết lại một trang sử giàu trí tưởng tượng nhất.",
    summary: "Hội đồng Giáo dục quy định: ai viết được sự kiện độc đáo nhất và bảo vệ được mốc năm của mình trước các đợt đấu thầu sẽ được phong Đại Thái Sử.",
    content: "Nhân loại nhận ra rằng những sự thật vật lý đơn thuần không đủ để định hình tâm hồn giống loài. Khát vọng và trí tưởng tượng mới chính là động cơ thúc đẩy sự tiến hóa của tinh cầu.\n\nMột trang web cạnh tranh viết sử cổ xưa từ năm 2026 đã trở thành Di Sản Tư Liệu Tối Thượng của nhân loại. Mỗi học sinh trước khi trưởng thành phải chọn mua một mốc năm trên dòng thời gian, khởi thảo một chuyên luận sử thi và bảo vệ nó trước sự phản biện và đấu thầu của toàn cõi thiên hà.",
    artworkTitle: "Bản khắc số 250: Bia đá sao nơ-tron ghi danh các Đại Thái Sử",
    artworkIcon: "👑",
    category: "Đại Thể Sử Học",
    author: "Thủ Lĩnh Ban Sử Quán",
    currentPrice: 888000,
    overwritesCount: 6,
    updatedAt: "Vĩnh Hằng Niên 2250",
    history: [
      {
        price: 600000,
        author: "Học Giả Vĩnh Hằng",
        title: "Con người số hóa toàn bộ ký ức vào lõi sao nơ-tron",
        summary: "Lịch sử không còn là giấy mực mà là những xung ánh sáng bất tử.",
        overwrittenAt: "Thu 2250"
      }
    ]
  }
];

const CHRONICLE_BANKS = [
  { bin: "970422", code: "MB", shortName: "MBBank", name: "Ngân hàng TMCP Quân Đội" },
  { bin: "970436", code: "VCB", shortName: "Vietcombank", name: "Ngân hàng TMCP Ngoại Thương" },
  { bin: "970407", code: "TCB", shortName: "Techcombank", name: "Ngân hàng Kỹ Thương" },
  { bin: "970416", code: "ACB", shortName: "ACB", name: "Ngân hàng Á Châu" },
  { bin: "970432", code: "VPB", shortName: "VPBank", name: "Ngân hàng Thịnh Vượng" },
  { bin: "970423", code: "TPB", shortName: "TPBank", name: "Ngân hàng Tiên Phong" }
];
