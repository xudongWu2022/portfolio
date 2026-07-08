// All site content lives here, keyed by language.
// `strings` = UI labels. `education`, `experience`, `projects`, `skills` = structured
// data where each item carries both `en` and `zh` fields, selected at render time.

export const profile = {
  name: 'Oliver Wu',
  altName: 'Xudong Wu',
  location: 'Santa Clara, CA',
  email: 'wxd.2022.11.04@gmail.com',
  phone: '+1 669-287-6534',
  github: 'https://github.com/xudongWu2022',
  githubHandle: 'xudongWu2022',
}

export const strings = {
  en: {
    langLabel: '中文',
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      role: 'Forward Deployed Engineer · AI Agent & Web3 Infrastructure',
      tagline:
        'I build safety and payment infrastructure for AI agents — from on-chain subscription rails to read-only spend ledgers that keep autonomous agents from burning money.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      body: [
        "I'm a Forward Deployed Engineer and full-stack builder focused on the intersection of AI agents and Web3. I like shipping infrastructure that sits in the critical path — payment rails, spend guardrails, and automation that turns messy real-world operations into reliable software.",
        'With a background spanning finance and computer science, I care as much about the business outcome as the code: cutting factory turnaround, giving teams a neutral book of record for agent spend, or making autonomous authorization safe by default.',
      ],
      educationTitle: 'Education',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Infrastructure for the agent economy.',
      roadmap: 'Roadmap',
      stack: 'Stack',
      viewGithub: 'GitHub',
      visitSite: 'Visit site',
      localNote: 'Local / private repo',
    },
    experience: {
      title: 'Experience',
      present: 'Present',
    },
    skills: {
      title: 'Skills',
    },
    contact: {
      title: 'Get in Touch',
      body: "Open to roles and collaborations in AI-agent infrastructure, Web3, and applied engineering. The fastest way to reach me is email.",
      emailBtn: 'Email Me',
      githubBtn: 'GitHub',
    },
    footer: {
      built: 'Built with React + Vite.',
    },
  },
  zh: {
    langLabel: 'EN',
    nav: {
      about: '关于',
      projects: '项目',
      experience: '经历',
      skills: '技能',
      contact: '联系',
    },
    hero: {
      role: 'Forward Deployed Engineer · AI Agent 与 Web3 基础设施',
      tagline:
        '我为 AI Agent 构建安全与支付基础设施 —— 从链上订阅支付通道，到只读花费账本，让自主 Agent 不再把钱烧穿。',
      viewProjects: '查看项目',
      getInTouch: '联系我',
    },
    about: {
      title: '关于我',
      body: [
        '我是一名 Forward Deployed Engineer 和全栈工程师，专注于 AI Agent 与 Web3 的交叉领域。我喜欢做处在关键路径上的基础设施 —— 支付通道、花费护栏，以及把混乱的真实业务流程变成可靠软件的自动化。',
      ],
      educationTitle: '教育背景',
    },
    projects: {
      title: '项目',
      subtitle: '为 Agent 经济打造的基础设施。',
      roadmap: '路线图',
      stack: '技术栈',
      viewGithub: 'GitHub',
      visitSite: '访问网站',
      localNote: '本地 / 私有仓库',
    },
    experience: {
      title: '经历',
      present: '至今',
    },
    skills: {
      title: '技能',
    },
    contact: {
      title: '联系我',
      body: '欢迎在 AI Agent 基础设施、Web3 和应用工程方向交流合作与机会。发邮件是最快的联系方式。',
      emailBtn: '发邮件',
      githubBtn: 'GitHub',
    },
    footer: {
      built: '使用 React + Vite 构建。',
    },
  },
}

export const education = [
  {
    school: { en: 'Santa Clara University', zh: '圣塔克拉拉大学' },
    degree: { en: 'MS, Computer Science & Engineering', zh: '计算机科学与工程 硕士' },
    period: '2023 – Mar 2026',
    gpa: 'GPA 3.7 / 4.0',
  },
  {
    school: { en: 'South China University of Technology', zh: '华南理工大学' },
    degree: { en: 'BS, Finance', zh: '金融学 学士' },
    period: '2019 – 2023',
    gpa: 'GPA 3.67 / 4.0',
  },
]

