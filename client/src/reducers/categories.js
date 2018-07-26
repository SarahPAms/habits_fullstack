import { FETCH_CATEGORIES } from '../actions/categories';

export default function(state = [ ], action){
    switch( action.type ){
        case FETCH_CATEGORIES:
            return [ action.payload.data, ...state];

            default:
            return state;
    }

}