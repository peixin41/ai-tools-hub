import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Blog - Guides, Tutorials & News",
  description:
    "Stay updated with the latest AI tool guides, tutorials, comparisons, and industry news. Expert insights to help you choose and use the best AI tools.",
};

const blogPosts = [
  {
    slug: "best-ai-writing-tools-2026",
    title: "2026年最佳AI写作工具排行榜：专业评测与选择指南",
    excerpt:
      "ChatGPT、Claude、Jasper、Notion AI、Perplexity五大AI写作工具深度对比，帮你选择最适合自己需求的工具。",
    date: "2026-06-29",
    category: "评测",
    readTime: "8 min read",
  },
  {
    slug: "ai-image-generators-comparison",
    title: "AI图像生成器对比：Midjourney vs DALL-E vs Stable Diffusion 2026",
    excerpt:
      "Midjourney v7、DALL-E 4、Stable Diffusion 3、Adobe Firefly 3四大图像生成器全面评测，艺术创作、商业应用、定制化需求全覆盖。",
    date: "2026-06-29",
    category: "对比",
    readTime: "10 min read",
  },
  {
    slug: "best-ai-coding-tools-2026",
    title: "2026年最佳AI编程助手：GitHub Copilot vs Cursor vs Claude Code",
    excerpt:
      "AI编程助手已经从简单的代码补全进化到全栈开发协作伙伴。本文深度评测三大顶级AI编程工具。",
    date: "2026-06-29",
    category: "编程",
    readTime: "7 min read",
  },
  {
    slug: "ai-video-tools-guide-2026",
    title: "AI视频生成工具完全指南：Runway、Pika、Sora 2026横评",
    excerpt:
      "AI视频生成技术已经成熟到可以用于商业制作。从文字生成视频、图像转视频到视频编辑和特效，AI正在彻底改变视频创作的方式。",
    date: "2026-06-29",
    category: "视频",
    readTime: "9 min read",
  },
  {
    slug: "ai-audio-tools-review-2026",
    title: "AI音频工具推荐：Suno、ElevenLabs和AIVA音乐创作对比",
    excerpt:
      "AI音频技术已经覆盖了从音乐生成、语音合成到音效制作的完整链条。无论你是音乐人、播客主播还是视频创作者，AI音频工具都能让你以极低成本获得专业级音频内容。",
    date: "2026-06-29",
    category: "音频",
    readTime: "6 min read",
  },
  {
    slug: "build-website-with-ai-2026",
    title: "初学者指南：如何用AI工具从零开始建网站（2026版）",
    excerpt:
      "即使完全没有编程经验，2026年的AI工具也能让你在一天之内建立起一个功能完整的网站。本文将介绍如何利用AI工具从零开始完成域名注册、网站设计和内容生成。",
    date: "2026-06-29",
    category: "教程",
    readTime: "12 min read",
  },
  {
    slug: "chatgpt-vs-claude-vs-gemini-2026",
    title: "ChatGPT vs Claude vs Gemini：2026年三大AI聊天机器人终极对决",
    excerpt:
      "OpenAI、Anthropic和Google三大巨头的AI聊天机器人各有特色，本文将为你详细对比。",
    date: "2026-06-29",
    category: "对比",
    readTime: "8 min read",
  },
  {
    slug: "ai-marketing-tools-2026",
    title: "AI营销工具推荐：Jasper、Copy.ai和AISEO 2026年度评测",
    excerpt:
      "营销团队现在可以用AI工具批量产出高质量内容、优化SEO策略、生成个性化营销邮件。本文评测三款最受欢迎的AI营销工具。",
    date: "2026-06-29",
    category: "营销",
    readTime: "5 min read",
  },
  {
    slug: "ai-productivity-tools-2026",
    title: "AI如何改变办公效率：Notion AI、微软Copilot和Google Workspace AI对比",
    excerpt:
      "2026年，三大办公生态平台都已深度集成AI功能。本文将帮助你根据自己的工作场景选择最合适的AI办公工具。",
    date: "2026-06-29",
    category: "生产力",
    readTime: "6 min read",
  },
  {
    slug: "ai-tools-pricing-guide-2026",
    title: "2026年AI工具定价终极指南：从免费到企业级，你该花多少钱？",
    excerpt:
      "越来越多的AI工具采用订阅制收费，如何合理分配预算、选择性价比最高的工具组合，成为AI用户最关心的问题。本文梳理2026年主流AI工具的定价体系。",
    date: "2026-06-29",
    category: "指南",
    readTime: "9 min read",
  },
  {
    slug: "ai-seo-tools-2026",
    title: "2026年AI驱动的SEO优化工具推荐：让搜索引擎主动找你",
    excerpt:
      "Surfer SEO、Frase、NeuronWriter、MarketMuse四款AI SEO工具深度评测，从关键词研究到内容优化全覆盖。",
    date: "2026-06-29",
    category: "营销",
    readTime: "7 min read",
  },
  {
    slug: "ai-customer-service-tools-2026",
    title: "AI客服工具对比：Zendesk AI、Intercom Fin和Freshdesk Freddy",
    excerpt:
      "超过60%的企业客服咨询已由AI自动处理。本文对比三大主流AI客服平台，帮你选择适合自己企业的方案。",
    date: "2026-06-29",
    category: "聊天机器人",
    readTime: "6 min read",
  },
  {
    slug: "free-vs-paid-ai-tools-2026",
    title: "免费AI工具 vs 付费AI工具：2026年你该花多少钱？",
    excerpt:
      "ChatGPT、Claude、Gemini、Perplexity免费版实测对比，分析什么时候该付费，以及最省钱的AI工具组合方案。",
    date: "2026-06-29",
    category: "指南",
    readTime: "8 min read",
  },
  {
    slug: "ai-trends-2026-h2",
    title: "2026年下半年AI行业五大趋势预测",
    excerpt:
      "AI Agent成熟、多模态AI普及、芯片竞争白热化、安全监管加强、垂直行业融合，了解下半年最值得关注的AI趋势。",
    date: "2026-06-29",
    category: "行业动态",
    readTime: "10 min read",
  },
  {
    slug: "ai-data-analysis-tools-2026",
    title: "AI数据分析工具推荐：Julius、Rows AI和ChatCSV让Excel下岗",
    excerpt:
      "无需精通SQL和Python，用自然语言完成复杂数据分析。Julius AI、Rows AI、ChatCSV、Akkio四大工具深度对比。",
    date: "2026-06-29",
    category: "数据",
    readTime: "6 min read",
  },
  {
    slug: "ai-ecommerce-tools-2026",
    title: "AI电商工具合集：Vue.ai、Syte和Dynamic Yield帮你日销过万",
    excerpt:
      "从商品上架、视觉设计到个性化推荐和智能客服，AI正在重塑电商每一个环节。本文推荐最实用的AI电商工具组合。",
    date: "2026-06-29",
    category: "电商",
    readTime: "7 min read",
  },
  {
    slug: "make-money-with-ai-2026",
    title: "用AI工具赚钱的8种方法：「2026年真实可行」",
    excerpt:
      "从AI内容创作到电商开店，从自由职业到应用开发，8种经过验证的AI赚钱方法详解，含启动成本和收入预估。",
    date: "2026-06-29",
    category: "指南",
    readTime: "12 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">AI Tools Blog</h1>
        <p className="text-lg text-gray-600 mt-2">
          Guides, comparisons, and insights to help you navigate the AI tools landscape
        </p>
      </div>

      {/* Ad Space */}
      <div className="bg-gray-100 border border-dashed border-gray-300 rounded-xl h-24 flex items-center justify-center text-sm text-gray-400 mb-10">
        Ad Space - Banner (728×90)
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all overflow-hidden"
          >
            <div className="h-40 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded-full font-medium">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
