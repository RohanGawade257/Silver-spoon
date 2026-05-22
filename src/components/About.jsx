export default function About() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-accent)]/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience <span className="text-[var(--color-accent)]">Silver Spoon</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
              At Silver Spoon, we have given careful thought to creating a refreshing dining experience. 
              Not just offering a wide spread of cuisine to satisfy every taste bud, we have created the right 
              environment where every meal becomes a delightful treat.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you are craving authentic Goan coastal flavors, rich Indian curries, sizzling Tandoor starters, 
              or comforting Chinese appetizers, our family-friendly ambience makes it the perfect place for memorable meals.
            </p>
          </div>
          
          <div className="md:w-1/2 w-full h-80 rounded-2xl overflow-hidden relative">
            <img 
              src="/assets/silver_spoon_lounge.jpg" 
              alt="Silver Spoon Ambience" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('bg-zinc-800');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
