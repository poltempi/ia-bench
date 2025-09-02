import { ModelData, PricingData, LeaderboardData, EditorData, CliAgentData, VibePlatformData, ProductivityToolData, FrontendFrameworkData, ProgrammingLanguageData, BackendFrameworkData, DatabaseData, HostingPlatformData, CmsData, ApiServicesData } from './types';
import { GptIcon, ClaudeIcon, GeminiIcon, DefaultIcon } from './components/Icons';

export const USD_TO_EUR_RATE = 0.93;

export const PROVIDER_COLORS: { [key: string]: string } = {
  OpenAI: '#22c55e',
  Anthropic: '#f97316',
  Google: '#3b82f6',
  Alibaba: '#06b6d4',
  Deepseek: '#ec4899',
  'Zhipu AI': '#6366f1',
  xAI: '#9ca3af',
  Mistral: '#8b5cf6',
  Cohere: '#ef4444',
  Meta: '#14b8a6',
};

// Data for the scatter plot chart
const modelDataRaw: Omit<ModelData, 'color'>[] = [
  { name: 'Grok Code Fast 1', provider: 'xAI', cost: 0.04, performance: 41 },
  { name: 'Deepseek V3.1', provider: 'Deepseek', cost: 0.035, performance: 47 },
  { name: 'GPT-5 nano', provider: 'OpenAI', cost: 0.08, performance: 40 },
  { name: 'Qwen2-72B', provider: 'Alibaba', cost: 0.1, performance: 78 },
  { name: 'Claude Haiku 3.5', provider: 'Anthropic', cost: 0.15, performance: 45 },
  { name: 'GPT-5 mini', provider: 'OpenAI', cost: 0.25, performance: 55 },
  { name: 'Gemini 2.5 Pro', provider: 'Google', cost: 0.35, performance: 65 },
  { name: 'Claude Sonnet 4', provider: 'Anthropic', cost: 0.5, performance: 70 },
  { name: 'GPT-5', provider: 'OpenAI', cost: 0.8, performance: 80 },
  { name: 'GLM-4.5', provider: 'Zhipu AI', cost: 1.0, performance: 75 },
  { name: 'Claude Opus 4.1', provider: 'Anthropic', cost: 1.5, performance: 90 },
];
export const MODEL_DATA: ModelData[] = modelDataRaw.map(m => ({
    ...m,
    color: PROVIDER_COLORS[m.provider] || '#ffffff',
}));


// Data for the pricing table
export const PRICING_DATA: PricingData[] = [
  // OpenAI
  { model: 'GPT-4o', provider: 'OpenAI', inputPrice: 5.00, outputPrice: 15.00, source: "OpenAI", sourceUrl: 'https://openai.com/pricing' },
  { model: 'GPT-4 Turbo', provider: 'OpenAI', inputPrice: 10.00, outputPrice: 30.00, source: "OpenAI", sourceUrl: 'https://openai.com/pricing' },
  { model: 'GPT-5', provider: 'OpenAI', inputPrice: 1.25, outputPrice: 10.00, source: "Simon Willison's Weblog", sourceUrl: 'https://simonwillison.net/' },
  { model: 'GPT-5 mini', provider: 'OpenAI', inputPrice: 0.25, outputPrice: 2.00, source: 'WIRED', sourceUrl: 'https://www.wired.com/' },
  { model: 'GPT-5 nano', provider: 'OpenAI', inputPrice: 0.05, outputPrice: 0.40, source: 'WIRED', sourceUrl: 'https://www.wired.com/' },
  // Anthropic
  { model: 'Claude Opus 4.1', provider: 'Anthropic', inputPrice: 15.00, outputPrice: 75.00, source: 'Anthropic', sourceUrl: 'https://www.anthropic.com/pricing' },
  { model: 'Claude Sonnet 4', provider: 'Anthropic', inputPrice: 3.00, outputPrice: 15.00, source: 'Anthropic', sourceUrl: 'https://www.anthropic.com/pricing' },
  { model: 'Claude Haiku 3.5', provider: 'Anthropic', inputPrice: 0.25, outputPrice: 1.25, source: 'Anthropic', sourceUrl: 'https://www.anthropic.com/pricing' },
  // Google
  { model: 'Gemini 1.5 Pro', provider: 'Google', inputPrice: 3.50, outputPrice: 10.50, source: 'Google AI', sourceUrl: 'https://ai.google.dev/pricing' },
  { model: 'Gemini 1.5 Flash', provider: 'Google', inputPrice: 0.35, outputPrice: 1.05, source: 'Google AI', sourceUrl: 'https://ai.google.dev/pricing' },
  { model: 'Gemini 1.0 Pro', provider: 'Google', inputPrice: 0.50, outputPrice: 1.50, source: 'Google AI', sourceUrl: 'https://ai.google.dev/pricing' },
  // Mistral
  { model: 'Mistral Large', provider: 'Mistral', inputPrice: 8.00, outputPrice: 24.00, source: 'Mistral AI', sourceUrl: 'https://mistral.ai/technology/#pricing' },
  { model: 'Mistral Medium', provider: 'Mistral', inputPrice: 2.70, outputPrice: 8.10, source: 'Mistral AI', sourceUrl: 'https://mistral.ai/technology/#pricing' },
  { model: 'Mistral Small', provider: 'Mistral', inputPrice: 0.60, outputPrice: 1.80, source: 'Mistral AI', sourceUrl: 'https://mistral.ai/technology/#pricing' },
  // Alibaba
  { model: 'Qwen2-72B Instruct', provider: 'Alibaba', inputPrice: 0.90, outputPrice: 0.90, source: 'Together.AI', sourceUrl: 'https://www.together.ai/' },
  // Zhipu AI
  { model: 'GLM-4', provider: 'Zhipu AI', inputPrice: 13.80, outputPrice: 13.80, source: 'Zhipu AI', sourceUrl: 'https://open.bigmodel.cn/pricing' },
  // Others
  { model: 'Cohere Command R+', provider: 'Cohere', inputPrice: 0.50, outputPrice: 1.50, source: 'Cohere', sourceUrl: 'https://cohere.com/pricing' },
  { model: 'Llama3-70b (Groq)', provider: 'Meta', inputPrice: 0.59, outputPrice: 0.79, source: 'Groq', sourceUrl: 'https://wow.groq.com/pricing/' },
];

