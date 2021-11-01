

const allFlowersReducer = ( state = [], action) => {
    switch (action.type) {
        case 'GELEN_DATA':
            // console.log(action.payload)
            return action.payload
    
        default:
            // console.log('no payload')
            return state
    }
}
export default allFlowersReducer;