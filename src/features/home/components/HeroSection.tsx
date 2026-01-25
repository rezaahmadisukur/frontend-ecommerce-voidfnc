import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "~/assets/hero.webp";
import { Button } from "~/components/ui/button";

const HeroImage = () => {
  return (
    <div className="w-full min-h-full -z-10 absolute inset-0">
      <Image
        src={heroImage}
        alt="Hero Image"
        unoptimized
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 w-full h-full bg-linear-to-r from-secondary from-10% to-transparent"></div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="w-full min-h-96 relative flex flex-col justify-center">
      <HeroImage />

      <div className="flex flex-col gap-4 max-w-6xl 6xl:container mx-auto px-4 lg:gap-6">
        <h1 className="text-4xl font-black leading-12 lg:leading-16 lg:text-5xl">
          Discover Your Next <br />{" "}
          <span className="text-primary">Favorite Product</span>
        </h1>

        <p className="max-w-lg text-sm lg:text-lg">
          Shop the latest tech and gadgets at unbeatable prices. Quality
          products delivered to your door
        </p>

        <Link href="/products">
          <Button variant="default" size="lg">
            Shop Now
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
