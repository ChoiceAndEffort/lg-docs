<!--
 * @Author: lg
 * @Date: 2024-01-26 19:00:11
 * @LastEditors: lg
 * @LastEditTime: 2024-01-29 09:24:34
 * @Description:
 * @FilePath: \lg-eng\packages\lg-docs\docs\standard\git\index.md
-->

# GIT 提交规范

## git commit msg 相关类型

```sh
  types: [
    { value: 'feat', name: 'feat: 新增功能' },
    { value: 'fix', name: 'fix: 修复 bug' },
    { value: 'docs', name: 'docs: 文档变更' },
    {
      value: 'style',
      name: 'style: 代码格式（不影响功能，例如空格、分号等格式修正）'
    },
    {
      value: 'refactor',
      name: 'refactor: 代码重构（不包括 bug 修复、功能新增）'
    },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 添加、修改测试用例' },
    {
      value: 'build',
      name: 'build: 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）'
    },
    { value: 'ci', name: 'ci: 修改 CI 配置、脚本' },
    {
      value: 'chore',
      name: 'chore: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'
    }

```
