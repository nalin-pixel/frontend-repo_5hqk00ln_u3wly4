import { Video, MessageSquare, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            Match with a vetted advisor, fast
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Invest smarter with one-on-one guidance
          </h1>
          <p className="mt-4 max-w-xl text-slate-600">
            Connect with licensed advisors, chat in real-time, and jump on secure video calls. Built for clarity, privacy, and better outcomes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800">
              Get started
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              <Video className="h-4 w-4" /> Watch demo
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white/70 p-3 backdrop-blur">
              <span className="font-semibold text-slate-900">KYC verified</span>
              <p className="text-xs">All advisors go through strict checks</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white/70 p-3 backdrop-blur">
              <span className="font-semibold text-slate-900">Encrypted chat</span>
              <p className="text-xs">Your data stays private</p>
            </div>
            <div className="col-span-2 rounded-lg border border-slate-200 bg-white/70 p-3 backdrop-blur sm:col-span-1">
              <span className="font-semibold text-slate-900">Instant scheduling</span>
              <p className="text-xs">Pick a time that works</p>
            </div>
          </div>
        </div>

        <div className="relative mt-16 grid gap-4 sm:mt-20 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-indigo-600/10 p-2 text-indigo-600">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Client</p>
                <p className="text-xs text-slate-600">Find an advisor and start chatting</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-violet-600/10 p-2 text-violet-600">
                <Video className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Advisor</p>
                <p className="text-xs text-slate-600">Receive leads and host video calls</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
