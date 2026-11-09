import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TechHeroVisualProps {
  className?: string;
}

export const TechHeroVisual: React.FC<TechHeroVisualProps> = ({ className = '' }) => {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  return (
    <div className={`relative w-full max-w-[500px] mx-auto select-none ${className}`}>
      {/* Outer ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/25 via-rose-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-70 pointer-events-none animate-pulse" />

      {/* Main visual viewport */}
      <div className="relative aspect-square w-full flex items-center justify-center">

        {/* 1. ORBITAL NEON RINGS (Behind Laptop) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 500 500"
          fill="none"
        >
          <defs>
            <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="orbitGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#EF4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Primary Orbital Ellipse (Tilted 3D Ring) */}
          <ellipse
            cx="250"
            cy="270"
            rx="210"
            ry="95"
            transform="rotate(-15 250 270)"
            stroke="url(#orbitGrad1)"
            strokeWidth="2"
            strokeDasharray="6 8"
            className="opacity-70 animate-[spin_60s_linear_infinite]"
            filter="url(#neonGlow)"
          />

          {/* Secondary Outer Ellipse */}
          <ellipse
            cx="250"
            cy="270"
            rx="180"
            ry="80"
            transform="rotate(22 250 270)"
            stroke="url(#orbitGrad2)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="opacity-50 animate-[spin_45s_linear_infinite_reverse]"
          />

          {/* Ground Ambient Reflection Ring */}
          <ellipse
            cx="250"
            cy="390"
            rx="170"
            ry="45"
            fill="radial-gradient(ellipse, rgba(239, 68, 68, 0.25) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)"
            className="opacity-70"
          />
        </svg>

        {/* 2. ISOMETRIC 3D LAPTOP */}
        <motion.div
          animate={{
            y: [-10, 8, -10],
            rotateZ: [-0.5, 0.5, -0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-10 w-[78%] sm:w-[72%] max-w-[340px] flex flex-col items-center"
        >
          {/* Laptop Container */}
          <div className="relative w-full filter drop-shadow-[0_20px_40px_rgba(239,68,68,0.35)]">
            
            {/* SCREEN PORTION (Angled Backwards in 3D) */}
            <div
              className="relative mx-auto w-[82%] aspect-[16/10] rounded-t-xl p-[2px] bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 shadow-2xl"
              style={{
                transform: 'perspective(600px) rotateX(12deg) rotateY(-1deg)',
                transformOrigin: 'bottom center',
              }}
            >
              {/* Screen Bezel Neon Accent Line */}
              <div className="absolute inset-0 rounded-t-xl border border-cyan-400/40 pointer-events-none shadow-[inset_0_0_12px_rgba(6,182,212,0.3)]" />

              {/* WebCam Dot */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-400/60 ring-1 ring-cyan-400/50" />

              {/* Inside Screen Display */}
              <div className="w-full h-full rounded-t-lg bg-gradient-to-br from-slate-950 via-[#0a0f1d] to-[#120a1f] p-3 flex flex-col justify-between overflow-hidden relative">
                
                {/* Screen Scanlines / Grid Effect */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(239, 68, 68, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }}
                />

                {/* Editor Header Bar */}
                <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-1">
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[8px] font-mono text-cyan-400/80 tracking-wider">
                    viji-core.tsx
                  </span>
                  <span className="text-[7px] font-mono px-1 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                    LIVE
                  </span>
                </div>

                {/* Central Screen Feature: Glowing </> with Syntax Lines */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto py-1">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      textShadow: [
                        '0 0 10px rgba(6,182,212,0.8), 0 0 20px rgba(239,68,68,0.5)',
                        '0 0 16px rgba(6,182,212,1), 0 0 30px rgba(239,68,68,0.8)',
                        '0 0 10px rgba(6,182,212,0.8), 0 0 20px rgba(239,68,68,0.5)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-red-400 tracking-wider drop-shadow-md"
                  >
                    &lt;/&gt;
                  </motion.div>

                  {/* Micro Code Lines */}
                  <div className="w-full mt-2 space-y-1 font-mono text-[7px] text-left px-2">
                    <div className="flex items-center space-x-1 text-slate-400">
                      <span className="text-red-400">const</span>
                      <span className="text-yellow-300">stack</span>
                      <span>=</span>
                      <span className="text-cyan-300">[&apos;AI&apos;, &apos;IoT&apos;, &apos;React&apos;];</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-400">
                      <span className="text-purple-400">deploy</span>
                      <span className="text-emerald-400">(&apos;Future&apos;)</span>
                      <span className="inline-block w-1 h-2 bg-cyan-400 animate-pulse ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Screen Status */}
                <div className="relative z-10 flex items-center justify-between text-[7px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping inline-block" />
                    System Active
                  </span>
                  <span className="text-slate-400">UTF-8</span>
                </div>
              </div>
            </div>

            {/* SCREEN HINGE */}
            <div className="relative z-10 mx-auto w-[40%] h-1.5 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-sm -mt-0.5 shadow-sm" />

            {/* LAPTOP KEYBOARD BASE (Isometric Deck) */}
            <div
              className="relative z-20 w-full h-24 sm:h-28 rounded-b-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-black p-2 border-t border-cyan-400/30 shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
              style={{
                transform: 'perspective(500px) rotateX(48deg)',
                transformOrigin: 'top center',
              }}
            >
              {/* Glowing Keyboard Perimeter Neon Strip */}
              <div className="absolute inset-0 rounded-b-2xl border-2 border-red-500/40 pointer-events-none shadow-[0_0_15px_rgba(239,68,68,0.5)]" />

              {/* Keyboard Grid */}
              <div className="w-[88%] mx-auto h-[62%] rounded-lg bg-black/60 border border-slate-700/80 p-1 flex flex-col justify-between">
                {/* Key Rows */}
                <div className="grid grid-cols-12 gap-0.5 h-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[2px] bg-gradient-to-b from-slate-700 to-slate-800 shadow-[0_1px_0_rgba(255,255,255,0.1)] hover:bg-red-500/50 transition-colors"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-0.5 h-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[2px] bg-gradient-to-b from-slate-700 to-slate-800 shadow-[0_1px_0_rgba(255,255,255,0.1)] hover:bg-cyan-500/50 transition-colors"
                    />
                  ))}
                </div>
                <div className="grid grid-cols-12 gap-0.5 h-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[2px] bg-gradient-to-b from-slate-700 to-slate-800 shadow-[0_1px_0_rgba(255,255,255,0.1)] hover:bg-purple-500/50 transition-colors"
                    />
                  ))}
                </div>
                {/* Spacebar Row */}
                <div className="flex items-center justify-center space-x-1 h-2.5">
                  <div className="w-8 h-full rounded-[2px] bg-slate-700" />
                  <div className="flex-1 h-full rounded-[2px] bg-gradient-to-r from-red-500/40 via-cyan-400/40 to-red-500/40 border border-cyan-400/40 shadow-[0_0_6px_rgba(6,182,212,0.4)]" />
                  <div className="w-8 h-full rounded-[2px] bg-slate-700" />
                </div>
              </div>

              {/* Trackpad */}
              <div className="w-20 sm:w-24 h-4 mx-auto mt-1 rounded-sm bg-gradient-to-b from-slate-900 to-black border border-slate-700/80 shadow-inner" />
            </div>

            {/* Front Edge Lip with Glowing Underglow */}
            <div className="relative z-10 w-full h-2 rounded-b-md bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 shadow-lg -mt-1 flex items-center justify-center">
              <div className="w-16 h-0.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
            </div>

          </div>
        </motion.div>

        {/* 3. FIVE FLOATING TECH BADGES (Exact Match to User Reference) */}

        {/* --- BADGE 1: PYTHON (Top Center) --- */}
        <motion.div
          animate={{
            y: [-8, 6, -8],
            x: [0, 2, 0],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onHoverStart={() => setActiveBadge('python')}
          onHoverEnd={() => setActiveBadge(null)}
          className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20 cursor-pointer group"
        >
          <div className="relative p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 border border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.35)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] group-hover:border-blue-400">
            {/* Ambient Halo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-yellow-500/20 blur-md opacity-60 group-hover:opacity-100" />
            
            {/* Python SVG Icon */}
            <svg
              className="relative w-8 h-8 sm:w-9 sm:h-9"
              viewBox="0 0 128 128"
              fill="none"
            >
              <path
                d="M63.5 12c-27.1 0-25.5 11.7-25.5 11.7l.1 12.1h26v3.7H27.9s-16.9-1.9-16.9 25.4 14.8 24.5 14.8 24.5h8.8v-12.3s-.5-14.8 14.5-14.8h25.1s13.8.2 13.8-13.6V25.6S89.5 12 63.5 12zM51.1 20.4c2.6 0 4.8 2.1 4.8 4.8s-2.1 4.8-4.8 4.8-4.8-2.1-4.8-4.8 2.2-4.8 4.8-4.8z"
                fill="url(#pyBlue)"
              />
              <path
                d="M64.5 116c27.1 0 25.5-11.7 25.5-11.7l-.1-12.1h-26v-3.7h36.2s16.9 1.9 16.9-25.4-14.8-24.5-14.8-24.5h-8.8v12.3s.5 14.8-14.5 14.8H53.7s-13.8-.2-13.8 13.6v22.8s-1.5 13.9 24.6 13.9zm12.4-8.4c-2.6 0-4.8-2.1-4.8-4.8s2.1-4.8 4.8-4.8 4.8 2.1 4.8 4.8-2.2 4.8-4.8 4.8z"
                fill="url(#pyYellow)"
              />
              <defs>
                <linearGradient id="pyBlue" x1="11" y1="12" x2="89" y2="89" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#387EB8" />
                  <stop offset="1" stopColor="#366994" />
                </linearGradient>
                <linearGradient id="pyYellow" x1="39" y1="39" x2="117" y2="116" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFE873" />
                  <stop offset="1" stopColor="#FFD43B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Badge Tooltip Label */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900/90 border border-blue-500/40 text-[9px] font-mono text-blue-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            Python &bull; Backend
          </div>
        </motion.div>

        {/* --- BADGE 2: REACT (Top Left) --- */}
        <motion.div
          animate={{
            y: [6, -9, 6],
            x: [-2, 2, -2],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onHoverStart={() => setActiveBadge('react')}
          onHoverEnd={() => setActiveBadge(null)}
          className="absolute top-12 sm:top-14 left-2 sm:left-4 z-20 cursor-pointer group"
        >
          <div className="relative p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 border border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.35)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] group-hover:border-cyan-300">
            {/* Ambient Halo */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md opacity-60 group-hover:opacity-100" />
            
            {/* React Atom Icon with Rotating Rings */}
            <svg
              className="relative w-8 h-8 sm:w-9 sm:h-9"
              viewBox="0 0 100 100"
              fill="none"
            >
              {/* Central Nucleus */}
              <circle cx="50" cy="50" r="7.5" fill="#00D8FF" className="animate-pulse" />
              
              {/* Ellipse 1 */}
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="16"
                stroke="#00D8FF"
                strokeWidth="3.2"
                className="opacity-90 animate-[spin_12s_linear_infinite]"
                style={{ transformOrigin: '50px 50px' }}
              />
              {/* Ellipse 2 */}
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="16"
                stroke="#00D8FF"
                strokeWidth="3.2"
                transform="rotate(60 50 50)"
                className="opacity-90 animate-[spin_15s_linear_infinite]"
                style={{ transformOrigin: '50px 50px' }}
              />
              {/* Ellipse 3 */}
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="16"
                stroke="#00D8FF"
                strokeWidth="3.2"
                transform="rotate(120 50 50)"
                className="opacity-90 animate-[spin_18s_linear_infinite]"
                style={{ transformOrigin: '50px 50px' }}
              />
            </svg>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900/90 border border-cyan-400/40 text-[9px] font-mono text-cyan-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            React &bull; UI
          </div>
        </motion.div>

        {/* --- BADGE 3: IoT (Top Right) --- */}
        <motion.div
          animate={{
            y: [-7, 7, -7],
            x: [2, -2, 2],
          }}
          transition={{
            duration: 5.1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onHoverStart={() => setActiveBadge('iot')}
          onHoverEnd={() => setActiveBadge(null)}
          className="absolute top-12 sm:top-14 right-2 sm:right-4 z-20 cursor-pointer group"
        >
          <div className="relative p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.35)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] group-hover:border-purple-400">
            {/* Ambient Halo */}
            <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-md opacity-60 group-hover:opacity-100" />
            
            {/* IoT Microchip Icon */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex flex-col items-center justify-center">
              <svg
                className="w-full h-full text-purple-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" className="fill-purple-950/40" />
                <rect x="8" y="8" width="8" height="8" rx="1" className="fill-purple-500/20 stroke-purple-300" />
                <path d="M4 9H2" />
                <path d="M4 15H2" />
                <path d="M20 9h2" />
                <path d="M20 15h2" />
                <path d="M9 4V2" />
                <path d="M15 4V2" />
                <path d="M9 20v2" />
                <path d="M15 20v2" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono font-black text-purple-200 tracking-tighter drop-shadow">
                IoT
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900/90 border border-purple-500/40 text-[9px] font-mono text-purple-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            IoT &bull; Sensors
          </div>
        </motion.div>

        {/* --- BADGE 4: AI (Bottom Left) --- */}
        <motion.div
          animate={{
            y: [5, -7, 5],
            x: [-1, 2, -1],
          }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onHoverStart={() => setActiveBadge('ai')}
          onHoverEnd={() => setActiveBadge(null)}
          className="absolute bottom-10 sm:bottom-12 left-3 sm:left-6 z-20 cursor-pointer group"
        >
          <div className="relative p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 border border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.35)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] group-hover:border-rose-400">
            {/* Ambient Halo */}
            <div className="absolute inset-0 rounded-2xl bg-rose-500/20 blur-md opacity-60 group-hover:opacity-100" />
            
            {/* AI Neural Chip Icon */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex flex-col items-center justify-center">
              <svg
                className="w-full h-full text-rose-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a8 8 0 0 0-8 8c0 3.37 2.1 6.26 5.09 7.42L9 22h6l-.09-4.58C17.9 16.26 20 13.37 20 10a8 8 0 0 0-8-8z" className="fill-rose-950/40" />
                <path d="M9 10h.01" />
                <path d="M15 10h.01" />
                <path d="M12 14c-1.5 0-2-.5-2-.5" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono font-black text-rose-200 tracking-wider drop-shadow">
                AI
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900/90 border border-rose-500/40 text-[9px] font-mono text-rose-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            AI &bull; GenAI
          </div>
        </motion.div>

        {/* --- BADGE 5: CLOUD / CODE (Bottom Right) --- */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            x: [1, -2, 1],
          }}
          transition={{
            duration: 5.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          onHoverStart={() => setActiveBadge('cloud')}
          onHoverEnd={() => setActiveBadge(null)}
          className="absolute bottom-10 sm:bottom-12 right-3 sm:right-6 z-20 cursor-pointer group"
        >
          <div className="relative p-2.5 sm:p-3 rounded-2xl bg-slate-900/90 dark:bg-slate-900/90 border border-teal-400/40 shadow-[0_0_20px_rgba(45,212,191,0.35)] backdrop-blur-md transition-all duration-300 group-hover:scale-115 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] group-hover:border-teal-300">
            {/* Ambient Halo */}
            <div className="absolute inset-0 rounded-2xl bg-teal-400/20 blur-md opacity-60 group-hover:opacity-100" />
            
            {/* Cloud Icon with Code Symbol */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex flex-col items-center justify-center">
              <svg
                className="w-full h-full text-teal-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" className="fill-teal-950/40" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[7.5px] font-mono font-bold text-teal-200 drop-shadow">
                &lt;/&gt;
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900/90 border border-teal-400/40 text-[9px] font-mono text-teal-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
            Cloud &bull; Web
          </div>
        </motion.div>

      </div>
    </div>
  );
};
