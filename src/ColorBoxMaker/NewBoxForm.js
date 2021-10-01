import { useState } from "react";
import { v4 as uuid } from 'uuid';
import { FormGroup, Form, Label, Input, Button, Col } from 'reactstrap'


function NewBoxForm({ addBox }) {


    const [formData, setFormData] = useState({
        backgroundColor: "",
        height: "",
        width: ""
    });
    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuid() });
        setFormData({ height: "", width: "", backgroundColor: "" });
    }

    return (

        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label htmlFor="color-name">Color</Label>

                <Input id="color-name"
                    placeholder="color"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                />

            </FormGroup>
            <FormGroup row>

                <Label htmlFor="box-width">Width</Label>
                <Input id="box-width"
                    placeholder="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />

            </FormGroup>
            <FormGroup row>

                <Label htmlFor="box-height">Height</Label>
                <Input id="box-height"
                    placeholder="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />

            </FormGroup>
            <Button color="info"> Add Color </Button>
        </Form>

    )
}


export default NewBoxForm;