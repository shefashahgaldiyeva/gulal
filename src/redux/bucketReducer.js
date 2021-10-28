import flower from '../img/flower.jpg'
import flowerHover from '../img/flowerHover.jpg'

const data = [
    {
        img: flower,
        img2: flowerHover,
        text: 'Welcome Little One Bouquet',
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
        text: 'Little One Bouquet',
        price: 50,
        review: 5,
        id: 3,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Welcome One Bouquet',
        price: 50,
        review: 5,
        id: 4,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Welcome Little One Bouquet',
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
        text: 'Little One Bouquet',
        price: 50,
        review: 5,
        id: 3,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Welcome One Bouquet',
        price: 50,
        review: 5,
        id: 4,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Welcome Little One Bouquet',
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
        text: 'Little One Bouquet',
        price: 50,
        review: 5,
        id: 3,
        quantity: 1
    },{
        img: flower,
        img2: flowerHover,
        text: 'Welcome One Bouquet',
        price: 50,
        review: 5,
        id: 4,
        quantity: 1
    }
]
const empty = []

const bucketReducer = (state = data, action) => {
    switch (action.type) {
        case 'ELAVE_ET':
            console.log(action.payload)
            return [...state,action.payload]

        case 'SEBETDEN_SIL':
            return state = state.filter(item => item.id !== action.payload.id)
        case 'UPDATE_BUCKET':
            state.find(item => item.id !== action.payload.id).quantity += action.payload.quantity
            console.log(state)
            return state = [...state]
        default:
            return empty
    }
}

export default bucketReducer;

