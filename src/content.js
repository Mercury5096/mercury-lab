import { assetPath } from "./assetPath";

const copy = (en, zh = null) => ({ en, zh });
const displayStatus = {
  descriptive: copy("Can describe, image pending", "可描述，影像待補"),
  evidence: copy("Selected evidence available", "已有精選證據"),
  abstract: copy("Abstract only", "僅抽象描述"),
};

export const brand = {
  name: "Mercury Lab",
  subtitle: copy(
    "A Content Production Experiment from Print to AI",
    "從印刷到 AI 的內容製作實驗",
  ),
  positioning: copy(
    "A practice spanning print publishing, content workflows, multimedia design, and AI-assisted interactive storytelling.",
    "跨越印刷出版、內容流程、多媒體設計與 AI 輔助互動敘事的實踐。",
  ),
};

export const sectionContent = {
  hero: {
    eyebrow: copy("Content Production Experiment / 2002 - Present", "內容製作實驗 / 2002 至今"),
  },
  factory: {
    eyebrow: copy("Content Factory Cutaway", "內容工廠剖面圖"),
    title: copy("Eight rooms. One accumulated method.", "八個房間，一套累積出來的方法。"),
    description: copy(
      "Select a production room to open its module manual. Every public display decision is routed through evidence and rights review.",
      "選擇一個製作房間，打開它的模組說明。所有公開展示都以證據、角色邊界與權利意識為前提。",
    ),
  },
  usage: {
    eyebrow: copy("How to Read Mercury", "如何閱讀 Mercury"),
    title: copy("Start with the work, then follow the method.", "先看作品，再看方法。"),
    description: copy(
      "This portfolio is organized for people who need to understand capability quickly: selected proof first, then the production logic behind it.",
      "這個作品集是為需要快速判斷能力的人整理的：先看精選證據，再看背後的製作邏輯。",
    ),
  },
  modes: {
    eyebrow: copy("Processing Modes", "製作路徑"),
    title: copy("Choose a route through the factory.", "選擇一條穿過工廠的閱讀路線。"),
  },
  cases: {
    eyebrow: copy("Selected Work Evidence", "精選作品證據"),
    title: copy("Proof you can open, scan, and verify.", "可以打開、瀏覽、確認的作品證據。"),
    description: copy(
      "These case files collect the clearest public samples from each stage. Open the evidence label to view larger images or linked project records.",
      "這裡整理每個階段最清楚、適合公開瀏覽的作品樣本。點開證據標籤，可以查看較大的圖片或外部作品連結。",
    ),
  },
  protocol: {
    eyebrow: copy("Collaboration Opportunities", "可合作方向"),
    title: copy("Work I can support", "我可以支援的工作"),
    statement: copy(
      "I am open to full-time roles, project-based collaboration, and consulting-style support where cross-media production, content judgment, and AI-assisted prototyping need to connect into a practical workflow.",
      "我適合全職職缺、專案合作或顧問式支援，尤其是需要把跨媒體製作、內容判斷與 AI 輔助原型整合成實際流程的工作。",
    ),
    rules: [
      copy("Content planning, editorial production, copywriting, layout coordination, and publication-oriented delivery.", "內容企劃、編輯製作、文案撰寫、排版協調與出版導向交付。"),
      copy("E-commerce and campaign visual production, including marketplace banners, product-image formatting, and promotion assets.", "電商與活動視覺製作，包含平台橫幅、商品圖格式化與促銷素材。"),
      copy("Multimedia projects from concept, script, storyboard, filming direction, editing, motion production, and web presentation.", "多媒體專案，包含概念企劃、腳本、分鏡、拍攝導向、剪輯、動態製作與網頁呈現。"),
      copy("AI-assisted interactive narrative, marketing video, game/story prototype, and workflow-tool prototyping with human review.", "AI 輔助互動敘事、行銷影片、遊戲/故事原型與工作流程工具原型，並保留人工審核。"),
      copy("Cross-functional coordination for projects that need communication between creative, technical, vendor, and business sides.", "跨部門協調，適合需要串接創意、技術、外包/供應商與商業需求的專案。"),
    ],
  },
};

