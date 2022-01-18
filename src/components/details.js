import React,{useState, useEffect} from "react"; 
import { Link, useParams } from "react-router-dom";
import AxiosInstance from './axiosconfig';
import './details.css'
const Details = ()=>{
    const params = useParams();
    const [movie,setMovie] = useState({});
    const imgPath = `https://image.tmdb.org/t/p/w500`;
    useEffect(()=>{
        AxiosInstance
        .get(`movie/${params.id}`,{
            params:{
                api_key: `c5fbc220a0f27435df91404a8877973a`,
                language: `en-US`
            }
        })
        .then((res)=>setMovie(res.data)) 
        .catch((err)=>console.log(err))
    },[]);

    return(
        <>
          
        <div className="row">
            <div className=" col-3">
        <img className='imgstyle' src={`${imgPath}${movie.poster_path}`} /></div>
            <div className="h3 col-6 text-primary">
                <strong>{movie.original_title}</strong>
           
        <div className="col-7 d-flex justify-content-center my-4">
            <table className="tb table  table-striped">
                <tr>
                    <td>release date:</td>
                    <td>{movie.release_date}</td>
                </tr>
                <tr>
                    <td>language:</td>
                    <td>{movie.original_language}</td>
                </tr>
                <tr>
                    <td>vote:</td>
                    <td>{movie.vote_average}</td>
                </tr>
            </table>
        </div>
        </div>
         </div>
            <p className="fs-4">{movie.overview}</p>
        
        </>
    )


}

export default Details;