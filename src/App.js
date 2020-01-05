import React from 'react'
import './App.css'

import StoreSwitch from './Components/StoreSwitch'

function App() {

  const [storeSwitchProperty,setStoreSwitchProperty] = React.useState('table')
  const [product,setproduct] = React.useState();

  function BuyProduct(product){
    setproduct(product)
    setStoreSwitchProperty('form')
  }

  function ReturnToTable(){
    setStoreSwitchProperty('table')
  }

  return (
    <div>
      <StoreSwitch product={product}
      componentType={storeSwitchProperty}
      BuyProduct={BuyProduct}
      ReturnToTable = {ReturnToTable}></StoreSwitch>
    </div>
  )
}

export default App
