import React from 'react';
import { ArrowRight, CheckCircle2, ImagePlus, Layers3, PenTool, Ratio, Sparkles } from 'lucide-react';

const imageBefore = '/assets/collagen/collagen-02.png';
const imageSpecGrid = '/assets/collagen/collagen-01.png';
const imageFinal = '/assets/collagen/collagen-04-reference.png';

const Page6 = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4 font-sans text-slate-800">
      <div className="bg-white w-full max-w-[800px] min-h-[1130px] shadow-2xl flex flex-col p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-50 rounded-full -mr-40 -mt-40 z-0 opacity-50" />

        <div className="z-10 flex-grow flex flex-col">
          <header className="mb-6">
            <img src="/assets/brand/header-logo.png" alt="GUGU School Logo" className="h-10 w-auto mb-6" />
            <div className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded">
              Step 06: Gemini Case
            </div>
            <h1 className="text-3xl font-black leading-tight text-slate-900 border-l-8 border-slate-900 pl-6 mb-3">
              以 Gemini 為例：了解工具後，你的提示詞會怎麼改變？
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed mb-2">下面直接看一個實際案例：</p>
            <p className="text-sm font-bold text-slate-800">任務：幫膠原蛋白飲新品做一張商品情境圖</p>
          </header>

          <section className="mb-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Before｜還不了解工具時</p>
              <p className="text-sm text-slate-700 mb-2">很多人會直接這樣下：</p>
              <p className="text-sm font-bold text-slate-900 mb-2">「幫我做一張膠原蛋白飲廣告圖，粉紅色，高級感。」</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 再亮一點</li>
                <li>• 再高級一點</li>
                <li>• 背景再換一下</li>
                <li>• 再幫我改一下構圖</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">After｜了解工具後</p>
              <p className="text-sm text-slate-700 mb-2">先理解 Gemini 生圖能力，再調整寫法：</p>
              <ul className="text-sm text-slate-700 space-y-1 font-medium">
                <li>• 參考圖：固定產品外觀</li>
                <li>• 比例：先決定輸出格式</li>
                <li>• 多張輸出：先挑方向</li>
                <li>• 後續編修：先生成再微調</li>
                <li>• 商品圖適配：本來就適合商品情境圖</li>
              </ul>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-lg font-bold mb-3">膠原蛋白飲商品圖範例</h3>
            <div className="grid grid-cols-3 gap-4">
              <figure className="bg-slate-50 border border-slate-200 rounded-2xl p-3">
                <figcaption className="text-xs font-bold text-slate-500 mb-2">示意 1｜模糊問法輸出</figcaption>
                <img src={imageBefore} alt="before image" className="w-full h-44 object-contain bg-white rounded-xl border border-slate-200" />
                <p className="mt-2 text-[11px] text-slate-600">「粉紅色、高級感」這種一句話問法，結果通常不穩。</p>
              </figure>

              <figure className="bg-slate-50 border border-slate-200 rounded-2xl p-3">
                <figcaption className="text-xs font-bold text-slate-500 mb-2">示意 2｜規格化輸出（四圖）</figcaption>
                <img src={imageSpecGrid} alt="spec grid image" className="w-full h-44 object-contain bg-white rounded-xl border border-slate-200" />
                <div className="mt-2 text-[11px] text-slate-600 space-y-0.5">
                  <p>【比例規格】Aspect Ratio 4:5</p>
                  <p>【構圖要求】產品置中，上方預留 1/3 留白</p>
                  <p>【光影質感】自然窗光、水感玻璃反射</p>
                </div>
              </figure>

              <figure className="bg-orange-50 border border-orange-200 rounded-2xl p-3">
                <figcaption className="text-xs font-bold text-orange-500 mb-2">示意 3｜文案留白成品</figcaption>
                <img src={imageFinal} alt="final slogan image" className="w-full h-44 object-contain bg-white rounded-xl border border-orange-200" />
                <p className="mt-2 text-[11px] text-slate-700 font-medium">有 slogan 與留白區，可直接進下一步素材製作。</p>
              </figure>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-lg font-bold mb-3">圖片 1｜Before / After 對照</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">不了解工具時</p>
                <ul className="text-slate-600 space-y-1">
                  <li>• 一句話亂試</li>
                  <li>• 一直聊天補需求</li>
                  <li>• 結果不穩</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">了解工具後</p>
                <ul className="text-slate-700 space-y-1 font-medium">
                  <li>• 先看能力</li>
                  <li>• 再定規格</li>
                  <li>• 再生成</li>
                  <li>• 再修圖</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <h3 className="text-lg font-bold mb-3">圖片 2｜Gemini 能力影響提示詞的示意圖</h3>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-slate-900 text-white rounded-xl p-3 border border-slate-700">
                <ImagePlus size={16} className="text-orange-300 mb-2" />
                <p className="text-sm font-bold mb-1">參考圖</p>
                <p className="text-[11px] text-slate-300">少寫很多產品描述</p>
              </div>
              <div className="bg-slate-900 text-white rounded-xl p-3 border border-slate-700">
                <Ratio size={16} className="text-orange-300 mb-2" />
                <p className="text-sm font-bold mb-1">比例</p>
                <p className="text-[11px] text-slate-300">先決定輸出場景</p>
              </div>
              <div className="bg-slate-900 text-white rounded-xl p-3 border border-slate-700">
                <Layers3 size={16} className="text-orange-300 mb-2" />
                <p className="text-sm font-bold mb-1">多張輸出</p>
                <p className="text-[11px] text-slate-300">先挑方向</p>
              </div>
              <div className="bg-slate-900 text-white rounded-xl p-3 border border-slate-700">
                <PenTool size={16} className="text-orange-300 mb-2" />
                <p className="text-sm font-bold mb-1">編修</p>
                <p className="text-[11px] text-slate-300">不用第一輪全講死</p>
              </div>
            </div>
          </section>

          <section className="mb-5 bg-orange-50 border-2 border-orange-200 rounded-2xl p-4">
            <h3 className="text-sm font-bold text-slate-900 mb-2">圖片 3｜膠原蛋白飲商品圖示意（檢查點）</h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="flex items-center"><CheckCircle2 size={13} className="text-orange-500 mr-2" />產品主體清楚</div>
              <div className="flex items-center"><CheckCircle2 size={13} className="text-orange-500 mr-2" />留白區</div>
              <div className="flex items-center"><CheckCircle2 size={13} className="text-orange-500 mr-2" />風格穩定</div>
              <div className="flex items-center"><CheckCircle2 size={13} className="text-orange-500 mr-2" />可直接進下一步素材製作</div>
            </div>
          </section>

          <footer className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
            <div className="text-sm font-bold text-slate-700 flex items-center">
              <Sparkles size={15} className="mr-2 text-orange-500" /> Gemini 商品圖提示詞實作
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 tracking-widest uppercase">Page 06 / 08</p>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-orange-600 font-semibold text-sm mt-1"
              >
                下一頁：會議工作流延伸 <ArrowRight size={14} className="ml-1" />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Page6;
