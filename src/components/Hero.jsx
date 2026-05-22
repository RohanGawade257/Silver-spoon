import QuickActions from './QuickActions';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/assets/silver_spoon_building.jpg"
          alt="Silver Spoon Restaurant building"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback gracefully if image missing
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('bg-zinc-900');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--color-primary)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center mt-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Silver <span className="text-[var(--color-accent)]">Spoon</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-light text-gray-200 mb-6 italic">
          "A refreshing dining experience in Sankhali, Goa"
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A wide spread of cuisine crafted for every taste bud, served in an ambience made for memorable meals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
          <a
            href="#menu"
            className="bg-[var(--color-accent)] text-[var(--color-primary)] font-bold py-4 px-8 rounded-full hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-yellow-500/25"
          >
            Explore Menu
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Silver%20Spoon%20Radhaee%20Opp%20Radhakrishna%20Temple%20Sankhali%20Goa%20403505"
            target="_blank"
            rel="noreferrer"
            className="glass text-white font-semibold py-4 px-8 rounded-full hover:bg-white/10 transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Quick Actions (Overlapping bottom of hero) */}
      <div className="absolute bottom-8 left-0 w-full z-20 px-4">
        <QuickActions />
      </div>
    </section>
  );
}
