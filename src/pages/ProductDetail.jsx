import { useState } from 'react'; // Import useState
import { useParams } from 'react-router-dom';
import { products } from '../assets/Products/Products';
import { Image } from 'rebass';
import ProductCard from '../components/product';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';

const Productdetail = () => {
  const { id } = useParams();
  const product = products.find(product => product.id == id);
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  console.log(items)
  // State to manage the quantity selected by the user
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    // Add the selected quantity of the product to the cart
    for (let i = 0; i < selectedQuantity; i++) {
      dispatch(addItem(product));
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.product}>
          <Image style={{ width: '70%', borderRadius: '20% 0 20% 20%' }} src={product.image ? product.image : "https://via.placeholder.com/350x150"} />
          <div style={styles.details}>
            <h1>{product.name}</h1>
            <h2>$ {product.price}</h2>
            {/* Use onChange to update the selected quantity */}
            <select style={styles.select} name="noOfItems" id="items" onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button style={styles.btn} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
        <hr />
        <div style={styles.otherProducts}>
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div style={styles.footer1}>
          <a href="" style={{ color: "black" }}>Watch for sale. Buy one, get second kit for free</a>
        </div>
        <div style={styles.footer2}>
          <h4>
            This website is hosted for demo purposes only. It is not an actual shop. This is not a Google product.
          </h4>
          <h3>
            © 2020 Google Inc (Source Code)
          </h3>
          <h5>
            session-id: 31e31362-720e-42b3-a221-57623460d229 — request-id: 4e351e3b-199f-4713-ae16-84d7705cc65f <br></br>
            Cluster: online-boutique-release <br></br>
            Zone: us-central1-c <br></br>
            Pod: frontend-846c85c54c-7t2qh <br></br>
          </h5>
        </div>
      </div>
    </>
  )
}

export default Productdetail;


const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor:'#F9F9F9'

  },
  product: {
    padding: "5%",
    display: 'flex',
    gap: '10%'
  },
  details: {
    alignSelf: 'flex-end'
  },
  otherProducts: {
    width: '70%',
    display: 'flex',
    margin:'5% 0'
  },
  select:{
    display:'block',
    padding:'10px 5px ',
    width:"100%",
    borderRadius:'10px',
    margin:"10px 0"
  },
  btn: {
    backgroundColor: '#CE0631',
    color: 'white',
    display: 'inline-block',
    border: 'solid 1px #CE0631',
    padding: '8px 16px',
    outline: 'none',
    fontSize: '14px',
    borderRadius: '22px',
    cursor: 'pointer',
  },
  footer1: {
    width:'100%',
    padding: '5%',
    backgroundColor: "lightPink",
    textAlign:'center',
    paddingLeft:"10%"
  },
  footer2: {
    width:'100%',
    padding: '5%',
    backgroundColor: "purple",
    color: 'white',
    paddingLeft:"10%"
  }
}