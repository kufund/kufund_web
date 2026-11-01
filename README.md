# KuFund 库丰基金

基于 Vue 3 + Vite 的响应式单页面官网。

## 本地开发

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`，每次构建会自动完整同步到 `docs/`（清理旧产物）。`dist/` 保持忽略，`docs/` 提交到仓库用于静态部署。资源使用相对路径，可部署到仓库子路径。

使用 GitHub Pages 时，在仓库 Settings → Pages 中选择从 `master` 分支的 `/docs` 目录发布。

页面文案在 src/main.js，样式在 src/style.css。公司介绍及策略为展示文案，上线前请替换为经确认的实际内容，并补充官方联系方式和备案信息。
