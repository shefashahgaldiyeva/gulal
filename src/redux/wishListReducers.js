import flower from '../img/flower.jpg'
import flowerHover from '../img/flowerHover.jpg'

const data = [
    {
        img: flower,
        img2: flowerHover,
        text: 'Big Bouquet',
        price: 50,
        review: 5,
        id: 1,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Welcome ',
        price: 50,
        review: 5,
        id: 2,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Bouquet',
        price: 50,
        review: 5,
        id: 3,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'One Bouquet',
        price: 50,
        review: 5,
        id: 4,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Big Bouquet',
        price: 50,
        review: 5,
        id: 1,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Welcome ',
        price: 50,
        review: 5,
        id: 2,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Bouquet',
        price: 50,
        review: 5,
        id: 3,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'One Bouquet',
        price: 50,
        review: 5,
        id: 4,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Big Bouquet',
        price: 50,
        review: 5,
        id: 1,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Welcome ',
        price: 50,
        review: 5,
        id: 2,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Bouquet',
        price: 50,
        review: 5,
        id: 3,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'One Bouquet',
        price: 50,
        review: 5,
        id: 4,
        quantity: 1
    }
]
const empty = []

const wishlistReducers = (state = data ,action) =>{
    switch (action.type){
        case 'SEVIMLIYE_ELAVE_ET': 
            // console.log(action.payload)
            return  [...state,action.payload]
        case 'SEVIMLIDEN_SIL':
            return state = state.filter(item => item.id !== action.payload.id)
        default: 
            return  empty
    }
}
export default wishlistReducers;