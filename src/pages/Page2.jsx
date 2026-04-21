import React from 'react';
import {
  CheckCircle2,
  XCircle,
  ClipboardList,
  Target,
  LayoutTemplate,
  Info,
  Ban,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

const Page2 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 font-sans">
      <div className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl flex flex-col p-12 text-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 z-0 opacity-50" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-50/30 rounded-full -ml-16 -mb-16 z-0" />

        <div className="z-10 flex-grow flex flex-col">
          <header className="mb-12">
            <img src="assets/brand/header-logo.png" alt="GUGU School Logo" className="h-10 w-auto mb-6" />
            <div className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Step 02: Prompt Strategy
            </div>
            <h1 className="text-4xl font-black leading-tight text-slate-900 max-w-2xl border-l-8 border-slate-900 pl-6">
              找到值得交給 AI 的工作後，<br />
              <span className="text-orange-500">下一步就是把需求講清楚</span>
            </h1>
          </header>

          <section className="mb-10">
            <p className="text-lg text-slate-600 leading-relaxed">
              找到最值得交給 AI 的工作之後，下一步不是立刻亂試工具，而是先把需求講清楚。同樣以品牌行銷同仁{' '}
              <span className="text-slate-900 font-bold">Mia</span> 為例，如果只是下達模糊指令，AI 通常只能給出平庸的結果。
            </p>
          </section>

          <section className="mb-12 grid grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center text-slate-400 font-bold mb-6 pb-2 border-b border-slate-200">
                <XCircle size={20} className="mr-2" /> 模糊需求 (效果不佳)
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-slate-500 italic">「幫我整理會議」</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-slate-500 italic">「幫我做簡報」</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-300 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-slate-500 italic">「幫我想圖片」</span>
                </li>
              </ul>
              <div className="mt-8 text-center text-xs text-slate-400">結果通常過於普通、模糊且不符合實際需求</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-orange-500 shadow-lg relative">
              <div className="absolute -top-3 -right-3 bg-orange-500 text-white p-2 rounded-full shadow-lg">
                <CheckCircle2 size={24} />
              </div>
              <div className="flex items-center text-orange-600 font-bold mb-6 pb-2 border-b border-orange-100">清楚需求 (效果倍增)</div>
              <div className="space-y-4">
                <div className="flex items-center bg-orange-50 p-3 rounded-lg">
                  <Target size={18} className="text-orange-600 mr-3" />
                  <span className="font-bold text-slate-800">任務是什麼</span>
                </div>
                <div className="flex items-center bg-orange-50 p-3 rounded-lg">
                  <LayoutTemplate size={18} className="text-orange-600 mr-3" />
                  <span className="font-bold text-slate-800">輸出的格式</span>
                </div>
                <div className="flex items-center bg-orange-50 p-3 rounded-lg">
                  <Info size={18} className="text-orange-600 mr-3" />
                  <span className="font-bold text-slate-800">具體的背景</span>
                </div>
                <div className="flex items-center bg-orange-50 p-3 rounded-lg">
                  <Ban size={18} className="text-orange-600 mr-3" />
                  <span className="font-bold text-slate-800">不要做什麼</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center">
              <ClipboardList size={24} className="mr-3 text-orange-500" />
              萬用任務模板：把需求套進這 4 格
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 text-white p-6 rounded-2xl relative">
                <span className="absolute top-4 right-6 text-slate-700 font-black text-4xl select-none">01</span>
                <h4 className="text-orange-400 font-bold mb-2">任務是什麼</h4>
                <p className="text-xs text-slate-400 mb-3">明確指令具體動作</p>
                <div className="text-sm bg-slate-800 p-3 rounded-lg border border-slate-700 leading-relaxed">幫我把這場會議整理成摘要與待辦事項</div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-2xl relative">
                <span className="absolute top-4 right-6 text-slate-700 font-black text-4xl select-none">02</span>
                <h4 className="text-orange-400 font-bold mb-2">輸出是什麼</h4>
                <p className="text-xs text-slate-400 mb-3">規定長度、風格與形式</p>
                <div className="text-sm bg-slate-800 p-3 rounded-lg border border-slate-700 leading-relaxed">3 句摘要、3 個重點、3 個待辦，並標註負責人</div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-2xl relative">
                <span className="absolute top-4 right-6 text-slate-700 font-black text-4xl select-none">03</span>
                <h4 className="text-orange-400 font-bold mb-2">背景是什麼</h4>
                <p className="text-xs text-slate-400 mb-3">提供上下文、受眾資訊</p>
                <div className="text-sm bg-slate-800 p-3 rounded-lg border border-slate-700 leading-relaxed">下週新品宣傳會議，對象是行銷團隊與設計團隊</div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-2xl relative">
                <span className="absolute top-4 right-6 text-slate-700 font-black text-4xl select-none">04</span>
                <h4 className="text-orange-400 font-bold mb-2">不要做什麼</h4>
                <p className="text-xs text-slate-400 mb-3">設定邊界，避免無效輸出</p>
                <div className="text-sm bg-slate-800 p-3 rounded-lg border border-slate-700 leading-relaxed">不要寫太長、不要自己亂補、不要用文章格式</div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-6 flex items-start">
              <div className="bg-orange-500 text-white p-2 rounded-xl mr-5 mt-1 shadow-md">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-lg mb-1">AI 好不好用，通常不是「工具」問題。</p>
                <p className="text-slate-600">而是你有沒有把需求說清楚。當你結構化地思考需求，AI 才能成為真正的戰力。</p>
              </div>
            </div>
          </section>

          <footer className="mt-auto pt-8 border-t border-slate-100 flex justify-between items-end">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Next Chapters</p>
              <div className="flex flex-wrap gap-2 max-w-[420px]">
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] rounded-full">實作：簡報</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] rounded-full">實作：圖片</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] rounded-full">實作：會議摘要</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] text-slate-300 mb-1">© 2024 AI Efficiency Series · Page 02 / 08</p>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-orange-600 font-semibold text-sm"
              >
                下一頁：實戰案例 <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </footer>
        </div>

        <div className="absolute -bottom-8 -right-8 text-[120px] font-black text-slate-50 select-none -z-0">PROMPT</div>
      </div>
    </div>
  );
};

export default Page2;
