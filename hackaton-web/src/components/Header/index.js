import React, { useEffect, useState } from 'react';
import Logo from "../../assets/Logo.js";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import "./style.scss";

const Header = (user) => {

    const [student, setStudent] = useState({});

    useEffect(() => {
        setStudent(user.student);
    })


    return (
    <header className="header" >
        <div className="header__wrapper container" >
            <Link to="/" className="header__logo" >
                <Logo />               
                </Link> 
                <div className="header__menu" >
                    <ul className="header__list" >
                        <li >
                            <Link to=""
                                className="header__item" >
                                Como funciona 
                            </Link>             
                        </li > 
                    </ul> 
                </div > 
                <div className="header__nav" >
                    <Link to={student.name ? "/dashboard" : "/login"}                                        className="header__icon" >
                        <i className="fas fa-user" > </i> 
                        {!student.name ? <span className="header__label" > Login </span> : <span className="header__label"> {student.name.split(" ")[0]} </span>} 
                    </Link> 
                    <Link to="/register" className="header__icon" >
                        <span className="header__label" >
                                 Registrar
                        </span> 
                    </Link > 
                </div> 
        </div > 
    </header> )
                                                    }
                                                    
export default connect(state => ({...state }))(Header)