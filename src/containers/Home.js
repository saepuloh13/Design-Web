import React from 'react';
import Slider from './../components/Slider';
import TextBtn from './../components/TextBtn';
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <TextBtn />
            </React.Fragment>
        );
    }
}

export default Home;