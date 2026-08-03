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

---

## 7. Classes & Interfaces (Lớp & Giao diện)

### 7.1. Classes (Lớp)

Một class trong TypeScript có thể bao gồm các thành phần sau:
- **Constructor**: Hàm khởi tạo, được gọi khi tạo instance mới.
- **Properties**: Các thuộc tính lưu trữ dữ liệu của đối tượng.
- **Methods**: Các phương thức định nghĩa hành vi của đối tượng.

```typescript
class Employee {
  // Properties
  empName: string;
  empCode: number;

  // Constructor
  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }

  // Method
  getSalary(): number {
    return 10000;
  }
}
```

---

### 7.2. Keyword `this` & `new`

- **`this`**: Từ khóa `this` trong constructor dùng để truy cập các tham số và thuộc tính của class hiện tại.
- **`new`**: Từ khóa `new` dùng để tạo một instance (đối tượng cụ thể) từ class.

```typescript
class Department {
  name: string;

  constructor(n: string) {
    this.name = n; // 'this' trỏ đến instance hiện tại của class
  }

  describe() {
    console.log('Department: ' + this.name);
  }
}

// Từ khóa 'new' tạo một instance từ class Department
const accounting = new Department('Accounting');
accounting.describe(); // Output: "Department: Accounting"
```

---

### 7.3. Access Modifiers: `private`, `public`, `readonly`

Access Modifiers (Bộ chỉ định truy cập) định nghĩa phạm vi truy cập (visibility) của các thành phần dữ liệu trong class.

| Modifier | Mô tả (Description) |
| :--- | :--- |
| `public` *(mặc định)* | Các thành phần được đánh dấu `public` có thể được truy cập từ **mọi nơi** (bên trong class, bên ngoài class, class con). |
| `private` | Các thành phần được đánh dấu `private` **chỉ có thể truy cập bên trong class** khai báo chúng. |
| `readonly` | Các thành phần được đánh dấu `readonly` có thể được truy cập từ bên ngoài class nhưng **không thể thay đổi giá trị** sau khi khởi tạo. |

```typescript
class Department {
  public name: string;           // Truy cập được từ mọi nơi (mặc định)
  private employees: string[] = []; // Chỉ truy cập được bên trong class
  readonly id: number;           // Truy cập được nhưng không thể thay đổi

  constructor(id: number, n: string) {
    this.id = id;
    this.name = n;
  }

  addEmployee(employee: string) {
    this.employees.push(employee); // ✅ Hợp lệ - truy cập private bên trong class
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department(1, 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Anna');

accounting.name = 'NEW NAME';       // ✅ Hợp lệ - public
// accounting.employees[2] = 'Bob'; // ❌ Lỗi - employees là private
// accounting.id = 5;               // ❌ Lỗi - id là readonly

accounting.printEmployeeInfo();
```

---

### 7.4. Inheritance (Kế thừa)

Một class (subclass / derived class - lớp con) kế thừa từ một class khác (parent class / base class - lớp cha) sử dụng từ khóa `extends`.

- Subclass **kế thừa tất cả thuộc tính và phương thức** từ parent class (ngoại trừ các thành phần được đánh dấu `private` và constructor).

#### Cú pháp cơ bản

```typescript
class ChildClass extends ParentClass {
  // code here
}
```

#### Phân loại Kế thừa (Inheritance Classification)

```
              [ Inheritance ]
                     │
       ┌─────────────┼─────────────┐
       ▼             ▼             ▼
   [ Single ]   [ Multiple ]  [ Multi-level ]
  Mỗi class    Một class kế    Chuỗi kế thừa
  chỉ kế thừa  thừa từ nhiều   nhiều tầng:
  từ 1 parent  class (TS KHÔNG  A → B → C
  class        hỗ trợ)
```

- **Single Inheritance**: Mỗi class chỉ kế thừa từ **một** parent class duy nhất.
- **Multiple Inheritance**: Một class kế thừa từ **nhiều** class (TypeScript **KHÔNG** hỗ trợ multiple inheritance).
- **Multi-level Inheritance**: Kế thừa theo chuỗi nhiều tầng (A → B → C: C kế thừa B, B kế thừa A).

#### `super()` - Gọi Constructor lớp cha

- Sử dụng `super()` để gọi constructor của parent class và truy cập các thuộc tính, phương thức của parent class.
- **Quy tắc quan trọng**: Mỗi child class có constructor **bắt buộc phải gọi `super()`** để thực thi constructor của parent class **trước khi** truy cập body constructor của child class (trước khi dùng `this`).
- Subclass có thể gọi phương thức của parent class thông qua từ khóa `super`.

```typescript
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log('Department: ' + this.name);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(admins: string[]) {
    super('IT');         // Gọi constructor của Department (parent class)
    this.admins = admins; // Sau super() mới được dùng 'this'
  }

  printAdmins() {
    console.log(this.admins);
  }
}

const it = new ITDepartment(['Max', 'Anna']);
it.describe();     // Output: "Department: IT" (kế thừa từ parent)
it.printAdmins();  // Output: ['Max', 'Anna']
```

---

### 7.5. Overriding Methods (Ghi đè phương thức)

Method Overriding là quá trình một phương thức trong parent class được **định nghĩa lại** bởi một phương thức cùng tên và cùng tham số trong child class.

```typescript
class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  describe() {
    console.log('Department: ' + this.name);
  }
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting');
  }

  // Override phương thức addEmployee từ parent class
  addEmployee(name: string) {
    if (name === 'Max') {
      return; // Không cho phép thêm nhân viên tên 'Max'
    }
    this.employees.push(name);
  }

  // Override phương thức describe từ parent class
  describe() {
    console.log('Accounting Department');
  }
}

const acc = new AccountingDepartment();
acc.addEmployee('Max');  // Bị chặn bởi logic override
acc.addEmployee('Anna'); // ✅ Được thêm vào
acc.describe();          // Output: "Accounting Department" (override)
```

---

### 7.6. `protected` (Bộ chỉ định truy cập Protected)

Tổng hợp các Access Modifiers trong TypeScript:

| Modifier | Bên trong Class | Class Con (Subclass) | Bên ngoài Class |
| :--- | :---: | :---: | :---: |
| `public` | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ❌ |
| `private` | ✅ | ❌ | ❌ |

- **`protected`**: Các thành phần được đánh dấu `protected` chỉ có thể truy cập bên trong class khai báo chúng **và** các subclass (class con) kế thừa.
- So với `private`: `private` chỉ truy cập được trong class chứa nó, `protected` cho phép cả class con truy cập.

```typescript
class Department {
  protected employees: string[] = []; // Accessible trong class này VÀ class con

  constructor(public name: string) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  constructor() {
    super('IT');
  }

  printEmployees() {
    // ✅ Hợp lệ - truy cập protected từ class con
    console.log(this.employees);
  }
}

const it = new ITDepartment();
it.addEmployee('Max');
it.printEmployees();        // ✅ Output: ['Max']
// it.employees;            // ❌ Lỗi - không thể truy cập protected từ bên ngoài class
```

---

### 7.7. Static Methods & Properties (Phương thức & Thuộc tính tĩnh)

Khi các thành phần dữ liệu (thuộc tính hoặc phương thức) được đánh dấu là `static`:
- Các thành phần **có thể truy cập trực tiếp thông qua tên class** mà không cần dùng từ khóa `this` bên trong class.
- Có thể truy cập trực tiếp từ **bên ngoài class** mà không cần dùng `new` để tạo instance.

