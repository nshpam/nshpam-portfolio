import Container from "../structure/container";

// Section scss
import section from "../../styles/blocks/section.title.module.scss";

/**
 * Section header component
 *
 * @param {string} * strings for header
 * @returns
 */
export default function SectionTitle({ id, preTitle, title, subTitle }) {
  return (
    <>
      <div className={`${section.title}`} id={id}>
        <h4>{preTitle}</h4>
        <h2>{title}</h2>
        <p className="subtitle">{subTitle}</p>
      </div>
    </>
  );
}
