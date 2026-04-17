import {
  HeroSection,
  BenefitsSection,
  ServicesPreview,
  ProductsPreview,
} from "@/components/home";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BenefitsSection />
      <ServicesPreview />
      <ProductsPreview />
    </div>
  );
}
