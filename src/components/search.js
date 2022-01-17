import React,{useState, useEffect} from "react"; 
import { Link, useParams } from "react-router-dom";
import AxiosInstance from './axiosconfig';
const Search = () =>{
const[movie,setMovie] = useState([]);
const params = useParams();
const imgPath = `https://image.tmdb.org/t/p/w500`;
useEffect(()=>{
    AxiosInstance
    .get(`/${params.searchTerm}`)
    .then((res)=>setMovie(res.data)) 
    .catch((err)=>console.log(err))
},[]
)




return(
    <>
         <div className='container-fluid'>


<div className='row d-flex flex-row justify-content-center'>
    {movie.map((movie) => {
        return (
            <div className='col-2 my-3 mx-3 card movieCard d-flex text-center justify-content-center'>
                <Link to={`/details/${movie.id}`} >
                <img className='imgstyle' src={`${imgPath}${movie.poster_path}`} />
                <div className='card-body'>
                    <h6 className='card-title'>{movie.original_title}</h6>
                    <p className='card-text'>{movie.vote_average}</p>
                </div>
                </Link>
            </div>


        );

    })}

    
</div>
</div>
    </>
)
}

export default Search