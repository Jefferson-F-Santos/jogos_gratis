import React, { useState } from 'react';

import './style.css';

export default function CarouselImgsGames({image}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(image[currentIndex].image)
    const imageArrayLength = image.length

    const changeImage = async () => {
        if (currentIndex === imageArrayLength -1) {
            await setCurrentIndex(0)
            setCurrentImage(image[currentIndex].image)
        }   else {
            await setCurrentIndex(currentIndex + 1)
            setCurrentImage(image[currentIndex].image)
        }
    }

    setTimeout( async () => {
        await changeImage()
    }, 3000);

    // const btnsCarousel = (clicked) => {
    //     if(clicked === "add") return ""
    //     else return ""
    // }

    console.log(imageArrayLength)
    
    return (
        <div className="carouselContainer" onClick={() => alert(JSON.stringify(image))}>

            <img src={currentImage} />

        </div>
    );
}