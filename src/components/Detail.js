import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import styles from '../css/Detail.module.css'
import DetailSlider from '../components/DetailSlider'

function Detail() {

    const match = useRouteMatch()
    // console.log(match)

    // allFlowersReducer

    // const selector = useSelector(state => state.allFlowersReducer.id == match.params.topicId)
    const selector = useSelector(state => state.allFlowersReducer)
    // const selector = useSelector(state =>state.allFlowersReducer.filter(item => item.id === match.params.topicId))
    // console.log(selector)

    return (
        <div>
            <div className={styles.left}>
                <DetailSlider data={selector}/>
            </div>
        </div>
    )
}

export default Detail;