```typescript
class MathHelper {
  static PI: number = 3.14159;        // Static property

  static circleArea(r: number): number { // Static method
    return this.PI * r * r;            // Truy cập static property qua class name
  }
}

// Truy cập KHÔNG cần tạo instance (new)
console.log(MathHelper.PI);              // Output: 3.14159
console.log(MathHelper.circleArea(10));   // Output: 314.159

// ❌ Không cần: const math = new MathHelper();
```

> ⚠️ **Lưu ý**: Bên trong class, **không thể** dùng `this` để truy cập các thành phần `static` từ các phương thức non-static. Phải dùng `ClassName.staticMember` để truy cập.

```typescript
class Department {
  static fiscalYear = 2024;

  describe() {
    // console.log(this.fiscalYear);         // ❌ Lỗi
    console.log(Department.fiscalYear);      // ✅ Đúng cách
  }
}
```

---

### 7.8. Abstract Class (Lớp trừu tượng)

- **Abstract Class**: Là lớp cha (parent class) dành cho tất cả các class cùng bản chất (loại, danh mục, nhiệm vụ).
- Các phương thức trong abstract class **không chứa phần triển khai** (implementation) và **bắt buộc phải được triển khai** trong derived class (class con).
- **Không thể tạo instance** trực tiếp từ abstract class (không thể dùng `new`).

#### Cú pháp

```typescript
abstract class ClassName {
  abstract methodName(param: type): returnType; // Không có body
}
```

#### Ví dụ thực tế

```typescript
abstract class Department {
  constructor(public name: string) {}

  // Abstract method - bắt buộc class con phải triển khai
  abstract describe(): void;

  printName() {
    console.log('Department: ' + this.name);
  }
}

class ITDepartment extends Department {
  constructor() {
    super('IT');
  }

  // ✅ Bắt buộc triển khai phương thức abstract
  describe() {
    console.log('IT Department - ID');
  }
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting');
  }

  // ✅ Bắt buộc triển khai phương thức abstract
  describe() {
    console.log('Accounting Department - ID');
  }
}

// const dept = new Department('General'); // ❌ Lỗi: Không thể tạo instance từ abstract class
const it = new ITDepartment();
it.describe();  // Output: "IT Department - ID"
it.printName(); // Output: "Department: IT"
```

---

### 7.9. Interfaces (Giao diện)

- **Interface** mô tả / định nghĩa **cấu trúc của một đối tượng** (structure of an object).
- Interface **chỉ chứa các khai báo** thuộc tính, phương thức, sự kiện — không chứa phần triển khai.
- **Lưu ý**: Trình biên dịch TypeScript **không** chuyển đổi Interface sang JavaScript (Interface chỉ tồn tại ở compile-time).

#### Cú pháp

```typescript
interface InterfaceName {
  propertyName: type;
  methodName(param: type): returnType;
}
```

#### Ví dụ thực tế

```typescript
interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there, I am'); // Output: "Hi there, I am Max"
```

---

### 7.10. Interfaces as Function Types (Interface mô tả hàm)

Interface có thể được sử dụng để mô tả cấu trúc của một hàm bằng cách cung cấp **function signature** (chữ ký hàm): khai báo hàm chỉ với danh sách tham số và kiểu trả về.

```typescript
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(5, 10)); // Output: 15
```

---

### 7.11. Readonly Properties in Interface (Thuộc tính chỉ đọc)

Các thuộc tính trong interface được đánh dấu `readonly`: thuộc tính **chỉ có thể được gán giá trị khi đối tượng được tạo lần đầu** và không thể thay đổi sau đó.

```typescript
interface Person {
  readonly id: number;
  name: string;
}

let user: Person = {
  id: 1,
  name: 'Max'
};

console.log(user.id);   // ✅ Hợp lệ - đọc giá trị
// user.id = 5;          // ❌ Lỗi: Cannot assign to 'id' because it is a read-only property
user.name = 'Anna';     // ✅ Hợp lệ - name không phải readonly
```

---

### 7.12. Optional Properties in Interface (Thuộc tính tùy chọn)

Không phải tất cả thuộc tính trong interface đều bắt buộc. Sử dụng dấu `?` sau tên thuộc tính để đánh dấu thuộc tính đó là **tùy chọn** (tương tự optional parameter trong hàm).

```typescript
interface Person {
  name: string;
  age: number;
  nickname?: string;  // Thuộc tính tùy chọn - có thể có hoặc không
  phone?: string;     // Thuộc tính tùy chọn
}

// ✅ Hợp lệ - không cần cung cấp nickname và phone
let user1: Person = {
  name: 'Max',
  age: 30
};

// ✅ Hợp lệ - cung cấp thêm thuộc tính tùy chọn
let user2: Person = {
  name: 'Anna',
  age: 25,
  nickname: 'Annie',
  phone: '0123-456-789'
};
```

---

### 7.13. Using Interfaces with Classes (Sử dụng Interface với Class)

#### Cách 1: Class triển khai (implements) Interface

Sử dụng từ khóa `implements` để mô tả một class triển khai một interface. Class **bắt buộc phải cài đặt** tất cả thuộc tính và phương thức đã khai báo trong interface.

```typescript
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user: Greetable;
user = new Person('Max', 30);
user.greet('Hello, I am'); // Output: "Hello, I am Max"
```

> 💡 **Lưu ý**: Một class có thể **implements nhiều interface** cùng lúc (cách nhau bởi dấu phẩy), đây là cách TypeScript hỗ trợ tính đa kế thừa thông qua interface thay vì `extends` nhiều class.

```typescript
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

interface Printable {
  print(): void;
}

class Person implements Greetable, Printable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }

  print() {
    console.log('Printing person: ' + this.name);
  }
}
```

#### Cách 2: Interface kế thừa (extends) Interface

Sử dụng từ khóa `extends` để mô tả một interface kế thừa từ một interface khác. Interface con sẽ **bao gồm toàn bộ khai báo** của interface cha.

```typescript
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// Class triển khai Greetable phải cài đặt cả 'name' (từ Named) và 'greet' (từ Greetable)
class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}
```

> 💡 **Khác biệt với Class**: Interface **có thể `extends` nhiều interface** cùng lúc (tương đương multiple inheritance), trong khi Class chỉ có thể `extends` một parent class duy nhất.

```typescript
interface Named {
  name: string;
}

interface Aged {
  age: number;
}

// Interface kế thừa từ nhiều interface
interface Person extends Named, Aged {
  greet(): void;
}
```

---

## 8. Advanced Types (Kiểu nâng cao)

### 8.1. Intersection Type (Kiểu giao nhau)

- **Intersection Type**: Giao nhau (kết hợp) các kiểu dữ liệu lại với nhau bằng toán tử `&`.
- Kiểu intersection sẽ **bao gồm tất cả thuộc tính** từ các kiểu được giao nhau.

```typescript
// Intersection với Type Alias
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// ElevatedEmployee có TẤT CẢ thuộc tính từ Admin VÀ Employee
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};
```

```typescript
// Intersection với Union Types
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Kết quả: number (giao nhau giữa 2 union)
```

> 💡 **Lưu ý**: Với **object types**, intersection tạo ra kiểu có **tất cả** thuộc tính. Với **union types**, intersection tạo ra kiểu **chung** (phần giao) giữa các union.

