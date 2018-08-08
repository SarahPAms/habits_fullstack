
export default (state = [], { type, payload } = {}) => {
    switch( type ){
        case 'GET_CATEGORIES':
            console.log(payload)
            return state.concat(payload)


        default:
            return state;
    }

}