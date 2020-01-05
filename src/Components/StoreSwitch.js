import React from 'react'
import ProductTable from './ProductTable';
import OrderForm from './OrderForm';

const StoreSwitch = ({product,componentType,BuyProduct, ReturnToTable}) => {

    let Output;

    switch ( componentType ) {

        case 'table':
            Output = (
                <>
                  <ProductTable BuyProduct={BuyProduct}></ProductTable>
                </>
            )
            break;
        case 'form':
            Output = (
                <>
                    <OrderForm product={product} ReturnToTable={ReturnToTable}></OrderForm>
                </>
            )
            break;
        default:
            Output = null
            break;
  
  }
    
    return Output
}

export default StoreSwitch
