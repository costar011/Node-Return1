import express from "express";

const PORT = 3000;
const app = express();

const typeOneReturn = (data) => {
  const value = data;

  return value;
};

const typeTwoReturn = (data1, data2) => {
  const result = data1 + data2;

  return result;
};

app.listen(PORT, () => {
  console.log(`${PORT} server start`);

  const typeOneReturn = "Hi";
  console.log(typeOneReturn);

  const value = typeTwoReturn("Wow", " so Hot!!!");
  console.log(value);
});
