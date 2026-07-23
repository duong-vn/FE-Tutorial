# Tổng hợp kiến thức Tailwind CSS

---

## 1. Tailwind CSS là gì?

Tailwind CSS là một **framework CSS theo hướng utility-first** (ưu tiên các lớp tiện ích).

- Cung cấp các **lớp CSS cấp thấp** (ví dụ: `text-center`, `bg-blue-500`, `font-bold`).
- Cho phép xây dựng giao diện tùy chỉnh **trực tiếp trong HTML** mà không cần viết CSS riêng từ đầu.
- Rất phù hợp cho việc **tạo mẫu nhanh** (rapid prototyping) và xây dựng **hệ thống thiết kế có khả năng mở rộng** (scalable design systems).
- Tập trung vào tính **kết hợp** (composability) và **tốc độ** phát triển.

---

## 2. Lợi ích chính

| Lợi ích | Mô tả |
|---|---|
| **Phát triển nhanh hơn** | Không cần viết CSS tùy chỉnh cho từng component |
| **Tùy chỉnh cao** | File `tailwind.config.js` cho phép dễ dàng thiết lập theme và mở rộng |
| **Thiết kế đáp ứng (Responsive)** | Hệ thống breakpoint mobile-first tích hợp sẵn |
| **Không lo đặt tên** | Tránh được xung đột tên class trong CSS |
| **Kích thước bundle nhỏ** | Tự động loại bỏ CSS không sử dụng khi build production |
| **Không phụ thuộc framework** | Hoạt động với React, Vue, Angular và nhiều framework khác |

---

## 3. Cách hoạt động & Ví dụ

- Sử dụng các **lớp tiện ích đã định nghĩa sẵn** trực tiếp trong HTML.
- **Kết hợp** nhiều lớp để tạo kiểu cho phần tử.
- Tailwind **sinh CSS trong quá trình build**.
- Tùy chỉnh thông qua file `tailwind.config.js`.

**Ví dụ:**

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

**Giải thích từng class:**

| Class | Chức năng |
|---|---|
| `bg-blue-500` | Màu nền xanh dương (cường độ 500) |
| `hover:bg-blue-700` | Màu nền xanh đậm hơn khi hover |
| `text-white` | Màu chữ trắng |
| `font-bold` | Độ đậm chữ: bold |
| `py-2` | Padding trên & dưới (vertical) |
| `px-4` | Padding trái & phải (horizontal) |
| `rounded` | Bo tròn góc (border-radius) |

---

## 4. Các lớp tiện ích cốt lõi

### 4.1. Layout (Bố cục)

| Nhóm | Các class | Mô tả |
|---|---|---|
| Container | `container` | Giới hạn chiều rộng theo breakpoint |
| Display | `block`, `inline-block`, `flex`, `grid`, `hidden` | Kiểu hiển thị phần tử |
| Position | `static`, `relative`, `absolute`, `fixed`, `sticky` | Kiểu định vị phần tử |
| Z-Index | `z-10`, `z-20`, `z-30`, `z-40`, `z-50` | Thứ tự xếp chồng |

### 4.2. Spacing (Khoảng cách)

**Margin (lề ngoài):**

| Prefix | Mô tả |
|---|---|
| `m-{size}` | Margin tất cả các hướng |
| `mx-{size}` | Margin trái & phải |
| `my-{size}` | Margin trên & dưới |
| `mt-`, `mr-`, `mb-`, `ml-` | Margin từng hướng riêng (trên, phải, dưới, trái) |

**Padding (lề trong):**

| Prefix | Mô tả |
|---|---|
| `p-{size}` | Padding tất cả các hướng |
| `px-{size}` | Padding trái & phải |
| `py-{size}` | Padding trên & dưới |
| `pt-`, `pr-`, `pb-`, `pl-` | Padding từng hướng riêng |

**Khoảng cách giữa các phần tử con:**

| Prefix | Mô tả |
|---|---|
| `space-x-{size}` | Khoảng cách ngang giữa các phần tử con |
| `space-y-{size}` | Khoảng cách dọc giữa các phần tử con |

### 4.3. Sizing (Kích thước)

| Nhóm | Các class | Mô tả |
|---|---|---|
| Width | `w-{size}`, `min-w-{size}`, `max-w-{size}` | Chiều rộng, chiều rộng tối thiểu, chiều rộng tối đa |
| Height | `h-{size}`, `min-h-{size}`, `max-h-{size}` | Chiều cao, chiều cao tối thiểu, chiều cao tối đa |

---

## 5. Typography (Kiểu chữ)

