import React from "react";

let styles = {
    footer: {
        paddingTop: '2em',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '1em'
    }
}

const Footer = () => {
    return(
        <div className="footer" style={styles.footer}>
            <a href="#s">Колеса</a>
            <a href="#s">Машины</a>
            <a href="#s">Запчасти</a>
            <a href="#s">Ремонт и услуги</a>
            <a href="#s">Коммерческие</a>
            <a href="#s">Прочее</a>
            <a href="#s">Почитать</a>
            <a href="#s">Колеса Гид</a>
        </div>
    );
}

export default Footer;