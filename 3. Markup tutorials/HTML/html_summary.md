# Tổng hợp kiến thức HTML

## 1. HTML là gì?
- **HTML** (*HyperText Markup Language*) mô tả cấu trúc trang web bằng các phần tử.
- HTML tạo cấu trúc; CSS tạo kiểu; JavaScript tạo hành vi.
- HTML5 là chuẩn hiện đại, hỗ trợ semantic, multimedia và API trình duyệt.

## 2. Khung tài liệu cơ bản
```html
<!doctype html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tiêu đề</title>
</head>
<body>
  Nội dung
</body>
</html>
```
- `<!doctype html>` bật chế độ HTML5.
- `head` chứa metadata; `body` chứa nội dung hiển thị.

## 3. Phần tử và thuộc tính
```html
<a href="https://example.com" target="_blank" rel="noreferrer">Link</a>
<img src="image.jpg" alt="Mô tả ảnh">
```
- Phần tử thường gồm thẻ mở, nội dung và thẻ đóng; thẻ rỗng như `img`, `input`, `br` không có thẻ đóng.
- Thuộc tính nằm trong thẻ mở; giá trị nên đặt trong dấu ngoặc kép.
- Luôn có `alt` cho ảnh có ý nghĩa; ảnh trang trí có thể dùng `alt=""`.

## 4. Văn bản và liên kết
```html
<h1>Tiêu đề chính</h1>
<h2>Tiêu đề phụ</h2>
<p>Đoạn văn với <strong>nhấn mạnh</strong> và <em>nhấn giọng</em>.</p>
<a href="#contact">Tới phần liên hệ</a>
```
- Chỉ nên có một `h1` đại diện cho chủ đề chính; không chọn heading theo kích thước mà theo cấp nội dung.
- Dùng `strong`/`em` khi có ý nghĩa ngữ nghĩa, không chỉ để in đậm/nghiêng.

## 5. Semantic HTML
Các phần tử nên dùng theo ý nghĩa:
```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<section><h2>...</h2>...</section>
<article>...</article>
<aside>...</aside>
<footer>...</footer>
```
Semantic giúp SEO, accessibility và bảo trì tốt hơn; tránh lạm dụng `div` khi có thẻ phù hợp.

## 6. Danh sách
```html
<ul><li>Mục không thứ tự</li></ul>
<ol><li>Mục có thứ tự</li></ol>
<dl><dt>HTML</dt><dd>Ngôn ngữ đánh dấu</dd></dl>
```

## 7. Hình ảnh, âm thanh và video
```html
<video controls src="movie.mp4"></video>
<audio controls src="sound.mp3"></audio>
<iframe title="Nội dung nhúng" src="..."></iframe>
```
- `controls` cho phép người dùng điều khiển media.
- Dùng `width`, `height`, `loading="lazy"` và định dạng phù hợp khi cần tối ưu.

## 8. Bảng
```html
<table>
  <caption>Bảng dữ liệu</caption>
  <thead><tr><th scope="col">Tên</th><th scope="col">Tuổi</th></tr></thead>
  <tbody><tr><td>An</td><td>20</td></tr></tbody>
</table>
```
Chỉ dùng `table` cho dữ liệu dạng bảng, không dùng để dàn bố cục.

## 9. Form
```html
<form action="/submit" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>
  <button type="submit">Gửi</button>
</form>
```
- `label` phải liên kết với `id`; `name` là khóa gửi dữ liệu.
- Kiểu thường dùng: `text`, `email`, `password`, `number`, `date`, `radio`, `checkbox`, `file`.
- Thuộc tính quan trọng: `required`, `minlength`, `maxlength`, `min`, `max`, `pattern`, `placeholder`.
- Không dùng `placeholder` thay cho `label`.

## 10. `class` và `id`
```html
<p id="intro" class="highlight">Nội dung</p>
```
- `class` có thể dùng cho nhiều phần tử, CSS chọn bằng `.`.
- `id` phải duy nhất trong tài liệu, CSS chọn bằng `#`; dùng cho liên kết neo, label hoặc JavaScript khi cần.
- Không đặt khoảng trắng trong `id` và không bắt đầu bằng số.

## 11. Ký tự đặc biệt và metadata
```html
&lt;  &gt;  &amp;  &quot;  &copy;
<meta name="description" content="Mô tả trang">
```
- Escape ký tự có ý nghĩa HTML khi hiển thị dưới dạng văn bản.
- `charset`, `viewport`, `title` và `description` là metadata cơ bản nên có.

## 12. Quy tắc cần nhớ
- Ưu tiên semantic HTML và cấu trúc heading đúng.
- Nội dung tương tác phải dùng phần tử có thể truy cập bằng bàn phím (`button`, `a`, form control), không biến `div` thành nút.
- Kiểm tra HTML hợp lệ, thuộc tính `alt`, `label`, `title` và trạng thái form trước khi hoàn thành trang.