---

### 8.2. Type Guard (Bảo vệ kiểu)

**Type Guard** cho phép thu hẹp kiểu dữ liệu của đối tượng bên trong một khối điều kiện (conditional block). TypeScript hỗ trợ 3 kỹ thuật Type Guard chính:

#### 8.2.1. `typeof` — Kiểm tra kiểu nguyên thủy

Sử dụng `typeof` để kiểm tra các kiểu nguyên thủy như `string`, `number`, `boolean`.

```typescript
type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  // Type Guard sử dụng typeof
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString(); // Nối chuỗi
  }
  return a + b; // Phép cộng số
}

console.log(add('Hello', ' World')); // Output: "Hello World"
console.log(add(10, 20));            // Output: 30
```

#### 8.2.2. `instanceof` — Kiểm tra instance của class

Sử dụng `instanceof` để kiểm tra xem một đối tượng có phải là instance của một class cụ thể hay không.

```typescript
class Car {
  drive() {
    console.log('Driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo: ' + amount);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // Type Guard sử dụng instanceof
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000); // Chỉ gọi được khi vehicle là Truck
  }
}

useVehicle(new Car());   // Output: "Driving a car..."
useVehicle(new Truck());  // Output: "Driving a truck..." + "Loading cargo: 1000"
```

#### 8.2.3. `in` — Kiểm tra sự tồn tại của thuộc tính

Sử dụng toán tử `in` để kiểm tra xem một thuộc tính có tồn tại trong đối tượng hay không.

```typescript
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  // Type Guard sử dụng 'in'
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInfo({ name: 'Max', privileges: ['create-server'] });
// Output: "Name: Max" + "Privileges: create-server"

printEmployeeInfo({ name: 'Anna', startDate: new Date() });
// Output: "Name: Anna" + "Start Date: ..."
```

#### Tổng hợp 3 kỹ thuật Type Guard

| Kỹ thuật | Dùng khi | Cú pháp |
| :--- | :--- | :--- |
| `typeof` | Kiểm tra kiểu nguyên thủy (`string`, `number`, `boolean`) | `if (typeof x === 'string')` |
| `instanceof` | Kiểm tra instance của class | `if (x instanceof ClassName)` |
| `in` | Kiểm tra thuộc tính tồn tại trong object | `if ('prop' in obj)` |

---

### 8.3. Discriminated Unions (Union phân biệt)

- **Discriminated Union**: Được sử dụng khi trong class hoặc interface có các thành phần dữ liệu mang giá trị **literal** (cố định).
- Giúp **phân biệt** giữa các thành phần thuộc kiểu union bằng một thuộc tính chung (discriminant property).

```typescript
interface Bird {
  type: 'bird';       // Literal type - discriminant property
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';      // Literal type - discriminant property
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;

  // Discriminated Union - dùng thuộc tính 'type' để phân biệt
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 100 });
// Output: "Moving at speed: 100"

moveAnimal({ type: 'horse', runningSpeed: 60 });
// Output: "Moving at speed: 60"
```

> 💡 **Ưu điểm**: TypeScript sẽ **tự động gợi ý** (IntelliSense) các giá trị hợp lệ cho discriminant property trong `switch/case`, giảm thiểu lỗi typo và logic.

---

### 8.4. Type Casting (Ép kiểu)

- **Type Casting**: Cho phép chuyển đổi một biến từ kiểu dữ liệu này sang kiểu dữ liệu khác.
- Sử dụng từ khóa `as` hoặc toán tử `<>`.

```typescript
// Ví dụ: Truy cập phần tử DOM và ép kiểu

// Cách 1: Sử dụng toán tử <> (Angle-bracket syntax)
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;
userInputElement1.value = 'Hello!';

// Cách 2: Sử dụng từ khóa 'as' (Khuyên dùng trong React / JSX)
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;
userInputElement2.value = 'Hello!';
```

> ⚠️ **Lưu ý**: Dấu `!` (Non-null assertion operator) đặt sau biểu thức để thông báo cho TypeScript rằng giá trị **chắc chắn không phải `null`**. Nếu không chắc chắn, hãy dùng `if` kiểm tra thay vì `!`.

```typescript
// Cách an toàn hơn - kiểm tra null trước khi ép kiểu
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hello!';
}
```

---

## 9. Generics (Kiểu tổng quát)

### 9.1. Problem — Vấn đề đặt ra (Tại sao cần Generics?)

#### Xét hàm sau:

```typescript
function identity(arg: number): number {
  return arg;
}
```

**Vấn đề**:
- **Input**: chỉ nhận kiểu `number`.
- **Return**: chỉ trả về kiểu `number`.
- ❌ **Không thể mở rộng / tái sử dụng** cho các kiểu dữ liệu khác (`string`, `boolean`,...).

#### Thử dùng `any`?

```typescript
function identity(arg: any): any {
  return arg;
}

let result = identity('Hello');
// result có kiểu 'any' → Không thể phán đoán kiểu trả về
// → Không thể thực hiện xử lý tiếp theo an toàn (ví dụ: result.length có thể lỗi runtime)
```

**Vấn đề với `any`**:
- ❌ Mất đi khả năng **phán đoán kiểu trả về** (Type Inference).
- ❌ Không thể thực hiện xử lý tiếp theo một cách an toàn.
- ❌ Mất toàn bộ lợi ích của Static Typing.

---

### 9.2. Problem Solving — Giải pháp: Sử dụng Generics

Tạo một **type variable** (biến kiểu / type parameter / generic parameter) bằng cách đặt biến `T` bên trong dấu `<>`.

- Biến `T` trở thành **placeholder** (chỗ giữ chỗ) cho một kiểu dữ liệu mà ta muốn truyền vào hàm.
- `T` là viết tắt của **Type**. Thực tế có thể đặt tên bất kỳ (ví dụ: `U`, `K`, `V`, `TData`,...).

```typescript
// Hàm Generic - T là type variable
function identity<T>(arg: T): T {
  return arg;
}

// Gọi hàm - TypeScript tự suy luận kiểu
let output1 = identity('Hello');  // T = string → output1: string ✅
let output2 = identity(100);      // T = number → output2: number ✅
let output3 = identity(true);     // T = boolean → output3: boolean ✅

// Hoặc chỉ định kiểu rõ ràng
let output4 = identity<string>('World'); // T = string
```

> ✅ **Ưu điểm so với `any`**: Giữ nguyên thông tin kiểu dữ liệu → IDE hỗ trợ IntelliSense đầy đủ → Phát hiện lỗi ngay lúc compile-time.

---

### 9.3. Generics (Kiểu tổng quát)

- **Generics**: Là công cụ để tạo các **thành phần có thể tái sử dụng** (reusable components). Có thể tạo các thành phần hoạt động trên **nhiều kiểu dữ liệu khác nhau** thay vì chỉ một kiểu dữ liệu duy nhất.
- **Generic Type**: Là khả năng **truyền một kiểu dữ liệu** vào các thành phần (function, class, interface) **dưới dạng tham số** (type parameter).

#### Từ khóa `extends` — Giới hạn phạm vi kiểu

Sử dụng `extends` để **ràng buộc** (constraint) phạm vi kiểu dữ liệu mà type variable có thể nhận.

