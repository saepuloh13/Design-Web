import React from 'react';
import {
    Col,
    Container,
    Row
} from 'reactstrap';



class ProfilMenubar extends React.Component {
    render() {
        return (
            <div className="padding-10">
                <div className="txt-profil">
                    <strong>SINAR PUTRA BERSAUDARA</strong>
                    <h4>
                        Sinar Putra Bersaudara adalah perusahaan swasta yang bergerak
            dalam bidang perdagangan
            <br /> umum dengan semua jenis industri yang berada diseluruh Indonesia.
            </h4>
                </div>
                <Container>
                    <Row className="justify-content-between">
                        <Col xs={12}>
                            <div className="padding-80 text-center">
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="txt-profil2">
                    <strong>OUR TEAM</strong>
                    <h4>
                        Sinar Putra Bersaudara oleh personel yang kompeten dibidangnya
                    untuk dapat bermitra dengan industri maupun non industri.
                    </h4>
                </div>
            </div>
           
        );
    }
}

export default ProfilMenubar;