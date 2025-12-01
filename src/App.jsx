import { useState } from 'react'

function App() {

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [addedProducts, setAddeddProducts] = useState([])

  const updateQuantity = (name, quantity) => {
    setAddeddProducts(curr => curr.map((p) => {
      if (p.name === name) {
        return {
          ...p,
          quantity
        }
      }
      return p;
    }))
  }

  const addToCart = product => {
    const productAdded = addedProducts.find(p => p.name === product.name);
    if (productAdded) {
      updateQuantity(productAdded.name, productAdded.quantity + 1)
      return;
    }

    setAddeddProducts(curr => [...curr, {
      ...product,
      quantity: 1
    }])
  }

  const removeFromCart = product => {
    setAddeddProducts(curr => curr.filter(p => p.name !== product.name))
  }

  const totalToPay = addedProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0)

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
                <>
                  <li key={i}>
                    <p>{product.name + " " + (product.price.toFixed(2)) + "€ x" + product.quantity}</p>
                    <button onClick={() => { removeFromCart(product) }}>Rimuovi dal carrello</button>
                  </li>
                  <span><strong>Totale {product.name}:</strong> €{(product.price * product.quantity).toFixed(2)}</span>
                </>

              )
            })}
          </ul>
          <h2>Totale da pagare: €{totalToPay.toFixed(2)}</h2>
        </>
      )}
    </>
  )
}

export default App