export const rooms = [
  {
    id: "print-engine-room",
    code: "01",
    diagram: {
      area: "print",
      zone: copy("Publishing Foundation", "出版基礎區"),
      route: "publishing",
      callout: copy("Prepress / Input", "印前 / 輸入"),
    },
    title: copy("Print Engine Room", "印刷引擎室"),
    period: "2002-2003",
    discipline: copy("Comic layout and print prepress", "漫畫排版與印刷前製"),
    summary: copy(
      "Began in comic layout and print production, building hands-on understanding of prepress detail and publication delivery.",
      "從漫畫排版與印刷製作起步，累積印刷前製細節與出版交付的實務理解。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected print layout materials", "LinkedIn 記錄；精選印刷排版材料"),
    display: copy("Selected print and promotional layout materials.", "展示精選印刷與宣傳版面材料。"),
    proof: {
      label: copy("Selected print layout materials", "精選印刷排版材料"),
      layout: "print",
      outcome: copy(
        "Early print-production work across comic layout adaptation, leaflet and brochure layout, dense information formatting, and prepress delivery.",
        "早期印刷出版工作，涵蓋漫畫排版調整、宣傳單與手冊版面、密集資訊編排與印前交付。",
      ),
      roles: [
        copy("Comic layout adaptation", "漫畫版面調整"),
        copy("Translated text fitting", "翻譯文字嵌排"),
        copy("Leaflet layout", "宣傳單排版"),
        copy("Brochure formatting", "手冊版面編排"),
        copy("Prepress delivery support", "印刷前製支援"),
      ],
      assets: [
        {
          src: assetPath("/assets/factory/print/selected-print-00.jpg"),
          alt: "Selected Malay-translated Hong Kong comic layout and print material.",
        },
        {
          src: assetPath("/assets/factory/print/selected-print-01.jpg"),
          alt: "Selected leaflet and brochure layout work from Mercury's early print-production period.",
        },
        {
          src: assetPath("/assets/factory/print/selected-print-02.jpg"),
          alt: "Additional selected leaflet and brochure layout work from Mercury's early print-production period.",
        },
      ],
    },
  },
  {
    id: "editorial-kitchen",
    code: "02",
    diagram: {
      area: "editorial",
      zone: copy("Publishing Foundation", "出版基礎區"),
      route: "publishing",
      callout: copy("Editorial / Repeat Cycle", "編輯 / 週期交付"),
    },
    title: copy("Editorial Kitchen", "編輯廚房"),
    period: "2003-2004",
    discipline: copy("Magazine, cookbook, food content, and writing", "雜誌、食譜、美食內容與寫作"),
    summary: copy(
      "Completed layout work for 24 food and lifestyle magazine issues, combining editorial rhythm, visual organization, and print deadlines.",
      "完成 24 期美食生活雜誌排版工作，累積編輯節奏、視覺組織與印刷截稿經驗。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected food editorial, copywriting, and layout materials", "LinkedIn 記錄；精選美食編輯、文案與排版材料"),
    display: copy("Selected food editorial, copywriting, and layout materials.", "展示精選美食編輯、文案與版面材料。"),
    proof: {
      label: copy("Selected magazine and editorial production materials", "精選雜誌與編輯製作材料"),
      layout: "editorial",
      outcome: copy(
        "Food and lifestyle editorial work across writing, interview-style copy, page layout, cover/page design, and print-oriented delivery.",
        "美食與生活內容編輯工作，涵蓋寫稿、採訪式文案、版面編排、封面/頁面設計與印刷導向交付。",
      ),
      roles: [
        copy("Food writing", "美食寫作"),
        copy("Interview-style copywriting", "採訪式文案"),
        copy("Editorial layout", "編輯排版"),
        copy("Cover and page design", "封面與頁面設計"),
        copy("Print-oriented delivery", "印刷導向交付"),
      ],
      assets: [
        {
          src: assetPath("/assets/factory/editorial/selected-editorial-00.jpg"),
          alt: "Selected Oriental Cuisine magazine issue records from Mercury's editorial period.",
        },
        {
          src: assetPath("/assets/factory/editorial/selected-editorial-01.jpg"),
          alt: "Selected food editorial layout work from Mercury's editorial period.",
        },
        {
          src: assetPath("/assets/factory/editorial/selected-editorial-02.jpg"),
          alt: "Selected food writing and copywriting work from Mercury's editorial period.",
        },
        {
          src: assetPath("/assets/factory/editorial/selected-editorial-03.jpg"),
          alt: "Selected cover and editorial design work from Mercury's editorial period.",
        },
      ],
    },
  },
  {
    id: "cookbook-production-floor",
    code: "03",
    diagram: {
      area: "cookbook",
      zone: copy("Publishing Foundation", "出版基礎區"),
      route: "publishing",
      callout: copy("Production Floor / 50+", "製作樓層 / 50+"),
    },
    title: copy("Cookbook Production Floor", "食譜出版製作樓層"),
    period: "2010-2014",
    discipline: copy(
      "50+ cookbook-related publishing projects",
      "50+ 本食譜出版相關流程",
    ),
    summary: copy(
      "Participated in and coordinated 50+ cookbook-related publishing projects, covering content planning, layout design, photography coordination, client communication, and print production support.",
      "參與並協調 50+ 本食譜出版相關流程，涵蓋內容規劃、排版設計、拍攝協調、客戶溝通與印刷製作支援。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected published covers", "LinkedIn 記錄；精選出版封面"),
    display: copy("Selected published cookbook and food-content covers.", "展示精選已出版食譜與美食內容封面。"),
    proof: {
      label: copy("Selected published covers", "精選出版封面"),
      outcome: copy(
        "Repeat cookbook and food-publication delivery across planning, coordination, layout, photography support, communication, and print production.",
        "反覆完成食譜與美食出版交付，涵蓋企劃、協調、排版、拍攝支援、溝通與印刷製作。",
      ),
      roles: [
        copy("Content planning", "內容企劃"),
        copy("Layout coordination", "排版協調"),
        copy("Food photography coordination", "美食攝影協調"),
        copy("Client and team communication", "客戶與團隊溝通"),
        copy("Print production support", "印刷製作支援"),
      ],
      assets: [
        {
          src: assetPath("/assets/factory/cookbook/selected-covers-01.jpg"),
          alt: "Selected cookbook and food-publication covers from Mercury's publishing period.",
        },
        {
          src: assetPath("/assets/factory/cookbook/selected-covers-02.jpg"),
          alt: "Additional selected cookbook and food-publication covers from Mercury's publishing period.",
        },
      ],
    },
  },
  {
    id: "story-archive-ip-office",
    code: "04",
    diagram: {
      area: "story",
      zone: copy("Narrative Research Wing", "敘事研究翼"),
      route: "research",
      callout: copy("Story / Rights Check", "故事 / 權利檢查"),
    },
    title: copy("Story Archive & IP Office", "故事檔案與 IP 辦公室"),
    period: "2015-2016",
    discipline: copy("Fiction, publications, and creator collaboration", "小說、出版品與創作者協作"),
    summary: copy(
      "Worked across fiction writing and illustrator coordination, supporting communication between creators and publishing partners.",
      "參與小說創作與繪師協作，協助創作者與出版合作方之間的溝通與交付。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected publication and creator-collaboration materials", "LinkedIn 記錄；精選出版與創作者協作材料"),
    display: copy("Selected publication and creator-collaboration materials.", "展示精選出版與創作者協作材料。"),
    proof: {
      label: copy("Selected story and creator-collaboration records", "精選故事與創作者協作記錄"),
      layout: "grid",
      outcome: copy(
        "Published fiction work and illustrator coordination across story development, visual presentation, publishing partners, and reader-facing materials.",
        "小說出版與繪師協作經驗，涵蓋故事開發、視覺呈現、出版合作與讀者端素材。",
      ),
      roles: [
        copy("Fiction writing", "小說寫作"),
        copy("Illustrator coordination", "繪師協調"),
        copy("Publishing communication", "出版溝通"),
        copy("Creator material curation", "創作者資料整理"),
        copy("Reader-facing presentation", "面向讀者的呈現"),
      ],
      assets: [
        {
          src: assetPath("/assets/factory/story-archive/selected-story-01.jpg"),
          alt: "Selected published fiction books displayed in a bookstore setting.",
        },
        {
          src: assetPath("/assets/factory/story-archive/selected-story-02.jpg"),
          alt: "Selected illustrated fiction cover created with an illustrator collaborator.",
        },
        {
          src: assetPath("/assets/factory/story-archive/selected-story-03.jpg"),
          alt: "Selected translated edition from Mercury's fiction publishing period.",
        },
        {
          src: assetPath("/assets/factory/story-archive/selected-story-04.jpg"),
          alt: "Selected illustrator portfolio and agency coordination materials.",
        },
      ],
    },
  },
  {
    id: "operation-control-room",
    code: "05",
    diagram: {
      area: "operation",
      zone: copy("Delivery Control Level", "交付控制層"),
      route: "delivery",
      callout: copy("Workflow Control", "流程控制"),
    },
    title: copy("Operation Control Room", "營運控制室"),
    period: "2016-2018",
    discipline: copy("Creative workflow development", "創意製作流程建立"),
    summary: copy(
      "Helped an early-stage media advertising company establish practical creative-production and delivery workflows.",
      "協助早期媒體廣告公司建立可執行的創意製作與交付流程。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected event and coordination materials", "LinkedIn 記錄；精選活動與協調材料"),
    display: copy("Selected event and coordination materials.", "展示精選活動與協調材料。"),
    proof: {
      label: copy("Selected event and coordination records", "精選活動與協調記錄"),
      layout: "mixed",
      outcome: copy(
        "Event-facing coordination work across community pages, activity materials, workshop records, people flow, and public communication.",
        "活動端協調工作，涵蓋社群頁面、活動素材、工作坊紀錄、人員動線與公開溝通。",
      ),
      roles: [
        copy("Event coordination", "活動協調"),
        copy("Community page operation", "社群頁面經營"),
        copy("Activity material preparation", "活動素材準備"),
        copy("On-site communication", "現場溝通"),
        copy("Workshop documentation", "工作坊記錄"),
      ],
      assets: [
        {
          src: assetPath("/assets/factory/operation/selected-operation-01.jpg"),
          alt: "Selected event community page record.",
        },
        {
          src: assetPath("/assets/factory/operation/selected-operation-02.jpg"),
          alt: "Selected activity material and event album record.",
        },
        {
          src: assetPath("/assets/factory/operation/selected-operation-03.jpg"),
          alt: "Selected drama life camp publication and activity record.",
        },
        {
          src: assetPath("/assets/factory/operation/selected-operation-04.jpg"),
          alt: "Selected workshop activity record.",
        },
      ],
    },
  },
  {
    id: "commerce-visual-line",
    code: "06",
    diagram: {
      area: "commerce",
      zone: copy("Delivery Control Level", "交付控制層"),
      route: "delivery",
      callout: copy("Restricted Visual Assets", "受限視覺素材"),
    },
    title: copy("Commerce Visual Line", "電商視覺產線"),
    period: "2018-2020",
    discipline: copy("GSK e-commerce visuals and promotional assets", "GSK 電商視覺與促銷素材"),
    summary: copy(
      "Produced e-commerce visuals, promotional materials, product-image adaptations, and platform assets for GSK brands.",
      "為 GSK 品牌製作電商視覺、促銷素材、商品圖調整與平台使用素材。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected e-commerce visual materials", "LinkedIn 記錄；精選電商視覺材料"),
    display: copy("Selected e-commerce visual and platform adaptation materials.", "展示精選電商視覺與平台尺寸適配材料。"),
    proof: {
      label: copy("Selected e-commerce visual materials", "精選電商視覺材料"),
      layout: "commerce",
      outcome: copy(
        "Platform-ready campaign visuals across marketplace banners, promotional frames, product groupings, and flash-sale formats.",
        "平台上架用活動視覺，涵蓋商城橫幅、促銷框、商品組合與限時活動格式。",
      ),
      roles: [
        copy("Marketplace banner adaptation", "平台橫幅適配"),
        copy("Promotional visual production", "促銷視覺製作"),
        copy("Product-image layout", "商品圖排版"),
        copy("Platform size formatting", "平台尺寸格式化"),
        copy("Brand asset handling", "品牌素材處理"),
      ],
      assets: [
        {
          src: assetPath("/assets/factory/commerce/selected-commerce-01.jpg"),
          alt: "Selected LazMall e-commerce campaign banner adapted for GSK products.",
        },
        {
          src: assetPath("/assets/factory/commerce/selected-commerce-02.jpg"),
          alt: "Selected Scott's e-commerce promotional banner.",
        },
        {
          src: assetPath("/assets/factory/commerce/selected-commerce-03.jpg"),
          alt: "Selected flash-sale marketplace banner for GSK e-commerce products.",
        },
        {
          src: assetPath("/assets/factory/commerce/selected-commerce-04.jpg"),
          alt: "Selected product promotion frame for e-commerce use.",
        },
      ],
    },
  },
  {
    id: "multimedia-workshop",
    code: "07",
    diagram: {
      area: "multimedia",
      zone: copy("Narrative Research Wing", "敘事研究翼"),
      route: "research",
      callout: copy("Media Extension", "媒體延伸"),
    },
    title: copy("Multimedia Workshop", "多媒體工作坊"),
    period: "2020-present",
    discipline: copy("Web, video, 3D, games, and e-book practice", "網頁、影片、3D、遊戲與電子書實作"),
    summary: copy(
      "Publishing experience expands into web, video, 3D, games, and e-book learning and practice.",
      "出版與內容製作經驗延伸到網頁、影片、3D、遊戲與電子書等多媒體學習與實作。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected YouTube video records", "LinkedIn 記錄；精選 YouTube 影片記錄"),
    display: copy("Selected video and web-project records link to public YouTube pages.", "精選影片與網頁作品記錄連到公開 YouTube 頁面。"),
    proof: {
      label: copy("Selected multimedia project records", "精選多媒體作品記錄"),
      layout: "multimedia",
      outcome: copy(
        "Student and competition multimedia work across concept planning, scriptwriting, directing, filming, editing, motion production, web presentation, and team coordination.",
        "求學與競賽期間的多媒體作品，涵蓋企劃、腳本、導演、拍攝、剪輯、動態製作、網頁展示與團隊協作。",
      ),
      roles: [
        copy("Concept planning", "概念企劃"),
        copy("Script and storyboard", "腳本與分鏡"),
        copy("Filming and directing", "拍攝與導演"),
        copy("Video editing", "影片剪輯"),
        copy("Motion production", "動態製作"),
        copy("Web presentation", "網頁呈現"),
        copy("Team coordination", "團隊協作"),
      ],
      assets: [
        {
          src: assetPath("/assets/factory/multimedia/selected-multimedia-card-01.jpg"),
          alt: "Selected A+ Cultural Heritage Award shortlisted video project portfolio page.",
        },
        {
          src: assetPath("/assets/factory/multimedia/selected-multimedia-card-02.jpg"),
          alt: "Selected responsive web design graduation project portfolio page.",
        },
        {
          src: assetPath("/assets/factory/multimedia/selected-multimedia-card-03.jpg"),
          alt: "Selected 3D food web design graduation project poster.",
        },
        {
          src: assetPath("/assets/factory/multimedia/selected-multimedia-card-04.jpg"),
          alt: "Selected Yongqing real estate advertising competition video project portfolio page.",
        },
      ],
      videos: [
        {
          title: copy("Malaysia night market video record", "馬來西亞夜市介紹影片"),
          type: copy("University web project", "大學網頁作品"),
          role: copy("Planning, filming, and editing for a night-market web introduction", "負責夜市介紹單元的企劃、拍攝與剪輯"),
          url: "https://youtu.be/sYee0fa5XUc",
        },
        {
          title: copy("Malaysia 3D interactive food web teaser", "馬來西亞 3D 互動美食網頁預告"),
          type: copy("Graduation production trailer", "畢業製作預告片"),
          role: copy("Planning, filming, and editing", "負責企劃、拍攝與剪輯"),
          url: "https://youtu.be/4G7ggJX6pRA",
        },
        {
          title: copy("MSI competition video record 01", "MSI 競賽影片記錄"),
          type: copy("Team competition project", "團隊競賽作品"),
          role: copy("Planning, scriptwriting, acting, and editing", "負責企劃、腳本、演出與剪輯"),
          url: "https://www.youtube.com/watch?v=q8-P55Ru7yc",
        },
        {
          title: copy("Yongqing real estate advertising entry", "永慶地產廣告競賽作品"),
          type: copy("Golden Calf Awards shortlisted work", "金犢獎入圍作品"),
          role: copy("Planning, scriptwriting, filming, and editing", "負責企劃、腳本、拍攝與剪輯"),
          url: "https://www.youtube.com/watch?v=_jsGUr5JuvQ",
        },
        {
          title: copy("Animation advertising competition work", "動畫廣告競賽作品"),
          type: copy("Yulon Design Award competition project", "育秀盃競賽作品"),
          role: copy("Planning, storyboard, motion production, collaborative editing, and logo design", "負責企劃、分鏡、動態製作、協作剪輯與 Logo 設計"),
          url: "https://youtu.be/HBepI2XGdSw",
        },
        {
          title: copy("Brilliant Black Gold cultural heritage project", "璀璨黑金文化資產專案"),
          type: copy("A+ Cultural Heritage Award shortlisted work", "A+ 文化資產獎入圍作品"),
          role: copy("Directing, coordination, planning, filming support, and interview support", "負責導演、統籌、企劃，並協助拍攝與採訪"),
          url: "https://www.youtube.com/watch?v=wbs1WmgCrkQ",
        },
        {
          title: copy("Graduation project teaser", "畢業製作預告片"),
          type: copy("Graduation production trailer", "畢業製作預告片"),
          role: copy("Planning, storyboard, editing, and motion production", "負責企劃、分鏡、剪輯與動態製作"),
          url: "https://www.youtube.com/watch?v=D4RJV1sL-jo&list=PLZNLIiYCImObNGqNu6k0n_V6W1OCRf7Ua&index=6",
        },
      ],
    },
  },
  {
    id: "ai-workflow-lab",
    code: "08",
    diagram: {
      area: "ai",
      zone: copy("Narrative Research Wing", "敘事研究翼"),
      route: "research",
      callout: copy("Assisted Research / HITL", "輔助研究 / 人工回路"),
    },
    title: copy("AI Workflow Lab", "AI 工作流實驗室"),
    period: "2020-present",
    discipline: copy("AI-assisted interactive storytelling research", "AI 輔助互動敘事研究"),
    summary: copy(
      "Currently explores AI-assisted interactive comics and web-based narrative prototypes through human-in-the-loop creative workflows.",
      "目前以人機協作流程探索 AI 輔助互動漫畫與網頁敘事原型。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected AI-assisted project records", "LinkedIn 記錄；精選 AI 輔助作品記錄"),
    display: copy("Selected AI-assisted marketing, interactive narrative, game, and workflow prototype records.", "展示精選 AI 輔助行銷、互動敘事、遊戲與工作流程原型記錄。"),
    proof: {
      label: copy("Selected AI-assisted project records", "精選 AI 輔助作品記錄"),
      layout: "ai",
      outcome: copy(
        "AI-assisted practice across marketing video production, interactive comic research, visual novel prototyping, and workflow-tool experimentation with human review and creative direction.",
        "AI 輔助實作涵蓋行銷影片製作、互動式漫畫研究、視覺小說遊戲原型與工作流程工具實驗，並保留人工審稿與創意判斷。",
      ),
      roles: [
        copy("AI-assisted concept development", "AI 輔助概念發展"),
        copy("Prompt and content direction", "提示詞與內容方向"),
        copy("Interactive narrative prototyping", "互動敘事原型"),
        copy("Marketing video planning", "行銷影片企劃"),
        copy("Human review workflow", "人工審核流程"),
        copy("Web prototype publishing", "網頁原型發布"),
      ],
      assets: [
        {
          src: assetPath("/assets/factory/ai-workflow/selected-ai-card-01.jpg"),
          alt: "Selected AI-generated chicken essence advertising video title frame.",
        },
        {
          src: assetPath("/assets/factory/ai-workflow/selected-ai-card-02.jpg"),
          alt: "Selected Hongbao AI-assisted interactive comic cover visual.",
        },
        {
          src: assetPath("/assets/factory/ai-workflow/selected-ai-card-03.jpg"),
          alt: "Selected Before the Rain Stops AI-assisted visual novel prototype screen.",
        },
        {
          src: assetPath("/assets/factory/ai-workflow/selected-ai-card-04.jpg"),
          alt: "Selected AI-assisted book printing quote prototype interface.",
        },
      ],
      videos: [
        {
          title: copy("AI marketing competition video record 01", "AI 行銷競賽影片記錄"),
          type: copy("AI application marketing competition", "AI 應用行銷競賽"),
          role: copy("Selected work from the 10th TYC Marketing Awards AI application category", "第十屆崇越行銷大賞 AI 應用行銷競賽佳作"),
          url: "https://youtu.be/0DdGG5R_bqI",
        },
        {
          title: copy("Hongbao interactive comic", "《紅包》互動式漫畫"),
          type: copy("Master's AI-assisted interactive comic research", "碩士班 AI 輔助互動漫畫研究"),
          role: copy("AI-assisted interactive narrative research and web prototype", "AI 輔助互動敘事研究與網頁原型"),
          url: "https://mercury5096.github.io/interactive-comic-hongbao/index.html",
        },
        {
          title: copy("Before the Rain Stops", "《雨停之前》"),
          type: copy("AI-assisted visual novel game prototype", "AI 輔助視覺小說遊戲原型"),
          role: copy("Interactive story, visual novel prototype, and web publishing", "互動故事、視覺小說原型與網頁發布"),
          url: "https://mercury5096.github.io/dating-sim-prototype/",
        },
        {
          title: copy("AI-assisted book printing quote prototype", "AI 輔助書籍印製報價原型"),
          type: copy("Workflow tool prototype", "工作流程工具原型"),
          role: copy("Book printing quote workflow prototype, pending vendor specification finalization", "書籍印製報價流程原型，等待商家規格書定案"),
          url: "https://mercury5096.github.io/printing-quote-prototype/",
        },
      ],
    },
  },
];

