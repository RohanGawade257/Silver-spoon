import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specials from './components/Specials';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Timings from './components/Timings';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="bg-[var(--color-primary)] min-h-screen text-[var(--color-secondary)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specials />
        <MenuSection />
        <Timings />
        <Gallery />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
