/* @ds-bundle: {"format":3,"namespace":"CRTRDesignSystem_b33342","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ServiceTile","sourcePath":"components/data-display/ServiceTile.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"BrandMark","sourcePath":"components/site/BrandMark.jsx"},{"name":"Marquee","sourcePath":"components/site/Marquee.jsx"},{"name":"NavBar","sourcePath":"components/site/NavBar.jsx"},{"name":"WorkCard","sourcePath":"components/site/WorkCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"443a96e0ee95","components/buttons/IconButton.jsx":"e13a22c84569","components/data-display/Badge.jsx":"1fa3d6287b7f","components/data-display/Card.jsx":"799f9053eeba","components/data-display/ServiceTile.jsx":"55739f26144f","components/data-display/Tag.jsx":"e2984f308488","components/forms/Input.jsx":"12eff28b801c","components/forms/Textarea.jsx":"d7dcf934b870","components/site/BrandMark.jsx":"40c838f61ce9","components/site/Marquee.jsx":"1bf80e5c0bd3","components/site/NavBar.jsx":"4d012d9b648b","components/site/WorkCard.jsx":"e3c07cde1e88","ui_kits/website/about.jsx":"7e2a7c65a75d","ui_kits/website/app.jsx":"557adc41aab8","ui_kits/website/caseStudy.jsx":"82532b3731dc","ui_kits/website/chrome.jsx":"f1af31a6876f","ui_kits/website/contactPage.jsx":"f58d6c907c37","ui_kits/website/sections.jsx":"ce1bcee4cf27","ui_kits/website/servicesPage.jsx":"3620c1bffce5","ui_kits/website/work.jsx":"91841c991990"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CRTRDesignSystem_b33342 = window.CRTRDesignSystem_b33342 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CRTR Button — the signature pill control with a hard offset ink shadow.
 * Variants: primary (red), dark (ink), ghost (outline). Lifts on hover.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight = true,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const sizes = {
    sm: {
      padding: '10px 16px',
      fontSize: 'var(--fs-sm)'
    },
    md: {
      padding: '14px 22px',
      fontSize: 'var(--fs-body-sm)'
    },
    lg: {
      padding: '18px 30px',
      fontSize: 'var(--fs-body)'
    }
  };
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    borderRadius: 'var(--r-pill)',
    border: 'var(--bw) solid var(--ink)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textTransform: 'none',
    transition: 'transform var(--dur-fast) var(--ease-snap), box-shadow var(--dur-fast) var(--ease-ui), background var(--dur-fast) var(--ease-ui), color var(--dur-fast) var(--ease-ui)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--red)',
      color: 'var(--white)',
      boxShadow: hover && !disabled ? 'var(--shadow-hard-lg)' : 'var(--shadow-hard)'
    },
    dark: {
      background: 'var(--ink)',
      color: 'var(--white)',
      boxShadow: hover && !disabled ? 'var(--shadow-hard-lg)' : 'var(--shadow-hard)'
    },
    ghost: {
      background: hover && !disabled ? 'var(--ink)' : 'transparent',
      color: hover && !disabled ? 'var(--paper)' : 'var(--ink)',
      boxShadow: 'none'
    }
  };
  const lift = !disabled && hover ? {
    transform: press ? 'translate(0,0)' : 'var(--lift)'
  } : {};
  const arrow = /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true",
    style: {
      transition: 'transform var(--dur-base) var(--ease-out)',
      transform: hover ? 'translateX(3px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h10M9 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...variants[variant],
      ...lift,
      ...style
    }
  }, rest), icon && !iconRight ? icon : null, children, icon && iconRight ? icon : iconRight && variant !== 'ghost' ? arrow : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CRTR IconButton — square/circular icon-only control. Used for socials,
 * close buttons, media controls, and the service-tile corner arrow.
 */
