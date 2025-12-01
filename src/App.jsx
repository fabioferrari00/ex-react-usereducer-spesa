import { useState } from 'react'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddeddProducts] = useState([])

  const addToCart = product => {
    const isProductAdded = addedProducts.some(p => p.name === product.name);
    if (isProductAdded) {
      return
    }

    setAddeddProducts(curr => [...curr, {
      ...product,
      quantity: 1
    }])
  }

  return (
    <>
      <h1>La mia lista</h1>
      <ul>
        {products.map((product, i) => {
          return (
            <li key={i}>
              <span>{product.name}</span>
              <p>{product.price.toFixed(2)}€</p>
              <button onClick={() => { addToCart(product) }}>Aggiungi al carrello</button>
            </li>

          )
        })}
      </ul>
      {addedProducts.length > 0 && (
        <>
          <h2>Il mio carrello</h2>
          <ul>
            {addedProducts.map((product, i) => {
              return (
                <li key={i}>
                  <p>{product.name + " " + (product.price.toFixed(2)) + "€ x" + product.quantity}</p>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}

export default App
