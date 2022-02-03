
const productIdForSnackReducer = ( state = 0, action) => {
    switch (action.type) {
        case 'SET_COUNT':
            return action.payload
    
        default:
            return state
    }
}
export default productIdForSnackReducer;