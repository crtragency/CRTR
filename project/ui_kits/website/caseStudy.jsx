/* CRTR Website — CASE STUDY (project detail). Sample: "Halftime". */
const { Button, Badge, Tag, Card } = window.CRTRDesignSystem_b33342;

function MetaCell({ label, children }) {
  return (
    <div className="cell">
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--ink)' }}>{children}</div>
    </div>
  );
}

function PlayTile({ tone, label, style }) {
  return (
    <div className="media-tile" style={{ background: tone, ...style }}>
      <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.1em', color: '#fff', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', padding: '5px 9px', borderRadius: 6 }}>PLAY</div>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 56, height: 56, borderRadius: '50%', background: 'var(--red)', border: '1.5px solid #fff', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 18 }}>▶</div>
      <div style={{ position: 'absolute', left: 18, bottom: 16, fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,.85)' }}>{label}</div>
    </div>
  );
}

function CaseStudy() {
  return (
    <>
      <window.SiteNav active="work.html" />

      <section className="page-hero">
        <div className="kit-wrap">
          <a href="work.html" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)' }}>← Back to work</a>
          <div style={{ marginTop: 18 }}><span className="kit-tag">Brand film · Motion + edit · 2025</span></div>
          <h1 style={{ marginTop: 14 }}>Halftime —<br /><span style={{ color: 'var(--red)' }}>full reset.</span></h1>
          <p className="lede">A 90-second campaign film and motion package that relaunched a sports-tech brand at the exact moment it needed to look bigger than it was.</p>
        </div>
      </section>

      <section className="kit-section tight" style={{ paddingTop: 56 }}>
        <div className="kit-wrap">
          <div className="case-figure" style={{ background: 'linear-gradient(135deg, #0B0B0C 0%, #2a2a2d 100%)', marginBottom: 48 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(229,35,44,.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,.08), transparent 60%)' }}></div>
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 80, height: 80, borderRadius: '50%', background: 'var(--red)', border: '2px solid #fff', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 26, boxShadow: '0 8px 30px rgba(0,0,0,.4)' }}>▶</div>
            <div style={{ position: 'relative', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase' }}>01 · Hero film — 1:30</div>
          </div>

          <div className="case-meta" style={{ marginBottom: 56 }}>
            <MetaCell label="Client">Halftime Inc.</MetaCell>
            <MetaCell label="Services">Film · Motion · Edit</MetaCell>
            <MetaCell label="Year">2025</MetaCell>
            <MetaCell label="Timeline">4 weeks</MetaCell>
          </div>

          <div className="case-cols">
            <div>
              <span className="kit-tag">The brief</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '14px 0 16px' }}>Look like the leader before the round closes.</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Campaign film', 'Kinetic type', 'Sound design', 'Social cut-downs', 'Color'].map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink-2)' }}>Halftime was six weeks from a funding announcement with a product that demoed beautifully and a brand that didn't. They needed one piece of film that could anchor the raise, the site and the launch — and they needed it fast.</p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)' }}>We built the spot around a single idea — the reset — and let it dictate every cut, transition and type move. One Slack channel, one Loom every Wednesday, no surprise invoices. The grade leaned warm and high-contrast to match the new identity; the kinetic type carried the claims so the voiceover never had to over-explain.</p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--muted)' }}>Delivered two days early as a master film plus eleven platform-native cut-downs and a Lottie logo loop for the product.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kit-section tight" style={{ paddingTop: 0, borderBottom: 'none' }}>
        <div className="kit-wrap">
          <div className="media-grid" style={{ marginBottom: 18 }}>
            <PlayTile tone="var(--red)" label="Kinetic type system" />
            <PlayTile tone="var(--steel)" label="Product loop · Lottie" />
          </div>
          <div className="media-grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
            <PlayTile tone="linear-gradient(135deg, var(--red) 0%, #7a0a10 100%)" label="60s broadcast cut" />
            <PlayTile tone="var(--ink)" label="9:16 social" />
          </div>
        </div>
      </section>

      <section className="kit-section" style={{ background: 'var(--ink)' }}>
        <div className="kit-wrap" style={{ textAlign: 'center', maxWidth: 900, marginInline: 'auto' }}>
          <div style={{ color: 'var(--red)', fontSize: 16, letterSpacing: 3, marginBottom: 18 }}>★★★★★</div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3.2vw,40px)', lineHeight: 1.18, letterSpacing: '-0.02em', color: 'var(--paper)', textTransform: 'none' }}>
            "They beat the deadline and our internal team's morale went up, which I did <span style={{ color: 'var(--red)' }}>not</span> see coming."
          </p>
          <div style={{ marginTop: 24, fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--muted-2)' }}>Maya Okafor · VP Marketing, Northwall</div>
        </div>
      </section>

      <section className="kit-section tight">
        <div className="kit-wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)' }}>Next project</div>
            <a href="case-study.html" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,52px)', textTransform: 'uppercase', letterSpacing: '-0.03em', color: 'var(--ink)' }}>Marrow Coffee →</a>
          </div>
          <Button variant="primary" href="work.html">All work</Button>
        </div>
      </section>

      <window.CtaBand />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<CaseStudy />);