// Data for the leaderboard table
const leaderboardDataRaw: Omit<LeaderboardData, 'color'>[] = [
  { rank: 1, name: 'Claude Opus 4.1', provider: 'Anthropic', icon: ClaudeIcon, percentageScore: 90, rawScore: 198, answered: 200, totalQuestions: 220, genPercent: 95, codePercent: 85 },
  { rank: 2, name: 'GPT-5', provider: 'OpenAI', icon: GptIcon, percentageScore: 80, rawScore: 176, answered: 180, totalQuestions: 220, genPercent: 88, codePercent: 72 },
  { rank: 3, name: 'Qwen2-72B', provider: 'Alibaba', icon: DefaultIcon, percentageScore: 78, rawScore: 171, answered: 175, totalQuestions: 220, genPercent: 85, codePercent: 71 },
  { rank: 4, name: 'GLM-4.5', provider: 'Zhipu AI', icon: DefaultIcon, percentageScore: 75, rawScore: 165, answered: 170, totalQuestions: 220, genPercent: 80, codePercent: 70 },
  { rank: 5, name: 'Claude Sonnet 4', provider: 'Anthropic', icon: ClaudeIcon, percentageScore: 70, rawScore: 154, answered: 160, totalQuestions: 220, genPercent: 75, codePercent: 65 },
  { rank: 6, name: 'Gemini 2.5 Pro', provider: 'Google', icon: GeminiIcon, percentageScore: 65, rawScore: 143, answered: 150, totalQuestions: 220, genPercent: 68, codePercent: 62 },
  { rank: 7, name: 'GPT-5 mini', provider: 'OpenAI', icon: GptIcon, percentageScore: 55, rawScore: 121, answered: 120, totalQuestions: 220, genPercent: 60, codePercent: 50 },
  { rank: 8, name: 'Deepseek V3.1', provider: 'Deepseek', icon: DefaultIcon, percentageScore: 47, rawScore: 103, answered: 105, totalQuestions: 220, genPercent: 50, codePercent: 44 },
  { rank: 9, name: 'Claude Haiku 3.5', provider: 'Anthropic', icon: ClaudeIcon, percentageScore: 45, rawScore: 99, answered: 100, totalQuestions: 220, genPercent: 48, codePercent: 42 },
  { rank: 10, name: 'Grok Code Fast 1', provider: 'xAI', icon: DefaultIcon, percentageScore: 41, rawScore: 90, answered: 90, totalQuestions: 220, genPercent: 33, codePercent: 49 },
  { rank: 11, name: 'GPT-5 nano', provider: 'OpenAI', icon: GptIcon, percentageScore: 40, rawScore: 88, answered: 88, totalQuestions: 220, genPercent: 42, codePercent: 38 },
];

