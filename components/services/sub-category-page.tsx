import { SubServicePageLayout } from "@/components/services/sub-service-page-layout";
import { mapSubCategoryToServicePage } from "@/lib/content/map-service-page";
import type { SubCategoryPageData } from "@/lib/content/types";

type Props = {
  data: SubCategoryPageData;
};

export function SubCategoryPage({ data }: Props) {
  return <SubServicePageLayout content={mapSubCategoryToServicePage(data)} />;
}