export const experience = [
  {
    company: 'ABC Cabinet',
    role: { en: 'Forward Deployed Engineer (FDE)', zh: 'Forward Deployed Engineer（FDE）' },
    location: { en: 'United States', zh: '美国' },
    start: 'May 2026',
    endKey: 'present',
    current: true,
    bullets: {
      en: [
        'Automated core factory production workflows, replacing manual steps to reduce turnaround time and error rates.',
        'Built data-analysis pipelines over inventory, labor, and material costs to generate cost-optimal production plans and continuously improve process efficiency.',
        'Developed a sales-facing AI agent that turns natural-language descriptions into accurate product renderings, using Python constraint scripts to curb model hallucination and keep generated images faithful to spec.',
        'Stood up an internal knowledge base to centralize product, process, and operational knowledge for the team.',
        'Built scheduled crawler jobs that detect newly issued rebuild permits and surface high-intent potential customers for sales outreach.',
      ],
      zh: [
        '自动化工厂核心生产流程，用软件替代人工环节，缩短交付周期并降低出错率。',
        '搭建针对库存、人工成本与材料成本的数据分析管线，产出成本最优的生产方案，持续改进流程效率。',
        '构建面向销售的 AI Agent，根据自然语言描述精准生成产品图，用 Python 脚本约束减少模型幻觉，保证出图与需求一致。',
        '搭建内部知识库，集中沉淀产品、流程与运营知识，供团队复用。',
        '开发定时爬虫任务，抓取新签发的 rebuild permit，识别并挖掘高意向潜在客户，支撑销售拓客。',
      ],
    },
  },
  {
    company: 'Huawei',
    role: { en: 'Mobile Developer', zh: '移动端开发工程师' },
    location: { en: 'Shenzhen, China', zh: '中国 深圳' },
    start: 'May 2024',
    end: 'Sep 2024',
    bullets: {
      en: [
        'Developed and maintained GameCenter (游戏中心), a pre-installed app shipping across Huawei’s global smartphone base, owning features across the game discovery, download, and management flows.',
        'Resolved 80+ technical issues through debugging and log analysis, improving app stability and crash-free rates across a wide range of device models and Android / HarmonyOS versions.',
        'Optimized UI rendering and the data-loading flow, improving page load speed by 72% and delivering a smoother browsing experience on low-end devices.',
        'Partnered with product managers, QA, and test engineers to translate requirements into shipped features, continuously refactoring to keep a large codebase maintainable.',
        'Participated in feature design reviews and code reviews to raise engineering quality and long-term product performance.',
      ],
      zh: [
        '开发并维护华为「游戏中心」App —— 预装在华为全球智能手机上的应用，负责游戏发现、下载与管理链路上的多个功能模块。',
        '通过调试与日志分析解决 80+ 技术问题，提升应用稳定性与崩溃率，覆盖大量机型与 Android / HarmonyOS 版本。',
        '优化 UI 渲染与数据加载流程，页面加载速度提升 72%，在低端机型上带来更流畅的浏览体验。',
        '与产品经理、QA 和测试工程师紧密协作，把需求落地为可交付功能，并持续重构以保证大型代码库的可维护性。',
        '参与功能设计评审与 code review，提升工程质量与产品的长期性能。',
      ],
    },
  },
]

