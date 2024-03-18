import { useState } from 'react'; // Import useState hook
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Image } from 'rebass';
import Button from '../components/button';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const navigate = useNavigate()
  const continueShopping = () => {
    navigate('/checkout')
}

  // Function to handle form submission and console.log values
  const handleSubmit = () => {
    // Combine shipping and payment info
    const formData = { ...shippingInfo, ...paymentInfo };
    console.log('Form Data:', formData);
    // You can perform further actions here, like sending data to server
  };
  

  return (
    <>
      <div style={styles.container}>
        <div style={styles.cart}>
          <div style={styles.header}>
            <span>Cart {items.length}</span>
            <div style={{ display: 'flex' }}>
              <Button text='Empty Cart'/>
              <Button onClick={continueShopping} text= 'Continue shopping'/>
            </div>
          </div>
          {items.map((item) => (
            <div style={styles.product} key={item.id}>
              <Image
                style={{ width: '30%', borderRadius: '20% 0 20% 20%' }}
                src={item.image ? item.image : 'https://via.placeholder.com/350x150'}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <hr />
                <h1>{item.name}</h1>
                <h4>No of items: {item.qty}</h4>
              </div>
              <span style={{ alignSelf: 'end' }}>{item.price}</span>
            </div>
          ))}
          <hr style={{ marginTop: '5%' }} />
          <div style={styles.shippingCost}>
            <h3>Shipping Cost</h3>
            <h4>$8.99</h4>
          </div>
          <hr />
          <div style={styles.shippingCost}>
            <h2>Total</h2>
            <h4>
              {items.reduce((acc, item) => acc + item.price * item.qty, 0)}
            </h4>
          </div>
        </div>
        <div style={styles.shipping}>
          <div style={styles.form}>
            <h1>Shipping Address</h1>
            <div style={styles.inputDiv}>
              <label style={styles.label} htmlFor="name">Name</label>
              <input
                style={styles.input}
                type="text"
                id="name"
                placeholder="Name"
                onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
              />
            </div>
            <div style={styles.inputDiv}>
              <label style={styles.label} htmlFor="address">Address</label>
              <input
                style={styles.input}
                type="text"
                id="address"
                placeholder="Address"
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
              />
            </div>
            <div style={styles.inputDiv}>
              <label style={styles.label} htmlFor="city">City</label>
              <input
                style={styles.input}
                type="text"
                id="city"
                placeholder="City"
                onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
              />
            </div>
            <div style={styles.inputDiv}>
              <label style={styles.label} htmlFor="state">State</label>
              <input
                style={styles.input}
                type="text"
                id="state"
                placeholder="State"
                onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
              />
            </div>
            <div style={styles.inputDiv}>
              <label style={styles.label} htmlFor="zip">Zip</label>
              <input
                style={styles.input}
                type="text"
                id="zip"
                placeholder="Zip"
                onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
              />
            </div>
          </div>
          <div style={styles.form}>
            <h1>Payment</h1>
            <div style={styles.inputDiv}>
              <label style={styles.label} htmlFor="ccn">Credit-Card-Number</label>
              <input
                style={styles.input}
                type="number"
                id="ccn"
                placeholder="credit card number"
                onChange={(e) => setShippingInfo({ ...shippingInfo, ccn: e.target.value })}
              />
            </div>
          </div>
          {/* Button to submit both forms */}
          <Button text='Place Order' onClick={handleSubmit}/>
        </div>
      </div>
    </>
  );
};

export default Cart;

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '5%',
    backgroundColor:'#F9F9F9'
  },
  cart: {
    width: '25%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%'
  },
  shipping: {
    width: '25%',
  },
  product: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 5%',
    marginTop: '5%'
  },
  shippingCost: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 5%',
    margin: '5% 0'
  },
  form: {
    display: "flex",
    flexDirection: 'column',
    padding: '5%',
    justifyContent: 'center',
    gap: '20px'
  },
  input: {
    border: 'none',
    backgroundColor:'inherit',
    width:'100%',
    marginTop:'10px',
    color:'black',
    padding:'0px 0px 10px 10px',
    outline: 'none', // Remove outline when input is focused
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    color:'grey',
    fontSize:'0.75rem',
    padding:'10px 0px 0px 10px'

  },
  inputDiv: {
    backgroundColor: 'white', // Adding light grey background to the divs
    marginBottom: '10px', // Adding margin bottom for spacing
    borderRadius: '5px', // Adding border radius for rounded corners
    borderBottom:'1px solid black'
  },
};
