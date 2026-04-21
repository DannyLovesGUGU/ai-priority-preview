import React from 'react';
import { BriefcaseBusiness, GraduationCap, Network } from 'lucide-react';

const departments = ['法務', '財務', '分析', '開發', '行銷', '專案管理', '客戶溝通', '文書整理', '會議與行程安排'];

const agentTeam = [
  { name: 'Jarvis', role: '總控協調 / 工作分派', image: '/assets/office/agents/jarvis-main-working.png' },
  { name: 'Turing', role: '開發與技術落地', image: '/assets/office/agents/turing-dev-working.png' },
  { name: 'Bond', role: '執行追蹤與流程銜接', image: '/assets/office/agents/bond-working.png' },
  { name: 'The Bard', role: '內容與文案生成', image: '/assets/office/agents/the-bard-content-working.png' },
  { name: 'Marco Polo', role: '研究搜尋與資料彙整', image: '/assets/office/agents/marco-polo-seeking-working.png' },
];

const courseMap = [
  { label: 'AI 時代思維', value: 30, color: '#f97316' },
  { label: 'AI 必學底層知識', value: 20, color: '#fb923c' },
  { label: '實戰案例演練', value: 25, color: '#fdba74' },
  { label: 'AI 工具使用', value: 25, color: '#334155' },
];

const Page8 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 font-sans text-slate-800">
      <div className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl flex flex-col p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-50 rounded-full -mr-40 -mt-40 z-0 opacity-50" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-slate-50 rounded-full -ml-28 -mb-28 z-0 opacity-80" />

        <div className="z-10 flex-grow flex flex-col">
          <header className="mb-6">
            <img src="/assets/brand/header-logo.png" alt="GUGU School Logo" className="h-10 w-auto mb-6" />
            <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Step 08: AI Agent Office
            </div>
            <h1 className="text-3xl font-black leading-tight text-slate-900 border-l-8 border-orange-500 pl-6 mb-3">什麼是 AI 自動化辦公室？</h1>
            <p className="text-sm text-slate-700 leading-relaxed">
              前面那些工具與流程，不是終點。真正更有效率的下一步，是理解 AI Agent，並建立屬於自己的 AI 自動化辦公室。
            </p>
          </header>

          <section className="mb-5 bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              如果我跟你說，前面學到的工具，其實只要一個 AI agent 就能全部搞定，你相信嗎？
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              你不需要自己一個一個切換工具、逐一設定、重複操作。更有效率的做法，是把這些工具交給 AI agent 去調用，讓 AI 去運用 AI 工具。
            </p>
            <p className="text-sm font-semibold text-slate-900">這不只更省時間，很多時候也會更精準。</p>
          </section>

          <section className="mb-5">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Network size={18} className="mr-2 text-orange-500" /> AI 自動化辦公室案例
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              AI 自動化辦公室，就是由一整組分工合作的 AI Agent 團隊，所建立出來的自動化工作方式。它不是單一工具，也不是單一機器人，而是一套能模擬人類分工、接手複雜流程的工作系統。
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {departments.map((d) => (
                <span key={d} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600">
                  #{d}
                </span>
              ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-3 border border-slate-700 mb-3">
              <img src="/assets/office/office-4200-cropped.png" alt="OpenClaw Office" className="w-full h-56 object-cover object-top rounded-xl border border-slate-700" />
            </div>

            <div className="grid grid-cols-5 gap-2">
              {agentTeam.map((agent) => (
                <div key={agent.name} className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-center">
                  <img src={agent.image} alt={agent.name} className="w-full h-20 object-contain bg-white rounded-lg border border-slate-200 mb-2" />
                  <p className="text-[11px] font-bold text-slate-800 leading-none mb-1">{agent.name}</p>
                  <p className="text-[10px] text-slate-500 leading-tight">{agent.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-5 bg-orange-50 border border-orange-200 rounded-2xl p-4">
            <p className="text-sm text-slate-700 font-semibold mb-2">這組 AI 自動化辦公室可以完成：</p>
            <div className="grid grid-cols-2 gap-1 text-xs text-slate-700">
              <p>• 軟體開發與維護</p>
              <p>• 文章內容生成</p>
              <p>• 知識庫管理</p>
              <p>• 專案管理</p>
              <p>• 客戶溝通服務</p>
              <p>• 會議行程安排</p>
              <p>• 檔案整理等文書工作</p>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-base font-bold mb-3 flex items-center">
              <GraduationCap size={16} className="mr-2 text-orange-500" /> 《AI 替你上班》會教我們什麼？
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-3 items-center">
              <div className="flex justify-center">
                <div
                  className="w-40 h-40 rounded-full p-3"
                  style={{ background: 'conic-gradient(#f97316 0 30%, #fb923c 30% 50%, #fdba74 50% 75%, #334155 75% 100%)' }}
                >
                  <div className="w-full h-full rounded-full bg-white border border-slate-200 flex items-center justify-center text-center">
                    <div>
                      <p className="text-[10px] text-slate-500">課程組成</p>
                      <p className="text-sm font-black text-slate-800">100%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                {courseMap.map((item) => (
                  <div key={item.label} className="bg-slate-900 text-white rounded-lg px-3 py-2 border border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <p className="text-xs text-slate-200">{item.label}</p>
                    </div>
                    <p className="text-xs font-black text-orange-300">{item.value}%</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <p className="text-sm font-semibold text-slate-800 mb-2">這堂課程會學到什麼？</p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>1. 一整組可直接使用的 AI 工具包</li>
                  <li>2. 建立自己專屬的 AI 助理團隊</li>
                  <li>3. 學會 AI 時代必備的思維邏輯</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                <p className="text-sm font-bold text-slate-900 mb-1">《AI 替你上班》</p>
                <p className="text-sm text-slate-700 mb-1">零代碼打造你的 AI 助理群 X 自動化辦公室</p>
                <p className="text-xs text-slate-500 mb-2">五月初正式上線</p>
                <p className="text-sm text-slate-700 leading-relaxed mb-2">
                  為了感謝你填寫問卷，我想送你一張專屬 2 折優惠券，請記得在時效內使用。
                </p>
                <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                  想知道怎麼一步一步建立屬於你的 AI 自動化辦公室嗎？接下來的課程，我會完整帶你做到。
                </p>
              </div>
            </div>
          </section>


          <footer className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
            <div className="text-sm font-bold text-slate-700 flex items-center">
              <BriefcaseBusiness size={15} className="mr-2 text-orange-500" /> AI 自動化辦公室總覽
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 tracking-widest uppercase">Page 08 / 08</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Page8;
