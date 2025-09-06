import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小白AI",
  description: "WhiteAI — Simplifying AI for everyone. Practical tutorials, workflows, and insights that make AI easy to understand and apply.",
  outDir: '.vitepress/dist',
  base: '/ai-book/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'AI 知识科普', link: '/ai-book' },
      { text: 'n8n教程', link: '/n8n-book' }
    ],

    sidebar: {
      '/ai-book': [
        {
          text: 'AI 知识科普',
          items: [
            { text: '初识AI', link: '/ai-book' },
            { text: '机器学习基础', link: '/ai-book/ml-basics' },
            { text: '深度学习入门', link: '/ai-book/dl-intro' },
            { text: '自然语言处理', link: '/ai-book/nlp' },
            { text: '计算机视觉', link: '/ai-book/cv' },
          ]
        }
      ],
      '/n8n-book': [
        {
          text: 'n8n 教程',
          items: [
            { text: 'n8n 入门', link: '/n8n-book' },
            { text: '工作流设计', link: '/n8n-book/workflow-design' },
            { text: '节点使用指南', link: '/n8n-book/nodes-guide' },
            { text: '自动化场景', link: '/n8n-book/automation-scenarios' },
            { text: '高级技巧', link: '/n8n-book/advanced-tips' },
          ]
        }
      ],
      '/': [
        {
          text: '快速导航',
          items: [
            { text: 'AI 知识科普', link: '/ai-book' },
            { text: 'n8n 教程', link: '/n8n-book' },
          ]
        }
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
