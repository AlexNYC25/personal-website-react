import React from 'react';

import IntroContainer from './IntroContainer';
import DescriptionContainer from './DescriptionContainer';
import LanguagesContainer from './LanguagesContainer';
import FrameworksContainer from './FrameworksContainer';
import DatabaseContainer from './DatabaseContainer';
import DeveloperToolsContainer from './DeveloperToolsContainer';
import ProjectsInProgress from './ProjectsInProgress';
import FavoriteProjects from './FavoriteProjects';
import Education from './Education';
import Footer from './Footer';

export default function IndexPage() {

    return (
        <div>
            <IntroContainer />
            <DescriptionContainer />
            <FavoriteProjects />
            <ProjectsInProgress />
            <Education />
            <LanguagesContainer />
            <FrameworksContainer />
            <DatabaseContainer />
            <DeveloperToolsContainer />
            <Footer />
        </div>
    );
}