| Thuộc tính | Các class | Mô tả |
|---|---|---|
| Font Family | `font-sans`, `font-serif`, `font-mono` | Họ phông chữ |
| Font Size | `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, ... | Kích thước chữ |
| Font Weight | `font-thin`, `font-light`, `font-normal`, `font-medium`, `font-bold`, `font-extrabold` | Độ đậm chữ |
| Text Alignment | `text-left`, `text-center`, `text-right`, `text-justify` | Căn chỉnh văn bản |
| Text Color | `text-gray-700`, `text-red-500`, `text-blue-600`, ... | Màu chữ |
| Text Decoration | `underline`, `line-through`, `no-underline` | Trang trí văn bản (gạch chân, gạch ngang) |

---

## 6. Thiết kế đáp ứng (Responsive Design)

Sử dụng các **tiền tố responsive** để áp dụng kiểu dáng tại các breakpoint khác nhau. Tailwind CSS sử dụng cách tiếp cận **mobile-first** — kiểu mặc định áp dụng cho màn hình nhỏ, sau đó ghi đè cho màn hình lớn hơn.

**Các breakpoint mặc định:**

| Tiền tố | Kích thước tối thiểu | Mô tả |
|---|---|---|
| *(không có)* | `0px` | Mặc định (mobile) |
| `sm:` | `640px` | Màn hình nhỏ |
| `md:` | `768px` | Màn hình trung bình (tablet) |
| `lg:` | `1024px` | Màn hình lớn (desktop) |
| `xl:` | `1280px` | Màn hình rất lớn |
| `2xl:` | `1536px` | Màn hình cực lớn |

**Ví dụ:**

```html
<div class="text-center md:text-left lg:text-right">
  Responsive Text
</div>
```

| Kích thước màn hình | Kết quả |
|---|---|
| Nhỏ (mặc định) | Văn bản căn **giữa** |
| Trung bình (`md`) trở lên | Văn bản căn **trái** |
| Lớn (`lg`) trở lên | Văn bản căn **phải** |

---

## 7. Nâng cao — States & Dark Mode

### 7.1. State Variants (Biến thể trạng thái)

Sử dụng các tiền tố pseudo-class như `hover:`, `focus:`, `active:`, `disabled:` để tạo kiểu cho phần tử ở các trạng thái khác nhau.

| Tiền tố | Mô tả |
|---|---|
| `hover:` | Khi di chuột qua phần tử |
| `focus:` | Khi phần tử được focus |
| `active:` | Khi phần tử đang được nhấn |
| `disabled:` | Khi phần tử bị vô hiệu hóa |

**Ví dụ:**

```html
<button class="bg-green-500 hover:bg-green-700 focus:ring-2 active:bg-green-800">
  Button
</button>
```

### 7.2. Dark Mode (Chế độ tối)

- Bật dark mode trong file cấu hình `tailwind.config.js`.
- Sử dụng tiền tố `dark:` để áp dụng kiểu dáng trong chế độ tối.

**Ví dụ:**

```html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Dark mode support
</div>
```

| Chế độ | Nền | Chữ |
|---|---|---|
| Light (sáng) | Trắng (`bg-white`) | Đen (`text-black`) |
| Dark (tối) | Xám đậm (`bg-gray-800`) | Trắng (`text-white`) |

---

## 8. Tái sử dụng kiểu dáng với `@apply`

Sử dụng directive `@apply` để gộp nhiều lớp tiện ích thành **một class CSS tái sử dụng**. Rất hữu ích khi cần trích xuất các mẫu tiện ích lặp đi lặp lại.

**Ví dụ:**

```css
.btn-primary {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
}
```

**Sử dụng:**

```html
<!-- Thay vì viết dài dòng -->
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">Click</button>

<!-- Chỉ cần dùng class đã trích xuất -->
<button class="btn-primary">Click</button>
```

> ⚠️ Chỉ nên dùng `@apply` khi một nhóm class được lặp lại **nhiều lần**. Nếu chỉ dùng một lần, việc viết trực tiếp các utility class trong HTML là đủ.

---

## 9. Tối ưu hóa cho Production

| Kỹ thuật | Mô tả |
|---|---|
| **Purge CSS không dùng** | Tailwind tự động loại bỏ CSS không sử dụng thông qua cấu hình `purge`/`content` để giữ bundle production nhỏ gọn |
| **Minify CSS** | Nén file CSS cuối cùng để tải nhanh hơn |
| **Just-In-Time (JIT) Mode** | Engine JIT sinh CSS **theo yêu cầu** khi bạn viết, giúp build nhanh hơn và bundle CSS nhỏ hơn |

---

## 10. Hệ sinh thái & Công cụ

### 10.1. Thư viện component

| Tên | Mô tả |
|---|---|
| **Tailwind UI** | Bộ component cao cấp (trả phí) |
| **Headless UI** | Component UI không có kiểu dáng, hỗ trợ accessibility |
| **DaisyUI** | Thư viện component miễn phí cho Tailwind |
| **Flowbite** | Bộ component và block xây dựng trên Tailwind |

### 10.2. Plugin

Mở rộng Tailwind với các plugin cho **forms**, **typography**, **aspect-ratio** và nhiều hơn nữa.

### 10.3. Template & Ví dụ

| Tên | Mô tả |
|---|---|
| **HyperUI** | Template miễn phí |
| **Tailwind Components** | Bộ sưu tập component cộng đồng |

---

## 11. Bắt đầu sử dụng

### Bước 1: Cài đặt Tailwind

Cài đặt qua npm/yarn dưới dạng dev dependency:

```bash
npm install -D tailwindcss
```

### Bước 2: Tạo file cấu hình

Tạo file `tailwind.config.js`:

```bash
npx tailwindcss init
```

### Bước 3: Thêm các directive Tailwind

Thêm các directive `@tailwind` vào file CSS chính:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Bước 4: Thiết lập quy trình build

Thiết lập quy trình build (ví dụ: với **PostCSS**) để xử lý CSS.

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

> 💡 Sau khi hoàn tất các bước trên, bạn có thể bắt đầu sử dụng các utility class của Tailwind trực tiếp trong HTML.
