import React,{ useEffect, useState } from 'react'
import '../css/MyProfilePure.css'
// import '../css/MyProfilePure2.css'
import styles from '../css/TopHeader.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsersAsync, logoutAsync } from '../redux/reducers/users/users.thunks'
import { BiSpa } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { GiFlowerEmblem } from 'react-icons/gi'
import { BsPatchQuestion } from 'react-icons/bs'
import { MdOutlineLogout } from 'react-icons/md'
import { BiHeart } from 'react-icons/bi'
import { RiMapPinLine } from 'react-icons/ri'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { AiFillCaretDown } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsTelephone } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { style } from '@mui/system'
import AuthStore from '../services/AuthStore'
import { updateUserAsync } from '../redux/reducers/users/updateUser/updateUser.thunk'


function MyProfile() {

    const { isLoading,users, userErrorMessage } = useSelector((state) => state.users);
    useSelector((state) => console.log(state.updateUserReducer));
    const { logOut, errorMessage } = useSelector((state) => state.logoutReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsersAsync())
    }, [])
    if(!isLoading && users){
        console.log(users)
    }
    // if(isLoading && !users){
    //     return (<Loader style={{ background: 'transparent !important' }}/>)
    // }

    function handleLogout() {
        dispatch(logoutAsync());
    }
    if (logOut && !errorMessage) {
        AuthStore.removeToken();
        window.location.href = "/";
    } 
    function handleUpdate(){
        const fullname = document.getElementById('fullname').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const phone = document.getElementById('phone').value
        const address = document.getElementById('address').value
        const password_confirmation = document.getElementById('password_confirmation').value
        const article = {
            fullname: fullname,
            email: email,
            phone: phone,
            password: password,
            password_confirmation: password_confirmation,
            address: address,
        }
        console.log(article)
        dispatch(updateUserAsync(article))
        window.location.reload()
    }

    const [fullnameValue,setFullnameValue] = useState('')
    const [passwordValue,setPasswordValue] = useState('')
    const [passwordConfirmationValue,setPasswordConfirmationValue] = useState('')
    const [phoneValue,setPhoneValue] = useState('')
    const [addressValue,setAddressValue] = useState('')
    const [emailValue,setEmailValue] = useState('')
    const [districtValue,setDistrictValue] = useState('')
    const [relevantPersonValue,setRelevantPersonValue] = useState('')

    
    return (
        <div>
        <div id="ebazar-layout" className="theme-blue">
        <div className="sidebar px-4 py-4 py-md-5 me-0">
            <div className="d-flex flex-column h-100">
                    <span className="logo-text">GulAL</span>
                <ul className="menu-list flex-grow-1 mt-3">
                    <li className="collapsed">
                        <a  className="m-link" href="/Hesabim">
                        <AiOutlineUser/>&nbsp;<span>Hesab haqqında</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" href="/Sifarislerim">
                        <GiFlowerEmblem/>&nbsp; <span>Sifarişlərim</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" href="/Sevimliler">
                        <BiHeart/>&nbsp; <span>Sevimlilər</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" href="#">
                        <RiMapPinLine/>&nbsp; <span>Ünvanlarım</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" href="#">
                        <BsPatchQuestion/>&nbsp; <span>Kömək</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    <li className="collapsed">
                        <a onClick={()=>handleLogout()} className="m-link" href="/">
                        <MdOutlineLogout/>&nbsp; <span>Çıxış</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                </ul>
                <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                    <span className="ms-2"><BsChevronDoubleLeft/></span>
                </button>
            </div>
        </div>  

        <div className="main px-lg-4 px-md-4">
            <div className="header">
                <nav className="navbar py-4">
                    <div className="container-xxl">
                        <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                            <div className="dropdown notifications">
                                <a className="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                    <IoMdNotificationsOutline style={{fontSize: '1.3rem'}}/>
                                    <span className="pulse-ring"></span>
                                </a>
                                <div id="NotificationsDiv" className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3">
                                    <div className="card border-0 w380">
                                        <div className="card-header border-0 p-3">
                                            <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                                <span>Notifications</span>
                                                <span className="badge text-white">06</span>
                                            </h5>
                                        </div>
                                        <div className="tab-content card-body">
                                            <div className="tab-pane fade show active">
                                                <ul className="list-unstyled list mb-0">
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="#" className="d-flex">
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Chloe Walkerr</span> <small>2MIN</small></p>
                                                                <span className="">Added New Product 2021-07-15 <span className="badge bg-success">Add</span></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="#" className="d-flex">
                                                            <div className="avatar rounded-circle no-thumbnail">AH</div>
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Alan	Hill</span> <small>13MIN</small></p>
                                                                <span className="">Invoice generator </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="#" className="d-flex">
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Melanie	Oliver</span> <small>1HR</small></p>
                                                                <span className="">Orader  Return RT-00004</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="#" className="d-flex">
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Boris Hart</span> <small>13MIN</small></p>
                                                                <span className="">Product Order to Toyseller</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="#" className="d-flex">
                                                            <img className="avatar rounded-circle" src="assets/images/xs/avatar6.svg" alt=""/>
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Alan	Lambert</span> <small>1HR</small></p>
                                                                <span className="">Leave Apply</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2">
                                                        <a href="#" className="d-flex">
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Zoe Wright</span> <small className="">1DAY</small></p>
                                                                <span className="">Product Stoke Entry Updated</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="card-footer text-center border-top-0" href="#"> View all notifications</a>
                                    </div>
                                </div>
                            </div>
                            <div style={{display: 'flex'},{justifyContent: 'flex-end'}} className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                                <div className="u-info me-2">
                                    <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">{users && users.fullname}</span>&nbsp;<AiOutlineSetting/></p>
                                    <small>İstifadəçi paneli</small>
                                </div>
                                <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                    <div className="card border-0 w280">
                                        <div className="card-body pb-0">
                                            <div className="d-flex py-1">
                                                <div className="flex-fill ms-3">
                                                    <p className="mb-0"><span className="font-weight-bold">{users && users.fullname}</span></p>
                                                    <small className="">{users && users.email}</small>
                                                </div>
                                            </div>
                                            
                                            <div><hr className="dropdown-divider border-dark"/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* <!-- Body: Body --> */}
            <div className="body d-flex py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="border-0 mb-4">
                            <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 className="fw-bold mb-0">İstifadəçi paneli</h3>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- Row end  --> */}
                    <div className="row g-3">
                        <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="card profile-card flex-column mb-3">
                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 className="mb-0 fw-bold ">Profil</h6>
                                </div>
                                <div className="card-body d-flex profile-fulldeatil flex-column">
                                    <div className="profile-block text-center w220 mx-auto">
                                        <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                                            <span className="text-muted small">İstifadəçi ID'si : {users && users.id}</span>
                                        </div>
                                    </div>
                                    <div className="profile-info w-100">
                                        <h6  className="mb-0 mt-2  fw-bold d-block fs-6 text-center">{users && users.fullname}</h6>
                                        <div className="row g-2 pt-2">
                                            <div className="col-xl-12">
                                                <div className="d-flex align-items-center">
                                                    <BsTelephone/>
                                                    <span className="ms-2">{users && users.phone}</span>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="d-flex align-items-center">
                                                    <SiGmail/>
                                                    <span className="ms-2">{users && users.email}</span>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="d-flex align-items-center">
                                                    <RiMapPinLine/>
                                                    <span className="ms-2">{users && users.address}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5>Bildiriş seçimləri</h5>
                                    <span className="text-muted">Bütün bildirişlərinizə nəzarət edin</span>
                                    <div className="mt-4">
                                        <div className="form-check form-switch mt-2">
                                            <input value={passwordConfirmationValue} onChange={(e)=>setPasswordConfirmationValue(e.target.value)} className="form-check-input" type="checkbox" id="np-Newsletter"/>
                                            <label className="form-check-label" htmlFor="np-Newsletter">Yeni məhsul bildirişləri</label>
                                        </div>
                                        <div className="form-check form-switch mt-2">
                                            <input value={passwordConfirmationValue} onChange={(e)=>setPasswordConfirmationValue(e.target.value)} className="form-check-input" type="checkbox" id="np-Notifications"/>
                                            <label className="form-check-label" htmlFor="np-Notifications">Şərh bildirişləri</label>
                                        </div>
                                        <div className="form-check form-switch mt-2">
                                            <input value={passwordConfirmationValue} onChange={(e)=>setPasswordConfirmationValue(e.target.value)} className="form-check-input" type="checkbox" id="np-Preferences"/>
                                            <label className="form-check-label" htmlFor="np-Preferences">Endirim bildirişləri</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="card mb-3">
                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 className="mb-0 fw-bold ">Profil Parametrləri</h6>
                                </div>
                                <div className="card-body">
                                    <form className="row g-4">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="form-label">İstifadəçi adı<span className="text-danger">*</span></label>
                                                <input id='fullname' value={fullnameValue} onChange={(e)=>setFullnameValue(e.target.value)} className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="form-label">Şifrə<span className="text-danger">*</span></label>
                                                <input id='password' value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)} className="form-control" type="Password"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Təkrar Şifrə<span className="text-danger">*</span></label>
                                                <input id='password_confirmation' value={passwordConfirmationValue} onChange={(e)=>setPasswordConfirmationValue(e.target.value)} className="form-control" type="Password" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Əlaqədar şəxs</label>
                                                <input value={relevantPersonValue} onChange={(e)=>setRelevantPersonValue(e.target.value)} className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Mobil Telefon<span className="text-danger">*</span></label>
                                                <input id="phone" value={phoneValue} onChange={(e)=>setPhoneValue(e.target.value)} className="form-control"  type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="form-label">Ünvan<span className="text-danger">*</span> </label>
                                                <textarea id='address' value={addressValue} onChange={(e)=>setAddressValue(e.target.value)} className="form-control"  aria-label="With textarea"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <label className="form-label">Email <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <span className="input-group-text">@</span>
                                                <input id='email' value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} type="email" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label className="form-label">Şəhər</label>
                                                <select className="form-control">
                                                    <option>Bakı</option>
                                                    <option>Sumqayıt</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label className="form-label">Rayon</label>
                                                <input value={districtValue} onChange={(e)=>setDistrictValue(e.target.value)} className="form-control"  type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <button onClick={()=>handleUpdate()} type="button" className="btn btn-primary text-uppercase px-5">Yadda saxla</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card auth-detailblock">
                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 className="mb-0 fw-bold ">Doğrulama Detalları</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label col-6 col-sm-5">İstifadəçi adı :</label>
                                            <span><strong>{users && users.fullname}</strong></span>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label col-6 col-sm-5">Qeydiyyat tarixi :</label>
                                            <span><strong>{users && users.regDate}</strong></span>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label col-6 col-sm-5">Son dəyişiklik tarixi :</label>
                                            <span><strong>{users && users.updateDate}</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
        </div>
    )
}

export default MyProfile;
