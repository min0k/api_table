import { IApiResponse } from "./Interface";


function capitalize(s: string) {
    return s[0].toUpperCase() + s.slice(1);
}

export default function prepareAPIData(array: IApiResponse[]) {
    const preparedData = array.map((obj, idx) => {
      return {
        id: idx,
        col1: obj.API,
        col2: obj.Auth === "" ? "None" : capitalize(obj.Auth),
        col3: obj.Category,
        col4: capitalize(obj.Cors),
        col5: obj.HTTPS ? "True" : "False",
        col6: obj.Description,
      };
    });
    return preparedData;
  }
  