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

---

## 16. Mảng (Array)

### Giới thiệu

- **Object** cho phép lưu trữ các tập hợp dữ liệu **có khóa** (keyed collections). Điều đó ổn.
- Nhưng rất thường xuyên, chúng ta cần một **tập hợp có thứ tự** (ordered collection), nơi chúng ta có phần tử thứ 1, thứ 2, thứ 3, v.v. Ví dụ: lưu danh sách người dùng, hàng hóa, phần tử HTML, v.v.
- **Không tiện** sử dụng object ở đây, vì nó **không cung cấp phương thức** để quản lý thứ tự các phần tử. Chúng ta không thể chèn một thuộc tính mới "giữa" các thuộc tính hiện có. Object đơn giản **không được thiết kế** cho mục đích đó.
- Tồn tại một cấu trúc dữ liệu đặc biệt tên là **Array** (mảng), dùng để lưu trữ **các tập hợp có thứ tự**.

---

### 16.1. Khai báo mảng (Declaration)

Có **hai cú pháp** để tạo mảng rỗng:

```javascript
// Cú pháp 1: Array constructor
let arr = new Array();

// Cú pháp 2: Array literal — phổ biến hơn
let arr = [];
```

> 💡 Hầu như mọi lúc, cú pháp thứ hai (`[]`) được sử dụng.

Có thể cung cấp **các phần tử ban đầu** trong dấu ngoặc vuông:

```javascript
let fruits = ["Apple", "Orange", "Plum"];
```

Các phần tử của mảng được **đánh số từ 0** (zero-indexed):

```javascript
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]);   // Apple
alert(fruits[1]);   // Orange
alert(fruits[2]);   // Plum
```

**Thao tác cơ bản với mảng:**

```javascript
let fruits = ["Apple", "Orange", "Plum"];

// Thay thế phần tử
fruits[2] = "Pear";           // ["Apple", "Orange", "Pear"]

// Thêm phần tử mới
fruits[3] = "Lemon";          // ["Apple", "Orange", "Pear", "Lemon"]

// Đếm số phần tử
alert(fruits.length);         // 4
```

| Thao tác | Cú pháp | Ví dụ |
|---|---|---|
| **Đọc** | `arr[index]` | `fruits[0]` → `"Apple"` |
| **Ghi/Sửa** | `arr[index] = value` | `fruits[2] = "Pear"` |
| **Độ dài** | `arr.length` | `fruits.length` → `4` |

---

### 16.2. Các phương thức pop/push, shift/unshift

- Mảng trong JavaScript có thể hoạt động **vừa như hàng đợi (queue) vừa như ngăn xếp (stack)**. Chúng cho phép thêm/xóa phần tử ở **cả đầu và cuối** mảng.
- Trong khoa học máy tính, cấu trúc dữ liệu cho phép điều này gọi là **deque** (double-ended queue).

#### 16.2.1. `pop` — Xóa phần tử cuối

- **Lấy ra** phần tử cuối cùng của mảng và **trả về** phần tử đó.
- Mảng bị **thay đổi** (phần tử bị xóa).

```javascript
let fruits = ["Apple", "Orange", "Pear"];

alert(fruits.pop());   // "Pear" — lấy ra phần tử cuối

alert(fruits);          // Apple, Orange — mảng chỉ còn 2 phần tử
```

> 💡 Cả `fruits.pop()` và `fruits.at(-1)` đều trả về phần tử cuối cùng của mảng, nhưng `fruits.pop()` **cũng sửa đổi mảng** bằng cách xóa phần tử đó.

---

#### 16.2.2. `push` — Thêm phần tử vào cuối

- **Thêm** phần tử vào **cuối** mảng.

```javascript
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert(fruits);   // Apple, Orange, Pear
```

> 💡 Lời gọi `fruits.push(...)` tương đương với `fruits[fruits.length] = ...`.

---

#### 16.2.3. `shift` — Xóa phần tử đầu

- **Lấy ra** phần tử đầu tiên của mảng và **trả về** phần tử đó.
- Các phần tử còn lại **dịch lên** để lấp chỗ trống.

```javascript
let fruits = ["Apple", "Orange", "Pear"];

alert(fruits.shift());   // "Apple" — lấy ra phần tử đầu

alert(fruits);            // Orange, Pear
```

---

#### 16.2.4. `unshift` — Thêm phần tử vào đầu

- **Thêm** phần tử vào **đầu** mảng.

```javascript
let fruits = ["Orange", "Pear"];

fruits.unshift("Apple");

alert(fruits);   // Apple, Orange, Pear
```

**Tổng hợp các phương thức:**

| Phương thức | Vị trí | Hành động | Trả về |
|---|---|---|---|
| `push(item)` | **Cuối** mảng | Thêm phần tử | Độ dài mới của mảng |
| `pop()` | **Cuối** mảng | Xóa phần tử | Phần tử bị xóa |
| `unshift(item)` | **Đầu** mảng | Thêm phần tử | Độ dài mới của mảng |
| `shift()` | **Đầu** mảng | Xóa phần tử | Phần tử bị xóa |

> ⚠️ Các phương thức `push/pop` chạy **nhanh**, còn `shift/unshift` chạy **chậm** vì phải dịch chuyển tất cả phần tử.

---

### 16.3. Vòng lặp duyệt mảng (Loops)

#### Vòng lặp `for` truyền thống

Một trong những cách **lâu đời nhất** để duyệt mảng là vòng lặp `for` theo chỉ mục:

