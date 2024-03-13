import { products } from '../assets/Products/Products'
const Home = () => (
  <div className="container">
    <h1>Home</h1>
    <ul>
      {products.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </div>
)
export default Home