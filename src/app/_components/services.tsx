import { MOCK_SERVICES } from "@/core/data/services";

export default function Services() {
  return (
    <section id="services" className="py-10 lg:py-20 lg:text-lg">
      <div className="container space-y-12">
        <h2 className="text-3xl lg:text-5xl font-bold font-recoleta text-primary">
          Our Services for Authors and Businesses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_SERVICES.map((service) => (
            <div key={`service-${service.title}`} className="flex gap-4">
              <div>{<service.icon className="size-6 mt-1 lg:mt-0 lg:size-10 stroke-brand-950" />}</div>
              <div className="space-y-4">
                <div className="text-xl lg:text-2xl font-semibold text-brand-950">{service.title}</div>
                <div className="text-muted-foreground">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
