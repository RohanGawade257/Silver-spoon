import { Award } from 'lucide-react';

export default function Specials() {
  const specials = [
    {
      name: "Silver Spoon Special Kebab",
      desc: "Our signature non-veg tandoor creation, perfectly spiced and roasted.",
      img: "/assets/food img 1.jpg",
      isVeg: false,
      price: "₹550"
    },
    {
      name: "Silver Spoon Special Veg",
      desc: "A delightful medley of fresh vegetables cooked in our secret gravy.",
      img: "/assets/food img 2.jpg",
      isVeg: true,
      price: "₹330"
    },
    {
      name: "Butter Chicken",
      desc: "Classic rich, creamy tomato gravy with tender chicken pieces.",
      img: "/assets/food img 3.jpg",
      isVeg: false,
      price: "₹350"
    },
    {
      name: "Fish Thali",
      desc: "Authentic Goan seafood experience on a single platter.",
      img: "/assets/food img 4.jpg",
      isVeg: false,
      price: "₹260"
    }
  ];

  return (
    <section id="specials" className="py-24 relative overflow-hidden bg-zinc-900/50">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Award className="text-[var(--color-accent)]" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Chef's <span className="text-[var(--color-accent)]">Specials</span></h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Handpicked signature dishes that define the Silver Spoon experience. 
            Highly recommended for first-time visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((special, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl glass">
              <div className="h-48 overflow-hidden bg-black/50">
                <img 
                  src={special.img} 
                  alt={special.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-zinc-800');
                    e.target.parentElement.innerHTML = '<span class="text-zinc-600 font-medium">Image</span>';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors line-clamp-1">
                    {special.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 min-h-[40px]">
                  {special.desc}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center p-0.5 ${special.isVeg ? 'border-[var(--color-veg)]' : 'border-[var(--color-non-veg)]'}`}>
                      <div className={`w-full h-full rounded-full ${special.isVeg ? 'bg-[var(--color-veg)]' : 'bg-[var(--color-non-veg)]'}`}></div>
                    </div>
                  </div>
                  <span className="font-bold text-lg text-[var(--color-accent)]">
                    {special.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
