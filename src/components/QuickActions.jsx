import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { 
      name: "Call Now", 
      icon: <Phone size={20} />, 
      href: "tel:+919409443333",
      color: "hover:text-blue-400"
    },
    { 
      name: "WhatsApp", 
      icon: <MessageCircle size={20} />, 
      href: "https://wa.me/919409443333",
      color: "hover:text-green-400"
    },
    { 
      name: "Directions", 
      icon: <MapPin size={20} />, 
      href: "https://www.google.com/maps/search/?api=1&query=Silver%20Spoon%20Radhaee%20Opp%20Radhakrishna%20Temple%20Sankhali%20Goa%20403505",
      color: "hover:text-red-400"
    },
    { 
      name: "Timings", 
      icon: <Clock size={20} />, 
      href: "#timings",
      color: "hover:text-[var(--color-accent)]"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass rounded-2xl p-4 flex flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-4 md:gap-8 shadow-2xl">
        {actions.map((action, idx) => (
          <a
            key={idx}
            href={action.href}
            target={action.name === 'Directions' || action.name === 'WhatsApp' ? "_blank" : "_self"}
            rel="noreferrer"
            className={`flex-1 min-w-[120px] flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-white/10 ${action.color} group cursor-pointer`}
          >
            <div className="mb-2 text-gray-300 group-hover:scale-110 transition-transform">
              {action.icon}
            </div>
            <span className="text-xs sm:text-sm font-medium text-gray-300">
              {action.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
