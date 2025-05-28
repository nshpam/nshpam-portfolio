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
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          id="exp"
          title="Experience"
          preTitle="Career"
          subTitle="Roles, Responsibilities, and Achievements"
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Siam Fibre Cement Group Co., Ltd (SCG)</h3>
                <h4>Internship Full-time</h4>
                <h4>Apr 2024 - Apr 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                As a leading ASEAN business conglomerate with regional focus and
                established commitments towards business conducts that are in
                linewith good corporate governance and sustainable development
                principles. Since 1913, SCG has grown and expanded into a
                diversified group of operations encompassing three core business
                units: SCG Cement-Building Materials, SCG Chemicals and SCG
                Packaging—with its demonstrated commitment to conducting
                business in tune with the sustainable development approach.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Full Stack Developer (Smart Factory Department)</h3>
                  <h4>Apr 2024 - Apr 2025</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Key contributor to
                      the Warehouse Management System, responsible for gathering
                      requirements, designing, developing and maintaining core
                      features.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Developed
                      full-stack web applications using JavaScript and Python
                      with Django, React, ChakraUI, MSSQL and RESTful APIs.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Conducted CI/CD
                      pipeline, unit, integration, system and acceptance testing
                      to enhance system reliability and performance.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Significantly
                      reduced manual task time by implementing RPA, real-time
                      monitoring dashboards and logging systems for SAP/HANA
                      data submission.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Reduced forklift
                      operation cost by 3 million THB and increased warehouse
                      space by 1240 sqm within 8 months.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Provided training
                      and documentation for employees to ensure smooth system
                      adoption.
                    </span>
                  </li>
                  <li>
                    For more information{" "}
                    <a
                      href="https://drive.google.com/file/d/1cZF5B-hAWmg0avIbZeX_br89rCAUTH6w/view"
                      className={career.link}
                      target="_blank"
                    >
                      click here
                    </a>
                  </li>
                </ul>
                <Badges
                  list={scg}
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
                <h3>Ketchuptutor.co</h3>
                <h4>Freelance</h4>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                The first tutor matching platform in Thailand that allows you to
                find professional tutors quickly and precisely. Just select a
                subject and specify your requirements, and our system will
                recommend the most suitable tutor for you and your child. No
                need to go through an admin or spend time searching on your own
                anymore.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Front End Developer</h3>
                  <h4>Dec 2024 - Jan 2025</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Developed the
                      front-end for KetchupTutor using JavaScript with
                      Express.js, React and Firebase
                    </span>
                  </li>
                  <li>
                    For more information{" "}
                    <a
                      href="https://ketchuptutor.co/th"
                      className={career.link}
                      target="_blank"
                    >
                      click here
                    </a>
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
                <h3>Electronic Transactions Development Agency (ETDA)</h3>
                <h4>Internship Full-time</h4>
                <h4>May 2023 - July 2023</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                The ETDA is an organization designed to promote and drive
                Thailand’s economy and society to become a digital economy and
                society in which all sectors can conduct reliable transactions
                online with confidence, security and safety.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Full Stack Developer (Innovation Team)</h3>
                  <h4>May 2023 - July 2023</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Collaborated in
                      developing a Smart Contract prototype using JINDA token on
                      TBSI, using JavaScript with React, Bootstrap, Express.js,
                      Solidity, Ganache, Truffle, and Metamask.
                    </span>
                  </li>
                </ul>
                <Badges
                  list={etda_fullstack}
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
                  <h3>Researcher (Innovation Team)</h3>
                  <h4>May 2023 - July 2023</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Conducted research
                      on Thai Blockchain Services Infrastructure (TBSI), smart
                      contracts, e-documents, e-stamps, digital signatures,
                      Certificate Authority (CA), and ISO-32000 compliant PDFs.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Computer Club KMUTNB</h3>
                <h4>President Full-Time</h4>
                <h4>Mar 2023 - Mar 2024</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                CCK is a student-run computer club dedicated to creating a space
                for students to explore, innovate, and push the boundaries of
                technology. Our club offers wide range of opputunities for
                students to sharpen their skills and discover their true
                potential in the world of computing. In Addition, our club aims
                to be an impact creator. Team
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>President</h3>
                  <h4>May 2023 - July 2023</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Redefined the
                      club's identity with a new website, logo, T-shirt, and
                      project showcase, which boosted visibility, expanded
                      membership by 38% (from 58 to 80) and generated 12,000 THB
                      in funds for the next year's club committee.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Organized the
                      Python Programming Boot Camp, doubling attendance from 30
                      to 60 participants from last year.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Established
                      collaborations with the Institute of Computer and
                      Information Technology (ICIT) at KMUTNB.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Launched a tech
                      discussion platform, driving participation in competitions
                      and open-source projects.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Ming Chi University of Technology</h3>
                <h4>Representative Temporary</h4>
                <h4>Jul 2023</h4>
                <h5>New Taipei, Taiwan</h5>
              </span>
              <p>
                Originally called ”Ming Chi School,” the University is located
                on a hillside in Kueizi Village in Taishan District, New Taipei
                City. The campus encompasses 62 hectares with vast green spaces
                and beautiful views.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Representative of Faculty of Engineering</h3>
                  <h4>Jul 2023</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Shared Thai culture
                      while fostering cross-cultural understanding and teamwork
                      with international students.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Participated in
                      faculty workshops, a basic Mandarin course, and cultural
                      activities at Ming Chi University.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Explored Ming Chi
                      University and Formosa Plastic Group, gaining insights
                      into Taiwan’s industry.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>
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
