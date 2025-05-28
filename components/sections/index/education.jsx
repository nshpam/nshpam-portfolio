// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";
import css from "../../../styles/sections/projects/featured.module.scss";

/**
 * Section: Education
 *
 * @returns {jsx} <Education />
 */
export default function Education() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          id="education"
          title="Education"
          preTitle="Academic Background"
          subTitle="Foundational knowledge and specialized training in engineering and technology"
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Bachelor of Computer Engineering</h3>
                <h5>
                  King Mongkut&apos;s University of Technology North Bangkok
                  (KMUTNB)
                </h5>
                <h4>2022 - 2025</h4>
              </span>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Certificate in Technical Education (Electrics and Electronics)
                </h3>
                <h5>Thai-German Pre-Engineering School</h5>
                <h4>2018 - 2020</h4>
              </span>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
      <div className={css.bgContainer}>
        <span className={css.orbitalBg}>
          <span class={`${css.bgSection}`}>
            <span
              className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}
            ></span>
          </span>
          <span class={`${css.bgSection}`}>
            <span className={`${css.bgInner} ${css.heroCenter}`}></span>
          </span>
          <span class={`${css.bgSection}`}>
            <span
              className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}
            ></span>
          </span>
        </span>
        <span className={css.afterGlowBg}></span>
      </div>
    </Section>
  );
}

const scg = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "django", name: "Django", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "tailwindcss", name: "Chakraui", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "graphql", name: "Graphql", type: "devicon" },
  { key: "microsoftsqlserver", name: "Mssql", type: "devicon" },
];

const tomato = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "Typescript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "tailwindcss", name: "Chakraui", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
];

const etda_fullstack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "express", name: "Express", type: "devicon" },
  { key: "solidity", name: "Solidity", type: "devicon" },
  { key: "ganache", name: "Ganache", type: "devicon" },
  { key: "truffle", name: "Truffle", type: "devicon" },
  { key: "metamask", name: "Metamask", type: "devicon" },
];
