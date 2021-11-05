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

const bucketReducer = (state = data, action) => {
    switch (action.type) {
        case 'ELAVE_ET':
            console.log(action.payload)
            return [...state,action.payload]

        case 'SEBETDEN_SIL':
            return state = state.filter(item => item.id !== action.payload.id)

        case 'UPDATE_BUCKET_PLUS':
            (state.filter(item => item.id == action.payload.id))[0].quantity -= action.payload.quantity
            return [...state]

        case 'UPDATE_BUCKET_MINUS':
            (state.filter(item => item.id == action.payload.id))[0].quantity += action.payload.quantity
            return [...state]

        default:
            return empty
    }
}

export default bucketReducer;

