import Hero from "../components/sections/index/hero";
import Looking from "../components/sections/index/looking";
import About from "../components/sections/index/about";
import Technical from "../components/sections/index/technical";
import Career from "../components/sections/index/career";
import FeaturedProjects from "../components/sections/projects/featured";
import Competition from "../components/sections/index/competition";
import Education from "../components/sections/index/education";
import Certificate from "../components/sections/index/certificate";

import Color from "../components/utils/page.colors.util";

import colors from "../content/index/_colors.json";

//
export default function HomePage() {
  return (
    <>
      <Color colors={colors} />
      <Hero />
      {/* <Looking /> */}
      <About />
      <Technical />
      <Education />
      <Certificate />
      <Career />
      <Competition />
      <FeaturedProjects />
    </>
  );
}