export const LEADERBOARD_DATA: LeaderboardData[] = leaderboardDataRaw.map(item => ({
    ...item,
    color: PROVIDER_COLORS[item.provider] || '#ffffff',
}));

// Data for CLI-First Agents
export const CLI_AGENT_COLORS: { [key: string]: string } = {
    'Claude Code': '#f97316',
    'Gemini CLI': '#3b82f6',
    'Warp': '#a855f7',
    'Codeex (OpenAI)': '#22c55e',
    'Qwen Code': '#06b6d4',
};

const cliAgentsDataRaw: Omit<CliAgentData, 'color'>[] = [
    { name: 'Claude Code', description: 'Agente de terminal con "búsqueda agéntica" en grandes repositorios.', pricing: 'Pago por uso (API)' },
    { name: 'Gemini CLI', description: 'Con "plan mode" e "implementation mode".', pricing: 'Gratuito (con límites generosos)' },
    { name: 'Warp', description: 'Terminal en Rust que evoluciona a un entorno agéntico (Warp 2.0).', pricing: 'No especificado' },
    { name: 'Codeex (OpenAI)', description: 'Agente rápido (Rust) con múltiples modos en VS Code.', pricing: 'Suscripción (incluido en ChatGPT)' },
    { name: 'Qwen Code', description: 'Bifurcación de Gemini CLI optimizada para modelos Qwen.', pricing: 'Gratuito (con límites generosos)' },
];

export const CLI_AGENTS_DATA: CliAgentData[] = cliAgentsDataRaw.map(a => ({
    ...a,
    color: CLI_AGENT_COLORS[a.name] || '#ffffff',
}));

// Data for the Editors/IDEs list
export const EDITOR_COLORS: { [key: string]: string } = {
    'Alibaba Qoder': '#06b6d4',
    'Cursor': '#10b981',
    'Windsurf': '#84cc16',
    'Kiro (AWS)': '#f59e0b',
    'Zed': '#6b7280',
    'VS Code': '#3b82f6',
    'GitHub Copilot': '#4b5563',
    'Trae': '#d946ef',
};

const editorsDataRaw: Omit<EditorData, 'color'>[] = [
    { name: 'VS Code', description: 'Editor de código extensible, base para muchas herramientas de IA.', pricing: 'Gratuito (Open Source)' },
    { name: 'Cursor', description: 'Bifurcación de VS Code con IA integrada y elección de modelos.', pricing: 'Suscripción Fija (desde $20/mes)' },
    { name: 'Alibaba Qoder', description: 'IDE nativo de IA con "Quest Mode" para tareas autónomas.', pricing: 'Gratuito (Vista Previa Pública)' },
    { name: 'Windsurf', description: '"IDE agéntico" centrado en el "estado de flujo" del desarrollador.', pricing: 'Suscripción Fija' },
    { name: 'Kiro (AWS)', description: 'Enfocado en "desarrollo dirigido por especificaciones".', pricing: 'No especificado' },
    { name: 'Zed', description: 'Editor de alto rendimiento (Rust) con flexibilidad de API.', pricing: 'BYOK (Usa tu propia API key)' },
    { name: 'GitHub Copilot', description: 'Asistente de IA (programador en pareja) que ofrece autocompletado y chat en el editor.', pricing: 'Suscripción Fija (desde $10/mes)' },
    { name: 'Trae', description: 'Editor de código con IA de ByteDance, enfocado en ser un "coding partner".', pricing: 'Suscripción Fija (desde $10/mes)' },
];

export const EDITORS_DATA: EditorData[] = editorsDataRaw.map(e => ({
    ...e,
    color: EDITOR_COLORS[e.name] || '#ffffff',
}));

// Data for Vibe Coding Platforms
export const VIBE_PLATFORM_COLORS: { [key: string]: string } = {
    'Google AI Studio': '#3b82f6',
    'Firebase Studio': '#f59e0b',
    'Gemini Code Assist': '#a855f7',
    'bold.new': '#6b7280',
    'lovable': '#ec4899',
};

