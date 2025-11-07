import { Menu, MessageCircle, Video, Shield, LogIn } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">AdvisorLink</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#features" className="transition-colors hover:text-slate-900">Features</a>
          <a href="#how-it-works" className="transition-colors hover:text-slate-900">How it works</a>
          <a href="#pricing" className="transition-colors hover:text-slate-900">Pricing</a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#login" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <LogIn className="h-4 w-4" />
            Sign in
          </a>
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800">
            Get started
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200/60 bg-white p-4 md:hidden">
          <div className="grid gap-3">
            <a href="#features" className="text-slate-700">Features</a>
            <a href="#how-it-works" className="text-slate-700">How it works</a>
            <a href="#pricing" className="text-slate-700">Pricing</a>
            <div className="mt-2 flex gap-2">
              <a href="#login" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <LogIn className="h-4 w-4" />
                Sign in
              </a>
              <a href="#get-started" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-slate-800">
                Get started
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="hidden border-t border-slate-200/60 bg-gradient-to-r from-indigo-50 via-white to-violet-50 px-4 py-2 text-xs text-slate-600 md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6">
          <span className="inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-indigo-500" /> Real-time messaging
          </span>
          <span className="inline-flex items-center gap-2">
            <Video className="h-4 w-4 text-violet-500" /> Secure HD video calls
          </span>
        </div>
      </div>
    </header>
  );
}
