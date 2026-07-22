# 📚 Tổng Hợp Kiến Thức Git - 7/7 Video

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

---

## Video 6: Git Flow Tại Sun*

### Quy trình tổng quan (Vòng tròn)

```
Fork repo gốc → Clone về local → Add remote upstream
                                        │
                                        ▼
                    ┌→ Làm việc trên branch (working)
                    │               │
                    │               ▼
                    │       Create commit
                    │               │
                    │               ▼
                    │        Rebase code
                    │               │
                    │               ▼
                    │       Fix conflict
                    │               │
                    │               ▼
                    │        Push code
                    │               │
                    │               ▼
                    │       Create PR
                    │               │
                    │               ▼
                    └──── Merged PR ┘
```

### Bước 1: Fork & Clone

```bash
# Fork repo từ remote gốc (upstream) sang remote của mình (origin) trên GitHub

# Clone repo đã fork về local
git clone <url-repo-đã-fork>

# Thêm remote gốc (upstream) vào local
git remote add upstream <url-repo-gốc>

# Kiểm tra remote
git remote -v
# origin    → repo đã fork (của mình)
# upstream  → repo gốc (của team/công ty)
```

### Bước 2: Làm việc trên branch

```bash
# Tạo branch mới từ branch chính và làm việc
git checkout -b branch-2

# Tạo các commit khi làm việc
git add .
git commit -m "feat: thêm tính năng A"
git commit -m "fix: sửa lỗi nhỏ"
git commit -m "refactor: cải thiện code"
```

### Bước 3: Gộp commits (Interactive Rebase)

Trước khi tạo PR, gộp nhiều commit thành 1 commit gọn gàng:

```bash
# Gộp 3 commit gần nhất thành 1
git rebase -i HEAD~3
```

Trong editor sẽ hiện:
```
pick abc1234 feat: thêm tính năng A
pick def5678 fix: sửa lỗi nhỏ
pick ghi9012 refactor: cải thiện code
```

Sửa thành (giữ `pick` đầu tiên, đổi còn lại thành `squash` hoặc `s`):
```
pick abc1234 feat: thêm tính năng A
squash def5678 fix: sửa lỗi nhỏ
squash ghi9012 refactor: cải thiện code
```

> Sau đó Git sẽ cho bạn chỉnh lại commit message cho commit đã gộp.

### Bước 4: Rebase code từ upstream

```bash
# Lấy code mới nhất từ repo gốc
git fetch upstream

# Rebase branch hiện tại lên upstream/main
git rebase upstream/main
```

### Bước 5: Fix conflict (nếu có)

```bash
# Khi gặp conflict → sửa file bị conflict ở LOCAL
# ⚠️ KHÔNG resolve conflict trên GitHub vì sẽ tạo thêm commit merge

# Sau khi fix conflict
git add <file-đã-fix>
git rebase --continue

# Nếu muốn hủy rebase
git rebase --abort
```

### Bước 6: Push & tạo Pull Request

```bash
# Force push vì đã rebase (lịch sử thay đổi)
git push origin branch-2 -f

# Sau đó lên GitHub tạo Pull Request từ origin/branch-2 → upstream/main
```

> ⚠️ **Phải dùng `-f` (force push)** vì sau rebase, lịch sử commit đã bị viết lại.

> ⚠️ **Resolve conflict ở local**, vì resolve trên GitHub sẽ tạo thêm commit merge không mong muốn.

---

## Video 7: Case Studies Thực Tế

### 1️⃣ Gộp commit lại thành 1

Khi có quá nhiều commit nhỏ lẻ, gộp lại cho gọn:

```bash
# Gộp N commit gần nhất thành 1
git rebase -i HEAD~N

# Ví dụ: gộp 3 commit gần nhất
git rebase -i HEAD~3

# Trong editor: giữ "pick" cho commit đầu, đổi còn lại thành "squash"
```

---

### 2️⃣ Bỏ qua file đã commit

Khi lỡ commit file không mong muốn (vd: `.env`, `node_modules`):

```bash
# Xóa file khỏi Git tracking nhưng GIỮ file trên máy
git rm --cached <filename>

# Ví dụ
git rm --cached .env

# Thêm file vào .gitignore để không bị track lại
echo ".env" >> .gitignore

# Commit thay đổi
git add .gitignore
git commit -m "chore: remove .env from tracking"
```

---

### 3️⃣ Đổi tên branch

```bash
# Đổi tên branch hiện tại
git branch -m <tên-mới>

# Ví dụ
git branch -m feature-login
```

---

### 4️⃣ Lưu commit hiện tại sang branch khác

