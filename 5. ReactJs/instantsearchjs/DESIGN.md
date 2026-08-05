# Search Store Design

## Direction

Giao diện vận hành lấy cảm hứng từ bàn điều khiển ánh sáng sân khấu: vùng header xanh midnight chứa hành động tìm kiếm chính; vùng kết quả trắng sáng, rõ và kỹ thuật. Không dùng gradient trang trí hoặc hiệu ứng phức tạp.

## Color

- Midnight navy `#111a3a`: header và nền nhận diện
- Cobalt `#3157d5`: control active, link, focus và nút chính
- Coral `#ff795f`: màu trạng thái dự phòng, dùng tiết chế
- Canvas `#f6f7fb`, surface `#ffffff`, ink `#172033`
- Border `#e2e6ef`, muted text `#667085`

## Typography

Manrope cho toàn giao diện, fallback system sans. Heading đậm, tracking nhẹ âm; nội dung và control nhỏ, ưu tiên scan nhanh.

## Components

- Card viền 1px, radius 10px, shadow nhẹ có offset
- Input/select nền trắng, border rõ, focus ring cobalt
- Header search cao 62px desktop, 54px mobile
- Badge shipping xanh lá nhạt, sao rating vàng
- Sidebar không bọc card để giữ hierarchy phẳng

## Layout

Nội dung tối đa 1240px. Desktop chia sidebar 280px và kết quả co giãn. Grid 4 cột ở màn hình rộng, 3 cột desktop nhỏ, 2 cột tablet, 1 cột mobile hẹp. Dưới 768px dùng drawer filter cố định và khóa body scroll.

## Motion

Chỉ dùng hover nâng card, switch trượt và drawer đi vào. Tất cả tắt gần như tức thì khi `prefers-reduced-motion: reduce`.
