export function AddFav(movie) {
    return{
        type: "SETFav",
        payload: movie
    }
}

export function RemoveFav (id){
    return{
        type: "REMFav",
        payload: id
    }
}

export function Counter (num){
    return{
        type: "Count",
        payload: num
    }
}