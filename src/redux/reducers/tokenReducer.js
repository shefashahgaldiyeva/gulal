const tokenReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            state = action.payload;
            console.log(state)
            return state;

        default:
            return state;
    }
  };
  
  export default tokenReducer;