import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小白AI",
  description: "WhiteAI — Simplifying AI for everyone. Practical tutorials, workflows, and insights that make AI easy to understand and apply.",
  outDir: '.vitepress/dist',
  base: '/ai-book/',
  srcDir: '.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'AI 知识科普', link: '/ai-book/init' },
      { text: 'n8n教程', link: '/ai-n8n/init' }
    ],

    sidebar: {
      '/ai-book': [
        {
          text: 'AI 知识科普',
          items: [
            { text: '初识AI', link: '/ai-book/init' },
            { text: '机器学习基础', link: '/ai-book/ml-basics' },
            { text: '深度学习入门', link: '/ai-book/dl-intro' },
            { text: '自然语言处理', link: '/ai-book/nlp' },
            { text: '计算机视觉', link: '/ai-book/cv' },
          ]
        }
      ],
      '/ai-n8n': [
        {
          text: 'n8n 教程',
          items: [
            { text: 'n8n 入门', link: '/ai-n8n/init' },
            { text: '工作流设计', link: '/ai-n8n/workflow-design' },
            { text: '节点使用指南', link: '/ai-n8n/nodes-guide' },
            { text: '自动化场景', link: '/ai-n8n/automation-scenarios' },
            { text: '高级技巧', link: '/ai-n8n/advanced-tips' },
          ]
        }
      ],
      '/': [
        {
          text: '快速导航',
          items: [
            { text: 'AI 知识科普', link: '/ai-book/init' },
            { text: 'n8n 教程', link: '/ai-n8n/init' },
          ]
        }
      ]
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
