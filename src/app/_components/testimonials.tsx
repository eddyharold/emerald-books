import { cn } from "@/core/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { MOCK_REVIEWS } from "@/core/data/reviews";

type Review = { img: string; name: string; rating: number; comment: string };

const firstRow = MOCK_REVIEWS.slice(0, MOCK_REVIEWS.length / 2);
const secondRow = MOCK_REVIEWS.slice(MOCK_REVIEWS.length / 2);

const ReviewCard = ({ img, name, comment }: Review) => {
  return (
    <figure className={cn("space-y-2 w-64 overflow-hidden rounded-xl border border-brand-950/10 p-4")}>
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full h-6 w-6" width="32" height="32" alt={name} src={img} />
        <figcaption className="font-medium">{name}</figcaption>
      </div>

      <blockquote className="text-sm text-muted-foreground line-clamp-3">{comment}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-10 lg:pb-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
    </div>
  );
}
