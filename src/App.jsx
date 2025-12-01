import { useState } from 'react'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  return (
    <>
      <h1>La mia lista</h1>
      <ul>
        {products.map((product) => {
          return (
            <li><span>{product.name}</span>
              <p>{product.price.toFixed(2)}€</p>
            </li>
          )
        })}

      </ul>
    </>
  )
}

export default App
