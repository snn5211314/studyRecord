// leetcode笔记
function getLeetcode(groupA, groupB, groupC, groupD) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        "docs/simple/01-liangshuzhihe",
        "docs/simple/07-zhengshufanzhuan",
        "docs/simple/09-huiwenshu",
        "docs/simple/13-luomashuzuzhuanzhengshu"  
      ],
    },
    {
      title: groupB,
      collapsable: true,
      children: [],
    },
    {
      title: groupC,
      collapsable: true,
      children: [],
    },
    {
      title: groupD,
      collapsable: true,
      children: [],
    },
  ];
}


function getNotes() {
  return []
}

function getBlog(groupA, groupB, groupC, groupD, groupE) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        {
          title: "JS基本功",
          collapsable: true,
          children: [
            "js/01-gaojiehanshu",
            "js/02-shuzuquchong",
            "js/03-shuzupaixu",
            "js/04-fangdoujieliu"
          ]
        }
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: [
        "css/flex",
      ]
    },
    {
    title: groupC,
    collapsable: true,
    children: [
      'ts/',
      'ts/01-zhunbei',
      'ts/02-jichu'
    ],
    },
    {
      title: groupD,
      collapsable: true,
      children: [
        {
          title: "Git",
          collapsable: true,
          children: [
            "other/git/git"
          ],
        }
        // {
        //   title: "零碎知识",
        //   collapsable: true,
        //   children: [],
        // },
      ]
    }
  ];
}
module.exports = {
  getBlog,
  getNotes,
  getLeetcode
};
