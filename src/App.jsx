import React, { useMemo, useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';

const App = () => {
  const [page, setPage] = useState(1);

  const CurrentPage = useMemo(() => {
    if (page === 2) return Page2;
    if (page === 3) return Page3;
    if (page === 4) return Page4;
    if (page === 5) return Page5;
    if (page === 6) return Page6;
    if (page === 7) return Page7;
    if (page === 8) return Page8;
    return Page1;
  }, [page]);

  return (
    <div>
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-[800px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <img src="assets/brand/header-logo.png" alt='GUGU School Logo' className='h-7 w-auto' />

          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  page === p ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                第 {p} 頁
              </button>
            ))}
          </div>
        </div>
      </div>

      <CurrentPage onNext={() => setPage((p) => Math.min(8, p + 1))} />
    </div>
  );
};

export default App;
