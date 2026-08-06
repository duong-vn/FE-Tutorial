# Tổng Hợp Kiến Thức ReactJS

---

# 1. Getting Started with ReactJS

## ReactJS là gì?
- Thư viện JavaScript mã nguồn mở, phát triển bởi **Facebook (Meta)**.
- Sử dụng **Virtual DOM** để render tối ưu, có chọn lọc.
- Đóng vai trò lớp **View** trong mô hình **MVC**.
- Chủ yếu xây dựng **Single Page Application (SPA)**.

## Virtual DOM
- Mỗi DOM thật có một bản sao nhẹ (Virtual DOM object) trong bộ nhớ.
- Khi state thay đổi: Tạo Virtual DOM mới → **Diffing** (so sánh) → **Reconciliation** (chỉ cập nhật phần thay đổi lên Real DOM).

## SPA vs MPA

| Tiêu chí | SPA | MPA |
|:---|:---|:---|
| Tải trang | 1 lần duy nhất | Reload toàn bộ mỗi lần chuyển trang |
| Cập nhật | Chỉ render lại phần thay đổi | Tải lại toàn bộ HTML/CSS/JS |
| UX | Mượt mà, nhanh | Có độ trễ, nháy màn hình |

## Tools & Setup
- **IDE:** VS Code (khuyên dùng)
- **Chrome Extension:** React Developer Tools
- **Tài liệu:** [react.dev](https://react.dev/)

---

# 2. JSX và Cấu trúc ReactJS

## JSX là gì?
- **JSX (JavaScript XML):** Cú pháp mở rộng cho JS, viết UI giống HTML trong JS.
- Cần **transpile** (qua Babel) sang `React.createElement()` trước khi chạy.
- **Lợi ích:** Viết HTML trong JS, đóng gói logic + UI trong Component, tăng tốc phát triển.

## Quy tắc JSX quan trọng
- Tên Component: **PascalCase** (`<Welcome />`, không phải `<welcome />`).
- `class` → `className`, `for` → `htmlFor`.
- Comment: `{/* ... */}`.
- Chỉ trả về **1 thẻ gốc** duy nhất (dùng `<div>`, `<>...</>` hoặc `<React.Fragment>`).
- Nhúng biểu thức JS: `{expression}`.

## Rendering Component
```jsx
ReactDOM.render(<Hello name="World" />, document.getElementById('container'));
```
- `props.children`: Nội dung nằm giữa thẻ mở/đóng component.

---

# 3. Component & Properties

## Component
- Chia nhỏ UI thành các phần **độc lập, tái sử dụng**.
- **Functional Component:** Hàm JS nhận `props`, trả về JSX.
- **Class Component:** ES6 class kế thừa `React.Component`, có thêm State và Lifecycle.

```jsx
// Functional
function Welcome(props) { return <h1>Hello, {props.name}</h1>; }

// Class
class Welcome extends React.Component {
  render() { return <h1>Hello, {this.props.name}</h1>; }
}
```

## Props
- Dữ liệu truyền từ cha xuống con, **read-only (immutable)**.
- Luồng dữ liệu **1 chiều (one-way / downward data flow)**.

---

# 4. Styling trong React

## 2 cách chính

| Phương pháp | Cú pháp | Ghi chú |
|:---|:---|:---|
| **CSS thuần** | `className="letter"` + file `.css` | Quen thuộc |
| **Inline Style** | `style={{ backgroundColor: 'red' }}` | Dùng object JS, thuộc tính camelCase |

**Quy tắc chuyển CSS → JS:** `background-color` → `backgroundColor`, `font-family` → `fontFamily`.

---

# 5. State & Event

## Props vs State

| | Props | State |
|:---|:---|:---|
| Ai kiểm soát | Component cha | Bản thân component |
| Thay đổi được? | ❌ Immutable | ✅ Mutable (qua setter) |

## useState Hook
```jsx
const [count, setCount] = useState(0);
```
- `useState` trả về `[giá_trị, hàm_cập_nhật]`.

## Render & Commit
1. **Triggering** (state/props thay đổi) → 2. **Rendering** (tính toán JSX mới) → 3. **Committing** (cập nhật Real DOM).

## Cập nhật State
- State là **snapshot** tại thời điểm render.
- Dùng **updater function** để cập nhật nhiều lần: `setNumber(n => n + 1)`.
- **Object:** Tạo object mới, dùng spread `{...person, name: 'new'}`.
- **Array:** Tạo array mới: `[...items, newItem]`, `items.filter(...)`, `items.map(...)`.

## Events
- React dùng **SyntheticEvent** (wrapper cross-browser).
- **Event Pooling:** Event bị nullified sau callback → dùng `event.persist()` nếu cần async.
- **Controlled Component:** Giá trị form do React State kiểm soát, cập nhật qua `onChange`.

---

# 6. Side Effects (useEffect)

## 3 bước viết Effect
1. **Declare:** `useEffect(() => { ... })`.
2. **Dependencies:** Tham số thứ 2 là mảng dependencies.
3. **Cleanup:** Return một function để dọn dẹp.

## Dependency Array

| Cú pháp | Hành vi |
|:---|:---|
| Không có mảng | Chạy sau **mỗi lần** render |
| `[]` (mảng rỗng) | Chạy **1 lần** khi mount |
| `[dep1, dep2]` | Chạy lại khi dependency thay đổi |

## Cleanup
```jsx
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll); // cleanup
}, []);
```

## ES6 thường dùng trong React
`let/const`, Arrow Function (`=>`), Destructuring, Template Literals, Spread Operator, Promises, Classes.

---

# 7. React Forms

## Controlled Components
- Giá trị form (`value`) gán từ **React State**, cập nhật qua `onChange`.
- `<input>`, `<textarea>`, `<select>` đều dùng thuộc tính `value`.
- `<input type="file">` là **Uncontrolled** (read-only, dùng `useRef`).

```jsx
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />
```

- **Uncontrolled Components:** Dùng `useRef()` tham chiếu DOM trực tiếp.
- **Thư viện form:** Formik, React Hook Form.

---

# 8. Lists & Keys

## Render danh sách
- Dùng `map()` để lặp qua mảng và trả về JSX.

## Keys
- Giúp React xác định item nào đã thay đổi/thêm/xóa.
- Dùng **ID duy nhất** từ dữ liệu làm key, **tránh dùng index**.
- Key đặt trên **phần tử trong mảng** (trong `map()`), không phải bên trong component con.

```jsx
{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
```

---

# 9. Tạo Complex Components

## Quy trình
1. Xác định các **yếu tố trực quan chính** từ bản thiết kế.
2. Quyết định cái nào thành **Component riêng** (không phải mọi yếu tố đều cần).
3. Tạo khung (skeleton) → Xây dựng từng Component → Kết hợp lại.

---

# 10. AJAX, Router, SSR

## React Router
- Đồng bộ UI với URL. Cài đặt: `react-router-dom`.

### Các khái niệm cốt lõi
- **`createBrowserRouter`** + **`<RouterProvider>`**: Cấu hình và render router.
- **Nested Routes:** Route lồng nhau, dùng `<Outlet />` render component con.
- **Layout Routes:** Bỏ trống `path` để tạo khung layout chung.
- **Dynamic Segments:** `:teamId` trong path → lấy qua `params.teamId`.

### Navigation
- **`<Link to="/">`**: Điều hướng không reload trang. Prop `to` là string hoặc object.
- **`<NavLink>`**: Như `<Link>` nhưng thêm `activeStyle`/`activeClassName` khi active.
- **`<Redirect to="/path">`**: Chuyển hướng tự động, ghi đè history.
- **`<Switch>`**: Chỉ render route **đầu tiên** khớp (exclusively).
- **`<Prompt>`**: Cảnh báo trước khi rời trang.

## Server-Side Rendering (SSR)
- Server tạo HTML hoàn chỉnh → Trình duyệt hiển thị (viewable) → Tải JS → React tiếp quản (interactable = **Rehydration**).
- **Ưu:** SEO tốt, tải trang nhanh, SMO. **Nhược:** TTFB chậm, kiến trúc phức tạp.

---

# 11. Tái sử dụng Component

## Higher Order Component (HOC)
- Hàm nhận Component → trả về Component mới có thêm logic.
- Luồng: `ExternalProps` → HOC Logic + State → `InjectedProps` + `OriginalProps` → Component gốc.

## PropTypes
- Xác thực kiểu dữ liệu props, chỉ chạy trong **development**.
```jsx
MyComponent.propTypes = { name: PropTypes.string.isRequired };
```

## Cấu trúc chuẩn của Component
1. Data khởi tạo → 2. PropTypes → 3. Lifecycle methods → 4. Logic methods → 5. Render.

---

# 12. Context

## Khi nào dùng?
- Chia sẻ dữ liệu "global" (user, theme, language) cho cây component mà không cần prop drilling.
- **Dùng hạn chế** — nếu chỉ tránh prop drilling, hãy cân nhắc **Component Composition** trước.

## API
```jsx
const MyContext = createContext(defaultValue);  // Tạo context
<MyContext.Provider value={...}>               // Cung cấp giá trị
const value = useContext(MyContext);            // Đọc giá trị trong component con
```

---

# 13. Redux

## Vấn đề & Giải pháp
- **React thuần:** Prop drilling phức tạp khi app lớn.
- **Redux:** Store tập trung, bất kỳ component nào cũng truy cập được.

## 3 thành phần cốt lõi
- **Actions:** Gói thông tin `{ type, payload }` gửi đến Store.
- **Reducers:** Quyết định state thay đổi thế nào dựa trên action.
- **Store:** Nơi lưu toàn bộ state tree. Thay đổi bằng `dispatch(action)`.

## Redux Toolkit (Cách hiện đại)
```jsx
// 1. createSlice → tạo slice chứa reducers
// 2. configureStore → tạo store
// 3. <Provider store={store}> → bọc app
// 4. useSelector → đọc state
// 5. useDispatch → gửi action
```

---

# 14. Thinking in React (5 bước)

1. **Break UI into Component Hierarchy:** Chia UI thành cây component.
2. **Build Static Version:** Dựng UI tĩnh với props, **không dùng state**.
3. **Identify Minimal State:** 3 câu hỏi — từ props? Không đổi? Tính được từ state/props khác? → Không phải state.
4. **Identify Where State Lives:** Tìm **common owner component** chứa state.
5. **Add Inverse Data Flow:** Truyền callbacks từ cha xuống con để cập nhật ngược state.

---

# 15. RESTful APIs

## Khái niệm
- Kiến trúc API dùng HTTP methods: **GET** (đọc), **POST** (tạo), **PUT** (cập nhật), **DELETE** (xóa).
- Request gồm: HTTP method, Endpoint, Header, Body.

## JSON Server (Mock API)
```bash
npm i -D json-server@0.17.4
```
Tạo `db.json` → Thêm script `"server": "json-server --watch db.json --port 3001"` → `npm run server`.

## Fetch data với Axios + useEffect
```jsx
const [data, setData] = useState([]);
useEffect(() => {
  axios.get("http://localhost:3001/posts").then(res => setData(res.data));
}, []);
```

---

# 16. Middleware, Redux-Thunk & Redux-Saga

## Middleware trong Redux
- Điểm trung gian: `dispatch action → middleware → reducer`.

## Redux-Thunk
- Cho phép action creator trả về **function** (thay vì object).
- Function nhận `dispatch` và `getState` → xử lý async, dispatch nhiều actions.
```jsx
export const fetchTodo = (id) => async (dispatch) => {
  const res = await client.get(`/api/todo/${id}`);
  dispatch(todosLoaded(res.data));
};
```

## Redux-Saga
- Quản lý side effects qua **Generator Functions** (`function*`).
- Saga = thread riêng chuyên xử lý side effects (data fetching, caching,...).
```jsx
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
```
