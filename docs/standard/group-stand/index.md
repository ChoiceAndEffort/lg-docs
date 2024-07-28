# 团队协作开发规范

## 开发规范

- 统一的命名规范
- 统一的目录结构
- 统一的代码规范
- 统一的代码提交规范

## 团队协作检查代码提交规范

> prettier+eslint+husky+lint-staged

### 团队协作检查代码提交规范原理

- 提交前针对本次修改的的执行 eslint 检查(在 git 的 pre-commit 钩子中执行 )
- 针对 git commit msg 执行检查 (在 git 的 commit-msg 钩子中执行 )
- https://zhuanlan.zhihu.com/p/638039824