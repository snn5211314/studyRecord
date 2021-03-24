var sideBar = require('./config/sideBar');

module.exports = {
    theme: 'reco',
    dest: 'blog',
    title: '流沙纵横',
    description: '放弃不难，但是坚持一定很酷。',
    head: [
        ['link', { rel: 'icon', href: 'logo.png' }],
    ],
    base: '/blog/', 
    themeConfig: {
      noFoundPageByTencent: false, // 关闭腾讯公益
      author: 'dreamer_zt',
      subSidebar: 'auto',
      authorAvatar: 'logo.png',
      searchMaxSuggestions: 10, // 搜索出来的结果条数
      smoothScroll: true, // 页面滚动
      // blogConfig: {
      //   category: {
      //     location: 2,     // 在导航栏菜单中所占的位置，默认2
      //     text: 'Category' // 默认文案 “分类”
      //   },
      //   tag: {
      //     location: 3,     // 在导航栏菜单中所占的位置，默认3
      //     text: 'Tag'      // 默认文案 “标签”
      //   }
      // },
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
      nav:[
        { text: '主页', link: '/', icon: 'reco-home' },
        {
          text: "指南",
          ariaLabel: "了解更多",
          items: [
            {
              items: [
                {
                  text: "leetcode解题",
                  link: "/leetcode/",
                }
              ]
            },
            {
              items: [
                {
                  text: "博客",
                  link: "/blog/",
                }
              ]
            }
          ]
        },
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        { text: '随笔', link: '/notes/', icon: 'reco-document' }, // 内部链接 以docs为根目录
        {
          text: 'GitHub',
          icon: 'reco-github',
          items: [
            { text: 'GitHub地址', link: 'https://github.com/snn5211314/studyRecord', icon: 'reco-github' }
          ]
        }        
      ],
      sidebar: {
        "/notes/": sideBar.getNotes(),
        // "/vue/": getVue("mini-vue", "vue3.0"),
        "/leetcode/": sideBar.getLeetcode("简单", "中等", "困难", "面试真题"),
        "/blog/": sideBar.getBlog("JS", "CSS", "HTML", "其它"),
      },
      friendLink: [
        {
          "title": "Lucifer",
          "desc": "Everything can be expected in the future.",
          "email": "2050180797@qq.com",
          "logo": "https://nightliuguoxing-github-io.vercel.app/img/avatar.jpg",
          "link": "https://love.liuguoxing.top"
        },
        {
          "title": "午后南杂",
          "desc": "一款简洁而优雅的 vuepress 博客 & 文档 主题。",
          "email": "无",
          "link": "https://www.recoluan.com/"
        }
      ]
    },
    plugins: [
      // [
      //   require('./plugins/BgMusic'),
      //   {
      //     audios: [
      //       {
      //         name: '能够成家吗',
      //         artist: '咖啡少年',
      //         url: 'https://assets.smallsunnyfox.com/music/1.mp3',
      //         cover: 'https://assets.smallsunnyfox.com/music/1.jpg'
      //       },
      //       {
      //         name: '江南地铁站4号出口',
      //         artist: 'Plastic / Fallin` Dild',
      //         url: 'https://assets.smallsunnyfox.com/music/2.mp3',
      //         cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
      //       },
      //       {
      //         name: '用胳膊当枕头',
      //         artist: '최낙타',
      //         url: 'https://assets.smallsunnyfox.com/music/3.mp3',
      //         cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
      //       }
      //     ]
      //   }
      // ]
    ],
    markdown: {
      lineNumbers: true, // 代码块显示行号
      extendMarkdown: md => {
        md.use(require("markdown-it-disable-url-encode"));
      }
    },
    devServer : {
        hot: true,
        open : true,
        port : 8080,
        host : "127.0.0.1"
    }
}
