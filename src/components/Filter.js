import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../css/Shop.module.css'
import '../css/Pure.css'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function Filter() {


    const [value, setValue] = React.useState([2,1000]);

    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    const handleAddClass = (e) =>{
        // console.log(e.target.tagName)
        if(e.target.tagName == 'A' ){
            // console.log('olar')
             if(e.target.nextSibling.classList.contains('closeDrop')){
                e.target.nextSibling.classList.remove('closeDrop')
                e.target.nextSibling.classList.add('openDrop')
                 if(e.target.querySelector('span').classList.contains('notRotate')){
                    e.target.querySelector('span').classList.remove('notRotate')
                    e.target.querySelector('span').classList.add('rotate')
                    // console.log( e.target.querySelector('span').classList.contains('notRotate'))
                }
            }
            else if(e.target.nextSibling.classList.contains('openDrop')){
                e.target.nextSibling.classList.remove('openDrop')
                e.target.nextSibling.classList.add('closeDrop')
                if(e.target.querySelector('span').classList.contains('rotate')){
                    e.target.querySelector('span').classList.remove('rotate')
                    e.target.querySelector('span').classList.add('notRotate')
                }
            }
        }
        else{
            console.log('olmaz')
        }
    }

    return (
        <div className={styles.filter}>
                <div className={styles.filterClean}>
                    <label>Filterlər:</label>
                    <button type='reset'>Filterləri sıfırla</button>
                </div>
                <div className={styles.openFilter}>
                    <a onClick={(e)=>handleAddClass(e)}> Kateqoriya<span className={'notRotate'}><MdOutlineKeyboardArrowDown/></span></a>
                    <div  id={'no1'} className={'closeDrop'}>
                        <ul>
                            <li><Link to='/Butun-Kateqoriyalar'>Bütün Kateqoriyalar</Link></li>
                            <li><Link to='/Tulpan-Buketleri'>Tülpan Buketləri</Link></li>
                            <li><Link to='/Ucuz-Guller'>Ucuz Güllər</Link></li>
                            <li><Link to='/Buketler'>Buketlər</Link></li>
                            <li><Link to='/Guller'>Güllər</Link></li>
                            <li><Link to='/101-Qızılgul'>101 Qızılgül</Link></li>
                            <li><Link to='/Ofis-Bitkileri'>Ofis Bitkiləri</Link></li>
                            <li><Link to='/8-Mart'>8 Mart</Link></li>
                            <li><Link to='/En-Çox-Satılanlar'>Ən Çox Satılanlar</Link></li>
                            <li><Link to='/Meyve-sebetleri'>Meyvə səbətləri</Link></li>
                            <li><Link to='/Hediyyeler'>Hədiyyələr</Link></li>
                            <li><Link to='/Bilik-gunu'>Bilik Günü</Link></li>
                            <li><Link to='/Analar-ucun-buketler'>Analar üçün buketlər</Link></li>
                            <li><Link to='/14-Fevral'>14 Fevral</Link></li>
                            <li><Link to='/Korporativ'>Korporativ</Link></li>
                            <li><Link to='/Heftenin-furseti'>Həftənin Fürsəti</Link></li>
                            <li><Link to='/Yeni-il-gulleri'>Yeni İl Gülləri</Link></li>
                            <li><Link to='/Topdan'>Topdan Gül Satışı</Link></li>
                            <li><Link to='/Gelin-buketleri'>Gəlin buketləri</Link></li>
                            <li><Link to='/Nisan-gulu'>Nişan gülü</Link></li>
                            <li><Link to='/Ekliller'>Əklillər</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <div className={styles.openFilter}>
                    <a onClick={(e)=>handleAddClass(e)}>Ölçü<span className={'notRotate'}><MdOutlineKeyboardArrowDown/></span></a>
                    <div id={'no2'} className={'closeDrop'}>
                        <ul>
                            <li><input type='checkbox'/><span>Çox kiçik</span></li>
                            <li><input type='checkbox'/><span>Kiçik</span></li>
                            <li><input type='checkbox'/><span>Orta</span></li>
                            <li><input type='checkbox'/><span>Böyük</span></li>
                            <li><input type='checkbox'/><span>Çox böyük</span></li>
                        </ul>
                    </div>
                </div> */}
                {/* <div className={styles.openFilter}>
                    <a onClick={()=>handleAddClass()}>Rəng<span className={isActive ? 'notRotate' : 'rotate'}><MdOutlineKeyboardArrowDown/></span></a>
                    <div className={isActive ? 'openDrop' : 'closeDrop'}>
                        <ul>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                            <li><input type='radio'/></li>
                        </ul>
                    </div>
                </div> */}
                <div className={styles.openFilter}>
                    <a onClick={(e)=>handleAddClass(e)}>Qiymət<span className={'notRotate'}><MdOutlineKeyboardArrowDown/></span></a>
                    <div id={'no2'} className={'closeDrop'}>
                        <div>Qiymət aralığı: <span className={styles.range}>{value[0]} azn - {value[1]} azn</span></div>
                        <div style={{margin: 'auto', display: 'block', padding: '1rem 0'}}>
                            <Typography id="range-slider" gutterBottom>Aralığı seçin:</Typography>
                            <Slider step={1} max={1000} min={0} value={value} onChange={rangeSelector} valueLabelDisplay="auto"/>
                        </div>
                    </div>
                </div>
                <div className={styles.filterDo}>
                    <button type='submit'>Filteri tətbiq et</button>
                </div>
            </div>
    )
}

export default Filter;
