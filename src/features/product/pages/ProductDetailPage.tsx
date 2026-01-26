import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { toRupiah } from "~/lib/format";

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D";

const ProductDetailPage = () => {
  return (
    <div className="w-full max-w-6xl 6xl:container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-center">
        {/* Product Image */}
        <div className="aspect-4/3 overflow-hidden rounded-xl">
          <div className="relative w-full h-full">
            <Image
              src={placeholderImageUrl}
              alt="Product Image"
              unoptimized
              fill
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Badge variant="outline">AUDIO</Badge>
            <h1 className="text-2xl font-bold lg:text-3xl">
              Premium Product Name
            </h1>
            <div className="flex items-center gap-2 text-sm">
              <p className="font-semibold">⭐ 4.8</p>
              <p className="text-muted-foreground">256 reviews</p>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-primary">
              {toRupiah(1000000)}
            </h3>
            <p className="text-sm text-muted-foreground">
              free shipping on orders over $50
            </p>
          </div>

          <Separator />

          <div className="space-y-2">
            <h5 className="font-semibold">Description</h5>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              reiciendis?
            </p>
          </div>

          <Button variant="default" size="lg" className="w-full">
            <ShoppingCart className="size-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
