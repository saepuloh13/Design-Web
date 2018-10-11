import React from 'react';
import Slider from '../components/Slider';
import VisiMisi from '../components/VisiMisi';
import Dokumen from '../components/Dokumen';

class Profile extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <VisiMisi />
                <Dokumen />
                
            </React.Fragment>
        );
    }
}

export default Profile;