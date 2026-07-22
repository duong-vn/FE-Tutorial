# Tổng hợp kiến thức CSS

---

## 1. Giới thiệu CSS

CSS là ngôn ngữ được sử dụng để tạo kiểu cho một trang web.

CSS là viết tắt của **Cascading Style Sheets** — Trang tính định kiểu theo tầng.

CSS mô tả cách các phần tử HTML được hiển thị trên màn hình, trên giấy hoặc trên các phương tiện khác.

CSS giúp tiết kiệm rất nhiều công sức vì nó có thể kiểm soát bố cục của nhiều trang web cùng một lúc.

---

## 2. CSS dùng để làm gì?

CSS được sử dụng để xác định kiểu dáng cho các trang web, bao gồm thiết kế, bố cục và cách hiển thị khác nhau trên nhiều thiết bị và kích thước màn hình.

---

## 3. Cú pháp (Syntax)

```css
h1 {
  color: blue;
  font-size: 12px;
}
```

**Trong đó:**

| Thành phần | Giải thích |
|---|---|
| `h1` | Selector |
| `color` | Property |
| `blue` | Value |
| `font-size` | Property |
| `12px` | Value |
| `color: blue;` | Declaration |
| `font-size: 12px;` | Declaration |

---

## 4. Ba cách thêm CSS

### 4.1. CSS ngoài (External CSS)

Sử dụng file `.css` riêng biệt và liên kết vào HTML thông qua thẻ `<link>`.

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

### 4.2. CSS trong (Internal CSS)

Viết CSS bên trong thẻ `<style>` nằm trong phần `<head>` của tài liệu HTML.

```html
<head>
  <style>
    h1 {
      color: blue;
      font-size: 12px;
    }
  </style>
</head>
```

### 4.3. CSS trên dòng (Inline CSS)

Viết CSS trực tiếp trong thuộc tính `style` của phần tử HTML.

```html
<h1 style="color: blue; font-size: 12px;">Tiêu đề</h1>
```

---

## 5. CSS Selectors

CSS Selector được dùng để **chọn** các phần tử HTML mà bạn muốn áp dụng kiểu dáng.

### 5.1. Element Selector (Bộ chọn phần tử)

Chọn tất cả các phần tử có cùng tên thẻ HTML.

```css
p {
  color: red;
  text-align: center;
}
```

> Ví dụ trên sẽ áp dụng kiểu cho **tất cả** thẻ `<p>` trong trang.

### 5.2. ID Selector (Bộ chọn theo ID)

Chọn **một phần tử duy nhất** dựa trên thuộc tính `id`. Sử dụng dấu `#` trước tên id.

```css
#header {
  background-color: black;
  color: white;
}
```

```html
<div id="header">Đây là header</div>
```

> ⚠️ Mỗi `id` phải là **duy nhất** trong một trang HTML, không được trùng lặp.

### 5.3. Class Selector (Bộ chọn theo class)

Chọn tất cả các phần tử có cùng thuộc tính `class`. Sử dụng dấu `.` trước tên class.

```css
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

```html
<p class="highlight">Đoạn văn 1</p>
<p>Đoạn văn 2</p>
<p class="highlight">Đoạn văn 3</p>
```

> Khác với `id`, một `class` có thể được sử dụng cho **nhiều phần tử** và một phần tử có thể có **nhiều class**.

---

## 6. CSS Combinators

CSS Combinators giải thích mối quan hệ giữa các selector. Chúng cho phép bạn chọn phần tử dựa trên **vị trí** của chúng trong cây DOM.

### 6.1. Descendant Selector (Dấu cách ` `)

Chọn tất cả các phần tử là **hậu duệ** (con, cháu, chắt…) của một phần tử được chỉ định.

```css
div p {
  color: blue;
}
```

```html
<div>
  <p>Đoạn này được chọn ✅</p>
  <section>
    <p>Đoạn này cũng được chọn ✅ (cháu của div)</p>
  </section>
