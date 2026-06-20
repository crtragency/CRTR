/* CRTR Website — SERVICES detail page. */
const { Button, Badge, Tag, Card, ServiceTile } = window.CRTRDesignSystem_b33342;

const SERVICES = [
  {
    num: '01', title: 'Video editing', tone: 'var(--ink)',
    blurb: 'We cut for rhythm and retention. Long-form, short-form, ads, podcasts, sizzle reels — handed back graded, mixed and captioned.',
    deliver: ['YouTube long-form', 'Reels & TikTok', 'Paid-social ad cuts', 'Podcast video', 'Color grade', 'Sound mix'],
    from: '$3.5k / mo',
  },
  {
    num: '02', title: 'Motion design', tone: 'var(--red)',
    blurb: 'Frame-by-frame craft, never preset-y. Logo animations, kinetic type, product explainers and full broadcast packages.',
    deliver: ['Logo animation', 'Kinetic type', 'Product explainers', '3D & rigging', 'Lottie for product', 'Broadcast packages'],
    from: '$6k / project',
  },
  {
    num: '03', title: 'Web development', tone: 'var(--steel)',
    blurb: 'Designed and built by the same people — no handoff hell. Marketing sites, landing pages, custom CMS and full e-commerce.',
    deliver: ['Marketing sites', 'Landing pages', 'Custom CMS', 'Shopify & e-commerce', 'Next.js builds', 'Webflow'],
    from: '$12k / site',
  },
  {
    num: '04', title: 'Graphic design', tone: 'var(--ink)',
    blurb: 'Every grid like it\u2019s the last thing between you and your audience. Identity systems, packaging, social and print.',
    deliver: ['Identity systems', 'Packaging', 'Social templates', 'Print & editorial', 'Brand guidelines', 'Art direction'],
    from: '$8k / project',
  },
];

function ServiceBlock({ s, i }) {
  const flip = i % 2 === 1;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', padding: '56px 0', borderBottom: '1px solid var(--border-soft)' }}>
      <div style={{ order: flip ? 2 : 1 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--red)', marginBottom: 14 }}>/ {s.num}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,52px)', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: .98, margin: '0 0 18px' }}>{s.title}</h3>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', marginBottom: 22, maxWidth: '46ch' }}>{s.blurb}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {s.deliver.map(d => <Tag key={d}>{d}</Tag>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Button variant="primary" href="contact.html">Start a {s.title.split(' ')[0].toLowerCase()} project</Button>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted)' }}>From {s.from}</span>
        </div>
      </div>
      <div style={{ order: flip ? 1 : 2 }}>
        <div style={{ minHeight: 320, borderRadius: 18, border: '1.5px solid var(--ink)', background: s.tone, boxShadow: '6px 6px 0 var(--ink)', position: 'relative', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(135deg, transparent 0 26px, rgba(255,255,255,.05) 26px 27px)' }}></div>
          <span style={{ position: 'relative', fontFamily: 'var(--font-display)', fontSize: 120, color: 'rgba(255,255,255,.16)', letterSpacing: '-0.04em' }}>{s.num}</span>
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <>
      <window.SiteNav active="services.html" />

      <section className="page-hero">
        <div className="kit-wrap">
          <span className="kit-tag">Services</span>
          <h1>Four crafts.<br /><span style={{ WebkitTextStroke: '1.5px var(--ink)', color: 'transparent' }}>One studio.</span></h1>
          <p className="lede">Pick the lane that fits, or hand us the whole thing. Designed and built by the same four people — so nothing gets lost between disciplines.</p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" href="contact.html">Start a project</Button>
            <Button variant="ghost" href="work.html">See the work</Button>
          </div>
        </div>
      </section>

      <section className="kit-section" style={{ paddingTop: 40 }}>
        <div className="kit-wrap">
          {SERVICES.map((s, i) => <ServiceBlock key={s.num} s={s} i={i} />)}
        </div>
      </section>

      <section className="kit-section" style={{ background: 'var(--ink)' }}>
        <div className="kit-wrap">
          <window.SectionHead onInk tag="Engagements" title={<>How to <span style={{ WebkitTextStroke: '1.5px var(--paper)', color: 'transparent' }}>work with us.</span></>}
            lede="Three ways in. Most clients start with a project and move to a retainer once the loop is humming." />
          <div className="svc-grid">
            {[
              ['Project', 'A defined scope with a fixed price and a four-week loop. The most common way teams start.', 'Fixed bid'],
              ['Retainer', 'A monthly block of studio time across any of the four crafts. Cancel any time.', 'From $3.5k/mo'],
              ['Sprint', 'One intense week, heads-down, for a single launch moment. Limited slots.', 'From $9k/week'],
            ].map(([t, d, p]) => (
              <Card key={t} tone="ink" padding={32} style={{ borderColor: 'var(--ink-3)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--paper)', margin: '0 0 12px' }}>{t}</h3>
                <p style={{ color: 'var(--muted-2)', fontSize: 15, lineHeight: 1.6, marginBottom: 18 }}>{d}</p>
                <Badge tone="red">{p}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <window.CtaBand />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<ServicesPage />);
