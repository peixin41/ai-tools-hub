export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: 'ai-writing',
    name: 'AI Writing',
    description: 'AI-powered writing assistants, content generators, and copywriting tools',
    icon: '✍️',
  },
  {
    slug: 'ai-image',
    name: 'AI Image',
    description: 'AI image generators, editors, and design tools',
    icon: '🎨',
  },
  {
    slug: 'ai-video',
    name: 'AI Video',
    description: 'AI video creation, editing, and generation tools',
    icon: '🎬',
  },
  {
    slug: 'ai-coding',
    name: 'AI Coding',
    description: 'AI code assistants, IDE plugins, and development tools',
    icon: '💻',
  },
  {
    slug: 'ai-marketing',
    name: 'AI Marketing',
    description: 'AI tools for SEO, social media, email marketing, and analytics',
    icon: '📈',
  },
  {
    slug: 'ai-productivity',
    name: 'AI Productivity',
    description: 'AI tools for meetings, notes, scheduling, and workflow automation',
    icon: '⚡',
  },
  {
    slug: 'ai-audio',
    name: 'AI Audio',
    description: 'AI music generation, voice synthesis, and audio editing tools',
    icon: '🎵',
  },
  {
    slug: 'ai-chatbot',
    name: 'AI Chatbots',
    description: 'Conversational AI, customer service bots, and virtual assistants',
    icon: '🤖',
  },
];
