/* CRTR Website — HOME app shell. */
function App() {
  const [modal, setModal] = React.useState(false);
  const open = () => setModal(true);
  return (
    <>
      <window.SiteNav active="index.html" />
      <window.Hero onStart={open} />
      <window.Services />
      <window.Work />
      <window.Process />
      <window.Testimonials />
      <window.Cta onStart={open} />
      <window.Footer />
      <window.ContactModal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
