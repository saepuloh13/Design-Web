import React from 'react';
import Slider from '../components/Slider';
import Doukuntasi from '../components/Dokumentasi';


class Portofolio extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <Doukuntasi />
            </React.Fragment>
        );
    }
}

export default Portofolio;