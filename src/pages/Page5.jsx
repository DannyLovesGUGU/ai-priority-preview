import React from 'react';
import { ArrowRight, CircleAlert, Compass, Settings2, Workflow } from 'lucide-react';

const flowItems = ['學會提示詞', '先了解工具能力與限制', '再調整提示詞寫法', '結果更穩、更省時間'];

const Page5 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 font-sans text-slate-800">
      <div className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl flex flex-col p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-50 rounded-full -mr-40 -mt-40 z-0 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full -ml-32 -mb-32 z-0" />

        <div className="z-10 flex-grow flex flex-col">
          <header className="mb-6">
            <img src="/assets/brand/header-logo.png" alt="GUGU School Logo" className="h-10 w-auto mb-6" />
            <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Step 05: Tool-Aware Prompting
            </div>
            <h1 className="text-[2.15rem] font-black leading-tight text-slate-900 border-l-8 border-orange-500 pl-6 mb-4">
              學會提示詞之後，先不要直接套到所有工具
            </h1>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              前面你已經學過提示詞的基本邏輯，也就是你已經知道怎麼把需求講清楚：
            </p>
          </header>

          <section className="mb-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">你已經會的四件事</p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• 你要它做什麼</li>
                <li>• 你希望輸出什麼</li>
                <li>• 你會提供哪些背景</li>
                <li>• 你不希望它做什麼</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">為什麼不能直接套所有工具</p>
              <ul className="text-sm text-slate-700 space-y-1.5">
                <li>• 能力不同</li>
                <li>• 限制不同</li>
                <li>• 支援的功能不同</li>
                <li>• 可以幫你省掉的描述也不同</li>
              </ul>
            </div>
          </section>

          <section className="mb-5 bg-slate-900 text-white rounded-2xl p-5">
            <div className="flex items-center mb-2 text-orange-300 font-bold">
              <Settings2 size={16} className="mr-2" /> 真正更好的做法
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              <span className="font-bold text-white">先理解工具，再調整提示詞。</span>
              提示詞邏輯沒有變，但你對工具的理解，會改變你怎麼用這套邏輯。
            </p>
          </section>

          <section className="mb-5 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">舉例：商品情境圖</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-slate-700 mb-1">不了解工具能力時，很容易：</p>
                <ul className="text-slate-600 space-y-1">
                  <li>• 一句話亂試</li>
                  <li>• 把它當聊天工具一直修</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-slate-700 mb-1">先知道工具能力後：</p>
                <ul className="text-slate-600 space-y-1">
                  <li>• 可以用參考圖</li>
                  <li>• 可以指定比例</li>
                  <li>• 可以一次出多張</li>
                  <li>• 可以後續編修</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="flex items-center mb-3">
              <Workflow size={18} className="text-orange-500 mr-2" />
              <h3 className="text-lg font-bold">邏輯流程圖</h3>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {flowItems.map((item, idx) => (
                <div key={item} className="bg-slate-50 border border-slate-200 rounded-xl p-3 relative">
                  <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mb-1">Step {idx + 1}</p>
                  <p className="text-sm font-bold text-slate-800 leading-snug">{item}</p>
                  {idx < flowItems.length - 1 && <ArrowRight size={14} className="absolute -right-2 top-1/2 -translate-y-1/2 text-orange-500" />}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-5">
            <div className="flex items-center mb-3">
              <Compass size={18} className="text-slate-500 mr-2" />
              <h3 className="text-lg font-bold">錯誤做法 vs 正確做法</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">錯誤做法</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  <li>• 學會提示詞後直接亂套</li>
                  <li>• 不先看工具能力</li>
                  <li>• 用很長對話慢慢修</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">正確做法</p>
                <ul className="space-y-1 text-sm text-slate-700 font-medium">
                  <li>• 先看工具能做什麼</li>
                  <li>• 再決定怎麼下需求</li>
                  <li>• 把提示詞寫得更有效率</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-4 flex items-start">
              <CircleAlert size={19} className="text-orange-500 mr-3 mt-0.5" />
              <p className="text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">核心傳遞目標：</span>
                學會提示詞只是第一步。真正開始用工具前，你還要先理解這個工具的能力與限制。
              </p>
            </div>
          </section>

          <footer className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
            <div className="text-sm font-bold text-slate-700">AI 工具包懶人包｜提示詞進階思維</div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 tracking-widest uppercase">Page 05 / 08</p>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-orange-600 font-semibold text-sm mt-1"
              >
                下一頁：Gemini 案例 <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </footer>
        </div>

        <div className="absolute -bottom-6 -right-4 text-[92px] font-black text-slate-50 select-none -z-0">TOOL</div>
      </div>
    </div>
  );
};

export default Page5;
