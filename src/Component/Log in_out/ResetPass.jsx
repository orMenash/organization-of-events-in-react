import { useRef } from "react";
import axios from "axios";

export default function ResetPass () {
  const nameRef = useRef("");
  const FumRef = useRef("");
  function Send(event) {
    event.preventDefault();
    console.log("ניסיון שליחה");
    axios
      .post("http://localhost:3010/users/forgetpass", {
        name: nameRef.current.value,
        fum: FumRef.current.value,
      })
      .then((res) => {
        alert("סיסמתך תישלח במייל בקרוב .. ")
      })
      .catch((e) => {
        console.log(e);
        alert("נתקלנו בבעיה, נסה שוב, או צור קשר עם מנהל המערכת ..")
      });
  }
  return (
    <div id="formPas">
      <div className="form-gap" />
      <div className="container">
        <div className="row" style={{ width: "100%", marginRight: "45%" }}>
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="text-center">
                  <h3>
                    <i className="fa fa-lock fa-4x" />
                  </h3>
                  <h2 className="text-center">אתה כאן כי שחכת סיסמא .. </h2>
                  <p>
                    שלח הודעה למנהל המערכת, לאחר זיהוי תקבל את סיסמתך למייל ..
                  </p>
                  <p>הקפד על שם ומשפחה זהים לאלו שנרשמת בעבר ..</p>
                  <div className="panel-body">
                    <form
                      onSubmit={Send}
                      id="register-form"
                      role="form"
                      autoComplete="off"
                      className="form"
                      method="post"
                    >
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="glyphicon glyphicon-envelope color-blue" />
                          </span>
                          <input
                            id="name"
                            name="name"
                            placeholder="שם פרטי"
                            className="form-control"
                            type="text"
                            ref={nameRef}
                            required
                          />
                          <input
                            id="fum"
                            name="fum"
                            placeholder="שם משפחה"
                            className="form-control"
                            type="text"
                            ref={FumRef}
                            required
                          />
                        </div>
                      </div>
                      <br />
                      <div className="form-group">
                        <input
                          name="recover-submit"
                          className="btn btn-lg btn-primary btn-block"
                          defaultValue="Reset Password"
                          type="submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