</div>
<p>Đoạn này KHÔNG được chọn ❌</p>
```

### 6.2. Child Selector (`>`)

Chọn tất cả các phần tử là **con trực tiếp** (chỉ một cấp) của phần tử được chỉ định.

```css
div > p {
  color: green;
}
```

```html
<div>
  <p>Đoạn này được chọn ✅ (con trực tiếp)</p>
  <section>
    <p>Đoạn này KHÔNG được chọn ❌ (cháu, không phải con trực tiếp)</p>
  </section>
</div>
```

### 6.3. Adjacent Sibling Selector (`+`)

Chọn phần tử **anh em kế tiếp** ngay sau một phần tử được chỉ định (cùng cấp, liền kề).

```css
h2 + p {
  color: orange;
}
```

```html
<h2>Tiêu đề</h2>
<p>Đoạn này được chọn ✅ (liền kề ngay sau h2)</p>
<p>Đoạn này KHÔNG được chọn ❌ (không liền kề trực tiếp)</p>
```

### 6.4. General Sibling Selector (`~`)

Chọn **tất cả** các phần tử anh em đứng **sau** một phần tử được chỉ định (cùng cấp, không cần liền kề).

```css
h2 ~ p {
  color: purple;
}
```

```html
<h2>Tiêu đề</h2>
<p>Đoạn này được chọn ✅</p>
<div>Một div xen giữa</div>
<p>Đoạn này cũng được chọn ✅</p>
```

> **So sánh nhanh:**
>
> | Combinator | Ký hiệu | Phạm vi chọn |
> |---|---|---|
> | Descendant | ` ` (dấu cách) | Tất cả hậu duệ (con, cháu, chắt…) |
> | Child | `>` | Chỉ con trực tiếp |
> | Adjacent Sibling | `+` | Một anh em liền kề ngay sau |
> | General Sibling | `~` | Tất cả anh em phía sau |

---

## 7. CSS Properties (Các thuộc tính CSS)

### 7.1. CSS Colors (Màu sắc)

CSS hỗ trợ nhiều cách để xác định màu sắc:

```css
/* Tên màu */
h1 { color: red; }

