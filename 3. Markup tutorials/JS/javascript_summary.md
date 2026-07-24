# Tổng hợp kiến thức JavaScript

---

## 1. JavaScript là gì?

- JavaScript ban đầu được tạo ra để **"làm cho các trang web trở nên sống động"**.
- Các chương trình viết bằng ngôn ngữ này được gọi là **script**. Chúng có thể được viết trực tiếp trong HTML của trang web và **tự động chạy khi trang tải**.
- Script được cung cấp và thực thi dưới dạng **văn bản thuần** (plain text). Chúng không cần chuẩn bị đặc biệt hay biên dịch để chạy.
- Ngày nay, JavaScript có thể chạy **không chỉ trong trình duyệt**, mà còn trên **server**, hoặc trên bất kỳ thiết bị nào có chương trình đặc biệt gọi là **JavaScript engine**.

---

## 2. JavaScript trong trình duyệt có thể làm gì?

Khả năng của JavaScript phụ thuộc rất nhiều vào **môi trường** mà nó đang chạy.

- **Node.js** hỗ trợ các hàm cho phép JavaScript đọc/ghi file, thực hiện các yêu cầu mạng, v.v.
- **Trong trình duyệt**, JavaScript có thể làm mọi thứ liên quan đến thao tác trang web, tương tác với người dùng và web server:

| Khả năng | Mô tả |
|---|---|
| **Thao tác DOM** | Thêm HTML mới vào trang, thay đổi nội dung hiện có, sửa đổi style |
| **Phản ứng sự kiện** | Chạy khi click chuột, di chuyển con trỏ, nhấn phím |
| **Yêu cầu mạng** | Gửi request đến server, tải lên và tải xuống file (AJAX & COMET) |
| **Cookie & thông báo** | Lấy và đặt cookie, hỏi câu hỏi, hiển thị thông báo cho người dùng |
| **Lưu trữ cục bộ** | Ghi nhớ dữ liệu phía client (Local Storage) |

---

## 3. JavaScript trong trình duyệt KHÔNG thể làm gì?

Khả năng của JavaScript trong trình duyệt bị **giới hạn để bảo vệ sự an toàn** của người dùng. Mục đích là ngăn chặn trang web độc hại truy cập thông tin riêng tư hoặc gây hại cho dữ liệu người dùng.

**Các hạn chế bao gồm:**

| Hạn chế | Mô tả |
|---|---|
| **Không truy cập file hệ thống** | Không thể đọc/ghi file tùy ý trên ổ cứng, sao chép hoặc thực thi chương trình. Không có quyền truy cập trực tiếp vào các hàm của hệ điều hành |
| **Cô lập giữa các tab** | Các tab/cửa sổ khác nhau thường không biết về nhau |
| **Hạn chế cross-origin** | JavaScript có thể giao tiếp dễ dàng với server gốc của trang, nhưng khả năng nhận dữ liệu từ các site/domain khác bị hạn chế |

---

## 4. Điều gì làm JavaScript trở nên đặc biệt?

Có ít nhất **ba điều tuyệt vời** về JavaScript:

| Đặc điểm | Mô tả |
|---|---|
| **Tích hợp đầy đủ với HTML/CSS** | Hoạt động liền mạch với các công nghệ web cốt lõi |
| **Đơn giản hóa việc đơn giản** | Những thứ đơn giản được thực hiện một cách đơn giản |
| **Hỗ trợ rộng rãi** | Được hỗ trợ bởi tất cả trình duyệt chính và được bật mặc định |

---

## 5. Biến (Variable) là gì?

- Biến là một **"bộ nhớ có tên"** (named storage) dùng để lưu trữ dữ liệu.
- Chúng ta có thể sử dụng biến để lưu trữ các giá trị, thông tin người dùng và các dữ liệu khác.

---

## 6. Khai báo biến trong JavaScript (`var`, `let`, `const`)

### 6.1. `let`

Sử dụng từ khóa `let` để tạo biến trong JavaScript.

**Ví dụ:**

```javascript
let message;

message = 'Hello'; // lưu chuỗi 'Hello' vào biến có tên message
```

---

### 6.2. `var`

Từ khóa `var` gần giống với `let`, nhưng có một số **khác biệt quan trọng**:

**Cách sử dụng:**

```javascript
var message = 'Hello';
```

**Điểm khác biệt giữa `var` và `let`:**

| Đặc điểm | `var` | `let` |
|---|---|---|
| **Block scope** | ❌ Không có block scope | ✅ Có block scope |
| **Khai báo lại** | ✅ Cho phép khai báo lại (tolerates redeclarations) | ❌ Không cho phép khai báo lại |
| **Hoisting** | ✅ Có thể khai báo sau khi sử dụng (hoisted) | ❌ Không thể sử dụng trước khi khai báo |

---

### 6.3. `const`

Sử dụng từ khóa `const` để khai báo một **biến hằng số** (constant).

- Biến khai báo bằng `const` được gọi là **"constants"** — chúng **không thể bị gán lại giá trị**.
- Các hằng số thường được đặt tên bằng **chữ IN HOA** và **dấu gạch dưới** (`_`).

**Ví dụ:**

```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
```

---

## 7. Quy tắc đặt tên biến (Variable Naming)

**Quy tắc:**

- Tên biến chỉ được chứa **chữ cái**, **chữ số**, hoặc các ký hiệu **`$`** và **`_`**.
- Ký tự đầu tiên **không được là chữ số**.
- Khi tên chứa nhiều từ, sử dụng quy tắc **camelCase**.

