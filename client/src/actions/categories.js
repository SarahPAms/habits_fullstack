import axios from 'axios';

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";


export default function fetchCategories(){
    const url = "api/categories"
    const request = axios.get( url )

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
}