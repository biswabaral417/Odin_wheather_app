const apidata = async (location) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=a6abcc233d724489bce110310232612&q=${location}&days=8`,
    { mode: "cors" },
  );
  const data = await response.json();
  return data;
};
export default apidata;
