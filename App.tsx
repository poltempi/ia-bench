import React from 'react';
import { ModelBenchmarkChart } from './components/ModelBenchmarkChart';
import { PricingTable } from './components/PricingTable';
import { LeaderboardTable } from './components/LeaderboardTable';
import { MODEL_DATA, PRICING_DATA, LEADERBOARD_DATA, PROVIDER_COLORS, EDITORS_DATA, CLI_AGENTS_DATA, VIBE_PLATFORMS_DATA, PRODUCTIVITY_TOOLS_DATA, FRONTEND_FRAMEWORKS_DATA, LANGUAGES_DATA, BACKEND_FRAMEWORKS_DATA, DATABASES_DATA, HOSTING_PLATFORMS_DATA, CMS_DATA, API_SERVICES_DATA } from './constants';
import { ChatIcon, NLogoIcon } from './components/Icons';

const providersData = [
  { name: "OpenAI", models: "GPT-5, GPT-4.1", provider: "OpenAI" },
  { name: "Anthropic", models: "Claude Opus 4.1", provider: "Anthropic" },
  { name: "Alibaba", models: "Familia Qwen", provider: "Alibaba" },
  { name: "Google", models: "Familia Gemini", provider: "Google" },
  { name: "Deepseek", models: "Deepseek V3.1", provider: "Deepseek" },
  { name: "Zhipu AI", models: "GLM-4.5", provider: "Zhipu AI" },
  { name: "xAI", models: "Grok Code Fast", provider: "xAI" },
];

const ProviderList: React.FC = () => (
  <div className="mb-8 p-4 bg-slate-800/60 border border-slate-700 rounded-lg">
    <h3 className="text-lg font-semibold text-white mb-3">Proveedores y Modelos Destacados</h3>
    <div className="flex flex-wrap gap-2">
      {providersData.map((item, index) => (
        <span 
          key={index} 
          className="text-white text-sm font-medium px-3 py-1 rounded-full shadow"
          style={{ backgroundColor: PROVIDER_COLORS[item.provider] }}
        >
          <strong>{item.name}:</strong> {item.models}
        </span>
      ))}
    </div>
  </div>
);

const CliAgentsRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Agentes CLI-First</h2>
    <div className="flex flex-col gap-2">
      {CLI_AGENTS_DATA.map((agent, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: agent.color }}
            >
              {agent.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{agent.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{agent.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{agent.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const EditorRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Clasificación de Editores</h2>
    <div className="flex flex-col gap-2">
      {EDITORS_DATA.map((editor, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: editor.color }}
            >
              {editor.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{editor.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{editor.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{editor.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VibePlatformsRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Vibe Coding Plataformas</h2>
    <div className="flex flex-col gap-2">
      {VIBE_PLATFORMS_DATA.map((platform, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: platform.color }}
            >
              {platform.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{platform.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{platform.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{platform.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProductivityToolsRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Productividad y Contexto</h2>
    <div className="flex flex-col gap-2">
      {PRODUCTIVITY_TOOLS_DATA.map((tool, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: tool.color }}
            >
              {tool.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{tool.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{tool.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{tool.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FrontendFrameworksRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Frontend Frameworks & Libraries</h2>
    <div className="flex flex-col gap-2">
      {FRONTEND_FRAMEWORKS_DATA.map((item, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{item.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{item.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LanguagesRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Lenguajes de Programación</h2>
    <div className="flex flex-col gap-2">
      {LANGUAGES_DATA.map((item, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{item.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{item.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BackendFrameworksRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Backend Frameworks</h2>
    <div className="flex flex-col gap-2">
      {BACKEND_FRAMEWORKS_DATA.map((item, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{item.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{item.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DatabasesRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Bases de Datos</h2>
    <div className="flex flex-col gap-2">
      {DATABASES_DATA.map((item, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{item.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{item.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HostingRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">Hosting, Despliegue y PaaS</h2>
    <div className="flex flex-col gap-2">
      {HOSTING_PLATFORMS_DATA.map((item, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{item.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{item.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CmsRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">CMS & E-commerce</h2>
    <div className="flex flex-col gap-2">
      {CMS_DATA.map((item, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{item.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{item.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ApisRanking: React.FC = () => (
  <div className="w-full bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8 mt-8">
    <h2 className="text-2xl font-bold text-white mb-6">APIs y Servicios de Terceros</h2>
    <div className="flex flex-col gap-2">
      {API_SERVICES_DATA.map((item, index) => (
        <div key={index} className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex items-center justify-between transition-all hover:bg-slate-800/80 hover:border-slate-600">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 font-medium text-lg w-6 text-right">{index + 1}.</span>
            <div 
              className="font-bold text-sm flex items-center justify-center w-6 h-6 rounded-md text-white"
              style={{ backgroundColor: item.color }}
            >
              {item.name.charAt(0)}
            </div>
            <span className="text-white font-semibold text-lg">{item.name}</span>
          </div>
          <div className="text-right flex-shrink-1 pl-4">
            <p className="font-semibold text-md text-green-400 whitespace-nowrap">{item.pricing}</p>
            <p className="text-xs text-gray-400 mt-1 truncate max-w-xs sm:max-w-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-300">
      <main className="bg-slate-900 min-h-screen p-4 sm:p-6 md:p-8">
        
        <header className="w-full max-w-7xl mx-auto mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white">Porcelanosa testing IA department</h1>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2 transition-colors duration-300">
            <ChatIcon />
            <span>Chat</span>
          </button>
        </header>

        <div className="w-full max-w-7xl mx-auto">
          
          <ProviderList />

          <div className="bg-[#1e293b] rounded-xl shadow-2xl p-4 sm:p-6 lg:p-8">
            <div className="bg-slate-800/60 p-4 rounded-lg mb-8 border border-slate-700">
              <p className="text-gray-300 text-sm md:text-base">
                Este gráfico muestra la relación entre el rendimiento del modelo de IA (puntuación porcentual) y el costo total para ejecutar todas las evaluaciones. Cada punto representa un modelo. Los modelos en el área superior izquierda ofrecen el mejor valor (alto rendimiento, bajo costo total).
              </p>
            </div>

            <div className="w-full h-[60vh] min-h-[500px]">
              <ModelBenchmarkChart data={MODEL_DATA} />
            </div>
          </div>
          
          <PricingTable data={PRICING_DATA} />

          <LeaderboardTable data={LEADERBOARD_DATA} />

          <CliAgentsRanking />

          <EditorRanking />

          <VibePlatformsRanking />

          <ProductivityToolsRanking />

          <FrontendFrameworksRanking />
          <LanguagesRanking />
          <BackendFrameworksRanking />
          <DatabasesRanking />
          <HostingRanking />
          <CmsRanking />
          <ApisRanking />
        </div>
        
        <div className="fixed bottom-4 left-4">
           <NLogoIcon />
        </div>

      </main>
    </div>
  );
};

export default App;