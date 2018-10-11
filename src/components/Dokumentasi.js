import React from 'react';
import { Button } from 'reactstrap';

class Dokumentasi extends React.Component {
    render() {
        return (
            <div className="dokumentasi">
                <strong>DOKUMENTASI</strong>
                <h4>Dokumentasi foto-foto Sinar Putra Bersaudara</h4>
                <div className="btnfoto">
                    <Button size="sm">Semua Foto</Button>{' '}
                    <Button size="sm">Part</Button>{' '}
                    <Button size="sm">Mesin</Button>{' '}
                    <Button size="sm">Alat Ukur</Button>{' '}
                </div>
            </div>
        );
    }
}

export default Dokumentasi;