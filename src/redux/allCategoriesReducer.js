import axios from 'axios';

// let data = axios.get('http://127.0.0.1:8000/api/category/all')
// // .then(response => response.json())
// .then(res => res.data.data)
// .catch(err => console.error(err));
// console.log(data)
const myPromise = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        resolve('Promise is resolved successfully.');
        } else {
        reject('Promise is rejected');
        }
    });
myPromise
    .then((result) => console.log(result))
    .catch((result) => console.log(result));

async function getData() {
    const result = await axios.get('http://127.0.0.1:8000/api/category/all')
    // console.log(result.data.data);
    .then(res => res.data.data)
    return result;
}
const data = getData()
console.log(data)

const allCategoriesReducer = ( state = data, action ) => {
    switch (action.type) {
        case 'GET_DATA_CATEGORIES':
        //     getData().then( res => {
        //         return res.data
        //    })
            // console.log(state) 
            return state

        default:
        //     getData().then( res => {
        //         return res
        //    })
            console.log(`menimDatam ${state}`)
            return state
    }
}
export default allCategoriesReducer;