```typescript
// T bị giới hạn: chỉ chấp nhận kiểu có thuộc tính 'length'
function loggingIdentity<T extends { length: number }>(arg: T): T {
  console.log(arg.length); // ✅ Hợp lệ vì T chắc chắn có 'length'
  return arg;
}

loggingIdentity('Hello');        // ✅ string có length
loggingIdentity([1, 2, 3]);      // ✅ array có length
loggingIdentity({ length: 10 }); // ✅ object có thuộc tính length
// loggingIdentity(100);         // ❌ Lỗi: number không có thuộc tính length
```

#### Default Value — Giá trị mặc định cho type variable

Có thể đặt giá trị mặc định cho type variable bằng cú pháp `<T = DefaultType>`.

```typescript
// T mặc định là string nếu không chỉ định
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

let arr1 = createArray(3, 'hello');  // T = string (suy luận từ 'hello')
let arr2 = createArray<number>(3, 0); // T = number (chỉ định rõ ràng)
let arr3 = createArray(3, 'default'); // T = string (mặc định)
```

---

### 9.4. Generic Function (Hàm Generic)

#### Single Type Variable (Một biến kiểu)

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let str = identity<string>('Hello');  // T = string
let num = identity<number>(42);       // T = number
```

#### Multiple Type Variables (Nhiều biến kiểu)

```typescript
function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}

const merged = merge(
  { name: 'Max' },
  { age: 30 }
);

console.log(merged.name); // ✅ "Max"
console.log(merged.age);  // ✅ 30
```

#### Array Method với Generic

```typescript
// Hàm generic nhận mảng kiểu T
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let first1 = getFirstElement([1, 2, 3]);          // T = number → first1: number
let first2 = getFirstElement(['a', 'b', 'c']);     // T = string → first2: string
let first3 = getFirstElement<boolean>([true, false]); // T = boolean
```

#### `keyof` Constraint (Ràng buộc keyof)

Sử dụng `keyof` để ràng buộc type variable chỉ nhận các **tên thuộc tính** (key) hợp lệ của một đối tượng.

```typescript
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Max' }, 'name')); // ✅ Output: "Value: Max"
// extractAndConvert({ name: 'Max' }, 'age');             // ❌ Lỗi: 'age' không tồn tại trong object
```

> 💡 **Giải thích**: `U extends keyof T` nghĩa là `U` chỉ có thể là một trong các key (tên thuộc tính) của đối tượng `T`. Điều này đảm bảo truy cập thuộc tính luôn an toàn.

---

### 9.5. Generic Interface (Interface tổng quát)

#### Generic Interface mô tả Object

```typescript
interface Pair<T, U> {
  first: T;
  second: U;
}

let pair1: Pair<string, number> = {
  first: 'Hello',
  second: 42
};

let pair2: Pair<boolean, string> = {
  first: true,
  second: 'World'
};
```

#### Generic Interface mô tả Function

```typescript
interface GenericFn<T> {
  (arg: T): T;
}

// Sử dụng interface làm kiểu cho hàm
let myIdentity: GenericFn<number> = function(arg: number): number {
  return arg;
};

console.log(myIdentity(100)); // Output: 100
```

```typescript
// Ví dụ mở rộng: Generic Interface cho hàm phức tạp hơn
interface Transformer<T, U> {
  (input: T): U;
}

let stringToNumber: Transformer<string, number> = function(input: string): number {
  return parseInt(input);
};

console.log(stringToNumber('42')); // Output: 42
```

---

### 9.6. Generic Class (Class tổng quát)

Type parameter được đặt trong `<>` **ngay sau tên class**.

```typescript
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): T[] {
    return [...this.data]; // Trả về bản sao mảng
  }
}

// Sử dụng với kiểu string
const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Anna');
textStorage.removeItem('Max');
console.log(textStorage.getItems()); // Output: ['Anna']

// Sử dụng với kiểu number
const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems()); // Output: [1, 2]
```

#### Generic Class với Constraint

```typescript
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();   // ✅ Hợp lệ
const numStorage = new DataStorage<number>();    // ✅ Hợp lệ
// const objStorage = new DataStorage<object>(); // ❌ Lỗi: object không thuộc constraint
```

---

### 9.7. Generic Class Implements Generic Interface

Generic Class có thể triển khai (implements) một Generic Interface. Khi đó, class phải **cài đặt tất cả thuộc tính và phương thức** được khai báo trong interface.

```typescript
// Generic Interface
interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  add(item: T): void;
}

// Generic Class implements Generic Interface
class GenericRepository<T extends { id: number }> implements Repository<T> {
  private items: T[] = [];

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  add(item: T): void {
    this.items.push(item);
  }
}

// Sử dụng
interface User {
  id: number;
  name: string;
  email: string;
}

const userRepo = new GenericRepository<User>();

userRepo.add({ id: 1, name: 'Max', email: 'max@test.com' });
userRepo.add({ id: 2, name: 'Anna', email: 'anna@test.com' });

console.log(userRepo.getAll());
// Output: [{ id: 1, name: 'Max', ... }, { id: 2, name: 'Anna', ... }]

console.log(userRepo.getById(1));
// Output: { id: 1, name: 'Max', email: 'max@test.com' }
```

```typescript
// Tái sử dụng với kiểu dữ liệu khác
interface Product {
  id: number;
  title: string;
  price: number;
}

const productRepo = new GenericRepository<Product>();

productRepo.add({ id: 1, title: 'Laptop', price: 999 });
productRepo.add({ id: 2, title: 'Phone', price: 699 });

console.log(productRepo.getAll());
// Output: [{ id: 1, title: 'Laptop', ... }, { id: 2, title: 'Phone', ... }]
```

> 💡 **Ưu điểm**: Viết **một lần** `GenericRepository<T>`, tái sử dụng cho **mọi kiểu dữ liệu** (`User`, `Product`, `Order`,...) mà vẫn đảm bảo an toàn kiểu dữ liệu (Type Safety).

---

## 10. Decorators (Bộ trang trí)

### 10.1. What is a Decorator? (Decorator là gì?)

- **Decorator**: Là một cú pháp khai báo đặc biệt (special declaration syntax) đi kèm với khai báo **class, method, accessor, property hoặc parameter**.
- **Nhiệm vụ**: Decorator có nhiệm vụ **thay đổi hoặc bổ sung** cho đối tượng được trang trí (decorated).
- **Cú pháp**: `@expression` — trong đó `expression` trỏ tới một hàm sẽ được gọi tại **thời điểm chạy** (run-time).

```typescript
// Decorator là một hàm
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

// Sử dụng decorator với cú pháp @
@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}
```

---

### 10.2. Types of Decorators (Các loại Decorator)

Decorator có thể được áp dụng lên nhiều thành phần khác nhau trong class:

```
  @Theme                          ◄── Class Decorator
  class Employee {

      @Required                   ◄── Property Decorator
      employeeID: number;

      @Required                   ◄── Property Decorator
      fullName: string;

      @Track                      ◄── Method Decorator
      showDetails(): void {
      }
  }
```

| Loại Decorator | Áp dụng lên | Mô tả |
| :--- | :--- | :--- |
| **Class Decorator** | Khai báo class | Theo dõi, sửa đổi hoặc thay thế định nghĩa class |
| **Property Decorator** | Khai báo thuộc tính | Áp dụng lên thuộc tính của class |
| **Method Decorator** | Khai báo phương thức | Áp dụng lên phương thức của class |
| **Accessor Decorator** | Getter / Setter | Giống method decorator nhưng áp dụng cho getter/setter |
| **Parameter Decorator** | Tham số của method/constructor | Áp dụng lên tham số trong hàm |

---

### 10.3. Decorator Settings (Cấu hình Decorator)

Để sử dụng Decorator trong TypeScript, cần bật tùy chọn trong file `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

