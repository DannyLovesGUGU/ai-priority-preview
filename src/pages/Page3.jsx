import React, { useState } from 'react';
import { Presentation, Terminal, CheckCircle2, ArrowRight, User, Sparkles, Layout, MousePointer2 } from 'lucide-react';

const Page3 = ({ onNext }) => {
  const [copied, setCopied] = useState(false);
  const promptText = `你現在是資深品牌行銷企劃，擅長撰寫給主管與客戶看的廣告行銷提案簡報。

請幫我設計一份「新品廣告行銷提案簡報」的內容骨架，輸出可以直接放進 Canva 的內容。

【需求參數】
● 產品：女性膠原蛋白飲新品 (受眾 25–40 歲)
● 目的：爭取上市預算與社群資源
● 規格：5 頁 / 專業簡潔風格

【請輸出】
1. 適合的 5 頁架構
2. 每頁標題、3 個重點、建議圖表
3. 最後一頁的 CTA 建議

※ 要求：繁體中文、P1-P5 格式、精簡內容`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      console.error('copy failed', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 font-sans text-slate-800">
      <div className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl flex flex-col p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full -mr-48 -mt-48 z-0 opacity-40" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 rounded-full -ml-32 -mb-32 z-0" />

        <div className="z-10 flex-grow flex flex-col">
          <header className="mb-10">
            <img src="/assets/brand/header-logo.png" alt="GUGU School Logo" className="h-10 w-auto mb-6" />
            <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Step 03: Practical Case Study
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-900 border-l-8 border-orange-500 pl-6">
              實戰案例：先用 AI 生出簡報骨架，<br />
              <span className="text-orange-500">再進 Canva 完成提案</span>
            </h1>
          </header>

          <section className="grid grid-cols-5 gap-8 mb-10">
            <div className="col-span-3">
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                還是用 <span className="text-slate-900 font-bold">Mia</span> 當例子。她明天要向主管與客戶提一份「女性膠原蛋白飲新品上市廣告行銷提案」。
              </p>
              <p className="text-sm text-slate-500 mb-4">最浪費時間的通常不是最後排版，而是前面這些思考：</p>
              <div className="space-y-2">
                {['要講哪些重點', '簡報應該怎麼拆頁', '每頁要放什麼內容', '哪些資料值得放進去'].map((item, i) => (
                  <div key={i} className="flex items-center text-sm font-medium">
                    <CheckCircle2 size={14} className="text-orange-500 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center mb-4 text-slate-400 font-bold text-xs tracking-tighter uppercase">
                  <User size={14} className="mr-2" /> Mia 的提案任務
                </div>
                <div className="space-y-3">
                  {[
                    { label: '品牌', value: '保健食品品牌' },
                    { label: '產品', value: '女性膠原蛋白飲' },
                    { label: '對象', value: '主管與客戶' },
                    { label: '目標', value: '爭取預算與資源' },
                    { label: '頁數', value: '5 頁內' },
                  ].map((info, i) => (
                    <div key={i} className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-xs text-slate-400">{info.label}</span>
                      <span className="text-xs font-bold text-slate-700">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 bg-orange-500 text-white p-6 rounded-2xl flex items-center shadow-lg">
            <div className="mr-6 bg-white/20 p-3 rounded-xl">
              <Layout size={32} />
            </div>
            <div>
              <p className="font-bold text-lg leading-snug">關鍵心法：不要直接叫 AI 做「完整簡報」。</p>
              <p className="text-orange-100 text-sm opacity-90">先讓 AI 幫你做出「內容骨架」，這能省下 80% 的發想時間，再把內容填入 Canva 等工具。</p>
            </div>
          </section>

          <section className="mb-10">
            <div className="flex items-center mb-4">
              <Terminal size={20} className="text-slate-400 mr-2" />
              <h3 className="font-bold text-slate-900">先把這段丟給 AI (實踐四格法)</h3>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 relative shadow-2xl border-4 border-slate-800">
              <div className="absolute top-4 right-6 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="font-mono text-sm leading-relaxed text-slate-300 space-y-4">
                <p className="text-orange-400 font-bold">你現在是資深品牌行銷企劃，擅長撰寫給主管與客戶看的廣告行銷提案簡報。</p>

                <p>請幫我設計一份「新品廣告行銷提案簡報」的內容骨架，輸出可以直接放進 Canva 的內容。</p>

                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-xs text-slate-500 mb-2 underline">【需求參數】</p>
                  <p>● 產品：女性膠原蛋白飲新品 (受眾 25–40 歲)</p>
                  <p>● 目的：爭取上市預算與社群資源</p>
                  <p>● 規格：5 頁 / 專業簡潔風格</p>
                </div>

                <div className="text-orange-200/80 italic">
                  <p>【請輸出】</p>
                  <p>1. 適合的 5 頁架構</p>
                  <p>2. 每頁標題、3 個重點、建議圖表</p>
                  <p>3. 最後一頁的 CTA 建議</p>
                </div>

                <div className="border-t border-slate-700 pt-4 text-xs text-slate-500">※ 要求：繁體中文、P1-P5 格式、精簡內容</div>
              </div>

              <button
                type="button"
                onClick={handleCopy}
                className="absolute -bottom-4 right-10 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center"
              >
                <MousePointer2 size={14} className="mr-2" /> {copied ? '已複製提示詞' : '點擊複製提示詞'}
              </button>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-8 mb-6">
            <div className="flex items-start bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div className="text-red-400 mr-3 mt-1">
                <XCircleIcon />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">錯誤問法</p>
                <p className="text-sm font-bold text-slate-600">幫我做一份完整的簡報內容</p>
              </div>
            </div>
            <div className="flex items-start bg-orange-50 p-5 rounded-2xl border border-orange-100">
              <div className="text-orange-500 mr-3 mt-1">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-orange-400 uppercase mb-1">推薦問法</p>
                <p className="text-sm font-bold text-slate-900">先出 5 頁架構、重點與視覺建議</p>
              </div>
            </div>
          </section>

          <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3 text-white">
                <Presentation size={18} />
              </div>
              <span className="text-sm font-bold text-slate-800">實戰場景 A：簡報企劃篇</span>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Page 03 / 08</p>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-orange-600 font-semibold text-sm mt-1"
              >
                下一頁：流程落地 <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

const XCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

export default Page3;