function IconButton({
  children,
  variant = 'outline',
  shape = 'circle',
  size = 46,
  disabled = false,
  href,
  onClick,
  'aria-label': ariaLabel,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const base = {
    width: size,
    height: size,
    display: 'inline-grid',
    placeItems: 'center',
    borderRadius: shape === 'circle' ? '50%' : 'var(--r-sm)',
    border: 'var(--bw) solid var(--ink)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform var(--dur-fast) var(--ease-snap), background var(--dur-fast) var(--ease-ui), color var(--dur-fast) var(--ease-ui), box-shadow var(--dur-fast) var(--ease-ui)'
  };
  const variants = {
    outline: {
      background: hover && !disabled ? 'var(--red)' : 'var(--paper-2)',
      color: hover && !disabled ? 'var(--white)' : 'var(--ink)',
      borderColor: hover && !disabled ? 'var(--red)' : 'var(--ink)'
    },
    solid: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      boxShadow: hover && !disabled ? 'var(--shadow-hard-sm)' : 'none',
      transform: hover && !disabled ? 'var(--lift)' : 'none'
    },
    red: {
      background: 'var(--red)',
      color: 'var(--white)',
      borderColor: 'var(--ink)',
      boxShadow: hover && !disabled ? 'var(--shadow-hard-sm)' : 'none',
      transform: hover && !disabled ? 'var(--lift)' : 'none'
    }
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": ariaLabel,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CRTR Badge — small pill for status, availability, eyebrows.
 * `dot` adds a status indicator; tone sets the color treatment.
 */
function Badge({
  children,
  tone = 'paper',
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    paper: {
      background: 'var(--paper-2)',
      color: 'var(--ink)',
      border: 'var(--bw) solid var(--ink)'
    },
    ink: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      border: 'var(--bw) solid var(--ink)'
    },
    red: {
      background: 'var(--red)',
      color: 'var(--white)',
      border: 'var(--bw) solid var(--ink)'
    },
    softred: {
      background: 'var(--red-soft)',
      color: 'var(--red-deep)',
      border: 'var(--bw) solid var(--red-deep)'
    }
  };
  const dotColors = {
    paper: 'var(--red)',
    ink: '#22c55e',
    red: 'var(--white)',
    softred: 'var(--red)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      fontWeight: 'var(--fw-medium)',
      padding: '6px 12px',
      borderRadius: 'var(--r-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: dotColors[tone],
      boxShadow: tone === 'ink' ? '0 0 0 3px rgba(34,197,94,.25)' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CRTR Card — bordered paper surface with the signature hard offset shadow
 * on hover. The brand's default container for grouped content & testimonials.
 */
function Card({
  children,
  interactive = true,
  padding = 24,
  tone = 'paper',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const tones = {
    paper: {
      background: 'var(--paper)',
      color: 'var(--ink)'
    },
    ink: {
      background: 'var(--ink)',
      color: 'var(--paper)'
    },
    red: {
      background: 'var(--red)',
      color: 'var(--white)'
    }
  };
  const hoverShadow = tone === 'paper' ? 'var(--shadow-hard-lg)' : 'var(--shadow-hard-inv)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-lg)',
      padding,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      boxShadow: interactive && hover ? hoverShadow : 'none',
      transform: interactive && hover ? 'var(--lift)' : 'none',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CRTR Tag — outlined mono chip used to list capabilities/skills.
 * Inherits currentColor for its border so it inverts cleanly on dark hover.
 */
function Tag({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '5px 10px',
      border: '1px solid currentColor',
      borderRadius: 'var(--r-pill)',
      opacity: 0.85,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ServiceTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CRTR ServiceTile — the numbered capability cell from the services grid.
 * Inverts to ink-on-paper on hover, with the corner arrow flipping red.
 */
function ServiceTile({
  num = '01',
  title,
  children,
  tags = [],
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '48px 1fr auto',
      gap: '20px',
      alignItems: 'start',
      padding: '36px',
      background: hover ? 'var(--ink)' : 'var(--paper)',
      color: hover ? 'var(--paper)' : 'var(--ink)',
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-lg)',
      transition: 'background var(--dur-slow) var(--ease-ui), color var(--dur-slow) var(--ease-ui)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-sm)',
      color: hover ? 'var(--red)' : 'var(--muted)',
      paddingTop: 6
    }
  }, "/ ", num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 1,
      letterSpacing: 'var(--ls-display)',
      textTransform: 'uppercase',
      margin: '0 0 12px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'inherit',
      opacity: 0.78,
      fontSize: 'var(--fs-body-sm)',
      margin: '0 0 18px',
      maxWidth: '38ch'
    }
  }, children), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      border: '1px solid currentColor',
      background: hover ? 'var(--red)' : 'var(--paper-2)',
      color: hover ? 'var(--white)' : 'var(--ink)',
      borderColor: hover ? 'var(--red)' : 'var(--ink)',
      transform: hover ? 'rotate(-45deg)' : 'none',
      transition: 'all var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12L12 4M6 4h6v6",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CRTR Input — structural text field. Ink border, paper fill, red focus ring.
 * Square-ish corners to match the brand's architectural feel.
 */
function Input({
  label,
  hint,
  error,
  type = 'text',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-2xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--ink)',
      background: 'var(--white)',
      border: `var(--bw) solid ${error ? 'var(--red)' : 'var(--ink)'}`,
      borderRadius: 'var(--r-sm)',
      padding: '12px 14px',
      outline: 'none',
      boxShadow: focus ? error ? '0 0 0 3px rgba(229,35,44,.30)' : 'var(--ring)' : 'none',
      transition: 'box-shadow var(--dur-fast) var(--ease-ui)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-2xs)',
      fontFamily: 'var(--font-mono)',
      color: error ? 'var(--red)' : 'var(--muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CRTR Textarea — multi-line companion to Input. Same structural styling.
 */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-2xs)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-eyebrow)',
      color: 'var(--muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ink)',
      background: 'var(--white)',
      border: `var(--bw) solid ${error ? 'var(--red)' : 'var(--ink)'}`,
      borderRadius: 'var(--r-sm)',
      padding: '12px 14px',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? 'var(--ring)' : 'none',
      transition: 'box-shadow var(--dur-fast) var(--ease-ui)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-2xs)',
      fontFamily: 'var(--font-mono)',
      color: error ? 'var(--red)' : 'var(--muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/site/BrandMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CRTR BrandMark — the lockup: red rounded-square mascot mark with a hard
 * ink shadow, plus the "CRTR." wordmark. Pass logoSrc to use the real mascot
 * image; omits to the "C." monogram fallback.
 */
function BrandMark({
  logoSrc,
  size = 38,
  showWord = true,
  word = 'CRTR.',
  onInk = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--r-sm)',
      background: 'var(--red)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.37,
      border: 'var(--bw) solid var(--ink)',
      boxShadow: onInk ? 'var(--shadow-hard-inv-sm)' : 'var(--shadow-hard-sm)',
      overflow: 'hidden'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      transform: 'translateY(-1px)'
    }
  }, "C.")), showWord && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size * 0.53,
      letterSpacing: '-0.02em',
      color: onInk ? 'var(--paper)' : 'var(--ink)'
    }
  }, word));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/site/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CRTR Marquee — the scrolling capability strip. Ink band, paper text,
 * red star separators. Pause-on-hover, reduced-motion safe.
 */
function Marquee({
  items = [],
  speed = 28,
  star = '★',
  style,
  ...rest
}) {
  const run = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '40px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, it), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)',
      fontSize: '0.7em'
    }
  }, star))));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: 'var(--bw) solid var(--ink)',
      borderBottom: 'var(--bw) solid var(--ink)',
      background: 'var(--ink)',
      color: 'var(--paper)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "crtr-marquee-track",
    style: {
      display: 'flex',
      gap: '40px',
      alignItems: 'center',
      padding: '18px 0',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      animation: `crtr-marq ${speed}s linear infinite`
    }
  }, run, run), /*#__PURE__*/React.createElement("style", null, `
        @keyframes crtr-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .crtr-marquee-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .crtr-marquee-track { animation: none !important; } }
      `));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/site/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CRTR NavBar — sticky top navigation. Paper band, ink underline, brand lockup,
 * link row, and an availability CTA pill on the right.
 */
function NavBar({
  logoSrc,
  links = [{
    label: 'Services',
    href: '#services'
  }, {
    label: 'Work',
    href: '#work'
  }, {
    label: 'Process',
    href: '#process'
  }, {
    label: 'Words',
    href: '#testimonials'
  }],
  cta = 'Booking — May',
  ctaHref = '#contact',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--paper)',
      borderBottom: 'var(--bw) solid var(--ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 'var(--nav-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "CRTR. Creator Studio"
  }, /*#__PURE__*/React.createElement(__ds_scope.BrandMark, {
    logoSrc: logoSrc,
    size: 38
  })), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Main",
    style: {
      display: 'flex',
      gap: '36px',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 'var(--fw-medium)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--red)',
    onMouseLeave: e => e.currentTarget.style.color = 'inherit'
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "ink",
    dot: true
  }, cta))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/site/WorkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CRTR WorkCard — portfolio tile for the showcase grid. Colored field,
 * mono meta + display title at the bottom-left, lifts with a hard shadow.
 */
