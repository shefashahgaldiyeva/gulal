import React from 'react'
import Container from '../components/Container';
import NewOffer from '../components/NewOffer';
// import SelectedCard from '../components/SelectedCard';
import AllProducts from '../components/AllProducts';
import WhoWeAre from '../components/WhoWeAre'
import Sale from '../components/Sale'


function Home() {

    return (
        <div>
            <Container/>
            <NewOffer/>
            <AllProducts/>
            {/* <SelectedCard/> */}
            <Sale/>
            <WhoWeAre/>
        </div>
    )
}

export default Home;
