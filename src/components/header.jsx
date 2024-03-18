import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import { Flex, Heading, Box, Button } from 'rebass'
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
const Header = () => {
    const items = useSelector(state => state.cart.items);
    const navigate = useNavigate()
    const handlebtn = () => {
        navigate('cart')
    }
    const handlelogo = () => {
        navigate('/')
    }
    return (
        <div className="container">
            <Flex mx={7} px={4} py={2} alignItems='center' justifyContent={'space-between'} >
                <img style={{width:'22%',cursor:'pointer'}} onClick={handlelogo} src="https://cymbal-shops.retail.cymbal.dev/static/icons/Hipster_NavLogo.svg" alt="" />
                <div>
                    <span style={{ position: 'relative' }}>
                        {items.length!=0 &&
                        <span style={{ position: 'absolute', top: -10,fontSize:'10px', right: -10, backgroundColor: '#CE0631', borderRadius: '50%', width: 15, height: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>{items.length}</span>}
                        <FaShoppingCart onClick={handlebtn} style={{ cursor: 'pointer' }} size={24} color="black" />
                    </span>
                </div>
            </Flex>
            <Outlet />
        </div>
    )
}
export default Header
