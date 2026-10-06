'use strict';

const biographyStages = [
  {
    period: '1890–1911',
    title: 'Tuổi trẻ và hình thành chí hướng',
    imageIndex: 8,
    source: NHA,

    overview:
  'Giai đoạn 1890–1911 là thời kỳ hình thành những nhận thức đầu tiên về quê hương, đất nước và con người trong cuộc đời Nguyễn Tất Thành. ' +
  'Sinh ra tại Nghệ An, lớn lên trong một gia đình nhà nho có truyền thống yêu nước, Người sớm được chứng kiến cuộc sống khó khăn của nhân dân dưới chế độ thuộc địa. ' +
  'Những năm học tập tại Huế, thời gian dạy học ở Phan Thiết và quá trình tiếp xúc với nhiều tầng lớp trong xã hội đã từng bước mở rộng nhận thức của Nguyễn Tất Thành về tình cảnh đất nước. ' +
  'Trong bối cảnh nhiều phong trào yêu nước cuối thế kỷ XIX và đầu thế kỷ XX chưa đạt được mục tiêu, Người dần hình thành suy nghĩ cần phải tìm một hướng đi mới. ' +
  'Ngày 5 tháng 6 năm 1911, quyết định rời Bến Nhà Rồng ra nước ngoài đã đánh dấu bước ngoặt lớn, mở đầu hành trình tìm kiếm con đường giải phóng dân tộc kéo dài nhiều năm sau đó.',

events: [
  [
    '19/05/1890',
    'Nguyễn Sinh Cung ra đời',
    'Nguyễn Sinh Cung sinh tại làng Hoàng Trù, huyện Nam Đàn, tỉnh Nghệ An, trong một gia đình nhà nho có truyền thống yêu nước.',
    'Nguyễn Sinh Cung, sau này là Chủ tịch Hồ Chí Minh, sinh ngày 19 tháng 5 năm 1890 tại làng Hoàng Trù, thuộc huyện Nam Đàn, tỉnh Nghệ An. Cha là ông Nguyễn Sinh Sắc, một nhà nho có học vấn và tư tưởng tiến bộ; mẹ là bà Hoàng Thị Loan, người phụ nữ chịu thương chịu khó, có ảnh hưởng sâu sắc đến tuổi thơ của Người. Quê nội của gia đình là làng Kim Liên, thường được gọi là làng Sen. Đây là vùng đất có truyền thống hiếu học và yêu nước. Tuổi thơ của Nguyễn Sinh Cung diễn ra trong bối cảnh Việt Nam đang chịu sự thống trị của thực dân Pháp, đời sống của đông đảo nhân dân còn nhiều khó khăn. Môi trường gia đình, quê hương và những biến động của xã hội đương thời đã góp phần hình thành những nhận thức đầu tiên của Người về đất nước, con người và tinh thần yêu nước.'
  ],
  [
    '1901',
    'Mang tên Nguyễn Tất Thành',
    'Nguyễn Sinh Cung được đổi tên thành Nguyễn Tất Thành, cái tên gắn với thời niên thiếu và những năm đầu trên con đường tìm kiếm lý tưởng.',
    'Khoảng năm 1901, sau khi ông Nguyễn Sinh Sắc đỗ Phó bảng, gia đình trở về sinh sống tại quê nội Kim Liên. Trong giai đoạn này, Nguyễn Sinh Cung được đổi tên thành Nguyễn Tất Thành. Tên gọi này gắn với Người trong suốt những năm học tập, trưởng thành và chuẩn bị cho hành trình ra đi tìm đường cứu nước. Thời niên thiếu tại quê hương giúp Nguyễn Tất Thành tiếp tục tiếp xúc với truyền thống văn hóa, tinh thần hiếu học và lòng yêu nước của người dân xứ Nghệ. Đồng thời, những câu chuyện về các phong trào chống Pháp, về cuộc sống khó khăn của nhân dân và những biến động trong xã hội Việt Nam đầu thế kỷ XX cũng tác động đến suy nghĩ của Người. Đây là giai đoạn những nhận thức ban đầu về trách nhiệm đối với quê hương và đất nước dần được hình thành rõ nét hơn.'
  ],
  [
    '1906–1909',
    'Sinh sống và học tập tại Huế',
    'Theo cha vào Huế, Nguyễn Tất Thành tiếp tục học tập và từng theo học tại Trường Quốc Học Huế, một trong những trung tâm giáo dục quan trọng lúc bấy giờ.',
    'Trong những năm 1906–1909, Nguyễn Tất Thành theo cha vào Huế và tiếp tục quá trình học tập. Người từng học tại Trường Quốc Học Huế, nơi quy tụ nhiều học sinh có tư tưởng tiến bộ và là một trung tâm giáo dục có vị trí quan trọng ở Trung Kỳ. Thời gian sinh sống tại Huế giúp Nguyễn Tất Thành có điều kiện quan sát rõ hơn đời sống xã hội dưới chế độ thuộc địa. Người chứng kiến sự khác biệt giữa các tầng lớp trong xã hội, cuộc sống khó khăn của nhân dân và những tác động của bộ máy cai trị thực dân. Đây cũng là giai đoạn nhiều phong trào yêu nước, cải cách và chống Pháp diễn ra sôi nổi. Việc tiếp xúc với môi trường học tập, đời sống xã hội và những tư tưởng mới góp phần mở rộng tầm nhìn của Nguyễn Tất Thành, đồng thời làm sâu sắc hơn suy nghĩ về con đường mà dân tộc Việt Nam cần lựa chọn để giành lại độc lập.'
  ],
  [
    '1910',
    'Dạy học tại Trường Dục Thanh',
    'Nguyễn Tất Thành đến Phan Thiết và giảng dạy tại Trường Dục Thanh, vừa dạy học vừa tiếp tục tìm hiểu tình hình đất nước và đời sống nhân dân.',
    'Năm 1910, Nguyễn Tất Thành đến Phan Thiết và tham gia giảng dạy tại Trường Dục Thanh, một ngôi trường do các sĩ phu yêu nước thành lập nhằm truyền bá tinh thần học tập và tư tưởng tiến bộ. Tại đây, Người tham gia giảng dạy cho học sinh và tiếp tục tìm hiểu tình hình xã hội, đời sống của người dân cũng như các phong trào yêu nước đương thời. Thời gian ở Dục Thanh tuy không dài nhưng có ý nghĩa như một chặng chuyển tiếp trong quá trình trưởng thành về nhận thức. Người có cơ hội tiếp xúc với những người có tinh thần yêu nước, đồng thời quan sát những hạn chế của các con đường cứu nước đã xuất hiện trước đó. Sau thời gian này, Nguyễn Tất Thành rời Phan Thiết vào Sài Gòn, nơi Người chuẩn bị cho quyết định quan trọng nhất của tuổi trẻ: rời Việt Nam để trực tiếp tìm hiểu thế giới.'
  ],
  [
    '05/06/1911',
    'Ra đi tìm đường cứu nước',
    'Từ Bến Nhà Rồng, Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville với tên Văn Ba, mở đầu hành trình ra nước ngoài tìm con đường giải phóng dân tộc.',
    'Ngày 5 tháng 6 năm 1911, tại Bến Nhà Rồng ở Sài Gòn, Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville với tên Văn Ba và làm công việc phụ bếp. Đây là quyết định đánh dấu bước ngoặt đặc biệt quan trọng trong cuộc đời Người. Trước đó, nhiều phong trào yêu nước như Cần Vương, Đông Du hay các khuynh hướng cải cách đầu thế kỷ XX đều chưa thể giúp Việt Nam giành được độc lập. Nguyễn Tất Thành cho rằng cần phải tìm hiểu trực tiếp các nước phương Tây, tìm hiểu nguyên nhân vì sao họ phát triển mạnh và đồng thời tìm kiếm một con đường mới cho dân tộc. Việc rời Bến Nhà Rồng không chỉ đơn thuần là một chuyến đi xa mà còn mở đầu cho quá trình nhiều năm lao động, quan sát, học hỏi và hoạt động chính trị tại nhiều quốc gia. Chính hành trình này về sau tạo nền tảng quan trọng cho việc hình thành tư tưởng và con đường cách mạng của Hồ Chí Minh.'
  ]
]
  },

  {
period: '1911–1930',
title: 'Hành trình tìm đường cứu nước',
imageIndex: 1,
source: BIO,

overview:
'Giai đoạn 1911–1930 là chặng đường đặc biệt quan trọng trong cuộc đời và sự nghiệp của Nguyễn Ái Quốc. ' +
'Sau khi rời Bến Nhà Rồng năm 1911, Người đi qua nhiều quốc gia và châu lục, vừa lao động để sinh sống, vừa quan sát đời sống xã hội, tìm hiểu các phong trào chính trị và con đường phát triển của nhiều dân tộc trên thế giới. ' +
'Từ một người thanh niên yêu nước đang tìm kiếm phương hướng cứu nước, Nguyễn Tất Thành từng bước tham gia vào các hoạt động chính trị tại Pháp, tiếp cận chủ nghĩa Mác – Lênin và phong trào cộng sản quốc tế. ' +
'Những hoạt động tại Pháp, Liên Xô và Trung Quốc giúp Nguyễn Ái Quốc từng bước xác định con đường giải phóng dân tộc, đồng thời chuẩn bị về tư tưởng, tổ chức và đội ngũ cán bộ cho cách mạng Việt Nam. ' +
'Quá trình này culminated bằng Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930 và sự ra đời của Đảng Cộng sản Việt Nam, đánh dấu một bước ngoặt quan trọng của phong trào cách mạng Việt Nam.',

events: [
[
'1911–1917',
'Đi qua nhiều quốc gia và châu lục',
'Sau khi rời Việt Nam, Nguyễn Tất Thành bắt đầu hành trình qua nhiều quốc gia ở châu Phi, châu Mỹ và châu Âu, vừa lao động vừa tìm hiểu đời sống và xã hội các nước.',
'Sau khi rời Bến Nhà Rồng ngày 5 tháng 6 năm 1911, Nguyễn Tất Thành bắt đầu một hành trình dài qua nhiều quốc gia và vùng lãnh thổ. Trên hành trình đó, Người làm nhiều công việc khác nhau để tự nuôi sống bản thân và có điều kiện trực tiếp quan sát đời sống của người lao động. Việc đi qua nhiều xã hội khác nhau giúp Nguyễn Tất Thành nhận thấy rằng bên cạnh sự phát triển của các nước phương Tây vẫn tồn tại những khoảng cách giàu nghèo, bất bình đẳng xã hội và tình trạng áp bức đối với người lao động cũng như các dân tộc thuộc địa. Những trải nghiệm thực tế này có ý nghĩa quan trọng đối với quá trình hình thành nhận thức chính trị của Người. Thay vì chỉ nhìn vấn đề Việt Nam trong phạm vi một quốc gia thuộc địa, Nguyễn Tất Thành từng bước nhận thấy mối liên hệ giữa cuộc đấu tranh giành độc lập của dân tộc Việt Nam với cuộc đấu tranh của những dân tộc bị áp bức và người lao động trên thế giới.'
],
[
'1917',
'Trở lại Pháp',
'Nguyễn Tất Thành trở lại Pháp, sinh sống chủ yếu tại Paris và bắt đầu tham gia ngày càng rõ nét vào các hoạt động chính trị.',
'Khoảng cuối năm 1917, Nguyễn Tất Thành trở lại Pháp và hoạt động chủ yếu tại Paris. Đây là thời điểm Chiến tranh thế giới thứ nhất đang đi đến giai đoạn cuối và tại châu Âu xuất hiện nhiều biến động lớn về chính trị, xã hội. Tại Paris, Người có điều kiện tiếp xúc với những người Việt Nam yêu nước đang sinh sống ở Pháp, các tổ chức của công nhân và nhiều lực lượng chính trị tiến bộ. Người tham gia các cuộc họp, thảo luận, tìm đọc báo chí và nghiên cứu các quan điểm chính trị khác nhau nhằm tìm câu trả lời cho vấn đề độc lập của Việt Nam. Nếu những năm trước đó chủ yếu là quá trình quan sát và trải nghiệm thực tế thì thời gian tại Pháp đánh dấu bước phát triển mới: Nguyễn Tất Thành bắt đầu tham gia vào đời sống chính trị một cách có tổ chức và từng bước đưa vấn đề của Việt Nam ra trước dư luận quốc tế.'
],
[
'18/06/1919',
'Yêu sách của nhân dân An Nam',
'Dưới tên Nguyễn Ái Quốc, bản Yêu sách của nhân dân An Nam được gửi tới Hội nghị Hòa bình Versailles nhằm đề nghị các quyền tự do và bình đẳng cơ bản cho người Việt Nam.',
'Sau Chiến tranh thế giới thứ nhất, các nước thắng trận tổ chức Hội nghị Hòa bình Versailles để thảo luận về trật tự thế giới mới. Nhân dịp này, ngày 18 tháng 6 năm 1919, dưới tên Nguyễn Ái Quốc, bản Yêu sách của nhân dân An Nam được gửi tới hội nghị. Bản yêu sách gồm tám điểm, tập trung vào những quyền cơ bản như ân xá cho tù chính trị, cải cách nền pháp lý, quyền tự do báo chí, tự do hội họp, tự do cư trú và quyền có đại biểu người bản xứ trong cơ quan lập pháp. Những yêu cầu lúc đó chưa đặt vấn đề giành độc lập hoàn toàn mà chủ yếu đề nghị các quyền tự do, dân chủ và bình đẳng tối thiểu cho người Việt Nam. Mặc dù các yêu cầu không được Hội nghị Versailles chấp nhận, sự kiện đã giúp cái tên Nguyễn Ái Quốc được biết đến rộng rãi hơn trong cộng đồng người Việt tại Pháp và trong một bộ phận dư luận quốc tế. Đây cũng là dấu mốc cho thấy Nguyễn Ái Quốc bắt đầu sử dụng diễn đàn chính trị quốc tế để lên tiếng về vấn đề Việt Nam.'
],
[
'1920',
'Tiếp cận tư tưởng của Lênin',
'Nguyễn Ái Quốc đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lênin và tìm thấy những định hướng mới cho vấn đề giải phóng dân tộc.',
'Năm 1920, trong quá trình tìm kiếm một con đường có thể giải quyết vấn đề độc lập của Việt Nam, Nguyễn Ái Quốc tiếp cận Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lênin. Những quan điểm trong tài liệu này đặc biệt chú trọng tới quyền tự quyết của các dân tộc và vai trò của phong trào giải phóng tại các nước thuộc địa. Đối với Nguyễn Ái Quốc, đây là một bước tiến quan trọng trong quá trình tìm kiếm lý luận cho con đường cứu nước. Từ những trải nghiệm thực tế có được qua nhiều năm sống ở nước ngoài, Người từng bước đi đến nhận thức rằng cuộc đấu tranh giải phóng dân tộc Việt Nam có thể gắn với phong trào cách mạng của người lao động và các dân tộc thuộc địa trên thế giới. Sự kiện này tạo cơ sở tư tưởng cho những lựa chọn chính trị quan trọng của Người vào cuối năm 1920.'
],
[
'12/1920',
'Tham dự Đại hội Tours',
'Nguyễn Ái Quốc tham dự Đại hội Tours của Đảng Xã hội Pháp, bỏ phiếu tán thành Quốc tế Cộng sản và tham gia quá trình thành lập Đảng Cộng sản Pháp.',
'Tháng 12 năm 1920, Nguyễn Ái Quốc tham dự Đại hội lần thứ XVIII của Đảng Xã hội Pháp tại thành phố Tours. Tại đại hội, một trong những vấn đề quan trọng được tranh luận là việc Đảng Xã hội Pháp có gia nhập Quốc tế Cộng sản hay không. Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế Cộng sản và cùng bộ phận đa số tham gia thành lập Đảng Cộng sản Pháp. Sự kiện Đại hội Tours thường được xem là một dấu mốc quan trọng trong quá trình phát triển tư tưởng chính trị của Nguyễn Ái Quốc. Từ một người yêu nước đang tìm kiếm con đường giải phóng dân tộc, Người chính thức tham gia phong trào cộng sản và bắt đầu đặt vấn đề độc lập của Việt Nam trong mối liên hệ với phong trào cách mạng và giải phóng dân tộc trên phạm vi quốc tế.'
],
[
'1921–1922',
'Hoạt động báo chí tại Pháp',
'Nguyễn Ái Quốc tham gia Hội Liên hiệp Thuộc địa, viết báo và sử dụng báo chí như một phương tiện lên tiếng về tình trạng của các dân tộc thuộc địa.',
'Trong những năm 1921–1922, hoạt động chính trị và báo chí của Nguyễn Ái Quốc tại Pháp ngày càng phát triển. Người cùng những nhà hoạt động đến từ nhiều thuộc địa tham gia thành lập Hội Liên hiệp Thuộc địa nhằm tập hợp lực lượng và phản ánh tình cảnh của các dân tộc đang chịu sự cai trị của chủ nghĩa thực dân. Nguyễn Ái Quốc tham gia sáng lập và viết nhiều bài cho báo Le Paria, tiếng Việt thường dịch là Người cùng khổ. Qua các bài báo, Người phản ánh đời sống khó khăn của nhân dân thuộc địa, phê phán những chính sách cai trị bất công và kêu gọi sự đoàn kết giữa những dân tộc bị áp bức. Ngoài Le Paria, Nguyễn Ái Quốc còn viết cho nhiều tờ báo và tạp chí khác của phong trào cánh tả tại Pháp. Báo chí trở thành một trong những công cụ hoạt động quan trọng của Người, vừa giúp truyền bá tư tưởng, vừa giúp đưa vấn đề thuộc địa và vấn đề Việt Nam tới đông đảo công chúng.'
],
[
'1922–1925',
'Hình thành tác phẩm Bản án chế độ thực dân Pháp',
'Những bài viết phê phán chế độ thuộc địa của Nguyễn Ái Quốc được tập hợp và xuất bản thành tác phẩm Bản án chế độ thực dân Pháp.',
'Trong thời gian hoạt động tại Pháp, Nguyễn Ái Quốc viết nhiều bài báo và tài liệu phản ánh những vấn đề của hệ thống thuộc địa. Các nội dung này sau đó được tập hợp trong tác phẩm Bản án chế độ thực dân Pháp, xuất bản bằng tiếng Pháp tại Paris năm 1925. Tác phẩm đề cập tới nhiều phương diện của chế độ thuộc địa, từ bộ máy cai trị, chính sách kinh tế đến đời sống của người dân bản địa. Bằng những tư liệu, sự kiện và cách viết mang tính chính luận, Nguyễn Ái Quốc muốn làm rõ những mâu thuẫn giữa các khẩu hiệu về tự do, bình đẳng với thực tế tại các thuộc địa. Tác phẩm không chỉ thể hiện khả năng hoạt động báo chí và lý luận của Nguyễn Ái Quốc mà còn trở thành một tài liệu được sử dụng trong quá trình truyền bá tư tưởng chống chủ nghĩa thực dân.'
],
[
'1923–1924',
'Hoạt động tại Liên Xô',
'Nguyễn Ái Quốc đến Liên Xô, nghiên cứu về phong trào cách mạng và tham gia các hoạt động của Quốc tế Cộng sản.',
'Năm 1923, Nguyễn Ái Quốc rời Pháp và đến Liên Xô. Trong thời gian ở đây, Người có điều kiện tìm hiểu sâu hơn về lý luận Mác – Lênin, kinh nghiệm của Cách mạng Tháng Mười Nga, phong trào công nhân quốc tế và vấn đề giải phóng các dân tộc thuộc địa. Người tham dự nhiều hội nghị, làm việc với các tổ chức quốc tế và viết bài cho báo chí. Năm 1924, Nguyễn Ái Quốc tham dự Đại hội lần thứ V của Quốc tế Cộng sản và trình bày quan điểm về vai trò của phong trào cách mạng tại các nước thuộc địa. Những hoạt động tại Liên Xô giúp Người tiếp tục hệ thống hóa những nhận thức đã hình thành trong thời gian hoạt động ở Pháp, đồng thời tích lũy kinh nghiệm về xây dựng tổ chức, đào tạo cán bộ và phương pháp vận động quần chúng.'
],
[
'11/1924',
'Đến Quảng Châu, Trung Quốc',
'Nguyễn Ái Quốc tới Quảng Châu, một địa điểm thuận lợi để liên hệ với phong trào yêu nước Việt Nam và trực tiếp đào tạo cán bộ.',
'Cuối năm 1924, Nguyễn Ái Quốc từ Liên Xô đến Quảng Châu, Trung Quốc. Khi đó, Quảng Châu là nơi tập trung nhiều lực lượng cách mạng của Trung Quốc và cũng có một số thanh niên, nhà hoạt động Việt Nam đang sinh sống. Từ đây, Nguyễn Ái Quốc có điều kiện tiến gần hơn tới Việt Nam và bắt đầu chuyển trọng tâm từ nghiên cứu lý luận sang chuẩn bị tổ chức cho cách mạng trong nước. Người tìm hiểu các nhóm thanh niên yêu nước, lựa chọn những người có khả năng để tổ chức thành lực lượng, mở các lớp huấn luyện về chính trị và phương pháp hoạt động cách mạng. Nhiều học viên sau khi được đào tạo đã trở về Việt Nam để xây dựng cơ sở, truyền bá tư tưởng và tổ chức phong trào. Hoạt động tại Quảng Châu vì vậy đóng vai trò cầu nối giữa quá trình tìm đường cứu nước và quá trình chuẩn bị trực tiếp cho một tổ chức cách mạng mới ở Việt Nam.'
],
[
'06/1925',
'Thành lập Hội Việt Nam Cách mạng Thanh niên',
'Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu nhằm đào tạo cán bộ và truyền bá tư tưởng cách mạng vào Việt Nam.',
'Tháng 6 năm 1925, trên cơ sở những thanh niên Việt Nam yêu nước đã được tập hợp và huấn luyện tại Quảng Châu, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên. Đây là một tổ chức có vai trò đặc biệt quan trọng trong quá trình chuẩn bị cho sự hình thành của Đảng Cộng sản Việt Nam. Hội tổ chức các lớp đào tạo cán bộ, xuất bản tài liệu, xây dựng cơ sở trong nước và đưa những người đã được huấn luyện trở về Việt Nam hoạt động. Thông qua tổ chức này, các quan điểm về cách mạng giải phóng dân tộc và chủ nghĩa Mác – Lênin được truyền bá ngày càng rộng rãi trong phong trào công nhân và phong trào yêu nước. Nhiều cán bộ được đào tạo từ Hội Việt Nam Cách mạng Thanh niên về sau trở thành những nhân vật quan trọng của phong trào cách mạng Việt Nam. Vì vậy, việc thành lập Hội được xem là một bước chuẩn bị quan trọng cả về tư tưởng, tổ chức lẫn nhân lực.'
],
[
'21/06/1925',
'Ra đời báo Thanh Niên',
'Báo Thanh Niên được xuất bản tại Quảng Châu, trở thành phương tiện tuyên truyền và đào tạo tư tưởng cho phong trào cách mạng Việt Nam.',
'Ngày 21 tháng 6 năm 1925, số đầu tiên của báo Thanh Niên được xuất bản tại Quảng Châu. Tờ báo gắn liền với hoạt động của Hội Việt Nam Cách mạng Thanh niên và có sự chỉ đạo trực tiếp của Nguyễn Ái Quốc. Nội dung báo tập trung giải thích các vấn đề về cách mạng, tình hình trong nước và quốc tế, đồng thời truyền bá những quan điểm chính trị mới tới thanh niên và những người hoạt động yêu nước ở Việt Nam. Báo được bí mật chuyển về trong nước và trở thành một phương tiện quan trọng trong việc tuyên truyền, giáo dục và kết nối các cơ sở cách mạng. Việc xuất bản báo Thanh Niên cho thấy Nguyễn Ái Quốc đặc biệt coi trọng vai trò của báo chí trong công tác tư tưởng và đào tạo lực lượng. Ngày ra số đầu tiên của tờ báo sau này cũng được lựa chọn làm Ngày Báo chí Cách mạng Việt Nam.'
],
[
'1925–1927',
'Mở các lớp huấn luyện cán bộ',
'Tại Quảng Châu, Nguyễn Ái Quốc trực tiếp tham gia tổ chức nhiều lớp đào tạo cho thanh niên Việt Nam trước khi họ trở về hoạt động trong nước.',
'Một trong những nhiệm vụ quan trọng của Nguyễn Ái Quốc trong thời gian ở Quảng Châu là đào tạo một đội ngũ cán bộ có kiến thức chính trị và khả năng tổ chức phong trào. Các học viên được học về tình hình thế giới, lịch sử các cuộc cách mạng, vấn đề dân tộc và thuộc địa, vai trò của quần chúng cũng như những nguyên tắc của một tổ chức cách mạng. Nguyễn Ái Quốc không chỉ truyền đạt lý luận mà còn chú trọng tới đạo đức, kỷ luật và phương pháp hoạt động của người cán bộ. Sau các khóa học, nhiều học viên được đưa trở về Việt Nam hoặc sang những địa bàn khác để xây dựng cơ sở. Hoạt động đào tạo này tạo nên một lớp cán bộ mới, góp phần thúc đẩy sự phát triển của phong trào cách mạng trong những năm cuối thập niên 1920.'
],
[
'1927',
'Xuất bản Đường Kách mệnh',
'Các bài giảng của Nguyễn Ái Quốc dành cho cán bộ tại Quảng Châu được tập hợp thành tác phẩm Đường Kách mệnh.',
'Năm 1927, những bài giảng của Nguyễn Ái Quốc tại các lớp huấn luyện chính trị ở Quảng Châu được tập hợp và xuất bản dưới tên Đường Kách mệnh. Tác phẩm trình bày một cách tương đối hệ thống nhiều vấn đề cơ bản như mục tiêu của cách mạng, vai trò của quần chúng, yêu cầu xây dựng tổ chức, mối quan hệ giữa cách mạng Việt Nam với cách mạng thế giới và những phẩm chất cần có của người cách mạng. Ngay phần đầu, tác phẩm đặc biệt nhấn mạnh vấn đề tư cách của người cách mạng, cho thấy Nguyễn Ái Quốc không chỉ quan tâm đến lý luận và tổ chức mà còn coi trọng đạo đức của cán bộ. Đường Kách mệnh được bí mật đưa về Việt Nam và trở thành một tài liệu quan trọng trong việc đào tạo, định hướng tư tưởng cho lực lượng cách mạng trước khi Đảng Cộng sản Việt Nam được thành lập.'
],
[
'1928–1929',
'Phong trào cách mạng phát triển trong nước',
'Những cán bộ của Hội Việt Nam Cách mạng Thanh niên trở về Việt Nam, xây dựng cơ sở và đưa tư tưởng cách mạng vào phong trào công nhân.',
'Cuối những năm 1920, phong trào công nhân và phong trào yêu nước tại Việt Nam có nhiều bước phát triển. Hội Việt Nam Cách mạng Thanh niên chủ trương đưa cán bộ đi vào các nhà máy, hầm mỏ, đồn điền và những khu vực có đông người lao động để cùng lao động, tuyên truyền và tổ chức phong trào. Hoạt động này thường được nhắc đến với tên gọi phong trào vô sản hóa. Qua đó, những tư tưởng và phương pháp tổ chức mà Nguyễn Ái Quốc cùng Hội truyền bá có điều kiện gắn chặt hơn với thực tiễn trong nước. Tuy nhiên, sự phát triển nhanh của phong trào cũng dẫn đến yêu cầu thành lập một chính đảng cộng sản và xuất hiện những tổ chức cộng sản riêng biệt trong năm 1929. Tình trạng phân tán này đặt ra yêu cầu cấp thiết phải thống nhất các tổ chức thành một lực lượng chung.'
],
[
'1929',
'Xuất hiện các tổ chức cộng sản ở Việt Nam',
'Sự phát triển của phong trào dẫn tới sự hình thành nhiều tổ chức cộng sản riêng biệt, đồng thời đặt ra yêu cầu thống nhất lực lượng.',
'Năm 1929, phong trào cách mạng Việt Nam có bước chuyển mới khi lần lượt xuất hiện các tổ chức cộng sản. Những tổ chức này đều hoạt động với mục tiêu cách mạng nhưng tồn tại độc lập và có những ảnh hưởng, phạm vi tổ chức khác nhau. Việc nhiều tổ chức cùng hoạt động cho thấy phong trào đã phát triển mạnh và nhu cầu thành lập một chính đảng cộng sản trở nên rõ ràng, nhưng đồng thời cũng làm xuất hiện nguy cơ phân tán lực lượng. Trong bối cảnh đó, Quốc tế Cộng sản và những người hoạt động cách mạng Việt Nam đặt ra yêu cầu phải tiến hành thống nhất. Nguyễn Ái Quốc, với kinh nghiệm hoạt động quốc tế và vai trò trong quá trình chuẩn bị tư tưởng, tổ chức từ nhiều năm trước, trở thành người đứng ra chủ trì quá trình hợp nhất.'
],
[
'03/02/1930',
'Thành lập Đảng Cộng sản Việt Nam',
'Nguyễn Ái Quốc chủ trì hội nghị hợp nhất các tổ chức cộng sản, dẫn tới sự thành lập Đảng Cộng sản Việt Nam vào đầu năm 1930.',
'Đầu năm 1930, Nguyễn Ái Quốc triệu tập và chủ trì hội nghị với đại biểu của các tổ chức cộng sản tại Hồng Kông. Mục tiêu quan trọng của hội nghị là chấm dứt tình trạng phân tán và thành lập một tổ chức cộng sản thống nhất ở Việt Nam. Các đại biểu nhất trí hợp nhất và thành lập Đảng Cộng sản Việt Nam. Hội nghị cũng thông qua những văn kiện do Nguyễn Ái Quốc chuẩn bị, trong đó xác định những vấn đề cơ bản về mục tiêu, nhiệm vụ và lực lượng của cách mạng Việt Nam. Ngày 3 tháng 2 năm 1930 về sau được lấy làm ngày thành lập Đảng Cộng sản Việt Nam. Sự kiện này đánh dấu kết quả của một quá trình chuẩn bị kéo dài nhiều năm về tư tưởng, chính trị, tổ chức và cán bộ, đồng thời khép lại một giai đoạn quan trọng trong hành trình tìm đường cứu nước của Nguyễn Ái Quốc.'
]
]


},

  {
  period: '1930–1945',
  title: 'Chuẩn bị và lãnh đạo cách mạng',
  imageIndex: 9,
  source: MUSEUM,

  overview:
    'Giai đoạn 1930–1945 là thời kỳ đặc biệt quan trọng trong quá trình chuẩn bị và trực tiếp lãnh đạo cách mạng Việt Nam của Nguyễn Ái Quốc – Hồ Chí Minh. ' +
    'Sau khi góp phần thống nhất các tổ chức cộng sản và thành lập Đảng Cộng sản Việt Nam đầu năm 1930, Người tiếp tục hoạt động ở nước ngoài trong điều kiện đầy khó khăn, nhiều lần phải thay đổi địa điểm và phương thức hoạt động. ' +
    'Từ Hồng Kông, Liên Xô đến Trung Quốc, Nguyễn Ái Quốc vừa nghiên cứu, theo dõi phong trào cách mạng trong nước, vừa tìm cách xây dựng mối liên hệ với các lực lượng cách mạng quốc tế. ' +
    'Đầu năm 1941, sau gần ba mươi năm xa Tổ quốc, Người trở về Việt Nam, trực tiếp cùng Trung ương Đảng xây dựng căn cứ, tổ chức lực lượng chính trị và lực lượng vũ trang, đặt nhiệm vụ giải phóng dân tộc lên hàng đầu. ' +
    'Từ căn cứ Pác Bó đến Tân Trào, quá trình chuẩn bị được đẩy mạnh trong bối cảnh Chiến tranh thế giới thứ hai bước vào giai đoạn quyết định. ' +
    'Tháng Tám năm 1945, khi thời cơ cách mạng xuất hiện, Hồ Chí Minh cùng Trung ương Đảng lãnh đạo cuộc Tổng khởi nghĩa giành chính quyền trên cả nước. ' +
    'Ngày 2 tháng 9 năm 1945 tại Quảng trường Ba Đình, Người đọc Tuyên ngôn Độc lập, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa, khép lại một chặng đường chuẩn bị lâu dài và mở ra một thời kỳ mới của lịch sử Việt Nam.',

  events: [
    [
      '1931',
      'Bị bắt tại Hồng Kông',
      'Nguyễn Ái Quốc bị chính quyền Anh tại Hồng Kông bắt giữ trong bối cảnh phong trào cách mạng Việt Nam đang chịu sự đàn áp mạnh mẽ.',
      'Tháng 6 năm 1931, trong thời gian hoạt động tại Hồng Kông, Nguyễn Ái Quốc bị chính quyền Anh bắt giữ dưới tên Tống Văn Sơ. Việc bắt giữ diễn ra trong bối cảnh phong trào cộng sản và cách mạng tại nhiều nước châu Á đang bị các chính quyền thuộc địa theo dõi và đàn áp. Chính quyền thực dân Pháp tìm cách yêu cầu dẫn độ Người về Đông Dương, nơi Nguyễn Ái Quốc có nguy cơ phải đối mặt với những bản án nghiêm khắc. Trong quá trình này, luật sư Francis Henry Loseby tham gia bảo vệ về mặt pháp lý cho Người. Sau một thời gian dài xét xử và tranh tụng, kế hoạch dẫn độ không được thực hiện. Vụ việc tại Hồng Kông là một trong những giai đoạn nguy hiểm nhất trong cuộc đời hoạt động cách mạng của Nguyễn Ái Quốc, nhưng đồng thời cũng cho thấy tính chất quốc tế và phức tạp của hoạt động cách mạng thời kỳ này.'
    ],
    [
      '1932–1933',
      'Thoát khỏi Hồng Kông',
      'Sau quá trình đấu tranh pháp lý, Nguyễn Ái Quốc được trả tự do và bí mật rời Hồng Kông.',
      'Sau nhiều phiên xét xử và quá trình đấu tranh pháp lý kéo dài, Nguyễn Ái Quốc được trả tự do. Tuy nhiên, việc rời khỏi Hồng Kông phải được thực hiện một cách thận trọng do nguy cơ tiếp tục bị theo dõi hoặc bắt giữ. Người sau đó bí mật rời khu vực và tiếp tục tìm cách duy trì hoạt động cách mạng. Khoảng thời gian này đặt ra nhiều thử thách về sức khỏe, an toàn và khả năng liên lạc với phong trào cách mạng trong nước. Dù phải hoạt động trong điều kiện bí mật và thường xuyên thay đổi địa điểm, Nguyễn Ái Quốc vẫn tiếp tục theo dõi tình hình Việt Nam và tìm kiếm điều kiện thuận lợi để trở lại hoạt động trong phong trào quốc tế.'
    ],
    [
      '1934–1938',
      'Trở lại Liên Xô',
      'Nguyễn Ái Quốc tiếp tục nghiên cứu, học tập và hoạt động trong hệ thống của Quốc tế Cộng sản.',
      'Khoảng năm 1934, Nguyễn Ái Quốc trở lại Liên Xô. Trong những năm tiếp theo, Người tiếp tục nghiên cứu lý luận chính trị, theo dõi tình hình thế giới và tình hình cách mạng Việt Nam. Đây là giai đoạn chủ nghĩa phát xít đang phát triển mạnh ở châu Âu, nguy cơ một cuộc chiến tranh thế giới mới ngày càng rõ rệt và phong trào cộng sản quốc tế phải điều chỉnh nhiều chiến lược hoạt động. Nguyễn Ái Quốc dành thời gian nghiên cứu những vấn đề về dân tộc, thuộc địa, phong trào công nhân và phương pháp tổ chức cách mạng. Mặc dù không trực tiếp có mặt tại Việt Nam, Người vẫn quan tâm sát sao đến những chuyển biến của phong trào trong nước và từng bước chuẩn bị cho việc trở lại khu vực Đông Á.'
    ],
    [
      '1938',
      'Trở lại Trung Quốc',
      'Nguyễn Ái Quốc rời Liên Xô, trở lại Trung Quốc và tìm cách tiến gần hơn tới phong trào cách mạng Việt Nam.',
      'Năm 1938, trong bối cảnh cuộc chiến tranh chống Nhật tại Trung Quốc đang diễn ra, Nguyễn Ái Quốc trở lại Trung Quốc. Người hoạt động trong khu vực có lực lượng cách mạng Trung Quốc và tìm cách xây dựng lại các đầu mối liên lạc với những cán bộ Việt Nam. Việc trở lại Trung Quốc có ý nghĩa quan trọng bởi đây là địa bàn nằm gần biên giới Việt Nam, tạo điều kiện thuận lợi hơn cho việc theo dõi và chỉ đạo phong trào trong nước. Trong những năm tiếp theo, Người vừa hoạt động trong môi trường quốc tế, vừa tìm thời cơ thích hợp để trực tiếp trở về Việt Nam.'
    ],
    [
      '1939–1940',
      'Theo dõi biến động của Chiến tranh thế giới thứ hai',
      'Chiến tranh thế giới thứ hai bùng nổ làm thay đổi mạnh mẽ tình hình quốc tế và tạo ra những biến động lớn tại Đông Dương.',
      'Tháng 9 năm 1939, Chiến tranh thế giới thứ hai bùng nổ tại châu Âu. Năm 1940, nước Pháp thất bại trước Đức Quốc xã, khiến bộ máy thuộc địa Pháp ở Đông Dương suy yếu. Cùng thời điểm đó, quân đội Nhật Bản tiến vào Đông Dương, khiến Việt Nam rơi vào tình trạng cùng lúc chịu sự hiện diện của cả Pháp và Nhật. Nguyễn Ái Quốc nhận thấy những biến động quốc tế này có thể làm thay đổi tương quan lực lượng và tạo ra những điều kiện mới cho phong trào giải phóng dân tộc. Người cùng các cán bộ cách mạng nghiên cứu tình hình, tăng cường liên lạc và chuẩn bị cho khả năng trở về Việt Nam để trực tiếp lãnh đạo phong trào.'
    ],
    [
      '28/01/1941',
      'Trở về Việt Nam',
      'Sau gần ba mươi năm hoạt động ở nước ngoài, Nguyễn Ái Quốc trở về Tổ quốc qua khu vực biên giới Cao Bằng.',
      'Ngày 28 tháng 1 năm 1941, Nguyễn Ái Quốc trở về Việt Nam sau gần ba mươi năm hoạt động ở nước ngoài. Người vượt qua khu vực biên giới Việt – Trung và đến vùng Pác Bó, huyện Hà Quảng, tỉnh Cao Bằng. Đây là một dấu mốc đặc biệt quan trọng bởi từ thời điểm này Nguyễn Ái Quốc trực tiếp tham gia chỉ đạo cách mạng trong nước. Khu vực Pác Bó có địa hình hiểm trở, gần biên giới và có cơ sở quần chúng thuận lợi, vì vậy được lựa chọn làm căn cứ hoạt động. Tại đây, Người sống và làm việc trong những điều kiện rất đơn sơ, đồng thời tổ chức đào tạo cán bộ, xây dựng cơ sở quần chúng và nghiên cứu phương hướng phát triển của phong trào cách mạng trong tình hình mới.'
    ],
    [
      '02–05/1941',
      'Xây dựng căn cứ Pác Bó',
      'Pác Bó trở thành một trong những trung tâm hoạt động quan trọng của cách mạng Việt Nam trong giai đoạn chuẩn bị giành chính quyền.',
      'Sau khi trở về Việt Nam, Nguyễn Ái Quốc cùng các cán bộ Trung ương xây dựng Pác Bó thành căn cứ hoạt động quan trọng. Từ đây, Người tổ chức các lớp huấn luyện chính trị, viết tài liệu tuyên truyền và trực tiếp tìm hiểu tình hình quần chúng tại khu vực Cao Bằng. Các tổ chức cứu quốc được từng bước xây dựng, tạo nên cơ sở chính trị rộng rãi trong nhân dân. Pác Bó không chỉ là nơi ở và làm việc của Nguyễn Ái Quốc mà còn trở thành một địa điểm gắn với quá trình định hình chiến lược giải phóng dân tộc trong những năm đầu thập niên 1940.'
    ],
    [
      '10–19/05/1941',
      'Hội nghị Trung ương lần thứ VIII',
      'Nguyễn Ái Quốc chủ trì Hội nghị Trung ương lần thứ VIII tại Pác Bó, đặt nhiệm vụ giải phóng dân tộc lên vị trí hàng đầu.',
      'Tháng 5 năm 1941, Nguyễn Ái Quốc chủ trì Hội nghị Trung ương lần thứ VIII của Đảng tại Pác Bó, Cao Bằng. Hội nghị đánh giá tình hình trong nước và quốc tế, đặc biệt là những tác động của Chiến tranh thế giới thứ hai đối với Đông Dương. Một trong những quyết định quan trọng nhất là xác định nhiệm vụ giải phóng dân tộc là nhiệm vụ cấp bách hàng đầu. Hội nghị chủ trương tập hợp rộng rãi các tầng lớp nhân dân, không phân biệt giai cấp, tôn giáo hay xu hướng chính trị, miễn là cùng mục tiêu chống lại ách thống trị và giành độc lập. Những quyết định tại hội nghị có vai trò quan trọng trong việc định hướng chiến lược cho phong trào cách mạng trong những năm 1941–1945.'
    ],
    [
      '19/05/1941',
      'Thành lập Mặt trận Việt Minh',
      'Mặt trận Việt Nam Độc lập Đồng minh, gọi tắt là Việt Minh, được thành lập nhằm tập hợp rộng rãi lực lượng đấu tranh giành độc lập.',
      'Ngày 19 tháng 5 năm 1941, Mặt trận Việt Nam Độc lập Đồng minh, thường gọi là Việt Minh, được thành lập. Mục tiêu quan trọng của Việt Minh là tập hợp các tầng lớp nhân dân, các tổ chức yêu nước và các lực lượng có chung mục tiêu giải phóng dân tộc. Dưới hệ thống của Việt Minh, nhiều hội cứu quốc dành cho công nhân, nông dân, thanh niên, phụ nữ và các tầng lớp khác được tổ chức. Qua đó, phong trào cách mạng từng bước mở rộng cơ sở quần chúng, đặc biệt tại các vùng căn cứ ở Cao Bằng và khu vực Việt Bắc. Việt Minh về sau trở thành một lực lượng chính trị có vai trò trung tâm trong quá trình vận động quần chúng và chuẩn bị cho Tổng khởi nghĩa tháng Tám năm 1945.'
    ],
    [
      '1941–1942',
      'Mở rộng lực lượng và tuyên truyền cách mạng',
      'Từ căn cứ Cao Bằng, Nguyễn Ái Quốc cùng các cán bộ đẩy mạnh xây dựng tổ chức, tuyên truyền và đào tạo lực lượng.',
      'Trong thời gian hoạt động tại Cao Bằng, Nguyễn Ái Quốc đặc biệt coi trọng công tác tuyên truyền và giáo dục quần chúng. Người viết nhiều tài liệu ngắn gọn, dễ hiểu nhằm giải thích tình hình đất nước, mục tiêu giành độc lập và trách nhiệm của mỗi người dân. Các lớp huấn luyện cán bộ tiếp tục được tổ chức để xây dựng đội ngũ có khả năng vận động quần chúng và phát triển cơ sở cách mạng. Song song với công tác chính trị, các điều kiện để xây dựng lực lượng tự vệ và lực lượng vũ trang cũng từng bước được chuẩn bị. Đây là giai đoạn nền tảng để phong trào từ một số căn cứ địa phương phát triển thành một mạng lưới rộng hơn.'
    ],
    [
      '1942',
      'Sử dụng tên Hồ Chí Minh',
      'Nguyễn Ái Quốc sử dụng tên Hồ Chí Minh trong chuyến đi sang Trung Quốc nhằm tìm kiếm liên lạc với các lực lượng chống phát xít.',
      'Năm 1942, Nguyễn Ái Quốc sang Trung Quốc với mục tiêu liên hệ với các lực lượng Đồng minh và các tổ chức chống phát xít nhằm tranh thủ sự hỗ trợ cho phong trào cách mạng Việt Nam. Trong chuyến đi này, Người sử dụng tên Hồ Chí Minh. Từ đó, tên gọi Hồ Chí Minh ngày càng gắn với các hoạt động chính trị, ngoại giao và lãnh đạo của Người. Đây cũng là thời kỳ hoạt động quốc tế có ý nghĩa quan trọng, bởi cuộc đấu tranh của Việt Nam được đặt trong bối cảnh rộng lớn hơn của cuộc chiến chống chủ nghĩa phát xít trên thế giới.'
    ],
    [
      '08/1942–09/1943',
      'Bị giam tại Trung Quốc',
      'Hồ Chí Minh bị chính quyền Quốc dân đảng Trung Quốc bắt giữ và bị áp giải qua nhiều nhà tù ở tỉnh Quảng Tây.',
      'Tháng 8 năm 1942, khi đang trên đường hoạt động tại Trung Quốc, Hồ Chí Minh bị chính quyền địa phương bắt giữ. Trong hơn một năm, Người bị chuyển qua nhiều nhà lao tại tỉnh Quảng Tây trong điều kiện sinh hoạt hết sức khó khăn. Trong thời gian bị giam giữ, Hồ Chí Minh sáng tác nhiều bài thơ bằng chữ Hán, sau này được tập hợp thành tác phẩm Nhật ký trong tù. Các bài thơ không chỉ phản ánh đời sống khắc nghiệt trong nhà tù mà còn thể hiện những suy ngẫm về thiên nhiên, con người, xã hội và tinh thần vượt qua nghịch cảnh. Tháng 9 năm 1943, Hồ Chí Minh được trả tự do và sau đó tiếp tục hoạt động tại Trung Quốc trước khi trở về căn cứ cách mạng.'
    ],
    [
      '1943–1944',
      'Khôi phục liên lạc và chuẩn bị lực lượng',
      'Sau khi được trả tự do, Hồ Chí Minh tiếp tục xây dựng quan hệ với các lực lượng tại Trung Quốc và tìm cách trở lại Việt Nam.',
      'Sau thời gian bị giam giữ, Hồ Chí Minh tiếp tục hoạt động tại Trung Quốc, đồng thời khôi phục các mối liên lạc cần thiết với phong trào cách mạng Việt Nam. Trong nước, lực lượng Việt Minh đã có những bước phát triển đáng kể, đặc biệt tại vùng Cao – Bắc – Lạng. Nhu cầu xây dựng lực lượng vũ trang có tổ chức ngày càng trở nên cấp thiết. Hồ Chí Minh chủ trương kết hợp chặt chẽ giữa đấu tranh chính trị và xây dựng lực lượng vũ trang, nhưng đồng thời nhấn mạnh việc chuẩn bị phải phù hợp với tình hình thực tế và thời cơ.'
    ],
    [
      '22/12/1944',
      'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân',
      'Theo chỉ thị của Hồ Chí Minh, Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập tại Cao Bằng.',
      'Ngày 22 tháng 12 năm 1944, Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập tại khu rừng Trần Hưng Đạo, thuộc tỉnh Cao Bằng, dưới sự chỉ huy của Võ Nguyên Giáp. Đội ban đầu gồm một lực lượng nhỏ nhưng được tổ chức có kỷ luật và có nhiệm vụ vừa chiến đấu vừa tuyên truyền, vận động quần chúng. Ngay sau khi thành lập, đội giành thắng lợi trong các trận Phai Khắt và Nà Ngần. Sự ra đời của lực lượng này đánh dấu một bước phát triển quan trọng trong quá trình xây dựng lực lượng vũ trang cách mạng và về sau trở thành một trong những tiền thân của Quân đội nhân dân Việt Nam.'
    ],
    [
      '09/03/1945',
      'Nhật đảo chính Pháp tại Đông Dương',
      'Quân đội Nhật tiến hành đảo chính lật đổ bộ máy thuộc địa Pháp, làm cho tình hình chính trị tại Đông Dương thay đổi nhanh chóng.',
      'Ngày 9 tháng 3 năm 1945, quân đội Nhật tiến hành đảo chính lực lượng Pháp tại Đông Dương và trực tiếp kiểm soát bộ máy cai trị. Sự kiện làm thay đổi căn bản cục diện chính trị tại Việt Nam. Bộ máy thuộc địa cũ của Pháp bị tan rã, trong khi Nhật Bản đang ngày càng suy yếu do những thất bại trên chiến trường thế giới. Trung ương Đảng nhận định tình hình mới tạo ra điều kiện thuận lợi hơn để thúc đẩy phong trào chống Nhật và chuẩn bị cho cuộc khởi nghĩa giành chính quyền. Các hoạt động tuyên truyền, tổ chức quần chúng và xây dựng lực lượng được đẩy mạnh trên nhiều địa bàn.'
    ],
    [
      '03–05/1945',
      'Cao trào kháng Nhật cứu nước',
      'Phong trào chống Nhật và chuẩn bị giành chính quyền được đẩy mạnh trên nhiều địa phương.',
      'Sau cuộc đảo chính Nhật – Pháp, phong trào cách mạng bước vào một giai đoạn phát triển mới. Nhiều hình thức đấu tranh được triển khai, từ tuyên truyền chính trị, tổ chức quần chúng đến xây dựng các lực lượng tự vệ và giải phóng. Trong bối cảnh nạn đói nghiêm trọng năm 1945, nhiều nơi diễn ra phong trào phá kho thóc để giải quyết nạn đói, qua đó thu hút đông đảo nhân dân tham gia các hoạt động của Việt Minh. Cao trào kháng Nhật cứu nước giúp mở rộng nhanh chóng cơ sở chính trị của cách mạng và tạo tiền đề trực tiếp cho cuộc Tổng khởi nghĩa vài tháng sau.'
    ],
    [
      '05/1945',
      'Chuyển căn cứ về Tân Trào',
      'Hồ Chí Minh từ Cao Bằng về Tân Trào, Tuyên Quang, nơi dần trở thành trung tâm chỉ đạo cách mạng trên phạm vi cả nước.',
      'Tháng 5 năm 1945, Hồ Chí Minh rời Cao Bằng và chuyển đến Tân Trào, thuộc tỉnh Tuyên Quang. Với vị trí thuận lợi, có cơ sở quần chúng tốt và kết nối được với nhiều địa bàn, Tân Trào trở thành trung tâm chỉ đạo của cách mạng trong giai đoạn cuối trước Tổng khởi nghĩa. Tại đây, Hồ Chí Minh và Trung ương Đảng thường xuyên theo dõi diễn biến của Chiến tranh thế giới thứ hai, đặc biệt là tình hình quân đội Nhật tại Đông Nam Á. Nhiều cuộc họp quan trọng được tổ chức để chuẩn bị về chính trị, quân sự và tổ chức cho khả năng phát động tổng khởi nghĩa khi thời cơ xuất hiện.'
    ],
    [
      '04/06/1945',
      'Thành lập Khu Giải phóng Việt Bắc',
      'Một vùng căn cứ rộng lớn được hình thành tại Việt Bắc, tạo cơ sở trực tiếp cho việc chuẩn bị giành chính quyền.',
      'Ngày 4 tháng 6 năm 1945, Khu Giải phóng được thành lập trên một vùng rộng lớn thuộc sáu tỉnh Việt Bắc. Tân Trào được lựa chọn làm trung tâm của khu giải phóng. Tại đây, nhiều hình thức quản lý và tổ chức xã hội mới được xây dựng, tạo nên một khu vực tương đối hoàn chỉnh dưới sự kiểm soát của lực lượng cách mạng. Việc hình thành Khu Giải phóng có ý nghĩa quan trọng cả về chính trị lẫn quân sự, vì đây vừa là căn cứ an toàn, vừa là nơi thử nghiệm những hình thức tổ chức chính quyền trước khi Tổng khởi nghĩa diễn ra.'
    ],
    [
      '13–15/08/1945',
      'Quyết định phát động Tổng khởi nghĩa',
      'Khi Nhật Bản đứng trước thất bại hoàn toàn, Trung ương Đảng quyết định phát động Tổng khởi nghĩa trên phạm vi cả nước.',
      'Đầu tháng 8 năm 1945, tình hình quốc tế thay đổi rất nhanh khi quân đội Nhật liên tiếp thất bại và chuẩn bị đầu hàng Đồng minh. Nhận thấy thời cơ giành chính quyền đã xuất hiện, từ ngày 13 đến ngày 15 tháng 8, Hội nghị toàn quốc của Đảng họp tại Tân Trào quyết định phát động Tổng khởi nghĩa trước khi quân Đồng minh tiến vào Đông Dương. Một Ủy ban Khởi nghĩa toàn quốc được thành lập và Quân lệnh số 1 được ban bố. Quyết định này thể hiện việc lựa chọn thời điểm có ý nghĩa quyết định, khi bộ máy cai trị của Nhật đang tan rã trong khi các lực lượng bên ngoài chưa kịp thiết lập trật tự mới.'
    ],
    [
      '16–17/08/1945',
      'Đại hội Quốc dân Tân Trào',
      'Đại hội Quốc dân họp tại Tân Trào, tán thành chủ trương Tổng khởi nghĩa và thành lập Ủy ban Dân tộc Giải phóng Việt Nam.',
      'Trong hai ngày 16 và 17 tháng 8 năm 1945, Đại hội Quốc dân được tổ chức tại đình Tân Trào với sự tham dự của đại biểu đến từ nhiều địa phương, tổ chức và tầng lớp xã hội. Đại hội tán thành chủ trương Tổng khởi nghĩa, thông qua nhiều chính sách lớn và bầu Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh làm Chủ tịch. Cơ quan này được xem như một hình thức chính phủ cách mạng lâm thời trong thời điểm chuyển giao quyền lực. Đại hội Quốc dân Tân Trào thể hiện sự tập hợp rộng rãi của các lực lượng cách mạng và hoàn tất một bước quan trọng về tổ chức trước khi cuộc khởi nghĩa diễn ra trên phạm vi cả nước.'
    ],
    [
      '19/08/1945',
      'Giành chính quyền tại Hà Nội',
      'Cuộc khởi nghĩa tại Hà Nội thắng lợi, tạo ảnh hưởng mạnh mẽ tới phong trào giành chính quyền trên cả nước.',
      'Ngày 19 tháng 8 năm 1945, đông đảo nhân dân Hà Nội tham gia các cuộc mít tinh và biểu tình do lực lượng Việt Minh tổ chức. Các lực lượng cách mạng nhanh chóng chiếm giữ nhiều cơ quan quan trọng của chính quyền. Việc giành chính quyền tại Hà Nội có ý nghĩa rất lớn do đây là trung tâm chính trị quan trọng của Bắc Bộ. Thắng lợi tại Hà Nội tạo ra tác động mạnh mẽ, thúc đẩy quá trình khởi nghĩa tại nhiều tỉnh, thành phố khác và góp phần làm cho quá trình chuyển giao chính quyền diễn ra nhanh chóng trên phạm vi cả nước.'
    ],
    [
      '23–25/08/1945',
      'Chính quyền lần lượt được giành tại Huế và Sài Gòn',
      'Sau thắng lợi tại Hà Nội, phong trào Tổng khởi nghĩa tiếp tục lan rộng tới những trung tâm lớn của đất nước.',
      'Ngày 23 tháng 8 năm 1945, lực lượng cách mạng giành chính quyền tại Huế. Hai ngày sau, ngày 25 tháng 8, chính quyền được giành tại Sài Gòn và nhiều khu vực Nam Bộ. Cùng thời gian đó, các địa phương trên cả nước liên tiếp giành chính quyền. Việc các trung tâm lớn như Hà Nội, Huế và Sài Gòn lần lượt nằm trong tay lực lượng cách mạng cho thấy sự sụp đổ nhanh chóng của bộ máy chính quyền cũ và sự phát triển mạnh của phong trào Tổng khởi nghĩa.'
    ],
    [
      '30/08/1945',
      'Vua Bảo Đại thoái vị',
      'Vua Bảo Đại tuyên bố thoái vị tại Huế, đánh dấu sự chấm dứt của chế độ quân chủ tồn tại nhiều thế kỷ tại Việt Nam.',
      'Ngày 30 tháng 8 năm 1945 tại Huế, vua Bảo Đại tuyên bố thoái vị và trao ấn, kiếm cho đại diện của Chính phủ cách mạng. Sự kiện này có ý nghĩa biểu tượng quan trọng trong quá trình chuyển đổi thể chế chính trị tại Việt Nam. Chế độ quân chủ nhà Nguyễn chính thức chấm dứt, trong khi một nhà nước mới đang được chuẩn bị thành lập. Đây là một trong những bước cuối cùng trước lễ tuyên bố độc lập tại Hà Nội vào ngày 2 tháng 9 năm 1945.'
    ],
    [
      '28/08/1945',
      'Thành lập Chính phủ lâm thời',
      'Ủy ban Dân tộc Giải phóng được cải tổ thành Chính phủ lâm thời của nước Việt Nam mới do Hồ Chí Minh đứng đầu.',
      'Sau khi cuộc Tổng khởi nghĩa giành thắng lợi tại nhiều địa phương, yêu cầu thành lập một chính phủ có khả năng điều hành đất nước trở nên cấp thiết. Ngày 28 tháng 8 năm 1945, Ủy ban Dân tộc Giải phóng Việt Nam được cải tổ thành Chính phủ lâm thời. Hồ Chí Minh giữ cương vị Chủ tịch. Chính phủ mới bắt đầu chuẩn bị cho việc công bố nền độc lập, đồng thời phải nhanh chóng giải quyết nhiều vấn đề cấp bách về chính trị, kinh tế, xã hội và đối ngoại trong một hoàn cảnh hết sức phức tạp.'
    ],
    [
      '02/09/1945',
      'Đọc Tuyên ngôn Độc lập',
      'Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập và tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa.',
      'Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình ở Hà Nội, trước đông đảo nhân dân, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc bản Tuyên ngôn Độc lập. Văn kiện tuyên bố chấm dứt chế độ thuộc địa và khẳng định quyền độc lập của dân tộc Việt Nam. Sự kiện này đánh dấu sự ra đời của nước Việt Nam Dân chủ Cộng hòa và mở ra một thời kỳ mới trong lịch sử Việt Nam. Đối với cuộc đời Hồ Chí Minh, ngày 2 tháng 9 năm 1945 cũng là kết quả của hơn ba thập niên tìm đường, hoạt động chính trị, xây dựng tổ chức và chuẩn bị lực lượng kể từ khi Người rời Bến Nhà Rồng năm 1911.'
    ]
  ]
},

  {
  period: '1945–1969',
  title: 'Chủ tịch nước và lãnh đạo kháng chiến',
  imageIndex: 4,
  source: BIO,

  overview:
    'Giai đoạn 1945–1969 là thời kỳ Hồ Chí Minh giữ vai trò trung tâm trong quá trình xây dựng và bảo vệ Nhà nước Việt Nam Dân chủ Cộng hòa. ' +
    'Ngay sau thắng lợi của Cách mạng Tháng Tám và sự ra đời của nhà nước mới, đất nước phải đối mặt với hàng loạt khó khăn nghiêm trọng về kinh tế, xã hội, tài chính, giáo dục và an ninh. ' +
    'Hồ Chí Minh cùng Chính phủ tập trung giải quyết nạn đói, nạn mù chữ, củng cố bộ máy chính quyền và tìm kiếm những giải pháp ngoại giao nhằm bảo vệ nền độc lập còn rất non trẻ. ' +
    'Khi chiến tranh với thực dân Pháp bùng nổ trên phạm vi cả nước cuối năm 1946, Người cùng Trung ương Đảng lãnh đạo cuộc kháng chiến lâu dài, xây dựng căn cứ Việt Bắc, phát triển lực lượng và từng bước thay đổi tương quan chiến trường. ' +
    'Thắng lợi Điện Biên Phủ năm 1954 và Hiệp định Genève mở ra một giai đoạn mới, trong đó miền Bắc bước vào khôi phục và xây dựng, còn nhiệm vụ thống nhất đất nước tiếp tục được đặt ra. ' +
    'Từ cuối những năm 1950 đến thập niên 1960, Hồ Chí Minh tiếp tục tham gia định hướng xây dựng miền Bắc, phát triển quan hệ quốc tế và cùng Trung ương lãnh đạo cuộc đấu tranh trong bối cảnh chiến tranh ngày càng mở rộng. ' +
    'Trong những năm cuối đời, Người viết và bổ sung Di chúc, để lại nhiều căn dặn về Đảng, nhân dân, thanh niên, đoàn kết quốc tế và tương lai đất nước. ' +
    'Ngày 2 tháng 9 năm 1969, Chủ tịch Hồ Chí Minh qua đời tại Hà Nội, khép lại một cuộc đời hoạt động chính trị và cách mạng kéo dài gần sáu thập niên.',

  events: [
    [
      '03/09/1945',
      'Những nhiệm vụ cấp bách của chính quyền mới',
      'Ngay sau ngày độc lập, Hồ Chí Minh chủ trì phiên họp đầu tiên của Chính phủ để xác định những nhiệm vụ cấp thiết của đất nước.',
      'Ngày 3 tháng 9 năm 1945, chỉ một ngày sau lễ Tuyên ngôn Độc lập, Chủ tịch Hồ Chí Minh chủ trì phiên họp đầu tiên của Hội đồng Chính phủ. Nhà nước mới lúc đó phải đối mặt với hàng loạt thách thức nghiêm trọng: hậu quả của nạn đói năm 1945, tỷ lệ mù chữ rất cao, ngân sách gần như trống rỗng, hệ thống hành chính còn non trẻ và tình hình quân sự - chính trị hết sức phức tạp. Hồ Chí Minh đề xuất nhiều nhiệm vụ cấp bách như chống đói, chống nạn mù chữ, tổ chức tổng tuyển cử, xây dựng hiến pháp và củng cố chính quyền. Những quyết định này thể hiện nỗ lực nhanh chóng chuyển từ một phong trào giành chính quyền sang xây dựng một nhà nước có tổ chức và khả năng quản lý xã hội.'
    ],
    [
      '09/1945',
      'Phát động chống đói và Bình dân học vụ',
      'Chính phủ triển khai các biện pháp cứu đói và mở rộng phong trào xóa nạn mù chữ trên cả nước.',
      'Sau Cách mạng Tháng Tám, một trong những vấn đề cấp bách nhất là giải quyết hậu quả của nạn đói và tình trạng thất học trong dân chúng. Hồ Chí Minh kêu gọi nhân dân thực hành tiết kiệm, tổ chức các hoạt động cứu trợ và tăng gia sản xuất. Đồng thời, phong trào Bình dân học vụ được phát động nhằm giúp hàng triệu người dân biết đọc, biết viết. Việc chống đói và chống dốt không chỉ mang ý nghĩa xã hội mà còn được xem là một phần quan trọng của quá trình xây dựng nền tảng cho nhà nước mới. Những hoạt động này góp phần củng cố niềm tin của nhân dân đối với chính quyền cách mạng trong những tháng đầu vô cùng khó khăn.'
    ],
    [
      '06/01/1946',
      'Tổng tuyển cử đầu tiên',
      'Nhân dân cả nước tham gia bầu Quốc hội khóa I của nước Việt Nam Dân chủ Cộng hòa.',
      'Ngày 6 tháng 1 năm 1946, cuộc Tổng tuyển cử đầu tiên được tổ chức trên phạm vi cả nước. Đây là lần đầu tiên trong lịch sử Việt Nam hiện đại, người dân được tham gia một cuộc bầu cử phổ thông để lựa chọn đại biểu Quốc hội. Hồ Chí Minh ra ứng cử tại Hà Nội và được bầu với số phiếu cao. Quốc hội khóa I sau đó tiến hành kiện toàn bộ máy nhà nước, thành lập Chính phủ chính thức và từng bước xây dựng cơ sở pháp lý cho chế độ mới. Cuộc Tổng tuyển cử có ý nghĩa quan trọng trong việc củng cố tính hợp pháp và chính danh của Nhà nước Việt Nam Dân chủ Cộng hòa sau Cách mạng Tháng Tám.'
    ],
    [
      '02/03/1946',
      'Thành lập Chính phủ Liên hiệp Kháng chiến',
      'Quốc hội khóa I thành lập Chính phủ Liên hiệp Kháng chiến do Hồ Chí Minh làm Chủ tịch.',
      'Ngày 2 tháng 3 năm 1946, tại kỳ họp đầu tiên của Quốc hội khóa I, Chính phủ Liên hiệp Kháng chiến được thành lập. Hồ Chí Minh tiếp tục giữ cương vị Chủ tịch Chính phủ. Việc hình thành một chính phủ có sự tham gia của nhiều lực lượng chính trị khác nhau phản ánh nỗ lực mở rộng đoàn kết trong bối cảnh đất nước đang phải đối phó với nhiều sức ép từ bên ngoài và những khó khăn nội bộ. Đây là bước quan trọng trong quá trình củng cố chính quyền trung ương và chuẩn bị cho những thách thức ngày càng lớn về ngoại giao và quân sự.'
    ],
    [
      '06/03/1946',
      'Hiệp định Sơ bộ Việt–Pháp',
      'Hồ Chí Minh thay mặt Chính phủ Việt Nam ký Hiệp định Sơ bộ với đại diện Chính phủ Pháp.',
      'Ngày 6 tháng 3 năm 1946, Hồ Chí Minh thay mặt Chính phủ Việt Nam Dân chủ Cộng hòa ký Hiệp định Sơ bộ với đại diện Chính phủ Pháp. Trong bối cảnh quân đội nước ngoài hiện diện tại Việt Nam và tình hình chính trị đặc biệt phức tạp, Chính phủ lựa chọn giải pháp tạm thời hòa hoãn với Pháp nhằm tránh phải đối đầu cùng lúc với nhiều lực lượng. Hiệp định tạo ra một khoảng thời gian cần thiết để chính quyền mới củng cố bộ máy, xây dựng lực lượng và chuẩn bị cho những tình huống tiếp theo. Tuy nhiên, những khác biệt căn bản giữa hai bên về tương lai chính trị của Việt Nam vẫn chưa được giải quyết.'
    ],
    [
      '31/05–10/1946',
      'Chuyến thăm và đàm phán tại Pháp',
      'Hồ Chí Minh sang Pháp trong một chuyến công du kéo dài nhằm tìm kiếm giải pháp hòa bình cho quan hệ Việt–Pháp.',
      'Ngày 31 tháng 5 năm 1946, Hồ Chí Minh rời Việt Nam sang Pháp với tư cách thượng khách của Chính phủ Pháp và đồng thời tham gia các hoạt động ngoại giao nhằm tìm kiếm một thỏa thuận cho vấn đề Việt Nam. Trong nhiều tháng, Người gặp gỡ giới chính trị, báo chí và các tổ chức xã hội Pháp, đồng thời theo dõi quá trình đàm phán giữa phái đoàn Việt Nam và phía Pháp. Dù đã có nhiều nỗ lực ngoại giao, những bất đồng về độc lập, chủ quyền và vị trí của Việt Nam trong Liên hiệp Pháp vẫn không được giải quyết triệt để. Chuyến đi cho thấy Hồ Chí Minh vẫn cố gắng sử dụng con đường thương lượng trước khi xung đột quân sự trở nên không thể tránh khỏi.'
    ],
    [
      '14/09/1946',
      'Ký Tạm ước Việt–Pháp',
      'Hồ Chí Minh ký Tạm ước với Chính phủ Pháp nhằm tiếp tục kéo dài thời gian hòa hoãn.',
      'Ngày 14 tháng 9 năm 1946, trước khi rời Pháp về nước, Hồ Chí Minh ký với phía Pháp bản Tạm ước Việt–Pháp. Văn kiện này là một nỗ lực tiếp tục duy trì quan hệ hòa hoãn trong khi những vấn đề lớn về chính trị vẫn chưa được giải quyết. Chính phủ Việt Nam kỳ vọng có thêm thời gian để củng cố chính quyền và chuẩn bị cho những tình huống xấu hơn. Tuy nhiên, sau đó căng thẳng giữa hai bên tiếp tục leo thang, đặc biệt tại Hải Phòng và Hà Nội, khiến khả năng duy trì hòa bình ngày càng thu hẹp.'
    ],
    [
      '09/11/1946',
      'Hiến pháp đầu tiên được thông qua',
      'Quốc hội thông qua Hiến pháp năm 1946, bản hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa.',
      'Ngày 9 tháng 11 năm 1946, Quốc hội khóa I thông qua bản Hiến pháp đầu tiên của nước Việt Nam Dân chủ Cộng hòa. Hồ Chí Minh có vai trò quan trọng trong quá trình xây dựng nền tảng thể chế cho nhà nước mới. Hiến pháp quy định nhiều nguyên tắc về tổ chức bộ máy nhà nước và các quyền cơ bản của công dân. Dù chiến tranh bùng nổ ngay sau đó khiến nhiều nội dung chưa thể triển khai đầy đủ, sự ra đời của Hiến pháp năm 1946 vẫn đánh dấu một bước tiến quan trọng trong quá trình xây dựng nhà nước pháp lý sau khi giành độc lập.'
    ],
    [
      '19/12/1946',
      'Lời kêu gọi Toàn quốc kháng chiến',
      'Hồ Chí Minh ra lời kêu gọi nhân dân cả nước đứng lên kháng chiến chống thực dân Pháp.',
      'Cuối năm 1946, xung đột giữa Việt Nam và Pháp ngày càng nghiêm trọng. Sau nhiều nỗ lực thương lượng không thành công và khi nguy cơ mất quyền kiểm soát tại Hà Nội trở nên rõ rệt, ngày 19 tháng 12 năm 1946, Hồ Chí Minh ra Lời kêu gọi Toàn quốc kháng chiến. Văn kiện kêu gọi toàn dân tham gia bảo vệ nền độc lập bằng mọi khả năng có thể. Cuộc kháng chiến từ đây chuyển sang quy mô toàn quốc. Chính phủ, các cơ quan Trung ương và lực lượng chủ lực dần rút lên căn cứ Việt Bắc để tổ chức một cuộc chiến tranh lâu dài.'
    ],
    [
      '1947',
      'Chuyển lên căn cứ Việt Bắc',
      'Hồ Chí Minh cùng Trung ương Đảng và Chính phủ hoạt động tại căn cứ Việt Bắc để lãnh đạo cuộc kháng chiến lâu dài.',
      'Sau khi chiến tranh toàn quốc bùng nổ, các cơ quan đầu não của Đảng và Chính phủ chuyển lên vùng căn cứ Việt Bắc. Hồ Chí Minh sống và làm việc tại nhiều địa điểm thuộc Tuyên Quang, Thái Nguyên và các tỉnh lân cận. Điều kiện sinh hoạt và làm việc rất khó khăn, nhưng từ Việt Bắc, Trung ương vẫn duy trì hoạt động lãnh đạo và chỉ đạo trên phạm vi cả nước. Việc xây dựng căn cứ an toàn giúp bảo vệ cơ quan đầu não, duy trì liên lạc và tổ chức lực lượng trong một cuộc kháng chiến được xác định là lâu dài.'
    ],
    [
      '10–12/1947',
      'Chiến dịch Việt Bắc Thu–Đông',
      'Quân Pháp mở cuộc tấn công lớn lên Việt Bắc nhưng không đạt được mục tiêu tiêu diệt cơ quan đầu não kháng chiến.',
      'Cuối năm 1947, quân đội Pháp mở một chiến dịch quy mô lớn lên căn cứ Việt Bắc với mục tiêu tiêu diệt cơ quan lãnh đạo và lực lượng chủ lực của Việt Nam. Hồ Chí Minh cùng Trung ương chỉ đạo quân và dân tổ chức kháng chiến, phân tán lực lượng và bảo vệ các cơ quan đầu não. Sau nhiều tuần giao tranh, quân Pháp phải rút khỏi nhiều khu vực mà không đạt được mục tiêu chiến lược ban đầu. Kết quả của chiến dịch giúp bảo vệ căn cứ Việt Bắc và củng cố niềm tin vào khả năng tiến hành một cuộc kháng chiến lâu dài.'
    ],
    [
      '1948–1949',
      'Củng cố kháng chiến và xây dựng chính quyền',
      'Hồ Chí Minh cùng Chính phủ tập trung duy trì sản xuất, giáo dục, tổ chức chính quyền và củng cố khối đoàn kết trong điều kiện chiến tranh.',
      'Trong những năm 1948–1949, cuộc kháng chiến bước vào giai đoạn củng cố lực lượng. Hồ Chí Minh nhiều lần nhấn mạnh việc vừa kháng chiến vừa kiến quốc, nghĩa là không chỉ tập trung cho mặt trận quân sự mà còn phải duy trì sản xuất, giáo dục, chăm lo đời sống nhân dân và xây dựng bộ máy chính quyền. Các phong trào thi đua yêu nước được phát động nhằm động viên toàn xã hội tham gia vào nỗ lực chung. Đây là giai đoạn tạo nền tảng hậu phương và tổ chức cho những bước phát triển lớn hơn của cuộc chiến trong những năm tiếp theo.'
    ],
    [
      '1950',
      'Thiết lập quan hệ ngoại giao với các nước xã hội chủ nghĩa',
      'Việt Nam Dân chủ Cộng hòa bắt đầu được nhiều quốc gia xã hội chủ nghĩa công nhận và thiết lập quan hệ ngoại giao.',
      'Đầu năm 1950, nước Việt Nam Dân chủ Cộng hòa được Cộng hòa Nhân dân Trung Hoa, Liên Xô và một số nước xã hội chủ nghĩa công nhận và thiết lập quan hệ ngoại giao. Đây là bước ngoặt quan trọng trong vị thế quốc tế của nhà nước Việt Nam mới, bởi từ đây Việt Nam có thêm điều kiện về chính trị, ngoại giao và hậu cần cho cuộc kháng chiến. Hồ Chí Minh tích cực thúc đẩy các mối quan hệ quốc tế, coi đây là một bộ phận quan trọng trong chiến lược kết hợp sức mạnh trong nước với sự ủng hộ từ bên ngoài.'
    ],
    [
      '09–10/1950',
      'Chiến dịch Biên giới',
      'Hồ Chí Minh trực tiếp tới mặt trận, theo dõi và động viên lực lượng trong Chiến dịch Biên giới.',
      'Tháng 9 năm 1950, quân đội Việt Nam mở Chiến dịch Biên giới nhằm phá thế bao vây, mở rộng căn cứ Việt Bắc và khai thông tuyến liên lạc quốc tế. Hồ Chí Minh trực tiếp đến khu vực chiến dịch để theo dõi tình hình và động viên bộ đội. Chiến dịch kết thúc thắng lợi, nhiều vị trí quan trọng của quân Pháp bị đánh bại, tuyến biên giới phía Bắc được mở rộng và liên lạc với Trung Quốc trở nên thuận lợi hơn. Đây là bước phát triển đáng kể về thế và lực của cuộc kháng chiến, giúp quân đội Việt Nam chuyển dần từ thế phòng ngự sang chủ động hơn trên chiến trường.'
    ],
    [
      '02/1951',
      'Đại hội lần thứ II của Đảng',
      'Đại hội lần thứ II của Đảng được tổ chức tại Việt Bắc và Hồ Chí Minh được bầu làm Chủ tịch Ban Chấp hành Trung ương.',
      'Tháng 2 năm 1951, Đại hội đại biểu toàn quốc lần thứ II của Đảng được tổ chức tại Chiêm Hóa, Tuyên Quang. Đại hội đánh giá tình hình cuộc kháng chiến và đề ra những nhiệm vụ cho giai đoạn mới. Đảng hoạt động công khai với tên Đảng Lao động Việt Nam và Hồ Chí Minh được bầu làm Chủ tịch Ban Chấp hành Trung ương. Đại hội góp phần củng cố hệ thống lãnh đạo và nhấn mạnh yêu cầu tiếp tục phát triển kháng chiến gắn với xây dựng hậu phương, mở rộng đoàn kết và tăng cường quan hệ quốc tế.'
    ],
    [
      '1953–1954',
      'Chuẩn bị cho chiến cuộc Đông Xuân',
      'Hồ Chí Minh cùng Trung ương và Bộ Tổng Tư lệnh xác định phương hướng chiến lược cho giai đoạn quyết định của cuộc kháng chiến chống Pháp.',
      'Cuối năm 1953, quân đội Pháp triển khai Kế hoạch Navarre với mục tiêu giành lại thế chủ động trên chiến trường. Trước tình hình đó, Hồ Chí Minh cùng Trung ương Đảng và Bộ Tổng Tư lệnh xác định phương châm hoạt động linh hoạt, buộc đối phương phải phân tán lực lượng và tạo điều kiện cho những đòn tiến công quyết định. Trong quá trình chuẩn bị, Hồ Chí Minh nhiều lần nhấn mạnh yêu cầu chắc thắng, thận trọng và phát huy sức mạnh của toàn dân. Những quyết định chiến lược trong thời kỳ này dẫn tới việc mở chiến dịch tại Điện Biên Phủ.'
    ],
    [
      '07/05/1954',
      'Chiến thắng Điện Biên Phủ',
      'Chiến dịch Điện Biên Phủ kết thúc thắng lợi sau 56 ngày đêm chiến đấu.',
      'Ngày 7 tháng 5 năm 1954, tập đoàn cứ điểm Điện Biên Phủ của quân đội Pháp bị đánh bại sau 56 ngày đêm chiến đấu. Hồ Chí Minh cùng Trung ương Đảng lãnh đạo chung cuộc kháng chiến, trong khi Đại tướng Võ Nguyên Giáp trực tiếp chỉ huy chiến dịch. Chiến thắng Điện Biên Phủ có tác động rất lớn tới cục diện quân sự và chính trị, làm suy giảm khả năng tiếp tục chiến tranh của Pháp tại Đông Dương và tạo lợi thế quan trọng cho phái đoàn Việt Nam tại Hội nghị Genève đang diễn ra.'
    ],
    [
      '21/07/1954',
      'Hiệp định Genève',
      'Các văn kiện Genève về Đông Dương được ký kết, tạo cơ sở chấm dứt chiến sự với Pháp.',
      'Tháng 7 năm 1954, các văn kiện của Hội nghị Genève về Đông Dương được ký kết. Theo các thỏa thuận, chiến sự giữa Việt Nam và Pháp chấm dứt, các lực lượng quân sự tập kết về hai khu vực tạm thời và lấy vĩ tuyến 17 làm giới tuyến quân sự tạm thời. Đây không phải là biên giới chính trị hay lãnh thổ lâu dài. Hiệp định tạo điều kiện cho miền Bắc bước vào thời kỳ hòa bình, nhưng đồng thời đặt ra một nhiệm vụ lịch sử mới là tiếp tục đấu tranh để thực hiện thống nhất đất nước.'
    ],
    [
      '10/10/1954',
      'Tiếp quản Thủ đô Hà Nội',
      'Sau khi quân Pháp rút khỏi Hà Nội, các cơ quan của Chính phủ và lực lượng Việt Nam trở về tiếp quản Thủ đô.',
      'Ngày 10 tháng 10 năm 1954, Hà Nội được tiếp quản trong không khí hòa bình sau chín năm kháng chiến chống thực dân Pháp. Việc trở lại Thủ đô đánh dấu một bước chuyển lớn từ thời chiến sang giai đoạn khôi phục và xây dựng miền Bắc. Hồ Chí Minh cùng các cơ quan Trung ương sau đó trở về Hà Nội, trực tiếp tham gia vào quá trình ổn định đời sống, phục hồi sản xuất và tổ chức lại hệ thống quản lý nhà nước.'
    ],
    [
      '1955–1957',
      'Khôi phục kinh tế miền Bắc',
      'Miền Bắc bước vào thời kỳ khôi phục sản xuất, ổn định đời sống và xây dựng lại cơ sở vật chất sau chiến tranh.',
      'Sau năm 1954, miền Bắc phải khắc phục hậu quả nặng nề của chiến tranh kéo dài. Hồ Chí Minh cùng Chính phủ kêu gọi nhân dân khôi phục sản xuất nông nghiệp, công nghiệp, giao thông và giáo dục. Nhiều chính sách được triển khai nhằm ổn định đời sống, phục hồi nền kinh tế và xây dựng nền tảng cho một giai đoạn phát triển mới. Hồ Chí Minh thường xuyên đi thăm các địa phương, nhà máy, hợp tác xã và đơn vị quân đội để động viên cán bộ, công nhân và nhân dân.'
    ],
    [
      '1958',
      'Sống và làm việc tại Nhà sàn',
      'Hồ Chí Minh chuyển đến sống và làm việc tại Nhà sàn trong khu Phủ Chủ tịch.',
      'Năm 1958, Hồ Chí Minh chuyển tới sống tại một ngôi nhà sàn nhỏ được xây dựng trong khuôn viên Phủ Chủ tịch. Đây là nơi Người sinh hoạt, làm việc và tiếp nhiều đoàn khách trong nước và quốc tế trong những năm cuối đời. Nhà sàn có kiến trúc giản dị, không gian nhỏ và gần gũi với thiên nhiên. Về sau, nơi đây trở thành một phần quan trọng của Khu di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch và là một trong những địa điểm thường được nhắc tới khi nói về lối sống của Người.'
    ],
    [
      '1959',
      'Hiến pháp năm 1959',
      'Quốc hội thông qua bản Hiến pháp mới trong bối cảnh miền Bắc bước vào giai đoạn xây dựng xã hội mới.',
      'Ngày 31 tháng 12 năm 1959, Quốc hội thông qua Hiến pháp năm 1959. Bản hiến pháp mới phản ánh những thay đổi về chính trị và xã hội của miền Bắc sau khi chiến tranh chống Pháp kết thúc. Hồ Chí Minh tham gia quá trình xây dựng và vận động thực hiện Hiến pháp. Đây là một bước quan trọng trong việc hoàn thiện hệ thống pháp lý và tổ chức nhà nước trong giai đoạn mới.'
    ],
    [
      '09/1960',
      'Đại hội lần thứ III của Đảng',
      'Đại hội lần thứ III xác định những nhiệm vụ lớn của cách mạng Việt Nam trong giai đoạn đất nước tạm thời bị chia cắt.',
      'Tháng 9 năm 1960, Đại hội đại biểu toàn quốc lần thứ III của Đảng Lao động Việt Nam được tổ chức tại Hà Nội. Hồ Chí Minh tiếp tục được bầu làm Chủ tịch Ban Chấp hành Trung ương. Đại hội xác định hai nhiệm vụ chiến lược: xây dựng miền Bắc và tiếp tục đấu tranh thực hiện thống nhất đất nước. Trong những năm sau đó, miền Bắc vừa phát triển kinh tế, văn hóa, giáo dục vừa đóng vai trò hậu phương cho cuộc đấu tranh tại miền Nam.'
    ],
    [
      '1961–1964',
      'Đẩy mạnh xây dựng miền Bắc',
      'Hồ Chí Minh thường xuyên đi thăm các địa phương, đơn vị sản xuất, trường học và lực lượng vũ trang.',
      'Trong những năm đầu thập niên 1960, miền Bắc đẩy mạnh các chương trình phát triển kinh tế và xã hội. Hồ Chí Minh thường xuyên gặp gỡ công nhân, nông dân, thanh niên, bộ đội và cán bộ tại nhiều địa phương. Người nhấn mạnh vai trò của lao động, tiết kiệm, giáo dục, kỷ luật và tinh thần phục vụ nhân dân. Những chuyến đi cơ sở vừa mang tính động viên, vừa giúp Người trực tiếp tìm hiểu tình hình thực tế trong quá trình xây dựng miền Bắc.'
    ],
    [
      '1964–1965',
      'Chiến tranh mở rộng ra miền Bắc',
      'Từ giữa thập niên 1960, chiến tranh ngày càng lan rộng và miền Bắc trở thành mục tiêu của các cuộc không kích.',
      'Sau sự kiện Vịnh Bắc Bộ năm 1964 và những diễn biến quân sự tiếp theo, Hoa Kỳ mở rộng chiến tranh và tiến hành các hoạt động không kích miền Bắc. Trong bối cảnh đó, Hồ Chí Minh cùng Trung ương Đảng chỉ đạo chuyển nhiều hoạt động kinh tế, giao thông và sản xuất sang điều kiện thời chiến. Miền Bắc vừa phải bảo vệ các mục tiêu quan trọng, duy trì sản xuất, vừa tiếp tục hỗ trợ cho chiến trường miền Nam. Đây là một trong những giai đoạn căng thẳng nhất trong những năm cuối đời của Hồ Chí Minh.'
    ],
    [
      '10/05/1965',
      'Bắt đầu viết Di chúc',
      'Hồ Chí Minh bắt đầu viết tài liệu sau này được công bố với tên gọi Di chúc.',
      'Ngày 10 tháng 5 năm 1965, khi bước sang tuổi 75, Hồ Chí Minh bắt đầu viết một tài liệu mà Người gọi là thư để lại cho đồng bào, đồng chí. Trong những năm 1966, 1967, 1968 và 1969, Người tiếp tục đọc lại, sửa chữa hoặc bổ sung một số nội dung. Tài liệu đề cập đến nhiều vấn đề như xây dựng Đảng, đoàn kết, chăm lo cho nhân dân, giáo dục thế hệ trẻ, quan hệ quốc tế và mong muốn về tương lai đất nước. Sau khi Người qua đời, tài liệu này được công bố với tên gọi Di chúc và trở thành một trong những văn kiện quan trọng gắn với những năm cuối đời của Hồ Chí Minh.'
    ],
    [
      '17/07/1966',
      'Lời kêu gọi chống chiến tranh phá hoại',
      'Hồ Chí Minh đưa ra thông điệp khẳng định quyết tâm bảo vệ độc lập trong bối cảnh chiến tranh leo thang.',
      'Ngày 17 tháng 7 năm 1966, khi chiến tranh phá hoại miền Bắc ngày càng ác liệt, Hồ Chí Minh ra lời kêu gọi nhân dân tiếp tục kiên trì kháng chiến. Trong bài nói này xuất hiện câu nói nổi tiếng về giá trị của độc lập và tự do, về sau trở thành một trong những thông điệp được nhắc đến nhiều nhất gắn với Hồ Chí Minh. Lời kêu gọi nhằm củng cố tinh thần trong bối cảnh nhiều thành phố, cơ sở sản xuất và tuyến giao thông đang bị đánh phá.'
    ],
    [
      '1967',
      'Tăng cường hoạt động ngoại giao',
      'Hồ Chí Minh tiếp tục gặp gỡ nhiều đoàn đại biểu quốc tế và tranh thủ sự ủng hộ cho Việt Nam.',
      'Trong bối cảnh chiến tranh diễn ra ngày càng quyết liệt, Hồ Chí Minh vẫn dành nhiều thời gian cho hoạt động đối ngoại. Người tiếp các đoàn đại biểu từ nhiều nước, trao đổi với các chính khách, tổ chức hòa bình và phong trào quốc tế. Mục tiêu là tranh thủ sự đồng tình và ủng hộ đối với Việt Nam, đồng thời duy trì quan hệ với các nước xã hội chủ nghĩa và phong trào giải phóng dân tộc. Hoạt động ngoại giao trở thành một mặt trận quan trọng song song với đấu tranh quân sự và chính trị.'
    ],
    [
      '1968',
      'Theo dõi những chuyển biến lớn của chiến tranh',
      'Hồ Chí Minh cùng Trung ương tiếp tục theo dõi và chỉ đạo trong bối cảnh chiến trường có nhiều biến động lớn.',
      'Năm 1968 là một năm có nhiều biến động quan trọng của chiến tranh Việt Nam. Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân tạo ra những tác động lớn cả về quân sự, chính trị và dư luận quốc tế. Cũng trong năm này, các cuộc đàm phán giữa Việt Nam Dân chủ Cộng hòa và Hoa Kỳ bắt đầu tại Paris. Hồ Chí Minh tiếp tục theo dõi sát tình hình và quan tâm đến việc kết hợp đấu tranh quân sự, chính trị và ngoại giao.'
    ],
    [
      '1965–1969',
      'Những năm cuối đời',
      'Hồ Chí Minh tiếp tục tham gia lãnh đạo, làm việc, tiếp khách quốc tế và quan tâm tới đời sống của nhân dân trong điều kiện chiến tranh.',
      'Mặc dù tuổi cao và sức khỏe giảm sút, trong những năm cuối đời Hồ Chí Minh vẫn duy trì nhiều hoạt động lãnh đạo và đối ngoại. Người thường xuyên làm việc với các lãnh đạo Đảng và Nhà nước, theo dõi tình hình chiến trường, gặp gỡ cán bộ, chiến sĩ, thanh niên và các đoàn khách quốc tế. Đồng thời, Người nhiều lần nhắc tới việc chăm lo đời sống nhân dân, giữ gìn đoàn kết và chuẩn bị cho công cuộc xây dựng đất nước sau chiến tranh. Những năm này cũng là thời kỳ Người hoàn thiện những nội dung quan trọng trong Di chúc.'
    ],
    [
      '02/09/1969',
      'Chủ tịch Hồ Chí Minh qua đời',
      'Chủ tịch Hồ Chí Minh qua đời tại Hà Nội vào ngày 2 tháng 9 năm 1969, hưởng thọ 79 tuổi.',
      'Ngày 2 tháng 9 năm 1969, Chủ tịch Hồ Chí Minh qua đời tại Hà Nội sau một thời gian sức khỏe suy giảm. Sự ra đi của Người diễn ra đúng vào ngày Quốc khánh, 24 năm sau khi Người đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình. Trong những ngày sau đó, nhiều hoạt động tưởng niệm được tổ chức và Di chúc của Người được công bố. Cái chết của Hồ Chí Minh khép lại một cuộc đời hoạt động chính trị kéo dài từ đầu thế kỷ XX, gắn với nhiều bước ngoặt lớn của lịch sử Việt Nam từ quá trình tìm đường cứu nước, giành độc lập đến hai cuộc kháng chiến và công cuộc xây dựng nhà nước mới.'
    ]
  ]
},

  {
  period: '1969–nay',
  title: 'Di sản và tưởng niệm',
  imageIndex: 2,
  source: MUSEUM,

  overview:
    'Giai đoạn từ năm 1969 đến nay không còn là hành trình hoạt động trực tiếp của Chủ tịch Hồ Chí Minh mà là quá trình gìn giữ, nghiên cứu, tưởng niệm và phát huy những di sản gắn với cuộc đời, sự nghiệp và tư tưởng của Người. ' +
    'Sau khi Chủ tịch Hồ Chí Minh qua đời ngày 2 tháng 9 năm 1969, Di chúc của Người được công bố và trở thành một trong những văn kiện quan trọng được nghiên cứu trong nhiều lĩnh vực chính trị, lịch sử và giáo dục. ' +
    'Trong những năm tiếp theo, nhiều công trình tưởng niệm, bảo tàng, khu di tích và hệ thống lưu trữ tư liệu được xây dựng hoặc hoàn thiện nhằm bảo tồn những địa điểm, hiện vật và tài liệu gắn với Hồ Chí Minh. ' +
    'Tên tuổi của Người cũng được đặt cho thành phố, đường phố, trường học, công trình văn hóa và nhiều không gian công cộng trên cả nước. ' +
    'Các dịp kỷ niệm ngày sinh, ngày mất, ngày ra đi tìm đường cứu nước và những dấu mốc lớn trong cuộc đời Hồ Chí Minh trở thành cơ hội để tổ chức các hoạt động nghiên cứu, triển lãm, giáo dục truyền thống và giao lưu quốc tế. ' +
    'Từ cuối thế kỷ XX đến thế kỷ XXI, việc số hóa tư liệu, xây dựng bảo tàng hiện đại và phổ biến các bộ biên niên, tác phẩm, hình ảnh và hiện vật lịch sử tiếp tục giúp công chúng tiếp cận di sản Hồ Chí Minh theo nhiều hình thức mới.',

  events: [
    [
      '1969',
      'Công bố Di chúc',
      'Di chúc của Chủ tịch Hồ Chí Minh được công bố sau khi Người qua đời.',
      'Sau khi Chủ tịch Hồ Chí Minh qua đời ngày 2 tháng 9 năm 1969, Di chúc của Người được công bố rộng rãi. Đây là tài liệu được Hồ Chí Minh bắt đầu viết từ năm 1965 và tiếp tục xem lại, chỉnh sửa, bổ sung trong những năm sau đó. Nội dung Di chúc đề cập đến nhiều vấn đề như xây dựng và giữ gìn đoàn kết trong Đảng, chăm lo đời sống nhân dân, giáo dục thế hệ trẻ, đoàn kết quốc tế và những công việc cần thực hiện sau khi chiến tranh kết thúc. Văn kiện cũng thể hiện mong muốn của Người về một đất nước hòa bình, thống nhất và phát triển. Sau năm 1969, Di chúc trở thành một trong những nguồn tư liệu quan trọng trong nghiên cứu về cuộc đời, tư tưởng và những năm cuối đời của Hồ Chí Minh.',
      WILL
    ],
    [
      '09/09/1969',
      'Lễ truy điệu Chủ tịch Hồ Chí Minh',
      'Lễ truy điệu được tổ chức tại Quảng trường Ba Đình sau khi Chủ tịch Hồ Chí Minh qua đời.',
      'Ngày 9 tháng 9 năm 1969, lễ truy điệu Chủ tịch Hồ Chí Minh được tổ chức trọng thể tại Quảng trường Ba Đình, Hà Nội. Đông đảo nhân dân, cán bộ, chiến sĩ và đại biểu quốc tế tham dự các hoạt động tưởng niệm. Đây là một trong những sự kiện tưởng niệm lớn nhất ngay sau khi Người qua đời. Những ngày quốc tang đã để lại nhiều hình ảnh, phim tư liệu và tài liệu lịch sử, về sau trở thành một phần quan trọng trong hệ thống tư liệu nghiên cứu về Hồ Chí Minh.',
      MUSEUM
    ],
    [
      '1969–1970',
      'Bảo quản thi hài Chủ tịch Hồ Chí Minh',
      'Công tác bảo quản thi hài được triển khai trong điều kiện chiến tranh.',
      'Sau khi Chủ tịch Hồ Chí Minh qua đời, công tác bảo quản thi hài được triển khai với sự tham gia của các chuyên gia Việt Nam và Liên Xô. Trong bối cảnh chiến tranh vẫn diễn ra, việc bảo đảm an toàn tuyệt đối cho thi hài và các cơ sở kỹ thuật liên quan là một nhiệm vụ đặc biệt. Nhiều địa điểm dự phòng được chuẩn bị để phục vụ công tác bảo quản trong trường hợp Hà Nội bị đánh phá. Quá trình này về sau trở thành cơ sở trực tiếp cho việc xây dựng Lăng Chủ tịch Hồ Chí Minh tại Quảng trường Ba Đình.',
      'https://www.bqllang.gov.vn/'
    ],
    [
      '1970–1972',
      'Chuẩn bị xây dựng công trình Lăng',
      'Các phương án thiết kế, kỹ thuật và địa điểm xây dựng Lăng Chủ tịch Hồ Chí Minh được nghiên cứu.',
      'Trong những năm đầu thập niên 1970, công tác chuẩn bị xây dựng Lăng Chủ tịch Hồ Chí Minh được tiến hành. Quảng trường Ba Đình được lựa chọn bởi đây là nơi gắn với sự kiện Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày 2 tháng 9 năm 1945. Việc thiết kế công trình phải đáp ứng đồng thời nhiều yêu cầu về kiến trúc, kỹ thuật, bảo quản lâu dài và tính trang nghiêm của một không gian tưởng niệm quốc gia. Các chuyên gia Việt Nam phối hợp với Liên Xô trong quá trình nghiên cứu và xây dựng.',
      'https://www.bqllang.gov.vn/'
    ],
    [
      '02/09/1973',
      'Khởi công xây dựng Lăng',
      'Lăng Chủ tịch Hồ Chí Minh được chính thức khởi công tại Quảng trường Ba Đình.',
      'Ngày 2 tháng 9 năm 1973, đúng vào dịp kỷ niệm Quốc khánh, công trình Lăng Chủ tịch Hồ Chí Minh được khởi công tại Quảng trường Ba Đình. Đây là nơi đặc biệt gắn với cuộc đời Hồ Chí Minh bởi tại chính quảng trường này, ngày 2 tháng 9 năm 1945, Người đã đọc bản Tuyên ngôn Độc lập. Công trình được xây dựng với sự tham gia của nhiều lực lượng và sự hỗ trợ kỹ thuật của Liên Xô. Việc xây dựng Lăng vừa nhằm bảo quản lâu dài thi hài Chủ tịch Hồ Chí Minh, vừa tạo nên một không gian tưởng niệm có ý nghĩa lịch sử và biểu tượng tại trung tâm Thủ đô Hà Nội.',
      'https://www.bqllang.gov.vn/'
    ],
    [
      '30/04/1975',
      'Chiến tranh kết thúc, mở đường thống nhất đất nước',
      'Thắng lợi ngày 30 tháng 4 năm 1975 chấm dứt chiến tranh và tạo điều kiện hoàn thành thống nhất đất nước.',
      'Ngày 30 tháng 4 năm 1975, chiến tranh kết thúc sau khi chính quyền Việt Nam Cộng hòa sụp đổ tại Sài Gòn. Sự kiện diễn ra gần sáu năm sau khi Chủ tịch Hồ Chí Minh qua đời và thường được đặt trong mối liên hệ với mục tiêu độc lập và thống nhất đất nước mà Người theo đuổi trong những năm cuối đời. Tuy nhiên, cần phân biệt rằng ngày 30 tháng 4 đánh dấu kết thúc chiến tranh, trong khi quá trình thống nhất về mặt nhà nước được hoàn tất trong năm 1976. Đây là một dấu mốc quan trọng khi nghiên cứu quá trình thực hiện những mục tiêu lịch sử được đề cập trong các văn kiện và hoạt động của Hồ Chí Minh.',
      'https://tulieuvankien.dangcongsan.vn/'
    ],
    [
      '29/08/1975',
      'Khánh thành Lăng Chủ tịch Hồ Chí Minh',
      'Lăng Chủ tịch Hồ Chí Minh chính thức được khánh thành tại Quảng trường Ba Đình.',
      'Ngày 29 tháng 8 năm 1975, sau gần hai năm xây dựng, Lăng Chủ tịch Hồ Chí Minh chính thức được khánh thành. Công trình nằm ở vị trí trung tâm của Quảng trường Ba Đình và trở thành nơi gìn giữ thi hài Chủ tịch Hồ Chí Minh. Từ khi mở cửa, Lăng đón hàng triệu lượt người Việt Nam và khách quốc tế đến viếng. Cùng với Quảng trường Ba Đình, Phủ Chủ tịch, Nhà sàn và các công trình lân cận, nơi đây hình thành một quần thể di tích và không gian tưởng niệm đặc biệt tại Hà Nội.',
      'https://www.bqllang.gov.vn/'
    ],
    [
      '1976',
      'Thành phố mang tên Hồ Chí Minh',
      'Quốc hội quyết định đổi tên thành phố Sài Gòn – Gia Định thành Thành phố Hồ Chí Minh.',
      'Năm 1976, sau khi Việt Nam hoàn thành thống nhất về mặt nhà nước, Quốc hội quyết định đặt tên Thành phố Hồ Chí Minh cho thành phố Sài Gòn – Gia Định. Việc đặt tên một đô thị lớn nhất miền Nam theo tên Chủ tịch Hồ Chí Minh mang ý nghĩa tưởng niệm đặc biệt. Tên Thành phố Hồ Chí Minh từ đó gắn với một trong những trung tâm kinh tế, văn hóa và chính trị lớn nhất cả nước. Đây cũng là một trong những hình thức tưởng niệm có quy mô và ảnh hưởng lâu dài nhất đối với tên tuổi Hồ Chí Minh.',
      'https://tulieuvankien.dangcongsan.vn/'
    ],
    [
      '1979',
      'Bảo tàng Hồ Chí Minh được quyết định xây dựng',
      'Chủ trương xây dựng một bảo tàng quy mô lớn về Chủ tịch Hồ Chí Minh được triển khai tại Hà Nội.',
      'Sau khi Chủ tịch Hồ Chí Minh qua đời, nhu cầu bảo quản, nghiên cứu và giới thiệu một cách hệ thống những tài liệu, hiện vật gắn với cuộc đời và sự nghiệp của Người ngày càng trở nên rõ rệt. Nhà nước quyết định xây dựng Bảo tàng Hồ Chí Minh tại khu vực Ba Đình. Công trình được định hướng không chỉ là nơi lưu giữ hiện vật mà còn là một trung tâm nghiên cứu, trưng bày và giáo dục lịch sử. Việc hình thành bảo tàng đánh dấu một bước phát triển quan trọng trong công tác bảo tồn di sản Hồ Chí Minh ở quy mô quốc gia.',
      'https://baotanghochiminh.vn/'
    ],
    [
      '1980s',
      'Mở rộng hệ thống khu di tích và bảo tàng',
      'Nhiều địa điểm gắn với cuộc đời Hồ Chí Minh được tiếp tục bảo tồn, chỉnh lý và phục vụ công chúng.',
      'Trong những năm 1980, công tác bảo tồn các địa điểm gắn với Hồ Chí Minh được mở rộng tại nhiều địa phương. Những nơi như Kim Liên ở Nghệ An, Pác Bó ở Cao Bằng, Tân Trào ở Tuyên Quang, khu Phủ Chủ tịch ở Hà Nội và Bến Nhà Rồng tại Thành phố Hồ Chí Minh tiếp tục được tu bổ, nghiên cứu và bổ sung tư liệu. Các địa điểm này tạo thành một mạng lưới không gian lịch sử, giúp người xem có thể tìm hiểu cuộc đời Hồ Chí Minh theo từng giai đoạn và địa điểm cụ thể.',
      'https://baotanghochiminh.vn/'
    ],
    [
      '1987',
      'Nghị quyết của UNESCO',
      'Đại hội đồng UNESCO thông qua nghị quyết về việc kỷ niệm 100 năm ngày sinh Hồ Chí Minh vào năm 1990.',
      'Năm 1987, tại khóa họp lần thứ 24 của Đại hội đồng UNESCO, nghị quyết 24C/18.65 được thông qua liên quan tới việc kỷ niệm 100 năm ngày sinh Chủ tịch Hồ Chí Minh vào năm 1990. Nghị quyết ghi nhận vai trò của Hồ Chí Minh trong quá trình đấu tranh giành độc lập của Việt Nam và đề cập tới những đóng góp về văn hóa, giáo dục và giải phóng dân tộc. UNESCO khuyến nghị các quốc gia thành viên tham gia các hoạt động kỷ niệm phù hợp. Khi giới thiệu sự kiện trên website, cách diễn đạt chính xác nhất là UNESCO thông qua nghị quyết về việc kỷ niệm 100 năm ngày sinh Hồ Chí Minh, thay vì rút gọn thành một danh hiệu không đúng nguyên văn văn kiện.',
      'https://dcs.nhandan.vn/tu-lieu-tham-khao-cuoc-thi-trac-nghiem-tim-hieu-90-nam-lich-su-ve-vang-cua-dang-cong-san-viet-nam/tu-lieu-cuoc-thi/ve-nghi-quyet-cua-unesco-vinh-danh-chu-tich-ho-chi-minh-543986.html'
    ],
    [
      '19/05/1990',
      'Kỷ niệm 100 năm ngày sinh Chủ tịch Hồ Chí Minh',
      'Nhiều hoạt động tưởng niệm, nghiên cứu và giao lưu được tổ chức nhân dịp tròn một thế kỷ ngày sinh Hồ Chí Minh.',
      'Ngày 19 tháng 5 năm 1990 đánh dấu 100 năm ngày sinh Chủ tịch Hồ Chí Minh. Đây là một trong những dịp kỷ niệm lớn nhất về Hồ Chí Minh trong thế kỷ XX. Nhiều hoạt động được tổ chức tại Việt Nam và ở nước ngoài, bao gồm hội thảo khoa học, triển lãm tư liệu, xuất bản sách, chiếu phim tài liệu và các chương trình văn hóa. Dịp kỷ niệm cũng gắn với việc thực hiện nghị quyết UNESCO năm 1987, qua đó mở rộng hoạt động nghiên cứu và giới thiệu về Hồ Chí Minh trên phạm vi quốc tế.',
      'https://baotanghochiminh.vn/'
    ],
    [
      '19/05/1990',
      'Khánh thành Bảo tàng Hồ Chí Minh',
      'Bảo tàng Hồ Chí Minh tại Hà Nội chính thức được khánh thành đúng dịp kỷ niệm 100 năm ngày sinh.',
      'Ngày 19 tháng 5 năm 1990, Bảo tàng Hồ Chí Minh tại khu vực Ba Đình chính thức được khánh thành. Công trình được xây dựng nhằm lưu giữ và giới thiệu một hệ thống lớn tài liệu, hiện vật, hình ảnh và câu chuyện liên quan tới cuộc đời, sự nghiệp của Hồ Chí Minh. Nội dung trưng bày được tổ chức theo nhiều giai đoạn lịch sử, từ thời niên thiếu, hành trình tìm đường cứu nước, quá trình lãnh đạo cách mạng đến những năm cuối đời. Từ khi đi vào hoạt động, bảo tàng trở thành một trong những trung tâm nghiên cứu, giáo dục và trưng bày lớn nhất về Hồ Chí Minh.',
      'https://baotanghochiminh.vn/'
    ],
    [
      '1990s',
      'Đẩy mạnh nghiên cứu và xuất bản tư liệu',
      'Nhiều công trình nghiên cứu, tuyển tập tác phẩm và bộ biên niên về Hồ Chí Minh được chỉnh lý và xuất bản.',
      'Trong thập niên 1990, hoạt động sưu tầm, chỉnh lý và xuất bản tư liệu Hồ Chí Minh được đẩy mạnh. Các cơ quan nghiên cứu, bảo tàng và nhà xuất bản tập hợp nhiều văn kiện, bài nói, bài viết, thư từ, hình ảnh và tài liệu liên quan đến Người. Những bộ sách như Hồ Chí Minh Toàn tập và Hồ Chí Minh – Biên niên tiểu sử giúp việc nghiên cứu cuộc đời Hồ Chí Minh trở nên hệ thống hơn. Đây cũng là cơ sở để các trường học, bảo tàng và công trình nghiên cứu sử dụng tư liệu có nguồn gốc rõ ràng hơn.'
    ],
    [
      '19/05/2000',
      'Kỷ niệm 110 năm ngày sinh',
      'Các hoạt động tưởng niệm tiếp tục được tổ chức trên phạm vi cả nước nhân dịp 110 năm ngày sinh Chủ tịch Hồ Chí Minh.',
      'Ngày 19 tháng 5 năm 2000 đánh dấu 110 năm ngày sinh Hồ Chí Minh. Nhiều chương trình văn hóa, triển lãm, hội thảo và hoạt động giáo dục truyền thống được tổ chức. Đây cũng là dịp để các cơ quan nghiên cứu tiếp tục công bố tư liệu và đánh giá những vấn đề liên quan tới cuộc đời, sự nghiệp và tư tưởng của Hồ Chí Minh. Việc tổ chức các dịp kỷ niệm định kỳ cho thấy quá trình tưởng niệm không chỉ tập trung vào các công trình vật chất mà còn được duy trì thông qua hoạt động giáo dục và nghiên cứu.',
      'https://baotanghochiminh.vn/'
    ],
    [
      '2005',
      '115 năm ngày sinh và mở rộng hoạt động giáo dục',
      'Nhiều chương trình tìm hiểu lịch sử được tổ chức nhân dịp kỷ niệm 115 năm ngày sinh Hồ Chí Minh.',
      'Năm 2005, các hoạt động kỷ niệm 115 năm ngày sinh Chủ tịch Hồ Chí Minh tiếp tục được tổ chức tại nhiều địa phương. Các khu di tích, bảo tàng, trường học và cơ quan văn hóa tăng cường triển lãm, giới thiệu hiện vật và tổ chức các hoạt động tìm hiểu lịch sử. Những hình thức giáo dục này góp phần đưa việc nghiên cứu Hồ Chí Minh đến gần hơn với học sinh, sinh viên và công chúng.'
    ],
    [
      '2010',
      'Kỷ niệm 120 năm ngày sinh',
      'Năm 2010 đánh dấu 120 năm ngày sinh Chủ tịch Hồ Chí Minh.',
      'Dịp kỷ niệm 120 năm ngày sinh được tổ chức với nhiều chương trình nghiên cứu, triển lãm và hoạt động văn hóa. Nhiều tài liệu, hình ảnh và hiện vật tiếp tục được giới thiệu đến công chúng. Đây cũng là giai đoạn các cơ quan lưu trữ và bảo tàng bắt đầu chú trọng nhiều hơn đến việc ứng dụng công nghệ thông tin trong quản lý và giới thiệu tư liệu lịch sử.'
    ],
    [
      '05/06/2011',
      '100 năm ngày ra đi tìm đường cứu nước',
      'Một thế kỷ kể từ ngày Nguyễn Tất Thành rời Bến Nhà Rồng ra nước ngoài.',
      'Ngày 5 tháng 6 năm 2011 đánh dấu tròn 100 năm kể từ sự kiện Nguyễn Tất Thành rời Bến Nhà Rồng năm 1911. Nhiều hoạt động tưởng niệm và nghiên cứu được tổ chức nhằm nhìn lại bối cảnh lịch sử, quyết định ra đi và hành trình kéo dài nhiều năm ở nước ngoài. Bến Nhà Rồng trở thành một địa điểm trung tâm trong các hoạt động kỷ niệm, đồng thời sự kiện này giúp nhấn mạnh vai trò của giai đoạn 1911–1930 trong quá trình hình thành tư tưởng và con đường hoạt động chính trị của Hồ Chí Minh.',
      'https://baotanghochiminh.vn/'
    ],
    [
      '2015',
      'Kỷ niệm 125 năm ngày sinh',
      'Nhiều hoạt động văn hóa, triển lãm và nghiên cứu được tổ chức nhân dịp 125 năm ngày sinh Hồ Chí Minh.',
      'Năm 2015 đánh dấu 125 năm ngày sinh Chủ tịch Hồ Chí Minh. Các cơ quan trung ương, địa phương, khu di tích và bảo tàng tổ chức nhiều chương trình tưởng niệm. Các hoạt động này tiếp tục giới thiệu tư liệu về gia đình, quê hương, hành trình hoạt động cách mạng và những dấu mốc quan trọng trong cuộc đời Hồ Chí Minh.'
    ],
    [
      '2019',
      '50 năm ngày Chủ tịch Hồ Chí Minh qua đời',
      'Năm 2019 đánh dấu nửa thế kỷ kể từ ngày Chủ tịch Hồ Chí Minh qua đời.',
      'Năm 2019 là dịp kỷ niệm 50 năm thực hiện Di chúc và 50 năm ngày Chủ tịch Hồ Chí Minh qua đời. Nhiều hội thảo khoa học, triển lãm và chương trình nghiên cứu được tổ chức nhằm đánh giá giá trị lịch sử của Di chúc cũng như ảnh hưởng của Hồ Chí Minh đối với quá trình phát triển của Việt Nam sau năm 1969. Đây cũng là dịp nhiều tư liệu, bút tích và tài liệu liên quan đến Di chúc được giới thiệu rộng rãi hơn tới công chúng.',
      WILL
    ],
    [
      '19/05/2020',
      'Kỷ niệm 130 năm ngày sinh',
      'Ngày 19 tháng 5 năm 2020 đánh dấu 130 năm kể từ ngày sinh Chủ tịch Hồ Chí Minh.',
      'Dịp kỷ niệm 130 năm ngày sinh tiếp tục là cơ hội để giới thiệu các tư liệu, hình ảnh, hiện vật và công trình nghiên cứu liên quan tới Hồ Chí Minh. Nhiều hoạt động được tổ chức tại các bảo tàng và khu di tích, đồng thời tư liệu được phổ biến rộng hơn trên các nền tảng trực tuyến. Điều này cho thấy phương thức tiếp cận di sản Hồ Chí Minh đang từng bước thay đổi, từ trưng bày truyền thống sang kết hợp với các hình thức số hóa và truyền thông hiện đại.',
      MUSEUM
    ],
    [
      '2020–2024',
      'Đẩy mạnh số hóa tư liệu và không gian trưng bày',
      'Nhiều cơ quan bảo tàng và lưu trữ tăng cường số hóa tài liệu, hình ảnh và hiện vật liên quan tới Hồ Chí Minh.',
      'Trong những năm đầu thập niên 2020, xu hướng chuyển đổi số tác động mạnh tới lĩnh vực bảo tồn và giáo dục lịch sử. Nhiều bảo tàng, khu di tích và cơ quan lưu trữ triển khai các hình thức trưng bày trực tuyến, cơ sở dữ liệu điện tử, ảnh tư liệu số hóa và các chương trình tham quan kết hợp công nghệ. Những phương thức này giúp người học và công chúng có thể tiếp cận nguồn tư liệu về Hồ Chí Minh thuận lợi hơn mà không phụ thuộc hoàn toàn vào việc đến trực tiếp bảo tàng.'
    ],
    [
      '19/05/2025',
      'Kỷ niệm 135 năm ngày sinh',
      'Ngày 19 tháng 5 năm 2025 đánh dấu 135 năm ngày sinh Chủ tịch Hồ Chí Minh.',
      'Năm 2025, nhiều hoạt động tưởng niệm và nghiên cứu tiếp tục được tổ chức nhân dịp 135 năm ngày sinh Hồ Chí Minh. Nội dung tập trung vào việc giới thiệu cuộc đời, sự nghiệp, tư tưởng, đạo đức và phong cách của Người thông qua hội thảo, triển lãm, chương trình giáo dục và các hoạt động tại khu di tích. Đây là một trong những dấu mốc kỷ niệm lớn gần đây nhất và tiếp tục cho thấy vị trí của Hồ Chí Minh trong hoạt động nghiên cứu và giáo dục lịch sử tại Việt Nam.',
      'https://baotanghochiminh.vn/'
    ],
    [
      '2026–nay',
      'Bảo tồn và phát huy di sản Hồ Chí Minh',
      'Hệ thống di tích, bảo tàng và nguồn tư liệu tiếp tục được bảo tồn, nghiên cứu, số hóa và giới thiệu tới công chúng.',
      'Hiện nay, di sản gắn với Chủ tịch Hồ Chí Minh được bảo tồn thông qua một hệ thống rộng lớn gồm di tích lịch sử, bảo tàng, tài liệu lưu trữ, tác phẩm, phim ảnh và hiện vật. Những địa điểm tiêu biểu gồm Khu di tích Kim Liên tại Nghệ An, Bến Nhà Rồng tại Thành phố Hồ Chí Minh, Pác Bó tại Cao Bằng, Tân Trào tại Tuyên Quang, Khu di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch, Nhà sàn, Lăng Chủ tịch Hồ Chí Minh và Bảo tàng Hồ Chí Minh tại Hà Nội. Bên cạnh không gian vật chất, nhiều công trình nghiên cứu như Hồ Chí Minh Toàn tập và bộ Hồ Chí Minh – Biên niên tiểu sử cung cấp hệ thống tư liệu giúp tra cứu hoạt động của Người theo thời gian. Việc ứng dụng công nghệ số, xây dựng triển lãm trực tuyến và phát triển các website giáo dục cũng mở ra những phương thức mới để giới thiệu di sản Hồ Chí Minh tới thế hệ trẻ và công chúng quốc tế.',
      'https://baotanghochiminh.vn/ho-chi-minh-bien-nien-tieu-su-10-tap.htm'
    ]
  ]
}
];