import axios from 'axios';
import store from '../redux/actions/store/store';
import {changeLoader} from '../redux/actions/store/loaderAction'


const AxiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/'
})





export default AxiosInstance