import React from 'react'

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '1em',
        paddingBottom: '1em'
    },
    a: {
        paddingLeft: '1em'
    }
}

const Header = () => {
    return(
        <div className='Header' style={styles.header}>
            <header>
                <a href='#s' style={styles.a}> Регистрация</a>
                <a href='#s' style={styles.a}> Личный кабинет</a>
            </header>
            
        </div>
    );
}

export default Header;