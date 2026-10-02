import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import { toast } from "sonner";
import PageIntro from "@/components/site/PageIntro";
import Reveal from "@/components/site/Reveal";
import SocialIcon from "@/components/site/SocialIcon";
import { services, site, socials } from "@/data/site";
import { cn } from "@/lib/utils";

const topics = [...services.map((s) => s.title), "Something else"];

const fieldClass =
  "w-full rounded-2xl border border-border bg-background/60 px-5 py-4 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus-visible:outline-none";

const Contact = () => {
  const [topic, setTopic] = useState(topics[0]);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please select the address manually");
    }
  };

  // No backend: compose the message in the visitor's own email app
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `${topic} enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast("Opening your email app…", { description: "Your message is ready to send." });
  };

  return (
    <>
      <PageIntro
        index="05"
        label="Contact"
        title={
          <>
            Let's make something <span className="text-gradient">together.</span>
          </>
        }
        lead="I'm always open to new opportunities and collaborations. Tell me about your project and I'll get back to you."
      />

      <section className="container pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 md:p-10">
              <fieldset>
                <legend className="eyebrow mb-4">I'm interested in</legend>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTopic(t)}
                      aria-pressed={topic === t}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                        topic === t
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow mb-2 block">Your name</span>
                  <input name="name" required autoComplete="name" placeholder="Jane Doe" className={fieldClass} />
                </label>
                <label className="block">
                  <span className="eyebrow mb-2 block">Email</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={fieldClass} />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="eyebrow mb-2 block">Project details</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="A few lines about what you'd like to build, timeline and goals…"
                  className={cn(fieldClass, "resize-y")}
                />
              </label>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">Opens your email app with the message ready to send.</p>
                <button type="submit" className="btn-primary">
                  Send message <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>

          <div className="space-y-10 lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4">Email me directly</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="break-all font-display text-2xl font-bold tracking-tight underline decoration-primary decoration-2 underline-offset-8 hover:text-primary md:text-3xl"
                >
                  {site.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-foreground/50"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="eyebrow mb-4">Find me online</p>
              <ul className="border-b border-border">
                {socials.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border-t border-border py-5 transition-colors hover:text-primary"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <SocialIcon name={s.key} />
                      </span>
                      <span className="flex-1 font-semibold">{s.label}</span>
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
