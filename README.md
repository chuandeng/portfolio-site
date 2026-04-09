# Lulu的站点

个人网站项目，使用 Vue 3 + Vite 构建。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **TypeScript** - 类型安全的 JavaScript
- **Vue Router** - 官方路由管理
- **Vue I18n** - 国际化支持
- **pnpm** - 高效的包管理器

## 开发命令

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 类型检查
pnpm type-check
```

## 项目结构

```
self-site-vue/
├── public/             # 静态资源
├── src/
│   ├── assets/         # 图片、字体、样式
│   ├── components/     # Vue 组件
│   ├── composables/    # Vue 组合式函数
│   ├── i18n/           # 国际化配置
│   │   ├── locales/    # 翻译文件
│   │   └── index.ts    # i18n 配置
│   ├── router/         # 路由配置
│   │   └── index.ts
│   ├── views/          # 页面组件
│   ├── App.vue         # 根组件
│   ├── main.ts         # 应用入口
│   └── vite-env.d.ts   # Vite 类型声明
├── docs/               # 文档
├── index.html          # HTML 入口
├── package.json        # 依赖配置
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```

## 开发规范

- 使用 Composition API 和 `<script setup>` 语法
- 组件命名使用 PascalCase
- 组合式函数使用 camelCase 并以 `use` 开头
- 样式使用 Tailwind CSS

## 部署

### GitHub Pages 自动部署

项目已配置 GitHub Actions，推送到 `main` 分支会自动触发部署。

**启用步骤：**

1. 进入仓库 **Settings → Pages**
2. **Source** 选择 "GitHub Actions"
3. 推送代码到 `main` 分支

部署完成后，网站将发布到：
`https://<username>.github.io/self-site-vue/`

### 手动部署

```bash
pnpm build
# 将 dist 目录部署到静态托管服务
```

### CI 检查

每次 PR 和推送都会自动运行：
- 类型检查 (`pnpm type-check`)
- 构建测试