> ⚠️ **Lưu ý**: Bỏ comment (uncomment) thuộc tính `"experimentalDecorators": true` trong file `tsconfig.json` để kích hoạt tính năng Decorator.

---

### 10.4. Declare Decorator (Khai báo Decorator)

#### Cách 1: Single Line Declaration (Khai báo một dòng)

```typescript
@Logger
class Person {
  // ...
}
```

#### Cách 2: Multiple Line Declaration (Khai báo nhiều dòng — nhiều Decorator)

Có thể áp dụng **nhiều decorator** lên cùng một thành phần. Các decorator được thực thi **từ dưới lên trên** (bottom-up).

```typescript
@Logger
@Theme
class Person {
  // Thứ tự thực thi: @Theme chạy trước → @Logger chạy sau
}
```

---

### 10.5. Priorities of Decorators (Thứ tự ưu tiên Decorator)

Khi decorator được áp dụng lên constructor của class, thứ tự ưu tiên thực thi như sau:

| Thứ tự | Loại Decorator | Ưu tiên |
| :---: | :--- | :---: |
| 1️⃣ | **Parameter Decorator** | Cao nhất |
| 2️⃣ | **Method Decorator** | |
| 3️⃣ | **Accessor / Property Decorator** | |
| 4️⃣ | **Class Decorator** | Thấp nhất |

> 💡 **Ghi nhớ**: Parameter → Method → Accessor/Property → Class. Decorator áp dụng cho **Instance members** được thực thi trước **Static members**.

```typescript
function ClassDeco(constructor: Function) {
  console.log('4. Class Decorator');
}

function MethodDeco(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('2. Method Decorator');
}

function PropertyDeco(target: any, name: string) {
  console.log('3. Property Decorator');
}

function ParamDeco(target: any, name: string, index: number) {
  console.log('1. Parameter Decorator');
}

@ClassDeco
class Example {
  @PropertyDeco
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  @MethodDeco
  greet(@ParamDeco message: string) {
    console.log(message);
  }
}

// Output thứ tự:
// 3. Property Decorator
// 1. Parameter Decorator
// 2. Method Decorator
// 4. Class Decorator
```

---

### 10.6. Class Decorator (Decorator cho Class)

- Class Decorator được khai báo **ngay trước khai báo class**.
- Class Decorator được áp dụng lên **constructor** của class và có thể dùng để **theo dõi, sửa đổi hoặc thay thế** định nghĩa class.
- Nhận **1 tham số**: constructor function của class.

```typescript
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
// Output:
// "Logging..."
// [class Person]
// "Creating person object..."
```

#### Class Decorator mở rộng class

```typescript
function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}
```

---

### 10.7. Decorator Factory (Nhà máy Decorator)

- **Decorator Factory**: Là một hàm **trả về chính hàm decorator** (function that returns the decorator function).
- Cho phép **truyền tham số** (arguments) vào decorator, giúp tùy chỉnh hành vi linh hoạt hơn.

```typescript
// Decorator Factory - hàm trả về decorator
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// Sử dụng Decorator Factory - truyền tham số
@Logger('LOGGING - PERSON')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// Output:
// "LOGGING - PERSON"
// [class Person]
```

```typescript
// Ví dụ nâng cao: Decorator Factory với nhiều tham số
function Component(config: { selector: string; template: string }) {
  return function(constructor: Function) {
    console.log(`Component registered: ${config.selector}`);
    console.log(`Template: ${config.template}`);
  };
}

@Component({
  selector: 'app-person',
  template: '<h1>Person Component</h1>'
})
class PersonComponent {
  name = 'Max';
}

// Output:
// "Component registered: app-person"
// "Template: <h1>Person Component</h1>"
```

---

### 10.8. Property Decorator (Decorator cho thuộc tính)

- **Property Decorator**: Được áp dụng lên khai báo **thuộc tính** (property) của class.
- Hàm Property Decorator được gọi với **2 tham số**:
  1. **Target**: Constructor của class (cho static member) HOẶC prototype của class (cho instance member).
  2. **Property Name**: Tên thuộc tính được trang trí.

```typescript
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator!');
  console.log('Target:', target);
  console.log('Property Name:', propertyName);
}

class Product {
  @Log
  title: string;

  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// Output (khi class được định nghĩa, KHÔNG cần tạo instance):
// "Property Decorator!"
// "Target:" { getPriceWithTax: [Function] }  (prototype)
// "Property Name:" "title"
```

```typescript
// Ví dụ ứng dụng: Required Property Decorator
function Required(target: any, propertyName: string) {
  // Logic kiểm tra thuộc tính bắt buộc tại đây
  console.log(`Property '${propertyName}' is marked as required`);
}

class Employee {
  @Required
  employeeID!: number;

  @Required
  fullName!: string;
}

// Output:
// "Property 'employeeID' is marked as required"
// "Property 'fullName' is marked as required"
```

---

### 10.9. Method Decorator (Decorator cho phương thức)

- **Method Decorator**: Được áp dụng lên khai báo **phương thức** (method) của class.
- Hàm Method Decorator được gọi với **3 tham số**:
  1. **Target**: Constructor của class (cho static member) HOẶC prototype của class (cho instance member).
  2. **propertyKey**: Tên của phương thức (method name).
  3. **Descriptor**: Property Descriptor của phương thức (`PropertyDescriptor`).

```typescript
function Log(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Method Decorator!');
  console.log('Target:', target);
  console.log('Method Name:', name);
  console.log('Descriptor:', descriptor);
}

class Product {
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

// Output:
// "Method Decorator!"
// "Target:" { getPriceWithTax: [Function] }
// "Method Name:" "getPriceWithTax"
// "Descriptor:" { value: [Function], writable: true, enumerable: false, configurable: true }
```

```typescript
// Ví dụ ứng dụng: Logging Method Decorator
function LogExecutionTime(target: any, name: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${name} with args:`, args);
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
    return result;
  };
}

