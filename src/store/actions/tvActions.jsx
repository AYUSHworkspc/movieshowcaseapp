export {removetv} from "../reducers/tvSlice";
import axios from "../../Utils/axios";
import {loadtv} from "../reducers/tvSlice";

export const asyncloadtv = (id)=> async (dispatch,getState)=>{

try {
    const detail =await axios.get(`/tv/${id}`);
    const externalid =await axios.get(`/tv/${id}/external_ids`);
    const recommendation = await axios.get(`/tv/${id}/recommendations`);
    const similar =await axios.get(`/tv/${id}/similar`);
    const videos =await axios.get(`/tv/${id}/videos`);
    const watchproviders =await axios.get(`/tv/${id}/watch/providers`);
    
    

    let ultimatedetails={
        detail: detail.data,
        externalid: externalid.data,
         recommendation:  recommendation.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find(m=>m.type ==="Trailer"),
        watchproviders: watchproviders.data.results.IN,
    };


    dispatch(loadtv(ultimatedetails))
console.log("series",ultimatedetails)


    
} catch (error) {
    console.log("error",error)
    
}
console.log(ultimatedetails);

}