export const projects = [
  {
    name: 'Finaric',
    role: { en: 'Founding Engineer', zh: 'Founding Engineer / 创始工程师' },
    summary: {
      en: 'Relationship intelligence for wealth advisors — rehearse client meetings with AI, then get real-time coaching during the live conversation.',
      zh: '面向财富顾问的关系智能平台 —— 用 AI 预演客户会谈，并在真实对话中获得实时提示。',
    },
    description: {
      en: 'Finaric lets advisors practice upcoming meetings with an AI that remembers the full relationship history, then detects live signals — hesitation, concern, trust shifts — during the real conversation, before they surface in the CRM. It auto-updates client profiles, preserves longitudinal context, and ships FINRA/SEC-aligned data protection (PII pseudonymization, 256-bit encryption, US data residency). As a founding engineer on the early team, built core AI roleplay and real-time signal-detection features.',
      zh: 'Finaric 让顾问用记得完整关系历史的 AI 预演即将到来的会谈，并在真实对话中实时检测信号 —— 犹豫、顾虑、信任变化 —— 在它们进入 CRM 之前就捕捉到。系统自动更新客户画像、保留跨会谈的长期上下文，并具备符合 FINRA/SEC 的数据保护（PII 假名化、256 位加密、美国境内数据存储）。作为早期团队的 founding engineer，构建了核心的 AI 预演对话与实时信号检测功能。',
    },
    tags: ['Next.js', 'FastAPI', 'Anthropic / OpenAI', 'WebRTC', 'Real-time AI', 'Compliance'],
    site: 'https://finaric.com',
    badge: { en: 'Live · Closed source', zh: '已上线 · 闭源' },
  },
  {
    name: 'agent-spend-collector',
    summary: {
      en: 'A read-only spend ledger and safety layer for AI agents.',
      zh: '给 AI Agent 用的只读花费账本与安全控制层。',
    },
    description: {
      en: 'Collects LLM token cost, x402 payments, USDC transfers, AWS/GCP/Azure cloud cost, and Stripe card payments into one FOCUS-shaped SQLite ledger, then flags runaway loops, spend spikes, budget burn, new keys, and new merchants. Ships anomaly detectors, a static dashboard, and a pre-spend gateway that can block a request before it spends.',
      zh: '把 LLM token 成本、x402 支付、USDC 转账、AWS/GCP/Azure 云账单与 Stripe 卡支付统一写进一张 FOCUS 形态的 SQLite 账本，再检测循环失控、费用暴涨、预算烧穿、新 key 与新商户。内置异常检测器、静态看板，以及能在花钱前拦截请求的网关。',
    },
    tags: ['Python', 'SQLite', 'FinOps', 'Anomaly Detection', 'Gateway', 'x402'],
    github: 'https://github.com/ywutian/agent-spend-collector',
    local: false,
  },
  {
    name: 'SubChain',
    summary: {
      en: 'Web3 subscription billing, evolving into agent-native subscription infrastructure.',
      zh: 'Web3 订阅计费，正在演进为 agent-native 的订阅基础设施。',
    },
    description: {
      en: 'Merchants create recurring mUSDC plans; users approve and subscribe from MetaMask; due subscriptions are charged through a keeper-style flow. Full stack with an event indexer plus a service-agent and consumer-agent economic loop.',
      zh: '商户创建 mUSDC 周期性订阅计划，用户通过 MetaMask 授权并订阅，到期订阅经由 keeper 流程扣款。全栈实现，包含事件索引器，以及 service-agent 与 consumer-agent 的经济闭环。',
    },
    roadmap: {
      en: 'Evolving into agent-native subscription infrastructure — x402 pay-per-use plus safe, budget-bounded recurring authorization for AI agents.',
      zh: '演进为 agent-native 订阅基础设施 —— x402 按次付费，加上安全、有预算上限的 Agent 周期性授权。',
    },
    tags: ['Solidity', 'Foundry', 'Next.js', 'x402', 'MetaMask', 'Postgres'],
    github: 'https://github.com/ywutian',
    local: true,
  },
]

export const skills = [
  {
    group: { en: 'AI / Agent Infra', zh: 'AI / Agent 基础设施' },
    items: ['LLM cost accounting', 'x402', 'Anomaly detection', 'Pre-spend gateways', 'AI agents'],
  },
  {
    group: { en: 'Web3', zh: 'Web3' },
    items: ['Solidity', 'Foundry (anvil/forge/cast)', 'MetaMask flows', 'USDC / mUSDC'],
  },
  {
    group: { en: 'Backend', zh: '后端' },
    items: ['Java', 'Python', 'Node.js', 'Spring Boot', 'Redis', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    group: { en: 'Frontend', zh: '前端' },
    items: ['React', 'Next.js', 'JavaScript'],
  },
  {
    group: { en: 'Product', zh: '产品' },
    items: ['Requirement analysis', 'Agile', 'Cross-functional collaboration'],
  },
]
