const initial = {
    fav:[],
    counter:0,
    mov:[]
}

export function Fav(state = initial, action){

    switch (action.type){
        case"showMovie":

        return{
            ...state,
            mov:[...action.payload]
        }
        
        case"Search":

        return{
            ...state,
            mov:[...action.payload]
        }  
        


        case"SETFav":
        const selectedItem = state.fav.find((el)=>
        el.id == action.payload.id
        )
        if(selectedItem){
        return{
            ...state,
            fav: state.fav.filter(el=>el.id != action.payload.id) 
        }
    }else{
            return{
                ...state,
                fav: [...state.fav, action.payload]
            }
        }

        case"REMFav":return{
            ...state,
            fav: state.fav.filter(el=> el.id!=action.payload)
        }
        
        case"Count":return{
            ...state,
            counter: action.payload
        }
        default: return state
    }
}

export default Fav;