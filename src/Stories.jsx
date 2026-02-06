// import React, { useEffect, useState } from 'react'


// function Stories() {
// var [data,setData]=useState([])
// async function fetchData() {
//     var result=await fetch("https://69281efeb35b4ffc501454ca.mockapi.io/blog")
//     var myResult=await result.json()
//     setData(myResult)
// }
// useEffect(()=>{fetchData()},[])

//     return(
// <div>
//         {
//             data.map((item)=>{
//                 return(
//                     <div>
//                         <h1>{item.myTitle.split(" ").slice(0,2)}</h1>
//                         <h5>{item.myDescription.split(" ").slice(0,5)}</h5>
//                     </div>
//                 )
//             })
//         }

//     </div>
//     )
// }
// export default Stories

// import React, { useEffect, useState } from 'react';
// import Sidebar from "./Sidebar";
// import './Stories.css';
// import { CgProfile } from "react-icons/cg";

// function Stories() {
//   const [data, setData] = useState([]);

//   async function fetchData() {
//     const result = await fetch("https://698564956964f10bf2530069.mockapi.io/blog");
//     const myResult = await result.json();
//     setData(myResult);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="stories-page">

      

//       <div className="stories-container">
//         {data.map((item) => (
//           <div className="story-card" key={item.id}>

//             {/* Top user info */}
//             <div className="story-header">
//               <CgProfile className="profile-icon" />
//               <div>
//                 <h4 className="author-name">pravee</h4>
//                 <span className="story-meta">
//                   {new Date().toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric"
//                   })}
//                   · {Math.floor(item.myDescription.split(" ").length / 20)} min read
//                 </span>
//               </div>
//             </div>

//             {/* Title */}
//             <h2 className="story-title">
//               {item.myTitle.split(" ").slice(0, 12).join(" ")}
//             </h2>

//             {/* Description */}
//             <p className="story-description">
//               {item.myDescription.split(" ").slice(0, 25).join(" ")}...
//             </p>

//             {/* Tag + Read more */}
//             <div className="story-footer">
//               <span className="story-tag">Technology</span>

//               <button className="read-more-btn">
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Stories;


// import React, { useEffect, useState } from 'react';
// import Sidebar from "./Sidebar";
// import './Stories.css';
// import { CgProfile } from "react-icons/cg";

// function Stories() {
//   const [data, setData] = useState([]);

//   async function fetchData() {
//     const result = await fetch("https://698564956964f10bf2530069.mockapi.io/blog");
//     const myResult = await result.json();
//     setData(myResult);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="stories-page">
      
     
//       <h1 className="stories-page-heading">Welcome to Stories</h1>

     
//       <div className="stories-container">
//         {data.map((item) => (
//           <div className="story-card" key={item.id}>

//             <div className="story-header">
//               <CgProfile className="profile-icon" />
//               <div>
//                 <h4 className="author-name">pravee</h4>
//                 <span className="story-meta">
//                   {new Date().toLocaleDateString("en-US", {
//                     month: "short",
//                     day: "numeric",
//                     year: "numeric"
//                   })}
//                   · {Math.floor(item.myDescription.split(" ").length / 20)} min read
//                 </span>
//               </div>
//             </div>

//             <h2 className="story-title">
//               {item.myTitle.split(" ").slice(0, 12).join(" ")}
//             </h2>

    
//             <p className="story-description">
//               {item.myDescription.split(" ").slice(0, 25).join(" ")}...
//             </p>

         
//             <div className="story-footer">
//               <span className="story-tag">Technology</span>

//               <button className="read-more-btn">
//                 Read More
//               </button>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Stories;

import React, { useEffect, useState } from "react";
import "./Stories.css";
import { CgProfile } from "react-icons/cg";

function Stories() {
  const [data, setData] = useState([]);

  // Fetch stories from API
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://698564956964f10bf2530069.mockapi.io/blog"
      );
      const stories = await response.json();
      setData(stories);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="stories-wrapper">
      <div className="stories-main">
        {/* PAGE HEADING */}
        <h2 className="stories-heading">Your Stories</h2>

        {/* STORIES LIST */}
        <div className="stories-list">
          {data.length === 0 ? (
            <p className="empty-msg">No saved stories yet</p>
          ) : (
            data.map((story) => (
              <div className="story-card" key={story.id}>
                {/* Author Info */}
                <div className="story-header">
                  <CgProfile className="profile-icon" />
                  <div>
                    <h4 className="author-name">pravee</h4>
                    <span className="story-meta">
                      {new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      ·{" "}
                      {Math.max(
                        1,
                        Math.floor(story.myDescription.split(" ").length / 20)
                      )}{" "}
                      min read
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="story-title">
                  {story.myTitle.split(" ").slice(0, 12).join(" ")}
                </h3>

                {/* Description */}
                <p className="story-description">
                  {story.myDescription.split(" ").slice(0, 25).join(" ")}...
                </p>

                {/* Footer */}
                <div className="story-footer">
                  <span className="story-tag">Technology</span>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Stories;