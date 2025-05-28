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

/**
 * Section: Competition
 *
 * @returns {jsx} <Competition />
 */
export default function Competition() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          id="competition"
          title="Activities"
          preTitle="Beyond the Classroom"
          subTitle="I am current managing, designing, and developing all consumer and digital product initiatives at My Supply Co."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Chula Legaltech</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Y4</h3>
                  <h4>Dec 2024 - Jan 2025</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Desc
                    </span>
                  </li>
                </ul>
                <Badges
                  list={tomato}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Y5</h3>
                  <h4>Dec 2024 - Jan 2025</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Desc
                    </span>
                  </li>
                </ul>
                <Badges
                  list={tomato}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>CPF</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Animed</h3>
                  <h4>Dec 2024 - Jan 2025</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Desc
                    </span>
                  </li>
                </ul>
                <Badges
                  list={tomato}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>LogoH</h3>
                  <h4>Dec 2024 - Jan 2025</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Desc
                    </span>
                  </li>
                </ul>
                <Badges
                  list={tomato}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>International Party 2023</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Computer Boost Camp 2023</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>2024 ICDP</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Zero to one SCG</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Zero to one SCG</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>ICIT Hackathon</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>WTCT</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>Desc</p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const scg = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "django", name: "django", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "tailwindcss", name: "chakraui", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "graphql", name: "graphql", type: "devicon" },
  { key: "microsoftsqlserver", name: "mssql", type: "devicon" },
];

const tomato = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "Typescript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "tailwindcss", name: "chakraui", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "firebase", name: "firebase", type: "devicon" },
];
