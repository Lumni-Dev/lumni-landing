import type { Dictionary } from "@/i18n/types";

const zh: Dictionary = {
  meta: {
    keywords: [
      "Lumni",
      "软件开发",
      "定制软件",
      "应用开发",
      "流程自动化",
      "系统集成",
      "RPA",
      "技术咨询",
      "网络安全",
      "专属开发团队",
    ],
  },
  og: {
    strip: "系统 · 自动化 · 咨询 · 安全",
  },
  company: {
    tagline: "值得企业信赖的提示词工程。",
    description:
      "Lumni 开发系统、自动化流程，并让工程师融入您的团队。从首次诊断到代码在生产环境中运行。",
  },
  header: {
    navServices: "服务",
    navSystems: "系统 / 软件",
    contactCta: "联系我们",
    ariaHome: "Lumni，回到顶部",
    ariaMainNav: "主导航",
    ariaOpenMenu: "打开菜单",
    ariaCloseMenu: "关闭菜单",
    ariaLanguage: "选择语言",
  },
  hero: {
    ctaStart: "启动项目",
    ctaServices: "查看服务",
    capabilities: ["定制开发", "流程自动化", "技术咨询", "网络安全", "专属团队"],
  },
  services: {
    label: "服务",
    title: "五大领域，一个承诺：支撑业务的软件。",
    description:
      "我们的服务覆盖从诊断到运维。您选择切入点，我们承担端到端的技术责任。",
    items: {
      desenvolvimento: {
        title: "系统与应用开发",
        headline: "从探索到上线，第一个冲刺就零技术债。",
        description:
          "我们打造量身定制的数字产品：支撑关键业务的 Web 平台、移动应用和 API。面向扩展的架构、经过测试的代码和持续交付, 上线次日起，您的业务所依赖的正是这样的工程能力。",
        deliverables: [
          "Web 平台与内部门户",
          "iOS 与 Android 应用",
          "API、集成与微服务",
          "面向扩展的架构",
        ],
      },
      automacao: {
        title: "流程自动化",
        headline: "把被表格吞噬的时间还给您的团队。",
        description:
          "我们梳理业务的真实流程, 而不是手册里的流程, 并消除消耗产能的重复劳动。打通互不相通的系统、编排定时任务与数据流，减少人为错误，让流程端到端可审计。",
        deliverables: [
          "流程梳理与重构",
          "遗留系统集成",
          "自动化任务与 RPA",
          "实时监控看板",
        ],
      },
      consultoria: {
        title: "技术咨询",
        headline: "独立诊断，帮您避开代价高昂的错误决策。",
        description:
          "我们以外部视角评估架构、技术栈、安全与基础设施成本，不附带任何商业目的。您将获得一份按业务影响（而非市场风口）排序的演进计划，每条路径的成本与风险在决策前都清晰可见。",
        deliverables: [
          "架构与代码审计",
          "安全与合规评审",
          "云成本优化",
          "按优先级排列的技术路线图",
        ],
      },
      ciberseguranca: {
        title: "网络安全",
        headline: "在漏洞找到您之前，我们先找到它。",
        description:
          "我们保护您的业务输不起的东西：数据、可用性和声誉。梳理攻击面、以受控方式测试防御、从代码到基础设施根源修复。安全是持续的过程，包含监控与事件响应，而不是压在抽屉里的报告。",
        deliverables: [
          "安全审计与渗透测试",
          "应用与基础设施加固",
          "数据保护合规（LGPD）",
          "监控与事件响应",
        ],
      },
      suporte: {
        title: "研发支持",
        headline: "像您工程团队的延伸一样接入。",
        description:
          "工程师融入您的待办事项、会议节奏和代码规范，第一周即可交付。真正的资深能力与按需扩展，没有固定成本，也没有可能耗时数月的招聘流程带来的迟缓与风险。",
        deliverables: [
          "专属多学科团队",
          "弹性按需投入",
          "贴合您的流程与技术栈",
          "持续的知识转移",
        ],
      },
    },
  },
  systems: {
    label: "自有系统",
    title: "我们也打造自有系统。",
    description:
      "这些是 Lumni 内部开发、运营并持续演进直至成为平台的产品。经日常使用打磨，欢迎了解。",
    items: {
      sirius: {
        name: "Sirius",
        headline: "运行在 Windows 上的 AI 代理。",
        description:
          "Sirius 是 Lumni 面向电脑的 AI 代理。内置三款自有模型 Sirius 1、Sirius 2、Sirius 3，按任务自动选择；并有 48 个家族共 940 个 MCP 工具，每次请求通过嵌入进行筛选。直接在本机处理代码、文件编辑、终端、git、数据库、Office 文档、图像和 PDF。原生 Windows 应用，流式回复，每个操作都需批准，并具备 skills、子代理和本地记忆。",
        highlights: [
          "原生 Windows 应用",
          "Sirius 1、2、3 模型",
          "940 个 MCP 工具",
          "嵌入式筛选",
          "文件、终端与 git",
          "Skills 与子代理",
          "流式回复",
          "逐操作批准",
        ],
        actionLabel: "了解 Sirius",
        status: "已上线",
      },
      disys: {
        name: "Disys",
        headline: "人力资源 ERP。",
        description:
          "Disys 是 Lumni 面向招聘与录用的人力资源 ERP。它将企业、职位、候选人和流程整合到一个平台：客户与部门档案、带职级和薪资范围的职位发布、可搜索的人才与简历库，以及可视化的拖放流水线，用于在各阶段之间移动候选人。通过邮件邀请团队成员并按页面分配权限，仅使用 Google 或 LinkedIn 登录，无需管理任何密码。",
        highlights: [
          "招聘与录用",
          "企业与职位",
          "候选人库",
          "拖放式流水线",
          "按页面权限",
          "Google 与 LinkedIn 登录",
          "即时搜索",
          "无需密码",
        ],
        actionLabel: "了解 Disys",
        status: "已上线",
      },
    },
  },
  contact: {
    label: "联系",
    title: "聊聊您的下一步技术规划。",
    description:
      "告诉我们问题，而不是解决方案。第一次交流是一次诊断, 没有约束，也没有千篇一律的方案：如果正确的路不经过我们，我们也会如实相告。",
    panelTag: "direct_channels",
    available: "在线",
    channels: {
      email: "邮箱",
      whatsapp: "WhatsApp",
    },
  },
  footer: {
    servicesHeading: "服务",
    contactHeading: "联系",
    ariaLegalNav: "法律页面",
    privacy: "隐私",
    terms: "条款",
    backToTop: "返回顶部",
    rights: "版权所有。",
  },
  legal: {
    updatedAtLabel: "最后更新：",
    updatedAt: "2026年7月25日",
    backToSite: "返回网站",
    home: "首页",
    courtesyNote: "本文件为方便起见以英文提供。如有歧义，以葡萄牙语原文为准。",
  },
};

export default zh;
