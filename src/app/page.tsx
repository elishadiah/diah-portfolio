import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { ProjectGrid } from "@/components/project-grid";
import { Reveal } from "@/components/reveal";
import { TechGrid } from "@/components/tech-grid";
import { experience } from "@/content/project-cards";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function Home() {
  const contacts = [
    site.email && { icon: "mail", label: "Email", text: site.email, href: `mailto:${site.email}` },
    site.location && { icon: "pin", label: "Location", text: site.location },
    site.linkedin && { icon: "linkedin", label: "LinkedIn", text: strip(site.linkedin), href: site.linkedin },
    site.github && { icon: "github", label: "GitHub", text: strip(site.github), href: site.github },
    site.contra && { icon: "briefcase", label: "Contra", text: strip(site.contra), href: site.contra },
  ].filter(Boolean) as { icon: IconName; label: string; text: string; href?: string }[];

  const contactHref = site.email ? `mailto:${site.email}` : site.contra || null;

  return (
    <>
      <Reveal />

      <section className="hero" id="home">
        <div className="wrap">
          <div>
            <div className="eyebrow load d1">{site.role}</div>
            <h1 className="load d2">
              Build <span>AI web apps</span> and automations
            </h1>
            <p className="lead load d3">{site.intro}</p>
            <div className="cta load d4">
              <a className="btn primary" href="#projects">
                View My Projects <Icon name="arrow" small />
              </a>
              <a className="btn" href="#contact">
                Get In Touch
              </a>
            </div>
            {site.available && (
              <div className="status load d4">
                <i />
                Available for freelance projects
              </div>
            )}
          </div>

          <div className="stage load d3" aria-hidden="true">
            <div className="laptop">
              <div className="lid">
                <div className="screen">
                  <div className="bar">
                    <b />
                    <b />
                    <b />
                  </div>
                  <CodeLine i={0}>
                    <span className="c-c">{"// match sellers with buyers"}</span>
                  </CodeLine>
                  <CodeLine i={1}>
                    <span className="c-k">const</span> matches = <span className="c-k">await</span>{" "}
                    <span className="c-f">aiMatch</span>(listing, {"{"}
                  </CodeLine>
                  <CodeLine i={2}>{"  industry, region, dealSize,"}</CodeLine>
                  <CodeLine i={3}>{"});"}</CodeLine>
                  <CodeLine i={4}>
                    <span className="c-k">await</span> <span className="c-f">notify</span>(matches,{" "}
                    <span className="c-s">&apos;new-match&apos;</span>);
                  </CodeLine>
                  <CodeLine i={5}>
                    <span className="c-k">return</span> <span className="c-f">report</span>(matches);{" "}
                    <span className="cursor" />
                  </CodeLine>
                </div>
              </div>
              <div className="base" />
            </div>
            <div className="chipcard cc1">
              <span className="dot">
                <Icon name="mic" small />
              </span>
              <span>
                AI voice agent<small>Retell AI intake</small>
              </span>
            </div>
            <div className="chipcard cc2">
              <span className="dot">
                <Icon name="flow" small />
              </span>
              <span>
                Make.com<small>Match alerts</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="block about" id="about">
        <div className="wrap">
          <div className="text reveal">
            <div className="eyebrow">About me</div>
            <h2 className="h2" style={{ marginTop: 8 }}>
              Full-Stack Developer Focused on Real Products
            </h2>
            <p>{site.about}</p>
            <div className="feats">
              <Feat icon="layout" title="Web Applications" sub="React, Next.js, Vue 3" />
              <Feat icon="phone" title="Mobile Apps" sub="iOS & Android, React Native" />
              <Feat icon="spark" title="AI & Automation" sub="OpenAI, Retell AI, Make.com" />
            </div>
          </div>
          <div className="portrait reveal">
            <div className="avatar">
              {site.photo ? (
                <Image src={site.photo} alt={site.name} fill sizes="220px" />
              ) : (
                <b>{site.shortName[0]}</b>
              )}
              <span className="tag">&lt;{site.shortName} /&gt;</span>
            </div>
            <div className="sign">
              Let&apos;s build
              <br />
              something great
              <br />
              together!<em>{site.shortName}</em>
            </div>
          </div>
        </div>
      </section>

      <section className="block alt" id="skills">
        <div className="wrap">
          <div className="head reveal">
            <div className="eyebrow">Tech stack</div>
            <h2 className="h2">Technologies I Work With</h2>
          </div>
          <TechGrid />
        </div>
      </section>

      <section className="block" id="projects">
        <div className="wrap">
          <div className="head reveal">
            <div className="eyebrow">Featured projects</div>
            <h2 className="h2">Some of My Recent Work</h2>
          </div>
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <section className="block alt" id="experience">
        <div className="wrap">
          <div className="head reveal">
            <div className="eyebrow">Experience</div>
            <h2 className="h2">What I&apos;ve Delivered</h2>
          </div>
          <div className="timeline">
            {experience.map((row) => (
              <div key={row.title} className="tl-row reveal">
                <span className="node" />
                <div>
                  <h3 className="h3">
                    {row.title}{" "}
                    <span>
                      ·{" "}
                      {row.projects.map((slug, i) => (
                        <span key={slug}>
                          {i > 0 && ", "}
                          <Link href={`/work/${slug}`}>{getProject(slug)?.name}</Link>
                        </span>
                      ))}
                    </span>
                  </h3>
                  <p className="when">{row.when}</p>
                </div>
                <ul>
                  {row.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block contact" id="contact">
        <div className="wrap">
          <div className="reveal">
            <div className="eyebrow">Get in touch</div>
            <h2 className="h2" style={{ marginTop: 8 }}>
              Let&apos;s Work Together
            </h2>
            <p>
              I&apos;m open to new freelance projects. Tell me what you&apos;re building, whether it&apos;s a new product,
              an AI feature, an automation or a mobile app.
            </p>
            {contactHref && (
              <div className="cta">
                <a
                  className="btn primary"
                  href={contactHref}
                  {...(site.email ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <Icon name="mail" small />
                  Contact Me
                </a>
              </div>
            )}
          </div>
          <ul className="clist reveal">
            {contacts.length > 0
              ? contacts.map((c) => (
                  <li key={c.label}>
                    <span className="ci">
                      <Icon name={c.icon} />
                    </span>
                    <span>
                      <small>{c.label}</small>
                      {c.href ? (
                        <a
                          href={c.href}
                          {...(c.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {c.text}
                        </a>
                      ) : (
                        <span>{c.text}</span>
                      )}
                    </span>
                  </li>
                ))
              : (
                  [
                    ["briefcase", "Freelance", "Web, mobile and AI projects"],
                    ["spark", "Focus", "AI web apps and automations"],
                    ["check", "Status", "Available for new work"],
                  ] as [IconName, string, string][]
                ).map(([icon, label, text]) => (
                  <li key={label}>
                    <span className="ci">
                      <Icon name={icon} />
                    </span>
                    <span>
                      <small>{label}</small>
                      {text}
                    </span>
                  </li>
                ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function CodeLine({ i, children }: { i: number; children: React.ReactNode }) {
  return (
    <div className="ln" style={{ "--i": i } as React.CSSProperties}>
      {children}
    </div>
  );
}

function Feat({ icon, title, sub }: { icon: IconName; title: string; sub: string }) {
  return (
    <div className="feat">
      <span className="fi">
        <Icon name={icon} />
      </span>
      <span>
        <b>{title}</b>
        <small>{sub}</small>
      </span>
    </div>
  );
}
