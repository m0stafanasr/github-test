import React,{ useState, useEffect } from 'react';
import AxiosInstance from './axiosconfig';
import { useSelector, useDispatch } from "react-redux";
import {AddFav} from '../redux/actions/actions'
import store from 'store';
import { Link } from "react-router-dom";
import { ToggleButton } from 'react-bootstrap';

const Home =()=>{
var n=1
const[movies,setMovie] = useState([]);
const[count,setcount] = useState(1);
const [search,setSearch] = useState([])
let fav = useSelector((state)=>state.fav);
const dispatch = useDispatch()

const Toggle = (mov)=>{
    dispatch(AddFav(mov));
}

const isfav = (id)=>{
    return favorite.find((el)=>el.id ==id)?true:false;
}
const Movie = (n)=>{
    AxiosInstance
    .get("/popular",{
        params:{
            api_key: "c5fbc220a0f27435df91404a8877973a",
            language: "en-US",
            page: n
        }
    }).then((res)=>{setMovie(res.data.results);
    console.log(res.data.results)})
    .catch((err)=>console.log(err))

}
const favorite = useSelector((state)=>state.fav)
const next = ()=>{
    let val = count;
    setcount(++val);
    Movie(val)
}

const prev = ()=>{
    let val = count;

    setcount(
        (val>1)?
        --val:val==1);
    Movie(val)
}
const btnsucces = "btn-success";
const btnsecondary = "btn-secondary"
useEffect(()=>{
    Movie(n)
},[])


return(
    <>
    <div className='row'>
        {movies.map((movie)=>{
            return(
                <div key={movie.id} className='row w-25'>
                     <Link to={`/details/${movie.id}`} >
                         <div className='card'>
                         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                         </div>
                         </Link>
                         
                         <button className='mt-2' className={isfav(movie.id)?btnsucces:btnsecondary} onClick={()=>Toggle(movie)}>fav</button>
                         </div>
            )
        })}
    </div>
    <button onClick={()=>next()}>next</button>
    <button onClick={()=>prev()}>prev</button>
    </>
)
}

export default Home;