Khi lỡ commit trên branch sai, muốn chuyển commit sang branch khác:

```bash
# Tạo branch mới tại vị trí hiện tại (giữ lại commit)
git branch other-branch

# Xóa commit trên branch hiện tại (quay lại trước đó 1 commit)
git reset --hard HEAD~

# Chuyển sang branch mới (commit vẫn còn ở đó)
git checkout other-branch
```

---

### 5️⃣ Commit nhầm & Xóa commit

#### `git reset --soft HEAD~`
Xóa commit nhưng **giữ thay đổi ở staging area** (đã `git add`):
```bash
git reset --soft HEAD~
# Thay đổi vẫn ở staged → sẵn sàng commit lại
```

#### `git reset HEAD~` (mixed - mặc định)
Xóa commit và **đưa thay đổi về working directory** (chưa `git add`):
```bash
git reset HEAD~
# Thay đổi ở working directory → cần git add lại
```

#### `git reset --hard HEAD~`
Xóa commit và **xóa luôn thay đổi** (⚠️ mất code):
```bash
git reset --hard HEAD~
# ⚠️ Mọi thay đổi bị xóa hoàn toàn!
```

#### `git revert <commit>`
Tạo commit **đảo ngược** — an toàn cho branch đã push:
```bash
git revert <commit-id>
# Tạo commit mới đảo ngược thay đổi, không thay đổi lịch sử
```

**So sánh các lệnh:**

| Lệnh | Thay đổi | Lịch sử | An toàn |
|---|---|---|---|
| `reset --soft` | Giữ ở staged | Xóa commit | ⚠️ Chỉ dùng local |
| `reset` (mixed) | Giữ ở working dir | Xóa commit | ⚠️ Chỉ dùng local |
| `reset --hard` | ❌ Xóa hết | Xóa commit | ❌ Nguy hiểm |
| `revert` | Tạo commit đảo ngược | Giữ nguyên | ✅ An toàn |

---

### 6️⃣ Kết hợp commits từ nhánh khác (Cherry-pick)

Lấy **một commit cụ thể** từ nhánh khác mà không cần merge cả nhánh:

```bash
# Lấy commit từ nhánh khác theo commit ID
git cherry-pick <commit-id>

# Ví dụ
git cherry-pick a1b2c3d
```

---

### 7️⃣ Đang làm việc & cần chuyển sang nhánh khác (Stash)

Khi đang code dở, cần chuyển sang branch khác xử lý gấp:

```bash
# Lưu tạm thay đổi hiện tại (bao gồm cả file untracked)
git stash -u

# Chuyển sang branch khác để xử lý
git checkout -b other-branch
git add .
git commit -m "fix: hotfix urgent"

# Quay lại branch cũ
git checkout origin-branch

# Lấy lại thay đổi đã stash
git stash pop
```

> 💡 `git stash -u` lưu cả file **untracked** (file mới tạo chưa `git add`).

---

### 8️⃣ Xóa nhầm commit quan trọng (Reflog)

Khi lỡ `reset --hard` mất commit quan trọng:

```bash
# Xem lịch sử mọi hành động (kể cả commit đã "xóa")
git reflog

# Tìm commit cần khôi phục trong danh sách reflog
# Khôi phục về commit đó
git reset --hard <commit-id>
```

> 💡 `git reflog` là **"lưới an toàn"** — Git lưu lại mọi thay đổi HEAD trong 30 ngày.

---

### 9️⃣ Gộp nhưng muốn hoàn tác (Undo Merge)

Khi đã merge nhưng muốn quay lại trạng thái trước khi merge:

```bash
# Chuyển về branch gốc (branch đã nhận merge)
git checkout <original-branch>

# Merge branch vào (nếu chưa merge)
git merge <merged-branch>

# Hoàn tác merge — quay về trạng thái trước khi merge
git reset --hard ORIG_HEAD
```

> 💡 `ORIG_HEAD` là con trỏ Git tự động lưu vị trí HEAD **trước** các thao tác nguy hiểm (merge, rebase, reset).

---

> 📌 **Ghi nhớ tổng hợp:**
> - Gộp commit → `git rebase -i HEAD~N`
> - Bỏ track file → `git rm --cached <file>`
> - Đổi tên branch → `git branch -m <tên-mới>`
> - Lưu tạm → `git stash -u` / `git stash pop`
> - Khôi phục commit → `git reflog` + `git reset --hard <commit>`
> - Lấy commit lẻ → `git cherry-pick <commit-id>`
> - Hoàn tác merge → `git reset --hard ORIG_HEAD`
