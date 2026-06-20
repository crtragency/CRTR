/* CRTR Website — HOME sections. Uses shared chrome (SectionHead, Stroke, Footer, ContactModal). */
const { Button, Badge, Card, ServiceTile, WorkCard, Marquee } = window.CRTRDesignSystem_b33342;
const HOME_LOGO = window.KIT_LOGO;
const SectionHead = window.SectionHead;
const Stroke = window.Stroke;

/* ---------------- HERO ---------------- */
function Hero({ onStart }) {
  return (
    <section style={{ borderBottom: '1.5px solid var(--ink)', overflow: 'hidden' }}>
      <div className="kit-wrap" style={{ position: 'relative', padding: '80px 0 0' }}>
        <Badge tone="paper" dot>A creator-led studio · est. 2021</Badge>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(56px,9vw,140px)', lineHeight: .92, letterSpacing: '-0.045em', textTransform: 'uppercase', margin: '22px 0 0' }}>
          We make<br />
          <span style={{ color: 'var(--red)' }}>brands</span> that<br />
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-sans)', fontWeight: 900 }}>refuse</span> to sit<br />
          <Stroke>still.</Stroke>
        </h1>

        <div className="hero-row">
          <p style={{ fontSize: 20, lineHeight: 1.45, color: 'var(--ink-2)', maxWidth: 520, fontWeight: 500 }}>
            CRTR. is a four-person creator studio shipping bold video, motion, web and graphic work for ambitious teams. No decks of decks — just the thing, made well, on time.
          </p>
          <div className="hero-meta">
            {[['120+', 'Projects shipped', true], ['38', 'Brands trust us', false], ['4.9★', 'Avg. client rating', true]].map(([n, l, em]) => (
              <div key={l} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1, letterSpacing: '-0.03em', color: em ? 'var(--red)' : 'var(--ink)' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', margin: '36px 0 80px' }}>
          <Button variant="primary" onClick={onStart}>Start a project</Button>
          <Button variant="ghost" href="work.html">See selected work</Button>
        </div>

        <a className="mascot" href="work.html" aria-hidden="true"><img src={HOME_LOGO} alt="" /></a>
      </div>
      <Marquee items={['Video editing', 'Motion design', 'Web development', 'Graphic design', 'Brand systems', 'Creative direction']} />
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const svc = [
    ['01', 'Video editing', 'Long-form, short-form, ads, podcasts, sizzle reels. We cut for rhythm and retention — not just to fill the timeline.', ['YouTube', 'Reels', 'Color', 'Sound']],
    ['02', 'Motion design', 'Logo animations, kinetic type, product explainers, broadcast packages. Frame-by-frame craft — never preset-y.', ['After Effects', '3D', 'Lottie', 'Rigging']],
    ['03', 'Web development', 'Marketing sites, landing pages, custom CMS, full e-commerce. Designed and built by the same people — no handoff hell.', ['Next.js', 'Webflow', 'Shopify', 'Figma']],
    ['04', 'Graphic design', 'Identity systems, packaging, social, print. We treat every grid like it\u2019s the last thing standing between you and your audience.', ['Identity', 'Packaging', 'Social', 'Print']],
  ];
  return (
    <section id="services" className="kit-section">
      <div className="kit-wrap">
        <SectionHead tag="Services 01" title={<>Four crafts.<br /><Stroke>One studio.</Stroke></>}
          lede="We work across the full surface of a brand — from the 6-second cut to the 300-page site. Pick the lane that fits, or hand us the whole thing." />
        <div className="svc-grid">
          {svc.map(([n, t, d, tags]) => <ServiceTile key={n} num={n} title={t} tags={tags}>{d}</ServiceTile>)}
        </div>
        <div style={{ marginTop: 28 }}><Button variant="ghost" href="services.html">All services in detail</Button></div>
      </div>
    </section>
  );
}

/* ---------------- WORK ---------------- */
function Work() {
  const items = [
    ['darkGrad', '2025 · Brand film · Motion + edit', 'Halftime — full reset', 'span 4', 'span 2'],
    ['red', '2025 · Identity', 'Marrow Coffee', 'span 2', 'span 1'],
    ['ink', '2025 · Edit', 'Sage podcast', 'span 2', 'span 1'],
    ['paper', '2024 · Web · 14 pages', 'Northwall — series A', 'span 3', 'span 2'],
    ['steel', '2024 · Motion', 'Orbital · launch loop', 'span 3', 'span 1'],
    ['gold', '2024 · Graphic', "Field guide '24", 'span 2', 'span 1'],
    ['redGrad', '2024 · Editorial', 'Issue 03 — print + web', 'span 4', 'span 1'],
  ];
  return (
    <section id="work" className="kit-section">
      <div className="kit-wrap">
        <SectionHead tag="Selected work 02" title={<>Recent <Stroke>drops.</Stroke></>}
          lede="A peek at the last six months. Full case studies, including the bits that didn't work the first time, on request." />
        <div className="work-grid">
          {items.map(([tone, meta, title, col, row], i) => (
            <WorkCard key={i} tone={tone} meta={meta} title={title} href="case-study.html" style={{ gridColumn: col, gridRow: row }} />
          ))}
        </div>
        <div style={{ marginTop: 28 }}><Button variant="ghost" href="work.html">See all work</Button></div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    ['01', 'Brief', 'A 60-minute call, then a 1-page brief back. If it doesn\u2019t make sense in a page, it doesn\u2019t make sense yet.'],
    ['02', 'Sketch', 'Two divergent directions, in low fidelity. We pick a winner together and kill the other before it gets pretty.'],
    ['03', 'Build', 'Heads-down craft. One Slack channel, one Loom every Wednesday, no surprise invoices, no scope creep.'],
    ['04', 'Ship', 'Final files, source access, a launch-day checklist, and a thirty-day window to come back for tweaks at no charge.'],
  ];
  return (
    <section id="process" className="kit-section" style={{ background: 'var(--ink)' }}>
      <div className="kit-wrap">
        <SectionHead onInk tag="How we work 03" title={<>Four weeks.<br /><Stroke ink={false}>No guesswork.</Stroke></>}
          lede="A small team and a tight loop. You'll know what's happening every Friday and where the budget sits in real time." />
        <div className="steps-grid">
          {steps.map(([n, t, d]) => (
            <div key={n} className="step">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--red)', letterSpacing: '.08em', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <span style={{ width: 24, height: 1, background: 'var(--red)' }}></span>Step {n}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 12px', color: 'var(--paper)' }}>{t}</h3>
              <p style={{ color: 'var(--muted-2)', fontSize: 14, lineHeight: 1.55 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const minis = [
    ['"They didn\u2019t try to redesign our brand from the inside out — they made it sharper without scaring our customers."', '— Reza A., founder · Marrow Coffee'],
    ['"Our YouTube retention is up 41% since they took over the cut. That\u2019s the whole testimonial."', '— Jenna L., creator · Sage Podcast'],
    ['"Asked for a logo. Got a logo, a packaging system, and an idea for our next product. Wild."', '— Owen B., COO · Orbital'],
  ];
  return (
    <section id="testimonials" className="kit-section">
      <div className="kit-wrap">
        <SectionHead tag="Words 04" title={<>Clients,<br /><Stroke>in their voice.</Stroke></>}
          lede="We have referenceable references. Email us — we'll connect you with any of these people." />
        <div className="testi-grid">
          <div>
            <div style={{ color: 'var(--red)', fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>★★★★★</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.4vw,40px)', lineHeight: 1.15, letterSpacing: '-0.02em', textTransform: 'none', color: 'var(--ink)' }}>
              "CRTR. shipped our launch film, the marketing site and the <span style={{ color: 'var(--red)' }}>whole identity rework</span> in six weeks. They beat the deadline and our internal team's morale went up, which I did not see coming."
            </p>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14, paddingTop: 24, borderTop: '1.5px solid var(--ink)' }}>
              <span style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--red)', border: '1.5px solid var(--ink)', display: 'grid', placeItems: 'center', color: '#fff', fontFamily: 'var(--font-display)', fontSize: 16 }}>M</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>Maya Okafor</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>VP Marketing · Northwall</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {minis.map(([q, who], i) => (
              <Card key={i}>
                <div style={{ color: 'var(--red)', fontSize: 14, letterSpacing: 2, marginBottom: 8 }}>★★★★★</div>
                <p style={{ fontSize: 15, lineHeight: 1.5, marginBottom: 14 }}>{q}</p>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)' }}>{who}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA (home, large) ---------------- */
function Cta({ onStart }) {
  return (
    <section id="contact" className="cta">
      <div className="cta-inner">
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,7.5vw,104px)', lineHeight: .92, letterSpacing: '-0.04em', textTransform: 'uppercase', margin: 0, color: '#fff' }}>
          Got a thing?<br /><Stroke ink={false}>Let's make it.</Stroke>
        </h2>
        <p style={{ fontSize: 20, margin: '24px auto 36px', maxWidth: 560, color: 'rgba(255,255,255,.92)' }}>
          We take on six projects a quarter. Q3 has two slots open. Tell us what you're working on — first reply in under a day.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="dark" onClick={onStart} style={{ borderColor: '#fff', boxShadow: '4px 4px 0 #fff' }}>Start a project</Button>
          <Button variant="ghost" href="mailto:hello@crtr.studio" style={{ borderColor: '#fff', color: '#fff' }}>hello@crtr.studio</Button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Services, Work, Process, Testimonials, Cta });
