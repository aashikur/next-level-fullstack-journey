Git & GitHub — Core Cheat Sheet

Daily Feature Workflow

# 1. Update main
git switch main
git pull origin main

# 2. Create feature branch
git switch -c feature/login

# 3. Work → save
```javascript
git add .
git commit -m "feat: add login"
```
# 4. Push feature
git push -u origin feature/login

# 5. Continue working
git add .
git commit -m "feat: update login"
git push

# 6. Feature finished → merge
git switch main
git pull origin main
git merge feature/login
git push origin main

# 7. Cleanup
git branch -d feature/login
git push origin --delete feature/login

Branch

git branch                  # list branches
git switch main             # switch branch
git switch -c feature/name  # create + switch
git branch -d feature/name  # delete local branch

Check Changes

git status
git diff
git log --oneline

Remote

git fetch origin            # check/download remote changes
git pull origin main        # fetch + update current branch
git push                    # upload commits

Undo / Recovery

git restore .               # discard unstaged changes
git stash                   # temporarily save changes
git stash pop               # restore stash
git merge --abort           # cancel merge
git revert <commit>         # safely undo a pushed commit

Commit Format

feat: new feature
fix: bug fix
refactor: restructure code
docs: documentation

Branch Naming

feature/login
feature/cart
feature/payment

fix/login-error
fix/mobile-navbar

Mental Flow

main
 ↓
create feature branch
 ↓
code
 ↓
add → commit → push
 ↓
finish
 ↓
switch main
 ↓
pull
 ↓
merge
 ↓
push
 ↓
delete feature branch

Next Topics

1. Merge Conflicts
2. "git merge" vs "git rebase"
3. "HEAD" / "origin" / "origin/main"
4. "git reset"
5. Pull Requests
6. GitHub Actions / CI/CD
