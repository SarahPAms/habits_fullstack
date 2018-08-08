import request from 'superagent';



export const getCategories = () => {
    return (dispatch) => {
        request
            .get('/api/categories')
            .set('Accept', 'application/json')
            .then((response) => {
                const categories = response.body
                dispatch({
                    type: 'GET_CATEGORIES',
                    payload: categories
                })
            })
            .catch((error) => {
                console.error('Something went wrong!', error)
            })
    }


}