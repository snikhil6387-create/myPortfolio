export default function PageBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-[#06080f]" />
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% -20%, rgba(109, 59, 215, 0.28) 0%, transparent 55%), radial-gradient(ellipse 90% 60% at 100% 40%, rgba(3, 181, 211, 0.14) 0%, transparent 50%), radial-gradient(ellipse 70% 50% at 0% 80%, rgba(77, 142, 255, 0.12) 0%, transparent 45%), linear-gradient(165deg, #12182a 0%, #0a0e18 38%, #070b14 72%, #050810 100%)',
        }}
      />

      <div className="absolute -top-32 left-1/4 w-[32rem] h-[32rem] rounded-full bg-primary-container/25 blur-[120px] animate-pulse [animation-duration:8s]" />
      <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-[100px] [animation-duration:10s] animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#050810] via-transparent to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 85%)',
        }}
      />
    </div>
  );
}