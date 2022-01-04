import React from "react";
import reactDom from "react-dom";

import './opening.css';

import topImg from "../assets/Ananlystics_Teamwork_01_generated.jpg";
import studentImg from "../assets/students.jpeg";
import teacherImg from "../assets/teachers.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import one from "../assets/1.jpeg";
import two from "../assets/2.jpeg";
import three from "../assets/3.jpeg";
import four from "../assets/4.jpeg";
import testimonialOone from "../assets/t1.jpeg";
import testimonialTwo from "../assets/t2.jpeg";
import testimonialThree from "../assets/t3.jpeg";

import c1 from "../assets/i1.jpg";
import c2 from "../assets/i2.jpg";
import c3 from "../assets/i3.jpg";

const OpeningPage = () => {
    return (
        <div className='opening-page'>
            <div className='opening-page-top'>
                <div className='opening-page-top-text'>
                    <h1>Data & Analytics</h1>
                    <p>In Today’s World, The Data Analysis Method Used For Analysis And Its Derivatives Is Increasing Day By Day. Various Methods And Applications Have Been Developed For The Study Of These High-Scale Data.</p>
                </div>
                <div className='opening-page-top-image'>
                    <img src={topImg} alt='top-image' />
                </div>
            </div>
            <div className='opening-page-top'>
                <div className='opening-page-top-image'>
                    <img src={topImg} alt='top-image' />
                </div>
                <div className='opening-page-top-text'>
                    <h1>Lorem Ipsum</h1>
                    <p>As ANumak & Company, We Are Ready To Support You With Our Expert Staff In This Field. We Will Help You With Our Team, Which Will Lead You To Have A Wider Market Area With Data Analysis Methods, Take The Proper Steps By Developing New Techniques And Strategies, And Gain Momentum In The Direction Of Growth.</p>
                </div>
            </div>
            <div className='opening-page-why'>
                <h1>Why Data Analytics with aNumak</h1>
                <div className='image-carousel'>
                    <Carousel infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={500} showArrows={true} showStatus={false} showThumbs={false} showIndicators={true}>
                        <div>
                            <img src={one} alt='carousel-1st-img' />
                        </div>
                        <div>
                            <img src={two} alt='carousel-2nd-img' />
                        </div>
                        <div>
                            <img src={three} alt='carousel-3rd-img' />
                        </div>
                        <div>
                            <img src={four} alt='carousel-4th-img' />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='opening-page-students'>
                <div className='opening-page-students-image'>
                    <img src={studentImg} alt='students-image' />
                </div>
                <div className='opening-page-students-text'>
                    <h1>Easy to access platform</h1>
                    <p>Learn about different technologies at just the touch of your finger and get certified.</p>
                </div>
            </div>
            <div className='opening-page-teachers'>
                <div className='opening-page-teachers-text'>
                    <h1>Bridge The Gap</h1>
                    <p>Understand what's best for different students and bridge the gap using assignments, worksheets, and regular doubt sessions.</p>
                </div>
                <div className='opening-page-teachers-image'>
                    <img src={teacherImg} alt='teacher-image' />
                </div>
            </div>
            <section className="courses-main">
                <div className="courses-main-heading">
                    <h1>Related articles</h1>
                </div>
                <div className="courses-main-div">
                    <div className="card">
                        <div className="card-img">
                        <img src={c1} alt="course" />
                        </div>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Relational and Non–Relational (NoSQL) Database</a></h5>
                        <p className="card-text">Cisco Certified Network Associate (CCNA), is the basic levek certification course in networking offered by Cisco Systems which covers basics of Cisco Networking secuorty, automation and programmability. You learn Network fundamentals.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                        <img src={c2} alt="course" />
                        </div>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Big Data Analytics</a></h5>
                        <p className="card-text">Microsoft Certified Solutions Associate (MCSA) certifications are the foundation of Microsoft's new generation of cloud-optimized credentials. MCSA certifications validate the skills to implement cloud-optimized technology solutions using a single Microsoft product.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                        <img src={c3} alt="course" />
                        </div>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Enterprise Data Textures Innovation</a></h5>
                        <p className="card-text">Certified Cloud Security Professional applies information security expertise to a cloud computing environment and demonstrates competence in cloud security architecture, design, operations, and service orchestration. This professional competence is measured against a globally recognized body of knowledge.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='opening-page-testimonial'>
                <h1>Proud Members</h1>
                <div className='testimonial-image-carousel'>
                    <Carousel infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={500} showArrows={true} showStatus={false} showThumbs={false} showIndicators={true}>
                        <div>
                            <img src={testimonialOone} alt='carousel-testi-1st-img' />
                        </div>
                        <div>
                            <img src={testimonialTwo} alt='carousel-testi-2nd-img' />
                        </div>
                        <div>
                            <img src={testimonialThree} alt='carousel-testi-3rd-img' />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default OpeningPage;