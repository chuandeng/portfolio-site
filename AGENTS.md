# Lulu的站点 (Lulu's Personal Site)

## Project Overview

This is a personal website project for "lulu". The project is currently in the planning phase and has not been initialized yet.

**Project Name**: lulu的站点  
**Type**: Personal Website  
**Language**: Chinese (zh-CN) - This is the primary language used in project documentation

## Planned Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Vue 3 |
| Build Tool | Vite |
| Bundler | Rspack |
| Package Manager | pnpm |
| Internationalization | vue-i18n |
| Routing | Vue Router |

## Project Structure (Planned)

```
self-site-vue/
├── docs/               # Documentation and requirements
│   └── requirement.md  # Project requirements
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, fonts, styles
│   ├── components/     # Vue components
│   ├── composables/    # Vue composables
│   ├── i18n/           # Internationalization files
│   │   ├── locales/    # Translation files
│   │   └── index.ts    # i18n configuration
│   ├── router/         # Vue Router configuration
│   │   └── index.ts
│   ├── views/          # Page components
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── index.html          # HTML entry
├── package.json        # Dependencies and scripts
├── pnpm-lock.yaml      # pnpm lock file
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

## Build and Development Commands (Expected)

Once the project is initialized with pnpm:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Type check
pnpm type-check
```

## Code Style Guidelines

- **Language**: TypeScript preferred for type safety
- **Vue Style**: Composition API with `<script setup>` syntax
- **Component Naming**: PascalCase for components (e.g., `NavBar.vue`)
- **File Naming**: 
  - Components: PascalCase
  - Composables: camelCase with `use` prefix (e.g., `useTheme.ts`)
  - Utilities: camelCase
- **CSS**: Scoped styles in components, utility classes with a consistent naming convention

## Internationalization (i18n)

The project plans to use `vue-i18n` for multi-language support:

- Primary locale: `zh-CN` (Chinese Simplified)
- Locale files should be placed in `src/i18n/locales/`
- Use `$t()` or `t()` for translations in templates and code

## Dependencies to Install

Core dependencies:
- `vue@^3.x`
- `vue-router@^4.x`
- `vue-i18n@^9.x`

Development dependencies:
- `vite`
- `@vitejs/plugin-vue`
- `typescript`
- `vue-tsc`
- `eslint` + `eslint-plugin-vue` (optional)
- `prettier` (optional)

## Initialization Checklist

- [ ] Initialize project with `pnpm init`
- [ ] Install Vue 3 and dependencies
- [ ] Configure Vite with Rspack
- [ ] Setup Vue Router
- [ ] Setup vue-i18n
- [ ] Create base project structure
- [ ] Add TypeScript configuration
- [ ] Setup ESLint and Prettier (optional)

## Notes for AI Agents

1. This is a **new project** - no code exists yet
2. The requirements document is located at `docs/requirement.md`
3. Primary development language is Chinese, but code should use English naming conventions
4. Rspack is specified as the bundler - ensure Vite configuration uses Rspack for production builds
5. Consider using modern Vue 3 features: Composition API, `<script setup>`, and Vue 3's reactivity system