const vibePlatformsDataRaw: Omit<VibePlatformData, 'color'>[] = [
    { name: 'Google AI Studio', description: 'Prototipado rápido de aplicaciones generativas.', pricing: 'Gratuito' },
    { name: 'Firebase Studio', description: 'Entorno web para construir aplicaciones de producción.', pricing: 'No especificado' },
    { name: 'Gemini Code Assist', description: '"Programador en pareja" para editores existentes (VS Code, JetBrains).', pricing: 'No especificado' },
    { name: 'bold.new', description: 'Generador de código basado en prompts de Vercel para componentes React.', pricing: 'Gratuito (con planes de pago)' },
    { name: 'lovable', description: 'Generador de componentes de UI con IA para React y Tailwind CSS.', pricing: 'Gratuito (con planes de pago)' },
];

export const VIBE_PLATFORMS_DATA: VibePlatformData[] = vibePlatformsDataRaw.map(p => ({
    ...p,
    color: VIBE_PLATFORM_COLORS[p.name] || '#ffffff',
}));

// Data for Productivity & Context Tools
export const PRODUCTIVITY_TOOL_COLORS: { [key: string]: string } = {
    'Byte Rover': '#ef4444',
    'Sidekick & DeepWiki': '#14b8a6',
    'Dart': '#6366f1',
    'Lutra': '#f97316',
    'Better TStack': '#22c55e',
};

const productivityToolsDataRaw: Omit<ProductivityToolData, 'color'>[] = [
    { name: 'Byte Rover', description: '"Capa de memoria central" para que los agentes recuerden lógica y prácticas.', pricing: 'No especificado' },
    { name: 'Sidekick & DeepWiki', description: 'Genera archivos de contexto markdown para agentes.', pricing: 'Open Source' },
    { name: 'Dart', description: 'Gestor de tareas con IA para planificación y automatización.', pricing: 'No especificado' },
    { name: 'Lutra', description: 'Agente que se conecta a apps de trabajo (Slack, GitHub) para automatizar.', pricing: 'No especificado' },
    { name: 'Better TStack', description: 'Generador de proyectos Next.js/Expo personalizados.', pricing: 'No especificado' },
];

export const PRODUCTIVITY_TOOLS_DATA: ProductivityToolData[] = productivityToolsDataRaw.map(t => ({
    ...t,
    color: PRODUCTIVITY_TOOL_COLORS[t.name] || '#ffffff',
}));

// Data for Frontend Frameworks & Libraries
export const FRONTEND_FRAMEWORK_COLORS: { [key: string]: string } = {
    'Next.js': '#000000',
    'Astro': '#ff5d01',
    'Eleventy (11ty)': '#343434',
    'React': '#61dafb',
    'React Native': '#61dafb',
    'SvelteKit': '#ff3e00',
    'Tailwind CSS': '#38b2ac',
    'React Three Fiber': '#f4b6c2',
};

const frontendFrameworksDataRaw: Omit<FrontendFrameworkData, 'color'>[] = [
    { name: 'Next.js', description: 'Framework de React para producción (SSR, SSG, optimizaciones automáticas).', pricing: 'Open Source (Gratis). Costes asociados al hosting.' },
    { name: 'Astro', description: 'Framework web enfocado en la velocidad, ideal para sitios de contenido.', pricing: 'Open Source (Gratis). Costes asociados al hosting.' },
    { name: 'Eleventy (11ty)', description: 'Generador de sitios estáticos simple y flexible.', pricing: 'Open Source (Gratis). Costes asociados al hosting.' },
    { name: 'React', description: 'Librería de JavaScript para construir interfaces de usuario.', pricing: 'Open Source (Gratis).' },
    { name: 'React Native', description: 'Framework para desarrollar apps móviles nativas (iOS/Android) con React.', pricing: 'Open Source (Gratis).' },
    { name: 'SvelteKit', description: 'Framework moderno que compila el código a JavaScript optimizado en el build.', pricing: 'Open Source (Gratis). Costes asociados al hosting.' },
    { name: 'Tailwind CSS', description: 'Framework de CSS "utility-first" para construir diseños en el HTML.', pricing: 'Open Source (Gratis).' },
    { name: 'React Three Fiber', description: 'Renderizador de React para Three.js para crear escenas 3D declarativas.', pricing: 'Open Source (Gratis).' },
];

export const FRONTEND_FRAMEWORKS_DATA: FrontendFrameworkData[] = frontendFrameworksDataRaw.map(f => ({
    ...f,
    color: FRONTEND_FRAMEWORK_COLORS[f.name] || '#ffffff',
}));

