import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  RiRobot2Line, 
  RiBarChartLine, 
  RiMoneyDollarCircleLine, 
  RiAlertLine, 
  RiArrowRightLine, 
  RiSparklingLine,
  RiDashboardLine
} from 'react-icons/ri';

const Landing = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: RiRobot2Line,
      title: 'Gemini AI Copywriting',
      description: 'Generate high-converting, SEO-optimized product descriptions and keywords in seconds using Google Gemini.',
      color: 'text-primary-fixed-dim',
      bg: 'bg-primary-container/10',
      border: 'border-primary-container/20',
      badge: 'Google Gemini'
    },
    {
      icon: RiMoneyDollarCircleLine,
      title: 'Pricing Advisor',
      description: 'Get smart, data-driven suggestions for product pricing and automated discounts to move slow-moving inventory.',
      color: 'text-secondary',
      bg: 'bg-secondary/10',
      border: 'border-secondary/20',
      badge: 'Pricing Intelligence'
    },
    {
      icon: RiBarChartLine,
      title: 'Real-time Analytics',
      description: 'Monitor store health, sales trends, monthly revenues, and top-selling products in custom responsive graphs.',
      color: 'text-tertiary-fixed-dim',
      bg: 'bg-tertiary-container/10',
      border: 'border-tertiary-container/20',
      badge: 'Live Data'
    },
    {
      icon: RiAlertLine,
      title: 'Smart Stock Alerts',
      description: 'Receive instant notifications for low-stock or out-of-stock items, protecting your revenue stream from supply disruptions.',
      color: 'text-error',
      bg: 'bg-error-container/10',
      border: 'border-error-container/20',
      badge: 'Inventory Protection'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] bg-secondary/5 blur-[130px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[40%] h-[40%] bg-primary-container/5 blur-[150px] rounded-full"></div>
      </div>

      {/* Header / Navbar */}
      <header className="relative z-10 w-full border-b border-white/5 bg-surface-container-lowest/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center border border-white/10 shadow-glow">
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-1.66-.45-3.22-1.22-4.57" stroke="url(#nav-logo-grad)"/>
                <path d="m15.5 5.5 3-3" stroke="url(#nav-logo-grad)"/>
                <path d="m15.5 8.5 3 3" stroke="url(#nav-logo-grad)"/>
                <defs>
                  <linearGradient id="nav-logo-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7"/>
                    <stop offset="1" stopColor="#3B82F6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight">Sage <span className="gradient-text font-black">AI</span></span>
          </div>

          <nav className="flex items-center gap-4">
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn-primary flex items-center gap-2 h-10 py-0 px-5 text-sm font-label-md">
                <RiDashboardLine className="text-base" />
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-white/70 hover:text-white text-sm font-semibold transition-colors">
                  Sign In
                </Link>
                <Link to="/signup" className="btn-primary flex items-center h-10 py-0 px-5 text-sm font-label-md">
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center">
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center flex flex-col items-center">
          {/* Sparkle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-fixed-dim text-xs font-mono font-medium mb-8 animate-fade-in">
            <RiSparklingLine className="text-sm animate-pulse" />
            Empowering Next-Gen E-Commerce Operations
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight md:leading-none max-w-4xl mb-6 animate-fade-in">
            The AI-Powered <span className="gradient-text">Command Center</span> for Modern Stores
          </h1>

          <p className="text-on-surface-variant text-lg md:text-xl font-body-md max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sage AI supercharges your Shopify, WooCommerce, or custom storefront. Seamlessly optimize products, draft marketing campaigns, adapt pricing, and view real-time analytics — all powered by Google Gemini.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {isAuthenticated ? (
              <Link to="/dashboard" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 text-base shadow-[0_4px_25px_rgba(160,120,255,0.3)]">
                Enter Dashboard <RiArrowRightLine />
              </Link>
            ) : (
              <>
                <Link to="/signup" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 text-base shadow-[0_4px_25px_rgba(160,120,255,0.3)]">
                  Start for Free <RiArrowRightLine />
                </Link>
                <Link to="/login" className="btn-secondary w-full sm:w-auto flex items-center justify-center h-12 px-8 text-base">
                  Sign In to Account
                </Link>
              </>
            )}
          </div>

          {/* Interactive Mock Dashboard */}
          <div className="w-full max-w-5xl rounded-2xl ai-mesh-border p-1 bg-surface-container-low/20 shadow-[0_30px_70px_rgba(0,0,0,0.6)] animate-fade-in relative group" style={{ animationDelay: '0.3s' }}>
            <div className="noise-overlay opacity-15" />
            <div className="rounded-xl overflow-hidden bg-[#0a0f24] border border-white/5 p-4 md:p-6 relative z-10">
              
              {/* Mock Dashboard Top Nav */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5 text-xs text-white/40 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block"></span>
                  <span className="ml-3 font-semibold text-white/50">sage-command-center.app</span>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                  <span>API Status: Healthy</span>
                  <span>Model: Google Gemini</span>
                </div>
              </div>

              {/* Mock App Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {/* Product Detail Card */}
                <div className="glass-panel p-4 border border-white/10 rounded-xl relative flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-secondary font-mono tracking-widest uppercase">CATALOG ITEM</span>
                    <h3 className="font-bold text-white text-base mt-1">Sage Wireless Headphones</h3>
                    <p className="text-white/40 text-xs mt-1">Premium Audio / Electronics</p>
                    <div className="mt-3 py-1.5 px-3 rounded bg-white/5 border border-white/5 text-[11px] text-white/70 italic leading-relaxed">
                      "Upgrade your listening experience with high-fidelity sound, active noise-cancelling tech, and 40-hour battery life."
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">$149.99</span>
                    <span className="badge badge-success text-[10px]">In Stock</span>
                  </div>
                </div>

                {/* Gemini Generation Flow */}
                <div className="glass-panel p-4 border border-white/10 rounded-xl relative flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-primary-fixed-dim font-mono tracking-widest uppercase flex items-center gap-1">
                        <RiSparklingLine className="animate-spin" style={{ animationDuration: '4s' }} /> Gemini Coprocessor
                      </span>
                      <span className="text-[10px] text-white/40 font-mono">Input Ready</span>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-white/50 font-bold font-mono">PROMPT PRESET</label>
                      <div className="p-2 rounded bg-black/40 text-xs text-white/80 border border-white/5 font-mono">
                        Recommend optimal pricing discount
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] text-white/50 font-bold font-mono">AI SUGGESTION</label>
                      <div className="p-2.5 rounded bg-primary-container/10 border border-primary-container/20 text-xs text-primary-fixed-dim space-y-1 animate-pulse-slow">
                        <p className="font-semibold font-mono">✔ Optimal Price: $129.99</p>
                        <p className="text-[10px] text-white/50 leading-snug">Demand signals highlight high conversion at 15% off. Apply discount for Spring Campaign.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Stats Preview */}
                <div className="glass-panel p-4 border border-white/10 rounded-xl relative flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-tertiary-fixed-dim font-mono tracking-widest uppercase">SALES INSIGHT</span>
                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="text-white/40 text-[10px] font-mono">REVENUE GENERATED</p>
                        <p className="text-2xl font-black text-white tracking-tight">$42,391.50</p>
                        <p className="text-xs text-secondary font-semibold font-mono flex items-center gap-1 mt-0.5">↑ +14.2% this week</p>
                      </div>
                      <div className="h-10 flex items-end gap-1 px-1">
                        {[40, 65, 35, 75, 55, 90, 80, 95].map((h, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-gradient-to-t from-primary/50 to-secondary/80 rounded-t-sm"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between text-[9px] text-white/30 font-mono uppercase">
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Feature Grid Section */}
        <section className="w-full border-t border-white/5 bg-surface-container-low/20 py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                Designed to Maximize Store Productivity
              </h2>
              <p className="text-on-surface-variant text-base font-body-md leading-relaxed">
                Empower your operational pipeline with automated copywriting, algorithmic price optimization, real-time telemetry, and stock failure notifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div 
                    key={feat.title} 
                    className="card-hover p-6 border border-white/10 rounded-2xl flex flex-col justify-between group h-full relative"
                  >
                    <div className="noise-overlay opacity-10" />
                    <div className="relative z-10 space-y-4">
                      <div className={`w-12 h-12 rounded-2xl ${feat.bg} border ${feat.border} flex items-center justify-center`}>
                        <Icon className={`${feat.color} text-2xl`} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-semibold uppercase bg-white/5 border border-white/10 text-white/40 px-2 py-0.5 rounded">
                          {feat.badge}
                        </span>
                        <h3 className="text-white font-bold text-lg mt-3">{feat.title}</h3>
                        <p className="text-on-surface-variant text-sm mt-2 leading-relaxed font-body-md">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center glass-panel p-12 border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="noise-overlay opacity-15" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-2xl mx-auto leading-tight">
                Ready to Supercharge Your E-Commerce Store?
              </h2>
              <p className="text-on-surface-variant text-base font-body-md max-w-xl mx-auto">
                Join store admins who leverage Google Gemini AI to draft content, monitor orders, audit metrics, and scale growth automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {isAuthenticated ? (
                  <Link to="/dashboard" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 shadow-glow">
                    Go to Admin Command Center <RiArrowRightLine />
                  </Link>
                ) : (
                  <>
                    <Link to="/signup" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-8 shadow-glow">
                      Create Admin Account <RiArrowRightLine />
                    </Link>
                    <Link to="/login" className="btn-secondary w-full sm:w-auto flex items-center justify-center h-12 px-8">
                      Sign In
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/5 bg-surface-container-lowest/50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white/50 text-sm font-semibold">
            <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center border border-white/10">
              <svg className="w-4 h-4 text-white/60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-1.66-.45-3.22-1.22-4.57" stroke="currentColor"/>
                <path d="m15.5 5.5 3-3" stroke="currentColor"/>
                <path d="m15.5 8.5 3 3" stroke="currentColor"/>
              </svg>
            </div>
            Sage AI
          </div>
          <p className="text-white/40 text-xs font-mono">
            &copy; {new Date().getFullYear()} Sage AI. All rights reserved. Powered by Google Gemini.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
