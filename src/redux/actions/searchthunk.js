import AxiosInstance from "../../components/axiosconfig";

function searchterm(q){

return(dispatch)=>{

    AxiosInstance
    .get("/search/movie",{
        params:{
            api_key: "c5fbc220a0f27435df91404a8877973a",
            query: q
        }
    }).then((res)=>{dispatch({type:"Search",payload:res.data.results});
console.log(res.data.results)})
    .catch((err)=>console.log(err))

}

}

export default searchterm;