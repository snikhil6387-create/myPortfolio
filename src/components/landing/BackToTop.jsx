import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-surface-container-high/90 text-on-surface hover:text-secondary shadow-[0_8px_24px_rgba(0,0,0,0.5)] flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 active:scale-95 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined text-headline-sm">keyboard_arrow_up</span>
    </button>
  );
}