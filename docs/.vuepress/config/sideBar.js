// leetcode笔记
function getLeetcode (groupA, groupB, groupC, groupD) {
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


function getNotes () {
  return []
}

function getBlog (groupA, groupB, groupC, groupD, groupE) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        {
          title: "JS基本功",
          collapsable: true,
          children: [
            "js/01-high-order-function",
            "js/02-array-deduplication",
            "js/03-array-order",
            "js/04-debounce-throttle"
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
        'ts/02-jichu',
        'ts/03-yinyong'
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

function getVue (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        "docs/01-mvvm",
      ],
    }, {
      title: groupB,
      collapsable: true,
      children: []
    }
  ]
}

module.exports = {
  getBlog,
  getNotes,
  getLeetcode,
  getVue
};
