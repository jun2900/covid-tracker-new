import React, { useEffect, useState } from "react";
import { fetchDataGlobal, fetchDataIndonesia } from "./api";
import styles from "./App.module.css";
import { Cards } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const [dataGlobal, setDataGlobal] = useState({});
  const [dataIndonesia, setDataIndonesia] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDataGlobal = await fetchDataGlobal();
      const initialDataIndo = await fetchDataIndonesia();

      setDataGlobal(initialDataGlobal);
      setDataIndonesia(initialDataIndo);
    };

    fetchMyAPI();
  }, [setDataIndonesia]);

  return (
    <Router className={styles.container}>
      <h1>Covid Tracker</h1>
      <ul>
        <li>
          <Link to="/">Global</Link>
        </li>
        <li>
          <Link to="/indonesia">Indonesia</Link>
        </li>
        <li>
          <Link to="/provinsi">Per Provinsi</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/indonesia">
          <Cards data={dataIndonesia} text="Jumlah Kasus Indonesia" />
        </Route>
        <Route path="/">
          <Cards data={dataGlobal} text="Jumlah Kasus Dunia" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
