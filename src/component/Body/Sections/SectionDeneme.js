// import React from "react";
// import ReactPlayer from "react-player";
// import { NavLink, Link, Outlet, useParams } from "react-router-dom";

// const SectionDeneme = ({ items }) => {
//   const useP = useParams();
//   console.log(useP);

//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {items.map((item) => (
//           <div
//             style={{
//               width: "23em",
//               height: "20%",
//               margin: " .5% .75% ",
//               // padding: "0 .1%",
//               // backgroundColor: "red",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//             key={item.id}
//           >
//             {/* ########################################## */}
//             {/* PLAYER KISMI ve Linkleme*/}
//             {/* ########################################## */}

//             <Link to={item.id}>
//               <ReactPlayer
//                 url={`https://www.youtube.com/watch?v=${item.id}&ab_channel=${item.snippet.channelTitle}`}
//                 title="YouTube video player"
//                 controls={true}
//                 width="21rem"
//                 height="15em"
//                 frameBorder="1"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//               {/* ########################################## */}
//               {/* VİDEO DETAY KISMI */}
//               {/* ########################################## */}
//               <div style={{ padding: "0 2%" }}>
//                 <h4
//                   style={{
//                     fontSize: "1.3rem",
//                     padding: "0.5%",
//                   }}
//                 >
//                   {item.snippet.title}
//                 </h4>
//                 <h5
//                   style={{
//                     fontSize: "1rem",
//                     // backgroundColor: "green",
//                     display: "flex",
//                     flexDirection: "row",
//                     padding: "2%",
//                     width: "100%",
//                   }}
//                 >
//                   <span>{item.snippet.channelTitle} </span>

//                   <div
//                     style={{
//                       fontSize: ".81rem",
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                     }}
//                   >
//                     <p
//                       style={{
//                         height: "1px",
//                         width: "1px",
//                         margin: "0 1rem",
//                         padding: " 5px",
//                         backgroundColor: "black",
//                         borderRadius: "50% ",
//                       }}
//                     ></p>
//                     <p
//                       style={{
//                         margin: "0",
//                       }}
//                     >
                     
//                     </p>
//                   </div>
//                 </h5>
//               </div>
//               <Outlet />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionDeneme;
