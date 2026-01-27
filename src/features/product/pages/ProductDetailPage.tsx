import { getProductById } from "../api/getProductById";
import { notFound } from "next/navigation";
import ProductDetailPageInner from "../components/ProductDetailPageInner";
import { Metadata } from "next";
import { cache } from "react";

const placeholderImageUrl =
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D";

type Props = {
  params: Promise<{ slug: string }>;
};

const cachedGetProductById = cache(async (productId: string) => {
  return await getProductById({ id: productId });
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const productId = slug.split("-").pop() ?? "";

  const product = await cachedGetProductById(productId);

  return {
    title: product?.name ?? "Product Detail",
    description: product?.description ?? "Product Description",
    openGraph: {
      title: product?.name ?? "Product Detail",
      description: product?.description ?? "Product Description",
      images: [product?.imageUrl ?? placeholderImageUrl]
    }
  };
}

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const productId = slug.split("-").pop() ?? "";

  const product = await cachedGetProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full max-w-6xl 6xl:container mx-auto px-4 py-16">
      <ProductDetailPageInner
        id={product.id}
        name={product.name}
        price={product.price}
        imageUrl={product.imageUrl ?? placeholderImageUrl}
        description={product.description ?? "No description available"}
        category={product.category?.name ?? "Uncategorized"}
      />
    </div>
  );
};

export default ProductDetailPage;
