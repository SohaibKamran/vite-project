import { products } from '../assets/Products/Products'

const Home = () => {
  return (
    <>
        <div className="container">
            <h1>Home</h1>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Home