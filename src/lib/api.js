import axios from "../axios";

export const getAllQuotes = async () => {
  const res = await axios.get("/quotes.json");
  const data = await res.data;

  const transformedArr = [];

  for (const key in data) {
    transformedArr.push({
      id: key,
      ...data[key],
    });
  }

  return transformedArr;
};