class Calculator {
  @LogExecutionTime
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(5, 10);
// Output:
// "Calling add with args: [5, 10]"
// "add took 0.01ms"
```

---

### 10.10. Accessor Decorator (Decorator cho Getter/Setter)

- **Accessor Decorator**: Giống như Method Decorator nhưng được áp dụng lên **setter** hoặc **getter**.
- ⚠️ TypeScript **không cho phép** tạo decorator cho cả getter và setter cùng lúc trên cùng một thuộc tính. Chỉ áp dụng decorator cho **cái nào khai báo trước** (thứ tự xuất hiện trong code).
- Nhận **3 tham số** giống Method Decorator: `target`, `name`, `descriptor`.

```typescript
function Log(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator!');
  console.log('Target:', target);
  console.log('Accessor Name:', name);
  console.log('Descriptor:', descriptor);
}

class Product {
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log // Decorator chỉ áp dụng cho setter HOẶC getter
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  get price() {
    return this._price;
  }
}

// Output:
// "Accessor Decorator!"
// "Target:" { price: [Getter/Setter] }
// "Accessor Name:" "price"
// "Descriptor:" { get: [Function], set: [Function], enumerable: false, configurable: true }
```

---

### 10.11. Parameter Decorator (Decorator cho tham số)

- **Parameter Decorator**: Được áp dụng lên khai báo **tham số của method** hoặc **tham số của constructor**.
- Hàm Parameter Decorator được gọi với **3 tham số**:
  1. **Target**: Constructor của class (cho static member) HOẶC prototype của class (cho instance member).
  2. **Name**: Tên của phương thức chứa tham số được trang trí.
  3. **Index**: Thứ tự (index) của tham số trong danh sách tham số của hàm cha (bắt đầu từ 0).
- Parameter Decorator **chỉ dùng để kiểm tra sự tồn tại** của tham số trong hàm, và thường được **kết hợp** với Method Decorator hoặc Accessor Decorator.

```typescript
function Log(target: any, name: string, position: number) {
  console.log('Parameter Decorator!');
  console.log('Target:', target);
  console.log('Method Name:', name);
  console.log('Parameter Index:', position);
}

class Product {
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(@Log tax: number) {
    return this._price * (1 + tax);
  }
}

// Output:
// "Parameter Decorator!"
// "Target:" { getPriceWithTax: [Function] }
// "Method Name:" "getPriceWithTax"
// "Parameter Index:" 0
```

```typescript
// Ví dụ: Kết hợp Parameter Decorator và Method Decorator
function Required(target: any, name: string, index: number) {
  console.log(`Parameter at index ${index} in '${name}' is required`);
}

function Validate(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(`Method '${name}' has validation applied`);
}

class UserService {
  @Validate
  createUser(@Required name: string, @Required email: string) {
    console.log(`Creating user: ${name}, ${email}`);
  }
}

// Output:
// "Parameter at index 1 in 'createUser' is required"  (email — index 1)
// "Parameter at index 0 in 'createUser' is required"  (name — index 0)
// "Method 'createUser' has validation applied"
```

---

### 10.12. Return Value in Decorator (Giá trị trả về trong Decorator)

Decorator có thể **trả về giá trị** để thay thế hoặc mở rộng đối tượng được trang trí:

- **Class Decorator**: Có thể trả về một **class mới** để thay thế class gốc.
- **Method / Accessor Decorator**: Có thể trả về một **PropertyDescriptor mới** để thay đổi hành vi phương thức.
- **Property / Parameter Decorator**: Giá trị trả về **bị bỏ qua** (ignored).

```typescript
// Class Decorator trả về class mới (mở rộng class gốc)
function WithTimestamp<T extends { new (...args: any[]): {} }>(originalConstructor: T) {
  return class extends originalConstructor {
    createdAt = new Date();

    constructor(...args: any[]) {
      super(...args);
      console.log('Timestamp added!');
    }
  };
}

@WithTimestamp
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person('Max');
console.log((p as any).createdAt); // Output: Date object (thời điểm tạo)
```

```typescript
// Method Decorator trả về PropertyDescriptor mới
function Readonly(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  return {
    ...descriptor,
    writable: false // Không cho phép ghi đè phương thức
  };
}

class Report {
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  @Readonly
  printReport() {
    console.log('Report: ' + this.title);
  }
}

const report = new Report('Annual');
// report.printReport = () => {}; // ❌ Lỗi runtime: Cannot assign to read only property
```

---

### 10.13. Autobind Decorator

**Autobind Decorator**: Tự động bind `this` vào instance của class khi phương thức được truyền như callback, đảm bảo `this` luôn trỏ đúng đối tượng.

#### Vấn đề khi không có Autobind

```typescript
class Printer {
  message = 'This works!';

  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage);
// ❌ Output khi click: undefined (vì 'this' trỏ tới button, không phải printer)
```

#### Giải pháp: Autobind Decorator

```typescript
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = descriptor.value;

  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // 'this' ở đây trỏ tới object sở hữu method (instance), không phải event target
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };

  return adjustedDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage);
// ✅ Output khi click: "This works!" (this luôn trỏ đúng đến printer)
```

> 💡 **Giải thích**: Autobind Decorator thay thế `value` trong PropertyDescriptor bằng một **getter**. Mỗi khi truy cập method, getter sẽ tự động `.bind(this)` để đảm bảo `this` luôn trỏ đúng instance, bất kể method được gọi ở đâu (event listener, setTimeout, callback,...).

#### Tổng hợp các loại Decorator

```
                           [ DECORATORS ]
                                 │
     ┌───────────┬───────────┬───┴────┬──────────────┬──────────────┐
     ▼           ▼           ▼        ▼              ▼              ▼
  [ Class ]  [ Property ] [ Method ] [ Accessor ] [ Parameter ] [ Factory ]
  1 tham số   2 tham số   3 tham số  3 tham số    3 tham số     Trả về
 constructor  target,     target,    target,      target,       decorator
              name        name,      name,        name,         function
                          descriptor descriptor   index
```

---

## 11. Modules & Namespaces

### 11.1. Modules trong TypeScript

- **Khái niệm (Concept)**: 
  - Trong TypeScript (và JavaScript hiện đại), mỗi file được coi là một **Module** độc lập nếu có chứa ít nhất một câu lệnh `export` hoặc `import`.
  - Module giúp chia nhỏ ứng dụng thành các file dễ quản lý, tránh ô nhiễm phạm vi toàn cục (Global Scope).
  - Code trong module có phạm vi riêng (File-based Scope), các biến/hàm/class bên trong chỉ có thể truy cập ở bên ngoài nếu được khai báo bằng từ khóa `export`.

#### 11.1.1. Khai báo Module (Module Declaration)

Để chia sẻ các phần tử (class, interface, function, variable) từ một file module, ta sử dụng từ khóa `export`.

```typescript
// FileName: addition.ts
export class Addition {
  constructor(private x?: number, private y?: number) {}

  Sum() {
    console.log("SUM: " + ((this.x ?? 0) + (this.y ?? 0)));
  }
}
```

#### 11.1.2. Truy cập Module (Module Access)

Để sử dụng các phần tử từ module khác, ta dùng câu lệnh `import` kèm theo đường dẫn file tương đối.

```typescript
// FileName: app.ts
import { Addition } from './addition';

let addObject = new Addition(10, 20);
addObject.Sum(); // Output: SUM: 30
```

---

### 11.2. Re-export (Tái xuất bản Module)

- **Re-exporting** là kỹ thuật xuất bản lại các phần tử (types, functions, classes) đã được export từ một module khác mà không cần phải giữ lại trong scope cục bộ của file hiện tại.
- Thường được áp dụng trong mô hình **Barrel Pattern** (file `index.ts` trung gian) để gộp nhiều modules nhỏ và gom export lại một nơi duy nhất.

```typescript
// Re-export một thành phần cụ thể
export { Addition } from './addition';

