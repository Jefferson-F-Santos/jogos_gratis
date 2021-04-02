import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './style.css';

export default function GameDetails(){
    return(
        <div className="container">

            <div className="contConfig contTitleImg">
                <h2>Fogo Gratuito</h2>
                <div className="contImg">
                    <img src="https://s2.glbimg.com/W5wQyoWCaOzDJfzaYACoQydM-iw=/0x0:960x540/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/2/A/aGXhfoT2OoleLfQR7DxQ/5270983224508041-fa6e7ca64f38524aabb856fa5a94378a-1200x0.jpg" />
                </div>
            </div>

            <div className="contConfig contInfo">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lobortis nibh, sed dapibus orci. 
                   Nunc ac viverra diam. Nulla id libero quis purus eleifend consectetur vel at lectus. Vestibulum vitae
                   arcu lacus. Ut odio metus, venenatis id felis id, tempus accumsan justo. Duis interdum varius mi 
                   vestibulum sollicitudin. Sed et lobortis magna. Quisque vitae nisl sed justo bibendum tincidunt a nec 
                   velit. Vivamus sollicitudin nunc orci, eget sagittis est elementum quis. Nulla sit amet rhoncus eros. 
                   Ut sed laoreet massa. </p>
                <p>In risus dui, accumsan laoreet malesuada eu, malesuada sit amet metus. Maecenas et varius purus. 
                   Donec rhoncus sapien vulputate, vulputate erat id, dapibus mauris. Pellentesque dictum euismod 
                   risus, a venenatis velit laoreet fermentum. Aliquam ac odio fermentum, tincidunt est a, aliquet 
                   lorem. Sed ac dignissim velit. Curabitur iaculis lobortis urna, sit amet mattis arcu viverra ac. 
                </p>
            </div>

            <div className="contConfig contCarousel">
                <img src="http://www.conversadesofa.com/wp-content/uploads/2019/09/07-fogo-700x394.png"/>
            </div>

            <div className="contConfig">
                <h3>Requisitos mínimos</h3>
                <div className="tatle">

                    <div className="items">
                        <span>Processador </span>
                        <span>Windows 95</span>
                    </div>
                    <div className="items">
                        <span>Processador </span>
                        <span>Windows 95</span>
                    </div>
                    <div className="items">
                        <span>Processador </span>
                        <span>Windows 95</span>
                    </div>
                    <div className="items">
                        <span>Processador </span>
                        <span>Windows 95</span>
                    </div>

                </div>
            </div>

        </div>
    );
}