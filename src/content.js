const copy = (en, zh = null) => ({ en, zh });
const displayStatus = {
  descriptive: copy("Can describe, image pending"),
  abstract: copy("Abstract only"),
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
    eyebrow: copy("Content Production Experiment / 2002 - Present"),
  },
  factory: {
    eyebrow: copy("Content Factory Cutaway"),
    title: copy("Eight rooms. One accumulated method."),
    description: copy(
      "Select a production room to open its module manual. Every public display decision is routed through evidence and rights review.",
    ),
  },
  usage: {
    eyebrow: copy("How to Use Mercury"),
    title: copy("A guide to reading the lab."),
    description: copy(
      "Mercury Lab presents production practice as a working system, not a complete digital archive or a claim of sole ownership.",
    ),
  },
  modes: {
    eyebrow: copy("Processing Modes"),
    title: copy("Choose a route through the factory."),
  },
  cases: {
    eyebrow: copy("Case Files"),
    title: copy("Stories under evidence control."),
    description: copy(
      "These files identify public narrative potential. Visual records remain pending unless a safe display basis is confirmed.",
    ),
  },
  protocol: {
    eyebrow: copy("Collaboration Protocol"),
    title: copy("Work enters publicly only when it is ready."),
    statement: copy(
      "Mercury Lab organizes a real content-production practice across print, coordination, multimedia, and AI-assisted research. Claims stay conservative, assets stay reviewed, and the human remains responsible for final editorial decisions.",
    ),
    rules: [
      copy("No unconfirmed company, brand, publisher, or client imagery."),
      copy("No claim of a complete surviving digital archive for early print work."),
      copy("AI prototypes are presented as assisted research practice."),
      copy("English-first interface with a bilingual-ready content structure."),
    ],
  },
};

