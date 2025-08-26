// import FlagsScroll from "./FlagsScroll";

// // ...existing code...

// export default function FeatureCardsSection() {
//   const cards = cardData.map((card) => ({
//     lightBg: card.bg,
//     darkBg: "",
//     content: (
//       <CardContent className="flex flex-col items-center justify-center h-full text-gray-800">
//         <div className="mb-4 flex items-center justify-center">{card.icon}</div>
//         <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center leading-tight">{card.title}</h3>
//         <p className="text-base max-w-xs mb-6 text-center leading-normal">{card.description}</p>
//         <Button variant={card.variant} className="mt-auto">Learn More →</Button>
//       </CardContent>
//     ),
//   }));

//   return (
//     <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
//       <div className="mb-8">
//         <FlagsScroll />
//       </div>
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 leading-tight">Serving Students Globally</h2>
//         <p className="text-xl text-blue-600 font-semibold">Our Global Impact</p>
//       </div>
//       <ParallaxCards cards={cards} height="100vh" />
//     </section>
//   );
// }