/* CRTR Website — shared chrome: nav config, SectionHead, Footer, ContactModal.
   Loaded before every page's section script. */
const { Button, IconButton, Badge, Card, BrandMark, NavBar, Input, Textarea } = window.CRTRDesignSystem_b33342;

const LOGO = (window.__resources && window.__resources.crtrLogo) || '../../assets/crtr-logo.jpg';

const NAV_LINKS = [
  { label: 'Work', href: 'work.html' },
  { label: 'Services', href: 'services.html' },
  { label: 'Studio', href: 'about.html' },
  { label: 'Contact', href: 'contact.html' },
];

/* Top navigation, wired for multi-page nav. `active` highlights current page. */
function SiteNav({ active }) {
  const links = NAV_LINKS.map(l => ({ ...l, label: l.href === active ? l.label : l.label }));
  return <NavBar logoSrc={LOGO} links={NAV_LINKS} cta="Booking — Q3" ctaHref="contact.html" />;
}

/* Two-column section head: tag + title left, lede right. */
function SectionHead({ tag, title, lede, onInk }) {
  return (
    <div className="section-head">
      <div>
        <span className="kit-tag">{tag}</span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,6vw,80px)', lineHeight: .95, letterSpacing: '-0.04em', textTransform: 'uppercase', margin: '14px 0 0', color: onInk ? 'var(--paper)' : 'var(--ink)' }}>{title}</h2>
      </div>
      <p style={{ fontSize: 18, color: onInk ? 'var(--muted-2)' : 'var(--muted)', maxWidth: 480, lineHeight: 1.55 }}>{lede}</p>
    </div>
  );
}

/* Outlined "stroke" headline word. */
function Stroke({ children, ink = true }) {
  return <span style={{ WebkitTextStroke: `1.5px var(--${ink ? 'ink' : 'paper'})`, color: 'transparent' }}>{children}</span>;
}

/* Red CTA band used at the foot of most pages. */
function CtaBand({ onStart }) {
  return (
    <section className="cta tight">
      <div className="cta-inner">
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px,7vw,96px)', lineHeight: .92, letterSpacing: '-0.04em', textTransform: 'uppercase', margin: 0, color: '#fff' }}>
          Got a thing?<br /><Stroke ink={false}>Let's make it.</Stroke>
        </h2>
        <p style={{ fontSize: 20, margin: '24px auto 36px', maxWidth: 560, color: 'rgba(255,255,255,.92)' }}>
          We take on six projects a quarter. Q3 has two slots open. First reply in under a day.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          {onStart
            ? <Button variant="dark" onClick={onStart} style={{ borderColor: '#fff', boxShadow: '4px 4px 0 #fff' }}>Start a project</Button>
            : <Button variant="dark" href="contact.html" style={{ borderColor: '#fff', boxShadow: '4px 4px 0 #fff' }}>Start a project</Button>}
          <Button variant="ghost" href="mailto:hello@crtr.studio" style={{ borderColor: '#fff', color: '#fff' }}>hello@crtr.studio</Button>
        </div>
      </div>
    </section>
  );
}

/* Global footer. */
function Footer() {
  const cols = [
    ['Studio', [['Work', 'work.html'], ['Services', 'services.html'], ['About', 'about.html'], ['Contact', 'contact.html']]],
    ['Company', [['About', 'about.html'], ['Careers', '#'], ['Press kit', '#'], ['Contact', 'contact.html']]],
    ['Get in touch', [['hello@crtr.studio', 'mailto:hello@crtr.studio'], ['+1 (415) 555-0148', '#'], ['Lisbon · NYC · Remote', '#']]],
  ];
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '64px 0 32px' }}>
      <div className="kit-wrap">
        <div className="foot-grid">
          <div>
            <a href="index.html" style={{ display: 'inline-block', marginBottom: 16 }}><BrandMark logoSrc={LOGO} onInk size={40} /></a>
            <p style={{ color: 'var(--muted-2)', fontSize: 14, lineHeight: 1.6, maxWidth: 300, marginBottom: 20 }}>A four-person creator studio working on video, motion, web and graphic design for ambitious teams worldwide.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['IG', 'X', 'YT', 'VM'].map(s => <IconButton key={s} size={36} aria-label={s} style={{ background: 'transparent', color: 'var(--paper)', borderColor: 'var(--ink-3)' }}>{s}</IconButton>)}
            </div>
          </div>
          {cols.map(([h, links]) => (
            <div key={h}>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--red)', margin: '0 0 16px' }}>{h}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(([l, href]) => <li key={l}><a href={href} style={{ fontSize: 14, color: 'var(--paper)' }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--ink-3)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
          <span>© 2026 CRTR. Creator Studio. All rights reserved.</span>
          <span>Made on a Tuesday.</span>
        </div>
      </div>
    </footer>
  );
}

/* Start-a-project modal (used on home; other pages link to contact.html). */
function ContactModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => { if (open) setSent(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(11,11,12,.55)', backdropFilter: 'blur(4px)', display: 'grid', placeItems: 'center', zIndex: 100, padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ width: 'min(520px,100%)', background: 'var(--paper)', border: '2px solid var(--ink)', borderRadius: 'var(--r-lg)', boxShadow: '8px 8px 0 var(--ink)', padding: 32 }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--red)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 12 }}>Brief received</div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 32, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '0 0 12px' }}>Talk soon.</h3>
            <p style={{ color: 'var(--muted)', marginBottom: 24 }}>First reply in under a day — usually a lot less.</p>
            <Button variant="primary" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 22 }}>
              <div>
                <span className="kit-tag">Start a project</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 30, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: '10px 0 0' }}>Tell us the thing.</h3>
              </div>
              <IconButton variant="solid" shape="square" aria-label="Close" onClick={onClose}>✕</IconButton>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <Input label="Name" placeholder="Jane Maker" />
              <Input label="Email" type="email" placeholder="you@studio.com" />
            </div>
            <div style={{ marginBottom: 20 }}>
              <Textarea label="What are you making?" rows={3} placeholder="A launch film, a new site, a full rebrand…" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
              <Button variant="primary" onClick={() => setSent(true)}>Send brief</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { KIT_LOGO: LOGO, NAV_LINKS, SiteNav, SectionHead, Stroke, CtaBand, Footer, ContactModal });
