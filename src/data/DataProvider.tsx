import generateData from "data-generator-retail";
import fakeDataProvider from "ra-data-fakerest";

const data = generateData();
console.log(data);

export const dataProvider = fakeDataProvider(data);