**Ví dụ:**

```javascript
let userName;   // camelCase — đúng quy tắc
let test123;    // bắt đầu bằng chữ cái, chứa chữ số — đúng quy tắc
```

**Ví dụ đặt tên KHÔNG hợp lệ:**

```javascript
let 1abc;       // ❌ Bắt đầu bằng chữ số
let my-name;    // ❌ Chứa dấu gạch ngang (không được phép)
```

> 💡 JavaScript phân biệt chữ hoa và chữ thường (case-sensitive). Ví dụ: `apple` và `Apple` là **hai biến khác nhau**.

---

## 8. Kiểu dữ liệu (Data Types)

### Giới thiệu

- Một giá trị trong JavaScript **luôn thuộc một kiểu dữ liệu nhất định**.
- Có **tám kiểu dữ liệu cơ bản** trong JavaScript.
- Chúng ta có thể đặt **bất kỳ kiểu nào** vào một biến. Ví dụ, một biến có thể là chuỗi ở thời điểm này rồi lưu số ở thời điểm khác.
- Các ngôn ngữ lập trình cho phép điều này, như JavaScript, được gọi là **"dynamically typed"** (kiểu động).

```javascript
let message = "hello";  // string
message = 123456;        // number — hoàn toàn hợp lệ!
```

**Tám kiểu dữ liệu cơ bản:**

| # | Kiểu | Mô tả |
|---|---|---|
| 1 | `Number` | Số nguyên và số thực |
| 2 | `BigInt` | Số nguyên có độ dài tùy ý |
| 3 | `String` | Chuỗi ký tự |
| 4 | `Boolean` | Giá trị logic `true` / `false` |
| 5 | `null` | Giá trị "không có gì", "rỗng" |
| 6 | `undefined` | Giá trị "chưa được gán" |
| 7 | `Object` | Tập hợp dữ liệu và thực thể phức tạp |
| 8 | `Symbol` | Định danh duy nhất cho object |

---

### 8.1. Number

Kiểu `Number` đại diện cho cả **số nguyên** (integer) và **số thực** (floating point).

```javascript
let n = 123;       // số nguyên
n = 12.345;        // số thực
```

Ngoài các số thông thường, còn có các **"giá trị số đặc biệt"** thuộc kiểu dữ liệu này:

| Giá trị | Mô tả |
|---|---|
| `Infinity` | Đại diện cho vô cực toán học ∞. Là giá trị đặc biệt lớn hơn bất kỳ số nào |
| `-Infinity` | Vô cực âm |
| `NaN` | Đại diện cho **lỗi tính toán** (computational error). Là kết quả của phép toán không chính xác hoặc không xác định |

```javascript
alert(1 / 0);          // Infinity
alert("abc" / 2);      // NaN — lỗi tính toán
alert(NaN + 1);        // NaN — mọi phép toán với NaN đều trả về NaN
```

---

### 8.2. BigInt

- Với hầu hết mục đích, phạm vi **±(2⁵³−1)** là đủ, nhưng đôi khi chúng ta cần toàn bộ phạm vi **số nguyên rất lớn**, ví dụ cho mật mã học (cryptography) hoặc timestamp chính xác đến microsecond.
- Kiểu `BigInt` được thêm vào gần đây để đại diện cho số nguyên có **độ dài tùy ý**.
- Giá trị `BigInt` được tạo bằng cách **thêm `n` vào cuối** số nguyên.

```javascript
const bigInt = 1234567890123456789012345678901234567890n;

typeof bigInt;   // "bigint"
```

---

### 8.3. String

- Một chuỗi trong JavaScript phải được **bao bọc bởi dấu ngoặc kép** (quotes).
- Có **3 loại quotes** trong JavaScript:

| Loại | Cú pháp | Mô tả |
|---|---|---|
| **Double quotes** | `"Hello"` | Ngoặc kép |
| **Single quotes** | `'Hello'` | Ngoặc đơn |
| **Backticks** | `` `Hello` `` | Backtick — ngoặc kép mở rộng |

- **Backticks** là dấu ngoặc có "chức năng mở rộng". Chúng cho phép **nhúng biến và biểu thức** vào chuỗi bằng cách bọc trong `${...}`.
- Biểu thức bên trong `${...}` được **tính toán** và kết quả trở thành một phần của chuỗi.

```javascript
let name = "John";

// Nhúng biến
alert(`Hello, ${name}!`);    // Hello, John!

// Nhúng biểu thức
alert(`Result: ${1 + 2}`);   // Result: 3
```

> 💡 Double quotes và single quotes là giống nhau trong JavaScript. Backticks cho phép nhúng biểu thức, hai loại còn lại thì không.

---

### 8.4. Boolean (Kiểu logic)

- Kiểu boolean chỉ có **hai giá trị**: `true` và `false`.
- Giá trị boolean cũng là **kết quả của các phép so sánh**.

```javascript
let isGreater = 4 > 1;

alert(isGreater);    // true — vì 4 lớn hơn 1

let nameFieldChecked = true;   // yes, name field is checked
let ageFieldChecked = false;   // no, age field is not checked
```

---

### 8.5. Giá trị `null`

- Giá trị đặc biệt `null` **không thuộc bất kỳ kiểu nào** được mô tả ở trên.
- Trong JavaScript, `null` **không phải** là "tham chiếu đến đối tượng không tồn tại" hay "null pointer" như trong một số ngôn ngữ khác.
- Nó chỉ là một giá trị đặc biệt đại diện cho **"không có gì"**, **"rỗng"** hoặc **"giá trị chưa biết"**.

