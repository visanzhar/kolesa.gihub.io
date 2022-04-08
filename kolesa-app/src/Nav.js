import React from "react";
import logo from "./img/logo.svg"

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1em',
        paddingBottom: '1em'
    },
    a: {
        paddingLeft: '1em'
    },
    img: {
        width: '164px',
        height: '45.81px'
    },
    a_add: {
        boxSizing: 'border-box',
        position: 'relative',
        display: 'inline-block',
        border: '3px solid rgba(28,24,25,.1)',
        borderRadius: '3px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px 0 rgb(28 24 25 / 10%)',
        color: '#2a81dd',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        textAlign: 'center',
        padding: '5px 16px',
        fontSize: '14px'
    }
}

const Nav = () => {
    return(
        <div className="Nav" style={styles.nav}>
            <div className="logo">
                <img src={logo} alt="logo" style={styles.img}></img>
            </div>
            <div className="menu" style={styles.menu}>
                <a href="#s" style={styles.a}>Машины</a>
                <a href="#s" style={styles.a}>Запчасти</a>
                <a href="#s" style={styles.a}>Ремонт и услуги</a>
                <a href="#s" style={styles.a}>Коммерческие</a>
                <a href="#s" style={styles.a}>Прочее</a>
                <a href="#s" style={styles.a}>Почитать</a>
                <a href="#s" style={styles.a}>Колеса Гид</a>
            </div>
            <div className="add-a" >
                <a href="#s" style={styles.a_add}>
                    <span class="fi_add"></span>
                    <span class="label">Подать объявление</span>
                </a>
                <div>
                    <label>803 354 Уже на сайте</label>
                </div>
                 
            </div>
            
        </div>
    );
}

export default Nav;