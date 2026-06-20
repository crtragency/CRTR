/* CRTR Website — WORK index page (filterable portfolio). */
const { Button, Badge, WorkCard } = window.CRTRDesignSystem_b33342;

const PROJECTS = [
  { tone: 'darkGrad', cat: 'Motion', year: '2025', title: 'Halftime — full reset', blurb: 'A 90-second brand campaign film + motion package for a sports-tech relaunch.', tall: true },
  { tone: 'red', cat: 'Graphic', year: '2025', title: 'Marrow Coffee', blurb: 'Identity system, packaging and a 14-SKU rollout that kept the regulars.' },
  { tone: 'ink', cat: 'Video', year: '2025', title: 'Sage podcast', blurb: 'Weekly long-form edit + shorts. Retention up 41% in one quarter.' },
  { tone: 'paper', cat: 'Web', year: '2024', title: 'Northwall — series A', blurb: '14-page marketing site, designed and built in four weeks for launch day.', tall: true },
  { tone: 'steel', cat: 'Motion', year: '2024', title: 'Orbital · launch loop', blurb: 'A looping product explainer and a kit of social cut-downs.' },
  { tone: 'gold', cat: 'Graphic', year: '2024', title: "Field guide '24", blurb: 'An 80-page printed field guide and its companion microsite.' },
  { tone: 'redGrad', cat: 'Web', year: '2024', title: 'Issue 03 — print + web', blurb: 'Editorial system spanning a printed annual and a responsive reader.' },
  { tone: 'ink', cat: 'Video', year: '2024', title: 'Lumen ad sprint', blurb: 'Six paid-social ad cuts a week, color-graded and captioned.' },
];
const CATS = ['All', 'Video', 'Motion', 'Web', 'Graphic'];

function WorkPage() {
  const [cat, setCat] = React.useState('All');
  const shown = cat === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
  return (
    <>
      <window.SiteNav active="work.html" />
      <section className="page-hero">
        <div className="kit-wrap">
          <span className="kit-tag">Selected work</span>
          <h1>The <span style={{ color: 'var(--red)' }}>shelf.</span></h1>
          <p className="lede">Twelve years of timelines, grids and launch days, distilled. Filter by craft — or read a full case study, including the bits that didn't work the first time.</p>
        </div>
      </section>

      <section className="kit-section">
        <div className="kit-wrap">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 36 }}>
            {CATS.map(c => (
              <button key={c} onClick={() => setCat(c)} style={{
                fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.06em',
                padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
                border: '1.5px solid var(--ink)',
                background: cat === c ? 'var(--ink)' : 'transparent',
                color: cat === c ? 'var(--paper)' : 'var(--ink)',
                transition: 'background .2s var(--ease-ui), color .2s var(--ease-ui)',
              }}>{c}</button>
            ))}
            <span style={{ marginLeft: 'auto', alignSelf: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>{shown.length} projects</span>
          </div>

          <div className="work-index">
            {shown.map((p, i) => (
              <div key={i}>
                <WorkCard tone={p.tone} meta={`${p.year} · ${p.cat}`} title={p.title} href="case-study.html" style={{ minHeight: p.tall ? 360 : 300 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '16px 4px 0', alignItems: 'flex-start' }}>
                  <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: '46ch' }}>{p.blurb}</p>
                  <Badge tone="paper">{p.cat}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <window.CtaBand />
      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<WorkPage />);