```javascript
let age = null;   // age chưa biết hoặc rỗng
```

---

### 8.6. Giá trị `undefined`

- Giá trị đặc biệt `undefined` cũng đứng riêng biệt, tạo thành **kiểu riêng** của nó, giống như `null`.
- Ý nghĩa của `undefined` là **"giá trị chưa được gán"**.
- Nếu một biến được khai báo nhưng **không được gán giá trị**, thì giá trị của nó là `undefined`.

```javascript
let age;

alert(age);   // undefined — biến đã khai báo nhưng chưa gán giá trị
```

| Giá trị | Ý nghĩa |
|---|---|
| `null` | **"Rỗng"** hoặc **"giá trị chưa biết"** — được gán có chủ đích |
| `undefined` | **"Chưa được gán"** — giá trị mặc định của biến chưa gán |

---

### 8.7. Objects và Symbols

- Kiểu `Object` là **kiểu đặc biệt**.
- Tất cả các kiểu khác được gọi là **"primitive"** (nguyên thủy) vì giá trị của chúng chỉ chứa **một thứ duy nhất** (chuỗi, số, v.v.). Ngược lại, **object được dùng để lưu trữ tập hợp dữ liệu** và các thực thể phức tạp hơn.
- Kiểu `Symbol` được dùng để tạo **định danh duy nhất** (unique identifiers) cho object.

```javascript
// Object — tập hợp dữ liệu
let user = {
  name: "John",
  age: 30
};

// Symbol — định danh duy nhất
let id = Symbol("id");
```

---

### 8.8. Toán tử `typeof`

- Toán tử `typeof` trả về **kiểu của toán hạng** (operand) dưới dạng chuỗi.
- Rất hữu ích khi muốn xử lý giá trị theo kiểu khác nhau hoặc kiểm tra nhanh.

**Cú pháp:** `typeof x` hoặc `typeof(x)`

```javascript
typeof undefined     // "undefined"
typeof 0             // "number"
typeof 10n           // "bigint"
typeof true          // "boolean"
typeof "foo"         // "string"
typeof Symbol("id")  // "symbol"
typeof Math          // "object"
typeof null          // "object"   ← lỗi của ngôn ngữ, null không phải object
typeof alert         // "function"
```

| Biểu thức | Kết quả | Ghi chú |
|---|---|---|
| `typeof undefined` | `"undefined"` | |
| `typeof 0` | `"number"` | |
| `typeof 10n` | `"bigint"` | |
| `typeof true` | `"boolean"` | |
| `typeof "foo"` | `"string"` | |
| `typeof Symbol("id")` | `"symbol"` | |
| `typeof Math` | `"object"` | `Math` là built-in object |
| `typeof null` | `"object"` | ⚠️ Lỗi chính thức của ngôn ngữ — `null` không phải object |
| `typeof alert` | `"function"` | Hàm thuộc kiểu object, nhưng `typeof` xử lý riêng |

> ⚠️ `typeof null` trả về `"object"` — đây là **lỗi được công nhận** trong JavaScript, được giữ lại vì lý do tương thích ngược (backward compatibility).

---

## 9. Chuyển đổi kiểu (Type Conversions)

### Giới thiệu

- Hầu hết thời gian, các toán tử và hàm **tự động chuyển đổi** giá trị sang kiểu phù hợp.
- Ví dụ: `alert` tự động chuyển bất kỳ giá trị nào thành **chuỗi** để hiển thị. Các phép toán toán học chuyển giá trị thành **số**.
- Cũng có những trường hợp chúng ta cần **chuyển đổi rõ ràng** (explicitly convert) một giá trị sang kiểu mong muốn.

---

### 9.1. Chuyển đổi sang String (String Conversion)

- Chuyển đổi chuỗi xảy ra khi chúng ta cần **dạng chuỗi** của một giá trị.
- Có thể gọi hàm `String(value)` để chuyển đổi một giá trị sang chuỗi.

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // bây giờ value là chuỗi "true"
alert(typeof value); // string
```

| Giá trị gốc | Kết quả sau `String()` |
|---|---|
| `true` | `"true"` |
| `false` | `"false"` |
| `null` | `"null"` |
| `undefined` | `"undefined"` |
| `123` | `"123"` |

---

### 9.2. Chuyển đổi sang Number (Numeric Conversion)

- Chuyển đổi số xảy ra **tự động** trong các hàm và biểu thức toán học.
- Có thể sử dụng hàm `Number(value)` để **chuyển đổi rõ ràng** một giá trị sang số.

```javascript
let str = "123";
let num = Number(str); // chuyển chuỗi "123" thành số 123