```javascript
let fruits = ["Apple", "Orange", "Plum"];

for (let i = 0; i < fruits.length; i++) {
  alert(fruits[i]);   // Apple, Orange, Plum
}
```

#### Vòng lặp `for..of`

Với mảng, có một dạng vòng lặp khác — `for..of`:

```javascript
let fruits = ["Apple", "Orange", "Plum"];

// duyệt qua các phần tử của mảng
for (let fruit of fruits) {
  alert(fruit);   // Apple, Orange, Plum
}
```

| So sánh | `for (let i = 0; ...)` | `for..of` |
|---|---|---|
| **Truy cập** | Qua chỉ mục `arr[i]` | Trực tiếp giá trị phần tử |
| **Biến vòng lặp** | Chỉ mục `i` (số) | Giá trị phần tử |
| **Khi nào dùng** | Cần truy cập chỉ mục | Chỉ cần giá trị |

> ⚠️ **Không nên dùng `for..in`** để duyệt mảng. Vòng lặp `for..in` duyệt **tất cả thuộc tính** (bao gồm cả thuộc tính không phải số), không chỉ các phần tử mảng. Hãy dùng `for..of` hoặc `for` truyền thống.

---

## 17. Các phương thức làm việc với Mảng (Array Methods)

### 17.1. Thêm / Xóa phần tử (Add/remove items)

#### 17.1.1. `splice`

- Phương thức `splice()` thay đổi nội dung của mảng bằng cách **xóa**, **thay thế** các phần tử hiện có và/hoặc **thêm phần tử mới** trực tiếp trên mảng đó (in place).
- **Cú pháp:**

```javascript
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

- Nó chỉnh sửa mảng `arr` bắt đầu từ chỉ mục `start`: xóa `deleteCount` phần tử và sau đó chèn `elem1, ..., elemN` vào vị trí đó.
- Trả về **mảng chứa các phần tử bị xóa**.

**Ví dụ:**

```javascript
let arr = ["I", "study", "JavaScript"];

// từ chỉ mục 2
// xóa 0 phần tử
// sau đó chèn "complex" và "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```

> 💡 `splice` cho phép sử dụng chỉ mục âm (`start < 0`). Khi đó vị trí sẽ được tính ngược từ cuối mảng lên.

---

#### 17.1.2. `slice`

- Phương thức `slice()` trả về một **bản sao nông** (shallow copy) của một phần mảng thành một mảng mới, chọn từ chỉ mục `start` đến `end` (`end` **không được bao gồm**).
- Cả `start` và `end` đều có thể là số âm — khi đó vị trí được tính từ cuối mảng.
- Mảng ban đầu **không bị thay đổi**.

- **Cú pháp:**

```javascript
arr.slice([start], [end])
```

**Ví dụ:**

```javascript
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (sao chép từ index 1 đến 3, không bao gồm index 3)

alert( arr.slice(-2) );    // s,t (sao chép từ index -2 đến cuối mảng)
```

---

#### 17.1.3. `concat`

- Phương thức `concat()` được sử dụng để **hợp nhất (gộp) hai hoặc nhiều mảng**.
- Phương thức này **không làm thay đổi** các mảng hiện có mà **trả về một mảng mới**.
- **Cú pháp:**

```javascript
arr.concat(arg1, arg2...)
```

- Nó chấp nhận bất kỳ số lượng đối số nào — có thể là các mảng hoặc giá trị đơn lẻ.

**Ví dụ:**

```javascript
let arr = [1, 2];

// tạo mảng mới từ: arr và [3, 4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// tạo mảng mới từ: arr, [3, 4] và [5, 6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// tạo mảng mới từ: arr, [3, 4], sau đó thêm các giá trị 5 và 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```

| Phương thức | Sửa mảng gốc? | Trả về | Mô tả |
|---|---|---|---|
| `splice(start, deleteCount, ...elems)` | ✅ Có | Mảng các phần tử bị xóa | Xóa/thay thế/thêm phần tử trực tiếp |
| `slice(start, end)` | ❌ Không | Mảng mới chứa phần tử được chọn | Sao chép một phần của mảng |
| `concat(arg1, arg2, ...)` | ❌ Không | Mảng mới được gộp lại | Hợp nhất các mảng hoặc giá trị |

---

### 17.2. Duyệt qua mảng: `forEach` (Iterate)

- Phương thức `arr.forEach` cho phép **chạy một hàm cho mọi phần tử** của mảng.
- **Cú pháp:**

```javascript
arr.forEach(function(item, index, array) {
  // ... thực hiện thao tác với item
});
```

**Ví dụ:**

```javascript
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
```

| Tham số callback | Ý nghĩa |
|---|---|
| `item` | Phần tử hiện tại đang duyệt |
| `index` | Chỉ mục của phần tử hiện tại |
| `array` | Chính mảng đang được duyệt |

---

### 17.3. Tìm kiếm trong mảng (Searching in array)

#### 17.3.1. `indexOf`, `lastIndexOf` và `includes`

- Các phương thức `arr.indexOf` và `arr.includes` có cú pháp tương tự và hoạt động tương tự như trên chuỗi (String), nhưng thao tác với các phần tử mảng:
  - `arr.indexOf(item, from)` — tìm kiếm `item` bắt đầu từ chỉ mục `from`, trả về **chỉ mục** nơi tìm thấy, nếu không tìm thấy trả về `-1`.
  - `arr.includes(item, from)` — tìm kiếm `item` bắt đầu từ chỉ mục `from`, trả về `true` nếu tìm thấy, ngược lại trả về `false`.
  - `arr.lastIndexOf(item, from)` — tương tự như `indexOf`, nhưng tìm kiếm **từ phải sang trái** (từ cuối về đầu).

