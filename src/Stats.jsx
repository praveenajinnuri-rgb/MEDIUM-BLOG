// import React, { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   BarChart,
//   Bar,
// } from "recharts";

// import "./Stats.css";

// function Stats() {
//   const [data, setData] = useState([]);
//   const [pieData, setPieData] = useState([]);

//   async function fetchData() {
//     const res = await fetch(
//       "https://698564956964f10bf2530069.mockapi.io/medium"
//     );
//     const json = await res.json();

//     const withStats = json.map((item) => ({
//       title: item.myTitle,
//       views: Math.floor(Math.random() * 1000),
//       reads: Math.floor(Math.random() * 500),
//       likes: Math.floor(Math.random() * 200),
//       date: item.createdAt?.split("T")[0] || "2025-01-01",
//     }));

//     setData(withStats);

//     const totalBlogs = json.length;
//     const addedToday = json.filter(
//       (b) => b.createdAt?.split("T")[0] === new Date().toISOString().split("T")[0]
//     ).length;

//     setPieData([
//       { name: "Total Blogs", value: totalBlogs },
//       { name: "Blogs Added Today", value: addedToday },
//     ]);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const COLORS = ["#0088FE", "#00C49F"];

//   return (
//     <div className="stats-wrapper">
//       <h1 className="stats-heading">Your Stats</h1>

//       {/* PIE + BAR CHART SIDE BY SIDE */}
//       <div className="chart-row">
//         <div className="chart-box">
//           <h3>Library Overview (Pie)</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 fill="#8884d8"
//                 label
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend verticalAlign="bottom" height={36} />
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-box">
//           <h3>Views Per Blog (Bar)</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="title" tick={{ fontSize: 12 }} />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="views" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* LINE CHARTS */}
//       <div className="charts-container">
//         <div className="chart-box">
//           <h3>Views Over Time</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="views" stroke="#000" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-box">
//           <h3>Reads Over Time</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="reads" stroke="#0a7" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-box">
//           <h3>Likes Over Time</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="likes" stroke="#c00" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* TABLE */}
//       <h2 className="table-heading">Article Performance</h2>
//       <table className="stats-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Views</th>
//             <th>Reads</th>
//             <th>Likes</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, i) => (
//             <tr key={i}>
//               <td>{row.title}</td>
//               <td>{row.views}</td>
//               <td>{row.reads}</td>
//               <td>{row.likes}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Stats;


// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
//   BarChart,
//   Bar,
// } from "recharts";
// import "./Stats.css";

// function Stats() {
 
//   const [data] = useState([
//     {
//       title: "React Basics",
//       views: 820,
//       reads: 430,
//       likes: 120,
//       date: "2025-01-10",
//     },
//     {
//       title: "JavaScript Tips",
//       views: 650,
//       reads: 380,
//       likes: 95,
//       date: "2025-01-12",
//     },
//     {
//       title: "CSS Tricks",
//       views: 480,
//       reads: 290,
//       likes: 70,
//       date: "2025-01-14",
//     },
//     {
//       title: "MERN Stack Guide",
//       views: 950,
//       reads: 520,
//       likes: 180,
//       date: "2025-01-16",
//     },
//   ]);


//   const pieData = [
//     { name: "Total Blogs", value: data.length },
//     { name: "Blogs Added This Week", value: 2 },
//   ];

//   const COLORS = ["#0088FE", "#00C49F"];

//   return (
//     <div className="stats-wrapper">
//       <h1 className="stats-heading">Your Stats</h1>

//       {/* PIE + BAR */}
//       <div className="chart-row">
//         <div className="chart-box">
//           <h3>Library Overview</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 outerRadius={100}
//                 label
//               >
//                 {pieData.map((_, index) => (
//                   <Cell
//                     key={index}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Legend />
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-box">
//           <h3>Views Per Blog</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="title" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="views" fill="#8884d8" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* LINE CHARTS */}
//       <div className="charts-container">
//         <div className="chart-box">
//           <h3>Views Over Time</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line dataKey="views" stroke="#000" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-box">
//           <h3>Reads Over Time</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line dataKey="reads" stroke="#0a7" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="chart-box">
//           <h3>Likes Over Time</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line dataKey="likes" stroke="#c00" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

    
//       <h2 className="table-heading">Article Performance</h2>
//       <table className="stats-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Views</th>
//             <th>Reads</th>
//             <th>Likes</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index}>
//               <td>{row.title}</td>
//               <td>{row.views}</td>
//               <td>{row.reads}</td>
//               <td>{row.likes}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Stats;

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import "./Stats.css";

function Stats() {
  const [blogs, setBlogs] = useState([]);
  const [library, setLibrary] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const blogRes = await fetch(
        "https://698564956964f10bf2530069.mockapi.io/blog"
      );
      const libRes = await fetch(
        "https://698564956964f10bf2530069.mockapi.io/library"
      );

      const blogJson = await blogRes.json();
      const libJson = await libRes.json();

      if (!Array.isArray(blogJson) || !Array.isArray(libJson)) return;

      setBlogs(blogJson);
      setLibrary(libJson);

      // PIE DATA
      setPieData([
        { name: "Total Blogs", value: blogJson.length },
        { name: "Saved Blogs", value: libJson.length },
      ]);

      // LINE DATA (Blogs per day)
      const grouped = {};
      blogJson.forEach((b) => {
        const date = b.createdAt?.split("T")[0];
        if (date) grouped[date] = (grouped[date] || 0) + 1;
      });

      const formattedLine = Object.keys(grouped).map((d) => ({
        date: d,
        blogs: grouped[d],
      }));

      setLineData(formattedLine);
    } catch (err) {
      console.error("Stats fetch failed", err);
    }
  };

  const COLORS = ["#6366f1", "#22c55e"];

  return (
    <div className="stats-wrapper">
      <h1 className="stats-heading"><h1 className="stats-heading">📊 Blog Statistics</h1></h1>

      {/* PIE + SMALL BAR */}
      <div className="chart-row">
        {/* PIE */}
        <div className="chart-box">
          <h3>Blogs vs Library</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={100} label>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* SMALL BLOG COMPARISON */}
        <div className="chart-box small-chart">
          <h3>Blog Comparison</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={[
                { name: "Blogs", count: blogs.length },
                { name: "Saved", count: library.length },
              ]}
              barSize={25}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LINE CHART */}
      <div className="chart-box">
        <h3>Blogs Added Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line dataKey="blogs" stroke="#000" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* TABLE */}
      <h2 className="table-heading">Blog & Save Status</h2>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Saved?</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr key={b.id}>
              <td>{b.myTitle}</td>
              <td>
                {library.some((l) => l.blogId === b.id) ? "Yes ✅" : "No ❌"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stats;