alert(typeof num); // number
```

**Quy tắc chuyển đổi sang Number:**

| Giá trị | Kết quả |
|---|---|
| `undefined` | `NaN` |
| `null` | `0` |
| `true` / `false` | `1` / `0` |
| `string` | Khoảng trắng (spaces, tabs `\t`, newlines `\n`, v.v.) ở đầu và cuối được loại bỏ. Nếu chuỗi còn lại rỗng → `0`. Ngược lại, số được "đọc" từ chuỗi. Lỗi sẽ trả về `NaN` |

```javascript
Number("   123   ");  // 123   — khoảng trắng bị loại bỏ
Number("123z");       // NaN   — lỗi đọc số tại ký tự "z"
Number(true);         // 1
Number(false);        // 0
Number(null);         // 0
Number(undefined);    // NaN
Number("");           // 0     — chuỗi rỗng thành 0
```

---

### 9.3. Chuyển đổi sang Boolean (Boolean Conversion)

- Chuyển đổi boolean xảy ra trong các **phép toán logic**, nhưng cũng có thể thực hiện rõ ràng với `Boolean(value)`.
- **Quy tắc chuyển đổi:**
  - Các giá trị **"rỗng"** theo trực giác → `false`
  - Các giá trị **còn lại** → `true`

```javascript
alert( Boolean(1) );     // true
alert( Boolean(0) );     // false
```

| Giá trị | Kết quả | Ghi chú |
|---|---|---|
| `0`, `-0` | `false` | Số không |
| `""` (chuỗi rỗng) | `false` | Chuỗi không có ký tự |
| `null` | `false` | |
| `undefined` | `false` | |
| `NaN` | `false` | |
| **Tất cả giá trị khác** | `true` | Bao gồm `"0"`, `" "`, object, v.v. |

```javascript
alert( Boolean("0") );      // true  — chuỗi không rỗng
alert( Boolean(" ") );      // true  — chuỗi có khoảng trắng (không rỗng)
alert( Boolean("") );       // false — chuỗi rỗng
alert( Boolean(null) );     // false
alert( Boolean(undefined) );// false
```

> ⚠️ **Lưu ý quan trọng:** Chuỗi `"0"` và chuỗi chỉ chứa khoảng trắng `" "` là `true` trong JavaScript. Chỉ chuỗi **hoàn toàn rỗng** `""` mới là `false`.

---

## 10. Vòng lặp (Iterators and Loops)

### 10.1. Vòng lặp `while`

- Khi **điều kiện** (condition) là truthy, code trong thân vòng lặp sẽ được thực thi.
- Mỗi lần thực thi thân vòng lặp được gọi là một **iteration** (lần lặp).

**Cú pháp:**

```javascript
while (condition) {
  // code — thân vòng lặp (loop body)
}
```

**Ví dụ:**

```javascript
let i = 0;
while (i < 3) {
  alert(i);   // lần lượt hiển thị 0, 1, 2
  i++;
}
```

---

### 10.2. Vòng lặp `do..while`

- Kiểm tra điều kiện được **đặt sau** thân vòng lặp.
- Vòng lặp sẽ **thực thi thân trước**, rồi mới kiểm tra điều kiện — nếu đúng thì tiếp tục lặp.
- Nên sử dụng khi bạn muốn thân vòng lặp **chạy ít nhất một lần**, bất kể điều kiện có đúng hay không.

**Cú pháp:**

```javascript
do {
  // thân vòng lặp
} while (condition);
```

**Ví dụ:**

```javascript
let i = 0;
do {
  alert(i);   // lần lượt hiển thị 0, 1, 2
  i++;
} while (i < 3);
```

| So sánh | `while` | `do..while` |
|---|---|---|
| **Kiểm tra điều kiện** | Trước khi thực thi | Sau khi thực thi |
| **Số lần chạy tối thiểu** | 0 lần | 1 lần |

---

### 10.3. Vòng lặp `for`

Vòng lặp `for` phức tạp hơn, nhưng cũng là **vòng lặp được sử dụng phổ biến nhất**.

**Cú pháp:**

```javascript
for (begin; condition; step) {
  // thân vòng lặp
}
```

| Thành phần | Vai trò | Ví dụ |
|---|---|---|
| `begin` | Thực thi **một lần** khi bắt đầu vòng lặp | `let i = 0` |
| `condition` | Kiểm tra **trước mỗi lần lặp** — dừng nếu `false` | `i < 3` |
| `step` | Thực thi **sau mỗi lần lặp** | `i++` |

**Ví dụ:**

```javascript
for (let i = 0; i < 3; i++) {
  alert(i);   // 0, 1, 2
}
```

**Luồng thực thi:**

```
begin → [condition → body → step] → [condition → body → step] → ... → condition = false → DỪNG
```

---

### 10.4. Bỏ qua các phần của `for` (Skipping parts)

Bất kỳ phần nào của `for` cũng có thể được **bỏ qua**.

**Bỏ `begin`** — khi không cần thực hiện gì ở đầu vòng lặp:

```javascript
let i = 0;

for (; i < 3; i++) {
  alert(i);   // 0, 1, 2
}
```

**Bỏ `step`** — tương đương `while`:

```javascript
let i = 0;

for (; i < 3;) {
  alert(i++);
}
```

**Bỏ tất cả** — vòng lặp vô hạn:

```javascript
for (;;) {
  // lặp mãi mãi (cần break để thoát)
}
```

---

### 10.5. Thoát vòng lặp với `break`

- Thông thường, vòng lặp thoát khi điều kiện trở thành **falsy**.
- Nhưng chúng ta có thể **ép thoát** bất cứ lúc nào bằng chỉ thị đặc biệt `break`.

**Ví dụ:**

```javascript
let sum = 0;

while (true) {
  let value = +prompt("Nhập một số:", '');

  if (!value) break;   // thoát vòng lặp nếu không nhập số

  sum += value;
}

alert("Tổng: " + sum);
```

---

### 10.6. Tiếp tục lần lặp tiếp theo với `continue`

- Chỉ thị `continue` là **phiên bản nhẹ hơn** của `break`.
- Nó **không dừng toàn bộ** vòng lặp. Thay vào đó, nó **dừng lần lặp hiện tại** và buộc vòng lặp bắt đầu **lần lặp mới** (nếu điều kiện cho phép).
- Sử dụng khi đã hoàn thành lần lặp hiện tại và muốn **chuyển sang lần tiếp theo**.

**Ví dụ — chỉ hiển thị số lẻ:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;   // bỏ qua số chẵn

  alert(i);   // 1, 3, 5, 7, 9
}
```

