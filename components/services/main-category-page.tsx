import { MainServicePageLayout } from "@/components/services/main-service-page-layout";
import { mapMainCategoryToServicePage } from "@/lib/content/map-service-page";
import type { MainCategoryContent } from "@/lib/content/types";

type Props = {
  category: MainCategoryContent;
};

export function MainCategoryPage({ category }: Props) {
  return <MainServicePageLayout content={mapMainCategoryToServicePage(category)} />;
}
