import React,{useEffect,useState} from 'react'
import styles from '../css/Container.module.css'
import lilac from '../img/lilacDecor.svg'
import containerSlider1 from '../img/containerSlider1.png'
import containerSlider2 from '../img/containerSlider2.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards"

// import "./styles.css";
import '../css/Pure.css'

// import SwiperCore, {Autoplay} from 'swiper';



function Container() {

    // SwiperCore.use([Autoplay]);
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 85);
        });
    }, []);
    // console.log(window.scrollY)

    return (
        <div className='swip-container'>
            <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                <SwiperSlide style={{backgroundImage: `url(${containerSlider1})`}} className={styles.lilacSwip}>
                    {/* <div className={styles.lilac}>
                        <img src={lilac}/>
                    </div> */}
                    <div className={styles.lecekBack}>
                        <p>Ləçək-Bək</p>
                        <span>Cashback</span>
                        <a href='#' className={styles.btn}>Ətraflı</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide  style={{backgroundImage: `url(${containerSlider2})`}} className={styles.lilacSwip}>
                    {/* <div className={styles.lilac}>
                        <img src={lilac}/>
                    </div> */}
                    <div className={styles.lecekBack}>
                        <p>Ləçək-Bək</p>
                        <span>Cashback</span>
                        <a href='#' className={styles.btn}>Ətraflı</a>
                        {/* <Link to='#'></Link> */}
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className={styles.lilacSwip}>
                    <div className={styles.lilac}>
                        <img src={lilac}/>
                    </div>
                    <div className={styles.lecekBack}>
                        <p>Ləçək-Bək</p>
                        <span>Cashback</span>
                        <a href='#' className={styles.btn}>Ətraflı</a>
                    </div>
                </SwiperSlide> */}
            </Swiper>

        </div>
    )
}

export default Container;