export const usageSteps = [
  {
    number: "01",
    title: copy("Scan the proof", "先瀏覽證據"),
    body: copy(
      "Each room starts with selected visual records, publication traces, video links, or working prototypes.",
      "每個房間都先放上精選視覺記錄、出版痕跡、影片連結或可操作原型。",
    ),
  },
  {
    number: "02",
    title: copy("Read the role", "看清楚角色"),
    body: copy(
      "The notes focus on what I handled: planning, writing, layout, coordination, editing, prototyping, or review.",
      "說明重點放在我實際負責的部分：企劃、寫作、排版、協調、剪輯、原型或審核。",
    ),
  },
  {
    number: "03",
    title: copy("Judge the fit", "判斷合作契合度"),
    body: copy(
      "Use the evidence chain to evaluate where my cross-media production experience can support your team or project.",
      "你可以用這條證據鏈判斷，我的跨媒體製作經驗能如何支援你的團隊或專案。",
    ),
  },
];

export const processingModes = [
  {
    id: "print-to-system",
    label: copy("Print to System", "從印刷到系統"),
    description: copy(
      "Track how prepress precision and recurring editorial delivery become repeatable content operations.",
      "追蹤印刷前製的細節感與週期性編輯交付，如何累積成可重複的內容營運能力。",
    ),
    route: copy("Print Engine Room -> Editorial Kitchen -> Operation Control Room", "印刷引擎室 -> 編輯廚房 -> 營運控制室"),
  },
  {
    id: "story-to-interaction",
    label: copy("Story to Interaction", "從故事到互動"),
    description: copy(
      "Follow narrative collaboration into multimedia and AI-assisted interactive prototype research.",
      "從敘事與創作者協作，延伸到多媒體與 AI 輔助互動原型研究。",
    ),
    route: copy("Story Archive & IP Office -> Multimedia Workshop -> AI Workflow Lab", "故事檔案與 IP 辦公室 -> 多媒體工作坊 -> AI 工作流實驗室"),
  },
  {
    id: "brief-to-delivery",
    label: copy("Brief to Delivery", "從需求到交付"),
    description: copy(
      "See planning, coordination, visual production, and review as a connected workflow.",
      "把企劃、協調、視覺製作與審核看成一條連續的交付流程。",
    ),
    route: copy("Editorial Kitchen -> Cookbook Production Floor -> Commerce Visual Line", "編輯廚房 -> 食譜出版樓層 -> 電商視覺產線"),
  },
];

