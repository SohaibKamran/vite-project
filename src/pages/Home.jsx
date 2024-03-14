import { products } from '../assets/Products/Products'
import ProductCard from '../components/product'

const Home = () => (
  <div style={styles.container}>
    <div style={styles.leftImage}>
      <h1>Products</h1>
    </div>
    <div style={styles.productsCotainer}>
      {products.slice(0, 6).map((product) => (
        <ProductCard key={product.id} product = {product}/>
      ))}
    </div>
  </div>
)
export default Home

const styles = {
  container:{
    display:'flex',
    width:"100%"
  },
  leftImage:{
    width: '30%',
    height: '70vh',
    background: `url(https://cymbal-shops.retail.cymbal.dev/static/images/folded-clothes-on-white-chair.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position:'sticky'
  },
  productsCotainer:{
    display:"flex",
    flexWrap:"wrap",
    height: '70vh',
    overflow: 'auto',
  }
}