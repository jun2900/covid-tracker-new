import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialData = await fetchData();

      setData(initialData);
    };

    fetchMyAPI();
  }, [setData]);

  console.log(data);
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

export default App;
