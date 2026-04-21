import React from 'react';
import { ListChecks, Lightbulb, MessageSquare, Presentation, Users, ArrowRight } from 'lucide-react';

const Page1 = ({ onNext }) => {
  const data = [
    { label: '開會與會議整理', value: 35, color: '#f97316', highlight: true },
    { label: '簡報與提案整理', value: 25, color: '#fb923c', highlight: true },
    { label: '圖片與素材發想', value: 20, color: '#fdba74', highlight: true },
    { label: '客戶溝通與文案修改', value: 20, color: '#94a3b8', highlight: false },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 font-sans">
      <div className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl flex flex-col p-12 text-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -mr-32 -mt-32 z-0 opacity-50" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-slate-100 rounded-full -ml-16 -mb-16 z-0" />

        <div className="z-10 flex-grow flex flex-col">
          <header className="mb-12">
            <img src="/assets/brand/header-logo.png" alt="GUGU School Logo" className="h-10 w-auto mb-6" />
            <div className="inline-block px-3 py-1 bg-slate-800 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Digital Efficiency Guide
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-900 max-w-2xl border-l-8 border-orange-500 pl-6">
              不是所有工作都要先交給 AI，<br />
              <span className="text-orange-500">先找出最值得優先處理</span>的那幾項
            </h1>
          </header>

          <section className="mb-12">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              先不要急著學很多工具。真正有效的方法，通常不是看到什麼 AI 都試，而是先找出你每天
              <span className="text-slate-900 font-bold decoration-orange-500 decoration-2 underline underline-offset-4">最花時間</span>、而且
              <span className="text-slate-900 font-bold decoration-orange-500 decoration-2 underline underline-offset-4">最適合交給 AI</span> 的工作。
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 italic text-slate-500">
              「以品牌行銷同仁 Mia 為例，她的一天工作時間分配顯示了明顯的優化潛力...」
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative flex justify-center">
              <svg viewBox="0 0 36 36" className="w-64 h-64 transform -rotate-90">
                <circle cx="18" cy="18" r="16" fill="transparent" stroke="#e2e8f0" strokeWidth="4" />
                <circle cx="18" cy="18" r="16" fill="transparent" stroke="#f97316" strokeWidth="4" strokeDasharray="35 65" strokeDashoffset="0" />
                <circle cx="18" cy="18" r="16" fill="transparent" stroke="#fb923c" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-35" />
                <circle cx="18" cy="18" r="16" fill="transparent" stroke="#fdba74" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-60" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-3xl font-bold text-slate-800">80%</span>
                <span className="text-xs text-slate-400">優先優化項</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">時間分配比例</h3>
              {data.map((item, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: item.color }} />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-sm ${item.highlight ? 'font-bold text-slate-800' : 'text-slate-500'}`}>{item.label}</span>
                      <span className="text-sm font-mono text-slate-400">{item.value}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                      <div className="h-full transition-all duration-1000" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 relative">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Lightbulb size={120} />
              </div>

              <div className="relative z-10">
                <h2 className="text-orange-400 text-xl font-bold mb-6 flex items-center">
                  <span className="bg-orange-500 text-white p-1 rounded mr-2">
                    <ListChecks size={20} />
                  </span>
                  優先適合用 AI 協助的工作
                </h2>

                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-orange-200 text-xs mb-1">SCENE 01</p>
                    <p className="font-bold">開會整理</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-orange-200 text-xs mb-1">SCENE 02</p>
                    <p className="font-bold">簡報整理</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <p className="text-orange-200 text-xs mb-1">SCENE 03</p>
                    <p className="font-bold">圖片素材發想</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center text-slate-900">為什麼是這幾項？</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 border-slate-200 pl-6 py-2">
                <h4 className="font-bold text-slate-400 mb-2 flex items-center">
                  <MessageSquare size={16} className="mr-2" /> 彈性高、變化大
                </h4>
                <p className="text-sm text-slate-500">客戶溝通、文案修改。這類任務需要高度的人際創意與情境判斷。</p>
              </div>
              <div className="border-l-2 border-orange-500 pl-6 py-2">
                <h4 className="font-bold text-orange-600 mb-2 flex items-center">
                  <Presentation size={16} className="mr-2" /> 重複性、格式固定
                </h4>
                <p className="text-sm text-slate-600 font-medium">開會整理、做簡報、做素材。每次流程雷同，最適合先導入 AI 自動化流程。</p>
              </div>
            </div>
          </section>

          <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-end text-slate-400 text-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center mr-3 text-orange-500 font-bold">AI</div>
              <span>知識型教學系列：AI 導入戰略</span>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] text-slate-400 tracking-widest uppercase">Page 01 / 08</p>
              <div className="flex items-center justify-end text-slate-500 text-xs mb-1">
                <Users size={12} className="mr-1" /> 適合行銷、管理職
              </div>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-orange-600 font-semibold"
              >
                下一頁：Prompt Strategy <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </footer>
        </div>

        <div className="absolute top-1/2 -right-4 transform rotate-90 origin-bottom text-[80px] font-black text-slate-50 select-none -z-0">
          PRIORITY
        </div>
      </div>
    </div>
  );
};

export default Page1;
