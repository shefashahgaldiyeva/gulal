import flower from '../img/flower.jpg'
import flowerHover from '../img/flowerHover.jpg'



const data = [
    {
        img: flower,
        image: flower,
        img2: flowerHover,
        text: 'Welcome Little One Bouquet',
        price: 50,
        review: 5,
        id: 1,
        quantity: 1
    },{
        img: flower,
        image: flowerHover,
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


const newOfferData = (state = data, action) => {
    switch (action.type) {
        // case 'DATA':
        //     return 'salam'
            // return [...state,action.payload]
    
        default:
            // console.log(state)
            return state
    }
}

export default newOfferData;
