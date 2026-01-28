import React, {useState} from 'react';
import photo from '../img/20250724_1800s51.jpg';
import './presentation.css';
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

function Presentation(){
    return(
        <section id="presentation-section">
            <div className="presentation-content">
                <img src={photo}/>
                <div>
                    <h1 className="presentation-title">Tout d'abord parlons de moi</h1>
                    <div className="presentation-text">
                        <p>Né en 2003 à Ecully près de Lyon, j’ai toujours été fasciné par ce que l’on peut créer avec un
                            ordinateur. Très jeune, j’ai découvert le web en bidoullant des pages, et en explorant les
                            univers visuels qui me faisaient rêver. Aujourd’hui encore, ce qui me motive c’est de donner vie à
                            des idées, que ce soit à travers une interface web fluide qui parle
                            d’elle-même.</p>
                        <p>Après un bac technologique avec une option numérique, j’ai intégré le BUT Informatique de l’IUT Lyon
                            1, où j’ai découvert le développement web et les bases de données. Mes
                            stages et mon alternance m’ont permis de mettre en pratique ces compétences sur des projets
                            concrets, confirmant mon intérêt pour le web et les technologies visuelles.</p>
                        <p>Après une première année de master en intelligence artificielle, j’ai choisi de me recentrer sur une
                            voie plus technique et professionnalisante, dans mon domaine qui me tiens à coeur. J’ai ainsi été
                            admis à l'ESGI de Lyon en alternance, une école reconnue dans le domaine de l’informatique, afin de
                            poursuivre ma spécialisation dans le développement et les technologies web.</p>
                        <a href="/cv-nicolas-dsj.pdf" target='_blank'> {"-> Télécharger mon CV <-"} </a>
                    </div>
                </div>
            </div>

            <div className="presentation-timeline w-100">
                <h2>Mon parcours</h2>
                <MDBContainer fluid className="py-5">
                    <div className="main-timeline">
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3><span className="fs-5">Sept.</span> 2025 - <span className="fs-5">Nov.</span> 2025</h3>
                                    <p className="fst-italic opacity-50">SERAM Industrie - Ambérieux</p>
                                    <p className="mb-0">
                                        Développeur web en alternance.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3><span className="fs-5">Sept.</span> 2025 - <span className="fs-5">Sept.</span> 2027</h3>
                                    <p className="fst-italic opacity-50">ESGI Lyon - Lyon 3e arrondissement</p>
                                    <p className="mb-0">
                                        Titre RNCP de niveau 7 (mastère) Ingénierie du Web en alternance.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3><span className="fs-5">Sept.</span> 2024 - <span className="fs-5">Sept.</span> 2025</h3>
                                    <p className="fst-italic opacity-50">UFR des Sciences de l'Université de Caen Normandie - Caen</p>
                                    <p className="mb-0">
                                        Master 1 Informatique parcours Intelligence Artificielle et Facteurs Humains.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3><span className="fs-5">Sept.</span> 2023 - <span className="fs-5">Sept.</span> 2024</h3>
                                    <p className="fst-italic opacity-50">SDCI - Décines-Charpieu</p>
                                    <p className="mb-0">
                                        Développeur full-stack en alternance.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3><span className="fs-5">Avr.</span> 2023 - <span className="fs-5">Juin</span> 2023</h3>
                                    <p className="fst-italic opacity-50">Femmes d'AURA - Lyon 9e</p>
                                    <p className="mb-0">
                                        Stage en développement web.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline right">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3><span className="fs-5">Sept.</span> 2021 - <span className="fs-5">Sept.</span> 2024</h3>
                                    <p className="fst-italic opacity-50">IUT Lyon 1 - Villeurbanne</p>
                                    <p className="mb-0">
                                        BUT Informatique à l'IUT Lyon 1 parcours Réalisation d'Applications.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="timeline left">
                            <MDBCard>
                                <MDBCardBody className="p-4">
                                    <h3><span className="fs-5">Sept.</span> 2019 - <span className="fs-5">Juin</span> 2021</h3>
                                    <p className="fst-italic opacity-50">Cité scolaire de Tarare - Tarare</p>
                                    <p className="mb-0">
                                        Baccalauréat STI2D spécialité Systèmes d'Information et Numérique - Mention Assez Bien.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                </MDBContainer>
            </div>
        </section>
    );
}

export default Presentation;
