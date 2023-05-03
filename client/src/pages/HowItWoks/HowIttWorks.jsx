import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import CONSTANTS from '../../constants';
import SlideBar from '../../components/SlideBar/SlideBar';
import Footer from '../../components/Footer/Footer';
import carouselConstants from '../../carouselConstants';
import Spinner from '../../components/Spinner/Spinner';
import styles from './HowItWorks.module.sass';
import { FaPlay } from "react-icons/fa";

const howItWorks = () => {
  return (
    <>
        <Header />
          <div className={styles.container}>
            <div className={styles.HowDoesItWorks}>
              <img 
                src={`${CONSTANTS.STATIC_IMAGES_PATH}tag.png`}
                alt='что-то пошло не так'
              />
              <h1>How Does Squadhelp Work?</h1>
              <p>
              Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.
              </p>
              <div className={styles.playVideo}>
              <FaPlay/>
                Play Video
              </div>
            </div>
            
          </div>
        <Footer />
    </>
  )
}

const mapStateToProps = state => state.userStore.data;

export default connect(mapStateToProps)(howItWorks); 