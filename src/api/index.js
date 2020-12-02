import axios from "axios";

const urlGlobal = "https://covid19.mathdro.id/api";
const urlIndonesia = "https://indonesia-covid-19.mathdro.id/api";

export const fetchDataGlobal = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths },
    } = await axios.get(urlGlobal);
    return { confirmed, recovered, deaths };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataIndonesia = async () => {
  try {
    const {
      data: { jumlahKasus: confirmed, meninggal: deaths, sembuh: recovered },
    } = await axios.get(urlIndonesia);
    return { confirmed, recovered, deaths };
  } catch (error) {
    console.log(error);
  }
};
