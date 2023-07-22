import illustrationEditorDesktop from "../../../assets/img/main/illustration-editor-desktop.svg";
import illustrationEditorMobile from "../../../assets/img/main/illustration-editor-mobile.svg";
import * as C from "./style";

const SectionDesigned = () => {
  return (
    <C.SectionDesigned>
      <h1 className="designed__title">Designed for the future</h1>
      <div className="designed__container">
        <div className="designed__description">
          <div className="designed__description-item">
            <h2>Introducing an extensible editor</h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="designed__description-item">
            <h2>Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <figure className="designed__image">
          <img
            src={illustrationEditorDesktop}
            alt="illustration-editor-desktop"
            className="image-desktop"
          />
          <img
            src={illustrationEditorMobile}
            alt="illustration-editor-mobile"
            className="image-mobile"
          />
        </figure>
      </div>
    </C.SectionDesigned>
  );
};

export default SectionDesigned;
