import React from 'react';
import avatarImage from '../images/avataaars.svg'

export default function DescriptionContainer() {
    return (
        <div className="container" id="description-container">
            <div className="row flex-row-reverse">
                <div className="col-lg-4 col-xl-4 col-xxl-4">
                    <img src={avatarImage} alt="profile">
                    </img>
                </div>
                <div className="col-lg-8 col-xl-8 col-xxl-8 pt-4">
                    <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod mauris libero, vitae interdum massa varius in. Donec varius, orci non finibus blandit, nunc neque pellentesque metus, et vulputate enim ante nec nibh. Donec eget mattis metus. In consectetur ante at eros mollis sollicitudin ac quis nibh. Sed eu libero vehicula erat accumsan facilisis. Sed tempus sodales ligula. Etiam vel risus in enim convallis convallis. Sed id suscipit elit, ac tincidunt enim.
                    </p>
                </div>

                
            </div>
        </div>
    );
}