| Chỉ thị | Hành vi |
|---|---|
| `break` | **Thoát hoàn toàn** khỏi vòng lặp |
| `continue` | **Bỏ qua** lần lặp hiện tại, chuyển sang lần tiếp theo |

> 💡 `continue` giúp **giảm lồng nhau** (nesting). Thay vì bọc code trong `if`, ta có thể dùng `continue` để bỏ qua và giữ code phẳng hơn.

---

## 11. Câu lệnh điều kiện (Conditionals)

### 11.1. Câu lệnh `if`

- Câu lệnh `if(...)` **đánh giá điều kiện** trong ngoặc và nếu kết quả là `true`, sẽ **thực thi** khối code.

**Cú pháp:**

```javascript
if (condition) {
  // code được thực thi nếu condition là true
}
```

**Ví dụ:**

```javascript
let year = 2025;

if (year == 2025) {
  alert("Bạn đoán đúng!");
}
```

---

### 11.2. Chuyển đổi Boolean trong `if`

- Câu lệnh `if(...)` đánh giá biểu thức trong ngoặc và **chuyển đổi kết quả sang boolean**.
- Quy tắc chuyển đổi:

| Giá trị | Kết quả | Tên gọi |
|---|---|---|
| `0`, `""`, `null`, `undefined`, `NaN` | `false` | **Falsy** values |
| Tất cả giá trị khác | `true` | **Truthy** values |

```javascript
if (0) {
  // không bao giờ chạy — 0 là falsy
}

if (1) {
  // luôn chạy — 1 là truthy
}
```

---

### 11.3. Mệnh đề `else`

- Câu lệnh `if` có thể chứa khối `else` **tùy chọn**. Nó thực thi khi điều kiện là **falsy**.

```javascript
let year = 2024;

if (year == 2025) {
  alert("Đúng rồi!");
} else {
  alert("Sai rồi!");   // ← chạy vì 2024 != 2025
}
```

---

### 11.4. Nhiều điều kiện: `else if`

- Khi cần kiểm tra **nhiều biến thể** của điều kiện, mệnh đề `else if` cho phép thực hiện điều đó.

```javascript
let year = 2024;

if (year < 2024) {
  alert("Quá sớm...");
} else if (year > 2024) {
  alert("Quá muộn...");
} else {
  alert("Chính xác!");   // ← chạy
}
```

**Luồng kiểm tra:**

```
if (điều kiện 1)       → đúng → thực thi khối 1
  else if (điều kiện 2) → đúng → thực thi khối 2
  else if (điều kiện 3) → đúng → thực thi khối 3
  ...
  else                  → thực thi khối mặc định
```

---

### 11.5. Câu lệnh `switch`

#### Giới thiệu

- Câu lệnh `switch` có thể **thay thế nhiều câu lệnh `if`**.
- Cung cấp cách **mô tả rõ ràng hơn** để so sánh một giá trị với nhiều biến thể.

#### Cú pháp

- `switch` có một hoặc nhiều khối `case` và một `default` tùy chọn.
- Nếu **không có `break`**, chương trình sẽ tiếp tục thực thi `case` tiếp theo **mà không kiểm tra**.

```javascript
switch (x) {
  case value1:
    // thực thi nếu x === value1
    break;
  case value2:
    // thực thi nếu x === value2
    break;
  default:
    // thực thi nếu không khớp case nào
}
```

#### Ví dụ

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert('Too small');
    break;
  case 4:
    alert('Exactly!');    // ← chạy vì a = 4
    break;
  case 5:
    alert('Too big');
    break;
  default:
    alert("I don't know such values");
}
```

| Thành phần | Vai trò |
|---|---|
| `case value:` | So sánh `===` (strict equality) giữa `switch(x)` và `value` |
| `break` | Dừng thực thi — nếu bỏ qua, sẽ chạy tiếp `case` kế tiếp |
| `default` | Thực thi khi **không có `case` nào khớp** |

> ⚠️ **Lưu ý:** `switch` sử dụng **so sánh nghiêm ngặt** (`===`). Giá trị phải khớp cả **kiểu dữ liệu** lẫn **giá trị**. Ví dụ: `case "4"` sẽ **không khớp** với `switch(4)` vì `"4" !== 4`.

---

## 12. Hàm cơ bản (Function Basic)

### Giới thiệu

- Hàm là **"khối xây dựng" chính** của chương trình. Chúng cho phép code được gọi **nhiều lần** mà không cần lặp lại.
- Chúng ta đã thấy các hàm tích hợp sẵn như `alert(message)`, `prompt(message, default)` và `confirm(question)`. Nhưng ta cũng có thể **tự tạo hàm**.

---

### 12.1. Khai báo hàm (Function Declaration)

- Sử dụng từ khóa `function` để tạo hàm.
- Cấu trúc: từ khóa `function` → **tên hàm** → **danh sách tham số** trong ngoặc (phân tách bằng dấu phẩy) → **code của hàm** trong ngoặc nhọn.

**Cú pháp:**

```javascript
function name(parameter1, parameter2, ...parameterN) {
  // thân hàm (function body)
}
```

**Ví dụ:**

```javascript
function showMessage() {
  alert('Hello everyone!');
}