**Ví dụ:**

```javascript
let arr = [1, 0, false];

alert( arr.indexOf(0) );     // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) );  // -1

alert( arr.includes(1) );    // true
```

| Phương thức | Kết quả khi tìm thấy | Kết quả khi KHÔNG tìm thấy | Hướng tìm kiếm |
|---|---|---|---|
| `indexOf(item, from)` | Chỉ mục của phần tử | `-1` | Trái → Phải |
| `lastIndexOf(item, from)` | Chỉ mục của phần tử | `-1` | Phải → Trái |
| `includes(item, from)` | `true` | `false` | Trái → Phải |

> ⚠️ Các phương thức này sử dụng **so sánh nghiêm ngặt** (`===`). Vì vậy, nếu tìm `false`, nó tìm đúng giá trị boolean `false`, chứ không phải số `0`. Ngoài ra, `includes` xử lý đúng `NaN` (khác với `indexOf`).

---

#### 17.3.2. `find` và `findIndex` / `findLastIndex`

##### `find`

- Phương thức `find()` trả về **phần tử đầu tiên** trong mảng thỏa mãn hàm kiểm tra được cung cấp. Nếu không có phần tử nào thỏa mãn, nó trả về `undefined`.
- **Cú pháp:**

```javascript
let result = arr.find(function(item, index, array) {
  // nếu trả về true -> result là item và vòng lặp dừng lại
  // nếu không tìm thấy -> trả về undefined
});
```

**Ví dụ:**

```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
```

##### `findIndex` và `findLastIndex`

- Phương thức `arr.findIndex` có cùng cú pháp với `find`, nhưng trả về **chỉ mục** (index) nơi tìm thấy phần tử thay vì chính phần tử đó. Trả về `-1` nếu không tìm thấy.
- Phương thức `arr.findLastIndex` tương tự như `findIndex`, nhưng tìm kiếm **từ phải sang trái** (từ cuối mảng về đầu).

**Ví dụ:**

```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "Pete"}
];

// Tìm chỉ mục của Pete đầu tiên
alert(users.findIndex(user => user.name == 'Pete')); // 1

// Tìm chỉ mục của Pete cuối cùng
alert(users.findLastIndex(user => user.name == 'Pete')); // 3
```

---

#### 17.3.3. `filter`

- Phương thức `filter()` tạo một **bản sao nông** (shallow copy) gồm tất cả các phần tử của mảng vượt qua điều kiện kiểm tra của hàm được cung cấp.
- Trong khi `find` chỉ tìm **phần tử đầu tiên** thỏa mãn, thì `filter` tìm **tất cả phần tử** thỏa mãn điều kiện và trả về một mảng chứa các phần tử đó.
- **Cú pháp:**

```javascript
let results = arr.filter(function(item, index, array) {
  // nếu trả về true -> item được thêm vào results và tiếp tục lặp
});
```

**Ví dụ:**

```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// Trả về mảng chứa 2 phần tử đầu tiên
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```

| Phương thức | Trả về | Số lượng kết quả |
|---|---|---|
| `find` | Giá trị phần tử (hoặc `undefined`) | 1 (phần tử đầu tiên) |
| `findIndex` | Chỉ mục phần tử (hoặc `-1`) | 1 (chỉ mục đầu tiên) |
| `findLastIndex` | Chỉ mục phần tử (hoặc `-1`) | 1 (chỉ mục cuối cùng) |
| `filter` | Mảng chứa các phần tử | Tất cả phần tử thỏa mãn |

---

### 17.4. Biến đổi mảng (Transform an array)

#### 17.4.1. `map`

- Phương thức `arr.map` gọi hàm kiểm tra cho mỗi phần tử của mảng và **trả về một mảng chứa các kết quả**.
- **Cú pháp:**

```javascript
let result = arr.map(function(item, index, array) {
  // trả về giá trị mới thay cho item
});
```

**Ví dụ:**

```javascript
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```

---

#### 17.4.2. `sort(fn)`

- Phương thức `arr.sort()` sắp xếp mảng **trực tiếp** (in place), làm thay đổi thứ tự phần tử của mảng gốc.
- Nó cũng trả về mảng đã được sắp xếp, nhưng giá trị trả về thường được bỏ qua vì chính `arr` đã bị sửa đổi.
- Mặc định, các phần tử được **sắp xếp dưới dạng chuỗi** (strings).

**Ví dụ sắp xếp mặc định:**

```javascript
let arr = [ 1, 2, 15 ];

// phương thức sort() biến đổi các phần tử thành chuỗi
arr.sort();

alert( arr );  // 1, 15, 2  (vì "15" < "2" khi so sánh chuỗi!)
```

**Sử dụng hàm so sánh custom `fn`:**

- Phương thức `arr.sort(fn)` triển khai một thuật toán sắp xếp tổng quát. Nó sẽ duyệt qua mảng, so sánh các phần tử bằng hàm `fn` được cung cấp và sắp xếp lại chúng.
- Hàm so sánh `fn(a, b)` chỉ cần trả về:
  - Giá trị `< 0`: nếu `a` đứng trước `b`
  - Giá trị `> 0`: nếu `a` đứng sau `b`
  - Giá trị `= 0`: nếu `a` và `b` bằng nhau

