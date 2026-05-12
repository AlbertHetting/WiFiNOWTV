import "./CommentSection.css";
import CommentArrow from "./CommentArrow";

export default function CommentSection() {
  return (
    <div className="CommentSectionCon">
      <section className="CommentNumber">
        <h3>4 Comments</h3>
      </section>

      <section className="CommentSectionLower">
        <div className="Comment">
          <div className="EnterComment">
            <input type="text" placeholder="Join the discussion"></input>
            <button type="submit" className="CommentLine">
              <CommentArrow />
            </button>
          </div>

          <div className="CommentBlock">
            <div className="TopComment">
              <div className="PerCommentCon">
                <div className="ProfilePicture">
                  <img
                    src="../ProfileImages/Profile4.jpg"
                    alt=""
                    className="ProfileImage"
                  />
                </div>

                <div className="TextCommentCon">
                  <h4>Irvind</h4>
                  <p>
                    Great video, love the subjects! Overall I’m excited for what
                    the future may bring for WiFi. Just one question, when you
                    say that the new standards will change 802.11 what do you
                    mean?
                  </p>
                </div>
              </div>

              <div className="ReplyComment">
                <div className="Threading">
                  <img
                    src="../icons/ThreadingV4.svg"
                    alt=""
                    className="ThreadingImage"
                  />
                </div>

                <div className="replytreading">
                  <div className="ProfilePicture">
                    <img
                      src="../ProfileImages/Profile5.jpg"
                      alt=""
                      className="ProfileImagereply"
                    />
                  </div>
                  <div className="ReplyText">
                    <h4>Michael</h4>
                    <p>
                      Great video, love the subjects! Overall I’m excited for
                      what the future may bring for WiFi. Just one question,
                      when you say that the new standards will change 802.11
                      what do you mean?{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="Percommentspacer">
                <div className="PerCommentCon">
                  <div className="ProfilePicture">
                    <img
                      src="../ProfileImages/Profile6.jpg"
                      alt=""
                      className="ProfileImage"
                    />
                  </div>

                  <div className="TextCommentCon">
                    <h4>Edgar</h4>
                    <p>
                      Great video, love the subjects! Overall I’m excited for
                      what the future may bring for WiFi. Just one question,
                      when you say that the new standards will change 802.11
                      what do you mean?
                    </p>
                  </div>
                </div>
              </div>

              <div className="Percommentspacer">
                <div className="PerCommentCon">
                  <div className="ProfilePicture">
                    <img
                      src="../ProfileImages/Profile7.jpg"
                      alt=""
                      className="ProfileImage"
                    />
                  </div>

                  <div className="TextCommentCon">
                    <h4>Jean</h4>
                    <p>
                      Great video, love the subjects! Overall I’m excited for
                      what the future may bring for WiFi. Just one question,
                      when you say that the new standards will change 802.11
                      what do you mean?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
