// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          id="about"
          title="About Me"
          preTitle="Synopsis"
          subTitle="I specialize in web development using JavaScript, Python, React, and TypeScript. With strengths in fast learning, creativity, and leadership, I thrive in dynamic environments where innovation and collaboration are key."
        />
        <section className={about.content}>
          {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
          <div className={about.image}>
            <Image
              src="/img/me.jpg"
              alt="Nelson family photo"
              width={350}
              height={400}
            />
            {/* </div> */}
          </div>

          {/* <div className={about.copy}>
            <CopyBlock
              title="Softskills that pay the bills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a project manager and president of computer club. Outside of work, I enjoy staying active through sports such as jetski and badminton. I am confident in my ability to bring passion and value to any project."
            />
            <BadgesBlock
              title="Research and planning"
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div> */}
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "User Research", type: "fad" },
  { key: "qrcode", name: "Digital Strategy", type: "fad" },
  { key: "window", name: "Design Systems", type: "fad" },
  { key: "cubes", name: "Product Strategy", type: "far" },
  { key: "layer-plus", name: "Brand Strategy", type: "fad" },
  { key: "solar-system", name: "Operations", type: "fad" },
];
