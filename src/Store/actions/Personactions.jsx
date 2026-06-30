export { removeperson } from "../reducers/personSlice";
import axios from "../../Utils/axios";
import { loadperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getstate) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
    const tvcredits = await axios.get(`/person/${id}/tv_credits`);
    const movie = await axios.get(`/person/${id}/movie_credits`);



    let ultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedcredits: combinedcredits.data,
      movie: movie.data,
      tvcredits: tvcredits.data,
    };  

    dispatch(loadperson(ultimatedetails));
  } catch (error) {
    console.log("Error is = ", error);
  }
};
