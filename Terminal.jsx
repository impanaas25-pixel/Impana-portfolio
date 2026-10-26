import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RotateCcw, Sparkles, Check, HelpCircle } from 'lucide-react';
import { terminalSuggestions, executeTerminalCommand } from '../data/terminalCommands';

export default function Terminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      command: 'about',
      result: executeTerminalCommand('about')
    }
  ]);
  const [commandHistory, setCommandHistory] = useState(['about']);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const handleRunCommand = (cmdToRun) => {
    const trimmed = cmdToRun.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const res = executeTerminalCommand(trimmed);
    setHistory((prev) => [...prev, { command: trimmed, result: res }]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleRunCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        }
      }
    }
  };

  const handleClear = () => {
    setHistory([]);
    setInputVal('');
    if (inputRef.current) inputRef.current.focus();
  };

  const handleReset = () => {
    setHistory([
      { command: 'about', result: executeTerminalCommand('about') }
    ]);
    setInputVal('');
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  return (
    <section id="playground" className="py-20 lg:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 text-violet-300 text-xs font-mono uppercase tracking-widest border border-violet-500/20 mb-3">
            <span>Interactive Developer Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Inside My Developer Mind
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Execute interactive simulated commands to query my background, inspect project schemas, view hackathon journeys, or test technical queries.
          </p>
        </div>

        {/* Suggestion Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4 text-left">
          <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Quick Commands:</span>
          </span>
          {terminalSuggestions.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleRunCommand(cmd)}
              className="px-3 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              {cmd}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="px-3 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-xs font-mono text-rose-300 border border-rose-500/20 transition-all cursor-pointer ml-auto flex items-center gap-1"
            title="Clear Terminal Output"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Clear Screen</span>
          </button>
        </div>

        {/* Terminal Window */}
        <div
          className="rounded-2xl bg-[#080b18] border border-white/[0.12] shadow-2xl overflow-hidden text-left font-mono"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Window Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#050711] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block opacity-80" />
              <span className="ml-3 text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-violet-400" />
                <span>impana@biet-cs: ~ (interactive shell)</span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
              <span className="hidden sm:inline">bash emulation v2.4</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
                className="text-slate-400 hover:text-cyan-300 text-[11px] underline cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Terminal Content Screen */}
          <div className="p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto space-y-4 text-xs sm:text-sm">
            {/* Initial Welcome Banner */}
            <div className="text-slate-500 text-xs leading-relaxed border-b border-white/[0.06] pb-3">
              Impana A S interactive terminal environment initialized.
              Type <span className="text-cyan-300 font-semibold">'help'</span> or click any suggestion pill above to explore.
            </div>

            {/* Command History Outputs */}
            {history.map((item, idx) => (
              <div key={idx} className="space-y-2">
                {/* Prompt Line */}
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-teal-400 font-bold">impana@biet-cs</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-violet-400">~</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-cyan-300 font-semibold">{item.command}</span>
                </div>

                {/* Output Lines */}
                <div className="pl-4 border-l-2 border-violet-500/30 text-slate-300 space-y-1">
                  {item.result.lines.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={
                        line.startsWith('---')
                          ? 'text-slate-600'
                          : line.startsWith('[')
                          ? 'text-cyan-300 font-medium'
                          : line.includes('Error') || line.includes('not recognized')
                          ? 'text-rose-400'
                          : 'text-slate-300'
                      }
                    >
                      {line || '\u00A0'}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-teal-400 font-bold">impana@biet-cs</span>
              <span className="text-slate-500">:</span>
              <span className="text-violet-400">~</span>
              <span className="text-slate-500">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command (e.g., about, skills, projects, journey)..."
                className="flex-1 bg-transparent border-none outline-none text-cyan-300 font-mono text-xs sm:text-sm placeholder-slate-600"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => handleRunCommand(inputVal)}
                className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white cursor-pointer"
                title="Execute Command"
              >
                <CornerDownLeft className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>

          {/* Terminal Footer Status Bar */}
          <div className="px-4 py-2 bg-[#050711] border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">Shell Active • BIET Davangere CSE</span>
            </div>
            <span>Use ↑ / ↓ keys for command history</span>
          </div>
        </div>

      </div>
    </section>
  );
}