showMessage();   // gọi hàm → hiển thị "Hello everyone!"
showMessage();   // có thể gọi nhiều lần
```

---

### 12.2. Biến cục bộ (Local Variables)

- Biến khai báo **bên trong hàm** chỉ **hiển thị bên trong** hàm đó.

```javascript
function showMessage() {
  let message = "Hello, I'm JavaScript!";   // biến cục bộ
  alert(message);
}

showMessage();     // Hello, I'm JavaScript!
alert(message);    // ❌ Error! message không tồn tại ngoài hàm
```

---

### 12.3. Biến bên ngoài (Outer Variables)

- Hàm có thể **truy cập** biến bên ngoài (outer variable).
- Hàm có **toàn quyền** truy cập biến ngoài và có thể **chỉnh sửa** nó.

```javascript
let userName = 'John';

function showMessage() {
  userName = "Bob";        // thay đổi biến ngoài
  let message = 'Hello, ' + userName;
  alert(message);
}

alert(userName);    // "John" — trước khi gọi hàm
showMessage();      // Hello, Bob
alert(userName);    // "Bob" — đã bị hàm thay đổi
```

> 💡 Nếu bên trong hàm khai báo biến **cùng tên** với biến ngoài, biến cục bộ sẽ **che** (shadow) biến ngoài.

---

### 12.4. Trả về giá trị (Returning a Value)

- Hàm có thể **trả về giá trị** cho code gọi nó bằng chỉ thị `return`.
- Khi chương trình gặp `return`, hàm **dừng lại** và giá trị được trả về cho code gọi.
- Hàm với `return` rỗng hoặc **không có `return`** sẽ trả về `undefined`.

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result);   // 3
```

**Ví dụ `return` dừng hàm:**

```javascript
function checkAge(age) {
  if (age >= 18) {
    return true;       // trả về true và DỪNG hàm
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
```

| Trường hợp | Kết quả trả về |
|---|---|
| `return value;` | Trả về `value` |
| `return;` (rỗng) | Trả về `undefined` |
| Không có `return` | Trả về `undefined` |

---

### 12.5. Arrow Functions (Hàm mũi tên)

- Cú pháp **đơn giản và ngắn gọn** hơn để tạo hàm, gọi là **"arrow functions"**.

**Cú pháp cơ bản:**

```javascript
let func = (arg1, arg2, ...argN) => expression;
```

Tương đương với:

```javascript
let func = function(arg1, arg2, ...argN) {
  return expression;
};
```

**Ví dụ:**

```javascript
// Arrow function một dòng
let sum = (a, b) => a + b;

alert(sum(1, 2));   // 3

// Arrow function nhiều dòng — cần dùng ngoặc nhọn và return
let sum = (a, b) => {
  let result = a + b;
  return result;   // nếu dùng {}, cần return rõ ràng
};

alert(sum(1, 2));   // 3
```

**Đặc điểm của Arrow Functions:**

| Đặc điểm | Mô tả |
|---|---|
| **Không có `this`** | Nếu truy cập `this`, nó được lấy từ **bên ngoài** (outer scope) |
| **Không có `arguments`** | Không có biến `arguments` riêng |
| **Không thể `new`** | Không thể dùng làm constructor |
| **Ngắn gọn** | Phù hợp cho các callback và biểu thức ngắn |

---

### 12.6. Quy tắc đặt tên hàm (Naming a Function)

- Hàm là **hành động** (actions), nên tên hàm thường là **động từ**.
- Tên nên **ngắn gọn**, **chính xác nhất có thể** và **mô tả rõ** hàm làm gì.

**Quy ước đặt tên phổ biến:**

| Tiền tố | Ý nghĩa | Ví dụ |
|---|---|---|
| `get...` | **Trả về** một giá trị | `getUser()`, `getName()` |
| `calc...` | **Tính toán** một thứ gì đó | `calcSum()`, `calcAge()` |
| `create...` | **Tạo** một thứ gì đó | `createForm()`, `createElement()` |
| `check...` | **Kiểm tra** và trả về boolean | `checkPermission()`, `checkAge()` |
| `show...` | **Hiển thị** một thứ gì đó | `showMessage()`, `showError()` |
| `is...` | **Kiểm tra** trạng thái (boolean) | `isEmpty()`, `isValid()` |
| `has...` | **Kiểm tra** sự tồn tại (boolean) | `hasAccess()`, `hasKey()` |

> 💡 **Một hàm — một hành động.** Mỗi hàm nên thực hiện **đúng một việc** được gợi ý bởi tên của nó. Hai hành động độc lập nên thuộc về hai hàm khác nhau.

---

## 13. Function Expressions (Biểu thức hàm)

### 13.1. Hàm là một giá trị (Function is a Value)

- Trong JavaScript, hàm là **một giá trị** (value). Chúng ta có thể lưu hàm vào biến, truyền đi hoặc in ra.

```javascript
function sayHi() {
  alert("Hello");
}

let func = sayHi;   // sao chép hàm vào biến (không có dấu ngoặc!)

func();      // Hello — chạy bản sao
sayHi();     // Hello — vẫn chạy được
```

- Chúng ta cũng có thể dùng **Function Expression** để tạo hàm và gán vào biến:

```javascript
let sayHi = function() {
  alert("Hello");
};   // ← lưu ý dấu chấm phẩy ở cuối (vì đây là lệnh gán)
```

- Có thể **in giá trị** của hàm bằng `alert`:

```javascript
function sayHi() {
  alert("Hello");
}

alert(sayHi);   // hiển thị mã nguồn của hàm (không gọi hàm)
```

- Có thể **sao chép** hàm sang biến khác:

```javascript
function sayHi() {
  alert("Hello");
}

let func = sayHi;    // sao chép

func();    // Hello
sayHi();   // Hello
```

---

### 13.2. Callback Functions (Hàm gọi lại)

- **Callback function** là hàm được truyền vào một hàm khác **dưới dạng đối số** (argument), sau đó được gọi bên trong hàm ngoài để hoàn thành một tác vụ nào đó.

```javascript
function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);   // gọi hàm callback
}

processUserInput(greeting);   // truyền hàm greeting làm callback
```

**Luồng thực thi:**

```
processUserInput(greeting)
  → prompt → người dùng nhập "John"
  → callback("John")  →  greeting("John")
  → alert("Hello, John")
```

---

### 13.3. Function Expression vs Function Declaration

| Tiêu chí | Function Declaration | Function Expression |
|---|---|---|
| **Cú pháp** | Khai báo riêng biệt trong luồng code chính | Tạo bên trong biểu thức hoặc cấu trúc cú pháp khác |
| **Thời điểm tạo** | Tạo **trước khi code chạy** (hoisting) | Tạo **khi chương trình thực thi đến** dòng đó |
| **Gọi trước khai báo** | ✅ Có thể | ❌ Không thể |
| **Dấu `;` cuối** | Không cần | Cần (vì là lệnh gán) |

#### Function Declaration

- Khai báo như một **câu lệnh riêng biệt** trong luồng code chính.
- Có thể **gọi trước** khi được định nghĩa (hoisting).

```javascript
sayHi("John");   // ✅ Hoạt động — được gọi trước khi khai báo

function sayHi(name) {
  alert(`Hello, ${name}`);
}
```

#### Function Expression

- Được tạo khi **chương trình thực thi đến** dòng đó — chỉ sử dụng được **từ thời điểm đó trở đi**.

```javascript
sayHi("John");   // ❌ Error! sayHi chưa được định nghĩa

let sayHi = function(name) {
  alert(`Hello, ${name}`);
};
```

> 💡 **Quy tắc chung:** Ưu tiên dùng **Function Declaration** vì dễ đọc hơn và có thể gọi trước khi khai báo. Chỉ dùng **Function Expression** khi Function Declaration không phù hợp (ví dụ: gán có điều kiện).

---

## 14. Object (Đối tượng)

### Giới thiệu

- Như đã biết từ chương Data Types, có **tám kiểu dữ liệu** trong JavaScript. Bảy trong số đó gọi là **"primitive"** vì giá trị chỉ chứa **một thứ duy nhất**.
- Ngược lại, **object** được dùng để lưu trữ **tập hợp dữ liệu có khóa** (keyed collections) và các thực thể phức tạp hơn.
- Object có thể được tạo bằng **ngoặc nhọn** `{...}` với danh sách **thuộc tính** (properties) tùy chọn. Mỗi thuộc tính là một cặp **"key: value"**, trong đó `key` là chuỗi (còn gọi là "property name") và `value` có thể là bất cứ thứ gì.

**Cú pháp tạo object:**

```javascript
// Cú pháp "object constructor"
let user = new Object();

// Cú pháp "object literal" — phổ biến hơn
let user = {};
```

---

### 14.1. Literals và Properties

- Có thể đặt ngay các thuộc tính vào `{...}` dưới dạng cặp **"key: value"**.
- Object có thể hình dung như một **tủ hồ sơ** với các ngăn được gán nhãn.
- Chúng ta có thể **thêm**, **xóa** và **đọc** dữ liệu bất cứ lúc nào.
- Tên thuộc tính **nhiều từ** phải được **đặt trong dấu ngoặc kép**.

```javascript
let user = {
  name: "John",
  age: 30,
  "likes birds": true   // tên thuộc tính nhiều từ phải dùng ngoặc kép
};
```

**Truy cập thuộc tính:**

```javascript
// Dùng dấu chấm (dot notation)
alert(user.name);       // John
alert(user.age);        // 30

// Dùng dấu ngoặc vuông (bracket notation) — bắt buộc cho tên nhiều từ
alert(user["likes birds"]);   // true
```

**Thêm, sửa, xóa thuộc tính:**

```javascript
user.isAdmin = true;         // thêm thuộc tính mới

delete user.age;              // xóa thuộc tính
```

| Thao tác | Cú pháp | Ví dụ |
|---|---|---|
| **Đọc** | `obj.key` hoặc `obj["key"]` | `user.name` |
| **Thêm/Sửa** | `obj.key = value` | `user.isAdmin = true` |
| **Xóa** | `delete obj.key` | `delete user.age` |

---

### 14.2. Property Value Shorthand

- Trong thực tế, chúng ta thường dùng **biến hiện có** làm giá trị cho thuộc tính.

**Cách viết thông thường:**

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

- Khi thuộc tính có **cùng tên** với biến, có thể dùng **shorthand** — viết tắt `name: name` thành `name`:

**Cách viết shorthand:**

```javascript
function makeUser(name, age) {
  return {
    name,   // tương đương name: name
    age,    // tương đương age: age
    // ...
  };
}
```

| Cách viết | Tương đương |
|---|---|
| `name` | `name: name` |
| `age` | `age: age` |

> 💡 Có thể **kết hợp** cả shorthand và cách viết thông thường trong cùng một object.

---

### 14.3. Vòng lặp `for..in`

- Để **duyệt qua tất cả key** của một object, sử dụng vòng lặp đặc biệt `for..in`.
- Đây là cú pháp **hoàn toàn khác** với vòng lặp `for(;;)` đã học trước đó.