/* Mã HEX */
h2 { color: #ff6600; }

/* RGB */
h3 { color: rgb(255, 99, 71); }

/* RGBA (có độ trong suốt) */
p { color: rgba(255, 99, 71, 0.5); }

/* HSL */
span { color: hsl(0, 100%, 50%); }
```

### 7.2. CSS Height & Width (Chiều cao & Chiều rộng)

Thiết lập kích thước cho phần tử. Có thể dùng giá trị cố định hoặc phần trăm.

```css
div {
  width: 300px;      /* Chiều rộng cố định */
  height: 200px;     /* Chiều cao cố định */
  max-width: 100%;   /* Chiều rộng tối đa */
  min-height: 50px;  /* Chiều cao tối thiểu */
}
```

> ⚠️ `height` và `width` **không bao gồm** padding, border và margin. Chúng chỉ thiết lập kích thước cho vùng nội dung bên trong phần tử.

### 7.3. CSS Backgrounds (Nền)

Các thuộc tính để thiết lập nền cho phần tử:

```css
div {
  background-color: #f0f0f0;                /* Màu nền */
  background-image: url("bg.jpg");           /* Ảnh nền */
  background-repeat: no-repeat;              /* Không lặp ảnh */
  background-position: center center;        /* Vị trí ảnh nền */
  background-size: cover;                    /* Kích thước ảnh nền */
  background-attachment: fixed;              /* Cố định nền khi cuộn */
}

/* Viết tắt */
div {
  background: #f0f0f0 url("bg.jpg") no-repeat center center / cover;
}
```

### 7.4. CSS Border (Đường viền)

Thiết lập đường viền cho phần tử:

```css
div {
  border-width: 2px;          /* Độ dày */
  border-style: solid;        /* Kiểu: solid, dashed, dotted, double... */
  border-color: #333;         /* Màu viền */
  border-radius: 10px;        /* Bo góc */
}

/* Viết tắt */
div {
  border: 2px solid #333;
}

/* Chỉ định từng cạnh */
div {
  border-top: 1px solid red;
  border-bottom: 3px dashed blue;
}
```

### 7.5. CSS Position (Vị trí)

Xác định cách phần tử được đặt vị trí trong trang:

| Giá trị | Mô tả |
|---|---|
| `static` | Mặc định, phần tử theo luồng bình thường của trang |
| `relative` | Định vị tương đối so với vị trí bình thường của nó |
| `absolute` | Định vị tuyệt đối so với phần tử cha có `position` khác `static` |
| `fixed` | Cố định so với viewport (cửa sổ trình duyệt) |
| `sticky` | Kết hợp giữa `relative` và `fixed`, dính khi cuộn đến vị trí nhất định |

```css
/* Ví dụ: Header cố định trên cùng */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

/* Ví dụ: Phần tử con định vị trong cha */
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 10px;
  right: 20px;
}
```

### 7.6. CSS Text (Văn bản)

Các thuộc tính định dạng văn bản:

```css
p {
  color: #333;                    /* Màu chữ */
  text-align: center;             /* Căn chỉnh: left, right, center, justify */
  text-decoration: underline;     /* Gạch chân, gạch ngang... */
  text-transform: uppercase;      /* Chuyển chữ hoa/thường */
  text-indent: 50px;              /* Thụt đầu dòng */
  letter-spacing: 2px;            /* Khoảng cách giữa các ký tự */
  line-height: 1.6;               /* Chiều cao dòng */
  word-spacing: 5px;              /* Khoảng cách giữa các từ */
  text-shadow: 2px 2px 4px #ccc;  /* Bóng chữ */
}
```

### 7.7. CSS Pseudo-classes (Lớp giả)

Pseudo-class dùng để định nghĩa trạng thái đặc biệt của phần tử. Cú pháp: `selector:pseudo-class`.

```css
/* Khi di chuột qua */
a:hover {
  color: red;
}

/* Khi được click */
button:active {
  background-color: darkblue;
}

/* Khi được focus */
input:focus {
  border-color: blue;
  outline: none;
}

/* Phần tử con đầu tiên */
li:first-child {
  font-weight: bold;
}

/* Phần tử con cuối cùng */
li:last-child {
  color: gray;
}

/* Phần tử con thứ n */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Link đã truy cập */
a:visited {
  color: purple;
}
```

### 7.8. CSS Margin & Padding (Lề ngoài & Lề trong)

- **Margin**: Khoảng cách **bên ngoài** đường viền (border) — tạo khoảng cách giữa phần tử với các phần tử xung quanh.
- **Padding**: Khoảng cách **bên trong** đường viền — tạo khoảng cách giữa nội dung và đường viền.

```css
div {
  /* Margin - lề ngoài */
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin: 10px 20px 10px 20px;   /* Viết tắt: trên phải dưới trái */
  margin: 10px 20px;             /* Viết tắt: trên-dưới trái-phải */
  margin: 0 auto;                /* Căn giữa theo chiều ngang */

  /* Padding - lề trong */
  padding-top: 15px;
  padding-right: 25px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding: 15px 25px 15px 25px;  /* Viết tắt: trên phải dưới trái */
  padding: 15px 25px;            /* Viết tắt: trên-dưới trái-phải */
}
```

> **Mô hình hộp (Box Model):** `Margin → Border → Padding → Content`

### 7.9. CSS Responsive (Thiết kế đáp ứng)

Giúp trang web hiển thị tốt trên mọi thiết bị và kích thước màn hình. Sử dụng **Media Queries** để áp dụng CSS theo điều kiện.

```css
/* Mặc định cho desktop */
.container {
  width: 1200px;
  margin: 0 auto;
}

/* Màn hình tablet (≤ 768px) */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }
}

