export default function Gallery() {
  const images = [
    { src: "/assets/silver_spoon_building.jpg", alt: "Silver Spoon Exterior" },
    { src: "/assets/silver_spoon_interior.jpg", alt: "Elegant Dining Room" },
    { src: "/assets/silver_spoon_lounge.jpg", alt: "Cozy Lounge & Sofas" },
    { src: "/assets/food img 1.jpg", alt: "Delicious Starter" },
    { src: "/assets/food img 2.jpg", alt: "Vegetarian Special" },
    { src: "/assets/food img 3.jpg", alt: "Main Course" },
    { src: "/assets/food img 4.jpg", alt: "Authentic Fish Thali" },
    { src: "/assets/silver_spoon_sign.jpg", alt: "Silver Spoon Signboard" },
  ];

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[var(--color-accent)]">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a visual tour of Silver Spoon. Discover our inviting ambience and mouth-watering dishes before you arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-2xl group ${
                idx === 1 || idx === 2 ? 'md:col-span-2 md:row-span-2 h-64 md:h-full' : 'h-64'
              }`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-zinc-800', 'flex', 'items-center', 'justify-center');
                  e.target.parentElement.innerHTML = '<span class="text-zinc-600 font-medium">Image</span>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
