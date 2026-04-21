import React from 'react';
import { ArrowRight, Bot, CheckCircle2, Presentation, Wand2, XCircle } from 'lucide-react';

const steps = [
  { no: '01', title: '丟提示詞', desc: '把提示詞貼到 ChatGPT / Gemini。' },
  { no: '02', title: '點擊製作簡報', desc: '左側選單「首頁」點擊製作簡報，進入生成流程。' },
  { no: '03', title: '生成與微調', desc: '查看結果，不符預期可重生成或微調提示詞。' },
];

const Page4 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 font-sans text-slate-800">
      <div className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl flex flex-col p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-50 rounded-full -mr-40 -mt-40 z-0 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full -ml-32 -mb-32 z-0" />

        <div className="z-10 flex-grow flex flex-col">
          <header className="mb-8">
            <img src="assets/brand/header-logo.png" alt="GUGU School Logo" className="h-10 w-auto mb-6" />
            <div className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Step 04: From AI to Canva
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-900 border-l-8 border-slate-900 pl-6 mb-4">
              把 AI 回覆，變成一份真正的簡報
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              這一頁重點不是工具本身，而是把「提示詞 → 製作簡報 → 生成微調」跑成一段可重複流程。
            </p>
          </header>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Wand2 size={18} className="text-orange-500 mr-2" />
              <h3 className="text-lg font-bold">流程步驟</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {steps.map((step) => (
                <div key={step.no} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-700">
                  <div className="text-xs text-orange-300 font-black tracking-widest mb-2">{step.no}</div>
                  <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Presentation size={18} className="text-slate-500 mr-2" />
              <h3 className="text-lg font-bold">畫面示意</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <figure className="bg-slate-50 border border-slate-200 rounded-2xl p-3">
                <div className="text-xs font-bold text-orange-500 mb-2">① Claude 輸入提示詞畫面</div>
                <img src="/page4/step1-prompt-portrait-v2.png" alt="Claude prompt input" className="w-full h-64 object-cover object-center bg-white rounded-xl border border-slate-200" />
                <p className="text-xs text-slate-600 mt-2">先貼入提示詞，確認輸出目標。</p>
              </figure>

              <figure className="bg-slate-50 border border-slate-200 rounded-2xl p-3">
                <div className="text-xs font-bold text-orange-500 mb-2">② 點擊製作簡報入口示意圖</div>
                <img src="/page4/step2-canva-entry-focus.png" alt="Canva presentation entry" className="w-full h-64 object-cover object-top bg-white rounded-xl border border-slate-200" />
                <p className="text-xs text-slate-600 mt-2">進入製作簡報流程入口（左側選單「首頁」）。</p>
              </figure>

              <figure className="bg-slate-50 border border-slate-200 rounded-2xl p-3">
                <div className="text-xs font-bold text-orange-500 mb-2">③ 生成簡報結果示意</div>
                <img src="/page4/step3-canva-generate-focus.png" alt="Canva generate result" className="w-full h-64 object-cover object-top bg-white rounded-xl border border-slate-200" />
                <p className="text-xs text-slate-600 mt-2">不符預期可重生成或微調提示詞。</p>
              </figure>
            </div>
          </section>

          <section className="mb-8 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <div className="flex items-center text-slate-500 font-bold text-xs uppercase mb-2">
                <XCircle size={14} className="mr-2 text-red-400" /> 錯誤問法
              </div>
              <p className="text-sm font-bold text-slate-700 mb-1">「幫我做一份完整簡報」</p>
              <p className="text-xs text-slate-500">通常會回泛用內容，你還是得重做整理。</p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <div className="flex items-center text-orange-500 font-bold text-xs uppercase mb-2">
                <CheckCircle2 size={14} className="mr-2" /> 建議做法
              </div>
              <p className="text-sm font-bold text-slate-900 mb-1">先用提示詞拿骨架，再進簡報流程生成</p>
              <p className="text-xs text-slate-600">內容先對，再做設計，效率穩定且可複製。</p>
            </div>
          </section>

          <footer className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
            <div className="flex items-center text-slate-700">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center mr-3">
                <Bot size={16} />
              </div>
              <span className="text-sm font-bold">實戰場景 A：從骨架到初稿</span>
            </div>
            <div className="text-right">
              <p className="text-[10px] tracking-widest uppercase text-slate-400">Page 04 / 08</p>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-orange-600 font-semibold text-sm mt-1"
              >
                下一頁：提示詞進階 <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Page4;
