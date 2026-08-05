# Search Store

Project React học tập mô phỏng trang tìm kiếm sản phẩm thương mại điện tử. Dữ liệu lấy từ JSON Server; tìm kiếm, lọc, sắp xếp và phân trang xử lý bằng React hooks, không dùng Algolia hoặc React InstantSearch.

## Công nghệ

- React 19, Vite, JavaScript
- CSS thuần
- JSON Server
- Lucide React
- Concurrently

## Cài đặt và chạy

```bash
npm install
npm run dev
```

Một lệnh khởi động cả hai dịch vụ:

- Frontend: [http://localhost:5173](http://localhost:5173)
- JSON Server: [http://localhost:3001/products](http://localhost:3001/products)

Build production:

```bash
npm run build
npm run preview
```

## Chức năng

- Tìm kiếm có debounce trên tên, brand, category và description
- Lọc nhiều category/brand, khoảng giá, free shipping và rating
- Đọc/ghi query `q`, `free_shipping`, `category`, `brand`, `page`
- Sắp xếp, chọn 8/12/16 sản phẩm mỗi trang và phân trang
- Loading skeleton, lỗi kèm retry, empty state
- Sidebar desktop và filter drawer mobile
- 48 sản phẩm mẫu đa dạng từ JSON Server
- Highlight từ khóa trong tên sản phẩm

Mở thử trạng thái free shipping: [http://localhost:5173/?free_shipping=true](http://localhost:5173/?free_shipping=true)