/* Màn hình điện thoại (≤ 480px) */
@media screen and (max-width: 480px) {
  .container {
    padding: 0 10px;
  }

  h1 {
    font-size: 20px;
  }
}
```

> **Viewport Meta Tag** — Cần thêm vào `<head>` để responsive hoạt động đúng:
> ```html
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
> ```

---

## 8. CSS Units (Đơn vị CSS)

- Đơn vị CSS được sử dụng để xác định **kích thước** của thuộc tính mà ta thiết lập cho một phần tử hoặc nội dung của nó.
- Nhiều thuộc tính CSS nhận giá trị **"độ dài"** (length), chẳng hạn như `width`, `margin`, `padding`, `font-size`, v.v.
- Đơn vị độ dài trong CSS được chia thành **hai loại**:
  - **Đơn vị tuyệt đối** (Absolute length)
  - **Đơn vị tương đối** (Relative length)

### 8.1. Đơn vị tuyệt đối (Absolute Lengths)

- Đơn vị tuyệt đối là các đơn vị **cố định**, kích thước được hiển thị đúng như giá trị đã khai báo.
- **Không khuyến khích** sử dụng trên màn hình vì kích thước màn hình rất đa dạng.
- Tuy nhiên, có thể sử dụng khi biết rõ phương tiện đầu ra, chẳng hạn như **bố cục in ấn**.

| Đơn vị | Tên | Giải thích |
|---|---|---|
| `cm` | Centimeters | Dùng để xác định kích thước bằng centimet |
| `mm` | Millimeters | Dùng để xác định kích thước bằng milimet |
| `in` | Inches | Dùng để xác định kích thước bằng inch. `1in = 96px = 2.54cm` |
| `pt` | Points | Dùng để xác định kích thước bằng điểm. `1pt = 1/72 của 1 inch` |
| `pc` | Picas | Dùng để xác định kích thước bằng pica. `1pc = 12pt`, 6 pica tương đương 1 inch |
| `px` | Pixels | Dùng để xác định kích thước bằng pixel. `1px = 1/96 của 1 inch` |

### 8.2. Đơn vị tương đối (Relative Lengths)

- Đơn vị tương đối xác định độ dài **so với** một thuộc tính độ dài khác.
- Đơn vị tương đối **co giãn tốt hơn** giữa các phương tiện hiển thị khác nhau.

| Đơn vị | Giải thích |
|---|---|
| `em` | Tương đối so với `font-size` của phần tử hiện tại |
| `ex` | Tương đối so với chiều cao chữ "x" (x-height) của font. Ít được sử dụng |
| `ch` | Tương tự `ex`, nhưng đo chiều rộng của ký tự `0` (số không) |
| `rem` | Tương đối so với `font-size` của phần tử gốc (`<html>`) |
| `vh` | Tương đối so với **chiều cao** của viewport. `1vh = 1%` chiều cao viewport |
| `vw` | Tương đối so với **chiều rộng** của viewport. `1vw = 1%` chiều rộng viewport |
| `vmin` | Tương đối so với **chiều nhỏ hơn** của viewport. `1vmin = 1%` chiều nhỏ hơn |
| `vmax` | Tương đối so với **chiều lớn hơn** của viewport. `1vmax = 1%` chiều lớn hơn |
| `%` | Dùng để xác định kích thước theo **phần trăm** tương đối so với giá trị khác |

---

## 9. CSS3

### 9.1. CSS3 là gì?

- **Cascading Style Sheets (CSS)** là ngôn ngữ trang tính kiểu dáng được sử dụng để mô tả giao diện và định dạng của tài liệu được viết bằng ngôn ngữ đánh dấu (markup language).
- **CSS3** là phiên bản tiêu chuẩn mới nhất của CSS, kế thừa và mở rộng từ các phiên bản trước (CSS2).

### 9.2. Tính năng mới của CSS3

- CSS Selectors
- Pseudo-classes
- CSS3 Colors
- Drop Shadows, Text Shadow
- Linear Gradients, Radial Gradients
- Multiple Background Images

---

### 9.3. CSS3 Selectors

CSS3 giới thiệu các bộ chọn mới để nhắm mục tiêu các phần tử HTML, giúp tạo stylesheet hiệu quả hơn:

#### Attribute Selectors (Bộ chọn thuộc tính)

Giúp nhắm mục tiêu phần tử dựa trên thuộc tính như `class` hoặc `id`.

```css
/* Chọn tất cả input có type="text" */
input[type="text"] {
  border: 1px solid #ccc;
}

