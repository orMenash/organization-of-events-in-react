// import { React, useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useCookies } from "react-cookie";
// import io from "socket.io-client";
// import { useNavigate } from "react-router-dom";
// import Chat1 from "../../chat/Chat1";
// import Chat2 from "../../chat/Char2";
// import { Box, Paper } from "@mui/material";
// import "./chatOb.css"


// const socketIOClient = io(process.env.REACT_APP_BASIC_URL_SERVER);

// export default (props) => {
//   const navigate = useNavigate();
//   console.log(props);

//   const { eventClick } = props;

//   useEffect(() => {
//     socketIOClient.on(
//       "live On React",
//       (message, UserName, idEvent, timeMass) => {
//         if (idEvent === eventClick.NameEvent) {
//           setMgs((current) => [
//             ...current,
//             { messages: message, from: UserName, timeMass: timeMass },
//           ]);
//         }
//       }
//     );
//   }, []);

//   const [cookiesUserName, setcookiesUserName] = useCookies(["UserName"]);

//   const refValue = useRef();
//   const [arrMes, setMgs] = useState([]);

//   async function getData() {
//     if (props.eventClick) {
//       const status200 = await axios.post(
//         `${process.env.REACT_APP_BASIC_URL_SERVER}/event/EventChat`,
//         { IdEvent: eventClick.NameEvent }
//       );
//       console.log(status200);
//       setMgs(status200.data.TakeIt[0].EventMessages);
//     }
//   }

//   async function sendComm() {
//     // console.log(eventClick.NameEvent);
//     const d = Date.now() + 2 * 60 * 60 * 1000;
//     let text = new Date(d);

//     socketIOClient.emit(
//       "live On",
//       refValue.current.value,
//       cookiesUserName.UserName,
//       eventClick.NameEvent,
//       text
//     );
//     const status200 = await axios.post(
//      `${process.env.REACT_APP_BASIC_URL_SERVER}/event/EventChat`,
//       {
//         IdEvent: eventClick.NameEvent,
//         from: cookiesUserName.UserName,
//         messages: refValue.current.value,
//       }
//     );
//   }

//   useEffect(() => {
//     getData();
//   }, []);
//   useEffect(() => {
//     !eventClick && navigate("../ShowAllEvents");
//   });

//   if (props.eventClick) {
//     return (
//       <>
//         <Box
//           sx={{
//             display: "flex",
//             position: "relative",
//             height: "100vh",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",

//             "& > :not(style)": {
//               m: 1,
//               width: 900,
//               minHeight: 100,
//             },
//           }}
//         >
//           {/* <div className="fixedContainer">
//             <div id="h4_ChatObEvent">
//               <h1>{props.eventClick.NameEvent}</h1>
//               <h2>{props.eventClick.Date.slice(0, 10)}</h2>
//             </div>
//           </div> */}

//           <Paper sx={{ overflow: "scroll", maxHeight: "70%" }} elevation={2}>
//             <ol style={{ display: "flex", flexDirection: "column" }} dir="rtl">
//               {arrMes.map((item, index) => {
//                 // console.log({item});
//                 if (item.from) {
//                   if (cookiesUserName.UserName == item.from) {
//                     return (
//                       <Chat1
//                         key={index}
//                         text={item.messages}
//                         time={
//                           item.timeMass.substring(0, 10) +
//                           " " +
//                           item.timeMass.substring(11, 19)
//                         }
//                         from={item.from}
//                       />
//                     );
//                   } else if (cookiesUserName.UserName != item.from) {
//                     return (
//                       <Chat2
//                         key={index}
//                         text={item.messages}
//                         time={
//                           item.timeMass.substring(0, 10) +
//                           " " +
//                           item.timeMass.substring(11, 19)
//                         }
//                         from={item.from}
//                       />
//                     );
//                   }
//                 } else {
//                   return <p>אין תגובות עדיין !</p>;
//                 }
//               })}
//             </ol>
//             {props.eventClick.Active && (
//               <div id="inputSendComm">
//                 <label htmlFor="Ab">
//                   שלח תגובה ..
//                   <input type="text" name="Ab" ref={refValue} />
//                 </label>
//                 <button
//                   onClick={() => {
//                     sendComm();
//                     refValue.current.value = "";
//                   }}
//                 >
//                   תגובה{" "}
//                 </button>
//               </div>
//             )}
//           </Paper>
//         </Box>
//       </>
//     );
//   } else {
//     navigate("");
//   }
// };