**Ví dụ:**

```javascript
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15

// Viết gọn với arrow function:
arr.sort((a, b) => a - b);
```

---

#### 17.4.3. `reduce`

- Phương thức `arr.reduce` được sử dụng để **tính toán ra một giá trị duy nhất** dựa trên mảng.
- Hàm được áp dụng lần lượt cho tất cả các phần tử mảng và "chuyển tiếp" (carries on) kết quả sang lần gọi tiếp theo.
- Đối số đầu tiên là **`accumulator`** (bộ tích lũy) lưu trữ kết quả kết hợp của tất cả các lần thực thi trước đó. Và cuối cùng nó trở thành kết quả của `reduce`.

- **Cú pháp:**

```javascript
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

- **Các đối số:**
  - `accumulator` — là kết quả của lần gọi hàm trước đó, bằng `initial` ở lần gọi đầu tiên (nếu `initial` được cung cấp).
  - `item` — phần tử mảng hiện tại.
  - `index` — chỉ mục của phần tử.
  - `array` — chính mảng đó.

**Ví dụ tính tổng mảng:**

```javascript
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```

---

### 17.5. Kiểm tra mảng: `Array.isArray`

- Mảng **không tạo thành một kiểu dữ liệu riêng biệt** trong JavaScript, chúng dựa trên kiểu `Object`.
- Do đó toán tử `typeof` không giúp phân biệt một đối tượng thông thường với một mảng:

```javascript
alert(typeof {}); // object
alert(typeof []); // object (giống hệt!)
```

- Nhưng mảng được sử dụng rất thường xuyên nên có một phương thức đặc biệt dành riêng cho việc này: **`Array.isArray(value)`**.
- Trả về `true` nếu `value` là một mảng, ngược lại trả về `false`.

**Ví dụ:**

```javascript
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true
```

| Kiểm tra | Kết quả cho `{}` | Kết quả cho `[]` |
|---|---|---|
| `typeof` | `"object"` | `"object"` |
| `Array.isArray()` | `false` | `true` |

---

## 18. Xử lý lỗi (Error Handling)

### Giới thiệu

- Dù chúng ta lập trình giỏi đến đâu, đôi khi script của chúng ta vẫn gặp lỗi. Lỗi có thể xảy ra do sai sót khi viết code, dữ liệu đầu vào không mong muốn từ người dùng, phản hồi lỗi từ server, và hàng ngàn lý do khác.
- Thông thường, script sẽ **"chết" (dừng ngay lập tức)** khi xảy ra lỗi và in ra thông báo lỗi ở console.
- Tuy nhiên, cú pháp **`try...catch`** cho phép chúng ta "bắt" (catch) các lỗi để chương trình thay vì bị dừng đột ngột có thể thực hiện các hành động xử lý hợp lý hơn.

---

### 18.1. Cú pháp `try...catch`

Cấu trúc `try...catch` bao gồm hai khối chính: `try` và `catch`.

**Cú pháp cơ bản:**

```javascript
try {
  // code...
} catch (err) {
  // xử lý lỗi
}
```

**Cách thức hoạt động:**
1. Đầu tiên, mã nguồn trong khối `try {...}` được thực thi.
2. Nếu **không có lỗi**, khối `catch (err)` bị bỏ qua: luồng thực thi chạy đến cuối khối `try` rồi tiếp tục các phần code sau đó.
3. Nếu **xảy ra lỗi**, luồng thực thi trong `try` bị tạm dừng và chuyển ngay sang khối `catch (err)`. Biến `err` chứa đối tượng lỗi với thông tin chi tiết về sự cố.

```javascript
try {
  alert('Bắt đầu khối try');  // (1)
  lalala;                      // (2) lỗi! biến chưa định nghĩa
  alert('Kết thúc khối try');  // (3) không bao giờ chạy tới đây
} catch (err) {
  alert('Đã xảy ra lỗi!');     // (4) được thực thi
}
```

> ⚠️ **Lưu ý quan trọng:**
> - `try...catch` **chỉ hoạt động với mã chạy được** (runtime errors / runnable code). Code phải đúng cú pháp JavaScript (valid JS). Nếu mã bị sai cú pháp (Syntax Error), `try...catch` sẽ không thể bắt được lỗi vì chương trình không thể đọc/biên dịch code.
> - `try...catch` hoạt động **đồng bộ** (synchronously). Để bắt một ngoại lệ bên trong một hàm lập lịch bất đồng bộ (như `setTimeout`), `try...catch` phải được đặt **bên trong hàm callback** đó, chứ không phải bọc bên ngoài `setTimeout`.

**Ví dụ xử lý với `setTimeout`:**

```javascript
// ❌ SAI: try...catch bọc ngoài setTimeout sẽ KHÔNG bắt được lỗi bất đồng bộ
try {
  setTimeout(function() {
    noSuchVariable; // script sẽ chết ở đây
  }, 1000);
} catch (err) {
  alert( "không bao giờ chạy tới đây" );
}

