# Tổng Hợp Kiến Thức TypeScript

---

## 1. JavaScript ES6+ Advance

### 1.1. Classes & Basic OOP

- **Class**: Defines properties and behaviors (Khuôn mẫu định nghĩa thuộc tính và hành vi).
- **Instance**: Concrete object created from the class (Đối tượng cụ thể được khởi tạo từ class).
- **Concept**: Create one, instantiate many times (Tạo một lần, khởi tạo nhiều lần).
- **Inheritance**: A mechanism allowing new classes to derive features from existing parent classes (Cơ chế cho phép lớp con kế thừa các tính năng từ lớp cha).
- **Goal**: Reusability & Clean Code (DRY - Don't Repeat Yourself).
- **Keywords**:
  - `extends`: Inherit features from parent (Kế thừa tính năng từ lớp cha).
  - `super()`: Call parent's constructor (Gọi hàm khởi tạo của lớp cha).

#### Cú pháp cơ bản (Basic Syntax)

```javascript
class Animal {
  constructor(name, age) {
    this.name = name; // Property
    this.age = age;
  }

  eat() { // Method
    console.log(`${this.name} is eating!`);
  }
}

const myAnimal = new Animal("Lion", 5); // Instance
```

#### Kế thừa (Inheritance Example)

```javascript
class Pet extends Animal {
  constructor(name, age, owner) {
    super(name, age); // Call the parent class constructor
    this.owner = owner; // New property for Pet class
  }

  play() { // New method for Pet class
    console.log(`${this.name} is playing!`);
  }
}
```

---

### 1.2. Modules

- **Khái niệm**:
  - Modules giúp giải quyết vấn đề **"Spaghetti Code"** (tất cả code viết trong cùng 1 file).
  - Modules chia nhỏ code thành các file nhỏ hơn, có thể tái sử dụng.
- **Benefits (Lợi ích)**:
  - **Maintainability**: Dễ bảo trì và quản lý code.
  - **Namespacing**: Tránh xung đột biến/tên hàm toàn cục.
  - **Reusability**: Tái sử dụng dễ dàng ở nhiều nơi.

#### Phân loại Export & Import

Có 2 cách chính để export modules: **Named Export** và **Default Export**.

| Tiêu chí | Named Export | Default Export |
| :--- | :--- | :--- |
| **Quantity** | Multiple per file (Nhiều trong 1 file) | Only ONE per file (Duy nhất 1 trong 1 file) |
| **Syntax** | `export const name ...` | `export default ...` |
| **Import** | `import { name } from ...` *(Exact name - đúng tên)* | `import name from ...` *(Flexible name - tên tùy chọn)* |

#### Cú pháp minh họa (Syntax Example)

```javascript
// mathUtils.js
export const PI = 3.14; // Named
export const e = 2.71;  // Named
export default function add(a, b) {} // Default
```

```javascript
// app.js
import add, { PI, e } from './mathUtils'; // Import both types

console.log(add(PI, e));
```

---

### 1.3. Promises and Async/Await

#### Synchronous vs Asynchronous

- **Synchronous (Đồng bộ)**:
  - JS thực thi code trực tiếp trên main UI thread.
  - JS chỉ có **DUY NHẤT 1 Call Stack** (Single-threaded). Nó xử lý từng công việc một tại một thời điểm.
  - Code chạy nối tiếp từng dòng một (Line-by-line).
  - **Rủi ro (Risk)**: Nếu một tác vụ mất quá nhiều thời gian, toàn bộ UI sẽ bị đóng băng (frozen).

- **Asynchronous (Bất đồng bộ)**:
  - Ủy nhiệm (delegate) các tác vụ nặng hoặc chậm cho browser/hệ thống xử lý.
  - Các tác vụ nặng được xử lý bên ngoài main thread.
  - Giao diện (UI) vẫn tiếp tục hoạt động mượt mà.
  - Khi tác vụ hoàn thành, kết quả được trả về thông qua **Event Loop**.

#### Promises

- **Khái niệm**: Là một đối tượng đại diện cho sự hoàn tất (hoặc thất bại) trong tương lai của một tác vụ bất đồng bộ.
- **3 states of a Promise (3 trạng thái)**:
  - **Pending**: Đang xử lý (In progress...)
  - **Fulfilled**: Thành công (Data received)
  - **Rejected**: Thất bại (Error/Failed)

##### Ví dụ định nghĩa Promise (Define a Promise):

```javascript
const apiCall = () => { // define a Promise
  return new Promise((resolve, reject) => {
    console.log("Promise state: PENDING...");
    setTimeout(() => {
      const success = Math.random() > 0.5; // random success or fail
      if (success) {
        resolve("Data loaded successfully!");
      } else {
        reject("Network error!");
      }
    }, 2000);
  });
};
```

##### Ví dụ sử dụng Promise (Consume the Promise):

```javascript
// Consume the Promise
apiCall()
  .then((result) => {
    console.log("Promise state: FULFILLED");
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Promise state: REJECTED");
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Promise finished (either success or fail)");
  });
```

#### Async / Await

- **Mục đích**: Viết code bất đồng bộ nhìn giống như code đồng bộ (tuần tự, dễ đọc hơn).
- **Rules (Quy tắc)**:
  - `async`: Đặt phía trước một hàm (`async function` hoặc `async () => {}`).
  - `await`: Đặt phía trước một Promise (tạm dừng thực thi hàm async cho tới khi Promise trả về kết quả).
  - **Bắt buộc** dùng `try ... catch` để xử lý lỗi (error handling).

##### Ví dụ sử dụng Async/Await cơ bản:

```javascript
const fetchData = async () => {
  try {
    console.log("Promise state: PENDING...");
    const result = await apiCall(); // Chờ Promise hoàn thành
    console.log("Promise state: FULFILLED");
    console.log("Result:", result);
  } catch (error) {
    console.log("Promise state: REJECTED");
    console.log("Error:", error);
  } finally {
    console.log("Promise finished (either success or fail)");
  }
};
```

#### So sánh Promise Chain vs Async / Await

##### 1. Promise Chain

```javascript
// Promise Chain
login()
  .then((result) => {
    console.log(result);
    return getUserProfile();
  })
  .then((profile) => {
    console.log(profile);
    return getOrders();
  })
  .then((orders) => {
    console.log(orders);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

##### 2. Async / Await (Cách viết mượt mà & sạch hơn)

```javascript
// Async / Await
async function loadUserData() {
  try {
    const loginResult = await login();
    console.log(loginResult);

    const profile = await getUserProfile();
    console.log(profile);

    const orders = await getOrders();
    console.log(orders);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadUserData();
```

---

## 2. Understanding Static Typing

### 2.1. Benefits of Static Typing (Lợi ích của Static Typing)

#### Benefit 1: Early Error Detection (Phát hiện lỗi sớm)
- **Pre-Runtime Bug Catch**: Cấu trúc kiểm tra lúc biên dịch (compile-time checks) phát hiện các lỗi phổ biến như `TypeError` và `AttributeError` trước khi code được thực thi.
- **Reduced Debugging Time**: Chuyển việc phát hiện bug về giai đoạn sớm hơn (shifts bug detection "left"), giúp giảm tới 30% thời gian debugging.
- **Deployment Safety**: Bắt các lỗi nghiêm trọng trước khi deploy, ngăn ngừa sự cố sập ứng dụng (runtime crashes) trên môi trường production.
- **Ví dụ**: Compiler của Java sẽ gắn cờ cảnh báo ngay lập tức nếu cố gắng nối một chuỗi (`String`) với một số nguyên (`int`), tiết kiệm thời gian gỡ lỗi quý giá.

#### Benefit 2: Enhanced Code Readability & Maintainability (Tăng độ đọc hiểu & Bảo trì code)
- **Self-Documenting Code**: Đọc và hiểu code dễ dàng nhờ khai báo kiểu dữ liệu rõ ràng, hoạt động như tài liệu hướng dẫn được tích hợp sẵn.
- **Improved Team Collaboration**: Nâng cao khả năng hiểu và làm việc nhóm hiệu quả đối với các nhóm phát triển lớn (từ 5 lập trình viên trở lên) khi làm việc trên cùng codebase.
- **Simplified Onboarding**: Làm rõ luồng dữ liệu, giúp thành viên mới nhanh chóng nắm bắt được cấu trúc dự án hiện tại.
- **Safer Refactoring**: Hỗ trợ tái cấu trúc code (refactoring) an toàn và giảm thiểu rủi ro phát sinh các tác dụng phụ không mong muốn (side effects).

#### Benefit 3: Superior IDE Support & Developer Experience (Hỗ trợ IDE vượt trội & Trải nghiệm lập trình viên)
- **Intelligent Autocompletion**: Kích hoạt tính năng gợi ý code thông minh (IntelliSense/Autocompletion), giảm lỗi cú pháp và tăng tốc độ viết code lên đến 20%.
- **Real-time Feedback**: Cung cấp phản hồi và highlight lỗi ngay lập tức trong môi trường phát triển tích hợp (IDE).
- **Robust Refactoring Tools**: Đẩy mạnh các công cụ tái cấu trúc nâng cao, chẳng hạn như tính năng "Rename Symbol" trên toàn bộ dự án.
- **Enhanced Code Navigation**: Cải thiện khả năng điều hướng và tìm kiếm trong các dự án lớn, phức tạp (ví dụ: dùng "Go to Definition").

---

### 2.2. Static vs. Dynamic Typing: Core Differences (Khác biệt cốt lõi)

| Tiêu chí | Static Typing (Kiểu tĩnh) | Dynamic Typing (Kiểu động) |
| :--- | :--- | :--- |
| **Thời điểm kiểm tra** | Được kiểm tra **lúc biên dịch (Compile-time)**, trước khi chương trình chạy. | Được kiểm tra **lúc thực thi (Runtime)**, khi chương trình đang chạy. |
| **Đặc điểm** | Ràng buộc chặt chẽ, phát hiện lỗi sớm. | Linh hoạt, cho phép phát triển và tạo prototype nhanh chóng. |
| **Ngôn ngữ tiêu biểu** | Java, C#, C++, Go, TypeScript. | Python, JavaScript, Ruby, PHP. |

---

### 2.3. Static Typing in Practice: Examples (Thực hành Static Typing)

- **Java**: Bắt buộc khai báo kiểu dữ liệu rõ ràng cho biến và tham số hàm. Compiler đảm bảo tính tương thích về kiểu trong quá trình build.
  ```java
  String name = "Alice";
  int age = 30;
  ```
- **C#**: Thực thi độ an toàn kiểu dữ liệu mạnh mẽ trên các cấu trúc hướng đối tượng.
  ```csharp
  List<string> names = new List<string>();
  ```
- **TypeScript**: Bổ sung một lớp kiểm tra kiểu tĩnh **tùy chọn (optional)** vào JavaScript, cực kỳ lý tưởng để xây dựng các ứng dụng web lớn và phức tạp.
  ```typescript
  function greet(name: string): string {
    return `Hello, ${name}`;
  }
  ```

---

### 2.4. Dynamic Typing in Practice: Examples (Thực hành Dynamic Typing)

- **Python**: Kiểu của biến được xác định khi gán giá trị và có thể thay đổi linh hoạt lúc thực thi. Lỗi như `AttributeError` chỉ xuất hiện lúc runtime.
  ```python
  name = "Bob"
  age = 25
  ```
- **JavaScript**: Cung cấp độ linh hoạt cao, cho phép một biến chứa nhiều kiểu dữ liệu khác nhau ở các thời điểm khác nhau. Tuy nhiên sự linh hoạt này dễ dẫn đến các lỗi runtime khó tìm.
  ```javascript
  let value = "hello";
  value = 123; // Hợp lệ trong JS nhưng có thể gây lỗi logic về sau
  ```
- **Ruby**: Áp dụng nguyên lý **"Duck Typing"** (*"Nếu nó đi như một con vịt và kêu như một con vịt, thì nó là một con vịt"*). Sự phù hợp của đối tượng dựa trên các phương thức của nó chứ không dựa trên kiểu được khai báo rõ ràng.
  ```ruby
  def add(a, b)
    a + b
  end
  ```

---

### 2.5. Conclusion: Choosing the Right Type System (Kết luận: Lựa chọn Hệ thống Kiểu phù hợp)

Việc lựa chọn giữa **Static Typing** và **Dynamic Typing** phụ thuộc vào nhu cầu cụ thể của dự án:

- **Ưu điểm của Static Typing**: Giúp phát hiện bug sớm, bảo trì code tốt hơn, hỗ trợ công cụ lập trình mạnh mẽ — thích hợp cho các dự án lớn, phức tạp.
- **Ưu điểm của Dynamic Typing**: Mang lại sự linh hoạt cao hơn, giúp phát triển ban đầu và tạo bản mẫu (prototyping) nhanh hơn cho các dự án vừa và nhỏ.
- **Yếu tố cân nhắc chính**: Quy mô dự án, kích thước team và yêu cầu bảo trì lâu dài sẽ quyết định sự lựa chọn.
- **Giải pháp Lai (Hybrid Approach)**: Các giải pháp như **TypeScript** mang lại sự kết hợp hoàn hảo — tận dụng lợi ích của **Static Typing** cho các ứng dụng web phức tạp trong khi vẫn giữ được sự linh hoạt của **JavaScript**.

---

## 3. TypeScript Introduction

### 3.1. What is TypeScript? (TypeScript là gì?)

- **Programming Language**: Ngôn ngữ lập trình mã nguồn mở (Open Source).
- **Superset of JavaScript**: TypeScript là tập mẹ của JavaScript (mọi đoạn mã JavaScript hợp lệ đều là mã TypeScript hợp lệ).
- **Compiled to JavaScript**: Mã TypeScript được biên dịch (Compile) thành JavaScript (ES5, ES6+) thông qua trình biên dịch TypeScript Compiler (`tsc`).
- **Static Typing**: Hỗ trợ kiểm tra kiểu tĩnh (Static Typing) ngay ở bước biên dịch.
- **Class-based OOP**: Hỗ trợ đầy đủ lập trình hướng đối tượng dựa trên lớp (Class-based Object-Oriented Programming).
- **Developed by Microsoft**: Được phát triển và bảo trì bởi Microsoft (đứng đầu bởi Anders Hejlsberg từ năm 2012).

#### Luồng hoạt động của Compiler (TypeScript Compiler Workflow)

```
[ Code TypeScript (.ts) ]  ───►  [ Compiler (tsc) ]  ───►  [ Code JavaScript (.js) ]
```

---

### 3.2. Features of TypeScript (Các tính năng nổi bật)

- **Hỗ trợ đầy đủ các tính năng JS mới nhất**: Bao gồm ECMAScript 2015 (ES6) và các chuẩn ECMAScript mới hơn.
- **Tương thích toàn bộ thư viện & API của JS**: Tương thích hoàn toàn với tất cả thư viện JavaScript phổ biến như React, Vue, Angular, jQuery, BootstrapJS, v.v.
- **Dễ dàng Refactor & Nâng cao kỹ năng OOP**: Hệ thống kiểm tra kiểu tĩnh giúp việc tái cấu trúc code an toàn hơn và nâng cao tư duy lập trình hướng đối tượng.
- **Dễ học (Easy to learn)**: Cú pháp phát triển mở rộng từ JavaScript nên rất dễ tiếp cận đối với lập trình viên đã biết JS.
- **Thích hợp cho các ứng dụng lớn**: Lý tưởng cho việc xây dựng các dự án quy mô lớn một cách nhanh chóng, dễ bảo trì và có tính tái sử dụng cao.

---

### 3.3. So sánh TypeScript vs JavaScript (TypeScript vs JavaScript Comparison)

| Tiêu chí | TYPESCRIPT 🔷 | JAVASCRIPT 🟡 |
| :--- | :--- | :--- |
| **Hệ thống kiểu (Typing)** | Strong typing (Hỗ trợ cả static và dynamic type) | Chỉ làm việc với Dynamic types |
| **Tác giả & Năm phát hành** | Được phát triển bởi **Anders Hejlsberg (Microsoft)** - năm 2012 | Được phát triển bởi **Netscape** - năm 1995 |
| **Đuôi mở rộng (Extension)** | `.ts` (hoặc `.tsx` cho React) | `.js` (hoặc `.jsx` cho React) |
| **Môi trường thực thi** | **Không** chạy trực tiếp trên trình duyệt (phải biên dịch ra JS) | **Chạy trực tiếp** trên trình duyệt hoặc môi trường Node.js |
| **Thời điểm phát hiện lỗi** | Phát hiện và sửa lỗi ngay **lúc biên dịch (Compile time)** | Chỉ phát hiện lỗi khi chương trình đang chạy **(Runtime)** |
| **Hỗ trợ OOP** | Hỗ trợ OOP mạnh mẽ: Classes, Interfaces, Inheritance, Generics,... | Là ngôn ngữ kịch bản (Scripting), hỗ trợ OOP qua Prototype |
| **Yêu cầu kinh nghiệm** | Yêu cầu kiến thức về lập trình kịch bản & tư duy kiểu dữ liệu | Không bắt buộc có kinh nghiệm lập trình kịch bản trước đó |
| **Cài đặt (Installation)** | Cần cài đặt thông qua npm (`npm install -g typescript`) | Không cần cài đặt (tích hợp sẵn trong các engine trình duyệt) |

---

## 4. TYPESCRIPT PROGRAMMING

### 4.1. Core Types: number, string, boolean

#### Bảng tổng hợp Core Types cơ bản

| Type | Ví dụ (Example) | Mô tả (Description) |
| :--- | :--- | :--- |
| `number` | `1`, `5.3`, `-10` | Tất cả các số, không phân biệt số nguyên (Integer) hay số thực (Float). |
| `string` | `` `Hi` ``, `"Hi"`, `'Hi'` | Tất cả các giá trị chuỗi văn bản. |
| `boolean` | `true`, `false` | Chỉ có 2 giá trị: `true` hoặc `false`. |

#### Cấu trúc Type Annotation (Chú thích kiểu)

```
  var   message   :   string   =   "Hello World"
  │        │      │     │      │        │
  │        │      │     │      │        └─ Initial Value (Giá trị khởi tạo)
  │        │      │     │      └───────── Assignment Operator (Toán tử gán)
  │        │      │     └──────────────── Data Type (Kiểu dữ liệu)
  │        │      └────────────────────── Annotation (Dấu hai chấm chú thích kiểu)
  │        └───────────────────────────── Variable Name (Tên biến)
  └────────────────────────────────────── Declare (Từ khóa khai báo: var/let/const)
```

#### Ví dụ thực tế (Ảnh 1)

```typescript
let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is ';
let permit: boolean = true;

const result = number1 + number2;
if (permit) {
  console.log(phrase + result);
} else {
  console.log('Not show result');
}
```

---

### 4.2. Type Inference (Suy luận kiểu)

Trong TypeScript, trình biên dịch (compiler) sẽ **tự động suy luận kiểu dữ liệu** khi:
- Biến hoặc thành phần được khởi tạo giá trị ban đầu.
- Đặt giá trị mặc định cho tham số của hàm.
- Xác định giá trị trả về của một hàm.

#### Ví dụ về Type Inference và cảnh báo lỗi (Ảnh 2)

```typescript
function add(x = 5) { // x được suy luận tự động là number (mặc định = 5)
  let phrase = 'Result is '; // phrase được suy luận tự động là string

  phrase = 10; // ❌ Lỗi: Type 'number' is not assignable to type 'string'
  x = '2.8';   // ❌ Lỗi: Type 'string' is not assignable to type 'number'

  return phrase + x;
}

let result: number = add(); // ❌ Lỗi: add() trả về string (nối chuỗi) nên không thể gán cho result kiểu number
```

---

### 4.3. Core Types: Object

#### Mở rộng bảng kiểu dữ liệu với Object

| Type | Ví dụ (Example) | Mô tả (Description) |
| :--- | :--- | :--- |
| `number` | `1`, `5.3`, `-10` | All numbers, no difference between Integer and float |
| `string` | `` `Hi` ``, `"Hi"`, `'Hi'` | All text values |
| `boolean` | `true`, `false` | There are only 2 values: `true` or `false` |
| `object` | `{age: 30}` | Bất kỳ đối tượng JavaScript nào (Any JavaScript object) |

#### Cấu trúc Type Annotation cho Object

```
  var   person   :   { name: string, age: number }   =   { name: 'Typescript', age: 11 }
  │        │     │                │                  │                  │
  │        │     │                │                  │                  └─ Object Value (Giá trị đối tượng)
  │        │     │                │                  └──────────────────── Assignment Operator (Toán tử gán)
  │        │     │                └────────────────────────────────────── Structure inside Braces {} (Cấu trúc kiểu)
  │        │     └─────────────────────────────────────────────────────── Annotation (Chú thích kiểu)
  │        └───────────────────────────────────────────────────────────── Object Name (Tên đối tượng)
  └────────────────────────────────────────────────────────────────────── Declare (Từ khóa khai báo)
```

#### Ví dụ thực tế (Ảnh 3)

```typescript
var person: {
  name: string,
  age: number
};

person = {
  name: 'Typescript',
  age: 11
};

console.log(person.name);
```

---

### 4.4. Core Types: Array

#### Mở rộng bảng kiểu dữ liệu với Array

| Type | Ví dụ (Example) | Mô tả (Description) |
| :--- | :--- | :--- |
| `array` | `[1, 2, 3]` | Bất kỳ mảng JavaScript nào (`number[]`, `string[]`,...) |

#### Cách 1: Sử dụng Cặp ngoặc vuông `[]` (Square Brackets)

```
  let   hobbies   :   string[]   =   ['Sports', 'Cooking']
  │        │      │      │       │             │
  │        │      │      │       │             └─ Initial Array Values
  │        │      │      │       └─────────────── Assignment Operator
  │        │      │      └─────────────────────── Data Type (Mảng kiểu string)
  │        │      └────────────────────────────── Annotation
  │        └───────────────────────────────────── Array Name
  └────────────────────────────────────────────── Declare Keyword
```

```typescript
let hobbies: string[] = ['Sports', 'Cooking'];
```

#### Cách 2: Sử dụng Generic Array Type `Array<T>`

```
  let   hobbies   :   Array<string>   =   ['Sports', 'Cooking']
  │        │      │         │         │             │
  │        │      │         │         │             └─ Initial Array Values
  │        │      │         │         └─────────────── Assignment Operator
  │        │      │         └───────────────────────── Keyword 'Array' với Element Type '<string>'
  │        │      └─────────────────────────────────── Annotation
  │        └────────────────────────────────────────── Array Name
  └─────────────────────────────────────────────────── Declare Keyword
```

```typescript
let hobbies: Array<string> = ['Sports', 'Cooking'];
```

---

### 4.5. Special Types: Tuple & Any

#### Mở rộng bảng kiểu dữ liệu với Tuple & Any

| Type | Ví dụ (Example) | Mô tả (Description) |
| :--- | :--- | :--- |
| `tuple` | `[1, 2]` | Mảng gồm các phần tử có kiểu dữ liệu cố định theo vị trí (TS bổ sung), mảng có độ dài cố định. |
| `any` | `*` | Đặt bất kỳ kiểu dữ liệu nào cho biến / mảng (khi chưa rõ kiểu). |

#### 1. Tuple (Hàng / Bộ phần tử cố định)

Tuple hỗ trợ các phương thức mảng như `.push()` (thêm phần tử) và `.pop()` (xóa phần tử cuối).

```typescript
let hobbies: [number, string];
hobbies = [2, 'Sports'];

// Lưu ý: push() vẫn thực thi được ở runtime nhưng cần cẩn trọng để giữ đúng logic kiểu
hobbies.push('Cooking');
```

#### 2. Any (Kiểu dữ liệu linh hoạt)

```typescript
// Gán biến với kiểu any
let hobby: any;
hobby = 2;
hobby = 'Cooking';

// Mảng chứa bất kỳ kiểu dữ liệu nào
let hobbies: any[];
hobbies = [2, 'Sports', true];
```

---

### 4.6. Type: Union

#### Mở rộng bảng kiểu dữ liệu với Union

| Type | Ví dụ (Example) | Mô tả (Description) |
| :--- | :--- | :--- |
| `union` | `Type1 \| Type2 \| ...` | Thiết lập danh sách các kiểu dữ liệu có thể chấp nhận cho biến / mảng / hàm. |

#### Ví dụ Union Type

```typescript
// Biến nhận kiểu string HOẶC number
let hobby: string | number;
hobby = 2;
hobby = 'Cooking';

// Mảng chứa toàn string HOẶC mảng chứa toàn number
let hobbies: string[] | number[];
hobbies = ['Cooking', 'Sports'];
hobbies = [5, 8, 18, 30];
```

---

### 4.7. Type: Enum

#### Mở rộng bảng kiểu dữ liệu với Enum

| Type | Ví dụ (Example) | Mô tả (Description) |
| :--- | :--- | :--- |
| `enum` | `enum Enum { NEW, OLD }` | Tập hợp các hằng số được định danh (được TypeScript thêm vào). |

#### Ví dụ Enum & Mã biên dịch (Ảnh 4)

```typescript
enum Role { ADMIN, READ_ONLY, AUTHOR };
```

Khi biên dịch sang JavaScript, Enum được tạo dưới dạng đối tượng hai chiều (Reverse Mapping):

```javascript
// Kết quả biên dịch JS của Enum Role:
{
  '0': 'ADMIN',
  '1': 'READ_ONLY',
  '2': 'AUTHOR',
  ADMIN: 0,
  READ_ONLY: 1,
  AUTHOR: 2
}
```

#### Ví dụ tổng hợp chi tiết từ `app.ts` (Ảnh 4)

```typescript
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: string,
  roletuple: [number, string]
} = {
  name: 'Typescript',
  age: 11,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN, // Note: Chú ý kiểu dữ liệu gán cho role
  roletuple: [2, 'author']
};

let favouriteActivites: any[];
favouriteActivites = [5, 'Sports', true];

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

person.roletuple.push('admin');          // Hợp lệ với hàm push
person.roletuple[1] = 10;               // ❌ Lỗi: Type 'number' không gán được cho 'string'
person.roletuple = [0, 'admin', 'user']; // ❌ Lỗi: Độ dài tuple không khớp (chỉ nhận 2 phần tử)
```

---

### 4.8. Literal Types & Type Alias

#### 1. Literal Types

Ràng buộc giá trị của biến chỉ được nằm trong một tập hợp các giá trị hữu hạn cố định:
- **Numeric literal types**: ví dụ `1 | 2 | 3`
- **String literal types**: ví dụ `'as-number' | 'as-text'`
- **Boolean literal types**: ví dụ `true | false`
- **Enum literal types**

#### 2. Type Alias (Bí danh kiểu)

Sử dụng từ khóa `type` để đặt tên tùy chỉnh cho một cấu trúc kiểu phức tạp hoặc kết hợp kiểu:

```typescript
// Cú pháp: type CustomName = DataType;

type custom = 'as-number' | 'as-text'; // Kết hợp Literal type với Type Alias
type Combinable = string | number;

let aliascustom: Combinable;
aliascustom = 'Hello'; // Hợp lệ
aliascustom = 100;     // Hợp lệ
```

---

### 4.9. Null & Undefined

Bảng so sánh khác biệt giữa **Null** và **Undefined**:

| Tiêu chí | Null | Undefined |
| :--- | :--- | :--- |
| **Gán giá trị** | Đã được gán giá trị `null` cho biến | Chưa được gán giá trị cho biến |
| **Ý nghĩa** | Biến không trỏ tới bất kỳ đối tượng nào (sự vắng mặt của giá trị) | Biến đã khai báo nhưng chưa có giá trị gán |
| **`typeof`** | `object` | `undefined` |
| **Trạng thái** | Có thể coi là rỗng (empty) hoặc không tồn tại | Sự vắng mặt của biến / giá trị khởi tạo |
| **Chuyển đổi số** | Chuyển đổi thành `0` khi tính toán | Chuyển đổi thành `NaN` khi tính toán |

---

### 4.10. Unknown vs Any Type

- **`unknown`**: Giống như `any`, biến kiểu `unknown` có thể nhận bất kỳ giá trị nào. Tuy nhiên, TypeScript **bắt buộc kiểm tra kiểu (Type Checking)** hoặc ép kiểu trước khi bạn thực hiện các thao tác trên biến `unknown`.
- **`any`**: Cho phép thực hiện mọi thao tác (gọi hàm, truy cập thuộc tính) mà **không cần kiểm tra kiểu**, làm mất đi sự an toàn của TypeScript.

```typescript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput; // ❌ Lỗi nếu chưa kiểm tra kiểu

if (typeof userInput === 'string') {
  userName = userInput; // ✅ Hợp lệ sau khi kiểm tra typeof
}
```

---

### 4.11. Type Assertions (Ép kiểu)

Dùng khi bạn biết rõ kiểu dữ liệu hơn TypeScript.

```typescript
let userInput: any = "this is a string";

// Cách 1: Sử dụng Cặp ngoặc nhọn <Type> (Angle-bracket syntax)
let strLength1: number = (<string>userInput).length;

// Cách 2: Sử dụng từ khóa 'as' (Khuyên dùng trong React / JSX)
let strLength2: number = (userInput as string).length;
```

---

## 5. Functions in TypeScript (Hàm trong TypeScript)

### 5.1. Arrow Function (Hàm mũi tên)

Cú pháp khai báo hàm mũi tên giúp ngắn gọn hơn so với khai báo hàm truyền thống:

#### Khai báo truyền thống (Traditional Function)
```
  function   f_name   ()   {   /* statements */   }
     │         │
     │         └─ Function Name (Tên hàm)
     └────────── Prefix (Từ khóa khai báo function)
```

#### Khai báo Arrow Function (Arrow Notation)
```
  let   f_name   =   ()   =>   {   /* statements */   }
  │       │               │
  │       │               └─ Arrow Notation (Ký hiệu mũi tên =>)
  │       └───────────────── Variable Name (Tên biến lưu hàm)
  └───────────────────────── Declare Keyword (let/const)
```

---

### 5.2. Arrow Function Return (Trả về giá trị)

Cả hàm truyền thống và Arrow Function đều sử dụng từ khóa `return` để trả về giá trị:

```typescript
// Traditional Function with return
function f_name() {
  return;
}

// Arrow Function with return
let f_name = () => {
  return;
};
```

---

### 5.3. Arrow Function as Type (Function Types & Return Types)

Chúng ta có thể chỉ định kiểu dữ liệu trả về (Return Type Annotation) cho cả hàm truyền thống và Arrow Function:

#### Cú pháp chú thích kiểu trả về

```typescript
// Traditional Function Return Type
function Sum(): number {
  return 10;
}

// Arrow Function Return Type
let Sum = (): number => {
  return 10;
};
```

#### Ví dụ thực tế từ `app.ts` (Ảnh 2)

```typescript
function Sum(): string {
  return "Result: 5";
}

let showSum; // Implicit type: any
showSum = Sum;
console.log(showSum()); // Output: "Result: 5"

let greeting = (): number => {
  return 10;
};
console.log("Result: " + greeting()); // Output: "Result: 10"
```

---

### 5.4. Function with Parameters (Hàm có tham số)

#### Sơ đồ Phân loại Tham số trong Hàm

```
                 [ Function Parameter ]
                           │
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼
[ Optional Parameter ]  [ Rest Parameter ]  [ Default Parameter ]
  (Tham số tùy chọn)     (Tham số gom/mảng)  (Tham số mặc định)
```

#### Cú pháp cơ bản

```typescript
// Traditional Function với tham số
function f_name(para1: type, para2: type, ...) {
  return;
}

// Arrow Function với tham số
let f_name = (para1: type, para2: type, ...) => {
  return;
};
```

#### 5.4.1. Default Parameter (Tham số mặc định)

Cung cấp một giá trị mặc định cho tham số nếu người dùng không truyền giá trị vào khi gọi hàm.

```typescript
// Cú pháp:
let f_name = (para1: type, para2: type = default_value, ...) => {
  return;
};

// Ví dụ:
let add = (x: number = 5, y: number = 10) => {
  return x + y;
};
console.log(add());    // Output: 15 (sử dụng x=5, y=10)
console.log(add(20));  // Output: 30 (sử dụng x=20, y=10)
```

#### 5.4.2. Optional Parameter (Tham số tùy chọn)

Đặt ký tự `?` ngay sau tên tham số để đánh dấu tham số đó có thể có hoặc không (`type | undefined`).

> ⚠️ **Lưu ý**: Tham số tùy chọn phải được đặt **sau** các tham số bắt buộc.

```typescript
// Cú pháp:
let f_name = (para1: type, para2?: type, ...) => {
  return;
};

// Ví dụ:
let greet = (name: string, title?: string) => {
  if (title) {
    return `Hello ${title}. ${name}`;
  }
  return `Hello ${name}`;
};

console.log(greet("John"));         // Output: "Hello John"
console.log(greet("John", "Mr"));   // Output: "Hello Mr. John"
```

#### 5.4.3. Spread Operator (`...`)

Sử dụng cú pháp ba dấu chấm `...` để trải các phần tử của mảng hoặc thuộc tính của đối tượng.

- **Công dụng**:
  - Gộp đối tượng (**Merging objects**).
  - Gộp mảng (**Merging arrays**).
  - Sao chép mảng (**Copying arrays**).

##### A. Merging Object with Spread Operator (Gộp Object - Ảnh 4)

```typescript
let person: {
  name: string,
  age: number
} = {
  name: 'Typescript',
  age: 11
};

const salary: {
  grade: string,
  basic: string
} = {
  grade: 'A',
  basic: '$2900'
};

// Gộp 2 đối tượng thành 1 đối tượng mới bằng Spread Operator (...)
const summary = { ...person, ...salary };
console.log(summary);
// Output: { name: 'Typescript', age: 11, grade: 'A', basic: '$2900' }
```

##### B. Merging Array with Spread Operator (Gộp Mảng - Ảnh 4)

```typescript
const hobbies = ['Sports', 'Cooking'];
const activehobbies = ['Hiking'];

// activehobbies.push(hobbies); // ❌ Lỗi: Không thể push cả mảng vào mảng string trừ khi là mảng 2 chiều

activehobbies.push(hobbies[0], hobbies[1]); // Cách làm thủ công

// ✅ Sử dụng Spread Operator (...) để gộp các phần tử mảng dễ dàng
activehobbies.push(...hobbies);
console.log(activehobbies);
// Output: ['Hiking', 'Sports', 'Cooking', 'Sports', 'Cooking']
```

#### 5.4.4. Rest Parameters (Tham số gom - Ảnh 5)

Rest parameters cho phép hàm chấp nhận một số lượng tham số không xác định và gom chúng lại thành một mảng.

- 📌 **3 Quy tắc quan trọng**:
  1. Chỉ có **DUY NHẤT 1 Rest Parameter** trong danh sách tham số của hàm (`There is only 1 rest parameter in the parameter list`).
  2. Rest Parameter **bắt buộc phải là tham số CUỐI CÙNG** trong danh sách (`Must be the last parameter in the parameter list`).
  3. Rest Parameter luôn có kiểu dữ liệu là một **Mảng** (`Has type array`).

##### Ví dụ thực tế từ `app.ts` (Ảnh 5)

```typescript
// Rest parameter ...values: number[] là tham số mảng nhận tất cả các số truyền vào
let addInputValues = function(output: string, ...values: number[]): string {
  let result = 0;
  for (let val of values) {
    result += val;
  }
  return output + ":" + result;
};

let printOutput = (output: string) => console.log(output);

printOutput(addInputValues("Hello! We have"));                  // OK - không truyền tham số số nào (values = [])
printOutput(addInputValues("Hello! We have", 1, 1));            // OK -> "Hello! We have:2"
printOutput(addInputValues("Hello! We have", 1, 2, 3));         // OK -> "Hello! We have:6"
printOutput(addInputValues("Hello! We have", 1, 2, 3, 4, 5, 6));// OK -> "Hello! We have:21"
```

---

### 5.5. Function & Void (Hàm không trả về dữ liệu - Ảnh 5)

- **`void`**: Là kiểu trả về được sử dụng khi hàm thực thi một tác vụ nhưng **không trả về bất kỳ dữ liệu nào** (`void is used when there is no data returned`).

#### Ví dụ thực tế từ `app.ts` (Ảnh 5)

```typescript
// Hàm sum trả về một giá trị kiểu number (dùng ép kiểu <number>y)
let sum = (x: number = 5, y?: number) => {
  return x + <number>y;
};

// Hàm speech có kiểu trả về là void (chỉ log ra console, không return giá trị)
let speech = (output: any): void => {
  console.log("Result:" + output);
};

speech(sum(5, 12));                 // Output trong console: "Result:17"
console.log(speech(sum(8, 5)));      // Output: "Result:13" rồi in ra undefined
```

---

### 5.6. `never` vs `void` (Ảnh 1)

#### So sánh giữa `void` và `never`

- **`void`**: Dùng khi hàm hoàn thành thực thi bình thường nhưng **không trả về giá trị gì** (hoặc trả về `undefined`).
- **`never`**: Dùng khi hàm **không bao giờ hoàn thành việc thực thi bình thường** (ví dụ: luôn quăng ra ngoại lệ/lỗi `throw new Error()`, hoặc chứa vòng lặp vô tận `while (true)`).
- Không có bất kỳ giá trị nào (kể cả `null` hay `undefined`) có thể gán cho một biến kiểu `never`.

#### Ví dụ thực tế từ `app.ts` (Ảnh 1)

```typescript
let something: void = undefined;

// ❌ Lỗi: Type 'null' is not assignable to type 'never'
// let nothing: never = null; 

// Hàm throwError trả về kiểu never vì nó ngắt luồng thực thi bằng lỗi (throw)
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
```

---

### 5.7. Function & Callback (Hàm và Callback - Ảnh 2)

Bạn có thể khai báo kiểu dữ liệu cho hàm Callback làm tham số đầu vào bằng cú pháp `(param: type) => returnType`.

#### Ví dụ thực tế từ `app.ts` (Ảnh 2)

```typescript
// Định nghĩa cb là một hàm callback nhận 1 tham số 'num: number' và có kiểu trả về là 'void'
function AddandHandle(x: number, y: number, cb: (num: number) => void) {
  const result = x + y;
  cb(result); // Gọi hàm callback truyền vào kết quả sum
}

// Gọi hàm AddandHandle truyền vào 1 arrow function làm callback
AddandHandle(10, 20, (result) => {
  console.log(result); // In ra 30
});
```

---

## 6. The TypeScript Compiler (Trình biên dịch TypeScript)

### 6.1. Watch Mode (`tsc --watch` / `tsc -w`)

Chế độ Watch Mode giúp tự động lắng nghe những thay đổi trong file mã nguồn TypeScript và biên dịch lại ngay lập tức mà không cần phải gõ lại lệnh biên dịch thủ công.

```bash
# Biên dịch file app.ts ở chế độ watch
tsc app.ts -w
# hoặc
tsc app.ts --watch
```

---

### 6.2. Compiling Multiple Files (Biên dịch nhiều file)

- **Cách 1: Biên dịch danh sách file chỉ định**
  ```bash
  tsc app.ts analytics.ts
  ```

- **Cách 2: Khởi tạo dự án với file cấu hình `tsconfig.json`**
  ```bash
  # Bước 1: Khởi tạo file tsconfig.json
  tsc --init

  # Bước 2: Biên dịch tất cả các file .ts trong toàn bộ thư mục dự án
  tsc
  ```

---

### 6.3. Incorporating Compiled JS into HTML (Nhúng file JS vào HTML)

Khi dự án biên dịch thành nhiều file JavaScript (`app.js`, `analytics.js`), hãy nhúng các file này vào file HTML sử dụng thuộc tính `defer` để tải và thực thi script sau khi DOM đã được tải xong:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TypeScript Project</title>
  <!-- Nhúng các file JS biên dịch từ TS -->
  <script src="app.js" defer></script>
  <script src="analytics.js" defer></script>
</head>
<body>
  <h1>Hello TypeScript</h1>
</body>
</html>
```

---

### 6.4. Tsconfig.json Configuration (Cấu hình `tsconfig.json`)

File `tsconfig.json` lưu giữ các thiết lập cho trình biên dịch TypeScript.

#### 6.4.1. Include and Exclude (Chỉ định & Loại trừ file - Ảnh 3 & 4)

Quản lý danh sách các file hoặc mẫu đường dẫn (patterns) được phép biên dịch (`include`) hoặc bị loại trừ khỏi quá trình biên dịch (`exclude`).

```json
{
  "include": [
    "src/**/*",
    "tests/**/*"
  ],
  "exclude": [
    "scripts/**/*"
  ]
}
```

##### Minh họa cấu trúc thư mục (Ảnh 4)

```
.
├── scripts/                ❌ (Bị exclude - không biên dịch)
│   ├── lint.ts             ❌
│   ├── update_deps.ts      ❌
│   └── utils.ts            ❌
├── src/                    ✓ (Được include)
│   ├── client/             ✓
│   │   ├── index.ts        ✓
│   │   └── utils.ts        ✓
│   └── server/             ✓
│       └── index.ts        ✓
├── tests/                  ✓ (Được include)
│   ├── app.test.ts         ✓
│   ├── utils.ts            ✓
│   └── tests.d.ts          ✓
├── package.json
├── tsconfig.json
└── yarn.lock
```

#### 6.4.2. Target and Lib (Ảnh 5)

- **`target`**: Quy định phiên bản ECMAScript kết quả của file JavaScript xuất ra (ví dụ: `"es5"`, `"es6"`, `"es2020"`).
- **`lib`**: Khai báo danh sách các thư viện hỗ trợ tích hợp sẵn (built-in type declarations) mà TypeScript sẽ nhận diện (ví dụ: `"dom"`, `"es6"`, `"DOM.Iterable"`, `"scripthost"`).

##### Ví dụ cấu hình `tsconfig.json` (Ảnh 5)

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": [
      "dom",
      "es6",
      "DOM.Iterable",
      "scripthost"
    ]
  }
}
```

#### 6.4.3. More Configuration & Source Map

Các tùy chọn cấu hình nâng cao trong `compilerOptions`:

- **`allowJs`**: Cho phép trình biên dịch TypeScript chấp nhận cả file JavaScript (`.js`) làm đầu vào.
- **`checkJs`**: Hoạt động cùng với `allowJs`. Khi bật `checkJs: true`, các lỗi trong file JavaScript cũng sẽ được báo cáo nếu tìm thấy.
- **`declaration`**: Tự động tạo file khai báo kiểu dữ liệu có phần mở rộng `.d.ts` đi kèm file biên dịch.
- **`sourceMap`**:
  - Khi bật `"sourceMap": true`, trình biên dịch sẽ tạo file `.js.map` song song với file đầu ra `.js`.
  - Giúp liên kết mã JavaScript biên dịch về lại mã nguồn TypeScript gốc, cho phép **gỡ lỗi (debugging)** trực tiếp trên file `.ts` trong Browser DevTools (như Chrome DevTools).
  - File `.js` xuất ra sẽ chứa một dòng ghi chú định vị file source map.

#### 6.4.4. `rootDir` & `outDir`

- **`rootDir`**: Chỉ định đường dẫn thư mục gốc chứa toàn bộ mã nguồn TypeScript đầu vào (`.ts`).
- **`outDir`**: Chỉ định đường dẫn thư mục chứa tất cả các file JavaScript kết quả sau khi biên dịch (`.js`).

##### Ví dụ cấu hình `outDir` và `rootDir`:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```






