export {removemovie} from "../reducers/movieSlice";
import axios from "../../Utils/axios";
import {loadmovie} from "../reducers/movieSlice";

export const asyncloadmovie = (id)=> async (dispatch,getState)=>{

try {
    const detail =await axios.get(`/movie/${id}`);
    const externalid =await axios.get(`/movie/${id}/external_ids`);
    const recommendation = await axios.get(`/movie/${id}/recommendations`);
    const similar =await axios.get(`/movie/${id}/similar`);
    const videos =await axios.get(`/movie/${id}/videos`);
    const watchproviders =await axios.get(`/movie/${id}/watch/providers`);
    
    

    let ultimatedetails={
        detail: detail.data,
        externalid: externalid.data,
         recommendation:  recommendation.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find(m=>m.type ==="Trailer"),
        watchproviders: watchproviders.data.results.IN,
    };

    console.log("moviedetail",ultimatedetails)


    dispatch(loadmovie(ultimatedetails))



    
} catch (error) {
    console.log("error",error)
    
}

}