// ✅ ĐÚNG: try...catch đặt BÊN TRONG hàm callback
setTimeout(function() {
  try {
    noSuchVariable; // try...catch bắt lỗi thành công!
  } catch {
    alert( "Lỗi đã được bắt tại đây!" );
  }
}, 1000);
```

---

### 18.2. Đối tượng Lỗi (Error object)

Khi xảy ra lỗi, JavaScript tự động tạo ra một đối tượng chứa thông tin chi tiết về lỗi đó và truyền nó làm đối số cho khối `catch`.

Đối với tất cả các lỗi tích hợp sẵn (built-in errors), đối tượng error có **3 thuộc tính chính**:

| Thuộc tính | Ý nghĩa | Ví dụ |
|---|---|---|
| `name` | Tên của lỗi | `"ReferenceError"`, `"TypeError"`, `"SyntaxError"` |
| `message` | Thông điệp văn bản mô tả chi tiết lỗi | `"noSuchVariable is not defined"` |
| `stack` | Call stack tại thời điểm lỗi | Chuỗi thông tin chi tiết về thứ tự các hàm lồng nhau dẫn đến lỗi (dùng cho debug) |

**Ví dụ đọc thuộc tính Error object:**

```javascript
try {
  lalala; // lỗi: biến chưa khai báo
} catch (err) {
  alert(err.name);    // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack);   // ReferenceError: lalala is not defined at (...stack trace...)

  // Cũng có thể in toàn bộ error object (sẽ hiển thị name: message)
  alert(err);         // ReferenceError: lalala is not defined
}
```

---

### 18.3. `try...catch...finally`

Cấu trúc `try...catch` có thể mở rộng thêm khối **`finally`**.

Nếu tồn tại, khối `finally` sẽ **luôn luôn được thực thi trong mọi trường hợp**:
- Sau khối `try`, nếu **không có lỗi**.
- Sau khối `catch`, nếu **có lỗi xảy ra**.

**Cú pháp:**

```javascript
try {
  // ... cố gắng thực thi code ...
} catch (err) {
  // ... xử lý lỗi nếu có ...
} finally {
  // ... luôn luôn thực thi ...
}
```

**Ví dụ:**

```javascript
try {
  alert( 'thực thi try' );
  if (confirm('Tạo lỗi?')) BAD_CODE();
} catch (err) {
  alert( 'thực thi catch' );
} finally {
  alert( 'thực thi finally' );
}
```

> 💡 **Khối `finally` và `return`:**
> Mệnh đề `finally` hoạt động cho **bất kỳ cách thoát nào** khỏi `try...catch`, kể cả khi có câu lệnh `return` rõ ràng bên trong `try` hoặc `catch`. Khối `finally` vẫn sẽ chạy trước khi hàm thực sự trả về kết quả.

**Cấu trúc `try...finally` (không có `catch`):**

Cấu trúc này hữu ích khi chúng ta không muốn xử lý lỗi tại hàm hiện tại (để lỗi lọt ra ngoài cho hàm gọi nó xử lý), nhưng vẫn muốn **đảm bảo hoàn tất/dọn dẹp** (finalize) các tiến trình đã bắt đầu (như đóng kết nối, dừng timer, dọn tài nguyên, v.v.).

```javascript
function doWork() {
  try {
    // làm gì đó...
  } finally {
    // đảm bảo hoàn tất dọn dẹp dù có lỗi hay không
    cleanUp();
  }
}
```

| Cấu trúc | Khi nào dùng |
|---|---|
| `try...catch` | Xử lý lỗi và ngăn chương trình bị dừng đột ngột |
| `try...catch...finally` | Xử lý lỗi và luôn thực hiện dọn dẹp/hoàn tất sau cùng |
| `try...finally` | Không bắt lỗi tại đây (để lọt ra ngoài) nhưng đảm bảo luôn thực hiện dọn dẹp |

---

## 19. Promise (Lời hứa bất đồng bộ)

### Giới thiệu (Introduction)

- Đối tượng **`Promise`** đại diện cho sự **hoàn thành (fulfillment)** hoặc **thất bại (rejection)** trong tương lai của một tác vụ bất đồng bộ (asynchronous operation) và giá trị trả về của nó.
- **Cú pháp khởi tạo (Constructor syntax):**

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor (hàm thực thi tác vụ)
});
```

- Một `Promise` luôn nằm ở một trong **ba trạng thái (states)**:

| Trạng thái | Mô tả | Chi tiết |
|---|---|---|
| **`pending`** | Trạng thái ban đầu | Chưa hoàn thành cũng chưa bị từ chối |
| **`fulfilled`** | Thao tác thành công | Gọi `resolve(value)` thành công |
| **`rejected`** | Thao tác thất bại | Gọi `reject(error)` do có lỗi |

---

### 19.1. Các hàm tiêu thụ: `then`, `catch` (Consumers)

Đối tượng `Promise` đóng vai trò là cầu nối giữa hàm thực thi (executor) và các hàm tiêu thụ (consuming functions) sẽ nhận kết quả hoặc lỗi. Các hàm tiêu thụ được đăng ký thông qua phương thức `.then` và `.catch`.

#### 19.1.1. Phương thức `.then`

- **Cú pháp:**

```javascript
promise.then(
  function(result) { /* xử lý kết quả thành công */ },
  function(error)  { /* xử lý lỗi */ }
);
```

- **Tham số:**
  - Đối số thứ nhất: Hàm chạy khi Promise được `resolved` và nhận giá trị `result`.
  - Đối số thứ hai: Hàm chạy khi Promise bị `rejected` và nhận đối tượng `error`.

**Ví dụ:**

```javascript
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve thực thi hàm đầu tiên trong .then
promise.then(
  result => alert(result), // hiển thị "done!" sau 1 giây
  error => alert(error)   // không chạy
);
```

