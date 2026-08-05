# Tổng hợp kiến thức TypeScript

## 1. TypeScript là gì?
TypeScript là JavaScript có **static typing**. Compiler kiểm tra kiểu rồi biên dịch sang JavaScript; trình duyệt không chạy trực tiếp TypeScript.
```bash
npm install -D typescript
npx tsc --init
npx tsc app.ts
npx tsc --watch
```
TypeScript giúp bắt lỗi sớm, autocomplete và refactor tốt hơn; vẫn cần kiểm tra dữ liệu runtime.

## 2. Kiểu cơ bản và suy luận
```ts
let age: number = 20;
let name: string = "An";
let active: boolean = true;
let value: null = null;
let missing: undefined = undefined;
```
- Type inference tự suy ra kiểu khi khởi tạo; không cần annotation thừa.
- `any` tắt kiểm tra kiểu, nên tránh.
- `unknown` an toàn hơn `any`: phải narrow trước khi dùng.
- `void`: hàm không trả giá trị đáng kể; `never`: không kết thúc bình thường (`throw`, loop vô tận).

## 3. Object, array và tuple
```ts
type User = { id: number; name: string; active?: boolean };
const user: User = { id: 1, name: "An" };
const ids: number[] = [1, 2];
const names: Array<string> = ["An"];
const pair: [string, number] = ["An", 20];
```
- `?` là property tùy chọn; `readonly` ngăn gán lại.
- Tuple có số lượng/thứ tự kiểu cố định; dùng array cho danh sách đồng nhất.

## 4. Union, literal và alias
```ts
type ID = string | number;
type Status = "idle" | "loading" | "success" | "error";
let id: ID = 1;
let status: Status = "idle";
```
- Union (`A | B`) nghĩa là một trong các kiểu; phải narrow trước khi gọi API riêng của kiểu.
- Type alias giúp đặt tên và tái sử dụng cấu trúc kiểu.

## 5. Function
```ts
function add(a: number, b: number): number { return a + b; }
const greet = (name: string): string => `Hi ${name}`;
function log(message: string): void { console.log(message); }
function fail(message: string): never { throw new Error(message); }
```
```ts
function format(value: string, prefix = ""): string { return prefix + value; }
function find(id: number, label?: string): User | undefined { return undefined; }
function sum(...values: number[]): number { return values.reduce((a, b) => a + b, 0); }
```
- Optional parameter phải sau required parameter.
- Function type:
```ts
type Handler = (value: string) => void;
```

## 6. `unknown`, type assertion và narrowing
```ts
function print(value: unknown) {
  if (typeof value === "string") console.log(value.toUpperCase());
  else if (typeof value === "number") console.log(value.toFixed(2));
}
const el = document.querySelector("input") as HTMLInputElement | null;
```
- Narrow bằng `typeof`, `instanceof`, `in`, equality hoặc user-defined type guard.
- Assertion (`as`) chỉ nói với compiler, không biến đổi dữ liệu runtime; không dùng để che lỗi.

## 7. Enum và khuyến nghị
```ts
enum Direction { Up, Down, Left, Right }
```
Enum tạo runtime code; trong nhiều trường hợp union literal đơn giản hơn:
```ts
type Direction = "up" | "down" | "left" | "right";
```

## 8. Interface và type
```ts
interface Person {
  readonly id: number;
  name: string;
  age?: number;
}
type Employee = Person & { role: string };
```
- `interface` phù hợp object/class và có thể declaration merging.
- `type` mạnh ở union, tuple, mapped/conditional type.
- `extends` kế thừa interface; `&` intersection kết hợp type.

## 9. Classes và OOP
```ts
class Account {
  constructor(
    public readonly id: number,
    private balance: number,
  ) {}
  deposit(amount: number): void { this.balance += amount; }
}
class PremiumAccount extends Account {}
```
- Access modifier: `public` mặc định, `private` chỉ trong class, `protected` trong class/con cháu.
- `readonly` chỉ cho gán lúc khai báo/constructor.
- `abstract class` không khởi tạo trực tiếp; abstract method phải được class con triển khai.
- `implements` buộc class đáp ứng interface.
- `static` thuộc về class, không thuộc instance.

## 10. Generics
Generics giữ quan hệ kiểu giữa input và output mà không dùng `any`.
```ts
function identity<T>(value: T): T { return value; }
function first<T>(items: T[]): T | undefined { return items[0]; }
```
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
interface ApiResponse<T> { data: T; error?: string; }
class Box<T> { constructor(public value: T) {} }
```
- `extends` trong generic là constraint (giới hạn kiểu), không luôn là kế thừa class.
- Có thể đặt default type: `T = string`.

## 11. Advanced types
```ts
type HasId = { id: number };
type Named = { name: string };
type Entity = HasId & Named;
```
Discriminated union:
```ts
type Result =
  | { kind: "ok"; data: string }
  | { kind: "error"; message: string };
function show(result: Result) {
  if (result.kind === "ok") return result.data;
  return result.message;
}
```
- Intersection (`&`) phải đáp ứng tất cả type.
- Discriminant giúp compiler tự narrow theo `kind`.
- `keyof T` tạo union tên thuộc tính; `typeof` lấy type từ value.

## 12. Decorators
Decorator là hàm gắn vào class, method, property hoặc parameter để thêm metadata/hành vi.
```ts
function Log(target: Function) { console.log(target.name); }
@Log
class Service {}
```
- Cấu hình decorator tùy phiên bản TypeScript; kiểm tra `experimentalDecorators`/chuẩn decorator đang dùng.
- Dùng vừa phải vì decorator làm code khó theo dõi và phụ thuộc runtime/framework.

## 13. Modules và namespaces
```ts
// user.ts
export interface User { id: number; }
export default function getUser() {}
// app.ts
import getUser, { User } from "./user";
```
- Module có scope riêng; ưu tiên ES Modules (`import`/`export`).
- Re-export: `export { User } from "./user"`.
- Namespace là cơ chế cũ để gom tên; không ưu tiên cho ứng dụng hiện đại.

## 14. `tsconfig.json` và compiler
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "rootDir": "src",
    "outDir": "dist",
    "sourceMap": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
- `strict: true` nên bật.
- `target` quyết định JS đầu ra; `lib` quyết định API type có sẵn.
- `rootDir/outDir` tách source và build; `sourceMap` hỗ trợ debug.
- `include/exclude` quyết định file compiler xử lý.

## 15. Bundling và thư viện
- Webpack/Vite/esbuild đóng gói module, xử lý TypeScript qua plugin/loader.
- `tsc` chủ yếu kiểm tra kiểu và/hoặc phát JS; bundler xử lý dependency, asset và code splitting.
- Thư viện JS không có type có thể cần `@types/package` hoặc file declaration.
```ts
declare const externalValue: string;
```
- Khi dùng class-transformer/class-validator, cần hiểu decorator metadata và validate dữ liệu runtime.

## 16. Quy tắc cần nhớ
- Bật `strict`, ưu tiên kiểu cụ thể và để inference làm việc.
- Tránh `any`; dùng `unknown` + narrowing, generic hoặc type guard.
- TypeScript không thay thế validation runtime cho API/user input.
- Tách type/interface dùng chung, đặt tên rõ, không lạm dụng assertion/enum/decorator.
