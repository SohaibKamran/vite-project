import { useParams } from 'react-router-dom';
import { products } from '../assets/Products/Products'
const Productdetail = () => {
  const { id } = useParams();
  const product = products.find(product=>product.id == id)
  console.log(product);
  return (
    <div className="container">
      <h1>{product.name}</h1>
    </div>
  )
}
export default Productdetail