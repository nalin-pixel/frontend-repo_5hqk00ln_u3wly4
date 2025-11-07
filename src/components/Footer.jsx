import { Shield, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">AdvisorLink</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-slate-900"><Mail className="h-4 w-4" /> Contact</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900"><Github className="h-4 w-4" /> GitHub</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} AdvisorLink. All rights reserved.</p>
      </div>
    </footer>
  );
}
