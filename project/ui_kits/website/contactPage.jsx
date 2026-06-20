/* CRTR Website — CONTACT page (working form + FAQ accordion). */
const { Button, Badge, IconButton, Card, Input, Textarea } = window.CRTRDesignSystem_b33342;

const NEEDS = ['Video', 'Motion', 'Web', 'Graphic', 'Everything'];
const BUDGETS = ['< $10k', '$10–25k', '$25–50k', '$50k+'];

const FAQS = [
  ['How fast can you start?', 'Usually within two weeks. We run six projects a quarter and keep one slot loose for fast-moving teams — ask about Q3.'],
  ['Do you work retainer or project?', 'Both. Most teams start with a fixed-scope project and move to a monthly retainer once the loop is humming. You can cancel a retainer any time.'],
  ['Who actually does the work?', 'The four of us. No account managers, no juniors hidden in the basement. The people who pitch you are the people who build it.'],
  ['What do you need from us to start?', 'A 60-minute call and whatever brand assets exist. We send a one-page brief back — if it doesn\u2019t make sense in a page, it doesn\u2019t make sense yet.'],
  ['Do you do rush work?', 'Yes — our one-week Sprint is built for a single launch moment. Slots are limited and priced accordingly.'],
];

function ChipSelect({ options, value, onChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map(o => (
        <button key={o} type="button" onClick={() => onChange(o)} style={{
          fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.04em', textTransform: 'uppercase',
          padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
          border: '1.5px solid var(--ink)',
          background: value === o ? 'var(--red)' : 'transparent',
          color: value === o ? '#fff' : 'var(--ink)',
          transition: 'background .15s var(--ease-ui), color .15s var(--ease-ui)',
        }}>{o}</button>
      ))}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)' }}>{label}</span>
      {children}
    </div>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={'faq-item' + (open ? ' open' : '')}>
      <div className="faq-q" onClick={onToggle}>
        <h4>{q}</h4>
        <span className="faq-plus">+</span>
      </div>
      <div className="faq-a">{a}</div>
    </div>
  );
}

function ContactPage() {
  const [need, setNeed] = React.useState('Everything');
  const [budget, setBudget] = React.useState('$10–25k');
  const [sent, setSent] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <>
      <window.SiteNav active="contact.html" />

      <section className="page-hero">
        <div className="kit-wrap">
          <span className="kit-tag">Contact</span>
          <h1>Got a thing?<br /><span style={{ color: 'var(--red)' }}>Let's make it.</span></h1>
          <p className="lede">Tell us what you're working on. First reply in under a day — usually a lot less. No forms-to-nowhere; a real person reads every one.</p>
        </div>
      </section>

      <section className="kit-section">
        <div className="kit-wrap">
          <div className="contact-grid">
            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div>
                <Badge tone="ink" dot>Booking — Q3 · 2 slots open</Badge>
              </div>
              {[
                ['Email', 'hello@crtr.studio', 'mailto:hello@crtr.studio'],
                ['Phone', '+1 (415) 555-0148', 'tel:+14155550148'],
                ['Studio', 'Lisbon · NYC · Remote', null],
              ].map(([l, v, href]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 8 }}>{l}</div>
                  {href
                    ? <a href={href} style={{ fontFamily: 'var(--font-display)', fontSize: 24, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--ink)' }}>{v}</a>
                    : <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--ink)' }}>{v}</div>}
                </div>
              ))}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: 12 }}>Follow</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['IG', 'X', 'YT', 'VM'].map(s => <IconButton key={s} aria-label={s}>{s}</IconButton>)}
                </div>
              </div>
            </div>

            {/* Form */}
            <Card interactive={false} padding={32} style={{ boxShadow: '6px 6px 0 var(--ink)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--red)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 12 }}>Brief received</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 34, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 12px' }}>Talk soon.</h3>
                  <p style={{ color: 'var(--muted)', marginBottom: 24 }}>We'll reply in under a day — usually a lot less.</p>
                  <Button variant="ghost" onClick={() => setSent(false)}>Send another</Button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div className="form-row">
                    <Input label="Name" placeholder="Jane Maker" />
                    <Input label="Email" type="email" placeholder="you@studio.com" />
                  </div>
                  <Field label="What do you need?"><ChipSelect options={NEEDS} value={need} onChange={setNeed} /></Field>
                  <Field label="Budget"><ChipSelect options={BUDGETS} value={budget} onChange={setBudget} /></Field>
                  <Textarea label="Tell us about the project" rows={4} placeholder="A launch film, a new site, a full rebrand…" />
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="primary" onClick={() => setSent(true)}>Send brief</Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <section className="kit-section">
        <div className="kit-wrap">
          <window.SectionHead tag="Questions" title={<>Before you <span style={{ WebkitTextStroke: '1.5px var(--ink)', color: 'transparent' }}>ask.</span></>}
            lede="The things teams email us about most. Anything else — just write." />
          <div className="faq">
            {FAQS.map(([q, a], i) => (
              <FaqItem key={i} q={q} a={a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      <window.Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage />);
