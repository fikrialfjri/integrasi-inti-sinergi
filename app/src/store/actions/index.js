import API from "../../apis/API";

export function create(payload) {
  return async function (dispatch) {
    try {
      const createData = await API({
        method: "POST",
        url: "/",
        data: payload,
      });

      console.log(createData);
    } catch (error) {
      console.log(error.response.data);
    }
  };
}
