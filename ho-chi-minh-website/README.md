# Website Hồ Chí Minh — bản chia thư mục

## Cách chạy
Mở index.html bằng Chrome/Edge. Không cần npm. Các script dùng defer và được tải theo thứ tự trong index.html; không đổi sang type="module".
Có thể mở thư mục bằng VS Code rồi chạy Live Server. Google Fonts và liên kết nguồn cần Internet; ảnh đã lưu tại chỗ.

## Sửa ở đâu?
| Nội dung | File |
|---|---|
| Chân trang, tên website, danh sách script | index.html |
| Màu, font, header, trang chủ, footer | css/common.css |
| Timeline, bản đồ, gallery, dialog | css/pages.css |
| Giao diện điện thoại/tablet | css/responsive.css |
| Nguồn lịch sử | js/data/sources.js |
| Danh mục, chú thích và đường dẫn ảnh | js/data/images.js |
| Nội dung 7 mốc tiểu sử, gồm 1890 đã mở rộng | js/data/events.js |
| Thành phần giao diện dùng chung, menu | js/components.js |
| Trang chủ | js/pages/home.js |
| Bố cục timeline | js/pages/biography.js |
| Dữ liệu và trang Sự nghiệp | js/pages/career.js |
| Dữ liệu, sơ đồ và trang Hành trình | js/pages/journey.js |
| Nội dung trang Tư tưởng | js/pages/thoughts.js |
| Thư viện, tìm kiếm và bộ lọc | js/pages/gallery.js |
| Danh sách, bộ lọc tài liệu | js/pages/resources.js |
| Lightbox, dialog, ảnh lỗi | js/ui.js |
| Chuyển trang | js/router.js |
| Gắn sự kiện và khởi động | js/main.js |

## Lưu ý khi sửa
- Không cần app.js hoặc style.css cũ trong cấu trúc mới.
- Giữ thứ tự các script trong index.html và thuộc tính defer.
- Chỉnh text để đổi phần tóm tắt timeline; chỉnh detail để đổi nội dung cửa sổ chi tiết.
- Giữ nguyên thư mục assets. Đường dẫn ảnh tính từ index.html.
- Ctrl+S để lưu và Ctrl+F5 trên trình duyệt để cập nhật.
- Đã giữ dòng chân trang sinh viên và mở rộng mốc 1890.
- Nội dung, nguồn ảnh và giấy phép xem trong website và hồ sơ Commons. Ảnh Bundesarchiv: CC BY-SA 3.0 DE.
- Đã kiểm tra cú pháp, thứ tự tải script và logic bằng DOM mô phỏng; chưa kiểm tra trực quan trên trình duyệt.
