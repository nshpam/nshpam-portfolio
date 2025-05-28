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
          subTitle="Leadership, Collaboration, and Community in Action"
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  IT Consultant for &quot;Hiew Hopping&quot; Project, Zero to
                  One Program – SCG
                </h3>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                ZERO TO ONE is an innovation and entrepreneurship development
                program organized by SCG to empower young talents in
                transforming ideas into viable business solutions. As a
                participant, I collaborated with a multidisciplinary team named
                Hiew Hopping, consisting of a Hacker (my role), Hustler, and
                Hipster—a balanced startup team model designed to foster
                innovation. Our project aimed to solve the problem of long food
                wait times by introducing a next-generation food truck concept.
                The solution featured a digital platform that allowed customers
                to pre-order finish-to-eat meals from a curated daily menu. This
                model enhanced convenience and operational efficiency, offering
                a seamless and timely dining experience. The program provided
                hands-on experience in startup development, user-focused design,
                and agile collaboration within a business-oriented environment.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Chula Legaltech</h3>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                Chulalongkorn University, Tilleke & Gibbins, and Thailand
                Institute of Justice (Public Organization) are collaborating to
                run Chula LegalTech Year —an in-depth LegalTech course and
                competition on creating innovative legal technology See Less
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Full Stack Web Developer & IT Consultant of Wilify</h3>
                  <h4>Dec 2022 - Jan 2023 (Year 4)</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Developed
                      full-stack web applications for Wilify - An online
                      will-making platform, built using React (UI), Express.js,
                      Node.js (API), and AWS for data storage.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Designed system
                      architecture and workflows for both platforms.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Collaborated with a
                      cross-functional team of senior-year students in law,
                      accounting, business, ensuring the platform met both
                      technical and legal requirements.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Served as an IT
                      Consultant, advising on tech stack selection and best
                      practices for business scalability.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Presented the
                      projects to judges and stakeholders, earning a certificate
                      of participation.
                    </span>
                  </li>
                </ul>
                <Badges
                  list={wilify}
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
                  <h3>
                    Full Stack Web Developer & IT Consultant of Friendly Tax
                  </h3>
                  <h4>Dec 2023 - Feb 2024 (Year 5)</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Developed
                      full-stack web applications for Friendly Tax - A platform
                      for SMEs to manage tax deductions, developed using React
                      (TypeScript), Express.js, Node.js, and AWS.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Designed system
                      architecture and workflows for both platforms.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Collaborated with a
                      cross-functional team of senior-year students in law,
                      accounting, business, ensuring the platform met both
                      technical and legal requirements.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Served as an IT
                      Consultant, advising on tech stack selection and best
                      practices for business scalability.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Presented the
                      projects to judges and stakeholders, earning a certificate
                      of participation.
                    </span>
                  </li>
                </ul>
                <Badges
                  list={friendlytax}
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
                <h3>
                  2024 International Capstone Design Project for Smart Mobility
                  (ICDP)
                </h3>
                <h4>Jan 2024</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                The International Collaborative Development Program (ICDP) is a
                joint initiative between our university and a partner
                institution from Korea, aimed at fostering cross-cultural
                collaboration and innovation in smart technology. This 10-day
                workshop brought together Thai and Korean students to work on
                interdisciplinary projects related to emerging technologies,
                including basic artificial intelligence, autonomous systems,
                smart care, and smart mobility. As part of the program, our team
                developed and presented a project titled Capable Taxi—an
                autonomous transportation solution designed specifically for
                individuals with disabilities. The system verifies users via
                their PWD (Persons with Disabilities) ID card and includes a
                specialized safety platform to assist with boarding and
                traveling securely. The ICDP workshop provided valuable hands-on
                experience in robotics, inclusive design, and international
                teamwork.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>
                  Master of Ceremonies at Engineering International Party 2023
                </h3>
                <h4>Aug 2023</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                The Engineering International Party is a cultural exchange event
                designed to promote inclusivity, friendship, and global
                understanding among students from various countries. I had the
                honor of serving as the Master of Ceremonies for this event,
                where my role involved guiding the program, entertaining the
                audience, and fostering connections among attendees.
                Participants from countries such as Bhutan, Myanmar, Pakistan,
                and India joined the celebration, making it a vibrant platform
                for intercultural interaction. Through this experience, I
                facilitated the sharing of Thai traditions while also learning
                about the diverse cultures represented, contributing to a warm
                and memorable event atmosphere.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>ICIT Google App Sheet Hackathon 2023</h3>
                <h4>Dec 2022 - Feb 2023</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                This activity was part of a university-wide competition aimed at
                identifying and solving internal challenges within the academic
                environment through the use of digital tools. Participants were
                tasked with developing practical, technology-driven solutions to
                address real-world issues faced by students, faculty, and
                administrative units. My team focused on enhancing interfaculty
                collaboration, a commonly overlooked challenge within the
                university. Using Appsheet, a no-code application development
                platform, we designed a solution to streamline communication and
                workflow between different departments. Our project was
                recognized for its impact and feasibility, earning 3rd prize
                from the judging committee. This experience emphasized the
                importance of cross-functional insight, problem-solving, and the
                effective application of digital tools to drive institutional
                improvement.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Lead Organizer of Computer Boost Camp 2023</h3>
                <h4>Jun 2023 - Jul 2023</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                The Computer Boot Camp is an educational outreach program
                jointly organized by the Computer Club and the Computer
                Engineering department, aimed at equipping new students with
                fundamental programming skills. Designed to ease the transition
                into the computer engineering curriculum, the camp offers
                structured instruction in Python—widely regarded as a
                foundational language in the field—along with an introduction to
                basic bash commands. The program is tailored to accommodate
                varying skill levels, with sessions divided into Beginner and
                Intermediate tracks. By focusing on practical, hands-on
                learning, the camp plays a vital role in building confidence and
                competence among incoming students.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Woman Thailand Cyber Top Talent 2023</h3>
                <h4>Dec 2023</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                Women Thailand Cyber Top Talent (WTCTT) 2023 is a national-level
                cybersecurity competition designed to promote and recognize the
                talents of female students in the field of cybersecurity. The
                competition challenges participants with real-world problems
                across multiple domains, including digital forensics, web
                application exploitation, reverse engineering, network security,
                mobile security, and cryptography. In our first year of
                participation, my teammate Napawan Nakasuwan and I dedicated
                significant time to prepare across all key topics. Although we
                did not advance to the final round, we achieved an impressive
                4th place ranking in the senior division at the national level.
                This experience strengthened our technical skills, fostered
                teamwork under pressure, and deepened our passion for
                cybersecurity and ethical hacking.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Charoen Pokphand Foods PCL (CPF)</h3>
                <h4>Dec 2024 - Jan 2025</h4>
                <h5>Bangkok, Thailand</h5>
              </span>
              <p>
                The CPF Young Software Developer Program or CPF YSDP is a
                combination of practical business problems from various types of
                CPF business and inserted into related courses according to the
                basics and suitability of each subject. Each campus is included
                in the final education plan for the 2021 academic year and is
                planned to be implemented in total with 4 campuses, 2 courses
                per campus, for a total of 8 courses, including Project
                Management. Select topic in Computer Science, Web Technology and
                Web Services, Decision Support and Business Intelligent Systems,
                Digital Image Processing, Software Testing and Verification,
                Database System, and Information Retrieval System
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Project Manager of LogoH</h3>
                  <h4>Oct - Nov 2023</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Led a team of
                      developers in the CPF Young Software Developer Program to
                      create AI-powered solutions for trademark logo detection
                      (LogoH).
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Developed back-end
                      solutions in Image Augmentation, and conducted research on
                      OpenCV and AI for enhanced image processing and logo
                      detection.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Created an
                      AI-driven trademark logo detection system using Python,
                      HTML and CSS, earning the Award of Excellence in the
                      competition.
                    </span>
                  </li>
                </ul>
                <Badges
                  list={logoh}
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
                  <h3>Project Manager of Animed</h3>
                  <h4>Jan - Mar 2023</h4>
                </span>
                <ul className={career.list}>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Led a team of
                      developers in the CPF Young Software Developer Program to
                      create AI-powered solutions for farm animal drug
                      identification (Animed).
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Developed back-end
                      solutions in Image Augmentation, and conducted research on
                      OpenCV and AI for enhanced image processing and drug
                      detection.
                    </span>
                  </li>
                  <li>
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Designed a mobile
                      app for farm animal drug identification using Python and
                      Kotlin, helping the team secure 100,000 THB in faculty
                      funding.
                    </span>
                  </li>
                </ul>
                <Badges
                  list={animed}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
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

const wilify = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "express", name: "Express", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "tailwindcss", name: "Tailwindcss", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
];

const friendlytax = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "typescript", name: "Typescript", type: "devicon" },
  { key: "express", name: "Express", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "tailwindcss", name: "Tailwindcss", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
];

const animed = [
  { key: "python", name: "Python", type: "devicon" },
  { key: "kotlin", name: "Kotlin", type: "devicon" },
  { key: "tensorflow", name: "Tensorflow", type: "devicon" },
  { key: "opencv", name: "OpenCV", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];

const logoh = [
  { key: "python", name: "Python", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "tensorflow", name: "Tensorflow", type: "devicon" },
  { key: "opencv", name: "OpenCV", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];
