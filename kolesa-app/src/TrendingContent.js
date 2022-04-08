import React from "react";


const styles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    content_title: {
        alignSelf: 'flex-start'
    },
    galery: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },
    img: {
        width: '120px',
        height: '90px'
    }
      
}


let Trending = () => {
    return(
        <div className="content" style={ styles.content }>
            <div style={styles.content_title}>
                <h2>Горячие предложения по продаже авто в Казахстане</h2>
            </div>
            
            <div className="photo-gallery" style={styles.galery}>
                <div className="photo-gallery-item" >
                    <img src="https://photos-kl.kcdn.kz/webp/da/da56e809-5966-4463-8e39-0179cbc3612e/1-120x90.jpg" alt="car" style={ styles.img }></img>
                </div>
                <div className="photo-gallery-item" >
                    <img src="https://photos-kl.kcdn.kz/webp/13/1392189e-fa5c-4083-8340-f62aee5e589b/1-200x150.webp" alt="car" style={ styles.img }></img>
                </div>
                <div className="photo-gallery-item" >
                    <img src="https://photos-kl.kcdn.kz/webp/86/86a2a18a-78bd-4029-b634-4403ebaf974c/32-120x90.webp" alt="car" style={ styles.img }></img>
                </div>
                <div className="photo-gallery-item" >
                    <img src="https://photos-kl.kcdn.kz/webp/8b/8b72f8c2-a3bd-4cb4-8af8-d3a3656bffea/4-120x90.webp" alt="car" style={ styles.img }></img>
                </div>
                <div className="photo-gallery-item" >
                    <img src="https://photos-kl.kcdn.kz/webp/cc/cc92217d-3c57-4c03-86c6-561c3fc6521b/3-120x90.webp" alt="car" style={ styles.img }></img>
                </div>
                <div className="photo-gallery-item" >
                    <img src="https://photos-kl.kcdn.kz/webp/37/373a0385-43c4-4997-8e90-69d51023f5cf/7-120x90.webp" alt="car" style={ styles.img }></img>
                </div>
                <div className="photo-gallery-item" >
                    <img src="https://photos-kl.kcdn.kz/webp/de/decf0368-a918-41a6-ad5a-1416fd179e66/1-120x90.webp" alt="car" style={ styles.img }></img>
                </div>
                <div className="photo-gallery-item" >
                    <img src="https://photos-kl.kcdn.kz/webp/9b/9b30ca37-a521-4905-a70c-b5b4238d06c8/1-120x90.webp" alt="car" style={ styles.img }></img>
                </div>
            </div>
        
        </div>
    );
}

export default Trending;
