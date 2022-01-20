import React, { useEffect } from 'react';

import lottie from 'lottie-web'
import introAnimation from '../images/lottieFiles/lf20_9dn5igmu.json'

export default function IntroContainer() {

    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById('intro-animation'),
            animationData: introAnimation,
            renderer: 'svg',
            loop: true,
            autoplay: true
        });
    }, []);        


  return (
    <div className="container pt-5" id="intro-card">
        <div className="row flex-row">
            <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4" id="intro-animation">
                {/* This div is meant to be empty, but it's needed to load the animation in the background */}
            </div>

            <div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                <h1 className="display-4 pt-4">Alexis Montes</h1>
                <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod mauris libero, vitae interdum massa varius in. Donec varius, orci non finibus blandit, nunc neque pellentesque metus, et vulputate enim ante nec nibh. Donec eget mattis metus. In consectetur ante at eros mollis sollicitudin ac quis nibh. Sed eu libero vehicula erat accumsan facilisis. Sed tempus sodales ligula. Etiam vel risus in enim convallis convallis. Sed id suscipit elit, ac tincidunt enim.
                </p>
            </div>
        </div>
    </div>
  );
}