import React,{useState} from 'react'
import styles from '../css/Guest.module.css'
import TotalInCart from './TotalInCart'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

function Guest() {
    const [value, setValue] = React.useState(new Date());

    return (
        <div className={styles.login}>
            <div className={styles.loginInner}>
                <div className={styles.left}>
                    <h2>Sifarişçi məlumatları</h2>
                    <input required type='text' placeholder='Sifarişçinin Ad və Soyadı...'/>
                    <input required type='tel' placeholder='Mobil Telefon...'/>
                    <input required type='text' placeholder='Çatdırılacaq Şəxsin Ad və Soyadı...'/>
                    <input required type='tel' placeholder='Çatdırılacaq Şəxsin Mobil Telefonu...'/>
                    <input required type='text' placeholder='Ünvan...'/>
                    {/* <input required type='text' placeholder='Çatdırılacaq gün və saat...'/> */}
                    <div className={styles.date}>
                        <LocalizationProvider className={styles.LocalProvider} dateAdapter={AdapterDateFns}>
                        <DateTimePicker  className={styles.DatePicker}
                            renderInput={(props) => <TextField {...props} />}
                            label="Çatdırılacaq gün və saat"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                        />
                        </LocalizationProvider>
                    </div>
                    <textarea type='text' placeholder='Qeyd...'/>
                </div>
                <div className={styles.right}>
                    <TotalInCart className={styles.total}/>
                    <div className={styles.bgColor}></div>
                </div>
            </div>
        </div>
    )
}

export default Guest;
