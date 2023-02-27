import React from 'react'
import "../styles/About.css"
import couch_png from '../images/couch.png'
import "../styles/Style.css"



const about =() => {
    return (
        <div class="hero" id ="nav">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                        <h1>Rêver plus<span class="d-block">GRAND</span></h1>
                        <p class="mb-4">Magasins de sport. Vélos, skis, articles et matériel de sport pour la randonnée, la musculation, le fitness, le running, le football et toutes ...</p>
                        <p><a href="a" class="btn btn-secondary me-2">Voir plus </a></p>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="hero-img-wrap">
                        <img src={couch_png} alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                    <img src={couch_png} alt="" class="img-fluid" />
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="hero-img-wrap">
                        <img src={couch_png} alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default about