// Data for Programming Languages
export const LANGUAGE_COLORS: { [key: string]: string } = {
    'TypeScript': '#3178c6',
    'Node.js': '#68a063',
    'Python': '#3776ab',
    'Go (Golang)': '#00add8',
    'PHP': '#777bb4',
};

const languagesDataRaw: Omit<ProgrammingLanguageData, 'color'>[] = [
    { name: 'TypeScript', description: 'Superset de JavaScript que añade tipado estático opcional.', pricing: 'Open Source (Gratis).' },
    { name: 'Node.js', description: 'Entorno de ejecución de JavaScript del lado del servidor.', pricing: 'Open Source (Gratis).' },
    { name: 'Python', description: 'Lenguaje versátil para IA, desarrollo web (Django, FastAPI) y scripting.', pricing: 'Open Source (Gratis).' },
    { name: 'Go (Golang)', description: 'Lenguaje compilado de Google conocido por su alto rendimiento y concurrencia.', pricing: 'Open Source (Gratis).' },
    { name: 'PHP', description: 'Lenguaje de scripting del lado del servidor popular en WordPress, Symfony, etc.', pricing: 'Open Source (Gratis).' },
];

export const LANGUAGES_DATA: ProgrammingLanguageData[] = languagesDataRaw.map(l => ({
    ...l,
    color: LANGUAGE_COLORS[l.name] || '#ffffff',
}));

// Data for Backend Frameworks
export const BACKEND_FRAMEWORK_COLORS: { [key: string]: string } = {
    'NestJS': '#e0234e',
    'Express.js': '#000000',
    'FastAPI': '#009688',
    'Symfony': '#000000',
};

const backendFrameworksDataRaw: Omit<BackendFrameworkData, 'color'>[] = [
    { name: 'NestJS', description: 'Framework de Node.js progresivo (TypeScript) inspirado en Angular.', pricing: 'Open Source (Gratis).' },
    { name: 'Express.js', description: 'Framework minimalista y flexible para Node.js, estándar para APIs.', pricing: 'Open Source (Gratis).' },
    { name: 'FastAPI', description: 'Framework web de alto rendimiento para Python, con auto-documentación de APIs.', pricing: 'Open Source (Gratis).' },
    { name: 'Symfony', description: 'Conjunto de componentes PHP y framework para aplicaciones web robustas.', pricing: 'Open Source (Gratis).' },
];

export const BACKEND_FRAMEWORKS_DATA: BackendFrameworkData[] = backendFrameworksDataRaw.map(b => ({
    ...b,
    color: BACKEND_FRAMEWORK_COLORS[b.name] || '#ffffff',
}));

// Data for Databases
export const DATABASE_COLORS: { [key: string]: string } = {
    'PostgreSQL': '#4169e1',
    'MongoDB': '#47a248',
    'Redis': '#dc382d',
    'ClickHouse': '#ffcc00',
    'Pinecone / Weaviate': '#a855f7',
};

const databasesDataRaw: Omit<DatabaseData, 'color'>[] = [
    { name: 'PostgreSQL', description: 'Potente sistema de bases de datos relacionales de código abierto.', pricing: 'Open Source (Gratis). Coste asociado al hosting.' },
    { name: 'MongoDB', description: 'Base de datos NoSQL orientada a documentos, flexible y escalable.', pricing: 'Open Source (Gratis). Coste asociado al hosting (MongoDB Atlas).' },
    { name: 'Redis', description: 'Almacén de datos en memoria ultrarrápido, usado como caché y cola de mensajes.', pricing: 'Open Source (Gratis). Coste asociado al hosting.' },
    { name: 'ClickHouse', description: 'Base de datos columnar de alto rendimiento para analítica (OLAP).', pricing: 'Open Source (Gratis). Coste asociado al hosting.' },
    { name: 'Pinecone / Weaviate', description: 'Bases de datos vectoriales para aplicaciones de IA (búsqueda semántica, RAG).', pricing: 'Freemium y Basado en Uso.' },
];

export const DATABASES_DATA: DatabaseData[] = databasesDataRaw.map(d => ({
    ...d,
    color: DATABASE_COLORS[d.name] || '#ffffff',
}));

// Data for Hosting, Deployment & PaaS
export const HOSTING_PLATFORM_COLORS: { [key: string]: string } = {
    'Vercel': '#000000',
    'Netlify': '#00c7b7',
    'AWS': '#232f3e',
    'Render': '#46e3b7',
    'Supabase': '#3ecf8e',
    'Docker': '#2496ed',
    'Kubernetes (K8s)': '#326ce5',
};

