import axios from 'axios';

// function resolveAfter2Seconds(x) {
    //     return new Promise(resolve => {
        //       setTimeout(() => {
            //         axios.get('http://127.0.0.1:8000/api/category/all')
            //             .then(res =>{
//                 for(let i = 0;i<res.data.data.length;i++){
//                     data.id = (res.data.data[i]).id;
//                     data.name = (res.data.data[i]).name;
//                     card.push(data)
//                 };
//             })
//         resolve(x);
//       }, 2000);
//     });
//   }

//   async function f1() {
    //     var x = await resolveAfter2Seconds(10);
    //     console.log(x); // 10
    //   }
    
    //   f1();
    // const data = getData()
    // console.log(Object.stringify(data))
    // console.log(card.length)
    // setTimeout(function(){
        //     api()
        //     console.log(card.length)
        // },1000)
        // axios.get('http://127.0.0.1:8000/api/category/all').onload = () => {console.log(card)};\
        
        
        let obj = {}
        let cats = [];
        function api(){
            axios.get('http://127.0.0.1:8000/api/category/all')
            .then(res =>{
                for(let i = 0;i<res.data.data.length;i++){
                    let obj = {id: res.data.data[i].id, name: res.data.data[i].name};
                    cats.push(obj)
                };
            })
        }
        api()
        
let data = [];
function getCats(){
    if(data.length < 1){
            if(cats.length < 1 ){
                setInterval(function(){
                    getCats()
                },1000)
                console.log('cats bosdur')
            }else{
                data = cats 
                console.log('cats doludur')
                console.log(data)
            }
        }
    }
getCats()


const allCategoriesReducer = ( state = data , action ) => {
    switch (action.type) {
        case 'GET_DATA_CATEGORIES':
            return state

        default:
            console.log(`menimDatam ${state}`)
            return state
    }
}
export default allCategoriesReducer;