# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React, Vite, JavaScript, CSS thuần, JSON Server và Lucide React theo yêu cầu.

## Users

Người đang học React, cần ví dụ thực tế, dễ đọc về tìm kiếm sản phẩm, bộ lọc kết hợp, đồng bộ URL và giao diện responsive.

## Product Purpose

Tạo cửa hàng tìm kiếm sản phẩm mẫu có dữ liệu REST cục bộ. Thành công khi người học có thể chạy bằng một lệnh, thử đầy đủ tìm kiếm/lọc/sắp xếp/phân trang và tiếp tục mở rộng code.

## Positioning

Bản thực hành nhỏ, không phụ thuộc Algolia, Redux, Tailwind hoặc UI framework; toàn bộ luồng tìm kiếm được thể hiện bằng React hooks và JavaScript dễ theo dõi.

## Operating Context

Chạy cục bộ với Vite và JSON Server. Người dùng thao tác trên desktop, tablet hoặc mobile; trạng thái bộ lọc quan trọng được lưu trong query string để refresh không mất lựa chọn.

## Capabilities and Constraints

- Lấy sản phẩm từ `http://localhost:3001/products`.
- Tìm kiếm không phân biệt hoa thường trên tên, brand, category và description.
- Kết hợp các nhóm lọc bằng AND, lựa chọn trong cùng nhóm bằng OR.
- Hỗ trợ query `q`, `free_shipping`, `category`, `brand`, `page`.
- Có loading, error, empty, sort, số item mỗi trang, phân trang và filter drawer trên mobile.
- Tối thiểu 40 sản phẩm mẫu đa dạng.

## Brand Commitments

Tên giao diện “Search Store”, mô tả “Stop looking for an item — find it.”, tinh thần thị giác xanh đậm/xanh tím của trang tham khảo nhưng không dùng source hoặc tài sản thương hiệu gốc.

## Evidence on Hand

Dữ liệu và nội dung sản phẩm là dữ liệu mẫu tự tạo trong `db.json`; không có logo, ảnh thương hiệu hoặc tuyên bố thương mại thật.

## Product Principles

- Mọi control hiển thị đều phải hoạt động.
- Code tách theo trách nhiệm nhưng tránh abstraction không cần thiết.
- URL phản ánh trạng thái tìm kiếm quan trọng.
- Trạng thái lỗi luôn chỉ rõ cách khôi phục.
- Responsive và keyboard focus là yêu cầu cơ bản.

## Accessibility & Inclusion

Control có label, focus state rõ, button có tên truy cập, drawer dùng semantics phù hợp và tôn trọng `prefers-reduced-motion`.