const hostingPlatformsDataRaw: Omit<HostingPlatformData, 'color'>[] = [
    { name: 'Vercel', description: 'Plataforma optimizada para desplegar frameworks de frontend como Next.js.', pricing: 'Freemium. Plan gratuito generoso.' },
    { name: 'Netlify', description: 'Plataforma para sitios estáticos y Jamstack (despliegues, serverless, forms).', pricing: 'Freemium. Plan gratuito generoso.' },
    { name: 'AWS', description: 'Suite completa de servicios en la nube (cómputo, BBDD, almacenamiento).', pricing: 'Pago por Uso. Nivel gratuito por 12 meses.' },
    { name: 'Render', description: 'Alternativa simple a AWS/GCP, enfocada en la experiencia del desarrollador.', pricing: 'Freemium. Nivel gratuito para servicios pequeños.' },
    { name: 'Supabase', description: 'Alternativa open source a Firebase (PostgreSQL, auth, APIs, storage).', pricing: 'Freemium. Plan gratuito generoso.' },
    { name: 'Docker', description: 'Plataforma para desarrollar y ejecutar aplicaciones en contenedores.', pricing: 'Open Source (Gratis). Suscripción para empresas grandes.' },
    { name: 'Kubernetes (K8s)', description: 'Sistema para automatizar el despliegue y gestión de contenedores.', pricing: 'Open Source (Gratis). Coste en infraestructura y gestión.' },
];

export const HOSTING_PLATFORMS_DATA: HostingPlatformData[] = hostingPlatformsDataRaw.map(h => ({
    ...h,
    color: HOSTING_PLATFORM_COLORS[h.name] || '#ffffff',
}));

// Data for CMS & E-commerce
export const CMS_COLORS: { [key: string]: string } = {
    'Strapi': '#2f2e7f',
    'Contentful / Sanity.io': '#f46a25',
    'Medusa.js': '#000000',
    'Akeneo / Pimcore': '#673ab7',
};

const cmsDataRaw: Omit<CmsData, 'color'>[] = [
    { name: 'Strapi', description: 'CMS Headless de código abierto y auto-alojado para crear APIs.', pricing: 'Open Source (Gratis). Coste de hosting.' },
    { name: 'Contentful / Sanity.io', description: 'Plataformas de contenido como servicio (SaaS) con APIs potentes.', pricing: 'Freemium. Planes de pago según uso.' },
    { name: 'Medusa.js', description: 'Plataforma de e-commerce headless y open source, altamente personalizable.', pricing: 'Open Source (Gratis). Coste de hosting.' },
    { name: 'Akeneo / Pimcore', description: 'Plataformas PIM para centralizar y gestionar información de productos.', pricing: 'Open Source con ediciones Enterprise de pago.' },
];

export const CMS_DATA: CmsData[] = cmsDataRaw.map(c => ({
    ...c,
    color: CMS_COLORS[c.name] || '#ffffff',
}));

// Data for APIs & Third-Party Services
export const API_SERVICES_COLORS: { [key: string]: string } = {
    'Resend / SendGrid': '#1a73e8',
    'Stripe': '#635bff',
    'Algolia': '#5468ff',
    'OpenAI API': '#10a37f',
    'Cloudinary / Mux': '#f26522',
};

const apiServicesDataRaw: Omit<ApiServicesData, 'color'>[] = [
    { name: 'Resend / SendGrid', description: 'Servicios de API para enviar emails transaccionales y de marketing.', pricing: 'Freemium. Planes de pago por volumen.' },
    { name: 'Stripe', description: 'Plataforma de procesamiento de pagos online.', pricing: 'Por Transacción (ej. ~2.9% + $0.30).' },
    { name: 'Algolia', description: 'Servicio de búsqueda como API (Search-as-a-Service) ultrarrápido.', pricing: 'Freemium. Planes de pago por uso.' },
    { name: 'OpenAI API', description: 'API para acceder a modelos de lenguaje como GPT-4.', pricing: 'Pago por Uso (por tokens).' },
    { name: 'Cloudinary / Mux', description: 'APIs para la gestión, optimización y entrega de imágenes y videos.', pricing: 'Freemium. Planes de pago por uso.' },
];

export const API_SERVICES_DATA: ApiServicesData[] = apiServicesDataRaw.map(a => ({
    ...a,
    color: API_SERVICES_COLORS[a.name] || '#ffffff',
}));