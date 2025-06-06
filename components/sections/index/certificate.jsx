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
import certificate from "../../../styles/sections/index/certificate.module.scss";
import css from "../../../styles/sections/projects/featured.module.scss";

/**
 * Section: Certificate
 *
 * @returns {jsx} <Certificate />
 */
export default function Certificate() {
  return (
    <Section classProp={`${certificate.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          id="cert"
          title="Certificate"
          preTitle="Verified Achievements"
          subTitle="Recognitions of skill development, specialized training, and professional growth"
        />
        <section className={certificate.area}>
          <article className={certificate.company}>
            <div className={certificate.companyContent}>
              <span className={certificate.companyHeader}>
                <h3>Python (Basic) Certificate</h3>
                <h5>HackerRank</h5>
              </span>
              <Image
                src={"/img/python_basic.png"}
                alt="x"
                height={300}
                width={500}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={certificate.companyContent}>
              <span className={certificate.companyHeader}>
                <h3>React (Basic) Certificate</h3>
                <h5>HackerRank</h5>
              </span>
              <Image
                src={"/img/react_basic.png"}
                alt="x"
                height={300}
                width={500}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={certificate.companyContent}>
              <span className={certificate.companyHeader}>
                <h3>Certificate of Completion</h3>
                <h5>CPF Young Software Developer</h5>
              </span>
              <Image
                src={"/img/ydsp.jpg"}
                alt="x"
                height={300}
                width={500}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={certificate.companyContent}>
              <span className={certificate.companyHeader}>
                <h3>Certificate of Achievement</h3>
                <h5>2024 International Capstone Design Project</h5>
                <h5>for Smart Mobility (ICDP)</h5>
              </span>
              <Image
                src={"/img/icdp.jpg"}
                alt="x"
                height={300}
                width={500}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={certificate.companyAlt}></div>
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
