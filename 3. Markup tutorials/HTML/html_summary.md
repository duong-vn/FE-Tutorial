# Tổng hợp kiến thức HTML

---

## 1. HTML là gì?

- **HTML** là viết tắt của **Hyper Text Markup Language** (Ngôn ngữ đánh dấu siêu văn bản).
- HTML là ngôn ngữ đánh dấu tiêu chuẩn dùng để tạo các trang web.
- HTML mô tả **cấu trúc** của một trang web.
- HTML bao gồm một chuỗi các **phần tử** (elements).
- Các phần tử HTML cho trình duyệt biết cách **hiển thị nội dung**.

---

## 2. Lịch sử HTML

```
          Earliest HTML in Use
               ↓
               |     1995 – HTML 2.0
               |          ↓
               |          |     1997 – HTML 3.2
               |          |          ↓
               |          |          |     1999 – HTML 4.01
               |          |          |          ↓
               |          |          |          |  2000 – XHTML 1.0
               |          |          |          |       ↓
               |          |          |          |       |  2001 – XHTML 1.1
               |          |          |          |       |       ↓
               |          |          |          |       |       |  20XX – HTML 5.0
               |          |          |          |       |       |       ↓
───────────────┴──────────┴──────────┴──────────┴───────┴───────┴───────┴───
    1990          1995                    2000                      20XX
```

| Năm | Phiên bản |
|---|---|
| 1990 | Earliest HTML in Use |
| 1995 | HTML 2.0 |
| 1997 | HTML 3.2 |
| 1999 | HTML 4.01 |
| 2000 | XHTML 1.0 |
| 2001 | XHTML 1.1 |
| 20XX | HTML 5.0 |

---

## 3. Cấu trúc HTML (HTML Structure)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tiêu đề trang</title>
  </head>
  <body>
    <h1>Đây là tiêu đề lớn</h1>
    <p>Đây là một đoạn văn bản.</p>
  </body>
</html>
```

**Giải thích từng phần:**

| Thành phần | Mô tả |
|---|---|
| `<!DOCTYPE html>` | Khai báo rằng tài liệu này là HTML5 |
| `<html>` | Phần tử gốc (root element) của trang HTML |
| `<head>` | Chứa các thông tin meta (metadata) về trang HTML |
| `<title>` | Chỉ định tiêu đề cho trang HTML (hiển thị trên tab trình duyệt) |
| `<body>` | Định nghĩa phần thân của tài liệu, chứa tất cả nội dung hiển thị như tiêu đề, đoạn văn, hình ảnh, liên kết, bảng, danh sách, v.v. |
| `<h1>` | Định nghĩa một tiêu đề lớn |
| `<p>` | Định nghĩa một đoạn văn bản |

---

## 4. Công cụ cho nhà phát triển

Các trang web có thể được tạo và chỉnh sửa bằng các trình soạn thảo HTML chuyên nghiệp. Tuy nhiên, để học HTML, chúng ta nên sử dụng một trình soạn thảo văn bản đơn giản như **Notepad**, **TextEdit**, **Sublime Text**,...

### Các bước tạo trang web đầu tiên:

| Bước | Hành động | Mô tả |
|---|---|---|
| **Bước 1** | Mở trình soạn thảo | Mở Notepad, Sublime Text hoặc VS Code |
| **Bước 2** | Viết mã HTML | Nhập cấu trúc HTML cơ bản |
| **Bước 3** | Lưu file HTML | Lưu file với phần mở rộng `.html` (ví dụ: `index.html`) |
| **Bước 4** | Xem trang web | Mở file HTML trong trình duyệt để xem kết quả |

**Ví dụ — Trang web đầu tiên:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Trang web đầu tiên</title>
  </head>
  <body>
    <h1>Xin chào!</h1>
    <p>Đây là trang web đầu tiên của tôi.</p>
  </body>
</html>
```

> 💡 **Mẹo:** Sử dụng tổ hợp phím `Ctrl + S` để lưu file và nhấp đúp vào file `.html` để mở trong trình duyệt.

---

## 5. HTML Tag (Thẻ HTML)

- Thẻ HTML là một đoạn ngôn ngữ đánh dấu dùng để chỉ ra **điểm bắt đầu** và **điểm kết thúc** của một phần tử HTML trong tài liệu HTML.
- Thẻ HTML giúp trình duyệt web chuyển đổi tài liệu HTML thành các trang web.
- Ví dụ: thẻ `<p>` dùng để tổ chức nội dung văn bản thành các đoạn văn, thẻ `<img>` dùng để nhúng hình ảnh.
- Nhiều thẻ (nhưng không phải tất cả) sử dụng **thẻ mở** và **thẻ đóng** để bao quanh nội dung mà chúng chỉnh sửa.
- Các thẻ HTML **không hiển thị** trên trình duyệt.