function WorkCard({
  meta,
  title,
  tone = 'ink',
  href = '#',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const tones = {
    ink: {
      background: 'var(--ink)',
      color: '#fff'
    },
    red: {
      background: 'var(--red)',
      color: '#fff'
    },
    redGrad: {
      background: 'linear-gradient(135deg, var(--red) 0%, var(--red-darker) 100%)',
      color: '#fff'
    },
    darkGrad: {
      background: 'linear-gradient(135deg, #0B0B0C 0%, #2a2a2d 100%)',
      color: '#fff'
    },
    steel: {
      background: 'var(--steel)',
      color: '#fff'
    },
    gold: {
      background: 'var(--gold)',
      color: 'var(--ink)'
    },
    paper: {
      background: 'var(--paper-3)',
      color: 'var(--ink)'
    }
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      minHeight: 200,
      border: 'var(--bw) solid var(--ink)',
      borderRadius: 'var(--r-lg)',
      overflow: 'hidden',
      padding: 22,
      transition: 'transform var(--dur-slow) var(--ease-out), box-shadow var(--dur-slow) var(--ease-out)',
      boxShadow: hover ? 'var(--shadow-hard-lg)' : 'none',
      transform: hover ? 'var(--lift-lg)' : 'none',
      ...tones[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-2xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      opacity: 0.85
    }
  }, meta), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      marginTop: 4,
      lineHeight: 1
    }
  }, title));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/WorkCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/about.jsx
