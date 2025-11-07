import { LogIn, UserPlus } from "lucide-react";

export default function AuthCTA() {
  return (
    <section id="get-started" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Choose your role</h3>
            <p className="mt-2 text-slate-600">Create an account as a client looking for guidance or as an advisor offering expertise. You’ll get a tailored dashboard with the tools you need.</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="#login" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <LogIn className="h-4 w-4" />
                I’m a client
              </a>
              <a href="#login" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                <UserPlus className="h-4 w-4" />
                I’m an advisor
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h4 className="text-sm font-semibold text-slate-900">What happens next</h4>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-600">
              <li>Create an account and verify your email</li>
              <li>Complete a quick profile (risk, goals, availability)</li>
              <li>Start messaging and schedule a video call</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
