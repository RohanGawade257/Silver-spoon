import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#0a0806] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-white tracking-wide mb-6">
              Silver <span className="text-[var(--color-accent)]">Spoon</span>
            </h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              A refreshing dining experience offering a wide spread of cuisine crafted for every taste bud in an ambience made for memorable meals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[var(--color-accent)] hover:bg-white/10 transition-all font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-[var(--color-accent)] hover:bg-white/10 transition-all font-bold">
                FB
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919409443333" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone size={20} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>+91 94094 43333</span>
                </a>
              </li>
              <li>
                <a href="tel:+919409553333" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                  <Phone size={20} className="text-[var(--color-accent)] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>+91 94095 53333</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919409443333" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-gray-400 hover:text-[#25D366] transition-colors group">
                  <MessageCircle size={20} className="text-[#25D366] group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>WhatsApp Orders</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Location</h3>
            <div className="flex items-start gap-3 text-gray-400 mb-6">
              <MapPin size={24} className="text-[var(--color-accent)] flex-shrink-0 mt-1" />
              <p className="text-sm leading-relaxed">
                Radhaee, Opp. Radhakrishna Temple,<br />
                Sankhali, Goa 403505
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Silver%20Spoon%20Radhaee%20Opp%20Radhakrishna%20Temple%20Sankhali%20Goa%20403505"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[var(--color-accent)] hover:text-black transition-colors"
            >
              Get Directions
            </a>
          </div>

          {/* Quick Links / Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Information</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>• Home Delivery Available</li>
              <li>• Party Orders Accepted</li>
              <li>• Parking Facility Available</li>
              <li>• 100% Tax Included</li>
              <li className="text-xs text-gray-500 mt-6 italic">
                * Prices may change without prior notice.
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Silver Spoon Restaurant. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed for memorable meals in Goa.
          </p>
        </div>
      </div>
    </footer>
  );
}
