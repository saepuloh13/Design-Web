import React from 'react';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope, faPhone,
} from '@fortawesome/free-solid-svg-icons';


class Header extends React.Component {
    render() {
        return (
            <div className="bg-secondary padding-10">
                <Container>
                    <Row className="justify-content-between">
                        <Col xs={6} className="mt-1">
                            <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;
                           <i><strong>sinarputrabersaudara@gmail.com</strong></i> &nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon={faPhone} />&nbsp;
                            <i><strong>(021) 2297-7060</strong></i>
                        </Col>
                        <Col xs={6}>
                            <div className="float-right">
                                <ul className="list-menu">
                                    <li><strong><Link to="/home">Home</Link></strong></li>
                                    <li><strong><Link to="/profil" >Profil</Link></strong></li>
                                    <li><strong><Link to="/portofolio" >Portofolio</Link></strong></li>
                                    <li><strong><Link to="/contact" >Contact</Link></strong></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;