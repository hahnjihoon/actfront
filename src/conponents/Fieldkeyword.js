import React, { useEffect, useState } from 'react';

// const FieldKeyword = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/fieldkeywords');
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Field Keyword</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             Keyword: {item.keyword}, Type: {item.type}, Count: {item.count}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

function FieldKeyword() {
  const [fieldKeywords, setFieldKeywords] = useState([]);
  const [news, setNews] = useState([]);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData('/fieldkeywords', setFieldKeywords);
    fetchData('/news', setNews);
  }, []);

  const fetchData = async (endpoint, setData) => {
    try {
      const response = await fetch(`http://localhost:3000${endpoint}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Field Keyword df</h1>
      <ul>
        {fieldKeywords.map((item) => (
          <li key={item.id}>
            Keyword: {item.keyword}, Type: {item.type}, Count: {item.count}
          </li>
        ))}
      </ul>
<br></br><br></br>
      <h1>News</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            Title: {item.title}, Date: {item.date}, Content: {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FieldKeyword;