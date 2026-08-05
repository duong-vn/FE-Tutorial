# Tổng hợp kiến thức Tailwind CSS

## 1. Khái niệm
Tailwind CSS là framework **utility-first**: ghép các class nhỏ trực tiếp trong HTML thay vì viết CSS cho từng component.
```html
<button class="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
  Lưu
</button>
```
Ưu điểm: phát triển nhanh, responsive/state nhất quán, purge CSS không dùng khi build. Đổi lại HTML dài và cần quy ước component.

## 2. Layout cốt lõi
```html
<div class="container mx-auto flex items-center justify-between gap-4 p-4"></div>
<div class="grid grid-cols-1 gap-4 md:grid-cols-3"></div>
```
Nhớ các nhóm: `block`, `inline`, `hidden`, `relative/absolute/fixed/sticky`, `flex`, `grid`, `container`, `z-*`, `overflow-*`.
- Flex: `flex-row/col`, `justify-*`, `items-*`, `flex-wrap`, `grow/shrink`, `gap-*`.
- Grid: `grid-cols-*`, `grid-rows-*`, `col-span-*`, `place-*`.

## 3. Spacing và kích thước
- Khoảng cách: `p-*`, `px-*`, `py-*`, `m-*`, `mx-auto`, `space-*`, `gap-*`.
- Kích thước: `w-*`, `h-*`, `min/max-w-*`, `min/max-h-*`, `size-*`.
- Giá trị tùy ý: `w-[37rem]`, `bg-[#123456]`.

## 4. Typography và màu
```html
<h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
  Tiêu đề
</h1>
```
- Text: `text-{size}`, `font-{weight}`, `leading-*`, `tracking-*`, `text-left/center/right`, `truncate`, `line-clamp-*`.
- Màu: `text-*`, `bg-*`, `border-*`, `ring-*`, có opacity như `bg-black/50`.
- Trang trí: `rounded-*`, `shadow-*`, `border`, `divide-*`, `opacity-*`.

## 5. Responsive (mobile-first)
Breakpoint mặc định: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.
```html
<div class="text-sm md:text-base lg:text-lg">...</div>
```
Class không prefix áp dụng cho mobile; prefix chỉ áp dụng từ breakpoint đó trở lên.

## 6. State variants và dark mode
```html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-2 disabled:opacity-50">
  Gửi
</button>
<div class="bg-white text-black dark:bg-gray-900 dark:text-white"></div>
```
Variants thường dùng: `hover:`, `focus:`, `focus-visible:`, `active:`, `disabled:`, `group-hover:`, `peer-checked:`, `dark:`.

## 7. Component và `@apply`
```css
@layer components {
  .btn-primary { @apply rounded px-4 py-2 font-semibold text-white bg-blue-600; }
}
```
Dùng `@apply` cho pattern lặp lại; không lạm dụng để biến Tailwind thành CSS truyền thống. Với component framework, ưu tiên tạo component dùng chung.

## 8. Theme và cấu hình
```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: { extend: { colors: { brand: "#2563eb" } } },
  plugins: [],
};
```
- `content` phải bao phủ mọi file chứa class để build không loại nhầm.
- Dùng `theme.extend` để thêm, tránh ghi đè toàn bộ theme nếu không cần.
- Tailwind v4 có quy trình cấu hình khác; kiểm tra version dự án trước khi dùng hướng dẫn v3.

## 9. Production và công cụ
- Build production sẽ loại utility không xuất hiện trong nguồn đã khai báo.
- Class tạo động như `bg-${color}-500` có thể bị thiếu; dùng map class đầy đủ hoặc safelist.
- Có thể dùng plugin/forms/typography và thư viện component, nhưng cần kiểm tra bundle và tính nhất quán.

## 10. Quy trình ghi nhớ
1. Cài Tailwind và cấu hình `content`.
2. Tạo CSS entry, nạp directives theo version.
3. Dùng utility mobile-first.
4. Thêm state, dark mode và breakpoint khi cần.
5. Tách component lặp lại; kiểm tra build production.
