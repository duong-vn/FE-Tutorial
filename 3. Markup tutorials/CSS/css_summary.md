# Tổng hợp kiến thức CSS

## 1. CSS là gì?
CSS (*Cascading Style Sheets*) định kiểu, bố cục và khả năng hiển thị responsive cho HTML. CSS mô tả **trình bày**, không mô tả cấu trúc nội dung.

## 2. Cú pháp và cách nhúng
```css
selector {
  property: value;
}
```
```html
<link rel="stylesheet" href="style.css">
<style>p { color: red; }</style>
<p style="color: red">Inline</p>
```
Ưu tiên file ngoài; inline chỉ dùng khi thật cần.

## 3. Selector
```css
p {}                 /* element */
.card {}             /* class */
#header {}           /* id */
input[type="text"] {} /* attribute */
article p {}         /* descendant */
.menu > li {}        /* child trực tiếp */
a:hover {}           /* pseudo-class */
p::first-line {}     /* pseudo-element */
```
- Có thể kết hợp selector bằng `,`, khoảng trắng, `>`, `+`, `~`.
- Hạn chế selector quá cụ thể và `!important`.

## 4. Cascade, specificity và kế thừa
- Cascade quyết định rule thắng theo: origin/importance → specificity → thứ tự xuất hiện.
- Specificity tăng theo thứ tự: inline > `#id` > `.class`, `[attr]`, `:pseudo-class` > element, `::pseudo-element`.
- Một số thuộc tính kế thừa từ cha như `color`, `font-family`; `margin`, `padding`, `border` thường không kế thừa.

## 5. Màu và đơn vị
```css
color: #2563eb;
background: rgb(37 99 235 / 50%);
font-size: 1rem;
width: 50%;
padding: 1em;
```
- `px`: cố định; `%`: theo phần tử cha; `rem`: theo font-size gốc; `em`: theo font-size hiện tại; `vw/vh`: theo viewport.
- Ưu tiên `rem`, `%`, `fr`, `clamp()` để responsive.

## 6. Box model
Mỗi phần tử gồm: **content → padding → border → margin**.
```css
* { box-sizing: border-box; }
.box {
  width: 300px;
  padding: 1rem;
  border: 1px solid #ccc;
  margin: 0 auto;
}
```
`border-box` giúp `width/height` bao gồm padding và border.

## 7. Display và visibility
```css
display: block;
display: inline;
display: inline-block;
display: none;
visibility: hidden;
```
`display: none` bỏ khỏi layout; `visibility: hidden` vẫn chiếm chỗ.

## 8. Position và z-index
```css
position: static | relative | absolute | fixed | sticky;
```
- `relative`: làm mốc cho phần tử con `absolute`.
- `absolute`: tách khỏi flow, định vị theo ancestor có position.
- `fixed`: theo viewport; `sticky`: bám trong vùng scroll của ancestor.
- `z-index` chỉ hiệu quả trong stacking context phù hợp; cần kiểm tra `position`, `transform`, `opacity`.

## 9. Flexbox
```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.item { flex: 1 1 200px; }
```
- Main axis: `flex-direction`; cross axis vuông góc.
- Container: `justify-content`, `align-items`, `align-content`, `gap`.
- Item: `flex`, `order`, `align-self`, `flex-grow/shrink/basis`.

## 10. CSS Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
```
- Dùng Grid cho layout hai chiều; Flexbox phù hợp một chiều.
- Thuộc tính quan trọng: `grid-template-columns/rows`, `gap`, `grid-column`, `grid-row`, `minmax()`, `auto-fit`.
```css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
```

## 11. Typography
```css
body { font-family: system-ui, sans-serif; line-height: 1.5; }
h1 { font-size: clamp(2rem, 5vw, 4rem); }
```
Nhớ `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `letter-spacing`, `text-decoration`.

## 12. Background, border và shadow
```css
.card {
  background: #fff url("bg.png") center / cover no-repeat;
  border: 1px solid #ddd;
  border-radius: .5rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
}
```
Có thể dùng nhiều `background-image`, ngăn cách bằng dấu phẩy.

## 13. Pseudo-class và pseudo-element
```css
button:hover { ... }
input:focus-visible { ... }
li:first-child { ... }
.card::before { content: ""; ... }
```
Luôn giữ trạng thái `:focus-visible` để hỗ trợ bàn phím.

## 14. Transition, transform, animation
```css
.button { transition: transform .2s ease, background .2s ease; }
.button:hover { transform: translateY(-2px); }
@keyframes fade { from { opacity: 0; } to { opacity: 1; } }
.box { animation: fade .3s ease; }
```
Tối ưu animation bằng `transform`/`opacity`; tôn trọng `prefers-reduced-motion`.

## 15. Responsive và biến CSS
```css
:root { --primary: #2563eb; --space: 1rem; }
.card { color: var(--primary); padding: var(--space); }
@media (max-width: 768px) { .grid { grid-template-columns: 1fr; } }
```
- Mobile-first: style mặc định cho màn hình nhỏ, thêm `min-width` khi mở rộng.
- Dùng `max-width`, `min()`, `max()`, `clamp()` để tránh tràn.

## 16. Quy tắc thực hành
- Reset `box-sizing`; ưu tiên class và cấu trúc đơn giản.
- Tránh độ cụ thể cao, `!important`, kích thước cố định không cần thiết.
- Kiểm tra overflow, focus, contrast, responsive và trạng thái hover/focus/disabled.
