import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styles from '../css/Container.module.css'
import '../css/Pure.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { getContainerSliderAsync } from '../redux/reducers/getterReducer/containerSlider/containerSlider.thunk'

function Container() {

    const dispatch = useDispatch()
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 85);
        });
    }, []);
    // console.log(window.scrollY)

    useEffect(() => {
        dispatch(getContainerSliderAsync())
    }, []);
    const { sliderLoading,containerSlider,sliderError } = useSelector(state => state.sliderReducer)
    // if(!sliderLoading && containerSlider){
    //     console.log(containerSlider.data)
    // }

    return (
        <div className='swip-container'>
            <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
            {containerSlider &&
                containerSlider.data.map((item)=>(
                    <SwiperSlide style={!sliderLoading && containerSlider ? {backgroundImage: `url(${item.image})`} : null} className={styles.lilacSwip}>
                        <div className={styles.lecekBack}>
                            <p>{item.text}</p>
                            {/* <span>Cashback</span> */}
                            <a href={item.link} className={styles.btn}>Ətraflı</a>
                        </div>
                    </SwiperSlide>
                ))
            }
            </Swiper>

        </div>
    )
}

export default Container;
