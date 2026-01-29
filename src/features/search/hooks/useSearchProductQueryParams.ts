import {
  parseAsArrayOf,
  parseAsString,
  parseAsStringEnum,
  useQueryState
} from "nuqs";
import { ProductSortBy } from "../api/SearchProducts";

const useSearchProductQueryParams = () => {
  const [searchCategory, setSearchCategory] = useQueryState(
    "category",
    parseAsArrayOf(parseAsString, ",").withDefault([])
  );

  const [searchSortBy, setSearchSortBy] = useQueryState(
    "sort",
    parseAsStringEnum<ProductSortBy>(Object.values(ProductSortBy))
      .withDefault(ProductSortBy.RECOMMENDED)
      .withOptions({
        clearOnDefault: false
      })
  );

  return { searchCategory, setSearchCategory, searchSortBy, setSearchSortBy };
};

export default useSearchProductQueryParams;
