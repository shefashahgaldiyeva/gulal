import React,{ useEffect } from 'react'
// import styles from '../css/MyProfile.module.css'
import '../css/MyProfilePure.css'
// import '../css/MyProfilePure2.css'
import styles from '../css/TopHeader.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { loadUsersAsync } from '../redux/reducers/users/users.thunks'
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
// import { RiMapPinLine } from 'react-icons/ri'
// import { RiMapPinLine } from 'react-icons/ri'
// import { RiMapPinLine } from 'react-icons/ri'

function MyProfile() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsersAsync())
    }, [])

    const authUser = useSelector((state) => state.users);
    if(authUser.isLoading && !authUser.users){
        return (<h1>Gozleyin ...</h1>)
    }


    return (
        <div>
            <div id="ebazar-layout" className="theme-blue">
        
        {/* <!-- sidebar --> */}
        <div className="sidebar px-4 py-4 py-md-5 me-0">
            <div className="d-flex flex-column h-100">
                {/* <a href="index.html" className="mb-0 brand-icon"> */}
                    {/* <span className="logo-icon"> */}
                        {/* <BiSpa  style={{display: 'inline-blocks'}}/> */}
                    {/* </span> */}
                    <span className="logo-text">GulAL</span>
                {/* </a> */}
                {/* <!-- Menu: main ul --> */}
                <ul className="menu-list flex-grow-1 mt-3">
                    {/* <li><a className="m-link" href="index.html"><i className="icofont-home fs-5"></i> <span>Dashboard</span></a></li> */}
                    <li className="collapsed">
                        <a  className="m-link" href="#">
                        <AiOutlineUser/>&nbsp;<span>Hesab haqqında</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" href="#">
                        <GiFlowerEmblem/>&nbsp; <span>Sifarişlərim</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" href="#">
                        <BiHeart/>&nbsp; <span>Sevimlilər</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" href="#">
                        <RiMapPinLine/>&nbsp; <span>Ünvanlarım</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    {/* <li className="collapsed">
                        <a className="m-link" href="#">
                        <i className="icofont-sale-discount fs-5"></i> <span>Sales Promotion</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li> */}
                    <li className="collapsed">
                        <a className="m-link" href="#">
                        <BsPatchQuestion/>&nbsp; <span>Kömək</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    {/* <li className="collapsed">
                        <a className="m-link" href="#">
                        <i className="icofont-ui-calculator"></i> <span>Accounts</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li> */}
                    <li className="collapsed">
                        <a className="m-link" href="#">
                        <MdOutlineLogout/>&nbsp; <span>Çıxış</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li>
                    {/* <li><a className="m-link" href="store-locator.html"><i className="icofont-focus fs-5"></i> <span>Store Locator</span></a></li> */}
                    {/* <li><a className="m-link" href="ui-elements/ui-alerts.html"><i className="icofont-paint fs-5"></i> <span>UI Components</span></a></li> */}
                    {/* <li className="collapsed">
                        <a className="m-link active" href="#">
                        <i className="icofont-page fs-5"></i> <span>Ana Səhifə</span> <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                    </li> */}
                </ul>
                {/* <!-- Menu: menu collepce btn --> */}
                <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                    <span className="ms-2"><BsChevronDoubleLeft/></span>
                </button>
            </div>
        </div>  

        {/* <!-- main body area --> */}
        <div className="main px-lg-4 px-md-4">

            {/* <!-- Body: Header --> */}
            <div className="header">
                <nav className="navbar py-4">
                    <div className="container-xxl">
        
                        {/* <!-- header rightbar icon --> */}
                        <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                            <div className="d-flex">
                                {/* <a className="nav-link text-primary collapsed" href="help.html" title="Get Help"> */}
                                    {/* <i className="icofont-info-square fs-5"></i> */}
                                {/* </a> */}
                            </div>
                            <div className={styles.langbar}>
                                        <span>AZ &nbsp; <AiFillCaretDown/></span>
                                        <div className={styles.activeDropdown}>
                                            <a href='#'>EN</a>
                                            <a href='#'>RU</a>
                                        </div>
                            </div>
                            {/* <div className="dropdown zindex-popover">
                                <a className="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                    <img src="assets/images/flag/GB.png" alt=""/>
                                </a>
                                <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3">
                                  
                                    <div className="card border-0">
                                        <ul className="list-unstyled py-2 px-3">
                                            <li>
                                                <a href="#" className=""><img src="assets/images/flag/GB.png" alt=""/> English</a>
                                            </li>
                                            <li>
                                                <a href="#" className=""><img src="assets/images/flag/DE.png" alt=""/> German</a>
                                            </li>
                                            <li>
                                                <a href="#" className=""><img src="assets/images/flag/FR.png" alt=""/> French</a>
                                            </li>
                                            <li>
                                                <a href="#" className=""><img src="assets/images/flag/IT.png" alt=""/> Italian</a>
                                            </li>
                                            <li>
                                                <a href="#" className=""><img src="assets/images/flag/RU.png" alt=""/> Russian</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            
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
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            {/* <img className="avatar rounded-circle" src="assets/images/xs/avatar1.svg" alt=""/> */}
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Chloe Walkerr</span> <small>2MIN</small></p>
                                                                <span className="">Added New Product 2021-07-15 <span className="badge bg-success">Add</span></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            <div className="avatar rounded-circle no-thumbnail">AH</div>
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Alan	Hill</span> <small>13MIN</small></p>
                                                                <span className="">Invoice generator </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            {/* <img className="avatar rounded-circle" src="assets/images/xs/avatar3.svg" alt=""/> */}
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Melanie	Oliver</span> <small>1HR</small></p>
                                                                <span className="">Orader  Return RT-00004</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            {/* <img className="avatar rounded-circle" src="assets/images/xs/avatar5.svg" alt=""/> */}
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Boris Hart</span> <small>13MIN</small></p>
                                                                <span className="">Product Order to Toyseller</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            <img className="avatar rounded-circle" src="assets/images/xs/avatar6.svg" alt=""/>
                                                            <div className="flex-fill ms-2">
                                                                <p className="d-flex justify-content-between mb-0 "><span className="font-weight-bold">Alan	Lambert</span> <small>1HR</small></p>
                                                                <span className="">Leave Apply</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="py-2">
                                                        <a href="javascript:void(0);" className="d-flex">
                                                            {/* <img className="avatar rounded-circle" src="assets/images/xs/avatar7.svg" alt=""/> */}
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
                                    <p className="mb-0 text-end line-height-sm "><span className="font-weight-bold">John Quinn</span>&nbsp;<AiOutlineSetting/></p>
                                    <small>İstifadəçi paneli</small>
                                </div>
                                {/* <a className="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                                    <img className="avatar lg rounded-circle img-thumbnail" src="assets/images/profile_av.svg" alt="profile"/>
                                </a> */}
                                <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                    <div className="card border-0 w280">
                                        <div className="card-body pb-0">
                                            <div className="d-flex py-1">
                                                {/* <img className="avatar rounded-circle" src="assets/images/profile_av.svg" alt="profile"/> */}
                                                <div className="flex-fill ms-3">
                                                    <p className="mb-0"><span className="font-weight-bold">John	Quinn</span></p>
                                                    <small className="">Johnquinn@gmail.com</small>
                                                </div>
                                            </div>
                                            
                                            <div><hr className="dropdown-divider border-dark"/></div>
                                        </div>
                                        <div className="list-group m-2 ">
                                            {/* <a href="admin-profile.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-ui-user fs-5 me-3"></i>Profile Page</a>
                                            <a href="order-invoices.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-file-text fs-5 me-3"></i>Order Invoices</a>
                                            <a href="ui-elements/auth-signin.html" className="list-group-item list-group-item-action border-0 "><i className="icofont-logout fs-5 me-3"></i>Signout</a> */}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="setting ms-2">
                                <a href="#" data-bs-toggle="modal" data-bs-target="#Settingmodal"><i className="icofont-gear-alt fs-5"></i></a>
                            </div> */}
                        </div>
        
                        {/* <!-- menu toggler --> */}
                        {/* <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                            <span className="fa fa-bars"></span>
                        </button> */}
        
                        {/* <!-- main menu Search--> */}
                        {/* <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                            <div className="input-group flex-nowrap input-group-lg">
                                <input type="search" className="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping"/>
                                <button type="button" className="input-group-text" id="addon-wrapping"><i className="fa fa-search"></i></button>
                                
                            </div>
                        </div> */}
        
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
                                        {/* <a href="#"> */}
                                            {/* <img src="assets/images/lg/avatar4.svg" alt="" className="avatar xl rounded img-thumbnail shadow-sm"/> */}
                                        {/* </a> */}
                                        {/* <button className="btn btn-primary" style="position: absolute;top:15px;right: 15px;" data-bs-toggle="modal" data-bs-target="#editprofile"><i className="icofont-edit"></i></button> */}
                                        <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                                            <span className="text-muted small">İstifadəçi ID'si : {authUser.users.user.id}</span>
                                        </div>
                                    </div>
                                    <div className="profile-info w-100">
                                        <h6  className="mb-0 mt-2  fw-bold d-block fs-6 text-center">{authUser.users.user.fullanme}</h6>
                                        {/* <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">24 years, California</span> */}
                                        {/* <p className="mt-2">Duis felis ligula, pharetra at nisl sit amet, ullamcorper fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed tristique scelerisque arcu id dignissim.</p> */}
                                        <div className="row g-2 pt-2">
                                            <div className="col-xl-12">
                                                <div className="d-flex align-items-center">
                                                    <BsTelephone/>
                                                    <span className="ms-2">{authUser.users.user.phone}</span>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="d-flex align-items-center">
                                                    <SiGmail/>
                                                    <span className="ms-2">{authUser.users.user.email}</span>
                                                </div>
                                            </div>
                                            {/* <div className="col-xl-12">
                                                <div className="d-flex align-items-center">
                                                    <i className="icofont-birthday-cake"></i>
                                                    <span className="ms-2">19/03/1980</span>
                                                </div>
                                            </div> */}
                                            <div className="col-xl-12">
                                                <div className="d-flex align-items-center">
                                                    <RiMapPinLine/>
                                                    <span className="ms-2">2734  West Fork Street,EASTON 02334.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card mb-3">
                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 className="mb-0 fw-bold ">Payment Method</h6>
                                </div>
                                <div className="card-body">
                                    <div className="payment-info">
                                        <h5 className="payment-name text-muted"><i className="icofont-visa-alt fs-3"></i> Visa *******7548</h5>
                                        <span>Next billing charged $48</span>
                                        <br/>
                                        <em className="text-muted">Autopay on July 20, 2021</em>
                                        <a href="javascript:void(0);" className="edit-payment-info text-secondary">Edit Payment Info</a>
                                    </div>
                                    <p className="mt-3"><a href="javascript:void(0);" className="btn btn-primary"> Add Payment Info</a></p>
                                </div>
                            </div> */}
                            <div className="card">
                                <div className="card-body">
                                    <h5>Bildiriş seçimləri</h5>
                                    <span className="text-muted">Bütün bildirişlərinizə nəzarət edin</span>
                                    <div className="mt-4">
                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox" id="np-Newsletter"/>
                                            <label className="form-check-label" for="np-Newsletter">Yeni məhsul bildirişləri</label>
                                        </div>
                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox" id="np-Notifications"/>
                                            <label className="form-check-label" for="np-Notifications">Şərh bildirişləri</label>
                                        </div>
                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox" id="np-Preferences"/>
                                            <label className="form-check-label" for="np-Preferences">Endirim bildirişləri</label>
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
                                                <label className="form-label">İstifadəçi adı</label>
                                                <input className="form-control"  value={'salam'} type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="form-label">Şifrə</label>
                                                <input className="form-control" type="Password"/>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-4 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Company Name <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" value=""/>
                                            </div>
                                        </div> */}
                                        <div className="col-md-4 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Əlaqədar şəxs</label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">Mobil Telefon <span className="text-danger">*</span></label>
                                                <input className="form-control"  type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label className="form-label">Address</label>
                                                <textarea className="form-control"  aria-label="With textarea"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <label className="form-label">Email <span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <span className="input-group-text">@</span>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6 col-sm-12">
                                            <label className="form-label">Website Url</label>
                                            <div className="input-group">
                                                <span className="input-group-text">http://</span>
                                                <input type="text" className="form-control" value=""/>
                                            </div>
                                        </div> */}
                                        {/* <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label className="form-label">Country</label>
                                                <select className="form-control">
                                                    <option value="">-- Select Country --</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AX">Åland Islands</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua and Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="AU">Australia</option>
                                                    <option value="AT">Austria</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BS">Bahamas</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="BY">Belarus</option>
                                                    <option value="BE">Belgium</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="BO">Bolivia, Plurinational State of</option>
                                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                    <option value="BW">Botswana</option>
                                                    <option value="BV">Bouvet Island</option>
                                                    <option value="BR">Brazil</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="BN">Brunei Darussalam</option>
                                                    <option value="BG">Bulgaria</option>
                                                    <option value="BF">Burkina Faso</option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CM">Cameroon</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="KY">Cayman Islands</option>
                                                    <option value="CF">Central African Republic</option>
                                                    <option value="TD">Chad</option>
                                                    <option value="CL">Chile</option>
                                                    <option value="CN">China</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                    <option value="CO">Colombia</option>
                                                    <option value="KM">Comoros</option>
                                                    <option value="CG">Congo</option>
                                                    <option value="CD">Congo, the Democratic Republic of the</option>
                                                    <option value="CK">Cook Islands</option>
                                                    <option value="CR">Costa Rica</option>
                                                    <option value="CI">Côte d'Ivoire</option>
                                                    <option value="HR">Croatia</option>
                                                    <option value="CU">Cuba</option>
                                                    <option value="CW">Curaçao</option>
                                                    <option value="CY">Cyprus</option>
                                                    <option value="CZ">Czech Republic</option>
                                                    <option value="DK">Denmark</option>
                                                    <option value="DJ">Djibouti</option>
                                                    <option value="DM">Dominica</option>
                                                    <option value="DO">Dominican Republic</option>
                                                    <option value="EC">Ecuador</option>
                                                    <option value="EG">Egypt</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="GQ">Equatorial Guinea</option>
                                                    <option value="ER">Eritrea</option>
                                                    <option value="EE">Estonia</option>
                                                    <option value="ET">Ethiopia</option>
                                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                                    <option value="FO">Faroe Islands</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="FR">France</option>
                                                    <option value="GF">French Guiana</option>
                                                    <option value="PF">French Polynesia</option>
                                                    <option value="TF">French Southern Territories</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="DE">Germany</option>
                                                    <option value="GH">Ghana</option>
                                                    <option value="GI">Gibraltar</option>
                                                    <option value="GR">Greece</option>
                                                    <option value="GL">Greenland</option>
                                                    <option value="GD">Grenada</option>
                                                    <option value="GP">Guadeloupe</option>
                                                    <option value="GU">Guam</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GN">Guinea</option>
                                                    <option value="GW">Guinea-Bissau</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HM">Heard Island and McDonald Islands</option>
                                                    <option value="VA">Holy See (Vatican City State)</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="HU">Hungary</option>
                                                    <option value="IS">Iceland</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran, Islamic Republic of</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IE">Ireland</option>
                                                    <option value="IM">Isle of Man</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="IT">Italy</option>
                                                    <option value="JM">Jamaica</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                                    <option value="KR">Korea, Republic of</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Lao People's Democratic Republic</option>
                                                    <option value="LV">Latvia</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LR">Liberia</option>
                                                    <option value="LY">Libya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Lithuania</option>
                                                    <option value="LU">Luxembourg</option>
                                                    <option value="MO">Macao</option>
                                                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                    <option value="MG">Madagascar</option>
                                                    <option value="MW">Malawi</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="MH">Marshall Islands</option>
                                                    <option value="MQ">Martinique</option>
                                                    <option value="MR">Mauritania</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Mexico</option>
                                                    <option value="FM">Micronesia, Federated States of</option>
                                                    <option value="MD">Moldova, Republic of</option>
                                                    <option value="MC">Monaco</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="ME">Montenegro</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MA">Morocco</option>
                                                    <option value="MZ">Mozambique</option>
                                                    <option value="MM">Myanmar</option>
                                                    <option value="NA">Namibia</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NL">Netherlands</option>
                                                    <option value="NC">New Caledonia</option>
                                                    <option value="NZ">New Zealand</option>
                                                    <option value="NI">Nicaragua</option>
                                                    <option value="NE">Niger</option>
                                                    <option value="NG">Nigeria</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="NF">Norfolk Island</option>
                                                    <option value="MP">Northern Mariana Islands</option>
                                                    <option value="NO">Norway</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PW">Palau</option>
                                                    <option value="PS">Palestinian Territory, Occupied</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua New Guinea</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="PN">Pitcairn</option>
                                                    <option value="PL">Poland</option>
                                                    <option value="PT">Portugal</option>
                                                    <option value="PR">Puerto Rico</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="RE">Réunion</option>
                                                    <option value="RO">Romania</option>
                                                    <option value="RU">Russian Federation</option>
                                                    <option value="RW">Rwanda</option>
                                                    <option value="BL">Saint Barthélemy</option>
                                                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                    <option value="LC">Saint Lucia</option>
                                                    <option value="MF">Saint Martin (French part)</option>
                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                                    <option value="WS">Samoa</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="ST">Sao Tome and Principe</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="RS">Serbia</option>
                                                    <option value="SC">Seychelles</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                                    <option value="SK">Slovakia</option>
                                                    <option value="SI">Slovenia</option>
                                                    <option value="SB">Solomon Islands</option>
                                                    <option value="SO">Somalia</option>
                                                    <option value="ZA">South Africa</option>
                                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                    <option value="SS">South Sudan</option>
                                                    <option value="ES">Spain</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SD">Sudan</option>
                                                    <option value="SR">Suriname</option>
                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                    <option value="SZ">Swaziland</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="CH">Switzerland</option>
                                                    <option value="SY">Syrian Arab Republic</option>
                                                    <option value="TW">Taiwan, Province of China</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TZ">Tanzania, United Republic of</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TL">Timor-Leste</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad and Tobago</option>
                                                    <option value="TN">Tunisia</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="TC">Turks and Caicos Islands</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukraine</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="GB">United Kingdom</option>
                                                    <option value="US">United States</option>
                                                    <option value="UM">United States Minor Outlying Islands</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                    <option value="VN">Viet Nam</option>
                                                    <option value="VG">Virgin Islands, British</option>
                                                    <option value="VI">Virgin Islands, U.S.</option>
                                                    <option value="WF">Wallis and Futuna</option>
                                                    <option value="EH">Western Sahara</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="ZM">Zambia</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </select>
                                            </div>
                                        </div> */}
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
                                                <input className="form-control"  type="text"/>
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label className="form-label">Postal Code</label>
                                                <input className="form-control"  type="text"/>
                                            </div>
                                        </div> */}
                                        
                                        <div className="col-12 mt-4">
                                            <button type="button" className="btn btn-primary text-uppercase px-5">Yadda saxla</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card auth-detailblock">
                                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 className="mb-0 fw-bold ">Doğrulama Detalları</h6>
                                    {/* <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authchange"><i className="icofont-edit"></i></button> */}
                                </div>
                                <div className="card-body">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label col-6 col-sm-5">İstifadəçi adı :</label>
                                            <span><strong>Adrian007</strong></span>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label col-6 col-sm-5">Şifrə :</label>
                                            <span><strong>Abc*******</strong></span>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label col-6 col-sm-5">Sonuncu Şifrə :</label>
                                            <span><strong>128.456.89 (Apple) safari</strong></span>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label col-6 col-sm-5">Son parol dəyişikliyi :</label>
                                            <span><strong>3 Ay Əvvəl</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* <!-- Modal Custom Settings--> */}
            <div className="modal fade right" id="Settingmodal" tabindex="-1"  aria-hidden="true">
                <div className="modal-dialog  modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Custom Settings</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body custom_setting">
                            {/* <!-- Settings: Color --> */}
                            <div className="setting-theme pb-3">
                                <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-color-bucket fs-4 me-2 text-primary"></i>Template Color Settings</h6>
                                <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                                    {/* <li data-theme="indigo"><div className="indigo"></div></li>
                                    <li data-theme="tradewind"><div className="tradewind"></div></li>
                                    <li data-theme="monalisa"><div className="monalisa"></div></li>
                                    <li data-theme="blue" className="active"><div className="blue"></div></li>
                                    <li data-theme="cyan"><div className="cyan"></div></li>
                                    <li data-theme="green"><div className="green"></div></li>
                                    <li data-theme="orange"><div className="orange"></div></li>
                                    <li data-theme="blush"><div className="blush"></div></li>
                                    <li data-theme="red"><div className="red"></div></li> */}
                                </ul>
                            </div>
                            <div className="sidebar-gradient py-3">
                                <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-paint fs-4 me-2 text-primary"></i>Sidebar Gradient</h6>
                                <div className="form-check form-switch gradient-switch pt-2 mb-2">
                                    <input className="form-check-input" type="checkbox" id="CheckGradient"/>
                                    <label className="form-check-label" for="CheckGradient">Enable Gradient! ( Sidebar )</label>
                                </div>
                            </div>
                            {/* <!-- Settings: Template dynamics --> */}
                            <div className="dynamic-block py-3">
                                <ul className="list-unstyled choose-skin mb-2 mt-1">
                                    {/* <li data-theme="dynamic"><div className="dynamic"><i className="icofont-paint me-2"></i> Click to Dyanmic Setting</div></li> */}
                                </ul>
                                <div className="dt-setting">
                                    <ul className="list-group list-unstyled mt-1">
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                            <label>Primary Color</label>
                                            <button id="primaryColorPicker" className="btn bg-primary avatar xs border-0 rounded-0"></button>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                            <label>Secondary Color</label>
                                            <button id="secondaryColorPicker" className="btn bg-secondary avatar xs border-0 rounded-0"></button>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                            <label className="text-muted">Chart Color 1</label>
                                            <button id="chartColorPicker1" className="btn chart-color1 avatar xs border-0 rounded-0"></button>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                            <label className="text-muted">Chart Color 2</label>
                                            <button id="chartColorPicker2" className="btn chart-color2 avatar xs border-0 rounded-0"></button>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                            <label className="text-muted">Chart Color 3</label>
                                            <button id="chartColorPicker3" className="btn chart-color3 avatar xs border-0 rounded-0"></button>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                            <label className="text-muted">Chart Color 4</label>
                                            <button id="chartColorPicker4" className="btn chart-color4 avatar xs border-0 rounded-0"></button>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                            <label className="text-muted">Chart Color 5</label>
                                            <button id="chartColorPicker5" className="btn chart-color5 avatar xs border-0 rounded-0"></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Settings: Font --> */}
                            <div className="setting-font py-3">
                                <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-font fs-4 me-2 text-primary"></i> Font Settings</h6>
                                <ul className="list-group font_setting mt-1">
                                    <li className="list-group-item py-1 px-2">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="radio" name="font" id="font-poppins" value="font-poppins"/>
                                            <label className="form-check-label" for="font-poppins">
                                                Poppins Google Font
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-1 px-2">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="radio" name="font" id="font-opensans" value="font-opensans" checked=""/>
                                            <label className="form-check-label" for="font-opensans">
                                                Open Sans Google Font
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-1 px-2">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="radio" name="font" id="font-montserrat" value="font-montserrat"/>
                                            <label className="form-check-label" for="font-montserrat">
                                                Montserrat Google Font
                                            </label>
                                        </div>
                                    </li>
                                    <li className="list-group-item py-1 px-2">
                                        <div className="form-check mb-0">
                                            <input className="form-check-input" type="radio" name="font" id="font-mukta" value="font-mukta"/>
                                            <label className="form-check-label" for="font-mukta">
                                                Mukta Google Font
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Settings: Light/dark --> */}
                            <div className="setting-mode py-3">
                                <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i className="icofont-layout fs-4 me-2 text-primary"></i>Contrast Layout</h6>
                                <ul className="list-group list-unstyled mb-0 mt-1">
                                    <li className="list-group-item d-flex align-items-center py-1 px-2">
                                        <div className="form-check form-switch theme-switch mb-0">
                                            <input className="form-check-input" type="checkbox" id="theme-switch"/>
                                            <label className="form-check-label" for="theme-switch">Enable Dark Mode!</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center py-1 px-2">
                                        <div className="form-check form-switch theme-high-contrast mb-0">
                                            <input className="form-check-input" type="checkbox" id="theme-high-contrast"/>
                                            <label className="form-check-label" for="theme-high-contrast">Enable High Contrast</label>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center py-1 px-2">
                                        <div className="form-check form-switch theme-rtl mb-0">
                                            <input className="form-check-input" type="checkbox" id="theme-rtl"/>
                                            <label className="form-check-label" for="theme-rtl">Enable RTL Mode!</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-start">
                            {/* <button type="button" className="btn btn-white border lift" data-dismiss="modal">Close</button> */}
                            <button type="button" className="btn btn-primary lift">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div> 

            {/* <!-- Edit Password--> */}
            <div className="modal fade" id="authchange" tabindex="-1"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title  fw-bold" id="expeditLabel"> Edit Authentication</h5>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        
                        <div className="deadline-form">
                            <form>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-6">
                                        <label for="item1" className="form-label">User Name</label>
                                        <input type="text" className="form-control" id="item1" value="Adrian007"/> 
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="taxtno111" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="taxtno111" value="abcxyzabc"/>
                                    </div>
                                    <div className="col-sm-12">
                                        <label for="taxtno11" className="form-label">Conform Password</label>
                                        <input type="text" className="form-control" id="taxtno11"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button> */}
                        <button type="submit" className="btn btn-primary">Yadda saxla</button>
                    </div>
                </div>
                </div>
            </div>

            {/* <!-- Edit profile--> */}
            <div className="modal fade" id="editprofile" tabindex="-1"  aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title  fw-bold" id="expeditLabel1111"> Edit Profile</h5>
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                    </div>
                    <div className="modal-body">
                        
                        <div className="deadline-form">
                            <form>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-12">
                                        <label for="item100" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="item100" value="Adrian Allan"/> 
                                    </div>
                                    <div className="col-sm-12">
                                        <label for="taxtno200" className="form-label">Profile</label>
                                        <input type="file" className="form-control" id="taxtno200"/>
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-12">
                                        <label className="form-label">Details</label>
                                        <textarea className="form-control" rows="3">Duis felis ligula, pharetra at nisl sit amet, ullamcorper fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed tristique scelerisque arcu id dignissim. Aenean sed erat ut est commodo tristique ac a metus. Praesent efficitur congue orci. Fusce in mi condimentum mauris maximus sodales. Quisque dictum est augue, vitae cursus quam finibus in. Nulla at tempus enim. Fusce sed mi et nibh laoreet consectetur nec vitae lacus.</textarea>
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                <div className="col-sm-6">
                                    <label className="form-label">Country</label>
                                    <input type="text" className="form-control" value="California"/>
                                </div>
                                <div className="col-sm-6">
                                    <label for="abc1" className="form-label">Birthday date</label>
                                    <input type="date" className="form-control w-100" id="abc1" value="1980-03-19"/>
                                </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-6">
                                    <label for="mailid" className="form-label">Mail</label>
                                    <input type="text" className="form-control" id="mailid" value="adrianallan@gmail.com"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="phoneid" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="phoneid" value="202-555-0174"/>
                                    </div>
                                </div>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-12">
                                        <label className="form-label">Address</label>
                                        <textarea className="form-control" rows="3">2734 West Fork Street,EASTON 02334.</textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button> */}
                        <button type="submit" className="btn btn-primary">Yadda saxla</button>
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