/* Chọn phần tử có thuộc tính bắt đầu bằng giá trị */
a[href^="https"] {
  color: green;
}

/* Chọn phần tử có thuộc tính kết thúc bằng giá trị */
a[href$=".pdf"] {
  color: red;
}
```

#### Adjacent Sibling Selectors (Bộ chọn anh em kế tiếp)

Cho phép nhắm mục tiêu phần tử là phần tử kế tiếp ngay sau một phần tử khác.

```css
/* Nhắm mục tiêu đoạn văn đầu tiên sau tiêu đề h1 */
h1 + p {
  font-size: 18px;
  color: gray;
}
```

#### Child Selectors (Bộ chọn con trực tiếp)

Nhắm mục tiêu các phần tử là con trực tiếp của một phần tử khác.

```css
/* Nhắm mục tiêu các mục trong danh sách có thứ tự */
ol > li {
  color: blue;
}
```

#### Nth-child Selectors (Bộ chọn phần tử thứ n)

Được sử dụng tùy thuộc vào vị trí của phần tử trong phần tử cha.

```css
/* Chọn các dòng chẵn */
li:nth-child(even) {
  background-color: #f2f2f2;
}

/* Chọn các dòng lẻ */
li:nth-child(odd) {
  background-color: #fff;
}

/* Chọn phần tử thứ 3 */
li:nth-child(3) {
  font-weight: bold;
}
```

---

### 9.4. Pseudo-classes (Lớp giả)

Pseudo-class trong CSS là một từ khóa được thêm vào selector, cho phép bạn tạo kiểu cho một **trạng thái cụ thể** của phần tử được chọn.

**Cú pháp:**

```css
selector:pseudo-class {
  property: value;
}
```

**Ví dụ:**

```css
/* Dòng đầu tiên của mỗi phần tử <p> */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

**Các pseudo-class phổ biến:**

| Pseudo-class | Mô tả |
|---|---|
| `:link` | Liên kết chưa được truy cập |
| `:visited` | Liên kết đã được truy cập |
| `:hover` | Khi di chuột qua phần tử |
| `:active` | Khi phần tử đang được kích hoạt (click) |
| `:focus` | Khi phần tử được focus (ví dụ: ô input) |
| `:root` | Phần tử gốc của tài liệu |
| `:first-child` | Phần tử con đầu tiên |
| `:last-child` | Phần tử con cuối cùng |
| `::first-line` | Dòng đầu tiên của phần tử |

---

### 9.5. CSS3 Colors (Màu sắc CSS3)

CSS3 hỗ trợ thêm các thuộc tính màu sắc mới:

#### RGBA (Red Green Blue Alpha)

Thêm kênh **alpha** để kiểm soát độ trong suốt.

```css
#d1 {
  background-color: rgba(255, 0, 0, 0.5);
}
```

#### HSL (Hue, Saturation, Lightness)

Xác định màu theo **sắc độ, độ bão hòa, độ sáng**.

```css
#g1 {
  background-color: hsl(120, 100%, 50%);
}
```

#### HSLA (Hue, Saturation, Lightness, Alpha)

HSL kết hợp với kênh alpha cho độ trong suốt.

```css
#g1 {
  background-color: hsla(120, 100%, 50%, 0.3);
}
```

#### Opacity (Độ mờ)

Thiết lập độ trong suốt cho toàn bộ phần tử.