try { (() => {
/* CRTR Website — ABOUT / STUDIO page. */
const {
  Button,
  Badge,
  Tag,
  Card,
  BrandMark
} = window.CRTRDesignSystem_b33342;
const TEAM = [['AR', 'Ana Reyes', 'Creative director', 'var(--red)'], ['JK', 'Jonas Kerr', 'Motion & 3D', 'var(--ink)'], ['MW', 'Mira Wong', 'Editor & color', 'var(--steel)'], ['DS', 'Deo Silva', 'Design & web', 'var(--ink)']];
const VALUES = [['Small on purpose', 'Four people, no account managers. The people who pitch you are the people who do the work.'], ['Ship, then polish', 'We get something real in front of you fast and refine in the open — no month-long reveals.'], ['One craft, four lenses', 'Film, motion, web and graphic live in one room, so the idea survives every handoff.']];
function StudioPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SiteNav, {
    active: "about.html"
  }), /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, "The studio"), /*#__PURE__*/React.createElement("h1", null, "We're four people", /*#__PURE__*/React.createElement("br", null), "who ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "refuse"), /*#__PURE__*/React.createElement("br", null), "to phone it in."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "CRTR. is a creator-led studio in Lisbon, NYC and wherever the work is. We started in 2021 making cuts for friends; now we ship video, motion, web and graphic work for teams who'd rather move fast and look unmistakable."))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, [['120+', 'Projects shipped'], ['38', 'Brands trust us'], ['4.9★', 'Avg. client rating'], ['4', 'People, no fluff']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(40px,5vw,64px)',
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: 'var(--ink)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--muted)',
      marginTop: 10
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 360,
      borderRadius: 18,
      border: '2px solid var(--ink)',
      background: 'var(--red)',
      boxShadow: '8px 8px 0 var(--ink)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.KIT_LOGO,
    alt: "CRTR mascot",
    style: {
      width: '78%',
      borderRadius: 14
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, "No decks of decks"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(30px,4vw,52px)',
      textTransform: 'uppercase',
      letterSpacing: '-0.03em',
      lineHeight: 1,
      margin: 0
    }
  }, "We make the thing, made well, on time."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, "Most studios sell you a process. We sell you the output. You'll know what's happening every Friday, what we're shipping every other Wednesday, and where the budget sits in real time."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--muted)'
    }
  }, "That only works because we're small and we own every craft in-house. No subcontractor telephone, no \"the dev team says no.\" If we pitch it, we can build it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "contact.html"
  }, "Work with us"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "work.html"
  }, "See the work")))))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section",
    style: {
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    onInk: true,
    tag: "The team",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The whole ", /*#__PURE__*/React.createElement("span", {
      style: {
        WebkitTextStroke: '1.5px var(--paper)',
        color: 'transparent'
      }
    }, "studio.")),
    lede: "No juniors hidden in the basement. These four are who you get."
  }), /*#__PURE__*/React.createElement("div", {
    className: "team-grid"
  }, TEAM.map(([init, name, role, tone]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    tone: "ink",
    padding: 0,
    style: {
      borderColor: 'var(--ink-3)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160,
      background: tone,
      display: 'grid',
      placeItems: 'center',
      borderBottom: '1.5px solid var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      color: '#fff',
      opacity: .9
    }
  }, init)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      color: 'var(--paper)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--muted-2)',
      marginTop: 6
    }
  }, role))))))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    tag: "How we think",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Three ", /*#__PURE__*/React.createElement("span", {
      style: {
        WebkitTextStroke: '1.5px var(--ink)',
        color: 'transparent'
      }
    }, "rules.")),
    lede: "We've turned down work that broke any of these. It's never once been the wrong call."
  }), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, VALUES.map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: 32
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: '0 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--muted)'
    }
  }, d)))))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--muted)',
      marginBottom: 20
    }
  }, "Trusted by"), /*#__PURE__*/React.createElement("div", {
    className: "logo-strip"
  }, ['Northwall', 'Marrow', 'Orbital', 'Sage', 'Lumen'].map(n => /*#__PURE__*/React.createElement("div", {
    className: "logo-cell",
    key: n
  }, n))))), /*#__PURE__*/React.createElement(window.CtaBand, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(StudioPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* CRTR Website — HOME app shell. */
function App() {
  const [modal, setModal] = React.useState(false);
  const open = () => setModal(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SiteNav, {
    active: "index.html"
  }), /*#__PURE__*/React.createElement(window.Hero, {
    onStart: open
  }), /*#__PURE__*/React.createElement(window.Services, null), /*#__PURE__*/React.createElement(window.Work, null), /*#__PURE__*/React.createElement(window.Process, null), /*#__PURE__*/React.createElement(window.Testimonials, null), /*#__PURE__*/React.createElement(window.Cta, {
    onStart: open
  }), /*#__PURE__*/React.createElement(window.Footer, null), /*#__PURE__*/React.createElement(window.ContactModal, {
    open: modal,
    onClose: () => setModal(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/caseStudy.jsx
try { (() => {
/* CRTR Website — CASE STUDY (project detail). Sample: "Halftime". */
const {
  Button,
  Badge,
  Tag,
  Card
} = window.CRTRDesignSystem_b33342;
function MetaCell({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cell"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--muted)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, children));
}
function PlayTile({
  tone,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "media-tile",
    style: {
      background: tone,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      color: '#fff',
      background: 'rgba(255,255,255,.12)',
      border: '1px solid rgba(255,255,255,.25)',
      padding: '5px 9px',
      borderRadius: 6
    }
  }, "PLAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--red)',
      border: '1.5px solid #fff',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontSize: 18
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.85)'
    }
  }, label));
}
function CaseStudy() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SiteNav, {
    active: "work.html"
  }), /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("a", {
    href: "work.html",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--muted)'
    }
  }, "\u2190 Back to work"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, "Brand film \xB7 Motion + edit \xB7 2025")), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: 14
    }
  }, "Halftime \u2014", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "full reset.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "A 90-second campaign film and motion package that relaunched a sports-tech brand at the exact moment it needed to look bigger than it was."))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section tight",
    style: {
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-figure",
    style: {
      background: 'linear-gradient(135deg, #0B0B0C 0%, #2a2a2d 100%)',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 30% 30%, rgba(229,35,44,.4), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,.08), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)',
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: 'var(--red)',
      border: '2px solid #fff',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontSize: 26,
      boxShadow: '0 8px 30px rgba(0,0,0,.4)'
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase'
    }
  }, "01 \xB7 Hero film \u2014 1:30")), /*#__PURE__*/React.createElement("div", {
    className: "case-meta",
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(MetaCell, {
    label: "Client"
  }, "Halftime Inc."), /*#__PURE__*/React.createElement(MetaCell, {
    label: "Services"
  }, "Film \xB7 Motion \xB7 Edit"), /*#__PURE__*/React.createElement(MetaCell, {
    label: "Year"
  }, "2025"), /*#__PURE__*/React.createElement(MetaCell, {
    label: "Timeline"
  }, "4 weeks")), /*#__PURE__*/React.createElement("div", {
    className: "case-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, "The brief"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: '14px 0 16px'
    }
  }, "Look like the leader before the round closes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, ['Campaign film', 'Kinetic type', 'Sound design', 'Social cut-downs', 'Color'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, "Halftime was six weeks from a funding announcement with a product that demoed beautifully and a brand that didn't. They needed one piece of film that could anchor the raise, the site and the launch \u2014 and they needed it fast."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--muted)'
    }
  }, "We built the spot around a single idea \u2014 the reset \u2014 and let it dictate every cut, transition and type move. One Slack channel, one Loom every Wednesday, no surprise invoices. The grade leaned warm and high-contrast to match the new identity; the kinetic type carried the claims so the voiceover never had to over-explain."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--muted)'
    }
  }, "Delivered two days early as a master film plus eleven platform-native cut-downs and a Lottie logo loop for the product."))))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section tight",
    style: {
      paddingTop: 0,
      borderBottom: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "media-grid",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(PlayTile, {
    tone: "var(--red)",
    label: "Kinetic type system"
  }), /*#__PURE__*/React.createElement(PlayTile, {
    tone: "var(--steel)",
    label: "Product loop \xB7 Lottie"
  })), /*#__PURE__*/React.createElement("div", {
    className: "media-grid",
    style: {
      gridTemplateColumns: '2fr 1fr'
    }
  }, /*#__PURE__*/React.createElement(PlayTile, {
    tone: "linear-gradient(135deg, var(--red) 0%, #7a0a10 100%)",
    label: "60s broadcast cut"
  }), /*#__PURE__*/React.createElement(PlayTile, {
    tone: "var(--ink)",
    label: "9:16 social"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section",
    style: {
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      textAlign: 'center',
      maxWidth: 900,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--red)',
      fontSize: 16,
      letterSpacing: 3,
      marginBottom: 18
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(26px,3.2vw,40px)',
      lineHeight: 1.18,
      letterSpacing: '-0.02em',
      color: 'var(--paper)',
      textTransform: 'none'
    }
  }, "\"They beat the deadline and our internal team's morale went up, which I did ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "not"), " see coming.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--muted-2)'
    }
  }, "Maya Okafor \xB7 VP Marketing, Northwall"))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--muted)'
    }
  }, "Next project"), /*#__PURE__*/React.createElement("a", {
    href: "case-study.html",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px,4vw,52px)',
      textTransform: 'uppercase',
      letterSpacing: '-0.03em',
      color: 'var(--ink)'
    }
  }, "Marrow Coffee \u2192")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "work.html"
  }, "All work"))), /*#__PURE__*/React.createElement(window.CtaBand, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(CaseStudy, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/caseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
/* CRTR Website — shared chrome: nav config, SectionHead, Footer, ContactModal.
   Loaded before every page's section script. */
const {
  Button,
  IconButton,
  Badge,
  Card,
  BrandMark,
  NavBar,
  Input,
  Textarea
} = window.CRTRDesignSystem_b33342;
const LOGO = window.__resources && window.__resources.crtrLogo || '../../assets/crtr-logo.jpg';
const NAV_LINKS = [{
  label: 'Work',
  href: 'work.html'
}, {
  label: 'Services',
  href: 'services.html'
}, {
  label: 'Studio',
  href: 'about.html'
}, {
  label: 'Contact',
  href: 'contact.html'
}];

/* Top navigation, wired for multi-page nav. `active` highlights current page. */
function SiteNav({
  active
}) {
  const links = NAV_LINKS.map(l => ({
    ...l,
    label: l.href === active ? l.label : l.label
  }));
  return /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: LOGO,
    links: NAV_LINKS,
    cta: "Booking \u2014 Q3",
    ctaHref: "contact.html"
  });
}

