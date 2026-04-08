export default function WhyChooseUs() {
  const reasons = [
    { title: 'Premium Quality', description: 'Meticulous engineering and design for flawless performance.' },
    { title: 'Scalable Architecture', description: 'Built to grow with your business needs.' },
    { title: 'End‑to‑End Support', description: 'From concept to deployment and ongoing maintenance.' },
    { title: 'Security First', description: 'Robust security practices and compliance.' },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-primary to-indigo-600 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose AROSOFT?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="p-6 bg-secondary bg-opacity-80 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary">{r.title}</h3>
              <p className="text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
