import React, { useEffect, useState } from 'react';
import { MessageCircleMore } from 'lucide-react';

const FloatingButton: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show button after 2 seconds with fade-in animation (collapsed)
    const showTimeout = setTimeout(() => setVisible(true), 2000);

    // Start expand/collapse cycle only after 15 seconds total
    const startCycleTimeout = setTimeout(() => {
      const expandTemporarily = () => {
        setExpanded(true);

        // مدة بقاء الزر مفتوح قبل أن ينكمش (تم زيادتها)
        const collapseTimeout = setTimeout(() => setExpanded(false), 10000);

        return collapseTimeout;
      };

      // أول مرة يظهر بشكل طبيعي حسب الدالة
      const initialCollapse = expandTemporarily();

      // مدة الانكماش الطويلة قبل إعادة الفرد مرة أخرى (تم زيادتها كثيرًا)
      const longDelayBeforeExpand = 10000; // هنا الانكماش طويل (15 ثانية)

      const interval = setInterval(() => {
        const timeoutId = expandTemporarily();
        return () => clearTimeout(timeoutId);
      }, longDelayBeforeExpand + 5000); 
      // 15000 = انكماش طويل
      // 10000 = مدة بقاء الزر مفتوح قبل الانكماش
      // المجموع = دورة كاملة

      return () => {
        clearTimeout(initialCollapse);
        clearInterval(interval);
      };
    }, 15000); // Wait 15 seconds total before starting first expand

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(startCycleTimeout);
    };
  }, []);

  return (
    <a
      href="mailto:hello@fireflyagency.com"
      className={`fixed bottom-6 left-6 z-50 group transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Let's Talk"
      onMouseEnter={() => setExpanded(true)}
      onFocus={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onBlur={() => setExpanded(false)}
    >
      <div
        className={`relative flex items-center gap-3 px-3 py-3 rounded-full backdrop-blur-xl border border-white/15 bg-white/10 text-white font-semibold tracking-wide shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-[1500ms] ease-in-out overflow-hidden ${
          expanded ? 'pl-5 pr-6 w-auto' : 'pl-3 pr-3'
        }`}
      >
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-[1500ms] ease-in-out ${
          expanded ? 'translate-x-0' : 'translate-x-2'
        }`}>
          <MessageCircleMore className="w-7 h-7 text-white" />
        </div>

        <div className="flex items-center">
          <span
            className={`uppercase text-sm transition-all duration-[1500ms] ease-in-out overflow-hidden ${
              expanded ? 'opacity-100 max-w-[300px]' : 'opacity-0 max-w-0'
            }`}
          >
            Let's Talk!
          </span>
        </div>

        <div className="absolute inset-0 rounded-full border border-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]"></div>
      </div>
    </a>
  );
};

export default FloatingButton;
