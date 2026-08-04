# Tổng Hợp Kiến Thức ReactJS

---

# Chương 1: Getting Started with ReactJS

## 1. Introducing ReactJS

- **ReactJS** là một thư viện JavaScript (JavaScript library) mã nguồn mở, được phát triển và duy trì bởi **Facebook** (hiện nay là **Meta**) và **Instagram**.
- ReactJS sử dụng khái niệm **Virtual DOM** (DOM ảo) giúp render một cách tối ưu và có chọn lọc các cây thành phần (subtrees of nodes) dựa trên sự thay đổi của trạng thái (state changes).
- Mặc dù là một thư viện, nhiều nhà phát triển coi ReactJS là lớp **V (View)** trong mô hình kiến trúc **MVC (Model-View-Controller)** của ứng dụng.
- Với ReactJS, chúng ta chủ yếu xây dựng các ứng dụng trang đơn - **Single Page Application (SPA)**.

---

### 1.1 Virtual DOM (Document Object Model)

- Trong React, tương ứng với mỗi đối tượng DOM thật (Real DOM object), sẽ có một **"Virtual DOM object"** tương ứng.
- **Virtual DOM object** là một bản đại diện (representation) của DOM object, có thể hiểu như một bản sao siêu nhẹ (lightweight copy) nằm trong bộ nhớ.
- Khi dữ liệu hoặc trạng thái thay đổi:
  1. React tạo một Virtual DOM tree mới.
  2. So sánh Virtual DOM tree mới với Virtual DOM tree cũ (quá trình **Diffing**).
  3. Chỉ cập nhật những phần thực sự thay đổi lên Real DOM (quá trình **Reconciliation**), giúp tối ưu hiệu năng vượt trội so với việc thao tác trực tiếp trên Real DOM.

---

### 1.2 MVC (Model-View-Controller)

Mô hình kiến trúc phần mềm phân chia ứng dụng thành 3 thành phần chính:

- **Model**: Quản lý dữ liệu, trạng thái và các quy tắc nghiệp vụ (Business Logic).
- **View**: Giao diện người dùng (User Interface - UI), hiển thị dữ liệu từ Model cho người dùng tương tác. *(ReactJS đóng vai trò chính là lớp View này)*.
- **Controller**: Đóng vai trò cầu nối, tiếp nhận đầu vào (HTTP Requests / Thao tác người dùng) từ Browser, điều khiển Model cập nhật dữ liệu và truyền dữ liệu kết quả đến View để hiển thị.

**Luồng hoạt động (Data Flow trong mô hình MVC):**

```text
               +----------------------------------+
               |             BROWSER              |
               +----------------------------------+
                 /                              ^
   HTTP Request /                                | GUI Content
               v                                 | (Rendered Output)
      +------------------+             +------------------+
      |    CONTROLLER    |             |       VIEW       |
      +------------------+             +------------------+
        |              ^                 ^
Execution|              |Resulting Data   |Resulting Data
Parameters              |Arrays           |Arrays
        v              |                 |
      +----------------------------------+
      |              MODEL               |
      +----------------------------------+
```

---

### 1.3 Single Page Application (SPA)

So sánh giữa **Single Page Application (SPA)** và **Regular Website (Multi-Page Application - MPA)**:

| Tiêu chí | Single Page Application (SPA) | Regular Website / Multi-Page App (MPA) |
| :--- | :--- | :--- |
| **Cách thức tải trang** | Tải duy nhất 1 trang HTML ban đầu. | Tải lại (reload) toàn bộ trang mới mỗi khi chuyển liên kết. |
| **Cập nhật dữ liệu** | Khi chuyển trang hoặc tương tác, chỉ phần nội dung thay đổi được render lại động mà không làm tải lại toàn bộ trang (Header, Navbar,... giữ nguyên). | Trình duyệt gửi request tải lại toàn bộ tài nguyên (HTML, CSS, JS) cho mỗi trang mới. |
| **Trải nghiệm người dùng (UX)** | Mượt mà, nhanh chóng giống như ứng dụng Desktop/Mobile. | Có độ trễ và hiện tượng nháy màn hình khi tải lại trang. |

**Minh họa sự khác biệt:**

- **Single Page App:**
  `Sample Copy Page` ➔ `[ Header | Sidebar | Content Area (Re-rendered) ]` ➔ `User Info (Cập nhật riêng phần nội dung)`
- **Regular Website:**
  `Sample Copy Page (Reload toàn bộ)` ➔ `Page 2 (Reload toàn bộ)` ➔ `User Info Page (Reload toàn bộ)`

---

### 1.4 Who uses ReactJS?

ReactJS được tin dùng và sử dụng rộng rãi bởi các tập đoàn công nghệ hàng đầu thế giới:

- **Facebook** (Meta)
- **Instagram**
- **PayPal**
- **Yahoo!**
- **Atlassian** (Jira, Trello, Confluence,...)

---

## 2. Downloading ReactJS & Official Documentation

Tài liệu chính thức và các tài nguyên hữu ích về ReactJS:

