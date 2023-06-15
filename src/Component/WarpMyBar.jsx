import { useEffect, useState } from "react";
import MyAppBar2 from "./MyAppBar2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
function WarpMyBar(props) {
  const [color, setColor] = useState("");
  const [long, setLong] = useState("");
  const navigate = useNavigate();

  function showMsg() {
    navigate("MessageManager");
  }
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_BASIC_URL_SERVER}/users/alarmUser`,
        { id: localStorage.id }
      )
      .then((res) => {
        console.log(res);
        if (res.data.docs.length) {
          setLong(res.data.docs.length);
          setColor("red");
          localStorage.setItem("msg", JSON.stringify(res.data.docs));
        }
      });
  }, []);

  let bodyBar = (
    <>
      <Button
        float="left"
        sx={{ float: "left" }}
        color="inherit"
        onClick={() => {
          navigate("/HomePageMain");
        }}
      >
        Event organization
      </Button>
      <Box></Box>
      <Button
        float="left"
        sx={{ float: "left" }}
        color="inherit"
        onClick={() => {
          localStorage.clear();
          document.cookie.split(";").forEach(function (c) {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(
                /=.*/,
                "=;expires=" + new Date().toUTCString() + ";path=/"
              );
            Swal.fire({
              title: "יציאה מהחשבון הזה ..",
              showDenyButton: true,
              denyButtonText: "צא !",
              confirmButtonText: `הישאר !`,
            }).then((result) => {
              if (result.isDenied) {
                localStorage.clear();
                document.cookie.split(";").forEach(function (c) {
                  document.cookie = c
                    .replace(/^ +/, "")
                    .replace(
                      /=.*/,
                      "=;expires=" + new Date().toUTCString() + ";path=/"
                    );
                });
                navigate("../");
              }
            });
          });
        }}
      >
        Log Out
      </Button>
      <Button
        sx={{ float: "left" }}
        color="inherit"
        onClick={() => {
          navigate("../Admin");
        }}
      >
        Admin Login
      </Button>
      <i
        onClick={showMsg}
        className="fa fa-bell badge-wrapper"
        style={{ fontSize: "24px", color: color, position: "relative" }}
      >
        <span
          className="badge badge-secondary"
          style={{
            fontSize: "12px",
            borderRadius: "50%",
            width: "2px",
            height: "2px",
            position: "absolute",
            top: 0,
            right: "1px",
            display: "inline-block",
          }}
        >
          {long ? long : ""}
        </span>
      </i>
    </>
  );

  return (
    <>
      <MyAppBar2 bodyBodyMyAppBar={props.body} bodyBar={bodyBar} />
    </>
  );
}

export default WarpMyBar;
