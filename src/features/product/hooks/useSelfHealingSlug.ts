import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { slugify } from "~/lib/utils";

type UseSelfHeadlingSlugProps = {
  id: string;
  name: string;
};

const useSelfHealingSlug = (props: UseSelfHeadlingSlugProps) => {
  const router = useRouter();

  const selfHealProductUrl = useCallback(() => {
    const productNameSlug = slugify(props.name);

    const slug = `${productNameSlug}-${props.id}`;
    router.replace(`/products/${slug}`);
  }, [props.id, props.name, router]);

  useEffect(() => {
    selfHealProductUrl();
  }, [selfHealProductUrl]);
};

export default useSelfHealingSlug;