- **Trang chủ & Tài liệu chính thức:** [https://react.dev/](https://react.dev/)
- **Mã nguồn trên GitHub:** [https://github.com/facebook/react/](https://github.com/facebook/react/)
- **Tổng hợp tài nguyên Awesome React:** [https://github.com/enaqx/awesome-react](https://github.com/enaqx/awesome-react)

---

## 3. Tools & Environment Setup (Công cụ & Môi trường phát triển)

### 3.1 Text Editors / IDEs

Các trình soạn thảo mã nguồn phổ biến có thể dùng để lập trình ReactJS:

- **Vim**: [http://www.vim.org/download.php](http://www.vim.org/download.php)
- **Emacs Editor**: [https://www.gnu.org/software/emacs/](https://www.gnu.org/software/emacs/)
- **Atom**: [https://atom.io/](https://atom.io/)
- **Brackets**: [http://brackets.io/](http://brackets.io/)
- **Visual Studio Code (VS Code)** *(Khuyên dùng)*: [https://code.visualstudio.com/](https://code.visualstudio.com/)

---

### 3.2 Chrome Extensions

Các tiện ích mở rộng trên trình duyệt hỗ trợ kiểm thử và debug ứng dụng React:

- **Chrome Web Store**: Nơi tải các tiện ích mở rộng.
- **React Developer Tools**: Extension chính thức giúp kiểm tra (inspect) cây linh kiện (Component Tree), Props, và State của React trực tiếp trên trình duyệt.
- **Chrome Developer Tools**: Bộ công cụ kiểm thử mặc định của trình duyệt Chrome (F12).

---

# Chương 2: Exploring JSX and ReactJS Anatomy

## 1. What, Why JSX?

### 1.1 What is JSX?

- **JSX (JavaScript XML)** là một cú pháp mở rộng (syntax extension) dành cho JavaScript, có cấu trúc trông tương tự như XML / HTML.
- JSX được sử dụng chính để xây dựng các thành phần giao diện (UI components) trong ReactJS.
- **Biên dịch JSX:** JSX không thể chạy trực tiếp trên trình duyệt mà cần được chuyển đổi (transpile) sang JavaScript thuần thông qua các công cụ biên dịch (như Babel).

**Ví dụ về quá trình biên dịch JSX sang JavaScript thuần:**

- *Mã JSX:*
  ```jsx
  var HelloMessage = React.createClass({
    render: function() {
      return <div>Hello World</div>;
    }
  });
  ```

- *Biên dịch sang JavaScript thuần (`React.createElement`):*
  ```js
  var HelloMessage = React.createClass({
    displayName: "HelloMessage",
    render: function() {
      return React.createElement("div", null, "Hello World");
    }
  });
  ```

**ReactElement:**
- `ReactElement` là API cốt lõi (primary API) của React, bản thân nó không chứa các phương thức (has no methods of itself).
- Mỗi đối tượng `ReactElement` được tạo ra bằng cách gọi hàm `React.createElement()`.
- `ReactElement` đại diện cho các node trên **Virtual DOM** và không hoàn toàn giống với đối tượng DOM thật (Real DOM Element) của trình duyệt.
- Cấu trúc một ReactElement:
  ```text
  Opening tag                     Content                     Closing tag
  <elementname>     (may be text and/or HTML elements)     </elementname>
  -----------------------------------------------------------------------
                                  Element
                        <h1>Black Goose Bistro</h1>
  ```

---

### 1.2 Why JSX?

- **Viết thẻ HTML trực tiếp trong JavaScript:** JSX mang lại khả năng viết mã giao diện HTML liền mạch ngay bên trong tập tin JavaScript.
- **Tập trung logic và hiển thị (Co-location / Componentization):**
  - Trong các ứng dụng MVC truyền thống, Model, View, Controller bị phân tách ở các tập tin riêng biệt.
  - Trong React với JSX, mã hiển thị (display logic), biểu thức template và code nghiệp vụ (business code) được đóng gói cùng nhau trong từng Component độc lập.
- **Đóng vai trò làm Middleware:** JSX hoạt động như một middleware dịch các mã khai báo giao diện (markup) thành các đối tượng JavaScript (Objects) mà ReactJS có thể xử lý tối ưu.
- **Tăng tốc độ phát triển (Speed up development):** JSX giúp lập trình viên viết UI trực quan, dễ đọc, dễ bảo trì và đẩy nhanh tốc độ code Front-End.

---

### 1.3 Tools for Transforming JSX

Các công cụ phổ biến dùng để chuyển đổi (transpile) mã JSX thành mã JavaScript tiêu chuẩn:

- **Babel Plugin (khuyên dùng trong dự án modern):**
  ```bash
  npm i babel-plugin-transform-react-jsx
  ```
- **React Tools (Công cụ CLI cũ):**
  ```bash
  npm install -g react-tools
  ```

---

## 2. The ReactJS Anatomy

### Quy tắc đặt tên Component (PascalCase)

- Khuyên dùng quy tắc **PascalCase** cho tên class và Component trong React (ví dụ: `HelloMessage`, `UserProfile`).
- Giúp tuân thủ chuẩn JavaScript và dễ dàng phân biệt các Component tùy chỉnh với các thẻ HTML tiêu chuẩn (thẻ HTML viết thường như `div`, `span`, `p`).

---

### Rendering a Component

- Để đưa một Component lên giao diện trình duyệt, chúng ta gọi phương thức `ReactDOM.render()`:

```jsx
ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
```

**Quy trình xử lý khi Render:**

```text
+----------------+      +-------------------------+      +------------------+
|     RENDER     | ---> |  VIRTUAL DOM DIFF CALC  | ---> |    DOM UPDATE    |
+----------------+      +-------------------------+      +------------------+
```

---

### Maximum Number of Roots & Children Components

#### 1. Maximum Number of Roots (Số lượng thẻ gốc tối đa)
- Trong phương thức `render` (hoặc câu lệnh `return`) của một component, bạn chỉ được phép trả về **duy nhất 1 thẻ gốc (one root node)**.
- Nếu muốn trả về danh sách nhiều thẻ ngang hàng (siblings), bạn phải bọc tất cả chúng bên trong một thẻ cha (ví dụ `<div>`, `<span>`, hoặc `<React.Fragment>` / `<>`):

```jsx
function Hello() {
  return (
    <div>
      <h1>Hello React</h1>
      <h2>Have a good day!</h2>
    </div>
  );
}
```

#### 2. Children Components (`props.children`)
- `props.children` giúp truy cập vào phần nội dung nằm giữa thẻ mở và thẻ đóng khi gọi một Component:

```jsx
function Hello(props) {
  return <div>Hello {props.name} {props.children}</div>;
}

ReactDOM.render(
  <Hello name="World"> children text </Hello>,
  document.getElementById('container')
);
```

---

### Supported Attributes (Thuộc tính trong JSX)

JSX hỗ trợ các thuộc tính HTML nhưng áp dụng quy tắc camelCase cho từ khóa JavaScript trùng lặp:

- **`class`** ➔ Đổi thành **`className`** (do `class` là từ khóa dự phòng trong JS).
- **`for`** ➔ Đổi thành **`htmlFor`** (do `for` là vòng lặp trong JS).
- **Custom Attributes:** Các thuộc tính tùy biến như **`data-*`** và **`aria-*`** được ReactJS hỗ trợ đầy đủ và giữ nguyên dạng gạch nối.

---

## 3. Learning JSX and Gotchas

### 3.1 Expressions (Biểu thức trong JSX)

- Để nhúng biểu thức JavaScript vào JSX, bọc mã JavaScript bên trong cặp dấu ngoặc nhọn `{}`:

```jsx
const name = "React";
const element = <h1>Hello, {name}!</h1>;
```

---

### 3.2 Properties / Attributes (Props)

- Props được định nghĩa như các thuộc tính kiểu `name-value` trên các thẻ JSX để truyền dữ liệu vào Component:

```jsx
<Hello name="World" age={25} />
```

---

### 3.3 Transferring Properties (Truyền Props qua các lớp Component)

Khi một Component truyền dữ liệu props qua nhiều tầng con (Prop Drilling):

```jsx
function Display(props) {
  return (
    <div>
      <p>{props.color}</p>
      <p>{props.num}</p>
      <p>{props.size}</p>
    </div>
  );
}

function Label(props) {
  return (
    <Display color={props.color} num={props.num} size={props.size} />
  );
}

function Shirt(props) {
  return (
    <div>
      <Label color={props.color} num={props.num} size={props.size} />
    </div>
  );
}

ReactDOM.render(
  <div>
    <Shirt color="sparsebundle" num="3.14" size="medium" />
  </div>,
  document.querySelector("#container")
);
```

**Sơ đồ phân cấp truyền dữ liệu:**

```text
DOMReact.render()
       |
       v
    [Shirt]
       |
       v
    [Label]
       |
       v
   [Display]
```
*(Component `Shirt` phụ thuộc dữ liệu từ `Label`, và `Label` lại truyền xuống cho `Display`)*.

---

### 3.4 Other Gotchas (Lưu ý khác)

- **Mutating Properties (Thay đổi giá trị Props):**
  ```js
  var component = <HelloMessage />;
  component.props.name = 'Testing';
  ```
  *Lưu ý quan trọng:* Trong React, `props` phải được xem là **Read-Only (Immutable)**. Không nên sửa trực tiếp `props.name` trên đối tượng.

- **Comments (Chú thích) trong JSX:**
  ```jsx
  {/* this is the comments */}
  ```

- **CSS classes:**
  ```jsx
  <button className="btn btn-over">Click me</button>
  ```

---

# Chương 3: Component and Properties

## 1. Component

### 1.1 What is a Component?

- *"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation."*
- **Component (Thành phần)** cho phép chia nhỏ giao diện người dùng (UI) thành các phần độc lập, có thể tái sử dụng và tư duy/xử lý từng phần một cách riêng biệt.

---

### 1.2 Types of Components (Phân loại Component)

React hỗ trợ 2 cách chính để định nghĩa Component:

1. **Functional Components (Thành phần dạng hàm):**
   - Được định nghĩa đơn giản bằng một hàm JavaScript (JavaScript function).
   - Nhận vào một tham số duy nhất là đối tượng **`props`** (properties) chứa dữ liệu và trả về một React element đại diện cho giao diện.
   - Được gọi là "functional" vì bản chất chúng chính là các hàm JS thuần túy.
   - *Ví dụ:*
     ```jsx
     function Welcome(props) {
       return <h1>Hello, {props.name}</h1>;
     }
     ```

2. **Class Components (Thành phần dạng lớp):**
   - Định nghĩa bằng cú pháp `class` của ES6 kế thừa từ `React.Component`.
   - Cung cấp thêm một số tính năng nâng cao như quản lý **State** nội bộ và các phương thức vòng đời (**Lifecycle Methods**).
   - *Ví dụ:*
     ```jsx
     class Welcome extends React.Component {
       render() {
         return <h1>Hello, {this.props.name}</h1>;
       }
     }
     ```

---

### 1.3 Rendering a Component

- Ban đầu, chúng ta thường gặp các phần tử đại diện cho thẻ HTML chuẩn:
  ```jsx
  const element = <div />;
  ```
- Tuy nhiên, phần tử React (React element) cũng có thể đại diện cho một Component do người dùng tự định nghĩa:
  ```jsx
  const element = <Welcome name="Sara" />;
  ```
- Khi React gặp một phần tử đại diện cho user-defined component, nó sẽ gom tất cả các thuộc tính JSX (JSX attributes) lại và truyền vào component đó dưới dạng một đối tượng duy nhất gọi là **`props`**.

#### Ví dụ minh họa quy trình Render:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

#### Các bước diễn ra khi React Render Component:
1. Gọi `ReactDOM.render()` truyền vào phần tử `<Welcome name="Sara" />`.
2. React gọi component `Welcome` với tham số `props` là `{ name: 'Sara' }`.
3. Component `Welcome` xử lý và trả về kết quả là element `<h1>Hello, Sara</h1>`.
4. React DOM cập nhật hiệu quả DOM thực tế để hiển thị `<h1>Hello, Sara</h1>`.

> [!IMPORTANT]
> **Quy tắc bắt buộc:** Tên Component luôn luôn phải bắt đầu bằng **chữ cái viết hoa (Capital Letter)** (ví dụ: `<Welcome />`).
> - Tên bắt đầu bằng chữ cái viết thường (ví dụ: `<welcome />`) sẽ được React xử lý như một thẻ HTML mặc định (như `<div />`). Thẻ viết hoa mới được React nhận diện là một Component tùy chỉnh và tìm kiếm trong Scope.

---

## 2. Component Properties (Props)

### 2.1 Properties (props)

- **Khái niệm:** Hầu hết các component đều có thể được tùy biến với các tham số khác nhau khi tạo ra. Các tham số tạo này được gọi là **props**.
- **Tính chất Immutable (Chỉ đọc):** Các thuộc tính (properties) của một React component **không thể bị thay đổi** (cannot be changed) một khi component đã được render vào DOM.
- **Nguyên tắc cốt lõi (Best Practice):** Truyền dữ liệu tới các component con lồng nhau (nested components) thông qua thuộc tính (`props`) theo **luồng dữ liệu 1 chiều (One-Way / Downward Data Flow)**.

---

### 2.2 Data Flow & Rendering Data in React Component

- **Data flow with properties (Luồng dữ liệu với props):**
  - Component cha đóng vai trò cung cấp dữ liệu và truyền xuống component con thông qua props.

*Ví dụ hiển thị thông tin người dùng theo cấu trúc thẻ:*
```jsx
function UserCard(props) {
  return (
    <div style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
      <div style={{ backgroundColor: 'blue', padding: '5px' }}>
        <p>Other Information: {props.info}</p>
      </div>
    </div>
  );
}
```

- **Rendering data in a ReactJS component (Hiển thị danh sách dữ liệu động):**
  - Truyền danh sách mảng dữ liệu qua props để render nhiều item giao diện đồng nhất (như danh sách bạn bè, danh sách tin tức hoặc *"Facebook User's list of likes"*).

```jsx
function LikeItem(props) {
  return (
    <div className="like-card">
      <img src={props.image} alt={props.name} />
      <div>
        <h4>{props.name}</h4>
        <p>{props.category}</p>
      </div>
    </div>
  );
}
```

---

# Chương 4: Styling in React

## 1. Displaying Some Vowels

- Để hiển thị các ký tự (ví dụ: nguyên âm), bạn chỉ cần khai báo các Component như sau:

```jsx
ReactDOM.render(
  <div>
    <Letter>A</Letter>
    <Letter>E</Letter>
    <Letter>I</Letter>
    <Letter>O</Letter>
    <Letter>U</Letter>
  </div>,
  document.getElementById('container')
);
```

- Giao diện ban đầu sẽ trông khá đơn điệu vì chưa có style. Các bước tiếp theo sẽ làm cho nó trông hấp dẫn hơn bằng cách áp dụng CSS.

---

## 2. Styling React Content Using CSS (Dùng CSS thuần)

- Styling bằng CSS trong React thực ra **đơn giản** như bạn nghĩ.
- Vì React cuối cùng vẫn sinh ra các thẻ HTML thông thường (regular HTML tags), nên **tất cả các kỹ thuật CSS bạn đã biết** để style HTML vẫn áp dụng hoàn toàn được.
- Chỉ cần ghi nhớ một vài điểm nhỏ khác biệt so với HTML/CSS thuần (ví dụ: dùng `className` thay `class`).

---

## 3. Understand the Generated HTML

- Phương thức render cha (parent render method) là phương thức dựa trên `ReactDOM` và giao diện được bọc trong một thẻ `<div>` cha, bên trong chứa nhiều component `<Letter>`.

**Cấu trúc HTML được sinh ra:**
```html
<div id="container">
  <div>
    <div class="letter">A</div>
    <div class="letter">E</div>
    <div class="letter">I</div>
    <div class="letter">O</div>
    <div class="letter">U</div>
  </div>
</div>
```

**Áp dụng class CSS:**
- Cần hiểu cấu trúc HTML được sinh ra, sau đó thêm `className="letter"` vào thẻ `<div>` bên trong mỗi component `Letter`:

```jsx
function Letter(props) {
  return (
    <div className="letter">
      {props.children}
    </div>
  );
}
```

- Sau đó, trong file CSS, định nghĩa style cho class `.letter`:

```css
.letter {
  padding: 10px;
  margin: 10px;
  background-color: #ffde00;
  color: #333;
  display: inline-block;
  font-family: monospace;
  font-size: 32px;
  border-radius: 5px;
}
```

---

## 4. Styling Content the React Way (Inline Styles)

- React **khuyến khích** sử dụng **inline styles (kiểu nội tuyến)** để định nghĩa style thay vì dựa hoàn toàn vào file CSS riêng biệt.
- Mục tiêu là biến mỗi Component thành một **"black box"** hoàn chỉnh — tự chứa toàn bộ thông tin về giao diện và hành vi.
- Điều này giúp các component trở nên **dễ tái sử dụng hơn**, vì style đi kèm với component, không phụ thuộc file CSS ngoài.

---

## 5. Creating a Style Object (Tạo đối tượng Style)

- Trong React, để dùng **inline style**, ta truyền vào một **đối tượng JavaScript (Style Object)** thay vì chuỗi CSS.
- Công thức chuyển đổi thuộc tính CSS sang JavaScript:

| CSS Property | JavaScript (camelCase) |
| :--- | :--- |
| `padding` | `padding` *(không đổi - single word)* |
| `margin` | `margin` *(không đổi - single word)* |
| `color` | `color` *(không đổi - single word)* |
| `background-color` | `backgroundColor` |
| `font-family` | `fontFamily` |
| `border-radius` | `borderRadius` |

**Quy tắc chuyển đổi:**
1. **Thuộc tính CSS 1 từ** (như `padding`, `margin`, `color`): **giữ nguyên**.
2. **Thuộc tính CSS nhiều từ** có dấu gạch nối (như `background-color`, `font-family`, `border-radius`): **chuyển sang camelCase** — xóa dấu `-` và viết hoa chữ cái đầu của từ tiếp theo.

---

## 6. Actually Styling Our Content

- Để truyền màu nền động cho Component, thêm thuộc tính `bgcolor` khi gọi component trong `ReactDOM.render()`:

```jsx
ReactDOM.render(
  <div>
    <Letter bgcolor="#58B3FF">A</Letter>
    <Letter bgcolor="#FF605F">E</Letter>
    <Letter bgcolor="#FFD52E">I</Letter>
    <Letter bgcolor="#49DD8E">O</Letter>
    <Letter bgcolor="#AE99FF">U</Letter>
  </div>,
  document.getElementById('container')
);
```

- Bên trong Component `Letter`, tạo **Style Object** và sử dụng `props.bgcolor` để gán giá trị cho `backgroundColor`:

```jsx
function Letter(props) {
  const letterStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: props.bgcolor,
    color: '#333',
    display: 'inline-block',
    fontFamily: 'monospace',
    fontSize: 32,
    borderRadius: 5,
  };

  return (
    <div style={letterStyle}>
      {props.children}
    </div>
  );
}
```

> [!TIP]
> **Tóm tắt 2 cách Styling trong React:**
>
> | Phương pháp | Cú pháp | Ưu điểm |
> | :--- | :--- | :--- |
> | **CSS thuần (External/Internal CSS)** | `className="letter"` + file `.css` | Quen thuộc, dễ dùng với class có sẵn |
> | **Inline Style (Style Object)** | `style={{ backgroundColor: props.bgcolor }}` | Tái sử dụng cao, style đóng gói trong component |

---

# Chương 5: State & Event

## 1. ReactJS States

### 1.1 Properties vs States trong ReactJS

| Tiêu chí | Properties (Props) | State |
| :--- | :--- | :--- |
| **Khai báo khi nào** | Khi tạo (khởi tạo) component từ bên ngoài | Khai báo bên trong định nghĩa của component |
| **Ai kiểm soát** | Component cha truyền vào | Bản thân component tự quản lý |
| **Có thay đổi được không** | ❌ Immutable (chỉ đọc) | ✅ Mutable (thay đổi được thông qua setter) |
| **Mục đích** | Truyền dữ liệu từ cha xuống con | Lưu trữ trạng thái nội bộ của component |

---

### 1.2 Adding a State Variable (Thêm biến State)

- Để thêm biến state, import `useState` từ React ở đầu file:

```jsx
import { useState } from 'react';
```

- Cú pháp khai báo state:

```jsx
const [index, setIndex] = useState(0);
```

> [!NOTE]
> **Cú pháp `[index, setIndex]`** được gọi là **Array Destructuring (Giải cấu trúc mảng)** — cho phép đọc giá trị từ mảng một cách ngắn gọn.
> `useState` luôn trả về một mảng có **đúng 2 phần tử**: `[giá_trị_hiện_tại, hàm_cập_nhật]`.

- Ví dụ sử dụng trong hàm xử lý sự kiện:

```jsx
function handleClick() {
  setIndex(index + 1);
}
```

---

### 1.3 Render and Commit (Quy trình Render)

React xử lý việc cập nhật giao diện qua 3 bước, hãy hình dung như mô hình nhà hàng:

| Bước | Mô tả | Ví dụ ẩm thực |
| :---: | :--- | :--- |
| **1. Triggering a render** | Kích hoạt render (do state/props thay đổi) | Thực khách gọi món → phục vụ ghi order |
| **2. Rendering the component** | React gọi lại function component để tính toán JSX mới | Đầu bếp chuẩn bị món ăn trong bếp |
| **3. Committing to the DOM** | React cập nhật Real DOM với những thay đổi cần thiết | Phục vụ mang món ra và đặt lên bàn |

---

### 1.4 State as a Snapshot (State như một Bản chụp)

- Mỗi lần React re-render một component:
  1. React gọi lại function component của bạn.
  2. Function trả về một **JSX snapshot** (bản chụp giao diện) mới.
  3. React cập nhật màn hình để khớp với snapshot đó.

- Khi React gọi component, nó cung cấp một **snapshot của state** tại thời điểm render đó. Component trả về JSX với props, event handlers và giá trị state — tất cả đều được tính toán dựa trên giá trị state của lần render đó.

---

### 1.5 Queueing a Series of State Updates (Hàng đợi cập nhật State)

- React **chờ** cho đến khi toàn bộ code trong event handler đã chạy xong trước khi xử lý các cập nhật state.
- Tương tự như phục vụ nhà hàng không chạy vào bếp ngay khi bạn gọi món đầu tiên, mà chờ bạn gọi hết rồi mới ghi order đầy đủ.

**Cập nhật cùng một state nhiều lần trước lần render tiếp theo:**

Sử dụng **updater function** (hàm cập nhật) `n => n + 1`:

```jsx
setNumber(n => n + 1); // React thêm vào hàng đợi
setNumber(n => n + 1); // React thêm vào hàng đợi
setNumber(n => n + 1); // React thêm vào hàng đợi
```

**Quy trình React xử lý hàng đợi:**
1. `setNumber(n => n + 1)`: Thêm `n => n + 1` vào hàng đợi.
2. `setNumber(n => n + 1)`: Thêm `n => n + 1` vào hàng đợi.
3. `setNumber(n => n + 1)`: Thêm `n => n + 1` vào hàng đợi.
4. Tại lần render tiếp theo, React duyệt qua hàng đợi và trả về **giá trị cuối cùng đã được cập nhật đầy đủ**.

---

### 1.6 Updating Objects in State (Cập nhật Object trong State)

- State có thể lưu bất kỳ giá trị JavaScript nào, **bao gồm cả Object**.
- **Không nên** thay đổi object đang lưu trong state trực tiếp (**mutate**).
- Thay vào đó, hãy **tạo object mới** (hoặc sao chép object cũ) rồi gán vào state.

```jsx
// ❌ Sai - mutate trực tiếp
person.firstName = e.target.value;

// ✅ Đúng - tạo object mới thay thế
setPerson({
  firstName: e.target.value, // Giá trị mới từ input
  lastName: person.lastName,
  email: person.email,
});
```

- Dùng **Spread Operator (`...`)** để sao chép các field cũ và chỉ ghi đè field cần thay đổi:

```jsx
setPerson({
  ...person,              // Sao chép tất cả field cũ
  firstName: e.target.value, // Chỉ ghi đè field này
});
```

---

### 1.7 Updating Arrays in State (Cập nhật Array trong State)

- Array trong JavaScript là **mutable**, nhưng khi lưu trong React State, bạn phải xử lý chúng như **immutable**.
- Tương tự Object: khi muốn cập nhật array, hãy **tạo array mới** (hoặc sao chép array cũ) rồi set state:

```jsx
// ❌ Sai - mutate trực tiếp
items.push(newItem);

// ✅ Đúng - tạo array mới
setItems([...items, newItem]);

// ✅ Đúng - lọc phần tử
setItems(items.filter(item => item.id !== targetId));

// ✅ Đúng - map để cập nhật phần tử
setItems(items.map(item =>
  item.id === targetId ? { ...item, done: true } : item
));
```

---

## 2. Event Ecosystem

### 2.1 Events (Sự kiện trong React)

- Các **event handler** (hàm xử lý sự kiện) sẽ nhận các instance của **SyntheticEvent** — một lớp wrapper (bao bọc) cross-browser xung quanh native event của trình duyệt.
- `SyntheticEvent` có cùng interface với native event của trình duyệt, bao gồm `stopPropagation()` và `preventDefault()`, nhưng hoạt động **đồng nhất trên mọi trình duyệt**.

**Form Events:**
- `onChange`, `onInput`, `onSubmit`
- *Tham khảo thêm về `onChange`: [https://facebook.github.io/react/docs/forms.html](https://facebook.github.io/react/docs/forms.html)*

**Mouse Events:**
- `onClick`, `onContextMenu`, `onDoubleClick`, `onDrag`, `onDragEnd`
- `onDragEnter`, `onDragExit`, `onDragLeave`, `onDragOver`, `onDragStart`
- `onDrop`, `onMouseDown`, `onMouseEnter`, `onMouseLeave`
- `onMouseMove`, `onMouseOut`, `onMouseOver`, `onMouseUp`

---

### 2.2 SyntheticEvent

- Giống như ReactJS bọc DOM vào Virtual DOM, ReactJS cũng bọc DOM event vào **SyntheticEvent** để đảm bảo tương thích đồng đều giữa các trình duyệt.

**Danh sách thuộc tính và phương thức của SyntheticEvent:**

| STT | Thuộc tính / Phương thức | Kiểu | Mô tả |
| :--: | :--- | :--- | :--- |
| 1 | `bubbles` | `boolean` | Sự kiện có nổi bọt (bubble) không |
| 2 | `cancelable` | `boolean` | Sự kiện có thể bị huỷ không |
| 3 | `currentTarget` | `DOMEventTarget` | Phần tử đang xử lý sự kiện |
| 4 | `defaultPrevented` | `boolean` | Hành vi mặc định có bị ngăn không |
| 5 | `eventPhase` | `number` | Giai đoạn của sự kiện |
| 6 | `isTrusted` | `boolean` | Sự kiện có phát sinh từ người dùng thật không |
| 7 | `nativeEvent` | `DOMEvent` | Đối tượng event gốc của trình duyệt |
| 8 | `preventDefault()` | `void` | Ngăn hành vi mặc định |
| 9 | `isDefaultPrevented()` | `boolean` | Kiểm tra hành vi mặc định có bị ngăn không |
| 10 | `stopPropagation()` | `void` | Dừng lan truyền sự kiện |
| 11 | `isPropagationStopped()` | `boolean` | Kiểm tra lan truyền có bị dừng không |
| 12 | `target` | `DOMEventTarget` | Phần tử phát sinh sự kiện |
| 13 | `timeStamp` | `number` | Thời điểm sự kiện xảy ra |
| 14 | `type` | `string` | Loại sự kiện (click, change,...) |

---

### 2.3 Event Pooling (Gom Pool sự kiện)

- Hệ thống SyntheticEvent trong React sử dụng kỹ thuật **Event Pooling** (tái sử dụng đối tượng event).
- **Nghĩa là:** Đối tượng `SyntheticEvent` sẽ được **tái sử dụng** và toàn bộ thuộc tính sẽ bị **nullified (đặt về null)** sau khi callback event đã được gọi xong.
- **Lý do:** Tối ưu hiệu năng (performance).
- **Hệ quả:** Không thể truy cập event theo cách **bất đồng bộ (asynchronous)**.

```jsx
// ❌ Sai - không truy cập được event trong async
function handleClick(event) {
  setTimeout(() => {
    console.log(event.target.value); // null! event đã bị pool
  }, 1000);
}

// ✅ Đúng - dùng event.persist() để giữ event khỏi pool
function handleClick(event) {
  event.persist(); // Lấy event ra khỏi pool
  setTimeout(() => {
    console.log(event.target.value); // Hoạt động!
  }, 1000);
}
```

---

### 2.4 Handler Events (Xử lý sự kiện — Controlled Component)

**Luồng xử lý sự kiện trong React (theo sơ đồ):**

```text
  +--------+    1. Input     +--------+    2. Events    +-------+
  |  User  | ------------->  |  View  | --------------> | State |
  +--------+                 +--------+                 +-------+
      ^                                                     |
      |                                                     | 3. event.target.value
      |                   4. Changed view                   |
      +-----------------------------------------------------+
                     value = {this.state.value}
```

**Ví dụ Controlled Form Input (Component điều khiển):**

```jsx
const { useState } = React;

function App() {
  const [input, setInput] = useState('');

  function formUpdate(event) {
    setInput(event.target.value);
  }

  return (
    <div className="form-group container">
      <label>Controlled Form Input</label>
      <input
        type="text"
        className="form-control"
        aria-describedby="emailHelp"
        placeholder="Update input here"
        value={input}
        onChange={formUpdate}
      />
      <large className="form-text text-muted">{input}</large>
    </div>
  );
}

const destination = document.querySelector("#container");
ReactDOM.render(<App />, destination);
```

> [!TIP]
> **Controlled Component** là pattern trong React, trong đó giá trị của một phần tử form (input, select, textarea) được kiểm soát hoàn toàn bởi **React State**. Mọi thay đổi từ người dùng đều đi qua `onChange` → cập nhật state → React re-render với giá trị mới.

---

# Chương 6: Side Effects

## 1. Side Effects & useEffect Hook

### 1.0 Synchronizing with Effects (Đồng bộ hóa với Effects)

- Một số component cần **đồng bộ hóa với các hệ thống bên ngoài** (external systems), ví dụ:
  - Điều khiển một component không thuộc React dựa theo React State.
  - Thiết lập kết nối tới server.
  - Gửi log phân tích khi component xuất hiện trên màn hình.
- **Effects** cho phép bạn chạy một đoạn code **sau khi render** để đồng bộ component với hệ thống bên ngoài React.

---

### 1.1 How to write an Effect (Cách viết Effect)

Để viết một Effect, tuân theo **3 bước**:

| Bước | Mô tả |
| :---: | :--- |
| **1. Declare an Effect** | Khai báo Effect. Mặc định, Effect sẽ chạy sau **mỗi lần commit** (sau mỗi lần render). |
| **2. Specify dependencies** | Chỉ định dependencies (phụ thuộc). Hầu hết Effects chỉ nên chạy lại khi cần thiết, không phải sau mỗi lần render. |
| **3. Add cleanup** | Thêm hàm cleanup nếu cần. Một số Effects cần dọn dẹp sau khi xong (ví dụ: `connect` → `disconnect`, `subscribe` → `unsubscribe`). |

---

### 1.2 Declare an Effect (Khai báo Effect)

- Import hook `useEffect` từ React:

```jsx
import { useEffect } from 'react';
```

- Gọi `useEffect` ở **top level** của component và đặt code bên trong:

```jsx
function MyComponent() {
  useEffect(() => {
    // Code ở đây sẽ chạy sau *mỗi lần* render
  });

  return <div />;
}
```

---

### 1.3 Specify the Effect Dependencies (Chỉ định Dependencies)

- Mặc định, Effects chạy sau **mọi lần render**. Điều này thường không mong muốn vì:
  - **Chậm:** Đồng bộ với hệ thống bên ngoài không phải lúc nào cũng tức thì (ví dụ: không muốn reconnect chat server mỗi lần gõ phím).
  - **Sai:** Một số hiệu ứng chỉ nên chạy một lần (ví dụ: animation fade-in chỉ nên chạy khi component xuất hiện lần đầu).

**Cách bỏ qua re-run không cần thiết** bằng cách truyền **mảng dependencies** làm tham số thứ 2:

```jsx
// Chỉ chạy 1 lần khi component mount (mảng rỗng)
useEffect(() => {
  // ...
}, []);

// Chỉ chạy lại khi isPlaying thay đổi
useEffect(() => {
  if (isPlaying) {
    // ...
  } else {
    // ...
  }
}, [isPlaying]); // isPlaying phải được khai báo trong dependencies!
```

> [!IMPORTANT]
> **Quy tắc dependencies:**
> - `useEffect(() => {...})` — **Không có mảng**: chạy sau **mỗi lần** render.
> - `useEffect(() => {...}, [])` — **Mảng rỗng**: chỉ chạy **1 lần** khi component mount.
> - `useEffect(() => {...}, [dep1, dep2])` — **Có dependencies**: chạy lại khi **bất kỳ dependency nào thay đổi**.

---

### 1.4 Cleanup Function (Hàm dọn dẹp)

- Nếu Effect **subscribe** (đăng ký) vào một thứ gì đó, hàm cleanup phải **unsubscribe** (huỷ đăng ký):

```jsx
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }

  window.addEventListener('scroll', handleScroll);

  // Cleanup: gỡ bỏ event listener khi component unmount
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**Cách React xử lý cleanup (trong môi trường Development):**
1. Effect gọi `addEventListener()`.
2. React **ngay lập tức** gọi cleanup → `removeEventListener()`.
3. React gọi `addEventListener()` lần nữa với cùng handler.
4. Kết quả: tại mọi thời điểm chỉ có **1 subscription duy nhất** đang hoạt động — giống với môi trường Production.

**Các cặp Effect — Cleanup thường gặp:**

| Effect | Cleanup |
| :--- | :--- |
| `connect()` | `disconnect()` |
| `subscribe()` | `unsubscribe()` |
| `addEventListener()` | `removeEventListener()` |
| `fetch()` | `cancel()` hoặc `ignore result` |
| `setTimeout()` | `clearTimeout()` |
| `setInterval()` | `clearInterval()` |

---

## 2. Other ES (ECMAScript) Versions in React

### 2.1 ECMAScript (ES) là gì?

- **ECMAScript (ES)** là một đặc tả (specification) ngôn ngữ scripting được chuẩn hóa bởi **Ecma International** theo tiêu chuẩn **ECMA-262** và **ISO/IEC 16262**.
- Được tạo ra để **chuẩn hóa JavaScript**, nhằm hỗ trợ nhiều cài đặt độc lập (independent implementations) của ngôn ngữ này trên các nền tảng và môi trường khác nhau.

---

### 2.2 Các tính năng nổi bật của ES6 (ECMAScript 2015)

ES6 là phiên bản quan trọng nhất và được sử dụng rộng rãi nhất trong hệ sinh thái React:

| STT | Tính năng ES6 | Mô tả ngắn |
| :---: | :--- | :--- |
| 1 | **Block-Scoped: `let` và `const`** | Khai báo biến có phạm vi block (thay thế `var`). `const` cho hằng số, `let` cho biến thay đổi được. |
| 2 | **Arrow Function (`=>`)** | Hàm mũi tên, cú pháp ngắn gọn hơn, không có `this` riêng (kế thừa `this` từ ngữ cảnh cha). |
| 3 | **Rest Parameter (`...args`)** | Gom các tham số còn lại vào một mảng. |
| 4 | **Destructuring Assignment** | Giải cấu trúc — gán giá trị từ Object/Array vào biến một cách ngắn gọn. |
| 5 | **Default Parameters** | Tham số mặc định cho hàm khi không truyền vào. |
| 6 | **Template Literals** | Chuỗi template với backtick `` ` `` hỗ trợ nhúng biểu thức `${expression}` và xuống dòng trực tiếp. |
| 7 | **Multi-line String** | Chuỗi nhiều dòng (thực hiện thông qua Template Literals). |
| 8 | **Enhanced Object Literals** | Cú pháp object ngắn gọn hơn: shorthand properties, method shorthand, computed properties. |
| 9 | **Promises** | Quản lý code bất đồng bộ (async), thay thế callback hell. |
| 10 | **Classes** | Cú pháp lớp (class) theo hướng OOP rõ ràng hơn (dựa trên prototype của JS). |

**Ví dụ nhanh một số tính năng ES6 thường dùng trong React:**

```js
// 1. let & const
const PI = 3.14;
let count = 0;

// 2. Arrow Function
const greet = (name) => `Hello, ${name}!`;

// 3. Rest Parameter
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// 4. Destructuring Assignment
const { name, age } = person;
const [first, second] = array;

// 5. Default Parameters
function createUser(name = 'Anonymous', role = 'viewer') {
  return { name, role };
}

// 6. Template Literals
const message = `Welcome, ${name}! You have ${count} notifications.`;

// 8. Enhanced Object Literals
const x = 1, y = 2;
const point = { x, y }; // Shorthand: { x: x, y: y }

// 9. Promises
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 10. Classes (dùng trong Class Components của React)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}
```


