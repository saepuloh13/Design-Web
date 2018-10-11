import React from 'react';
import { Button, Form, Label, Input,  } from 'reactstrap';

import {
    
} from 'reactstrap'

class Contact extends React.Component {
    render() {
        return (
            <Form>
                <div className="nama">
                    <Label><strong>Nama*</strong></Label>
                    <Input type="text" name="nama"
                        placeholder="Masukan Nama Anda" />
                </div>
                <div className="email">
                    <Label><strong>Email*</strong></Label>
                    <Input type="email" name="email"
                        placeholder="Masukan Email Anda" />
                </div>
                <div className="phone">
                    <Label><strong>Phone*</strong></Label>
                    <Input type="text" name="phone"
                        placeholder="Masukan No Telepon" />
                </div>
                <div className="text-area">
                    <Label>Pesan</Label>
                    <Input type="textarea" name="text" />
                </div>
                <Button className="submit">Submit</Button>
            </Form>
        );
    }
}

export default Contact;