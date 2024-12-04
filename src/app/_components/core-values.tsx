// import { BookOpen, CheckCircle, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function CoreValues() {
  return (
    <section className="py-10 lg:py-20 text-base lg:text-lg">
      <div className="container space-y-8">
        <h2 className="text-3xl lg:text-5xl font-bold font-recoleta text-primary">Our Commitment to Education</h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-2">
            <div className="text-muted-foreground">
              At Emerald Books, we prioritize educational excellence by providing top-notch resources. Our commitment
              ensures that learners have access to the best tools for their growth.
            </div>

            <div className="divide-y divide-dashed">
              <div className="space-y-2 py-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-brand-950">Research-Backed Resources</h3>
                <p className="text-muted-foreground">
                  Up-to-date, expert-backed resources that empower educators and inspire students to achieve their best.
                </p>
              </div>

              <div className="space-y-2 py-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-brand-950">Trustworthy Content</h3>
                <p className="text-muted-foreground">
                  Credible, well-researched content that you can rely on for accurate and comprehensive learning.
                </p>
              </div>

              <div className="space-y-2 py-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-brand-950">Innovative Educational Tools</h3>
                <p className="text-muted-foreground">
                  Modern methods and interactive tools designed to enhance the learning experience for all age groups.
                </p>
              </div>
            </div>
          </div>

          <Image
            src="/assets/images/education.webp"
            alt="Educational values"
            width={800}
            height={600}
            className="rounded-lg"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
