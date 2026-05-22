import { Clock, Info, CheckCircle2 } from 'lucide-react';

export default function Timings() {
  return (
    <section id="timings" className="py-20 px-4 sm:px-6 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Left: Timings */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Clock className="text-[var(--color-accent)]" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Restaurant <span className="text-[var(--color-accent)]">Timings</span></h2>
          </div>
          
          <div className="glass p-8 rounded-3xl mb-8">
            <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Lunch Session</h3>
                <p className="text-gray-400">Join us for a midday feast</p>
              </div>
              <div className="text-right">
                <span className="block text-xl font-semibold text-[var(--color-accent)]">12:00 PM</span>
                <span className="block text-gray-500 text-sm">to 4:00 PM</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Dinner Session</h3>
                <p className="text-gray-400">Perfect for evening dining</p>
              </div>
              <div className="text-right">
                <span className="block text-xl font-semibold text-[var(--color-accent)]">7:00 PM</span>
                <span className="block text-gray-500 text-sm">to 10:45 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Important Notes */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="glass p-8 rounded-3xl h-full border border-[var(--color-accent)]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Info size={120} />
            </div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Info className="text-[var(--color-accent)]" size={24} />
              Important Notes
            </h3>
            
            <ul className="space-y-4">
              {[
                "Orders may take 15–20 minutes to execute.",
                "Order once placed cannot be cancelled.",
                "Outside food is not allowed.",
                "Pets are not allowed.",
                "Parcel facility is available.",
                "Parking facility is available.",
                "Rates are subject to change without prior notice.",
                "Premises are covered by CCTV.",
                "All food items include tax."
              ].map((note, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[var(--color-accent)] mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