```html
<!-- Thẻ có thẻ mở và thẻ đóng -->
<p>Nội dung đoạn văn</p>

<!-- Thẻ tự đóng (không có thẻ đóng) -->
<img src="image.jpg" alt="Hình ảnh">
<br>
<hr>
```

---

## 6. HTML Headings (Tiêu đề HTML)

HTML headings là các tiêu đề hoặc phụ đề mà bạn muốn hiển thị trên trang web.

Tiêu đề HTML được định nghĩa bằng các thẻ từ `<h1>` đến `<h6>`:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

**Kết quả minh họa:**

> # Heading 1
> ## Heading 2
> ### Heading 3
> #### Heading 4
> ##### Heading 5
> ###### Heading 6

**Kết quả hiển thị:**

| Thẻ | Kích thước | Vai trò |
|---|---|---|
| `<h1>` | Lớn nhất | Tiêu đề chính |
| `<h2>` | Lớn | Tiêu đề phụ |
| `<h3>` | Trung bình | Tiêu đề cấp 3 |
| `<h4>` | Nhỏ hơn | Tiêu đề cấp 4 |
| `<h5>` | Nhỏ | Tiêu đề cấp 5 |
| `<h6>` | Nhỏ nhất | Tiêu đề cấp 6 |

> ⚠️ Nên sử dụng `<h1>` cho tiêu đề chính, tiếp theo là `<h2>`, rồi đến `<h3>` ít quan trọng hơn, v.v.

---

## 7. HTML Paragraphs (Đoạn văn HTML)

Đoạn văn luôn bắt đầu trên một **dòng mới** và thường là một khối văn bản.

Phần tử `<p>` định nghĩa một đoạn văn:

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

**Kết quả hiển thị:**

> This is a paragraph.
>
> This is another paragraph.

---

## 8. HTML Text Formatting (Định dạng văn bản HTML)

Các phần tử định dạng được thiết kế để hiển thị các kiểu văn bản đặc biệt:

| Thẻ | Mô tả | Ví dụ hiển thị |
|---|---|---|
| `<b>` | Văn bản in đậm (Bold) | **This text is bold.** |
| `<strong>` | Văn bản quan trọng (Important) | **This text is important!** |
| `<i>` | Văn bản in nghiêng (Italic) | *This text is italic.* |
| `<em>` | Văn bản nhấn mạnh (Emphasized) | *This text is emphasized.* |
| `<mark>` | Văn bản đánh dấu (Marked) | Văn bản được ==highlight== |
| `<small>` | Văn bản nhỏ hơn (Smaller) | Văn bản nhỏ |
| `<del>` | Văn bản bị xóa (Deleted) | ~~Văn bản bị gạch ngang~~ |
| `<ins>` | Văn bản được chèn (Inserted) | Văn bản được gạch chân |
| `<sub>` | Chỉ số dưới (Subscript) | H₂O |
| `<sup>` | Chỉ số trên (Superscript) | X² |

```html
<b>This text is bold.</b>
<strong>This text is important!</strong>
<i>This text is italic.</i>
<em>This text is emphasized.</em>
<mark>Marked text</mark>
<small>This is some smaller text.</small>
<del>My favorite color is blue.</del> red.
<ins>My favorite color is</ins> <del>blue</del> red.
<sub>subscripted</sub> text.
<sup>superscripted</sup> text.
```

**Kết quả minh họa:**

> **This text is bold.**
> **This text is important!**
> *This text is italic.*
> *This text is emphasized.*
> Do not forget to buy ==milk== today.
> This is some smaller text.
> My favorite color is ~~blue~~ red.
> My favorite color is ~~blue~~ red.
> This is subscripted text.
> This is superscripted text.

---

## 9. HTML Links (Liên kết HTML)

- Liên kết HTML là các **hyperlinks** (siêu liên kết).
- Bạn có thể nhấp vào liên kết và **chuyển đến** một tài liệu khác.
- Khi di chuột qua liên kết, con trỏ chuột sẽ chuyển thành hình **bàn tay nhỏ**.

**Cú pháp:**

```html
<a href="url">link text</a>
```

