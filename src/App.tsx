import {OrderSummary} from "./components/OrderSummary/OrderSummary.tsx";
import {useState} from "react";
import {Product} from "./types";

function App() {
  const [products] = useState<Product[]>([{id: '1', image: 'icon-music.svg', price: 59.99, title: 'Annual Plan', period: 'year', currency: 'USD'}])
  return (
    <>
      <OrderSummary products={products}/>
    </>
  )
}

export default App
