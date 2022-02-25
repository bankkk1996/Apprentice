import styles from './Navbar.module.scss'

// ICONS

import { MdOutlineDashboard } from 'react-icons/md'

import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaTimes ,FaUserAlt, FaUserMd, FaUsersCog, FaBars} from 'react-icons/fa'
import { BsThreeDots,BsCardList } from 'react-icons/bs'
import { GiHospital } from 'react-icons/gi'


import { NavLink } from 'react-router-dom'
import { useState } from 'react'



import React from 'react'

const Navbar = () => {

    const [nav, setnav] = useState(true);

    

    const NavUrl =({url, icon, description}) =>{
        const checkWindowSize = ()=>{
            if(window.innerWidth<1024) setnav(!nav)
        }

        return (<li className={styles.li_navlink}>
            <NavLink to={`${url}`} 
            onClick={()=>checkWindowSize()}
            className={({isActive})=>(isActive ? styles.active : undefined)}>
                {icon}
                <span className={styles.description}>{description}</span>
            </NavLink>
        </li>)
    };
    
    return (
        <div className={`${styles.navbar_container} ${nav ? styles.navbar_mobile_active: undefined}`}>
            {/* TEST */}
            <div className={styles.test}>
                <FaBars onClick={()=>{setnav(!nav)}}/>
            </div>
            <nav className={nav ? undefined : styles.nav_small}>
                <div className={styles.logo}>
                    <GiHospital className={styles.logo_icon}/>
                    <FaTimes className={styles.mobile_cancel_icon} onClick={()=> setnav(!nav)}/>
                </div>
                {/* SUBMENU */}
                <ul className={styles.menu_container}>
                    {/* FIRST CATEGORY */}
                    <span className={styles.categories}>
                        {nav ? "Pages" : <BsThreeDots/>}
                    </span>
                    
                    <NavUrl url="/" icon={<MdOutlineDashboard/>} description="Dashboard" />
                    <NavUrl url="/patients" icon={<FaUserAlt/>} description="Patients" />
                    <NavUrl url="/doctors" icon={<FaUserMd/>} description="Doctors" />
                    <NavUrl url="/staffs" icon={<FaUsersCog/>} description="Staff" />
                    {/* SECOND CATEGORY */}
                    <span className={`${styles.categories} ${styles.second_category}`}>
                        {nav ? "More" : <BsThreeDots/>}
                    </span>
                    <NavUrl url="/symptoms" icon={<BsCardList/>} description="Symptoms" />
                    
                </ul>
                {/* LOGOUT BUTTON */}
                <div className={styles.btn_logout} onClick={()=>{setnav(!nav)}}>
                    <AiOutlineArrowRight/>
                </div>
                {/* ADD BACKGROUND FOR MOBILE */}
            </nav>
        </div>
    )
}

export default Navbar;