import React from 'react';
import {

} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

} from '@fortawesome/free-brands-svg-icons';
import {
    faPhone, faEnvelope
} from '@fortawesome/free-solid-svg-icons';

class FootText extends React.Component {
    render() {
        return (
            <div className="infoBtn">
                <div className="TxtBtn"><strong>Ingin bertanya lebih lanjut ?</strong>
                    <h2>Silahkan menghubungi operator kami di:<br />
                        <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;
                (021) 2297-7060<br />
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
                        sinarputrabersaudara@gmail.com
                </h2>
                </div>
            </div>
        );
    }
}

export default FootText;