**Cú pháp:**

```javascript
for (key in object) {
  // thực thi cho mỗi key trong các thuộc tính của object
}
```

**Ví dụ:**

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert(key);         // name, age, isAdmin

  // values
  alert(user[key]);   // John, 30, true
}
```

| Phần tử | Mô tả |
|---|---|
| `key` | Tên thuộc tính (property name) — thay đổi mỗi lần lặp |
| `user[key]` | Giá trị tương ứng của thuộc tính |

> ⚠️ Trong `for..in`, phải dùng **bracket notation** `obj[key]` để truy cập giá trị, không dùng `obj.key` (vì `key` là biến, không phải tên thuộc tính cố định).

---

## 15. Tham chiếu và sao chép Object (Object References and Copying)

### Giới thiệu

- Biến được gán cho object **không lưu trữ chính object đó**, mà lưu **"địa chỉ trong bộ nhớ"** — hay nói cách khác là một **"tham chiếu"** (reference) đến nó.
- Khi **sao chép** một biến object, **tham chiếu được sao chép**, nhưng bản thân object **không bị nhân đôi**.

```javascript
let user = { name: "John" };

let admin = user;   // sao chép tham chiếu, KHÔNG sao chép object

admin.name = "Pete";
alert(user.name);   // "Pete" — thay đổi từ admin cũng ảnh hưởng user
```

---

### 15.1. So sánh theo tham chiếu (Comparison by Reference)

- Hai object **chỉ bằng nhau** khi chúng là **cùng một object** (cùng tham chiếu).

```javascript
let a = {};
let b = a;   // sao chép tham chiếu

alert(a == b);    // true — cả hai cùng trỏ đến một object
alert(a === b);   // true
```

```javascript
let a = {};
let b = {};   // hai object độc lập

alert(a == b);    // false — khác tham chiếu dù nội dung giống nhau
```

| Trường hợp | Kết quả | Lý do |
|---|---|---|
| `a = {}; b = a;` → `a == b` | `true` | Cùng tham chiếu |
| `a = {}; b = {};` → `a == b` | `false` | Khác tham chiếu |

> 💡 **Const objects vẫn có thể bị chỉnh sửa.** `const` chỉ ngăn **gán lại** biến, không ngăn thay đổi **nội dung** bên trong object.

```javascript
const user = { name: "John" };
user.name = "Pete";    // ✅ OK — thay đổi thuộc tính bên trong
// user = {};          // ❌ Error — không thể gán lại biến const
```

---

### 15.2. Sao chép và hợp nhất (Cloning and Merging)

#### Sao chép thủ công

- Sao chép biến object chỉ tạo thêm **một tham chiếu** đến cùng object.
- Để tạo **bản sao độc lập**, có thể duyệt qua các thuộc tính và sao chép từng cái.

```javascript
let user = { name: "John", age: 30 };

let clone = {};   // object mới rỗng

for (let key in user) {
  clone[key] = user[key];   // sao chép từng thuộc tính
}

clone.name = "Pete";
alert(user.name);    // "John" — user không bị ảnh hưởng
```

#### `Object.assign`

- Phương thức `Object.assign()` sao chép tất cả **thuộc tính enumerable riêng** từ một hoặc nhiều **source objects** vào một **target object**.
- Trả về **target object đã được chỉnh sửa**.

**Cú pháp:**

```javascript
Object.assign(dest, ...sources)
```

| Tham số | Vai trò |
|---|---|
| `dest` | Object **đích** (target) — nhận các thuộc tính |
| `...sources` | Danh sách **object nguồn** (source) — cung cấp thuộc tính |

**Ví dụ:**

```javascript
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// sao chép tất cả thuộc tính từ permissions1 và permissions2 vào user
Object.assign(user, permissions1, permissions2);

// bây giờ user = { name: "John", canView: true, canEdit: true }
alert(user.name);     // John
alert(user.canView);  // true
alert(user.canEdit);  // true
```

**Sao chép nhanh object (clone):**

```javascript
let user = { name: "John", age: 30 };

let clone = Object.assign({}, user);   // clone độc lập
```

> 💡 Nếu thuộc tính đã tồn tại ở `dest`, nó sẽ bị **ghi đè** bởi giá trị từ source.

---

### 15.3. Sao chép sâu (Nested Cloning)

- `Object.assign` chỉ sao chép **cấp đầu tiên** (shallow copy). Nếu thuộc tính là object lồng nhau, tham chiếu vẫn được chia sẻ.
- Phương thức `structuredClone(object)` **sao chép object cùng tất cả thuộc tính lồng nhau** (deep clone).
- `structuredClone` có thể clone hầu hết kiểu dữ liệu: **objects, arrays, primitive values**.
- Nó cũng hỗ trợ **circular references** — khi thuộc tính object tham chiếu đến chính object đó.

```javascript
let user = {};
// tạo circular reference:
// user.me tham chiếu đến chính user
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone);   // true — circular reference được bảo toàn
```

**So sánh các phương pháp sao chép:**

| Phương pháp | Loại | Nested objects | Circular refs |
|---|---|---|---|
| `=` (gán) | Chỉ sao chép **tham chiếu** | ❌ | — |
| `for..in` loop | Shallow copy | ❌ | ❌ |
| `Object.assign()` | Shallow copy | ❌ | ❌ |
| `structuredClone()` | **Deep copy** | ✅ | ✅ |

> ⚠️ `structuredClone` **không thể** clone functions. Nếu object chứa function properties, sẽ gây lỗi.
