import { useState, useId } from 'react';
import { Award, Printer, CheckCircle2, ShieldCheck, QrCode, RefreshCw } from 'lucide-react';

export const CertificateStudio = () => {
  const [recipient, setRecipient] = useState('TUYIRINGIRE Pacifique');
  const [isVerifying, setIsVerifying] = useState(false);
  const uniqueId = useId().replace(/:/g, '');

  const verificationCode = `FEA-A1-2026-${recipient.length * 137}-${uniqueId.slice(0, 4).toUpperCase()}`;

  const handlePrint = () => {
    window.print();
  };

  const handleReverify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
    }, 600);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 text-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1">
            FluentEdge Academy Engine
          </span>
          <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
            CEFR Award Verification & Certificate Studio
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-lg shadow-purple-600/20 transition-all"
          >
            <Printer size={14} /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* Recipient Customizer */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-3 bg-slate-950/60 p-3 rounded-2xl border border-slate-800">
        <label htmlFor="recipient-name" className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
          Test Certificate Generator:
        </label>
        <input 
          id="recipient-name"
          type="text" 
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter recipient name to test dynamic render..."
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white outline-none focus:border-purple-500 transition-colors"
        />
        <button
          onClick={handleReverify}
          disabled={isVerifying}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
        >
          <RefreshCw size={12} className={isVerifying ? "animate-spin" : ""} />
          {isVerifying ? "Checking Hash..." : "Verify Hash"}
        </button>
      </div>

      {/* Dynamic Certificate Preview Card */}
      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50 via-amber-100/90 to-yellow-50 border-4 border-amber-400 text-slate-900 shadow-2xl overflow-hidden print:p-8">
        
        {/* Holographic Watermark Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <Award size={400} />
        </div>

        {/* Verification Pill */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-mono font-bold">
          <ShieldCheck size={12} className="text-emerald-600" />
          <span>VERIFIED ON FLUENTEDGE LEDGER</span>
        </div>

        <div className="text-center max-w-xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex p-3 rounded-full bg-amber-200 text-amber-800 shadow-inner">
            <Award size={42} />
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 tracking-tight">
              FluentEdge Academy
            </h3>
            <p className="text-xs tracking-widest font-bold text-amber-900 uppercase mt-1">
              Certificate of Completion • CEFR English Proficiency Award
            </p>
          </div>

          <div className="py-4 border-y border-amber-300/80 my-4 space-y-2">
            <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold">
              This is to officially certify that
            </p>
            <p className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-950 underline decoration-amber-400 decoration-2 underline-offset-8">
              {recipient || "Learner Name"}
            </p>
            <p className="text-xs text-slate-600 pt-2">
              has completed all levels, assessments, and continuous oral evaluation for
            </p>
            <p className="text-lg font-bold text-purple-950 font-serif">
              PROFESSIONAL ENGLISH 1 (A1)
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
              <CheckCircle2 size={13} />
              Final Grade: 100% — Mastered
            </div>
          </div>

          {/* Certificate Footer */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-end text-left pt-2 font-mono text-[10px] text-slate-600">
            <div>
              <p className="uppercase text-slate-500 font-bold">Authorized By</p>
              <p className="font-bold text-slate-900 text-xs mt-0.5">TUYIRINGIRE Pacifique</p>
              <p className="text-[9px] text-slate-500">Founder & CS Educator</p>
            </div>
            
            <div className="hidden sm:block text-center">
              <div className="inline-block p-1 bg-white rounded border border-amber-200 shadow-sm">
                <QrCode size={36} className="text-slate-800" />
              </div>
              <p className="text-[8px] text-slate-400 mt-0.5">Scan to verify</p>
            </div>

            <div className="text-right">
              <p className="uppercase text-slate-500 font-bold">Verification Hash</p>
              <p className="font-bold text-slate-900 text-[11px] mt-0.5">{verificationCode}</p>
              <p className="text-[9px] text-emerald-700 font-semibold">Status: Tamper-Proof</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