/* Two-column section head: tag + title left, lede right. */
function SectionHead({
  tag,
  title,
  lede,
  onInk
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(40px,6vw,80px)',
      lineHeight: .95,
      letterSpacing: '-0.04em',
      textTransform: 'uppercase',
      margin: '14px 0 0',
      color: onInk ? 'var(--paper)' : 'var(--ink)'
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: onInk ? 'var(--muted-2)' : 'var(--muted)',
      maxWidth: 480,
      lineHeight: 1.55
    }
  }, lede));
}

/* Outlined "stroke" headline word. */
function Stroke({
  children,
  ink = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      WebkitTextStroke: `1.5px var(--${ink ? 'ink' : 'paper'})`,
      color: 'transparent'
    }
  }, children);
}

/* Red CTA band used at the foot of most pages. */
function CtaBand({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-inner"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(44px,7vw,96px)',
      lineHeight: .92,
      letterSpacing: '-0.04em',
      textTransform: 'uppercase',
      margin: 0,
      color: '#fff'
    }
  }, "Got a thing?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Stroke, {
    ink: false
  }, "Let's make it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      margin: '24px auto 36px',
      maxWidth: 560,
      color: 'rgba(255,255,255,.92)'
    }
  }, "We take on six projects a quarter. Q3 has two slots open. First reply in under a day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, onStart ? /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: onStart,
    style: {
      borderColor: '#fff',
      boxShadow: '4px 4px 0 #fff'
    }
  }, "Start a project") : /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    href: "contact.html",
    style: {
      borderColor: '#fff',
      boxShadow: '4px 4px 0 #fff'
    }
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "mailto:hello@crtr.studio",
    style: {
      borderColor: '#fff',
      color: '#fff'
    }
  }, "hello@crtr.studio"))));
}

/* Global footer. */
function Footer() {
  const cols = [['Studio', [['Work', 'work.html'], ['Services', 'services.html'], ['About', 'about.html'], ['Contact', 'contact.html']]], ['Company', [['About', 'about.html'], ['Careers', '#'], ['Press kit', '#'], ['Contact', 'contact.html']]], ['Get in touch', [['hello@crtr.studio', 'mailto:hello@crtr.studio'], ['+1 (415) 555-0148', '#'], ['Lisbon · NYC · Remote', '#']]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--paper)',
      padding: '64px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: 'inline-block',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    logoSrc: LOGO,
    onInk: true,
    size: 40
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 300,
      marginBottom: 20
    }
  }, "A four-person creator studio working on video, motion, web and graphic design for ambitious teams worldwide."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['IG', 'X', 'YT', 'VM'].map(s => /*#__PURE__*/React.createElement(IconButton, {
    key: s,
    size: 36,
    "aria-label": s,
    style: {
      background: 'transparent',
      color: 'var(--paper)',
      borderColor: 'var(--ink-3)'
    }
  }, s)))), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'var(--red)',
      margin: '0 0 16px'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, links.map(([l, href]) => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontSize: 14,
      color: 'var(--paper)'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink-3)',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 CRTR. Creator Studio. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Made on a Tuesday."))));
}

/* Start-a-project modal (used on home; other pages link to contact.html). */
function ContactModal({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(11,11,12,.55)',
      backdropFilter: 'blur(4px)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 100,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(520px,100%)',
      background: 'var(--paper)',
      border: '2px solid var(--ink)',
      borderRadius: 'var(--r-lg)',
      boxShadow: '8px 8px 0 var(--ink)',
      padding: 32
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--red)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Brief received"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: '0 0 12px'
    }
  }, "Talk soon."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      marginBottom: 24
    }
  }, "First reply in under a day \u2014 usually a lot less."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "Close")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, "Start a project"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: '10px 0 0'
    }
  }, "Tell us the thing.")), /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    shape: "square",
    "aria-label": "Close",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Maker"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "What are you making?",
    rows: 3,
    placeholder: "A launch film, a new site, a full rebrand\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true)
  }, "Send brief")))));
}
Object.assign(window, {
  KIT_LOGO: LOGO,
  NAV_LINKS,
  SiteNav,
  SectionHead,
  Stroke,
  CtaBand,
  Footer,
  ContactModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/contactPage.jsx
try { (() => {
/* CRTR Website — CONTACT page (working form + FAQ accordion). */
const {
  Button,
  Badge,
  IconButton,
  Card,
  Input,
  Textarea
} = window.CRTRDesignSystem_b33342;
const NEEDS = ['Video', 'Motion', 'Web', 'Graphic', 'Everything'];
const BUDGETS = ['< $10k', '$10–25k', '$25–50k', '$50k+'];
const FAQS = [['How fast can you start?', 'Usually within two weeks. We run six projects a quarter and keep one slot loose for fast-moving teams — ask about Q3.'], ['Do you work retainer or project?', 'Both. Most teams start with a fixed-scope project and move to a monthly retainer once the loop is humming. You can cancel a retainer any time.'], ['Who actually does the work?', 'The four of us. No account managers, no juniors hidden in the basement. The people who pitch you are the people who build it.'], ['What do you need from us to start?', 'A 60-minute call and whatever brand assets exist. We send a one-page brief back — if it doesn\u2019t make sense in a page, it doesn\u2019t make sense yet.'], ['Do you do rush work?', 'Yes — our one-week Sprint is built for a single launch moment. Slots are limited and priced accordingly.']];
function ChipSelect({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    type: "button",
    onClick: () => onChange(o),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      padding: '8px 14px',
      borderRadius: 999,
      cursor: 'pointer',
      border: '1.5px solid var(--ink)',
      background: value === o ? 'var(--red)' : 'transparent',
      color: value === o ? '#fff' : 'var(--ink)',
      transition: 'background .15s var(--ease-ui), color .15s var(--ease-ui)'
    }
  }, o)));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--muted)'
    }
  }, label), children);
}
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'faq-item' + (open ? ' open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-q",
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("h4", null, q), /*#__PURE__*/React.createElement("span", {
    className: "faq-plus"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "faq-a"
  }, a));
}
function ContactPage() {
  const [need, setNeed] = React.useState('Everything');
  const [budget, setBudget] = React.useState('$10–25k');
  const [sent, setSent] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SiteNav, {
    active: "contact.html"
  }), /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, "Contact"), /*#__PURE__*/React.createElement("h1", null, "Got a thing?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "Let's make it.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Tell us what you're working on. First reply in under a day \u2014 usually a lot less. No forms-to-nowhere; a real person reads every one."))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "ink",
    dot: true
  }, "Booking \u2014 Q3 \xB7 2 slots open")), [['Email', 'hello@crtr.studio', 'mailto:hello@crtr.studio'], ['Phone', '+1 (415) 555-0148', 'tel:+14155550148'], ['Studio', 'Lisbon · NYC · Remote', null]].map(([l, v, href]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--muted)',
      marginBottom: 8
    }
  }, l), href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, v) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--ink)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--muted)',
      marginBottom: 12
    }
  }, "Follow"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['IG', 'X', 'YT', 'VM'].map(s => /*#__PURE__*/React.createElement(IconButton, {
    key: s,
    "aria-label": s
  }, s))))), /*#__PURE__*/React.createElement(Card, {
    interactive: false,
    padding: 32,
    style: {
      boxShadow: '6px 6px 0 var(--ink)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--red)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      marginBottom: 12
    }
  }, "Brief received"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      margin: '0 0 12px'
    }
  }, "Talk soon."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      marginBottom: 24
    }
  }, "We'll reply in under a day \u2014 usually a lot less."), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Maker"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What do you need?"
  }, /*#__PURE__*/React.createElement(ChipSelect, {
    options: NEEDS,
    value: need,
    onChange: setNeed
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Budget"
  }, /*#__PURE__*/React.createElement(ChipSelect, {
    options: BUDGETS,
    value: budget,
    onChange: setBudget
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Tell us about the project",
    rows: 4,
    placeholder: "A launch film, a new site, a full rebrand\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSent(true)
  }, "Send brief"))))))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    tag: "Questions",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Before you ", /*#__PURE__*/React.createElement("span", {
      style: {
        WebkitTextStroke: '1.5px var(--ink)',
        color: 'transparent'
      }
    }, "ask.")),
    lede: "The things teams email us about most. Anything else \u2014 just write."
  }), /*#__PURE__*/React.createElement("div", {
    className: "faq"
  }, FAQS.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    q: q,
    a: a,
    open: openFaq === i,
    onToggle: () => setOpenFaq(openFaq === i ? -1 : i)
  }))))), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ContactPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/contactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* CRTR Website — HOME sections. Uses shared chrome (SectionHead, Stroke, Footer, ContactModal). */
