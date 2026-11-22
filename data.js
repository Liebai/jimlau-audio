// ============================================================
//  网站内容配置文件 —— 你只需要改这个文件！
//  改完保存，刷新浏览器（Ctrl + F5）即可看到变化。
// ============================================================
//  使用说明：
//  1. 每个字段用双引号 "" 包起来，注意不要漏掉逗号。
//  2. 想要新增一个作品/教程/Demo，就复制一段 { ... }，改内容即可。
//  3. 网址（url）留空字符串 "" 表示这张卡片不可点击，只做展示。
//  4. emoji 字段可以换成任意图标字符，也可以留空 ""。
// ============================================================

const SITE_DATA = {

  // ---------- 网站基本信息 ----------
  site: {
    name: "Jim Lau",                        // 你的名字（页头大标题）
    title: "Game Designer / Music Designer", // 副标题
    description: "Jim Lau - Game Music Designer Portfolio", // 网页描述（搜索引擎显示）
    browserTitle: "Jim Lau · Game Music Designer",    // 浏览器标签页标题
  },

  // ---------- 社交链接 ----------
  // 每个 { label, url } 会生成一个圆形图标按钮。
  // label 是图标上显示的字（建议 2 个字母内），url 是链接地址。
  socials: [
    { label: "Bi", url: "https://space.bilibili.com/1533479443" },
    { label: "IG", url: "https://www.instagram.com/liujunyileo/" },
    // 想加别的社交，就取消下面某行注释并改成你的地址：
    // { label: "YT", url: "https://www.youtube.com/@你的频道" },
    // { label: "GH", url: "https://github.com/你的用户名" },
  ],

  // ---------- 导航菜单 ----------
  // 前面的 Home / 关于我 是固定项，这里可以追加。
  // id 对应页面里区块的锚点（#id），不要随意改。
  nav: [
    { label: "Showcase", id: "tutorials" },
    { label: "PIONEER PODCAST", id: "albums" },
    { label: "Contact", id: "contact" },
  ],

  // ---------- 首屏 Hero ----------
  hero: {
    heading: "",                                    // 大标题（留空则不显示）
    subtext: "<span class=\"big-name\">Jim Lau</span> is a game composer who has worked on <strong>TGA award-winning</strong> projects. He is a level music designer, jazz pianist, and educator.<br><br>A graduate of <strong>Hamburg Konservatorium</strong>, he now blends jazz, classical, and hybrid game music, with design experience spanning performance, level flow, and combat. His main project is Wuthering Waves.", // 简介
    image: "avatar.jpg",                          // 主头像（Hero 右侧展示）
    buttons: [],                                   // 左侧按钮（留空则不显示）
  },

  // ---------- 音乐设计教程（4 列卡片） ----------
  // color 是缩略图渐变的两个颜色，可换成任意十六进制颜色。
  // duration 是右下角显示的时长文字（没有就留空 ""）。
  tutorials: {
    title: "Showcase",
    loadMore: true,   // 是否显示 "Load More" 按钮
    items: [
      {
        title: "Wuthering Waves — Cinematic \"Faded Colors of the Past\"",
        desc: "Music design showcase for the Wuthering Waves cinematic \"Faded Colors of the Past\".",
        emoji: "🎬",
        color: ["#3a5a7a", "#1a3a5a"],
        duration: "",
        url: "https://www.youtube.com/watch?v=VHpI2w73UG4",
        thumb: "https://i.ytimg.com/vi/VHpI2w73UG4/hqdefault.jpg",
      },
      {
        title: "Jazz Piano analyse, basic concept of Improvisation",
        desc: "An open-class recording covering McCoy Tyner score analysis and the fundamentals of learning improvisation.",
        emoji: "🎹",
        color: ["#2b4a8a", "#1b2a5a"],
        duration: "",
        url: "https://www.bilibili.com/video/BV1ndYoeBEWc/",
        thumb: "thumb_jazz.jpg",
      },
      {
        title: "Mollo - Anomalie (Transcription)",
        desc: "A self-made transcription of Mollo - Anomalie, blending neo-jazz, hip-hop, and fusion.",
        emoji: "🎵",
        color: ["#5a2b8a", "#3a1b5a"],
        duration: "",
        url: "https://www.bilibili.com/video/BV1rt421V7UK/",
        thumb: "thumb_mollo.png",
      },
      {
        title: "Dust to Dust (Animated Short)",
        desc: "Animated short film \"Dust to Dust\" (formerly \"Song of Spring\").",
        emoji: "🎬",
        color: ["#2b8a6a", "#1b5a4a"],
        duration: "",
        url: "https://www.bilibili.com/video/BV1is4y1b75D/",
        thumb: "thumb_dust.jpg",
      },
    ],
  },

  // ---------- 专辑展示（劣白Leo 作品） ----------
  // 按专辑分组，每个专辑一个卡片，卡片内列出歌曲（点击跳转网易云）。
  // cover 是专辑封面图片地址；songs 里的每个 { name, url } 是一首歌。
  albums: {
    title: "PIONEER PODCAST",   // 电台标题（英文命名）
    subtitle: "Original Soundtrack · Wuthering Waves",   // 电台副标题
    avatar: "radio_avatar.jpg",   // 电台头像（页头左上角展示）
    links: [   // 电台标题右侧的平台链接（图标按钮）
      { label: "网易云", url: "https://music.163.com/#/artist?id=61908633" },
      { label: "Spotify", url: "https://open.spotify.com/artist/4NJxtQzTTeO3ObGlBcxVAh" },
    ],
    items: [
      {
        name: "Flowers in a Dream",
        cover: "https://p1.music.126.net/3Jrcqa09jqycEIFTqr0pYQ==/109951174265475879.jpg",
        songs: [
          { name: "The Dawn That Sheds Its Blue", url: "https://music.163.com/song?id=3460243466" },
        ],
      },
      {
        name: "Gilded Expectations",
        cover: "https://p2.music.126.net/k_n0DPRicXuycb0EGDcwmA==/109951172899853123.jpg",
        songs: [
          { name: "Unraveling of a Fantasy", url: "https://music.163.com/song?id=3360103822" },
          { name: "Alice in Celebration", url: "https://music.163.com/song?id=3360103991" },
          { name: "A Fantasy in Reverse", url: "https://music.163.com/song?id=3360104200" },
        ],
      },
      {
        name: "Dawn over the Ruins",
        cover: "https://p2.music.126.net/kNPEUo3bONlxZsczS4yZZg==/109951172323559804.jpg",
        songs: [
          { name: "Good Weather, Now Open", url: "https://music.163.com/song?id=3320477243" },
        ],
      },
      {
        name: "Beneath the Stars of the Old Night",
        cover: "https://p1.music.126.net/yCUUZVNw7qVTJlvePmig2A==/109951173136952043.jpg",
        songs: [
          { name: "The Vastness Before Us", url: "https://music.163.com/song?id=3375695069" },
        ],
      },
      {
        name: "Traveler over the Mountains",
        cover: "https://p1.music.126.net/t4uIUR0k3BNa2b99o3NwJw==/109951172214342951.jpg",
        songs: [
          { name: "Amidst the Dancing Leaves", url: "https://music.163.com/song?id=3312593489" },
        ],
      },
      {
        name: "Songs for the Waking Moon",
        cover: "https://p2.music.126.net/9XzdlfZRTkh3Jvi154xY7Q==/109951174022349550.jpg",
        songs: [
          { name: "Lanterns Adrift in Night", url: "https://music.163.com/song?id=3442262607" },
          { name: "Lost in Mist", url: "https://music.163.com/song?id=3442262612" },
        ],
      },
      {
        name: "Until the Snow Settles",
        cover: "https://p1.music.126.net/bcPoZi450HwlvuByZ6mkwQ==/109951172802863204.jpg",
        songs: [
          { name: "Together Through Wind and Snow", url: "https://music.163.com/song?id=3353474537" },
        ],
      },
      {
        name: "Myriad Notes, Ever New",
        cover: "https://p2.music.126.net/ZVDI1qxhYd3b7woGmhf7Cg==/109951173538451935.jpg",
        songs: [
          { name: "Shades of Lone Hold", url: "https://music.163.com/song?id=3405074872" },
          { name: "Pastoral Joy", url: "https://music.163.com/song?id=3405072671" },
          { name: "Trailing a Dream", url: "https://music.163.com/song?id=3405072672" },
        ],
      },
      {
        name: "Fly Toward Spring",
        cover: "https://p1.music.126.net/Tj5woehFiGtBDKZWMmGPzA==/109951172703405877.jpg",
        songs: [
          { name: "A Silent Watcher", url: "https://music.163.com/song?id=3347276385" },
        ],
      },
      {
        name: "Second Sunrise",
        cover: "https://p2.music.126.net/6oSC_H7mbvBksDK8IZ6hxQ==/109951172592011588.jpg",
        songs: [
          { name: "Starlight Shall Not Fall", url: "https://music.163.com/song?id=3339524413" },
        ],
      },
      {
        name: "Dawn Breaks",
        cover: "https://p2.music.126.net/by1F-_BE9og-5Kl05nthBg==/109951172134008190.jpg",
        songs: [
          { name: "Harbinger of the Tide", url: "https://music.163.com/song?id=2754309219" },
        ],
      },
    ],
  },

  // ---------- 能力 / 技能（胶囊标签展示） ----------
  abilities: {
    title: "Abilities",
    items: [
      "Ableton",
      "Cubase",
      "Mix",
      "English",
      "Deutsch",
    ],
  },

  // ---------- 合作方（胶囊标签展示） ----------
  partners: {
    title: "Partners",
    items: [
      "Dove",
      "Huawei",
    ],
  },

  // ---------- 联系我 ----------
  contact: {
    title: "Contact",
    text: "",
    email: "liujunyi.lb@foxmail.com",   // 你的邮箱
  },

  // ---------- 页脚 ----------
  footer: {
    copyright: "© 2026 by Jim Lau · Game Design",
    chatLabel: "Let's Chat!",   // 右下角悬浮按钮文字
  },
};
