import { assetPath } from "../assetPath.js";

const copy = (en, zh = null) => ({ en, zh });
const displayStatus = {
  descriptive: copy("Can describe, image pending", "可描述，影像待審"),
  evidence: copy("Selected evidence available", "已有精選證據"),
  abstract: copy("Abstract only", "僅抽象描述"),
};

export const brand = { name: "Mercury Lab", subtitle: copy("From Print Publishing to AI-assisted Production Workflows", "從印刷出版到 AI 工作流的跨媒體製作方法"), positioning: copy("I turn complex creative needs into clear content structures, practical production workflows, and deliverable outcomes. My experience spans publishing, editorial production, cookbook projects, e-commerce visuals, multimedia design, and AI-assisted interactive storytelling.", "我擅長把複雜需求整理成清楚的內容架構、實際製作流程與可執行成果。經驗橫跨出版、編輯、食譜書製作、電商視覺、多媒體設計與 AI 輔助互動敘事。") };

export const sectionContent = {
  hero: { eyebrow: copy("Content Production Experiment / 2002–Present", "內容製作實驗 / 2002 至今") },
  factory: { eyebrow: copy("Content Factory Cutaway", "內容工廠剖面圖"), title: copy("Turning content, design, workflow, and AI into deliverable production systems.", "把內容、設計、流程與 AI，整合成可交付的工作方法。"), description: copy("Explore the eight production rooms to see selected evidence, my role in each project, and how these experiences connect into content production and workflow integration today.", "這座內容工廠整理了我從 2002 年至今的代表作品與實作經驗。你可以從八個製作房間中查看作品證據、我負責的角色，以及這些經驗如何轉化為今日的內容生產與工作流整合能力。") },
  usage: { eyebrow: copy("How to Read Mercury", "如何閱讀 Mercury"), title: copy("Start with the proof, then follow the method.", "先看證據，再看方法如何形成。"), description: copy("This site is built for people who need to understand capability quickly. It begins with visible proof, then opens the production logic behind each stage: what was made, what I handled, and how the work connects across media.", "這份展示是為需要快速判斷能力的人整理的。你會先看到可確認的作品證據，再進一步查看每個階段背後的製作邏輯：完成了什麼、我負責什麼，以及這些經驗如何跨媒體串連。") },
  modes: { eyebrow: copy("Reading Routes", "閱讀路線"), title: copy("Three ways to understand the production path.", "用三條路線理解我的製作脈絡。") },
  cases: { eyebrow: copy("Selected Work Evidence", "精選工作證據"), title: copy("Evidence you can open, scan, and connect to a role.", "可以打開、瀏覽並對應角色的工作證據。"), description: copy("These case files collect selected public samples from each career stage. Open the evidence label to view larger images or linked project records.", "這些案例整理每個職涯階段中適合公開瀏覽的精選樣本。點開證據標籤，可以查看較大的圖片或外部作品連結。") },
  protocol: { eyebrow: copy("Role Fit & Collaboration", "適合職務與合作方向"), title: copy("Best fit: content production PM, editorial production, multimedia coordination, and AI-assisted content workflow.", "適合職務：內容製作 PM、編輯製作、多媒體協調與 AI 輔助內容流程。"), statement: copy("I am open to freelance work, part-time roles, full-time opportunities, and project-based collaboration. Across several roles, my work has often sat in a PM-style position: clarifying needs, coordinating people and materials, organizing production steps, and helping projects move toward delivery.", "我開放外包接案、兼職、全職職缺與專案型合作。在多段工作經驗中，我經常站在 PM 式的位置：釐清需求、協調人員與素材、整理製作流程，並推動專案往交付前進。"), rules: [
    copy("Content production PM / Creative project coordination.", "內容製作 PM / 創意專案協調。"),
    copy("Editorial planning, publishing workflow, copywriting, layout coordination, and delivery support.", "編輯企劃、出版流程、文案撰寫、排版協調與交付支援。"),
    copy("E-commerce, campaign, and brand visual production across platform-ready assets.", "電商、活動與品牌視覺製作，支援平台上架素材。"),
    copy("Multimedia production coordination across concept, script, storyboard, filming, editing, motion, and web presentation.", "多媒體製作協調，涵蓋概念、腳本、分鏡、拍攝、剪輯、動態與網頁呈現。"),
    copy("AI-assisted content and workflow prototyping with human review and practical delivery awareness.", "AI 輔助內容與工作流程原型，保留人工審核與實際交付意識。"),
  ] },
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
    period: "2002–2003",
    discipline: copy("Comic layout and print prepress", "漫畫排版與印刷前製"),
    summary: copy("My production path began with comic layout and print prepress, where precision, text fitting, file handling, and delivery discipline were learned through actual publication work.", "我的製作路徑從漫畫排版與印刷前製開始，透過實際出版工作學習版面精度、文字嵌排、檔案處理與交付紀律。"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected print layout materials", "LinkedIn 記錄；精選印刷排版材料"),
    display: copy("Selected print, leaflet, brochure, and promotional layout materials from early production work.", "展示早期印刷製作中的精選印刷、宣傳單、手冊與宣傳版面材料。"),
    proof: {
      label: copy("Selected print layout materials", "精選印刷排版材料"),
      layout: "print",
      outcome: copy("Early print-production work across comic layout adaptation, translated text fitting, leaflet and brochure formatting, dense information layout, and prepress delivery support.", "早期印刷出版工作，涵蓋漫畫版面調整、翻譯文字嵌排、宣傳單與手冊編排、密集資訊版面處理與印前交付支援。"),
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
    period: "2003–2004",
    discipline: copy("Magazine, cookbook, food content, and writing", "雜誌、食譜、美食內容與寫作"),
    summary: copy("Completed layout work for 24 food and lifestyle magazine issues, building an editorial rhythm that connected writing, visual organization, recurring deadlines, and print delivery.", "完成 24 期美食生活雜誌排版工作，累積將寫作、視覺組織、固定截稿與印刷交付串連起來的編輯節奏。"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected food editorial, copywriting, and layout materials", "LinkedIn 記錄；精選美食編輯、文案與排版材料"),
    display: copy("Selected food editorial, copywriting, cover, and layout materials.", "展示精選美食編輯、文案、封面與版面材料。"),
    proof: {
      label: copy("Selected magazine and editorial production materials", "精選雜誌與編輯製作材料"),
      layout: "editorial",
      outcome: copy("Food and lifestyle editorial work across writing, interview-style copy, page layout, cover/page design, and print-oriented delivery under recurring publication schedules.", "美食與生活內容編輯工作，涵蓋寫稿、採訪式文案、版面編排、封面/頁面設計，以及在固定出版週期下完成印刷導向交付。"),
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
    period: "2010–2014",
    discipline: copy("50+ cookbook-related publishing projects", "50+ 本食譜出版相關流程"),
    summary: copy("Participated in and coordinated 50+ cookbook-related publishing projects, turning recipes, clients, chefs, photography, layout, and print requirements into repeatable publication delivery.", "參與並協調 50+ 本食譜出版相關流程，將食譜、客戶、廚師、攝影、排版與印刷需求整合成可反覆交付的出版製作流程。"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected published covers", "LinkedIn 記錄；精選出版封面"),
    display: copy("Selected published cookbook and food-content covers.", "展示精選已出版食譜與美食內容封面。"),
    proof: {
      label: copy("Selected published covers", "精選出版封面"),
      outcome: copy("Repeat cookbook and food-publication delivery across content planning, layout coordination, food photography support, client/team communication, and print production.", "反覆完成食譜與美食出版交付，涵蓋內容企劃、排版協調、美食攝影支援、客戶/團隊溝通與印刷製作。"),
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
    period: "2015–2016",
    discipline: copy("Fiction, publications, and creator collaboration", "小說、出版品與創作者協作"),
    summary: copy("Worked across fiction writing and illustrator coordination, connecting story development, visual presentation, creator needs, publishing partners, and reader-facing materials.", "參與小說創作與繪師協作，串接故事開發、視覺呈現、創作者需求、出版合作方與面向讀者的作品素材。"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected publication and creator-collaboration materials", "LinkedIn 記錄；精選出版與創作者協作材料"),
    display: copy("Selected publication and creator-collaboration materials.", "展示精選出版與創作者協作材料。"),
    proof: {
      label: copy("Selected story and creator-collaboration records", "精選故事與創作者協作記錄"),
      layout: "grid",
      outcome: copy("Published fiction work and illustrator coordination across story development, visual presentation, publishing communication, creator materials, and reader-facing delivery.", "小說出版與繪師協作經驗，涵蓋故事開發、視覺呈現、出版溝通、創作者資料整理與讀者端交付。"),
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
          alt: "Selected illustrator and agency coordination materials.",
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
    period: "2016–2018",
    discipline: copy("Creative workflow development and cross-role coordination", "創意製作流程建立與跨角色協調"),
    summary: copy("Helped an early-stage media advertising company establish practical creative-production and delivery workflows, turning scattered tasks, vendor communication, material organization, community-facing content, and delivery needs into a more trackable operating rhythm.", "協助早期媒體廣告公司建立可執行的創意製作與交付流程，將零散任務、外包溝通、素材整理、社群內容與交付需求整理成可追蹤的運作節奏。"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected workflow and coordination materials", "LinkedIn 記錄；精選流程與協調材料"),
    display: copy("Selected workflow, event, workshop, community, and coordination materials.", "展示精選流程、活動、工作坊、社群與協調材料。"),
    proof: {
      label: copy("Selected workflow and coordination records", "精選流程與協調記錄"),
      layout: "mixed",
      outcome: copy("Coordination work across task breakdown, vendor and collaborator communication, material organization, community-facing content, workshop records, public communication, and practical handoff between planning and delivery.", "協調工作涵蓋任務拆解、外包／協作者溝通、素材整理、社群內容、工作坊紀錄、公開溝通，以及從企劃到交付之間的實際銜接。"),
      roles: [
        copy("Workflow design", "流程建立"),
        copy("Task breakdown", "任務拆解"),
        copy("Vendor / collaborator coordination", "外包／協作者協調"),
        copy("Material organization", "素材管理"),
        copy("Delivery tracking", "交付追蹤"),
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
    period: "2018–2020",
    discipline: copy("GSK e-commerce visuals and promotional assets", "GSK 電商視覺與促銷素材"),
    summary: copy("Produced e-commerce visuals, promotional materials, product-image adaptations, and marketplace-ready assets for GSK brands under platform and brand constraints.", "在平台規格與品牌限制之下，為 GSK 品牌製作電商視覺、促銷素材、商品圖調整與平台上架用視覺素材。"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected e-commerce visual materials", "LinkedIn 記錄；精選電商視覺材料"),
    display: copy("Selected e-commerce visual and platform adaptation materials.", "展示精選電商視覺與平台尺寸適配材料。"),
    proof: {
      label: copy("Selected e-commerce visual materials", "精選電商視覺材料"),
      layout: "commerce",
      outcome: copy("Platform-ready campaign visuals across marketplace banners, promotional frames, product groupings, flash-sale formats, and brand asset handling.", "平台上架用活動視覺，涵蓋商城橫幅、促銷框、商品組合、限時活動格式與品牌素材處理。"),
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
    period: "2020–Present",
    discipline: copy("Web, video, 3D, games, and e-book practice", "網頁、影片、3D、遊戲與電子書實作"),
    summary: copy("Expanded publishing and content-production experience into web, video, 3D, games, e-books, and team-based multimedia practice through study, competitions, and public project records.", "將出版與內容製作經驗延伸到網頁、影片、3D、遊戲、電子書與團隊型多媒體實作，透過求學、競賽與公開作品逐步累積。"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected YouTube video records", "LinkedIn 記錄；精選 YouTube 影片記錄"),
    display: copy("Selected video and web-project records linking to public YouTube pages.", "精選影片與網頁作品記錄連到公開 YouTube 頁面。"),
    proof: {
      label: copy("Selected multimedia project records", "精選多媒體作品記錄"),
      layout: "multimedia",
      outcome: copy("Student and competition multimedia work across concept planning, scripts, storyboards, filming direction, editing, motion production, web presentation, and team coordination.", "求學與競賽期間的多媒體作品，涵蓋概念企劃、腳本、分鏡、導演、拍攝、剪輯、動態製作、網頁展示與團隊協作。"),
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
          alt: "Selected A+ Cultural Heritage Award shortlisted video project record page.",
        },
        {
          src: assetPath("/assets/factory/multimedia/selected-multimedia-card-02.jpg"),
          alt: "Selected responsive web design graduation project record page.",
        },
        {
          src: assetPath("/assets/factory/multimedia/selected-multimedia-card-03.jpg"),
          alt: "Selected 3D food web design graduation project poster.",
        },
        {
          src: assetPath("/assets/factory/multimedia/selected-multimedia-card-04.jpg"),
          alt: "Selected Yongqing real estate advertising competition video project record page.",
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
    period: "2020–Present",
    discipline: copy("AI-assisted interactive storytelling research", "AI 輔助互動敘事研究"),
    summary: copy("Currently explores AI-assisted interactive comics and web-based narrative prototypes through human-in-the-loop workflows that keep creative direction, review, and responsibility in human hands.", "目前以人機協作流程探索 AI 輔助互動漫畫與網頁敘事原型，並將創意方向、審核判斷與責任保留在人類手中。"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    evidence: copy("LinkedIn record; selected AI-assisted project records", "LinkedIn 記錄；精選 AI 輔助作品記錄"),
    display: copy("Selected AI-assisted marketing, interactive narrative, game, and workflow prototype records.", "展示精選 AI 輔助行銷、互動敘事、遊戲與工作流程原型記錄。"),
    proof: {
      label: copy("Selected AI-assisted project records", "精選 AI 輔助作品記錄"),
      layout: "ai",
      outcome: copy("AI-assisted practice across marketing video production, interactive comic research, visual novel prototyping, and workflow-tool experimentation with human review and creative direction.", "AI 輔助實作涵蓋行銷影片製作、互動式漫畫研究、視覺小說遊戲原型與工作流程工具實驗，並保留人工審核與創意判斷。"),
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
  }
];

export const usageSteps = [
  { number: "01", title: copy("Scan the proof", "先瀏覽證據"), body: copy("Each room begins with selected visual records, publication traces, video links, or working prototypes, so the work can be checked before the explanation begins.", "每個房間都先放上精選視覺記錄、出版痕跡、影片連結或可操作原型，讓作品本身先說話，再進入說明。") },
  { number: "02", title: copy("Read the role", "看清楚角色"), body: copy("The notes clarify what I actually handled, including planning, writing, layout, coordination, editing, prototyping, review, or delivery support.", "說明會聚焦在我實際負責的部分，包括企劃、寫作、排版、協調、剪輯、原型製作、審核或交付支援。") },
  { number: "03", title: copy("Judge the fit", "判斷合作契合度"), body: copy("Use the evidence chain to see where my cross-media production experience can support a team, project, or workflow that needs structure and delivery.", "你可以透過這條證據鏈判斷，我的跨媒體製作經驗能如何支援需要結構、協作與交付能力的團隊或專案。") }
];

export const processingModes = [
  { id: "print-to-system", label: copy("Print to System", "從印刷到系統"), description: copy("Follow how prepress precision, layout discipline, and recurring editorial deadlines became the foundation for repeatable content operations.", "從印刷前製的細節感、版面紀律與週期性編輯交付開始，觀看它們如何累積成可重複的內容營運能力。"), route: copy("Print Engine Room → Editorial Kitchen → Operation Control Room", "印刷引擎室 → 編輯廚房 → 營運控制室") },
  { id: "story-to-interaction", label: copy("Story to Interaction", "從故事到互動"), description: copy("Follow the path from fiction writing and creator collaboration to multimedia practice and AI-assisted interactive narrative research.", "從小說創作與創作者協作出發，延伸到多媒體實作與 AI 輔助互動敘事研究。"), route: copy("Story Archive & IP Office → Multimedia Workshop → AI Workflow Lab", "故事檔案與 IP 辦公室 → 多媒體工作坊 → AI 工作流實驗室") },
  { id: "brief-to-delivery", label: copy("Brief to Delivery", "從需求到交付"), description: copy("See how planning, coordination, visual production, review, and delivery connect into a practical workflow.", "把企劃、協調、視覺製作、審核與交付看成一條實際運作的內容生產流程。"), route: copy("Editorial Kitchen → Cookbook Production Floor → Commerce Visual Line", "編輯廚房 → 食譜出版製作樓層 → 電商視覺產線") }
];

export const caseFiles = [
  {
    title: copy("From Comic Prepress to Content Systems", "從漫畫印前到內容系統"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Early print-production evidence showing comic layout adaptation, translated text fitting, leaflet layout, brochure formatting, and prepress delivery support.", "早期印刷製作證據，涵蓋漫畫版面調整、翻譯文字嵌排、宣傳單排版、手冊版面編排與印刷前製支援。"),
  },
  {
    title: copy("24 Issues on an Editorial Clock", "24 期編輯節奏"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Magazine and food-content records connecting recurring deadlines, editorial layout, food writing, interview-style copy, and print-oriented delivery.", "雜誌與美食內容記錄，串起固定截稿節奏、編輯排版、美食寫作、採訪式文案與印刷導向交付。"),
  },
  {
    title: copy("50+ Cookbook-related Publishing Projects", "50+ 本食譜出版相關流程"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Selected published covers showing repeat cookbook and food-publication delivery across planning, layout coordination, photography support, client communication, and print production.", "精選出版封面呈現食譜與美食出版的反覆交付經驗，涵蓋企劃、排版協調、拍攝支援、客戶溝通與印刷製作。"),
  },
  {
    title: copy("Story and Illustrator Bridgework", "故事與繪師協作橋梁"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Publication and creator-collaboration records connecting fiction writing, illustrator coordination, publishing communication, visual presentation, and reader-facing materials.", "出版與創作者協作記錄，串起小說寫作、繪師協調、出版溝通、視覺呈現與面向讀者的素材整理。"),
  },
  {
    title: copy("Creative Operations for an Early Media Startup", "早期媒體公司的創意營運"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Workflow and coordination records showing how task breakdown, materials, community-facing content, workshop documentation, collaborator communication, and handoff supported public-facing delivery.", "流程與協調記錄呈現任務拆解、素材整理、社群內容、工作坊紀錄、協作者溝通與交接如何支援對外執行與交付。"),
  },
  {
    title: copy("E-commerce Visual Production for GSK", "GSK 電商視覺製作"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Selected e-commerce visuals showing platform-ready campaign assets across marketplace banner adaptation, promotional layout, product-image formatting, and brand asset handling.", "精選電商視覺呈現可上架的平台活動素材，涵蓋商城橫幅適配、促銷版面、商品圖格式化與品牌素材處理。"),
  },
  {
    title: copy("Digital Media Transformation", "數位媒體轉換"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("Selected multimedia records showing the shift from print-based production into web presentation, filming, editing, motion production, competition work, and team coordination.", "精選多媒體記錄呈現從印刷與內容製作延伸到網頁展示、拍攝、剪輯、動態製作、競賽作品與團隊協作的轉換過程。"),
  },
  {
    title: copy("AI-assisted Interactive Comic Research", "AI 輔助互動漫畫研究"),
    displayLevel: "descriptive",
    status: displayStatus.evidence,
    note: copy("AI-assisted project records showing marketing video production, interactive comic research, visual novel prototyping, and workflow-tool experimentation with human review.", "AI 輔助作品記錄呈現行銷影片製作、互動漫畫研究、視覺小說原型與工作流程工具實驗，並保留人工審核與創意判斷。"),
  }
];

export const appCopy = {
  nav: {
    factory: copy("Factory", "工廠"),
    modes: copy("Routes", "路線"),
    cases: copy("Evidence", "證據"),
    protocol: copy("Collaborate", "合作"),
  },
  header: {
    edition: copy("v0.5 / EN", "v0.5 / 中文"),
    switchLabel: copy("中文", "EN"),
    switchAria: copy("Switch to Chinese", "切換到英文"),
    brandAria: "Mercury Lab home",
  },
  cases: {
    modeTag: copy("Route", "路線"),
    filePrefix: "FILE",
    openEvidence: copy("Open evidence", "查看證據"),
    closeGallery: copy("Close gallery", "關閉相冊"),
    selectedEvidence: copy("Selected Evidence Gallery", "精選證據相冊"),
    noImages: copy(
      "This case currently uses external project links.",
      "這個案例目前以外部作品連結為主。",
    ),
    projectLinks: copy("Project Links", "作品連結"),
  },
  collaboration: {
    contactOptionsAria: copy("Collaboration contact options", "合作聯絡方式"),
    contactLinkedIn: copy("Contact on LinkedIn", "LinkedIn 聯繫"),
    contactEmail: copy("Copy email", "複製 Email"),
    contactEmailCopied: copy("Email copied", "Email 已複製"),
  },
  footer: {
    left: copy("Mercury Lab / Prototype v0.5", "Mercury Lab / 原型 v0.5"),
    right: copy("Bilingual / Rights-aware / Evidence-led", "中英切換 / 權利意識 / 證據導向"),
  },
};

export const factoryCopy = {
  roomFunctions: {
    "print-engine-room": copy("Print to System", "從印刷到系統"),
    "editorial-kitchen": copy("Editorial Room", "編輯製作"),
    "cookbook-production-floor": copy("Brief to Delivery", "從企劃到交付"),
    "story-archive-ip-office": copy("Story to Interaction", "從故事到互動"),
    "operation-control-room": copy("Coordination Engine", "協調引擎"),
    "commerce-visual-line": copy("Commercial Visuals", "商業視覺"),
    "multimedia-workshop": copy("Case Files", "多媒體作品"),
    "ai-workflow-lab": copy("Research to Output", "從研究到原型"),
  },
  floors: [
    { id: "07", label: copy("Print Foundation", "印刷基礎"), rooms: ["print-engine-room"] },
    { id: "06", label: copy("Editorial Production", "編輯製作"), rooms: ["editorial-kitchen"] },
    {
      id: "05",
      label: copy("Cookbook Production", "食譜出版"),
      rooms: ["cookbook-production-floor"],
    },
    { id: "04", label: copy("Story Archive", "故事檔案"), rooms: ["story-archive-ip-office"] },
    { id: "03", label: copy("Operations Control", "營運協調"), rooms: ["operation-control-room"] },
    { id: "02", label: copy("Commerce Visuals", "電商視覺"), rooms: ["commerce-visual-line"] },
    { id: "01", label: copy("Multimedia Practice", "多媒體實作"), rooms: ["multimedia-workshop"] },
    { id: "00", label: copy("Assisted Research Lab", "AI 輔助研究"), rooms: ["ai-workflow-lab"] },
  ],
  dossier: {
    close: copy("Close", "關閉"),
    module: copy("Module", "模組"),
    evidence: copy("Evidence", "證據"),
    file: copy("FILE", "檔案"),
    manual: copy("Module Manual", "模組說明"),
    activePeriod: copy("Active period", "活躍時期"),
    productionScope: copy("Production scope", "製作範圍"),
    evidenceSummary: copy("Evidence Summary", "證據摘要"),
  },
  status: {
    status: copy("Content Factory / Section A", "內容工廠 / A 剖面"),
    operational: copy("Status / Open for review", "狀態 / 開放檢視"),
    drawing: copy("Drawing / CUT-04", "圖面 / CUT-04"),
    language: copy("Language / EN", "語言 / 中文"),
    controlled: copy("Evidence curated / Human reviewed", "證據精選 / 人工審核"),
    factoryRoute: copy("Factory Route", "工廠路線"),
    explore: copy("Explore / Level 07-00", "探索 / Level 07-00"),
    viewingPrefix: copy("Viewing / Level", "目前 / Level"),
    legend: copy("System Legend", "系統圖例"),
    peopleFlow: copy("People flow", "人員流程"),
    evidenceGate: copy("Evidence gate", "證據關口"),
    publicRelease: copy("Public release", "公開發布"),
    verticalRoute: copy("Vertical route", "垂直路線"),
    level: copy("Level", "樓層"),
    principles: copy("System Principles", "系統原則"),
    principlesText: copy(
      "Traceable sources / Rights aware / Human reviewed",
      "可追溯來源 / 權利意識 / 人工審核",
    ),
    machineStatus: copy("Machine Status", "機器狀態"),
    allOperational: copy("All systems operational", "所有系統運作中"),
    activeFeed: copy("Active Feed", "目前檢視"),
    selectRoom: copy("Select a room to inspect its module record", "選擇一個房間查看模組記錄"),
    drawingStatusAria: "Factory drawing status",
    routeIndexAria: "Factory route index",
    productionRoomsAria: "Mercury Lab production rooms",
  },
  roomShell: {
    openDossier: copy("Open dossier", "打開檔案"),
  },
};

export const sceneCopy = {
  print: {
    scan: copy("Scan", "掃描"),
    arrange: copy("Arrange", "編排"),
    proof: copy("Proof", "校樣"),
    output: copy("Output", "輸出"),
    keySmall: copy("Prepress engine", "印前引擎"),
    keyStrong: copy("Gold / checked output", "金色 / 已檢查輸出"),
  },
  editorial: {
    draft: copy("Draft", "草稿"),
    layout: copy("Layout", "排版"),
    edit: copy("Edit", "編輯"),
    release: copy("Release", "發布"),
    keySmall: copy("Editorial cycle", "編輯循環"),
    keyStrong: copy("Gold / approved pass", "金色 / 核准流程"),
  },
  cookbook: {
    plan: copy("Plan", "企劃"),
    cook: copy("Cook", "烹調"),
    style: copy("Style", "造型"),
    capture: copy("Capture", "拍攝"),
    keySmall: copy("Movable props", "可互動物件"),
    keyStrong: copy("Gold / active layer", "金色 / 啟動層"),
  },
  story: {
    archive: copy("Archive", "歸檔"),
    develop: copy("Develop", "開發"),
    review: copy("Review", "審稿"),
    protect: copy("Protect", "保護"),
    keySmall: copy("Archive handling", "檔案處理"),
    keyStrong: copy("Gold / reviewed layer", "金色 / 已審核層"),
  },
  operation: {
    intake: copy("Intake", "接收"),
    assign: copy("Assign", "分派"),
    track: copy("Track", "追蹤"),
    deliver: copy("Deliver", "交付"),
    keySmall: copy("Coordination loop", "協調循環"),
    keyStrong: copy("Gold / active handoff", "金色 / 交接中"),
  },
  commerce: {
    sample: copy("Sample", "取樣"),
    compose: copy("Compose", "編排"),
    adapt: copy("Adapt", "適配"),
    export: copy("Export", "輸出"),
    keySmall: copy("Visual adaptation", "視覺適配"),
    keyStrong: copy("Gold / approved sample", "金色 / 已核准樣本"),
  },
  multimedia: {
    storyboard: copy("Storyboard", "分鏡"),
    edit: copy("Edit", "剪輯"),
    prototype: copy("Prototype", "原型"),
    test: copy("Test", "測試"),
    keySmall: copy("Mixed-media prototype", "混合媒體原型"),
    keyStrong: copy("Gold / live test layer", "金色 / 測試層"),
  },
  ai: {
    research: copy("Research", "研究"),
    prompt: copy("Prompt", "提示"),
    generate: copy("Generate", "生成"),
    review: copy("Review", "審核"),
    deliver: copy("Deliver", "交付"),
    keySmall: copy("Human review loop", "人工審核回路"),
    keyStrong: copy("Gold / selected decision", "金色 / 精選決策"),
  },
};