// Re-export toàn bộ thành phần từ file khác
export * from './subtraction';
export * from './multiplication';
```

> 💡 **Lợi ích**: Giúp các file bên ngoài chỉ cần `import { Addition, Subtraction } from './math'` thay vì phải import từ từng file lẻ tẻ.

---

### 11.3. Namespaces (Không gian tên)

- **Khái niệm**: 
  - **Namespace** là một tính năng đặc thù của TypeScript (TypeScript-specific) được dùng để nhóm các hàm, interface, class và biến liên quan về mặt logic vào một tên gọi chung.
  - Mục đích chính là ngăn ngừa xung đột tên (Name Collisions) trong Global Scope.
  - Namespace có thể lồng nhau (Nested Namespaces).

#### Khai báo Namespace (Declare Namespace)

Để các thành phần trong Namespace có thể sử dụng được từ bên ngoài, ta **bắt buộc phải sử dụng từ khóa `export`** trước khai báo thành phần đó.

```typescript
// FileName: StoreCalc.ts
namespace invoiceCalc {
  export namespace invoiceAccount {
    export class Invoice {
      public calculateDiscount(price: number) {
        return price * 0.01;
      }
    }
  }
}
```

---

### 11.4. Sử dụng Namespaces (Using Namespaces & Triple-Slash Reference)

- Để tham chiếu và sử dụng một Namespace được định nghĩa ở file `.ts` khác (mà không dùng hệ thống module ES6), TypeScript cung cấp cú pháp **Triple-Slash Directive**: `/// <reference path="..." />`.

#### Cú pháp (Syntax)
```typescript
/// <reference path="path-to-file.ts" />
```

#### Ví dụ tham chiếu (Retrieve Namespace Example)

```typescript
// FileName: app.ts
/// <reference path="./StoreCalc.ts" />

let invoice = new invoiceCalc.invoiceAccount.Invoice();
console.log("Output: " + invoice.calculateDiscount(400)); 
// Output: Output: 4
```

---

### 11.5. Biên dịch và Thực thi Namespace (Compile & Execute Namespace)

- Mặc định trình duyệt không hiểu cú pháp `/// <reference path="..." />`. Vì vậy, khi thực thi ứng dụng gồm nhiều file chứa Namespace, ta cần biên dịch và gom tất cả các file mã nguồn `.ts` thành một file JavaScript duy nhất (`.js`).

#### Cú pháp biên dịch gộp file với `--outFile`
```bash
tsc --outFile dist/bundle.js StoreCalc.ts app.ts
```

#### Hoặc cấu hình trong `tsconfig.json`:
```json
{
  "compilerOptions": {
    "module": "amd", // Hoặc "system" khi sử dụng --outFile
    "outFile": "./dist/bundle.js"
  }
}
```

> ⚠️ **Lưu ý**: Tùy chọn `--outFile` chỉ hoạt động khi thuộc tính `"module"` trong `tsconfig.json` được thiết lập là `amd`, `system` hoặc khi không dùng ES Modules (`"module": "none"`).

---

### 11.6. So sánh chi tiết Namespace vs Modules

| Tiêu chí | Module | Namespace |
| :--- | :--- | :--- |
| **Bản chất** | Chuẩn JavaScript ES6+ (ES Standard) | Tính năng tổ chức code riêng của TypeScript (TS-specific) |
| **Tổ chức Code** | Chứa cả code và khai báo độc lập trong từng file | Nhóm các phần tử liên quan dưới một tên chung (Global/Nested) |
| **Cách khai báo** | Dùng `export` để tạo hiển thị các module functions | Dùng từ khóa `namespace` và `export` các phần tử bên trong |
| **Cách nạp / sử dụng** | Phải được `import` trước khi sử dụng ở nơi khác | Dùng cú pháp `/// <reference path="..." />` để tham chiếu |
| **Lệnh biên dịch `tsc`** | Sử dụng cờ `--module` (CommonJS, ESNext, UMD,...) | Sử dụng cờ `--outFile` để gộp tất cả thành 1 file JavaScript |
| **Truy cập phần tử** | Export tất cả thành 1 module và có thể truy cập bên ngoài | Phải export các hàm, class cụ thể thì bên ngoài namespace mới dùng được |
| **Mục đích & Khuyên dùng** | **Ưu tiên sử dụng** trong các dự án hiện đại cùng Module Bundler (Webpack/Vite) | Chủ yếu dùng cho legacy code, viết file khai báo `.d.ts` hoặc dự án nhỏ không dùng bundler |

---

## 12. Webpack & Module Bundling

### 12.1. Webpack là gì? (What is Webpack?)

- **Webpack** là một công cụ đóng gói mã nguồn (**Module Bundler**) cho ứng dụng JavaScript/TypeScript.
- Webpack phân tích cấu trúc dự án, xây dựng sơ đồ phụ thuộc (Dependency Graph) từ các file đầu vào, sau đó biên dịch và đóng gói tất cả tài nguyên (`.ts`, `.js`, `.css`, hình ảnh,...) thành một hoặc vài file Javascript tĩnh (bundle files) đã được tối ưu hóa cho trình duyệt.

```
┌─────────────────────────────────────────┐               ┌──────────────┐
│  [ app.ts ] ──► [ addition.ts ]         │               │              │
│     │                                   │ ──Webpack───► │  bundle.js   │
│     └──► [ styles.css ]                 │               │              │
└─────────────────────────────────────────┘               └──────────────┘
          Cấu trúc tập tin dự án                            File nén đầu ra
```

### 12.2. Hướng dẫn Cài đặt Webpack với TypeScript

Để thiết lập Webpack cho dự án TypeScript, thực hiện các bước sau:

#### ❑ Bước 1: Cài đặt Webpack và Webpack CLI
Cài đặt `webpack` và `webpack-cli` dưới dạng devDependencies:
```bash
npm install --save-dev webpack webpack-cli
```

#### ❑ Bước 2: Cài đặt `ts-loader`
`ts-loader` là bộ nạp (loader) giúp Webpack hiểu và biên dịch trực tiếp các file TypeScript `.ts`:
```bash
npm install --save-dev ts-loader typescript
```

#### ❑ Bước 3: Chỉnh sửa `tsconfig.json`
Cập nhật file cấu hình TypeScript để phù hợp với Webpack:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES2015",
    "moduleResolution": "node",
    "sourceMap": true,
    "noEmitOnError": true
  }
}
```

#### ❑ Bước 4: Tạo file `webpack.config.js`
Tạo file `webpack.config.js` ở thư mục gốc của project để cấu hình quy trình đóng gói.

---

### 12.3. Cấu hình chi tiết `webpack.config.js`

```javascript
const path = require('path');