const {
  Button,
  Badge,
  Card,
  ServiceTile,
  WorkCard,
  Marquee
} = window.CRTRDesignSystem_b33342;
const HOME_LOGO = window.KIT_LOGO;
const SectionHead = window.SectionHead;
const Stroke = window.Stroke;

/* ---------------- HERO ---------------- */
function Hero({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1.5px solid var(--ink)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap",
    style: {
      position: 'relative',
      padding: '80px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "paper",
    dot: true
  }, "A creator-led studio \xB7 est. 2021"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(56px,9vw,140px)',
      lineHeight: .92,
      letterSpacing: '-0.045em',
      textTransform: 'uppercase',
      margin: '22px 0 0'
    }
  }, "We make", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "brands"), " that", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      fontFamily: 'var(--font-sans)',
      fontWeight: 900
    }
  }, "refuse"), " to sit", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Stroke, null, "still.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-row"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.45,
      color: 'var(--ink-2)',
      maxWidth: 520,
      fontWeight: 500
    }
  }, "CRTR. is a four-person creator studio shipping bold video, motion, web and graphic work for ambitious teams. No decks of decks \u2014 just the thing, made well, on time."), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, [['120+', 'Projects shipped', true], ['38', 'Brands trust us', false], ['4.9★', 'Avg. client rating', true]].map(([n, l, em]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 48,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: em ? 'var(--red)' : 'var(--ink)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--muted)',
      marginTop: 6
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      margin: '36px 0 80px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onStart
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "work.html"
  }, "See selected work")), /*#__PURE__*/React.createElement("a", {
    className: "mascot",
    href: "work.html",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: HOME_LOGO,
    alt: ""
  }))), /*#__PURE__*/React.createElement(Marquee, {
    items: ['Video editing', 'Motion design', 'Web development', 'Graphic design', 'Brand systems', 'Creative direction']
  }));
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const svc = [['01', 'Video editing', 'Long-form, short-form, ads, podcasts, sizzle reels. We cut for rhythm and retention — not just to fill the timeline.', ['YouTube', 'Reels', 'Color', 'Sound']], ['02', 'Motion design', 'Logo animations, kinetic type, product explainers, broadcast packages. Frame-by-frame craft — never preset-y.', ['After Effects', '3D', 'Lottie', 'Rigging']], ['03', 'Web development', 'Marketing sites, landing pages, custom CMS, full e-commerce. Designed and built by the same people — no handoff hell.', ['Next.js', 'Webflow', 'Shopify', 'Figma']], ['04', 'Graphic design', 'Identity systems, packaging, social, print. We treat every grid like it\u2019s the last thing standing between you and your audience.', ['Identity', 'Packaging', 'Social', 'Print']]];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "kit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    tag: "Services 01",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Four crafts.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Stroke, null, "One studio.")),
    lede: "We work across the full surface of a brand \u2014 from the 6-second cut to the 300-page site. Pick the lane that fits, or hand us the whole thing."
  }), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, svc.map(([n, t, d, tags]) => /*#__PURE__*/React.createElement(ServiceTile, {
    key: n,
    num: n,
    title: t,
    tags: tags
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "services.html"
  }, "All services in detail"))));
}

