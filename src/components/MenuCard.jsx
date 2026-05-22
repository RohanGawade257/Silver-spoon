import { Leaf, Drumstick, Award } from 'lucide-react';

export default function MenuCard({ item }) {
  const isVeg = item.isVeg;
  const badgeColor = isVeg ? 'border-[var(--color-veg)] text-[var(--color-veg)]' : 'border-[var(--color-non-veg)] text-[var(--color-non-veg)]';
  
  return (
    <div className="glass p-5 rounded-2xl flex flex-col justify-between hover:bg-white/5 transition-colors border border-white/5 group">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center p-0.5 ${badgeColor}`}>
              <div className={`w-full h-full rounded-full ${isVeg ? 'bg-[var(--color-veg)]' : 'bg-[var(--color-non-veg)]'}`}></div>
            </div>
            {item.isPopular && (
              <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-[var(--color-primary)] bg-[var(--color-accent)] px-2 py-0.5 rounded-full">
                <Award size={12} /> Chef Special
              </span>
            )}
          </div>
          <span className="font-bold text-lg text-white tabular-nums">
            {typeof item.price === 'number' ? `₹${item.price}` : item.price}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[var(--color-accent)] transition-colors">
          {item.name}
        </h3>
        
        {item.description && (
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}
