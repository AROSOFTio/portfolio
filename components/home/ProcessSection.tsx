export default function ProcessSection() {
  const steps = [
    { title: 'Discovery', description: 'Understanding client needs and defining scope.' },
    { title: 'Design', description: 'Crafting UI/UX with premium aesthetics.' },
    { title: 'Development', description: 'Agile, test‑driven implementation using modern stack.' },
    { title: 'Deployment', description: 'Dockerized production rollout with CI/CD.' },
    { title: 'Support', description: 'Ongoing monitoring, updates, and enhancements.' },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary">Our Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="p-4 bg-surface bg-opacity-80 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