> Thuộc tính quan trọng nhất của phần tử `<a>` là thuộc tính **`href`**, chỉ ra **đích đến** của liên kết.

**Ví dụ:**

```html
<!-- Liên kết đến trang khác -->
<a href="https://www.google.com">Truy cập Google</a>

<!-- Mở liên kết trong tab mới -->
<a href="https://www.google.com" target="_blank">Mở Google trong tab mới</a>

<!-- Liên kết đến email -->
<a href="mailto:example@email.com">Gửi email</a>
```

**Kết quả minh họa:**

> 🔗 [Truy cập Google](https://www.google.com)
> 🔗 [Mở Google trong tab mới](https://www.google.com)
> 📧 [Gửi email](mailto:example@email.com)

---

## 10. HTML Images (Hình ảnh HTML)

- Hình ảnh có thể cải thiện **thiết kế** và **giao diện** của trang web.
- Thẻ `<img>` dùng để nhúng hình ảnh vào trang web.
- Thẻ `<img>` là thẻ **rỗng** (empty tag), chỉ chứa thuộc tính và **không có thẻ đóng**.

**Cú pháp:**

```html
<img src="url" alt="alternate text">
```

| Thuộc tính | Mô tả |
|---|---|
| `src` | Chỉ định đường dẫn (URL) đến hình ảnh |
| `alt` | Cung cấp văn bản thay thế nếu người dùng không thể xem hình ảnh |

**Ví dụ:**

```html
<img src="photo.jpg" alt="Mô tả hình ảnh" width="500" height="300">
```

---

## 11. HTML Tables (Bảng HTML)

Bảng HTML cho phép các nhà phát triển web sắp xếp dữ liệu thành **hàng** và **cột**.

- Mỗi ô trong bảng được định nghĩa bởi thẻ `<td>` và `</td>`.
- Các phần tử dữ liệu bảng là các **vùng chứa dữ liệu** của bảng. Chúng có thể chứa mọi loại phần tử HTML: văn bản, hình ảnh, danh sách, bảng khác, v.v.

```html
<table>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </tbody>
</table>
```

**Kết quả hiển thị:**

| Company | Contact | Country |
|---|---|---|
| Alfreds Futterkiste | Maria Anders | Germany |
| Centro comercial Moctezuma | Francisco Chang | Mexico |

**Các thẻ bảng quan trọng:**

| Thẻ | Mô tả |
|---|---|
| `<table>` | Định nghĩa bảng |
| `<thead>` | Nhóm nội dung phần đầu bảng |
| `<tbody>` | Nhóm nội dung phần thân bảng |
| `<tr>` | Định nghĩa một hàng |
| `<th>` | Định nghĩa ô tiêu đề (in đậm, căn giữa) |
| `<td>` | Định nghĩa ô dữ liệu |

---

## 12. HTML Lists (Danh sách HTML)

Danh sách HTML cho phép nhà phát triển web **nhóm** các mục liên quan lại với nhau.

### 12.1. Danh sách không thứ tự (Unordered List)

Bắt đầu bằng thẻ `<ul>`. Mỗi mục bắt đầu bằng thẻ `<li>`:

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

**Kết quả:**
- Coffee
- Tea
- Milk

### 12.2. Danh sách có thứ tự (Ordered List)

Bắt đầu bằng thẻ `<ol>`. Mỗi mục bắt đầu bằng thẻ `<li>`:

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

**Kết quả:**
1. Coffee
2. Tea
3. Milk

---

## 13. HTML Forms (Biểu mẫu HTML)

- Biểu mẫu HTML dùng để **thu thập dữ liệu** từ người dùng.
- Dữ liệu nhập vào thường được gửi đến **máy chủ** để xử lý.
- Phần tử `<form>` dùng để tạo biểu mẫu HTML cho người dùng nhập liệu.

**Ví dụ:**

```html
<form action="/submit" method="post">
  <!-- Input văn bản -->
  <label for="username">Tên người dùng:</label>
  <input type="text" id="username" name="username" placeholder="Nhập tên...">

  <!-- Input mật khẩu -->
  <label for="password">Mật khẩu:</label>
  <input type="password" id="password" name="password">

  <!-- Input email -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <!-- Radio button -->
  <p>Giới tính:</p>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Nam</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Nữ</label>

  <!-- Checkbox -->
  <p>Sở thích:</p>
  <input type="checkbox" id="sport" name="hobby" value="sport">
  <label for="sport">Thể thao</label>
  <input type="checkbox" id="music" name="hobby" value="music">
  <label for="music">Âm nhạc</label>

  <!-- Nút gửi -->
  <input type="submit" value="Gửi">
</form>
```

### Phần tử `<input>`

Phần tử `<input>` là phần tử form được sử dụng **nhiều nhất**.

Một phần tử `<input>` có thể được hiển thị theo nhiều cách khác nhau, tùy thuộc vào thuộc tính `type`.

| Type | Mô tả |
|---|---|
| `<input type="text">` | Hiển thị ô nhập văn bản một dòng |
| `<input type="radio">` | Hiển thị nút radio (chọn một trong nhiều lựa chọn) |
| `<input type="checkbox">` | Hiển thị checkbox (chọn không hoặc nhiều lựa chọn) |
| `<input type="submit">` | Hiển thị nút gửi biểu mẫu |
| `<input type="button">` | Hiển thị nút bấm |

---

#### Input Type: Text

`<input type="text">` định nghĩa ô nhập văn bản một dòng.

```html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```

**Kết quả trên trình duyệt:**

> First name: `[_______________]`
>
> Last name: `[_______________]`

---

#### Input Type: Radio

`<input type="radio">` định nghĩa nút radio. Nút radio cho phép người dùng chọn **MỘT** trong số các lựa chọn giới hạn.

```html
<p>Choose your favorite Web language:</p>

<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>
```

**Kết quả trên trình duyệt:**

> Choose your favorite Web language:
>
> ○ HTML
> ○ CSS
> ○ JavaScript

---

#### Input Type: Checkbox

`<input type="checkbox">` định nghĩa checkbox.

```html
<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>
```

**Kết quả trên trình duyệt:**

> ☐ I have a bike
> ☐ I have a car
> ☐ I have a boat

---

#### Input Type: Submit

`<input type="submit">` định nghĩa nút gửi dữ liệu biểu mẫu đến trình xử lý (form-handler).

```html
<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form>
```

**Kết quả trên trình duyệt:**

> First name: `[John___________]`
>
> Last name: `[Doe____________]`
>
> `[Submit]`

---

## 14. Inline Element vs Block Element

Mỗi phần tử HTML đều có một giá trị hiển thị mặc định, tùy thuộc vào loại phần tử. Có hai giá trị hiển thị: **block** và **inline**.

### 14.1. Block Element (Phần tử khối)

- Phần tử block luôn **bắt đầu trên một dòng mới**.
- Trình duyệt tự động thêm khoảng trống (margin) **trước và sau** phần tử.
- Phần tử block luôn chiếm **toàn bộ chiều rộng** có sẵn (trải dài hết từ trái sang phải).

**Hai phần tử block thường dùng:** `<p>` và `<div>`.

```html
<div style="background-color: lightblue;">
  Đây là một phần tử div (block)
</div>
<div style="background-color: lightcoral;">
  Đây là một phần tử div khác (block)
</div>
```
> Mỗi block chiếm **toàn bộ một dòng** riêng biệt.

**Danh sách các phần tử block phổ biến:**

`<div>`, `<p>`, `<h1>` ~ `<h6>`, `<form>`, `<table>`, `<ul>`, `<ol>`, `<li>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>`, `<main>`, `<blockquote>`, `<hr>`

### 14.2. Inline Element (Phần tử nội tuyến)

- Phần tử inline **không bắt đầu trên một dòng mới**.
- Phần tử inline chỉ chiếm **đúng phần chiều rộng cần thiết**.

**Hai phần tử inline thường dùng:** `<span>` và `<a>`.

```html
<p>Đây là <span style="color: red;">văn bản đỏ</span> và <a href="#">một liên kết</a> trong cùng một dòng.</p>
```

**Kết quả:**

> Đây là **văn bản đỏ** và [một liên kết](#) trong cùng một dòng.

> Các phần tử inline nằm **cùng một dòng** với nhau.

**Danh sách các phần tử inline phổ biến:**

`<span>`, `<a>`, `<img>`, `<strong>`, `<em>`, `<b>`, `<i>`, `<br>`, `<input>`, `<label>`, `<code>`, `<small>`, `<sub>`, `<sup>`

### So sánh Block vs Inline:

| Đặc điểm | Block Element | Inline Element |
|---|---|---|
| Bắt đầu dòng mới | ✅ Có | ❌ Không |
| Chiều rộng | Chiếm toàn bộ chiều rộng | Chỉ chiếm phần cần thiết |
| Chứa phần tử khác | Có thể chứa block & inline | Chỉ chứa inline |
| Ví dụ | `<div>`, `<p>`, `<h1>` | `<span>`, `<a>`, `<img>` |

---

## 15. HTML Semantics (Ngữ nghĩa HTML)

### 15.1. Semantic Elements là gì?

- **Semantic elements** = các phần tử **có ý nghĩa**.
- Ví dụ về phần tử **không có ngữ nghĩa**: `<div>` và `<span>` — không nói gì về nội dung bên trong.
- Ví dụ về phần tử **có ngữ nghĩa**: `<form>`, `<table>`, và `<article>` — xác định rõ ràng nội dung của nó.

---

### 15.2. `<section>` — Phần tử phân đoạn

Phần tử `<section>` định nghĩa một **phân đoạn** trong tài liệu.

**Có thể sử dụng cho:** Các chương, Phần giới thiệu, Mục tin tức, Thông tin liên hệ.

```html
<section>
  <h2>Giới thiệu Sun*</h2>
  <p>Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm,
  tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm "Awesome" nhất
  cho end-user.</p>
</section>

<section>
  <h2>Sứ mệnh của Sun*</h2>
  <p>Với lý tưởng chung tay xây dựng nên một tương lai tốt đẹp và tươi sáng,
  sứ mệnh của Framgia là luôn cố gắng tạo ra những trải nghiệm thú vị khiến
  người ta phải thốt lên rằng "Awesome!" (Thật tuyệt vời), hoặc "Wow" hay
  "Crazy" (Thật không thể tin được)</p>
</section>
```

---

### 15.3. `<article>` — Phần tử bài viết

Phần tử `<article>` chỉ định nội dung **độc lập, tự chứa** (self-contained).

Một article nên có ý nghĩa riêng và có thể được phân phối **độc lập** với phần còn lại của trang web.

**Có thể sử dụng cho:** Bài đăng trên diễn đàn, Bài blog, Bình luận của người dùng, Thẻ sản phẩm, Bài báo.

```html
<article>
  <h2>Google Chrome</h2>
  <p>Google Chrome is a web browser developed by Google, released in 2008.
  Chrome is the world's most popular web browser today!</p>
</article>

<article>
  <h2>Mozilla Firefox</h2>
  <p>Mozilla Firefox is an open-source web browser developed by Mozilla.
  Firefox has been the second most popular web browser since January, 2018.</p>
</article>
```

---

### 15.4. `<header>` — Phần tử đầu trang

Phần tử `<header>` đại diện cho một vùng chứa **nội dung giới thiệu** hoặc **tập hợp các liên kết điều hướng**.

**Một `<header>` thường chứa:**
- Một hoặc nhiều phần tử tiêu đề (`<h1>` - `<h6>`)
- Logo hoặc biểu tượng
- Thông tin tác giả

```html
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural
  environment, and build a future in which humans live in harmony with
  nature.</p>
</article>
```

---

### 15.5. `<footer>` — Phần tử chân trang

Phần tử `<footer>` định nghĩa **chân trang** cho tài liệu hoặc phân đoạn.

**Một `<footer>` thường chứa:**
- Thông tin tác giả
- Thông tin bản quyền
- Thông tin liên hệ
- Sơ đồ trang (sitemap)

> 💡 Có thể có **nhiều phần tử `<footer>`** trong một tài liệu.

```html
<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
```

---

### 15.6. Tại sao nên sử dụng Semantic Elements?

| Lý do | Giải thích |
|---|---|
| 🔍 **SEO** | Công cụ tìm kiếm sẽ coi nội dung của nó là **từ khóa quan trọng**, ảnh hưởng đến thứ hạng tìm kiếm của trang |
| ♿ **Khả năng tiếp cận** | Trình đọc màn hình có thể sử dụng nó làm **điểm đánh dấu** để giúp người dùng khiếm thị điều hướng trang |
| 📖 **Dễ đọc code** | Tìm các khối mã có ý nghĩa **dễ dàng hơn đáng kể** so với tìm kiếm qua hàng loạt `<div>` |
| 🏷️ **Đặt tên chuẩn** | Đặt tên theo ngữ nghĩa phản ánh đúng cách **đặt tên thành phần/phần tử tùy chỉnh** |

**Tổng hợp các Semantic Elements phổ biến:**

| Phần tử | Mô tả |
|---|---|
| `<header>` | Đầu trang hoặc đầu phân đoạn |
| `<nav>` | Thanh điều hướng |
| `<main>` | Nội dung chính của trang |
| `<section>` | Phân đoạn nội dung |
| `<article>` | Bài viết độc lập |
| `<aside>` | Nội dung bên lề (sidebar) |
| `<footer>` | Chân trang |
| `<figure>` | Nội dung minh họa (hình ảnh, biểu đồ) |
| `<figcaption>` | Chú thích cho `<figure>` |
| `<details>` | Chi tiết có thể mở/đóng |
| `<summary>` | Tiêu đề cho `<details>` |
| `<time>` | Ngày/giờ |

---

## 16. HTML Attributes (Thuộc tính HTML)

### 16.1. Thuộc tính HTML là gì?

- Thuộc tính HTML cung cấp **thông tin bổ sung** về các phần tử HTML.
- Tất cả các phần tử HTML đều có thể có thuộc tính.
- Thuộc tính luôn được chỉ định trong **thẻ mở**.
- Thuộc tính thường có dạng cặp **tên/giá trị**: `name="value"`.

---

### 16.2. Thuộc tính `href`

Thẻ `<a>` định nghĩa một siêu liên kết. Thuộc tính `href` chỉ định **URL** của trang mà liên kết trỏ đến.

```html
<a href="https://sun-asterisk.vn/">Visit Sun-asterisk</a>
```

---

### 16.3. Thuộc tính `src`

Thẻ `<img>` dùng để nhúng hình ảnh vào trang HTML. Thuộc tính `src` chỉ định **đường dẫn** đến hình ảnh cần hiển thị.

Có hai cách chỉ định URL trong thuộc tính `src`:

| Loại | Mô tả | Ví dụ |
|---|---|---|
| **Absolute URL** | Liên kết đến hình ảnh bên ngoài, được lưu trữ trên trang web khác | `src="https://sun-asterisk.vn/wp-content/uploads/2020/11/intro-business.png"` |
| **Relative URL** | Liên kết đến hình ảnh được lưu trữ trong cùng trang web | `src="/images/sun_asterisk.jpg"` |

> 💡 Hầu như luôn tốt nhất khi sử dụng **Relative URL**. Chúng sẽ không bị hỏng nếu bạn thay đổi tên miền.

---

### 16.4. Thuộc tính `alt`

Thuộc tính `alt` **bắt buộc** cho thẻ `<img>`, chỉ định văn bản thay thế cho hình ảnh khi hình ảnh không thể hiển thị. Điều này có thể do:
- Kết nối chậm
- Lỗi trong thuộc tính `src`
- Người dùng sử dụng trình đọc màn hình

```html
<img src="img_girl.jpg" alt="Girl with a jacket">
```

---

### 16.5. Thuộc tính `class`

- Thuộc tính `class` dùng để chỉ định **một lớp** cho phần tử HTML.
- Nhiều phần tử HTML có thể **chia sẻ cùng một class**.
- Thuộc tính `class` thường được dùng để trỏ đến tên lớp trong **stylesheet CSS**. Nó cũng có thể được JavaScript sử dụng để truy cập và thao tác các phần tử.
- Thuộc tính `class` có thể dùng trên **bất kỳ phần tử HTML** nào.

```html
<h1>My <span class="note">Important</span> Heading</h1>
```

```css
/* CSS áp dụng cho class "note" */
.note {
  color: red;
  font-size: 20px;
}
```

---

### 16.6. Thuộc tính `id`

- Thuộc tính `id` dùng để chỉ định **một id duy nhất** cho phần tử HTML.
- **Không thể** có nhiều hơn một phần tử với cùng `id` trong một tài liệu HTML.
- Tên `id` phải chứa **ít nhất một ký tự**, không được bắt đầu bằng số và không được chứa khoảng trắng.

```html
<h1 id="myHeader">My Cities</h1>
```

```css
/* CSS áp dụng cho id "myHeader" */
#myHeader {
  color: blue;
  text-align: center;
}
```

### So sánh `class` vs `id`:

| Đặc điểm | `class` | `id` |
|---|---|---|
| Ký hiệu CSS | `.` (dấu chấm) | `#` (dấu thăng) |
| Số lần sử dụng | Nhiều phần tử có thể cùng class | Duy nhất trong trang |
| Mục đích | Nhóm phần tử, áp dụng CSS chung | Xác định phần tử cụ thể |
| Ví dụ | `class="highlight"` | `id="header"` |
