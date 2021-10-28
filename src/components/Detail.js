import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import styles from '../css/Detail.module.css'
import DetailSlider from '../components/DetailSlider'
import DetailRight from '../components/DetailRight'

function Detail() {

    const match = useRouteMatch()
    // console.log(match)

    // allFlowersReducer

    // const selector = useSelector(state => state.allFlowersReducer.id == match.params.topicId)
    const data = useSelector(state => state.newOfferData.filter(item => item.id == match.params.topicId))
    // data.map((item)=>(
    //     console.log(item)
    // ))

    // const selector = useSelector(state =>state.allFlowersReducer.filter(item => item.id === match.params.topicId))
    // console.log(selector)

    return (
            <div className={styles.detail}>
                <div className={styles.detailInner}>
                    <div className={styles.left}>
                        <DetailSlider data={data}/>
                    </div>
                    <div className={styles.right}>
                        {
                            data.map((item)=>(
                                <DetailRight item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default Detail;
