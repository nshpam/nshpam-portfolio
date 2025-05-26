import FeaturedProject from "../../blocks/projects/featured";
import Link from "next/link";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";
import Badges from "../../utils/badge.list.util";
import Icon from "../../utils/icon.util";
import SectionTitle from "../../blocks/section.title.block";

import css from "../../../styles/sections/projects/featured.module.scss";
import content from "../../../content/projects/featured.json";
import BadgesBlock from "../../blocks/about.badges.block";
import about from "../../../styles/sections/index/about.module.scss";
import button from "../../../styles/blocks/button.module.scss";

export default function FeaturedProjects() {
  return (
    <Section classProp={css.hasBg}>
      <Container spacing={"verticalXXXXLrg"}>
        <SectionTitle
          title="Featured Projects"
          preTitle="Software Engineering"
          subTitle="Built with modern stacks, scalable architecture, and performance in mind."
        />{" "}
        {content.map((data, index) => {
          return (
            <Link href={data.href} target="_blank">
              <FeaturedProject content={data} index={index} key={index} />
            </Link>
          );
        })}
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

      {/* <button
        className={`button ${button.primary}`}
        onClick={() => (window.location = "mailto:sirapa.sangna@gmail.com")}
      >
        more project
      </button> */}
      {/* <section className={` ${about.container2}`}>
        <div className={about.copy}>
          <BadgesBlock
            title="Software I love to work with"
            copy="With over 20 years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time."
            list={software}
            block="software"
            fullContainer="fullContainer"
            icon="grid-2-plus"
            containerClass={about.container}
            headerIcon={about.icon}
          />
          <BadgesBlock
            title="Technologies I love to build with"
            copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
            list={tech}
            block="tech"
            fullContainer="fullContainer"
            icon="laptop-code"
            containerClass={about.container}
            headerIcon={about.icon}
          />
        </div>
      </section> */}
    </Section>
  );
}

const software = [
  { key: "photoshop", name: "Photoshop", type: "devicon" },
  { key: "illustrator", name: "Illustrator", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "mailbox", name: "Postman", type: "fas" },
  { key: "computer-mouse", name: "Click Up", type: "fas" },
  { key: "list-music", name: "Ableton", type: "fas" },
  { key: "aftereffects", name: "After Effects", type: "devicon" },
  { key: "premierepro", name: "Premiere Pro", type: "devicon" },
];

const tech = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "google", name: "GA4/GTM", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