/* ---------------- WORK ---------------- */
function Work() {
  const items = [['darkGrad', '2025 · Brand film · Motion + edit', 'Halftime — full reset', 'span 4', 'span 2'], ['red', '2025 · Identity', 'Marrow Coffee', 'span 2', 'span 1'], ['ink', '2025 · Edit', 'Sage podcast', 'span 2', 'span 1'], ['paper', '2024 · Web · 14 pages', 'Northwall — series A', 'span 3', 'span 2'], ['steel', '2024 · Motion', 'Orbital · launch loop', 'span 3', 'span 1'], ['gold', '2024 · Graphic', "Field guide '24", 'span 2', 'span 1'], ['redGrad', '2024 · Editorial', 'Issue 03 — print + web', 'span 4', 'span 1']];
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    className: "kit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    tag: "Selected work 02",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Recent ", /*#__PURE__*/React.createElement(Stroke, null, "drops.")),
    lede: "A peek at the last six months. Full case studies, including the bits that didn't work the first time, on request."
  }), /*#__PURE__*/React.createElement("div", {
    className: "work-grid"
  }, items.map(([tone, meta, title, col, row], i) => /*#__PURE__*/React.createElement(WorkCard, {
    key: i,
    tone: tone,
    meta: meta,
    title: title,
    href: "case-study.html",
    style: {
      gridColumn: col,
      gridRow: row
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "work.html"
  }, "See all work"))));
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [['01', 'Brief', 'A 60-minute call, then a 1-page brief back. If it doesn\u2019t make sense in a page, it doesn\u2019t make sense yet.'], ['02', 'Sketch', 'Two divergent directions, in low fidelity. We pick a winner together and kill the other before it gets pretty.'], ['03', 'Build', 'Heads-down craft. One Slack channel, one Loom every Wednesday, no surprise invoices, no scope creep.'], ['04', 'Ship', 'Final files, source access, a launch-day checklist, and a thirty-day window to come back for tweaks at no charge.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    className: "kit-section",
    style: {
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onInk: true,
    tag: "How we work 03",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Four weeks.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Stroke, {
      ink: false
    }, "No guesswork.")),
    lede: "A small team and a tight loop. You'll know what's happening every Friday and where the budget sits in real time."
  }), /*#__PURE__*/React.createElement("div", {
    className: "steps-grid"
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--red)',
      letterSpacing: '.08em',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--red)'
    }
  }), "Step ", n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      margin: '0 0 12px',
      color: 'var(--paper)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 14,
      lineHeight: 1.55
    }
  }, d))))));
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const minis = [['"They didn\u2019t try to redesign our brand from the inside out — they made it sharper without scaring our customers."', '— Reza A., founder · Marrow Coffee'], ['"Our YouTube retention is up 41% since they took over the cut. That\u2019s the whole testimonial."', '— Jenna L., creator · Sage Podcast'], ['"Asked for a logo. Got a logo, a packaging system, and an idea for our next product. Wild."', '— Owen B., COO · Orbital']];
  return /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    className: "kit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    tag: "Words 04",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Clients,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Stroke, null, "in their voice.")),
    lede: "We have referenceable references. Email us \u2014 we'll connect you with any of these people."
  }), /*#__PURE__*/React.createElement("div", {
    className: "testi-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--red)',
      fontSize: 14,
      letterSpacing: 2,
      marginBottom: 12
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px,3.4vw,40px)',
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      textTransform: 'none',
      color: 'var(--ink)'
    }
  }, "\"CRTR. shipped our launch film, the marketing site and the ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "whole identity rework"), " in six weeks. They beat the deadline and our internal team's morale went up, which I did not see coming.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      paddingTop: 24,
      borderTop: '1.5px solid var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: 'var(--red)',
      border: '1.5px solid var(--ink)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontSize: 16
    }
  }, "M"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Maya Okafor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, "VP Marketing \xB7 Northwall")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, minis.map(([q, who], i) => /*#__PURE__*/React.createElement(Card, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--red)',
      fontSize: 14,
      letterSpacing: 2,
      marginBottom: 8
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      marginBottom: 14
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--muted)'
    }
  }, who)))))));
}

