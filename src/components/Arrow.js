import React from 'react'
import {HiOutlineArrowUp} from 'react-icons/hi'

const style = {
    // width: '20px',
    // height: '20px',
    padding: '1rem',
    fontSize: '1.3rem',
    backgroundColor: '#e4dad7',
    color: '#fff',
    border: '1px solid #BDBDBD',
    borderRadius: '50%',
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    zIndex: '999',
    scrollBehavior: 'smooth',
    boxShadow: '0px 9px 27px #e4dad7'
}

function Arrow() {
    return (
        <div>
            <a  style={style} href='#'><HiOutlineArrowUp/></a>
        </div>
    )
}

export default Arrow;
