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


