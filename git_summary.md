# 📚 Tổng Hợp Kiến Thức Git - 5/7 Video

---

## Video 1: Cài Đặt & Cấu Hình Git

### Cài đặt Git
```bash
# Kiểm tra phiên bản Git đã cài
git --version
```

### Lệnh trợ giúp
```bash
git help              # Hiển thị danh sách các lệnh phổ biến
git help <command>    # Xem hướng dẫn chi tiết của một lệnh
git help config       # Xem hướng dẫn về cấu hình Git
```

### Cấu hình Git
```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"

# Xem cấu hình hiện tại
git config --list
```

---

## Video 2: Các Lệnh Git Cơ Bản

### Khởi tạo & Clone
```bash
git init          # Khởi tạo repository mới tại thư mục hiện tại
git clone <url>   # Tải (clone) repository từ remote về máy
```

### Trạng thái file trong Git

| Trạng thái | Mô tả |
|---|---|
| **Untracked** | File mới, chưa được Git theo dõi |
| **Tracked** | File đã được Git theo dõi (staged / modified) |
| **Committed** | File đã được lưu vào lịch sử Git |

```bash
git status        # Kiểm tra trạng thái các file
git add <file>    # Chuyển file từ untracked/modified → staged
git add .         # Stage tất cả các thay đổi
```

### Commit
```bash
git commit -m "message"    # Tạo commit với message
git commit --amend         # Sửa commit gần nhất (thêm file hoặc đổi message)
```

### Xem lịch sử
```bash
git log              # Xem lịch sử commit chi tiết
git log --oneline    # Xem lịch sử commit dạng rút gọn (1 dòng/commit)
```

### Remote & Push
```bash
git remote                    # Xem danh sách remote
git remote -v                 # Xem chi tiết URL của remote

# Đẩy code lên remote lần đầu (tạo liên kết branch)
git push --set-upstream origin feature1
# Hoặc viết tắt
git push -u origin feature1

git push --force              # Ép đẩy code lên (⚠️ ghi đè lịch sử remote)
```

### .gitignore
File `.gitignore` dùng để chỉ định các file/thư mục mà Git sẽ **bỏ qua**, không theo dõi.

**Các ký tự đặc biệt:**

| Ký tự | Ý nghĩa |
|---|---|
| `#` | Comment (dòng ghi chú) |
| `*` | Khớp với mọi chuỗi ký tự (trừ `/`) |
| `?` | Khớp với 1 ký tự bất kỳ |
| `[abc]` | Khớp với 1 trong các ký tự `a`, `b`, `c` |
| `**` | Khớp với mọi thư mục con (đệ quy) |

**Ví dụ `.gitignore`:**
```gitignore
# Bỏ qua tất cả file .a
*.a

# Nhưng KHÔNG bỏ qua lib.a (ngoại lệ)
!lib.a

# Chỉ bỏ qua file TODO ở thư mục gốc
/TODO

# Bỏ qua toàn bộ thư mục build/
build/

# Bỏ qua file .txt trong thư mục doc/ (không đệ quy)
doc/*.txt

# Bỏ qua file .txt trong doc/ và tất cả thư mục con (đệ quy)
doc/**/*.txt
```

---

## Video 3: Git Branch

### Quản lý nhánh
```bash
git branch                # Liệt kê tất cả branch local
git branch <tên_branch>   # Tạo branch mới
git branch -d <branch>    # Xóa branch
```

### Chuyển nhánh
```bash
git checkout <branch>     # Chuyển sang branch khác
git checkout -b <branch>  # Tạo + chuyển sang branch mới

# Tạo branch mới từ một commit cụ thể
git checkout -b feature4 8e41638
```

> **Lưu ý:** `git switch` là lệnh mới thay thế `git checkout` để chuyển branch (Git 2.23+).

---

## Video 4: Git Merge & Git Rebase

### Git Merge
Gộp nhánh bằng cách tạo **merge commit** — giữ nguyên lịch sử của cả 2 nhánh.

```bash
# Đứng ở branch đích (vd: main), merge branch khác vào
git checkout main
git merge feature1
```

```
      A---B---C  (feature1)
     /         \
D---E---F---G---H  (main) ← merge commit H
```

### Git Rebase
Di chuyển toàn bộ commit của nhánh hiện tại lên **đầu** nhánh đích — tạo lịch sử **thẳng hàng**.

```bash
# Đứng ở branch feature, rebase lên main
git checkout feature1
git rebase main
```

```
Trước rebase:
      A---B---C  (feature1)
     /
D---E---F---G  (main)

Sau rebase:
                  A'--B'--C'  (feature1)
                 /
D---E---F---G  (main)
```

### So sánh Merge vs Rebase

| | Git Merge | Git Rebase |
|---|---|---|
| **Lịch sử** | Giữ nguyên, có merge commit | Viết lại, thẳng hàng |
| **An toàn** | ✅ Không thay đổi commit cũ | ⚠️ Thay đổi hash commit |
| **Khi nào dùng** | Branch public/shared | Branch cá nhân, chưa push |

> ⚠️ **Không rebase** branch đã push lên remote và có người khác đang dùng!

---

## Video 5: Git Pull & Git Fetch

### Git Fetch
Tải dữ liệu mới từ remote về nhưng **KHÔNG tự động merge** vào branch hiện tại.

```bash
git fetch              # Fetch từ remote mặc định (origin)
git fetch origin       # Fetch từ remote cụ thể
```

> Sau khi fetch, bạn có thể xem thay đổi trước rồi quyết định merge hay không.

### Git Pull
Tải dữ liệu từ remote về **VÀ tự động merge** vào branch hiện tại.

```bash
git pull               # = git fetch + git merge
git pull origin main   # Pull từ branch main của origin
```

### So sánh Fetch vs Pull

| | Git Fetch | Git Pull |
|---|---|---|
| **Tải dữ liệu** | ✅ Có | ✅ Có |
| **Tự động merge** | ❌ Không | ✅ Có |
| **An toàn** | ✅ An toàn hơn | ⚠️ Có thể gây conflict |
| **Khi nào dùng** | Muốn review trước khi merge | Muốn cập nhật nhanh |

```bash
# Quy trình an toàn: fetch → review → merge
git fetch origin
git log origin/main    # Xem những thay đổi mới
git merge origin/main  # Merge khi đã sẵn sàng
```

---

> 📌 **Ghi nhớ:** `git pull` = `git fetch` + `git merge`
