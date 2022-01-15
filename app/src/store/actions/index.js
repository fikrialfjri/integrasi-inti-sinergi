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

export function updateData(id) {
  return async function (dispatch) {
    try {
      const updateData = await API({
        method: "PUT",
        url: `/${id}/mark-as-arrived`,
      });

      console.log(updateData);
      dispatch(fetchData());
    } catch (error) {
      console.log(error.response.data);
    }
  };
}

export function deleteData(id) {
  return async function (dispatch) {
    try {
      const deleteData = await API({
        method: "DELETE",
        url: `/${id}`,
      });

      console.log(deleteData);
      dispatch(fetchData());
    } catch (error) {
      console.log(error.response.data);
    }
  };
}