export const caseFiles = [
  {
    title: copy("From Comic Prepress to Content Systems", "從漫畫印前到內容系統"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Early print proof across comic layout adaptation, translated text fitting, leaflet layout, and prepress delivery.", "早期印刷證據涵蓋漫畫版面調整、翻譯文字嵌排、宣傳單排版與印前交付。"),
  },
  {
    title: copy("24 Issues on an Editorial Clock", "24 期編輯節奏"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Magazine and food-content evidence connecting writing, layout, cover/page design, and recurring deadlines.", "雜誌與美食內容證據串起寫稿、排版、封面/頁面設計與固定截稿節奏。"),
  },
  {
    title: copy("50+ Cookbook-related Publishing Projects", "50+ 本食譜出版相關流程"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Selected published covers show repeat cookbook and food-publication delivery across planning, layout, coordination, and print support.", "精選出版封面呈現食譜與美食出版在企劃、排版、協調與印刷支援上的反覆交付能力。"),
  },
  {
    title: copy("Story and Illustrator Bridgework", "故事與繪師協作橋梁"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Publication and creator-collaboration records connect fiction writing, illustrator coordination, and publishing communication.", "出版與創作者協作記錄串起小說寫作、繪師協調與出版溝通。"),
  },
  {
    title: copy("Creative Operations for an Early Media Startup", "早期媒體公司的創意營運"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Event and workshop records show coordination, activity material preparation, community operation, and on-site communication.", "活動與工作坊記錄呈現協調、活動素材準備、社群經營與現場溝通。"),
  },
  {
    title: copy("E-commerce Visual Production for GSK", "GSK 電商視覺製作"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Selected e-commerce visuals show marketplace banner adaptation, promotional layout, product-image formatting, and brand asset handling.", "精選電商視覺呈現平台橫幅適配、促銷版面、商品圖格式化與品牌素材處理。"),
  },
  {
    title: copy("Digital Media Transformation", "數位媒體轉換"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Selected multimedia records show web presentation, filming, editing, motion production, competition work, and team coordination.", "精選多媒體記錄呈現網頁展示、拍攝、剪輯、動態製作、競賽作品與團隊協作。"),
  },
  {
    title: copy("AI-assisted Interactive Comic Research", "AI 輔助互動漫畫研究"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("AI-assisted records show marketing video work, interactive comic research, visual novel prototyping, and workflow-tool experimentation.", "AI 輔助記錄呈現行銷影片、互動漫畫研究、視覺小說原型與流程工具實驗。"),
  },
];
