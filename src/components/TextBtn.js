import React from 'react';
import {
    Col,
    Container,
    Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
} from '@fortawesome/free-brands-svg-icons';
import { faBullhorn, faDownload, faLeaf, faCogs, faComments } from '@fortawesome/free-solid-svg-icons';
class TextBtn extends React.Component {
    render() {
        return (
            <div className="txt-btn">
                <strong>Keunggulan Sinar Putra Bersaudara</strong>
                <h2>Dengan pengalaman yang sudah kami miliki, kami sangat yakin <br />
                    Sinar Putra Bersaudara adalah pilihan yang tepat untuk Anda.</h2>
                <Container>
                    <Row className="justify-content-between">
                        <Col>
                            <Row className="justify-content-between">
                                <Col xs={{ size: 3 }} className="icon-wrapper">
                                    <FontAwesomeIcon icon={faBullhorn} className="icon" />
                                </Col>
                                <Col className="text-left">
                                    <h4>Costumer Oriented</h4>
                                    <p>Mementingkan kepuasan pelanggan</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-between">
                                <Col xs={{ size: 3 }} className="icon-wrapper">
                                    <FontAwesomeIcon icon={faComments} className="icon" />
                                </Col>
                                <Col className="text-left">
                                    <h4>Terpercaya</h4>
                                    <p>Sudah banyak Perusahaan yang berkerja sama</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-between">
                                <Col xs={{ size: 3 }} className="icon-wrapper">
                                    <FontAwesomeIcon icon={faDownload} className="icon" />
                                </Col>
                                <Col className="text-left">
                                    <h4>Presisi</h4>
                                    <p>Memiliki perhitungan kalibrasi yang presisi</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-con tent-between">
                        <Col sm={{ size: 4 }}>
                            <Row className="justify-content-between">
                                <Col xs={{ size: 3 }} className="icon-wrapper">
                                    <FontAwesomeIcon icon={faLeaf} className="icon" />
                                </Col>
                                <Col className="text-left">
                                    <h4>Akurat</h4>
                                    <p>Perhitungan yang tepat<br />dan
                                        akurat dalam proses kalibrasi</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={{ size: 4, offset: 4 }}>
                            <Row className="justify-content-between">
                                <Col xs={{ size: 3 }} className="icon-wrapper">
                                    <FontAwesomeIcon icon={faCogs} className="icon" />
                                </Col>
                                <Col className="text-left">
                                    <h4>Audit Vendor</h4>
                                    <p>perusahaan yang ingin bekerja sama, silahkan berkunjung</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TextBtn;