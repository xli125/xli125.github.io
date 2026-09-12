# Xiaoling Li 个人网站维护说明

本仓库是网站的长期源码记录。页面、论文数据、照片、样式、交互脚本、依赖版本和自动部署流程都保存在 Git 中，不依赖聊天记录或私密预览才能维护。

## 网站地址与发布方式

- 公开网站：<https://xli125.github.io/>
- 原仓库：<https://github.com/xli125/xli125.github.io>
- 私密设计预览：<https://xiaoling-li-publications-review.xiaolingli125.chatgpt.site/>

顶部导航固定为 **Home / Research / Publication / Blog**。保留原论文地址 `/publications/`，所以之前分享的论文页面链接仍然有效。

现有 `.github/workflows/deploy.yml` 的流程：

1. 提交 PR 后，GitHub Actions 运行 Ruby 3.3.5、Jekyll 构建和 CSS 清理；PR 不执行公开部署步骤。
2. 审核通过并合并到 `main` 后，工作流重新构建，再把 `_site` 输出交给现有 GitHub Pages 部署动作。
3. Actions 中构建和 Pages 发布完成后，公开网址会显示新版本。

保留目前 GitHub Settings → Pages 的配置。本仓库使用已有的构建并推送发布分支流程，不要把未经构建的源码直接作为静态网页上传，也不需要为这次改版新建仓库。

Pages 的设置属于 GitHub 仓库配置，不会随普通文件一起克隆。迁移仓库时需另行核对。官方说明：<https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>。

私密预览与 GitHub Pages 是两个独立发布位置。更新 GitHub 不会自动更新私密预览，反之亦然。以本仓库的 `main` 为长期维护的主版本。

## 要改什么，编辑哪个文件

| 内容                                           | 源文件                                |
| ---------------------------------------------- | ------------------------------------- |
| 首页照片说明、个人介绍、研究概述               | `_pages/about.md`                     |
| Research 研究主线与成果                        | `_pages/research.md`                  |
| Publication 页面结构与 featured 选择           | `_pages/publications.md`              |
| 所有论文的标题、作者、期刊、年份、DOI、PDF     | `_bibliography/papers.bib`            |
| Featured 卡片标题、简述和作者身份              | `_layouts/publication-feature.liquid` |
| 论文列表、作者展开、文章链接                   | `_layouts/publication-entry.liquid`   |
| Blog 首页与文章筛选                            | `_pages/blog.md`                      |
| 博客文章版式                                   | `_layouts/personal-post.liquid`       |
| 四页共用的导航、页脚、联系链接、网页元信息     | `_layouts/personal.liquid`            |
| 论文页兼容布局                                 | `_layouts/publications.liquid`        |
| 页面基础配色、字体、论文卡片、列表、响应式规则 | `assets/css/publications.css`         |
| Home、Research、Blog 与共用页脚的样式          | `assets/css/personal.css`             |
| 深色模式、搜索、年份筛选与年份导航             | `assets/js/publications.js`           |
| 个人照片                                       | `assets/img/prof_pic.jpg`             |
| 简历 PDF                                       | `assets/pdf/cv2.pdf`                  |
| 三篇 featured 论文的首页缩略图                 | `assets/img/publications/`            |
| 网站标题、网址、Jekyll Scholar 等全局配置      | `_config.yml`                         |
| Ruby 依赖和锁定版本                            | `Gemfile`、`Gemfile.lock`             |
| 自动构建与公开部署                             | `.github/workflows/deploy.yml`        |
| CSS 清理规则                                   | `purgecss.config.js`                  |

## 当前设计与内容约定

- 延续原网站紫色重点色，正文使用系统无衬线字体，主要标题使用 Georgia 衬线字体，不需要加载外部字体服务。
- 四个主页面共用同一个布局，并高亮当前菜单；CV、Google Scholar、ORCID 和邮箱入口放在页脚。
- 桌面使用三列 featured 卡片，窄屏改为纵向布局；已检查 320–1440px 宽度。
- 深浅色模式默认跟随系统。访客手动选择后保存在其浏览器 `localStorage` 的 `theme` 项中；这是访客偏好，不是需要备份到 GitHub 的网站配置。
- `prefers-reduced-motion` 用户不会看到平滑滚动或卡片动画。
- 完整论文列表由 Jekyll Scholar 读取原 `papers.bib` 生成。不要手动编辑发布分支里的 HTML。
- Home 和 Publication 各自有 featured 查询；调整选择时应同步编辑这两页及 featured 模板。
- Blog 仅列出采用 `personal-post` 布局的文章，不把 al-folio 自带演示文章当成个人博客。既有示例文件及其旧路径未被删除。
- Research 的未来研究方向与已发表成果分开描述；公开网站不要添加未经确认的未发表数据。
- `personal.css` 和 `publications.css` 从自动 CSS 清理中排除，以保留深色模式、展开状态及其他运行时样式；其他主题样式继续使用原流程。

## 新增一篇博客

在 `_posts/` 中新增文件，例如 `2026-09-12-research-notes.md`：

```markdown
---
layout: personal-post
section: blog
title: "文章标题"
description: "用于文章列表的一句话摘要"
---

在这里写 Markdown 正文。
```

文件名使用真实发布日期。Jekyll 默认不会发布日期在未来的文章。使用上述布局的文章会自动出现在 Blog 列表中。

## 日常修改与检查

推荐通过新分支和 PR 更新，避免直接覆盖已发布版本：

```sh
git clone https://github.com/xli125/xli125.github.io.git
cd xli125.github.io
git switch -c update/site-content
# 编辑相应页面或数据文件
git add <你修改的文件>
git commit -m "Update website content"
git push -u origin update/site-content
```

在 GitHub 创建 PR，检查页面内容和 Actions 结果后再合并。已有本地仓库时，先在干净的 `main` 分支执行 `git pull --ff-only`，再创建更新分支。

本地预览沿用项目现有环境：

```sh
bundle install
bundle exec jekyll serve
```

完整生产构建使用 `JEKYLL_ENV=production bundle exec jekyll build`。以 GitHub Actions 中的环境和依赖安装步骤为准。格式检查使用仓库配置的 Prettier 和 Liquid 插件。

每次改动至少检查：四个导航入口、手机显示、featured 链接、论文搜索和年份筛选、深色模式、照片和 CV。新增文章还应检查文章列表和文章详情页。

## 版本保存与回滚

每次 Git 提交都会记录当时的源码和配置，可通过提交记录查看差异、找回文件或恢复版本。GitHub 本身已保存这次新增图片和现有照片、PDF，不需要依赖临时 ZIP。

- 小问题：在新分支修复，经过 PR 检查后合并。
- 整次更新需要撤销：为对应合并创建 revert PR，审核后合并。不要直接删除部署分支或强制覆盖历史。
- 离线备份：克隆仓库，或下载某次提交的 ZIP；如需完整提交历史，使用克隆而非仅下载 ZIP。

公开域名、Pages 发布来源、仓库访问权限和 Actions secrets 属于 GitHub 平台设置，应另行记录与核对；不要把令牌或密码写进本仓库。本次整合没有新增应用密钥、数据库或生产环境依赖。