```css
#g1 {
  background-color: rgb(255, 0, 0);
  opacity: 0.6;
}
```

> ⚠️ **Khác biệt giữa RGBA và Opacity:** `rgba` chỉ ảnh hưởng đến màu nền, còn `opacity` ảnh hưởng đến **toàn bộ phần tử** bao gồm cả nội dung bên trong.

---

### 9.6. Shadow (Bóng đổ)

CSS3 hỗ trợ thêm bóng đổ cho văn bản hoặc phần tử.

#### Box Shadow (Bóng hộp)

```css
div {
  background-color: red;
  box-shadow: 10px 10px;
}
```

#### Text Shadow (Bóng chữ)

```css
/* Bóng cơ bản */
h1 { text-shadow: 2px 2px; }

/* Bóng có màu */
h1 { text-shadow: 2px 2px red; }

/* Bóng có độ mờ (blur) */
h1 { text-shadow: 2px 2px 5px red; }

/* Bóng đen với blur */
h1 { text-shadow: 2px 2px 4px #000000; }

/* Hiệu ứng phát sáng (glow) */
h1 { text-shadow: 0 0 3px #FF0000; }

/* Nhiều bóng chồng */
h1 { text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF; }

/* Hiệu ứng neon */
h1 { text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue; }
```

---

### 9.7. Gradients (Chuyển màu)

Gradients hiển thị sự kết hợp của **hai hoặc nhiều màu**.

#### Linear Gradients (Chuyển màu tuyến tính)

Sắp xếp hai hoặc nhiều màu theo dạng tuyến tính (trên xuống dưới, trái sang phải, chéo…).

```css
/* Trên xuống dưới (mặc định) */
#grad1 {
  height: 100px;
  background: linear-gradient(pink, green);
}

/* Trái sang phải */
#grad1 {
  height: 100px;
  background: linear-gradient(to right, red, blue);
}

/* Chéo */
#grad1 {
  height: 100px;
  background: linear-gradient(to bottom right, red, blue);
}

/* Nhiều màu */
#grad2 {
  height: 100px;
  background: linear-gradient(red, orange, yellow, red, blue, green, pink);
}
```

#### Radial Gradients (Chuyển màu tỏa tròn)

Chuyển màu tỏa ra từ tâm.

```css
/* Radial gradient cơ bản */
#grad1 {
  height: 100px;
  width: 550px;
  background: -webkit-radial-gradient(red 5%, green 15%, pink 60%);
  background: -o-radial-gradient(red 5%, green 15%, pink 60%);
  background: -moz-radial-gradient(red 5%, green 15%, pink 60%);
  background: radial-gradient(red 5%, green 15%, pink 60%);
}

/* Radial gradient lặp lại */
#grad1 {
  height: 100px;
  width: 550px;
  background: -webkit-repeating-radial-gradient(blue, yellow 10%, green 15%);
  background: -o-repeating-radial-gradient(blue, yellow 10%, green 15%);
  background: -moz-repeating-radial-gradient(blue, yellow 10%, green 15%);
  background: repeating-radial-gradient(blue, yellow 10%, green 15%);
}
```

---

### 9.8. Multiple Background (Nhiều hình nền)

CSS Multi background cho phép thêm **một hoặc nhiều hình nền** cùng lúc mà không cần thêm HTML.

```css
#multibackground {
  background-image: url(/css/images/logo.png), url(/css/images/border.png);
  background-position: left top, left top;
  background-repeat: no-repeat, repeat;
  padding: 75px;
}
```

**Bảng các thuộc tính background:**

| STT | Thuộc tính | Mô tả |
|---|---|---|
| 1 | `background` | Thiết lập tất cả thuộc tính hình nền trong một khai báo |
| 2 | `background-clip` | Khai báo vùng vẽ của hình nền |
| 3 | `background-image` | Chỉ định hình nền |
| 4 | `background-origin` | Chỉ định vị trí gốc của hình nền |
| 5 | `background-size` | Chỉ định kích thước của hình nền |
