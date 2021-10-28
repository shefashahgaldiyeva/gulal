import flower from '../img/flower.jpg'
import flowerHover from '../img/flowerHover.jpg'



const data = [
    {
        img: flower,
        image: flower,
        img2: flowerHover,
        text: 'Welcome Little One Bouquet',
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
        text: 'Little One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 3,
        quantity: 1
    },{
        img: flower,
        image: flowerHover,
        img2: flowerHover,
        text: 'Welcome One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 4,
        quantity: 1
    },{
        img: flower,
        image: flower,
        img2: flowerHover,
        text: 'Welcome Little One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 5,
        quantity: 1
    },{
        img: flower,
        image: flowerHover,
        img2: flowerHover,
        text: 'Welcome ',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 6,
        quantity: 1
    },{
        img: flower,
        image: flower,
        img2: flowerHover,
        text: 'Little One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 7,
        quantity: 1
    },{
        img: flower,
        image: flowerHover,
        img2: flowerHover,
        text: 'Welcome One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 8,
        quantity: 1
    },{
        img: flower,
        image: flower,
        img2: flowerHover,
        text: 'Welcome Little One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 9,
        quantity: 1
    },{
        img: flower,
        image: flowerHover,
        img2: flowerHover,
        text: 'Welcome ',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 10,
        quantity: 1
    },{
        img: flower,
        image: flower,
        img2: flowerHover,
        text: 'Little One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 11,
        quantity: 1
    },{
        img: flower,
        image: flowerHover,
        img2: flowerHover,
        text: 'Welcome One Bouquet',
        p: 'Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
        price: 50,
        review: 5,
        id: 12,
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
