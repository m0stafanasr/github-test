import AxiosInstance from "../../components/axiosconfig";

function Moviesthunk(n){

    return  (dispatch)=>{
        AxiosInstance
        .get("movie/popular",{
            params:{
                api_key: "c5fbc220a0f27435df91404a8877973a",
                language: "en-US",
                page: n
            }
        }).then((res)=>{dispatch({type:"showMovie", payload: res.data.results});
        })
        .catch((err)=>console.log(err))
    }
}

export default Moviesthunk;