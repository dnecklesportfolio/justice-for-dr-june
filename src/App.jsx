import { useState } from 'react'
import Hero from './components/Hero'
import ProgressBar from './components/ProgressBar'
import Evidence from './components/Evidence'
import ActionButton from './components/ActionButton'

function App() {
  return (
    <div className="min-h-screen bg-justice-black text-justice-white font-sans selection:bg-justice-red selection:text-white">
      <Hero />
      <ProgressBar />
      <Evidence />
      <div className="py-20 flex flex-col items-center justify-center px-6">
        <h3 className="text-4xl md:text-6xl font-serif font-black uppercase text-center mb-8">
          Time is <span className="text-justice-red">Running Out.</span>
        </h3>
        <p className="text-xl text-center text-gray-400 max-w-xl mb-12 italic">
          DA Katz has the power to intervene. She chooses to stay silent. One click from you can change that.
        </p>
        <div className="w-full max-w-2xl border-t-2 border-justice-red pt-12">
          <p className="text-sm font-sans text-center uppercase tracking-[0.3em] text-white opacity-40 mb-4">
            Scroll for Action
          </p>
        </div>
      </div>
      <ActionButton />

      <footer className="py-12 px-6 border-t border-white/5 text-center space-y-4">
        <p className="text-xs uppercase tracking-widest text-white/30">
          Paid for by UpliftBK
        </p>
        <p className="text-[10px] text-white/20">
          © 2026 JUSTICE FOR DR. JUNE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  )
}

export default App
