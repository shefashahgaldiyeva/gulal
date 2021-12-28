const initialState = {};
const data = {
    mcategory: null,
    price: '1,1000000',
    orderp: 0,
    page : 1,
};

const paramsReducer = (state = data, action) => {
    switch (action.type) {
        case 'SET_PRICE':
            state.price = action.payload;
            return state;

        case 'SET_CATEGORY':
            state.mcategory = action.payload;
            return state;

        case 'SET_SORT':
            state.orderp = action.payload;
            return state;

        case 'SET_PAGE':
            state.page = action.payload;
            return state;

        default:
            return state;
    }
  };
  
  export default paramsReducer;