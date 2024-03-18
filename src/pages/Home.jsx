import { products } from '../assets/Products/Products'
import ProductCard from '../components/product'

const Home = () => (
  <div style={styles.container}>
    <div style={styles.leftImage}>
    </div>
    <div style={styles.rightCotainer}>
      <div style={{ padding: '0 5%' }}>
        <h1 style={{padding:'5% 9%'}}>Hot Products</h1>
        <div style={styles.productsCotainer}>

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div style={styles.footer}>
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
  </div>
)
export default Home

const styles = {
  container: {
    display: 'flex',
    width: "100%",
    backgroundColor:'#F9F9F9'

  },
  leftImage: {
    width: '30%',
    height: '90vh',
    background: `url(https://cymbal-shops.retail.cymbal.dev/static/images/folded-clothes-on-white-chair.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'sticky'
  },
  rightCotainer: {
    overflow: 'auto',
    width: '70%',
    height: '90vh',
  },
  productsCotainer: {
    padding:'0 7%',
    display: "flex",
    flexWrap: "wrap",
  },
  footer: {
    padding: '5%',
    backgroundColor: "purple",
    color: 'white'
  }
}