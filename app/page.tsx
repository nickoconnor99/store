import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react";
import LoadingContainer from "@/components/global/LoadingContainer";
function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Suspense fallback={<LoadingContainer></LoadingContainer>}>
        <FeaturedProducts></FeaturedProducts>
      </Suspense>
    </>
  );
}
export default HomePage;

//Contains Hero & Featured Products Components
//when go to home page whole page is loading
//Hero component is static so we use suspense component from react
//Place inside component where fetching taking place i.e FeaturedProducts not HomePage or Hero
