// import { useState } from "react";
// import FetchData from "./Components/FetchData"; // ✅ Correct import path

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Function to fetch user data (returns a Promise)
//   function fetchUser() {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((response) => response.json())
//       .then((data) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//         setLoading(false);
//       });
//   }

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h2>React Promise Example</h2>

//       {/* Fetch API button */}
//       <button onClick={fetchUser} disabled={loading}>
//         {loading ? "Loading..." : "Fetch User Data"}
//       </button>

//       {/* Display fetched user info */}
//       {user && (
//         <div style={{ marginTop: "1rem" }}>
//           <p>
//             <strong>Name:</strong> {user.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//         </div>
//       )}

//       {/* Promise-based FetchData component */}
//       <FetchData />
//     </div>
//   );
// }

// export default App;


import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
