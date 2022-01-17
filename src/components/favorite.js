import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {AddFav,RemoveFav} from '../redux/actions/actions'
import { Link } from "react-router-dom";

const Favorite = ()=>{
    const dispatch = useDispatch()
    const remove =(id)=>{
        dispatch(RemoveFav(id))
    }

    const fav = useSelector((state)=>state.fav)
    return(<>
        <div className="row">
            {fav.map((el)=>{
                return(<>
                <div className="card col-3 text-center"> 
                    <img className="mt-3" src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}/>
                    
                    <button className="btn btn-secondary" onClick={()=>remove(el.id)}>Remove</button>
                    <p className="card-text">Vote: {el.vote_average}</p>
                    <div className="card-body">
                    <Link to={`/details/${el.id}`} >
                        <p>{el.title}</p> 
                        </Link>
                        </div>
                        </div>
                    </>)
            })}
        </div>
    
    
    </>)

}

export default Favorite;