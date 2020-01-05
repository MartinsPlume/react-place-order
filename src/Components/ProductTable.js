import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export class ProductTable extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
          products:[]
          }
        }
    
    componentDidMount() {
      this.fetchProducts()
    }
    
    renderTableData() {
      return this.state.products.map((product, index) => {
         const {productId,productName, productCode, price, productStock } = product //destructuring

         return (
            <tr key={productId}>
              <td>{productId}</td>
              <td>{productName}</td>
              <td>{productCode}</td>
              <td>{price}</td>
              <td>{productStock}</td>
              <td>
                <Button onClick={(e) =>{
                    this.product=this.state.products[productId-1]
                    this.props.BuyProduct(this.product)}
                    }>
                  Buy this product!
                </Button>
              </td>
            </tr>
         )
      })
    }
    fetchProducts() {
        // Where we're fetching data from
        fetch(`https://localhost:44361/api/product`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data => {
            this.setState({
              products: data,
              isLoading: false,
            })
          })
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
      }   
    
    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Price</th>
                        <th>Product Stock</th>
                        <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ProductTable
