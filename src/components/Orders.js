import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import  styles  from '../css/Orders.module.css';
import  styled  from '../css/Cart.module.css';
import { BsListCheck } from 'react-icons/bs';
import { VscChevronDown } from 'react-icons/vsc';
import ordersBg from '../img/ordersBg.png';
import { getOrdersAsync } from '../redux/reducers/getterReducer/orders/orders.thunk';


function Orders() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrdersAsync());
    }, [])
    const { gettingOrders,getOrders,ordersError} = useSelector(state =>state.getOrdersReducer)
    if(!gettingOrders && getOrders){
        // console.log(getOrders.data)
        // getOrders.data[0].images.map((item)=>{
        //     console.log(item.image)
        // })
        getOrders.data.map((item)=>{
            // console.log(item)
            item.detail.map((index)=>{
                console.log(index)
            })
        })
    }
    useSelector(state =>console.log(state.getOrdersReducer))

    const [click, setClick] = useState(false)
    function handleClick(){
        setClick(!click)
    }

    return (
        <>
        <div className={styled.cartTop} style={{backgroundImage: `url(${ordersBg})`,backgroundPosition: '80% 70%'}}>
            <h2>Sifarişlərim</h2>
        </div>
        <div className={!gettingOrders && getOrders && getOrders.data.length > 0 ? styles.table : styles.none}>
            {!gettingOrders && getOrders.data &&
                getOrders.data.map((item)=>(
                <table className={styles.table}>
                    <thead id='table'>
                        <tr>
                            <th>Sifariş vaxtı: {item.date}</th>
                            <th>Toplam cəm: {item.totalSum.toFixed(2)} azn</th>
                        </tr>
                    </thead>
                    <tbody id='tbody'>
                        <tr className={styles.images} onClick={()=>handleClick()}>
                        {getOrders.data &&
                            getOrders.data[0].images.map((item)=>(
                                <img className={styles.img} src={item.image}/>
                            ))
                        }
                        <span className=
                        {styles.downIcon}><VscChevronDown/></span>
                        </tr>
                        <tr className={!click ? styles.none : styles.orderCard}>
                            <td>
                                { item.detail.map((index)=>(
                                    <div key={index.id}>
                                        <img src={index.photo}/>
                                        <div className={styles.detail}>
                                            <h3>{index.name}</h3>
                                            <span className={styles.price}>{index.price} azn</span>
                                        </div>
                                    </div>
                                    ))
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                ))
            }
        </div>
        <div className={gettingOrders && !getOrders || getOrders.data.length == 0 ? styled.emptyCart : styles.none}>
                <BsListCheck/>
                <Link to='/'>Ana səhifəyə keçid</Link>
            </div>
        </>
    )
}

export default Orders;
