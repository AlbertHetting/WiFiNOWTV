import "./CommentSection.css";
import CommentArrow from "./CommentArrow";

export default function CommentSection() {
  return (
    <div className="CommentSectionCon">
      <section className="CommentNumber">
        <h3>X Comments</h3>
      </section>

      <section className="CommentSectionLower">
        <div className="Comment">
          <div className="EnterComment">
          <input type="text" placeholder="Join the discussion"></input>
          <button type="submit" className="CommentLine">
            <CommentArrow/>
          </button>
          </div>

          <div className="CommentBlock">

          </div>

        </div>
      </section>
    </div>
  );
}
