# Tổng hợp kiến thức Git

## 1. Cài đặt và cấu hình
```bash
git --version
git config --global user.name "Tên"
git config --global user.email "email@example.com"
git config --list
```

## 2. Repository và trạng thái
```bash
git init
git clone <url>
git status
git log --oneline --graph --all
git diff
git diff --staged
```
- **Working tree**: file đang chỉnh sửa.
- **Staging area**: thay đổi đã chọn để commit.
- **Repository**: lịch sử commit.

## 3. Commit
```bash
git add <file>                 # stage file
git add .                      # stage thay đổi trong thư mục
git commit -m "Mô tả thay đổi"
git commit -am "..."           # add + commit file đã được track
git show <commit>
```
Commit nên nhỏ, có mục đích rõ và không chứa file nhạy cảm.

## 4. Branch
```bash
git branch                      # xem branch
git branch <name>               # tạo branch
git switch <name>               # chuyển branch
git switch -c <name>            # tạo và chuyển
git branch -d <name>            # xóa branch đã merge
git branch -m <new-name>        # đổi tên
git branch -vv
```
Branch dùng để tách công việc; thường không commit trực tiếp vào `main`.

## 5. Remote
```bash
git remote -v
git remote add origin <url>
git fetch origin
git pull --rebase origin <branch>
git push -u origin <branch>
git push
```
- `fetch` chỉ tải dữ liệu; `pull` tải rồi tích hợp.
- Kiểm tra branch và diff trước khi push.

## 6. Merge và rebase
```bash
git merge <branch>
git rebase <base-branch>
git rebase -i HEAD~N
git cherry-pick <commit>
```
- **Merge** giữ lịch sử phân nhánh và tạo merge commit.
- **Rebase** viết lại commit để lịch sử thẳng; không rebase commit đã chia sẻ nếu chưa thống nhất.
- Khi conflict: sửa dấu conflict → `git add` → `git commit` (merge) hoặc `git rebase --continue`.
```bash
git merge --abort
git rebase --abort
```

## 7. Stash
```bash
git stash -u
git stash list
git stash pop
git stash apply stash@{0}
git stash drop stash@{0}
```
Dùng để cất thay đổi tạm thời trước khi chuyển branch.

## 8. Hoàn tác và khôi phục
```bash
git restore <file>              # bỏ thay đổi chưa stage
git restore --staged <file>     # bỏ stage
git revert <commit>              # tạo commit đảo ngược an toàn
git reset --soft HEAD~1          # bỏ commit, giữ staged
git reset --mixed HEAD~1         # bỏ commit, giữ working tree
git reset --hard HEAD~1          # bỏ cả thay đổi; nguy hiểm
git reflog                       # tìm lại vị trí HEAD
```
- `revert` phù hợp với lịch sử đã push.
- `reset --hard` có thể làm mất dữ liệu; kiểm tra `git status` trước.

## 9. File và tag
```bash
git rm <file>
git rm --cached <file>           # bỏ track, giữ file local
git tag v1.0.0
git push origin v1.0.0
git clean -n                     # xem file chưa track sẽ xóa
git clean -fd                    # xóa; dùng thận trọng
```
Thêm file không cần commit vào `.gitignore`.

## Ghi nhớ nhanh
- Quy trình: `status` → `add` → `commit` → `pull` → `push`.
- Tách commit: `git rebase -i HEAD~N`.
- Commit lẻ: `git cherry-pick <id>`.
- Tìm commit mất: `git reflog`.
- Hoàn tác merge: `git reset --hard ORIG_HEAD` khi chắc chắn muốn quay lại.
