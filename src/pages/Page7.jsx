import React from 'react';
import { ArrowRight, Clock3 } from 'lucide-react';

const beforeFlow = [
  'Mia 打開手機錄音',
  '整理檔案',
  '上傳給 AI',
  'AI 逐字稿',
  'AI 摘要',
  '自己調整',
  '手動寄送',
];

const afterFlow = ['AI 自動進入會議', '自動存入知識庫', 'AI 排程待辦', 'Mia 核准', '信件寄送'];

const Page7 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 font-sans text-slate-800">
      <div className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl flex flex-col p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-50 rounded-full -mr-40 -mt-40 z-0 opacity-50" />

        <div className="z-10 flex-grow flex flex-col">
          {/* 區塊1：標題 + 副標 */}
          <header className="mb-7">
            <img src="/assets/brand/header-logo.png" alt="GUGU School Logo" className="h-10 w-auto mb-6" />
            <div className="inline-block px-3 py-1 bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Step 07: Workflow Extension
            </div>
            <h1 className="text-[1.9rem] font-black leading-tight text-slate-900 border-l-8 border-orange-500 pl-6 mb-4">
              你也是這樣嗎？看似很會用 AI，卻花更多時間在整理資料給它
            </h1>
            <p className="text-base text-slate-700 font-semibold">
              如果你做的只是錄音、上傳、整理、補資料，那你不是在用 AI，你是在幫 AI 打工。
            </p>
          </header>

          {/* 區塊2：Mia 情境說明 */}
          <section className="mb-7 bg-slate-50 border border-slate-200 rounded-2xl p-5">
            <p className="text-sm leading-relaxed text-slate-700 mb-3">
              前面我們提過，Mia（品牌行銷企劃）的工作時間裡，有 <span className="font-bold text-orange-500">35%</span>{' '}
              花在開會與會議整理。她學會下指令、也學會用工具後，很自然就先把這件事拿來練習。
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              但很多人學會 AI 後，實際上只是把原本流程再做一遍：看起來很熟工具，實際上仍花大量時間在整理給 AI 的前置作業。
            </p>
          </section>

          {/* 區塊3：Before / After 對照圖 */}
          <section className="mb-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-300 rounded-2xl p-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">看似很會用 AI</h3>
                <div className="space-y-2">
                  {beforeFlow.map((item, idx) => (
                    <div key={item} className="text-sm text-slate-600">
                      <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-slate-400 mr-2" />
                        {item}
                      </div>
                      {idx < beforeFlow.length - 1 && <ArrowRight size={13} className="text-slate-400 mt-1 ml-1" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-4">
                <h3 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">真正有效率的做法</h3>
                <div className="space-y-2">
                  {afterFlow.map((item, idx) => (
                    <div key={item} className="text-sm text-slate-800 font-medium">
                      <div className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-orange-500 mr-2" />
                        {item}
                      </div>
                      {idx < afterFlow.length - 1 && <ArrowRight size={13} className="text-orange-400 mt-1 ml-1" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 區塊4：收斂 + CTA */}
          <section className="mb-6 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-4">
              <p className="text-sm leading-relaxed">
                差別不是有沒有用 AI，而是有沒有把它變成真正省時間的流程。Mia 真正需要做的，只剩確認摘要與待辦是否正確。
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <p className="text-sm text-slate-700 leading-relaxed mb-3">
                想知道怎麼讓 AI 自己加入流程，自己完成記錄、整理、派送，甚至建立完整的自動化工作流嗎？
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                不用再學更多零碎指令，也不用一直換工具。我們即將推出的《AI 替你上班》課程，會手把手帶你建立屬於自己的自動化辦公室。
              </p>
            </div>
          </section>

          <footer className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
            <div className="text-sm font-bold text-slate-700 flex items-center">
              <Clock3 size={15} className="mr-2 text-orange-500" /> 會議工作流的延伸應用
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 tracking-widest uppercase">Page 07 / 08</p>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-orange-600 font-semibold text-sm mt-1"
              >
                下一頁：AI 自動化辦公室 <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Page7;
