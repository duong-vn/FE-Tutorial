# Tổng hợp kiến thức JavaScript

## 1. Tổng quan
JavaScript là ngôn ngữ chạy trong trình duyệt và server (Node.js), dùng để tạo hành vi, xử lý dữ liệu và tương tác DOM.
```html
<script src="app.js" defer></script>
```
`defer` tải song song và chạy sau khi HTML được parse; tránh script inline khi không cần.

## 2. Biến và kiểu dữ liệu
```js
const name = "An"; // mặc định dùng const
let count = 0;     // dùng let khi cần gán lại
```
- Tránh `var` trong code mới vì scope theo function và hoisting dễ gây lỗi.
- Primitive: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`.
- Reference: `object`, `array`, `function`.
- `typeof null === "object"` là đặc điểm lịch sử; kiểm tra null bằng `value === null`.
- `NaN` là số không hợp lệ; dùng `Number.isNaN(value)`.

## 3. Toán tử và so sánh
```js
const total = price * quantity;
const label = name ?? "Ẩn danh"; // chỉ fallback null/undefined
const text = age >= 18 ? "adult" : "minor";
```
- Ưu tiên `===`/`!==` thay vì `==`/`!=`.
- `&&`, `||`, `!` dùng cho logic; `??` dùng giá trị mặc định khi nullish.
- Toán tử optional chaining: `user?.profile?.name`.

## 4. Điều kiện và vòng lặp
```js
if (ok) { ... } else { ... }
switch (status) { case "ok": break; default: ... }
for (const item of items) { ... }
for (const key in object) { ... } // key enumerable
while (condition) { ... }
```
Dùng `for...of` cho giá trị iterable; `for...in` cho key object.

## 5. Function và scope
```js
function add(a, b = 0) { return a + b; }
const multiply = (a, b) => a * b;
```
- Function declaration được hoist; arrow function không có `this` riêng.
- Scope: block (`let`, `const`), function, module.
- Closure là function giữ được biến của scope bên ngoài.
- Tham số mặc định, rest và spread:
```js
function sum(...numbers) { return numbers.reduce((a, b) => a + b, 0); }
const copy = [...items];
const merged = { ...user, active: true };
```

## 6. String, number và object
```js
const message = `Xin chào ${name}`;
Number("42"); String(42);
Object.keys(obj); Object.values(obj); Object.entries(obj);
```
- String thường dùng template literal.
- `Number.isFinite`, `Number.parseInt`, `Number.parseFloat` để kiểm tra/chuyển số.
- Destructuring:
```js
const { id, name: displayName } = user;
const [first, second] = items;
```

## 7. Array methods
```js
const active = users.filter(user => user.active);
const names = users.map(user => user.name);
const total = prices.reduce((sum, price) => sum + price, 0);
const found = users.find(user => user.id === id);
const exists = users.some(user => user.active);
const all = users.every(user => user.valid);
```
- `map` tạo mảng mới; `filter` lọc; `find` trả phần tử đầu tiên; `reduce` gom giá trị.
- `sort()` làm thay đổi mảng và mặc định sắp xếp chuỗi; dùng comparator số.
- Tránh mutate state/dữ liệu khi không cần; dùng `toSorted`, spread hoặc copy.

## 8. Object, prototype và class
```js
class User {
  constructor(name) { this.name = name; }
  greet() { return `Hi ${this.name}`; }
}
class Admin extends User {
  constructor(name) { super(name); }
}
```
- `this` phụ thuộc cách gọi; arrow function giữ `this` từ scope ngoài.
- `extends` kế thừa, `super()` gọi constructor cha.
- Dùng `private` class field (`#token`) cho dữ liệu nội bộ khi cần.

## 9. Module
```js
// math.js
export const add = (a, b) => a + b;
export default function main() {}
// app.js
import main, { add } from "./math.js";
```
Module có scope riêng; ưu tiên ES Modules và import đúng dependency cần dùng.

## 10. DOM và sự kiện
```js
const button = document.querySelector("button");
button.textContent = "Lưu";
button.classList.add("active");
button.addEventListener("click", event => {
  event.preventDefault();
});
```
- Chọn phần tử bằng `querySelector`, `querySelectorAll`.
- Dùng `textContent` cho text; tránh `innerHTML` với dữ liệu không tin cậy (XSS).
- Event bubbling cho phép event delegation:
```js
list.addEventListener("click", event => {
  const item = event.target.closest("li");
  if (item) { /* xử lý */ }
});
```

## 11. Form và Web API
```js
const data = new FormData(form);
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
```
- `localStorage` lưu string lâu dài; dùng `JSON.stringify/parse` cho object.
- Validate phía client giúp UX nhưng server vẫn phải validate.
- API trình duyệt thường gặp: `fetch`, `URL`, `URLSearchParams`, `setTimeout`, `AbortController`.

## 12. Promise và async/await
```js
async function loadUser(id) {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
try {
  const user = await loadUser(1);
} catch (error) {
  console.error(error);
}
```
- Promise có trạng thái pending/fulfilled/rejected.
- `await` chỉ dùng trong async function hoặc top-level module.
- Các tác vụ độc lập chạy song song bằng `Promise.all`; dùng `allSettled` khi muốn nhận cả thành công/thất bại.
- `fetch` không reject chỉ vì HTTP 4xx/5xx; phải kiểm tra `response.ok`.

## 13. Xử lý lỗi
```js
try { riskyOperation(); }
catch (error) { console.error(error.name, error.message); }
finally { cleanup(); }
throw new Error("Thông báo lỗi");
```
`try...catch` bắt lỗi runtime, không bắt lỗi syntax đã ngăn chương trình parse. Không nuốt lỗi im lặng; thêm context hoặc xử lý phù hợp.

## 14. JSON và dữ liệu
```js
const json = JSON.stringify({ id: 1 });
const object = JSON.parse(json);
```
`JSON.parse` có thể throw; dữ liệu từ API luôn cần kiểm tra shape trước khi dùng.

## 15. Quy tắc cần nhớ
- Dùng `const` mặc định, `let` khi cần gán lại; tránh biến global.
- Không mutate dữ liệu ngoài ý muốn; kiểm tra equality, null và kiểu đầu vào.
- Tách module nhỏ, đặt tên rõ; xử lý loading/error/empty state khi gọi API.
- Không chèn dữ liệu người dùng bằng `innerHTML`; chống XSS và validate input.
