import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export class OrderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            postalCode:"",
            productId:this.props.product.productId,
            status:'Posted'
        };
        this.product=this.props.product
        this.stock=this.props.product.productStock-1
        this.reserved=this.props.product.productReserved+1
    }

    HandleChange(e) {
        switch (e.target.id) {
                case 'title':
                this.setState({
                    name:e.target.value
                    })
                break;
            
                case 'email':
                this.setState({
                    email:e.target.value
                })
                break;
                
                case 'postal':
                    this.setState({
                        postalCode:Math.round(e.target.value)
                    })
                break;
            default:
                break;
      }
    }
      
    async HandleSubmit(e){
        e.preventDefault()
        const ChangedProduct = Object.assign({},this.product,
            {productStock:this.stock},
            {productReserved:this.reserved})

            fetch('https://localhost:44361/api/Order', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
            })

            fetch('https://localhost:44361/api/product/' + this.product.productId, {
            method: 'Put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ChangedProduct)
            })

            this.props.ReturnToTable()
    }

    render() {
        return (
            <div>
                <Form onSubmit = {this.HandleSubmit.bind(this)}>
                    <Form.Group controlId="title">
                        <Form.Label>Enter Your name</Form.Label>
                        <Form.Control type="text"
                        onChange = {(e) => this.HandleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Enter Your email</Form.Label>
                        <Form.Control type="email"
                        onChange = {(e) => this.HandleChange(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="postal">
                        <Form.Label>Enter Your postal code</Form.Label>
                        <Form.Control type="number" min='1000' max='9999'
                        onChange = {(e) => this.HandleChange(e)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit order!
                    </Button>
                </Form>
            </div>
        )
    }
}

export default OrderForm
