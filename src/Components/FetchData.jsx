// import React, { useEffect, useState } from "react";

// function FetchData() {
//   const [message, setMessage] = useState("Loading...");

//   function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = true; // change to false to test reject
//         if (success) resolve("Data fetched successfully!");
//         else reject("Error fetching data");
//       }, 1000);
//     });
//   }

//   useEffect(() => {
//     fetchData()
//       .then((result) => setMessage(result))
//       .catch((error) => setMessage(error));
//   }, []);

//   return (
//     <div style={{ marginTop: "2rem" }}>
//       <h3>{message}</h3>
//     </div>
//   );
// }

// export default FetchData;
