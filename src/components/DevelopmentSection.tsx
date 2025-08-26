


const cards = [
  {
    title: "Web Development",
    description: "Empower your online presence with custom websites crafted for speed, security, and scalability. Our team delivers modern solutions and guides you through the latest web technologies.",
    color: "bg-white/90 border border-neutral-200",
    button: { text: "Buy Now" },
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80&fm=webp"
  },
  {
    title: "App Development",
    description: "Transform your ideas into powerful mobile experiences. We build intuitive Android & iOS apps and offer hands-on training to help you master app development from concept to launch.",
    color: "bg-white/90 border border-neutral-200",
    button: { text: "Buy Now" },
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80&fm=webp"
  },
  {
    title: "Graphics Design",
    description: "Elevate your brand with creative visuals and user-centric design. From logos to complete UI/UX, our graphics team blends creativity and strategy for memorable digital experiences.",
    color: "bg-white/90 border border-neutral-200",
    button: { text: "Buy Now" },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80&fm=webp"
  }
];

const DevelopmentSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary-dark mb-4 drop-shadow">Services</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">Web, App, and Graphics development services & training for your digital growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-md p-8 flex flex-col items-center w-full max-w-xs ${card.color} transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:border-accent-teal hover:bg-gradient-to-br hover:from-primary-dark/5 hover:to-accent-teal/10 group`}
            >
              <img src={card.image} alt={card.title} className="rounded-xl w-full h-40 object-cover mb-4 shadow" loading="lazy" />
              <h3 className="text-2xl font-bold mb-2 text-primary-dark drop-shadow text-center">{card.title}</h3>
              <p className="text-neutral-700 mb-4 text-center">{card.description}</p>
              <button
                className={`font-heading font-bold py-2 px-6 rounded-xl transition-all duration-300 mt-2 bg-accent-teal text-white group-hover:bg-primary-dark group-hover:text-white shadow group-hover:shadow-lg border border-accent-teal/30 group-hover:border-primary-dark/40`}
                onClick={() => window.location.href = '/payment'}
              >
                {card.button.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
