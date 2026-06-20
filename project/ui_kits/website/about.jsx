/* CRTR Website — ABOUT / STUDIO page. */
const { Button, Badge, Tag, Card, BrandMark } = window.CRTRDesignSystem_b33342;

const TEAM = [
  ['AR', 'Ana Reyes', 'Creative director', 'var(--red)'],
  ['JK', 'Jonas Kerr', 'Motion & 3D', 'var(--ink)'],
  ['MW', 'Mira Wong', 'Editor & color', 'var(--steel)'],
  ['DS', 'Deo Silva', 'Design & web', 'var(--ink)'],
];

const VALUES = [
  ['Small on purpose', 'Four people, no account managers. The people who pitch you are the people who do the work.'],
  ['Ship, then polish', 'We get something real in front of you fast and refine in the open — no month-long reveals.'],
  ['One craft, four lenses', 'Film, motion, web and graphic live in one room, so the idea survives every handoff.'],
];

function StudioPage() {
  return (
    <>
      <window.SiteNav active="about.html" />

      <section className="page-hero">
        <div className="kit-wrap">
          <span className="kit-tag">The studio</span>
          <h1>We're four people<br />who <span style={{ color: 'var(--red)' }}>refuse</span><br />to phone it in.</h1>
          <p className="lede">CRTR. is a creator-led studio in Lisbon, NYC and wherever the work is. We started in 2021 making cuts for friends; now we ship video, motion, web and graphic work for teams who'd rather move fast and look unmistakable.</p>
        </div>
      </section>

      <section className="kit-section tight">
        <div className="kit-wrap">
          <div className="stat-row">
            {[['120+', 'Projects shipped'], ['38', 'Brands trust us'], ['4.9★', 'Avg. client rating'], ['4', 'People, no fluff']].map(([n, l]) => (
              <div className="stat" key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,5vw,64px)', letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--ink)' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginTop: 10 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kit-section">
        <div className="kit-wrap">
          <div className="case-cols">
            <div>
              <div style={{ minHeight: 360, borderRadius: 18, border: '2px solid var(--ink)', background: 'var(--red)', boxShadow: '8px 8px 0 var(--ink)', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                <img src={window.KIT_LOGO} alt="CRTR mascot" style={{ width: '78%', borderRadius: 14 }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <span className="kit-tag">No decks of decks</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,52px)', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 1, margin: 0 }}>We make the thing, made well, on time.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)' }}>Most studios sell you a process. We sell you the output. You'll know what's happening every Friday, what we're shipping every other Wednesday, and where the budget sits in real time.</p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)' }}>That only works because we're small and we own every craft in-house. No subcontractor telephone, no "the dev team says no." If we pitch it, we can build it.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
                <Button variant="primary" href="contact.html">Work with us</Button>
                <Button variant="ghost" href="work.html">See the work</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kit-section" style={{ background: 'var(--ink)' }}>
        <div className="kit-wrap">
          <window.SectionHead onInk tag="The team" title={<>The whole <span style={{ WebkitTextStroke: '1.5px var(--paper)', color: 'transparent' }}>studio.</span></>}
            lede="No juniors hidden in the basement. These four are who you get." />
          <div className="team-grid">
            {TEAM.map(([init, name, role, tone]) => (
              <Card key={name} tone="ink" padding={0} style={{ borderColor: 'var(--ink-3)', overflow: 'hidden' }}>
                <div style={{ height: 160, background: tone, display: 'grid', placeItems: 'center', borderBottom: '1.5px solid var(--ink-3)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 44, color: '#fff', opacity: .9 }}>{init}</span>
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'var(--paper)' }}>{name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--muted-2)', marginTop: 6 }}>{role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="kit-section">
        <div className="kit-wrap">
          <window.SectionHead tag="How we think" title={<>Three <span style={{ WebkitTextStroke: '1.5px var(--ink)', color: 'transparent' }}>rules.</span></>}
            lede="We've turned down work that broke any of these. It's never once been the wrong call." />
          <div className="svc-grid">
            {VALUES.map(([t, d]) => (
              <Card key={t} padding={32}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 12px' }}>{t}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted)' }}>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="kit-section tight">
        <div className="kit-wrap">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--muted)', marginBottom: 20 }}>Trusted by</div>
          <div className="logo-strip">
            {['Northwall', 'Marrow', 'Orbital', 'Sage', 'Lumen'].map(n => <div className="logo-cell" key={n}>{n}</div>)}
          </div>
        </div>
      </section>

      <window.CtaBand />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<StudioPage />);
