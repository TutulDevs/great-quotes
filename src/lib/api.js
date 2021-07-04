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

export const getSingleQuote = async (quoteId) => {
  const res = await axios.get(`/quotes/${quoteId}.json`);
  const data = res.data;

  const quote = {
    id: quoteId,
    ...data,
  };

  return quote;
};
