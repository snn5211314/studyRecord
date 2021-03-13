const moment = require('moment');

module.exports = {
    theme: 'reco',
    dest: 'blog',
    title: '流砂纵横',
    description: '放弃不难，但是坚持一定很酷。',
    logo: '/assets/img/logo.png',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      type: 'blog',
      logo: '/assets/img/logo.png',
      huawei: false,
      author: 'dreamer_zt',
      subSidebar: 'auto',
      authorAvatar: '/assets/img/logo.png',
      searchMaxSuggestions: 10, // 搜索出来的结果条数
      smoothScroll: true, // 页面滚动
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        }
      },
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
      nav:[
        { text: '主页', link: '/', icon: 'reco-home' },
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        { text: '随笔', link: '/notes/', icon: 'reco-document' }, // 内部链接 以docs为根目录
        // { 
        //   text: '目录索引',
        //   items: [
        //     { text: 'Vue', link: '/vue/mvvm原理' }
        //   ]
        // }, // 外部链接
        // 下拉列表
        {
          text: 'GitHub',
          icon: 'reco-github',
          items: [
            { text: 'GitHub地址', link: 'https://github.com/snn5211314/studyRecord', icon: 'reco-github' }
          ]
        }        
      ],
      sidebar: {},
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
          "link": "https://vuepress-theme-reco.recoluan.com/"
        }
      ]
    },
    plugins: [
      ['@vuepress/back-to-top', true]
      ['@vuepress/last-updated', {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }],
      [
        require('./plugins/BgMusic'),
        {
          audios: [
            {
              name: '能够成家吗',
              artist: '咖啡少年',
              url: 'https://assets.smallsunnyfox.com/music/1.mp3',
              cover: 'https://assets.smallsunnyfox.com/music/1.jpg'
            },
            {
              name: '江南地铁站4号出口',
              artist: 'Plastic / Fallin` Dild',
              url: 'https://assets.smallsunnyfox.com/music/2.mp3',
              cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
            },
            {
              name: '用胳膊当枕头',
              artist: '최낙타',
              url: 'https://assets.smallsunnyfox.com/music/3.mp3',
              cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
            }
          ]
        }
      ]
    ],
    markdown: {
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