---

#### 19.1.2. Phương thức `.catch`

- Nếu chỉ quan tâm đến **lỗi (errors)**, ta có thể truyền `null` làm đối số đầu tiên: `.then(null, errorHandlingFunction)`. Hoặc ngắn gọn hơn, sử dụng phương thức **`.catch`**.

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) tương đương với promise.then(null, f)
promise.catch(alert); // hiển thị "Error: Whoops!" sau 1 giây
```

---

### 19.2. Chuỗi Promise (Promise Chaining)

- Khi gọi `.then`, nó trả về một **Promise mới**. Điều này cho phép chúng ta nối tiếp các câu lệnh `.then` tạo thành một **chuỗi xử lý bất đồng bộ (chaining)**.

```javascript
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  alert(result); // 1
  return result * 2;
}).then(function(result) {
  alert(result); // 2
  return result * 2;
}).then(function(result) {
  alert(result); // 4
});
```

**Trả về Promise trong `.then` (Returning promises):**

- Một hàm handler trong `.then(handler)` có thể tạo và **trả về một Promise mới**. Khi đó, các handler tiếp theo trong chuỗi sẽ **đợi cho đến khi Promise đó settled** (hoàn thành) rồi mới nhận kết quả.

```javascript
new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
}).then(function(result) {
  alert(result); // 1
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function(result) {
  alert(result); // 2
});
```

---

### 19.3. Xử lý lỗi trong Promise (Error handling with promises)

#### 19.3.1. `try...catch` ẩn (Implicit try...catch)

- Mã nguồn bên trong executor của Promise và các handler (`.then`, `.catch`) có một khối `try...catch` "ẩn" bao bọc xung quanh.
- Nếu có một ngoại lệ xảy ra (exception), nó tự động được bắt và xử lý như một **Rejection** (tương đương gọi `reject(error)`).

```javascript
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!
```

---

#### 19.3.2. Quăng lại lỗi (Rethrowing)

- Nếu ta `throw` (ném lỗi) bên trong khối `.catch`, quyền kiểm soát sẽ nhảy đến **hàm xử lý lỗi `.catch` gần nhất tiếp theo**.
- Nếu ta xử lý lỗi và kết thúc bình thường (không `throw`), luồng thực thi sẽ tiếp tục chuyển sang **`.then` thành công gần nhất tiếp theo**.

```javascript
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(function(error) {
  if (error instanceof URIError) {
    // xử lý lỗi URIError
  } else {
    alert("Không thể xử lý lỗi này");
    throw error; // ném lỗi tiếp sang .catch kế tiếp
  }
}).then(function() {
  // không chạy tới đây
}).catch(error => {
  alert(`Đã bắt được lỗi chưa xác định: ${error}`);
});
```

---

#### 19.3.3. Rejection chưa được xử lý (Unhandled rejections)

- Khi một lỗi xảy ra và không được bắt bởi bất kỳ `.catch` nào, script sẽ ghi nhận lỗi và in thông báo ở console (tương tự lỗi chưa bắt trong code đồng bộ).
- Trình duyệt cung cấp sự kiện **`unhandledrejection`** để lắng nghe các lỗi Promise chưa được xử lý trên toàn hệ thống:

```javascript
window.addEventListener('unhandledrejection', function(event) {
  // event object có hai thuộc tính đặc biệt:
  alert(event.promise); // [object Promise] — promise tạo ra lỗi
  alert(event.reason);  // Error: Whoops! — đối tượng lỗi chưa được xử lý
});

new Promise(function() {
  throw new Error("Whoops!");
}); // Không có .catch để xử lý lỗi
```

---

### 19.4. Promise API

Lớp `Promise` cung cấp **6 phương thức tĩnh (static methods)** chính:

#### 19.4.1. `Promise.all`

- Nhận vào một iterable (thường là một mảng các promises) và trả về một promise mới.
- Promise mới sẽ **`resolve` khi TẤT CẢ các promise trong mảng đều được resolve**, và mảng chứa kết quả của từng promise sẽ là kết quả của `Promise.all`.
- Nếu **bất kỳ** promise nào bị `rejected`, `Promise.all` sẽ **lập tức reject** với lỗi của promise đó (bỏ qua kết quả của các promise còn lại).

```javascript
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // [1, 2, 3] khi tất cả các promise đã xong
```

---

#### 19.4.2. `Promise.allSettled`

- Chờ cho **TẤT CẢ** các promise hoàn thành (**settled**), bất kể chúng thành công (`fulfilled`) hay thất bại (`rejected`).
- Mảng kết quả chứa các đối tượng có dạng:
  - `{status: "fulfilled", value: result}` — đối với response thành công.
  - `{status: "rejected", reason: error}` — đối với lỗi.

```javascript
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => {
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
```

---

#### 19.4.3. `Promise.race`

- Tương tự `Promise.all`, nhưng chỉ **chờ promise ĐẦU TIÊN settled** (thành công hoặc thất bại) và lấy ngay kết quả/lỗi đó.

```javascript
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Lỗi!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 1 (vì promise đầu tiên chạy nhanh nhất)
```

---

#### 19.4.4. `Promise.any`

- Chờ promise **ĐẦU TIÊN thành công (`fulfilled`)** và lấy kết quả của nó.
- Nếu **TẤT CẢ các promise đều bị rejected**, promise trả về sẽ bị reject với **`AggregateError`** — một đối tượng lỗi đặc biệt lưu trữ tất cả các lỗi trong thuộc tính `errors`.

```javascript
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Lỗi 1")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert); // 2 (kết quả của promise thành công đầu tiên)
```

---

#### 19.4.5. `Promise.resolve` và `Promise.reject`

- **`Promise.resolve(value)`**: Tạo một promise đã `fulfilled` với giá trị `value`. Thường dùng để đảm bảo tương thích khi một hàm cần trả về một promise.
- **`Promise.reject(error)`**: Tạo một promise đã `rejected` với đối tượng lỗi `error`.

```javascript
let promise = Promise.resolve(123);
promise.then(alert); // 123
```

---

### Bảng tổng hợp Promise API

| Phương thức | Chờ khi nào? | Trả về | Xử lý Rejection |
|---|---|---|---|
| `Promise.all` | Tất cả promises hoàn thành | Mảng chứa các kết quả | Reject **ngay lập tức** nếu có 1 lỗi |
| `Promise.allSettled` | Tất cả promises hoàn thành | Mảng chứa `{status, value/reason}` | Không reject, trả về trạng thái chi tiết của từng promise |
| `Promise.race` | Promise **đầu tiên** hoàn thành | Kết quả/Lỗi của promise đầu tiên | Reject nếu promise nhanh nhất bị lỗi |
| `Promise.any` | Promise **thành công đầu tiên** | Kết quả của promise thành công nhanh nhất | Reject với `AggregateError` nếu **tất cả** bị lỗi |
| `Promise.resolve(v)` | Tức thì | Promise đã fulfilled với `v` | — |
| `Promise.reject(e)` | Tức thì | Promise đã rejected với `e` | — |

---

## 20. Async/await

### Giới thiệu (Introduction)

- JavaScript cung cấp một cú pháp đặc biệt để làm việc với Promise một cách thuận tiện và dễ đọc hơn, được gọi là **`async/await`**.
- Cú pháp này vô cùng dễ hiểu, dễ sử dụng và giúp mã bất đồng bộ trông giống như mã đồng bộ truyền thống.

---

### 20.1. Hàm Async (Async functions)

- Từ khóa `async` được đặt trước một khai báo hàm.

**Cú pháp:**

```javascript
async function f() {
  return 1;
}
```

- Từ **`async`** đặt trước hàm mang một ý nghĩa đơn giản: **hàm này luôn luôn trả về một Promise**.
- Các giá trị trả về khác (không phải Promise) sẽ tự động được JavaScript bọc trong một **resolved Promise**.

**Ví dụ:**

```javascript
async function f() {
  return 1;
}

f().then(alert); // hiển thị 1
```

> 💡 Kết quả trên tương đương với việc trả về trực tiếp `Promise.resolve(1)`.

---

### 20.2. Từ khóa Await (`await`)

- Từ khóa `await` làm cho JavaScript **tạm dừng việc thực thi hàm** cho đến khi Promise đó settle (hoàn thành) và trả về kết quả.

**Cú pháp:**

```javascript
// chỉ hoạt động bên trong hàm async!
let value = await promise;
```

**Cách thức hoạt động:**

- `await` tạm thời đình chỉ việc thực thi hàm cho đến khi Promise được giải quyết, sau đó tiếp tục lại với kết quả của Promise.
- Thao tác này **hoàn toàn không tiêu tốn tài nguyên CPU**, vì trong thời gian chờ đợi, JavaScript Engine có thể thực hiện các công việc khác (chạy các script khác, xử lý sự kiện DOM, v.v.).

**Ví dụ:**

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // tạm dừng ở đây cho đến khi promise resolve (*)

  alert(result); // "done!"
}

f();
```

> ⚠️ **Lưu ý:** Từ khóa `await` **chỉ hoạt động bên trong các hàm được khai báo với `async`**. Nếu sử dụng `await` bên trong một hàm thông thường (non-async function), JavaScript sẽ báo lỗi cú pháp (`SyntaxError`).

**Chờ nhiều Promise với `Promise.all`:**

Khi cần chờ nhiều Promise chạy song song, ta có thể kết hợp bọc mảng Promise trong `Promise.all` và sử dụng `await`:

```javascript
// chờ tất cả các request hoàn thành song song
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3)
]);
```

---

### 20.3. Xử lý lỗi trong Async/await (Error handling)

- Nếu một Promise `resolve` bình thường, `await promise` trả về kết quả.
- Nhưng trong trường hợp Promise bị **`reject`**, nó sẽ **ném ra lỗi (throw error)** ngay tại dòng có chứa `await`, tương tự như khi chạy câu lệnh `throw`.

**Ví dụ:**

```javascript
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
```

Tương đương với:

```javascript
async function f() {
  throw new Error("Whoops!");
}
```

---

#### 20.3.1. Xử lý lỗi bằng `try...catch`

Trong thực tế, Promise có thể mất một khoảng thời gian trước khi bị reject. Ta có thể bắt lỗi đó bằng khối **`try...catch`** thông thường:

```javascript
async function f() {
  try {
    let response = await fetch('http://no-such-url');
    let user = await response.json();
  } catch(err) {
    // bắt được cả lỗi mạng và lỗi ép kiểu JSON
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

---

#### 20.3.2. Xử lý lỗi bằng `.catch()`

Nếu không sử dụng khối `try...catch` bên trong hàm, bản thân việc gọi hàm `async` `f()` sẽ trả về một **rejected Promise**. Do đó, ta có thể nối thêm phương thức **`.catch()`** khi gọi hàm để xử lý lỗi:

```javascript
async function f() {
  let response = await fetch('http://no-such-url');
}

// f() trở thành một rejected promise
f().catch(alert); // TypeError: failed to fetch
```

---

### So sánh cú pháp: Promise thuần vs Async/Await

| Tiêu chí | Promise thuần (`.then/.catch`) | Async / Await |
|---|---|---|
| **Cú pháp** | Dùng callback trong `.then()` | Viết dạng tuần tự giống code đồng bộ |
| **Giá trị trả về** | `return value` chuyển tiếp sang `.then` kế tiếp | `let result = await promise` lấy trực tiếp giá trị |
| **Xử lý lỗi** | `.catch(err => ...)` | Khối `try...catch` hoặc `.catch()` ở hàm async |
| **Độ đọc hiểu** | Dễ bị lồng nhau khi xử lý phức tạp | Nhìn phẳng, dễ đọc và dễ debug hơn |

---

## 21. Modules (Module trong JavaScript)

### Giới thiệu (Introduction)

- Khi ứng dụng phát triển lớn hơn, chúng ta muốn chia nhỏ nó thành nhiều file riêng biệt, được gọi là các **"modules"**.
- Một **module** đơn giản là **một file script**. Cứ 1 script là 1 module.
- Các module có thể tải lẫn nhau và sử dụng hai chỉ thị đặc biệt **`export`** và **`import`** để trao đổi chức năng (gọi hàm, biến, class giữa các module với nhau):
  - **`export`**: Gán nhãn cho các biến, hàm hoặc class mà module muốn công khai để bên ngoài có thể truy cập.
  - **`import`**: Cho phép nạp các chức năng từ module khác vào module hiện tại.

---

### 21.1. Export (Xuất dữ liệu)

Chúng ta có thể gán nhãn `export` trước bất kỳ khai báo nào: biến, hằng số, mảng, hàm hay lớp (class).

**Export trực tiếp khi khai báo:**

```javascript
// export một mảng
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export một hằng số
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export một class
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

**Export riêng biệt ở cuối file:**

Chúng ta cũng có thể khai báo trước rồi gom các thành phần cần export vào cặp ngoặc nhọn `{}` ở cuối file:

```javascript
// 📄 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // danh sách các thành phần được export
```

**Đổi tên khi Export (`as`):**

Sử dụng từ khóa `as` để export thành phần dưới một tên gọi khác:

```javascript
export {sayHi as hi, sayBye as bye};
```

---

### 21.2. Import (Nhập dữ liệu)

Thông thường, ta đưa danh sách các thành phần cần import vào trong cặp ngoặc nhọn `import {...}`:

```javascript
// 📄 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

**Đổi tên khi Import (`as`):**

Có thể đổi tên thành phần nạp vào bằng từ khóa `as` để tránh trùng tên hoặc tạo tên gọi ngắn gọn hơn:

```javascript
// 📄 main.js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John');  // Hello, John!
bye('John'); // Bye, John!
```

**Import tất cả thành một đối tượng (`import * as`):**

```javascript
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

---

### 21.3. Export default (Xuất mặc định)

- Cú pháp **`export default`** được dùng khi một module chỉ chứa **một thành phần chính** (ví dụ: 1 file đại diện cho 1 class duy nhất).
- Đặt `export default` ở trước đối tượng cần xuất:

```javascript
// 📄 user.js
export default class User { // chỉ cần thêm từ khóa "default"
  constructor(name) {
    this.name = name;
  }
}
```

> ⚠️ **Lưu ý:** Mỗi file module chỉ có thể chứa **TỐI ĐA MỘT `export default`**.

**Import một Default Export:**

Khi nạp một đối tượng xuất mặc định, **không sử dụng cặp ngoặc nhọn `{}`** và có thể đặt tên bất kỳ cho đối tượng nạp vào:

```javascript
// 📄 main.js
import User from './user.js'; // không dùng {User}, chỉ viết User

new User('John');
```

---

### 21.4. Re-export (Xuất chuyển tiếp)

- Cú pháp **`export ... from ...`** cho phép nạp các thành phần từ một module khác và ngay lập tức export lại chúng ra bên ngoài (có thể đổi tên nếu cần).

```javascript
// Re-export sayHi từ file say.js
export {sayHi} from './say.js';

// Re-export default export của user.js dưới tên User
export {default as User} from './user.js';
```

**Ứng dụng thực tế:**

Tính năng Re-export thường dùng để tạo một **file điểm vào tập trung (central entry point)**, chẳng hạn như `index.js`, gom tất cả tính năng của dự án từ nhiều file nhỏ để các nơi khác chỉ cần import từ một địa chỉ duy nhất.

---

### Bảng so sánh Named Export vs Default Export

| Tiêu chí | Named Export (`export {...}`) | Default Export (`export default`) |
|---|---|---|
| **Số lượng mỗi file** | Nhiều (không giới hạn) | **Tối đa 1** |
| **Cú pháp Export** | `export const A = ...` hoặc `export {A}` | `export default A` |
| **Cú pháp Import** | `import {A} from './file.js'` (phải có `{}`) | `import A from './file.js'` (**không** dùng `{}`) |
| **Đặt lại tên khi Import** | Bắt buộc dùng `as`: `import {A as B}` | Tự do đặt tên: `import CustomName from ...` |
