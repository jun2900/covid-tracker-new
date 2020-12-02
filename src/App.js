import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import styles from "./App.module.css";
import { Cards } from "./components";

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
    <div className={styles.container}>
      <h1>Covid Tracker</h1>
      <Cards data={data} />
    </div>
  );
};

export default App;