/* ---------------- CTA (home, large) ---------------- */
function Cta({
  onStart
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-inner"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(48px,7.5vw,104px)',
      lineHeight: .92,
      letterSpacing: '-0.04em',
      textTransform: 'uppercase',
      margin: 0,
      color: '#fff'
    }
  }, "Got a thing?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Stroke, {
    ink: false
  }, "Let's make it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      margin: '24px auto 36px',
      maxWidth: 560,
      color: 'rgba(255,255,255,.92)'
    }
  }, "We take on six projects a quarter. Q3 has two slots open. Tell us what you're working on \u2014 first reply in under a day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: onStart,
    style: {
      borderColor: '#fff',
      boxShadow: '4px 4px 0 #fff'
    }
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "mailto:hello@crtr.studio",
    style: {
      borderColor: '#fff',
      color: '#fff'
    }
  }, "hello@crtr.studio"))));
}
Object.assign(window, {
  Hero,
  Services,
  Work,
  Process,
  Testimonials,
  Cta
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/servicesPage.jsx
try { (() => {
/* CRTR Website — SERVICES detail page. */
const {
  Button,
  Badge,
  Tag,
  Card,
  ServiceTile
} = window.CRTRDesignSystem_b33342;
const SERVICES = [{
  num: '01',
  title: 'Video editing',
  tone: 'var(--ink)',
  blurb: 'We cut for rhythm and retention. Long-form, short-form, ads, podcasts, sizzle reels — handed back graded, mixed and captioned.',
  deliver: ['YouTube long-form', 'Reels & TikTok', 'Paid-social ad cuts', 'Podcast video', 'Color grade', 'Sound mix'],
  from: '$3.5k / mo'
}, {
  num: '02',
  title: 'Motion design',
  tone: 'var(--red)',
  blurb: 'Frame-by-frame craft, never preset-y. Logo animations, kinetic type, product explainers and full broadcast packages.',
  deliver: ['Logo animation', 'Kinetic type', 'Product explainers', '3D & rigging', 'Lottie for product', 'Broadcast packages'],
  from: '$6k / project'
}, {
  num: '03',
  title: 'Web development',
  tone: 'var(--steel)',
  blurb: 'Designed and built by the same people — no handoff hell. Marketing sites, landing pages, custom CMS and full e-commerce.',
  deliver: ['Marketing sites', 'Landing pages', 'Custom CMS', 'Shopify & e-commerce', 'Next.js builds', 'Webflow'],
  from: '$12k / site'
}, {
  num: '04',
  title: 'Graphic design',
  tone: 'var(--ink)',
  blurb: 'Every grid like it\u2019s the last thing between you and your audience. Identity systems, packaging, social and print.',
  deliver: ['Identity systems', 'Packaging', 'Social templates', 'Print & editorial', 'Brand guidelines', 'Art direction'],
  from: '$8k / project'
}];
function ServiceBlock({
  s,
  i
}) {
  const flip = i % 2 === 1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center',
      padding: '56px 0',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--red)',
      marginBottom: 14
    }
  }, "/ ", s.num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(32px,4vw,52px)',
      textTransform: 'uppercase',
      letterSpacing: '-0.03em',
      lineHeight: .98,
      margin: '0 0 18px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ink-2)',
      marginBottom: 22,
      maxWidth: '46ch'
    }
  }, s.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 24
    }
  }, s.deliver.map(d => /*#__PURE__*/React.createElement(Tag, {
    key: d
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "contact.html"
  }, "Start a ", s.title.split(' ')[0].toLowerCase(), " project"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, "From ", s.from))), /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 320,
      borderRadius: 18,
      border: '1.5px solid var(--ink)',
      background: s.tone,
      boxShadow: '6px 6px 0 var(--ink)',
      position: 'relative',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(135deg, transparent 0 26px, rgba(255,255,255,.05) 26px 27px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-display)',
      fontSize: 120,
      color: 'rgba(255,255,255,.16)',
      letterSpacing: '-0.04em'
    }
  }, s.num))));
}
function ServicesPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SiteNav, {
    active: "services.html"
  }), /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, "Services"), /*#__PURE__*/React.createElement("h1", null, "Four crafts.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      WebkitTextStroke: '1.5px var(--ink)',
      color: 'transparent'
    }
  }, "One studio.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Pick the lane that fits, or hand us the whole thing. Designed and built by the same four people \u2014 so nothing gets lost between disciplines."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "contact.html"
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "work.html"
  }, "See the work")))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section",
    style: {
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement(ServiceBlock, {
    key: s.num,
    s: s,
    i: i
  })))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section",
    style: {
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    onInk: true,
    tag: "Engagements",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "How to ", /*#__PURE__*/React.createElement("span", {
      style: {
        WebkitTextStroke: '1.5px var(--paper)',
        color: 'transparent'
      }
    }, "work with us.")),
    lede: "Three ways in. Most clients start with a project and move to a retainer once the loop is humming."
  }), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, [['Project', 'A defined scope with a fixed price and a four-week loop. The most common way teams start.', 'Fixed bid'], ['Retainer', 'A monthly block of studio time across any of the four crafts. Cancel any time.', 'From $3.5k/mo'], ['Sprint', 'One intense week, heads-down, for a single launch moment. Limited slots.', 'From $9k/week']].map(([t, d, p]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    tone: "ink",
    padding: 32,
    style: {
      borderColor: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      color: 'var(--paper)',
      margin: '0 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 15,
      lineHeight: 1.6,
      marginBottom: 18
    }
  }, d), /*#__PURE__*/React.createElement(Badge, {
    tone: "red"
  }, p)))))), /*#__PURE__*/React.createElement(window.CtaBand, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ServicesPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/servicesPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/work.jsx
try { (() => {
/* CRTR Website — WORK index page (filterable portfolio). */
const {
  Button,
  Badge,
  WorkCard
} = window.CRTRDesignSystem_b33342;
const PROJECTS = [{
  tone: 'darkGrad',
  cat: 'Motion',
  year: '2025',
  title: 'Halftime — full reset',
  blurb: 'A 90-second brand campaign film + motion package for a sports-tech relaunch.',
  tall: true
}, {
  tone: 'red',
  cat: 'Graphic',
  year: '2025',
  title: 'Marrow Coffee',
  blurb: 'Identity system, packaging and a 14-SKU rollout that kept the regulars.'
}, {
  tone: 'ink',
  cat: 'Video',
  year: '2025',
  title: 'Sage podcast',
  blurb: 'Weekly long-form edit + shorts. Retention up 41% in one quarter.'
}, {
  tone: 'paper',
  cat: 'Web',
  year: '2024',
  title: 'Northwall — series A',
  blurb: '14-page marketing site, designed and built in four weeks for launch day.',
  tall: true
}, {
  tone: 'steel',
  cat: 'Motion',
  year: '2024',
  title: 'Orbital · launch loop',
  blurb: 'A looping product explainer and a kit of social cut-downs.'
}, {
  tone: 'gold',
  cat: 'Graphic',
  year: '2024',
  title: "Field guide '24",
  blurb: 'An 80-page printed field guide and its companion microsite.'
}, {
  tone: 'redGrad',
  cat: 'Web',
  year: '2024',
  title: 'Issue 03 — print + web',
  blurb: 'Editorial system spanning a printed annual and a responsive reader.'
}, {
  tone: 'ink',
  cat: 'Video',
  year: '2024',
  title: 'Lumen ad sprint',
  blurb: 'Six paid-social ad cuts a week, color-graded and captioned.'
}];
const CATS = ['All', 'Video', 'Motion', 'Web', 'Graphic'];
function WorkPage() {
  const [cat, setCat] = React.useState('All');
  const shown = cat === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === cat);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SiteNav, {
    active: "work.html"
  }), /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kit-tag"
  }, "Selected work"), /*#__PURE__*/React.createElement("h1", null, "The ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--red)'
    }
  }, "shelf.")), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Twelve years of timelines, grids and launch days, distilled. Filter by craft \u2014 or read a full case study, including the bits that didn't work the first time."))), /*#__PURE__*/React.createElement("section", {
    className: "kit-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 36
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      padding: '8px 16px',
      borderRadius: 999,
      cursor: 'pointer',
      border: '1.5px solid var(--ink)',
      background: cat === c ? 'var(--ink)' : 'transparent',
      color: cat === c ? 'var(--paper)' : 'var(--ink)',
      transition: 'background .2s var(--ease-ui), color .2s var(--ease-ui)'
    }
  }, c)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      alignSelf: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--muted)'
    }
  }, shown.length, " projects")), /*#__PURE__*/React.createElement("div", {
    className: "work-index"
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(WorkCard, {
    tone: p.tone,
    meta: `${p.year} · ${p.cat}`,
    title: p.title,
    href: "case-study.html",
    style: {
      minHeight: p.tall ? 360 : 300
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '16px 4px 0',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--muted)',
      maxWidth: '46ch'
    }
  }, p.blurb), /*#__PURE__*/React.createElement(Badge, {
    tone: "paper"
  }, p.cat))))))), /*#__PURE__*/React.createElement(window.CtaBand, null), /*#__PURE__*/React.createElement(window.Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(WorkPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.WorkCard = __ds_scope.WorkCard;

})();
