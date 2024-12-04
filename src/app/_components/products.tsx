import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Products() {
  return (
    <section id="products" className="py-10 lg:py-20 bg-brand-100/20 lg:text-lg">
      <div className="container space-y-8">
        <div className="grid lg:flex items-end gap-4 lg:gap-12 justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-5xl font-bold font-recoleta text-primary">
              Explore Our Unique Collections
            </h2>
            <div className="text-muted-foreground w-full lg:max-w-4xl">
              Emerald Books offers three tailored collections designed to meet the diverse learning needs of students
              and professionals across various stages and fields
            </div>
          </div>

          <div>
            <ButtonLink href="/books" className="h-10 lg:h-11 w-full lg:w-fit rounded-full group lg:text-base">
              Browse Books{" "}
              <ArrowRight className="group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-150" />
            </ButtonLink>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/books?collection=PRINCIPIUM">
            <Card className="shadow-none border-brand-950/10 hover:shadow-lg hover:shadow-brand-950/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-recoleta text-2xl lg:text-3xl text-brand-950">Principium</CardTitle>
                <CardDescription className="lg:text-base">Foundational lessons for beginners</CardDescription>
              </CardHeader>
              <CardContent>
                Essential concepts and principles for those starting their educational journey in various fields
              </CardContent>
            </Card>
          </Link>

          <Link href="/books?collection=DIKTION">
            <Card className="shadow-none border-brand-950/10 hover:shadow-lg hover:shadow-brand-950/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-recoleta text-2xl lg:text-3xl text-brand-950">Diktion</CardTitle>
                <CardDescription className="lg:text-base">Subject-specific dictionaries</CardDescription>
              </CardHeader>
              <CardContent>
                Specialized dictionaries for deeper understanding in subjects like Biology, Computer Science, and
                Geology
              </CardContent>
            </Card>
          </Link>

          <Link href="/books?collection=FOX">
            <Card className="shadow-none border-brand-950/10 hover:shadow-lg hover:shadow-brand-950/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-recoleta text-2xl lg:text-3xl text-brand-950">Fox</CardTitle>
                <CardDescription className="lg:text-base">Early learning guides for young children</CardDescription>
              </CardHeader>
              <CardContent>
                Practical guides for children aged 3-6, focusing on writing, drawing, coloring, and reading skills
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
