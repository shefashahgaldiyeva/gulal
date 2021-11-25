const paramsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            // state = action.payload;
            return [...state,action.payload];

        default:
            return state;
    }
  };
  
  export default paramsReducer;