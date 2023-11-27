import React, { useEffect } from 'react';
import axios from 'axios';

const TrendsViewer = () => {
  // const [google, setGoogle] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/google');
        const result = await response.json();
        console.log('구글 데이터 :: ', response.data);
        console.log('구글 데이터 제이슨 : ', result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Google Trends RSS</h2>
      {/* Render your data as needed */}
    </div>
  );
};

export default TrendsViewer;