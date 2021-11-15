import flower from '../../img/flower.jpg'
import flowerHover from '../../img/flowerHover.jpg'


const data = [
    {
        img: flower,
        image: flower,
        img2: flowerHover,
        text: 'One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 1,
        quantity: 1
    },{
        img: flower,
        image: flowerHover,
        img2: flowerHover,
        text: 'Welcome ',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 2,
        quantity: 1
    },{
        img: flower,
        image: flower,
        img2: flowerHover,
        text: 'Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 3,
        quantity: 1
    },{
        img: flower,
        image: flowerHover,
        img2: flowerHover,
        text: 'One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 4,
        quantity: 1
    }
]

const saleProductData = (state = data, action) => {
    switch (action.type) {
        // case 'DATA':
            // return [...state,action.payload]
    
        default:
            // console.log(state)
            return state
    }
}

export default saleProductData;