export const rooms = [
  {
    id: "print-engine-room",
    code: "01",
    title: copy("Print Engine Room"),
    period: "2002-2003",
    discipline: copy("Comic layout and print prepress"),
    summary: copy(
      "Began in comic layout and print production, building hands-on understanding of prepress detail and publication delivery.",
      "從漫畫排版與印刷製作起步，累積印刷前製細節與出版交付的實務理解。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    evidence: copy("LinkedIn record"),
    display: copy("Placeholder imagery until reviewed."),
  },
  {
    id: "editorial-kitchen",
    code: "02",
    title: copy("Editorial Kitchen"),
    period: "2003-2004",
    discipline: copy("Magazine, cookbook, food content, and writing"),
    summary: copy(
      "Completed layout work for 24 food and lifestyle magazine issues, combining editorial rhythm, visual organization, and print deadlines.",
      "完成 24 期美食生活雜誌排版工作，累積編輯節奏、視覺組織與印刷截稿經驗。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    evidence: copy("LinkedIn record"),
    display: copy("Editorial process language only; archive not implied."),
  },
  {
    id: "cookbook-production-floor",
    code: "03",
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
    status: displayStatus.descriptive,
    evidence: copy("LinkedIn record; Personal archive / memory"),
    display: copy("Approved 50+ wording only; imagery pending rights review."),
  },
  {
    id: "story-archive-ip-office",
    code: "04",
    title: copy("Story Archive & IP Office"),
    period: "2015-2016",
    discipline: copy("Fiction, publications, and creator collaboration"),
    summary: copy(
      "Worked across fiction writing and illustrator coordination, supporting communication between creators and publishing partners.",
      "參與小說創作與繪師協作，協助創作者與出版合作方之間的溝通與交付。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    evidence: copy("LinkedIn record; Published work information"),
    display: copy("Book covers require confirmation before display."),
  },
  {
    id: "operation-control-room",
    code: "05",
    title: copy("Operation Control Room"),
    period: "2016-2018",
    discipline: copy("Creative workflow development"),
    summary: copy(
      "Helped an early-stage media advertising company establish practical creative-production and delivery workflows.",
      "協助早期媒體廣告公司建立可執行的創意製作與交付流程。",
    ),
    displayLevel: "abstract",
    status: displayStatus.abstract,
    evidence: copy("LinkedIn record"),
    display: copy("Abstract workflow representations only."),
  },
  {
    id: "commerce-visual-line",
    code: "06",
    title: copy("Commerce Visual Line"),
    period: "2018-2020",
    discipline: copy("GSK e-commerce visuals and promotional assets"),
    summary: copy(
      "Produced e-commerce visuals, promotional materials, product-image adaptations, and platform assets for GSK brands.",
      "為 GSK 品牌製作電商視覺、促銷素材、商品圖調整與平台使用素材。",
    ),
    displayLevel: "abstract",
    status: displayStatus.abstract,
    evidence: copy("LinkedIn record"),
    display: copy("No original brand or product visuals until approved."),
  },
  {
    id: "multimedia-workshop",
    code: "07",
    title: copy("Multimedia Workshop"),
    period: "2020-present",
    discipline: copy("Web, video, 3D, games, and e-book practice"),
    summary: copy(
      "Publishing experience expands into web, video, 3D, games, and e-book learning and practice.",
    ),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    evidence: copy("LinkedIn record"),
    display: copy("Self-created or placeholder visuals pending selection."),
  },
  {
    id: "ai-workflow-lab",
    code: "08",
    title: copy("AI Workflow Lab"),
    period: "2020-present",
    discipline: copy("AI-assisted interactive storytelling research"),
    summary: copy(
      "Currently explores AI-assisted interactive comics and web-based narrative prototypes through human-in-the-loop creative workflows.",
      "目前以人機協作流程探索 AI 輔助互動漫畫與網頁敘事原型。",
    ),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    evidence: copy("LinkedIn record"),
    display: copy("Research and assisted workflow practice, not engineering specialization."),
  },
];

export const usageSteps = [
  {
    number: "01",
    title: copy("Enter through evidence"),
    body: copy(
      "Start with a traceable record, approved asset, or explicitly marked verification need.",
    ),
  },
  {
    number: "02",
    title: copy("Route through a module"),
    body: copy(
      "Place the material in the room that best explains its production role and transferable method.",
    ),
  },
  {
    number: "03",
    title: copy("Publish with boundaries"),
    body: copy(
      "Show conservative wording first; display original imagery only after rights review.",
    ),
  },
];

export const processingModes = [
  {
    id: "print-to-system",
    label: copy("Print to System"),
    description: copy(
      "Track how prepress precision and recurring editorial delivery become repeatable content operations.",
    ),
    route: copy("Print Engine Room -> Editorial Kitchen -> Operation Control Room"),
  },
  {
    id: "story-to-interaction",
    label: copy("Story to Interaction"),
    description: copy(
      "Follow narrative collaboration into multimedia and AI-assisted interactive prototype research.",
    ),
    route: copy("Story Archive & IP Office -> Multimedia Workshop -> AI Workflow Lab"),
  },
  {
    id: "brief-to-delivery",
    label: copy("Brief to Delivery"),
    description: copy(
      "See planning, coordination, visual production, and review as a connected workflow.",
    ),
    route: copy("Editorial Kitchen -> Cookbook Production Floor -> Commerce Visual Line"),
  },
];

export const caseFiles = [
  {
    title: copy("From Comic Prepress to Content Systems"),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    note: copy("Career entry point through layout, specifications, and print delivery."),
  },
  {
    title: copy("24 Issues on an Editorial Clock"),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    note: copy("Magazine rhythm connecting writing, layout, and recurring deadlines."),
  },
  {
    title: copy("50+ Cookbook-related Publishing Projects", "50+ 本食譜出版相關流程"),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    note: copy("Repeat publishing workflows forming a practical content-production floor."),
  },
  {
    title: copy("Story and Illustrator Bridgework"),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    note: copy("Creator collaboration and publishing-partner communication."),
  },
  {
    title: copy("Creative Operations for an Early Media Startup"),
    displayLevel: "abstract",
    status: displayStatus.abstract,
    note: copy("Coordination and delivery represented without client-specific materials."),
  },
  {
    title: copy("E-commerce Visual Production for GSK"),
    displayLevel: "abstract",
    status: displayStatus.abstract,
    note: copy("Scope described without showing original brand assets."),
  },
  {
    title: copy("Digital Media Transformation"),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    note: copy("Publishing experience extending into newer multimedia forms."),
  },
  {
    title: copy("AI-assisted Interactive Comic Research"),
    displayLevel: "descriptive",
    status: displayStatus.descriptive,
    note: copy("Human-in-the-loop research across narrative, image, and interaction."),
  },
];
