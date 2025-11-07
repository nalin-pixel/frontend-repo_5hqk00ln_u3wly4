import { ShieldCheck, Users, Video, MessageSquareText, Calendar, Wallet } from "lucide-react";

export default function Features() {
  const items = [
    { icon: ShieldCheck, title: "Verified advisors", desc: "Every expert is background-checked and licensed." },
    { icon: MessageSquareText, title: "Rich messaging", desc: "Share files, voice notes, and keep all context in one place." },
    { icon: Video, title: "HD video calls", desc: "Join secure sessions with automatic meeting notes." },
    { icon: Calendar, title: "Smart scheduling", desc: "Sync your calendar and book instantly across time zones." },
    { icon: Users, title: "Role-based access", desc: "Tailored dashboards for clients and advisors." },
    { icon: Wallet, title: "Secure payments", desc: "Pay-as-you-go or subscriptions with invoices." },
  ];

  return (
    <section id="features" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Everything you need to invest with confidence</h2>
          <p className="mt-3 text-slate-600">Built for trust, speed, and clarity—so you can make informed decisions faster.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-slate-900/5 p-3 text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
