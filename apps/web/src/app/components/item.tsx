import { Button } from '@repo/ui'
import Image from 'next/image'
import React, { useState } from 'react'

function Item(): JSX.Element {
  const [item, setItem] = useState({
    name: 'Apple AirPods',
    description: 'Latest Apple AirPods.',
    image:
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    quantity: 0,
    price: 999,
  })

  const changeQuantity = (value: number) => {
    // Don't allow the quantity less than 0, if the quantity is greater than value entered by user then the user entered quantity is used, else 0
    setItem({ ...item, quantity: Math.max(0, value) })
  }

  const onQuantityPlus = () => {
    changeQuantity(item.quantity + 1)
  }

  const onQuantityMinus = () => {
    changeQuantity(item.quantity - 1)
  }

  const onInputChange = e => {
    changeQuantity(parseInt(e.target.value))
  }

  return (
    <div className="shadow-lg border rounded p-2 ">
      <Image alt={item.name} height={150} src={item.image} width={300} />
      <h2 className="text-2xl">$ {item.price}</h2>
      <h3 className="text-xl">{item.name}</h3>
      <p className="text-gray-500">{item.description}</p>
      <p className="text-sm text-gray-600 mt-1">Quantity:</p>
      <div className="border rounded">
        <Button
          className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600"
          onClick={onQuantityMinus}
          size="icon"
        >
          -
        </Button>
        <input
          className="p-2"
          defaultValue={item.quantity}
          onChange={onInputChange}
          type="number"
          value={item.quantity}
        />
        <Button
          className="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-600"
          onClick={onQuantityPlus}
          size="icon"
        >
          +
        </Button>
      </div>
      <p>Total: ${item.quantity * item.price}</p>
      <Button
        className="bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100"
        disabled={item.quantity === 0}
      >
        Buy
      </Button>
    </div>
  )
}

export default Item
