import generateData from "data-generator-retail";
import fakeDataProvider from "ra-data-fakerest";

const data = generateData();

export const dataProvider = fakeDataProvider(data);
