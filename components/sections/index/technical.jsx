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
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          id="skill"
          title="Skills"
          preTitle="Proficiency"
          subTitle="Tools, Languages, and Frameworks I Excel In"
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <BadgesBlock
              title="Programming Languagues"
              copy=""
              list={lang}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies"
              copy=""
              list={frameworks}
              block="tech"
              fullContainer="fullContainer"
              icon="frame"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Languages"
              copy=""
              list={language}
              block="tech"
              fullContainer="fullContainer"
              icon="language"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const language = [
  { key: "kotlin", name: "English (TOEIC 875)", type: "devicon" },
  { key: "kotlin", name: "Thai (Native)", type: "devicon" },
];

const lang = [
  { key: "python", name: "Python", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "Typescript", type: "devicon" },
  { key: "cplusplus", name: "C++", type: "devicon" },
  { key: "mysql", name: "SQL", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "dart", name: "Dart", type: "devicon" },
];

const frameworks = [
  { key: "react", name: "react", type: "devicon" },
  { key: "nodejs", name: "nodejs", type: "devicon" },
  { key: "mongodb", name: "mongodb", type: "devicon" },
  { key: "express", name: "expressjs", type: "devicon" },
  { key: "git", name: "git", type: "devicon" },
  { key: "docker", name: "docker", type: "devicon" },
  { key: "amazonwebservices", name: "aws", type: "devicon" },
  { key: "mysql", name: "mysql", type: "devicon" },
  { key: "bootstrap", name: "bootstrap", type: "devicon" },
  { key: "tailwindcss", name: "tailwindcss", type: "devicon" },
  { key: "tailwindcss", name: "chakraui", type: "devicon" },
  { key: "tailwindcss", name: "daisyui", type: "devicon" },
  { key: "django", name: "django", type: "devicon" },
  { key: "flutter", name: "flutter", type: "devicon" },
  { key: "firebase", name: "firebase", type: "devicon" },
  { key: "arduino", name: "arduino", type: "devicon" },
  { key: "graphql", name: "graphql", type: "devicon" },
  { key: "microsoftsqlserver", name: "mssql", type: "devicon" },
];
