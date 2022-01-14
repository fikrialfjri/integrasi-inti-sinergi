import API from "../../apis/API";
import { FETCH_DATA } from "../keys";

export function setData(payload) {
  return {
    type: FETCH_DATA,
    payload,
  };
}

export function fetchData() {
  return async function (dispatch) {
    try {
      const result = await API({
        method: "GET",
        url: "/",
      });

      dispatch(setData(result.data.value.hiringTest));
    } catch (error) {
      console.log(error.response.data);
    }
  };
}

export function createData(payload) {
  return async function (dispatch) {
    try {
      const createData = await API({
        method: "POST",
        url: "/",
        data: payload,
      });

      console.log(createData);
      dispatch(fetchData());
    } catch (error) {
      console.log(error.response.data);
    }
  };
}
