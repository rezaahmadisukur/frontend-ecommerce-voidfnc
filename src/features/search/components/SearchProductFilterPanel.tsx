"use client";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select";
import { cn } from "~/lib/utils";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

const mockCategories: Record<string, string>[] = [
  {
    name: "Kaos"
  },
  {
    name: "Celana"
  },
  {
    name: "Sepatu"
  },
  {
    name: "Tas"
  }
];

const sortByOption = [
  {
    label: "Recommended",
    value: "recommended"
  },
  {
    label: "Price: Low to High",
    value: "price-asc"
  },
  {
    label: "Price: High to Low",
    value: "price-desc"
  }
];

const SearchProductFilterPanel = () => {
  const [searchCategory, setSearchCategory] = useQueryState<string[]>(
    "category",
    parseAsArrayOf(parseAsString, ",").withDefault([])
  );
  const [searchSortBy, setSearchSortBy] = useQueryState("sort", {
    defaultValue: sortByOption[0].value,
    clearOnDefault: false
  });

  const handleCategoryChange = (category: string) => {
    if (searchCategory.includes(category)) {
      const newCategories = searchCategory.filter((c) => c !== category);

      if (newCategories.length === 0) {
        setSearchCategory(null, {
          shallow: true
        });
        return;
      }
      setSearchCategory(newCategories, {
        shallow: true
      });
    } else {
      setSearchCategory(
        searchCategory ? [...searchCategory, category] : [category],
        { shallow: true }
      );
    }
  };

  return (
    <aside
      className={cn(
        "w-full border h-fit col-span-4 p-4 rounded-md flex flex-col gap-6",
        "lg:col-span-1"
      )}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Filters</h3>
        <Button variant="ghost" size="xs">
          Clear
        </Button>
      </div>

      <div className="space-y-2">
        <h5 className="text-lg font-semibold">Category</h5>

        <div className="space-y-4">
          {mockCategories.map((category) => (
            <div key={category.name} className="flex items-center gap-3">
              <Checkbox
                id={category.name}
                className="cursor-pointer"
                // checked={searchCategory.map((c) => c === category.name)}
                onCheckedChange={() => handleCategoryChange(category.name)}
              />
              <Label htmlFor={category.name} className="cursor-pointer">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h5 className="text-lg font-semibold">Sort By</h5>

        <Select value={searchSortBy} onValueChange={setSearchSortBy}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a sort option" />
          </SelectTrigger>

          <SelectContent>
            {sortByOption.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </aside>
  );
};

export default SearchProductFilterPanel;
