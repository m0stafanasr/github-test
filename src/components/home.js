import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { AddFav } from '../redux/actions/actions'
import './home.css'
import { Link } from "react-router-dom";
import Moviesthunk from '../redux/actions/actionthunk';
import searchterm from'../redux/actions/searchthunk'
const Home = () => {
    var n = 1

    const [count, setcount] = useState(1);
    const [search, setSearch] = useState([])
    const dispatch = useDispatch();

    const Movies = useSelector((state) => state.mov);
    const Search = useSelector((state)=>state.mov)
    function Toggle(mov) {
        dispatch(AddFav(mov));
    }

    const favorite = useSelector((state) => state.fav)
    const isfav = (id) => {
        return favorite.find((el) => el.id == id) ? true : false;
    }

    const Movie = (n) => {
        dispatch(Moviesthunk(n))
    }

  

    function searchTerm(q){
        const term = q.target.value
        dispatch(searchterm(term));
    }

    const next = () => {
        let val = count;
        console.log(val)
        setcount(++val)
       // dispatch(Moviesthunk(val))
        Movie(val)
       // Movie(val)
    }

    const prev = () => {
        let val = count;

        setcount(
            (val > 1) ?
                --val : val == 1);
        Movie(val)
    }
    const btnwarning = "text-warning";
    const btnsecondary = "text-secondary"
    useEffect((n) => {
        Movie(n)

    }, [])


    return (
        <>
        <input type="text" onChange={(q)=>searchTerm(q)} className="mx-4 my-3" placeholder='search...'/>
            <div className='row d-flex justify-content-center align-items-stretch'>
                {Movies.map((mov) => {
                    return (
                        <div key={mov.id} className='col-2 my-3 ms-2 card'>

                            <div className=' d-flex align-content-start'>
                                <Link to={`/details/${mov.id}`} className='title' >
                                    <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} className='card-img-top image' />
                                    <div className='card-body row'>
                                        <div className='card-title h6 col-10'>{mov.title} </div>

                                       <div className='col-2'>{mov.vote_average}</div> 

                                    </div>
                                </Link>
                                <FontAwesomeIcon className={isfav(mov.id) ? btnwarning : btnsecondary} id="fav" icon={faStar} onClick={() => Toggle(mov)} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='d-flex justify-content-evenly'>
            <button className='btn btn-primary' onClick={() => prev()}>prev</button>
            <button className='btn btn-primary' onClick={() => next()}>next</button>
            </div>
        </>
    )
}

export default Home;