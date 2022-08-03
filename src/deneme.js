// import React from "react";
// import ReactPlayer from "react-player";
// import { useParams, NavLink, Link, Outlet } from "react-router-dom";

// const Deneme = ({ items, theme }) => {
//   const params = useParams();
//   return (
//     <>
//       {items.map((item) => {
//         if (item?.id === params?.id) {
//           console.log(item);
//           console.log(params);
//           return (
//             <div className={`col-8 ${theme}  `}>
//               {/* ########################################## */}
//               {/*  PLAYER KISMI  KISMI */}
//               {/* ########################################## */}

//               <div
//                 style={{
//                   display: "flex",
//                   margin: "10vh",
//                   border: "1px solid #ccc",
//                   width: "100%",
//                     height: "100%",
//                 }}
//               >
//                 <ReactPlayer
//                   url={`https://www.youtube.com/watch?v=${item.id}&ab_channel=${item.snippet.channelTitle}`}
//                   title="YouTube video player"
//                   controls={true}
//                   playing={true}
//                   width="100%"
//                   height="75vh"
//                   frameBorder="1"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{
//                     borderRadius: "5px",
//                     margin: "1vh",
//                     padding: "1vh",
//                   }}
//                 />

//                 {/* ########################################## */}
//                 {/* DETAY KISMI */}
//                 {/* ########################################## */}
//               </div>
//               <div
//                 className={` ${theme}`}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   margin: "4vh 0",
//                 }}
//               >
//                 <img
//                   className={` ${theme}`}
//                   src={item.snippet.thumbnails.default.url}
//                   alt={item.snippet.channelTitle}
//                   style={{
//                     width: "5rem",
//                     height: "5rem",
//                     borderRadius: "50%",
//                   }}
//                 />
//               </div>
//             </div>
//           );
//         }
//       })}
//     </>
//   );
// };

// export default Deneme;
// //   <div
// //                   className={` ${theme}`}
// //                   style={{
// //                     height: "100%",
// //                     width: "100%",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     margin: "0 3vh",
// //                   }}
// //                 >
// //                   <div className={` ${theme}`}>
// //                     <h2
// //                       className={` ${theme}`}
// //                       style={{
// //                         display: "flex",
// //                         justifyContent: "",
// //                         alignItems: "center",
// //                         flexDirection: "column",
// //                       }}
// //                     >
// //                       {item.snippet.localized.title}
// //                     </h2>

// //                     <h6
// //                       className={` ${theme}`}
// //                       style={{
// //                         width: "100%",
// //                         height: "100%",
// //                         display: "flex",
// //                         justifyContent: "start",
// //                         alignItems: "center",
// //                         margin: "1vh 10px",
// //                       }}
// //                     >
// //                       <NavLink
// //                         to={`${item.snippet.channelTitle}`}
// //                         className={` ${theme}`}
// //                       >
// //                         {" "}
// //                         {item.snippet.channelTitle}
// //                       </NavLink>
// //                       <span
// //                         className={` ${theme}`}
// //                         style={{
// //                           margin: "3vh 10px",

// //                           padding: "0 10px",
// //                           display: "flex",
// //                           alignItems: "center",
// //                           justifyContent: "center",
// //                         }}
// //                       >
// //                         {Math.floor(Math.random() * 9543246857).toLocaleString(
// //                           "TR"
// //                         )}{" "}
// //                       </span>

// //                       <div
// //                         className={` ${theme}`}
// //                         style={{
// //                           display: "flex",
// //                           alignItems: "center",
// //                           justifyContent: "center",
// //                         }}
// //                       >
// //                         <p
// //                           className={`${theme}`}
// //                           style={{
// //                             margin: "0 10px",
// //                             padding: "4px",

// //                             borderRadius: "50%",

// //                             display: "flex",
// //                             alignItems: "center",
// //                             justifyContent: "center",
// //                           }}
// //                         ></p>
// //                         {/* Nokta Kısmı */}
// //                         <p
// //                           className={` ${theme}`}
// //                           style={{
// //                             margin: "0 10px",
// //                             padding: "0 10px",
// //                             display: "flex",
// //                             alignItems: "center",
// //                             justifyContent: "center",
// //                           }}
// //                         >
// //                           {item.snippet.publishedAt}{" "}
// //                         </p>
// //                       </div>
// //                     </h6>
// //                   </div>
// //                 </div>
