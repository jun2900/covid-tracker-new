import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { fetchProvinces } from "../../api/";
import NumberFormat from "react-number-format";

const TableProvinces = () => {
  const [fetchedProvinces, setFetchedProvinces] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedProvinces(await fetchProvinces());
    };
    fetchApi();
  }, [setFetchedProvinces]);

  fetchedProvinces.pop()
  
  return (
    <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
      <Table>
        <thead>
          <tr>
            <th>Provinsi</th>
            <th>Positif</th>
            <th>Sembuh</th>
            <th>Meninggal</th>
          </tr>
        </thead>
        <tbody>
          {fetchedProvinces.map((province) => (
            <tr key={province.name}>
              <td>{province.name}</td>
              <td>
                <NumberFormat
                  value={province.confirmed}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </td>
              <td>
                <NumberFormat
                  value={province.recovered}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </td>
              <td>
                <NumberFormat
                  value={province.deaths}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableProvinces;