module.exports = {
  // 1. Chế độ đóng gói: 'development', 'production', hoặc 'none'
  mode: 'development',

  // 2. File đầu vào của ứng dụng (Entry point)
  entry: './src/app.ts',

  // 3. File đầu ra sau khi đóng gói (Output configuration)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  // 4. Cấu hình xử lý loại file bằng Loaders
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  // 5. Cấu hình giải quyết tự động phần mở rộng file (Resolve extensions)
  resolve: {
    extensions: ['.ts', '.js']
  },

  // 6. Tạo source map để dễ dàng debug trên trình duyệt
  devtool: 'inline-source-map'
};
```

#### Giải thích các thuộc tính trong `webpack.config.js`:

1. **`entry` (Input Configuration)**:
   - Xác định file đầu vào để Webpack bắt đầu phân tích cây phụ thuộc (Dependency Graph).
   - Nhận 3 dạng giá trị:
     - **String**: `'./src/app.ts'` (Dành cho single-page app đơn giản).
     - **Array**: `['./src/a.ts', './src/b.ts']` (Gộp nhiều file đầu vào).
     - **Object**: `{ app: './src/app.ts', vendor: './src/vendor.ts' }` (Dành cho multi-page hoặc tách code).

2. **`mode`**:
   - `'development'`: Tối ưu tốc độ build, không nén code, giữ lại tên biến dễ đọc để hỗ trợ debugging.
   - `'production'`: Tối ưu hóa dung lượng (Minification, Tree-shaking, Dead Code Elimination) để đạt hiệu năng tốt nhất trên môi trường thực tế.
   - `'none'`: Tắt mọi tối ưu mặc định.

3. **`output` (Output Configuration)**:
   - Cấu hình vị trí và tên file kết quả thu được sau khi đóng gói.
   - **Phân biệt `path` và `publicPath`**:
     - `path`: Đường dẫn **vật lý tuyệt đối** trên ổ đĩa nơi chứa file `bundle.js` sau khi build (ví dụ `path.resolve(__dirname, 'dist')`).
     - `publicPath`: Đường dẫn **tương đối URL** mà Web Server và trình duyệt dùng để truy cập/tải các tài nguyên tĩnh trong quá trình ứng dụng chạy (runtime).

4. **`resolve`**:
   - Cấu hình giúp Webpack nhận diện file khi dùng câu lệnh `import`.
   - Thuộc tính `extensions: ['.ts', '.js']` quy định: nếu trong câu lệnh `import` không khai báo phần mở rộng file (ví dụ `import { Addition } from './addition'`), Webpack sẽ tự động tìm kiếm các file có đuôi `.ts` trước, sau đó đến `.js`.

---

## 13. Sử dụng Thư viện 3rd-Party, Class-Transformer & Class-Validator

### 13.1. Thư viện JavaScript & TypeScript (Lodash Library)

- **Lodash là gì?**: Lodash là một thư viện JavaScript mạnh mẽ và phổ biến chuyên dùng để thao tác và xử lý với mảng (`Array`), đối tượng (`Object`), hàm (`Function`), bộ sưu tập (`Collection`),...
- **Ưu điểm của Lodash**:
  - **Improved performance**: Tối ưu hóa hiệu năng xử lý dữ liệu.
  - **Simple code & Easy to read**: Cung cấp các hàm tiện ích giúp viết code ngắn gọn, rõ ràng và dễ bảo trì.
  - **Rộng rãi**: Tích hợp mượt mà với hầu hết các công nghệ JavaScript hiện nay như Node.js, ReactJS, VueJS, Angular,...

#### Cài đặt Lodash trong TypeScript

Trang chủ: [https://lodash.com](https://lodash.com)

1. **Cài đặt thư viện Lodash**:
   ```bash
   npm install lodash
   ```
2. **Cài đặt Type Definitions cho TypeScript**:
   ```bash
   npm install --save-dev @types/lodash
   ```
   > 💡 **Lưu ý về `@types/`**: Rất nhiều thư viện JavaScript thuần (như Lodash) không được viết bằng TypeScript nên không chứa sẵn các file khai báo kiểu `.d.ts`. Để TypeScript không báo lỗi thiếu kiểu dữ liệu, ta cần cài thêm gói `@types/<library_name>` từ dự án DefinitelyTyped.

---

### 13.2. Khai báo Biến toàn cục JavaScript (Global Variables với `declare`)

- Trong thực tế phát triển web, một số biến toàn cục (Global Variables) được tạo ra bên ngoài các file mã nguồn TypeScript (ví dụ được nhúng trực tiếp qua thẻ `<script>` trong file `index.html` hoặc từ các thư viện 3rd-party khác).
- Nếu truy cập trực tiếp các biến này trong TypeScript, trình biên dịch `tsc` sẽ báo lỗi `Cannot find name 'GLOBAL'`.
- **Giải pháp: Sử dụng từ khóa `declare`**: Cú pháp `declare` thông báo cho TypeScript compiler biết sự tồn tại của biến/hàm toàn cục ở môi trường runtime mà không yêu cầu TypeScript khởi tạo hay biên dịch lại biến đó.

#### Ví dụ minh họa

**File `index.html`**:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Typescript and Webpack</title>
  </head>
  <body>
    <script src="dist/index.bundle.js" defer></script>
    <script src="dist/app.bundle.js" defer></script>
    <script>
      // Biến toàn cục GLOBAL được định nghĩa trực tiếp trên môi trường trình duyệt
      var GLOBAL = 'LODASH';
    </script>
  </body>
</html>
```

**File `app.ts`**:
```typescript
import _ from 'lodash';

// Sử dụng thư viện Lodash (ví dụ hàm shuffle đảo ngẫu nhiên mảng)
console.log(_.shuffle([1, 2, 3]));

// Khai báo cho TypeScript nhận diện biến toàn cục GLOBAL
declare var GLOBAL: any;

console.log(GLOBAL);         // Output: "LODASH"
GLOBAL = 'THIS IS SET';
console.log(GLOBAL);         // Output: "THIS IS SET"
```

---

### 13.3. Class-transformer (Chuyển đổi Object thành Class Instance)

- **Khái niệm**: 
  - Khi nhận dữ liệu từ backend hoặc API (thường dưới dạng JSON / Plain JavaScript Objects), các object này **không chứa các phương thức (methods)** của Class.
  - Thư viện `class-transformer` giúp chuyển đổi dữ liệu dạng plain object (đối tượng thuần) thành một **instance thực sự của Class** (và ngược lại) để có thể gọi và sử dụng các method được định nghĩa trong Class đó.
- **Yêu cầu cài đặt**:
  ```bash
  npm install class-transformer reflect-metadata
  ```
  *(Cần `import 'reflect-metadata';` ở đầu file ứng dụng)*

#### Ví dụ minh họa

**File `product.model.ts`**:
```typescript
export class Product {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}
```

**File `app.ts` (Sử dụng `class-transformer`)**:
```typescript
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { Product } from './product.model';

// Dữ liệu plain objects giả lập nhận về từ API (chưa có method getInformation)
const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 }
];

// Chuyển đổi mảng plain objects thành mảng các instance của class Product
const loadedProducts = plainToClass(Product, products);

// Giờ đây mỗi phần tử trong loadedProducts đã là instance của Product và có thể gọi getInformation()
for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
// Output:
// [ 'A Carpet', '$29.99' ]
// [ 'A Book', '$10.99' ]
```

> 💡 **Ghi chú**: Trong các phiên bản `class-transformer` mới hơn, hàm `plainToClass()` được đổi tên thành `plainToInstance()`. Cú pháp và chức năng hoàn toàn tương tự.

---

### 13.4. Class-validator (Xác thực dữ liệu dựa trên Class Decorators)

- **Khái niệm**: 
  - `class-validator` cho phép sử dụng các **Decorators** kiểm tra thuộc tính (như `@IsNotEmpty()`, `@IsNumber()`, `@IsPositive()`, `@IsEmail()`,...) trực tiếp trên các property của Class.
  - Cho phép thực hiện xác thực (validation) đối tượng dựa trên các quy tắc decorator đã khai báo.
- **Yêu cầu cài đặt**:
  ```bash
  npm install class-validator class-transformer reflect-metadata
  ```

#### Ví dụ minh họa

**File `product.model.ts`**:
```typescript
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class Product {
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}
```

**File `app.ts` (Sử dụng `class-validator`)**:
```typescript
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 }
];

// Khởi tạo một đối tượng Product vi phạm điều kiện (title rỗng, price âm)
const newProd = new Product('', -5.99);

// Tiến hành xác thực đối tượng newProd bằng hàm validate()
validate(newProd).then(errors => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(errors); // In danh sách chi tiết các lỗi vi phạm validation
  } else {
    console.log(newProd.getInformation());
  }
});
```

