import { useNavigate } from 'react-router-dom';
import { Box, Card, Image, Heading, Text } from 'rebass'
const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    const handleProductClick = (productId) => {
        navigate(`/product-detail/${productId}`)
    };
    return (
        // <div className="container">
        <Card style={styles.card} onClick={() => handleProductClick(product.id)} p={1} borderRadius={2} boxShadow='0 0 16px rgba(0, 0, 0, .25)' sx={{
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s ease-in-out',
                cursor: 'pointer'
            }
        }}>
            <Image style={styles.img} src={product.image ? product.image : "https://via.placeholder.com/350x150"} />
            <Box px={2}>
                <h4>{product?.name}</h4>
                <Text fontSize={0}>
                    {product?.price}
                </Text>
            </Box>
        </Card>
        // </div>
    );
}
export default ProductCard

const styles = {
    img: {
        borderRadius: '20% 0 20% 20%',
        fontFamily: "Rubik"
    },
    card: {
        width: '27%',
        margin: '0 2% 4% 2%'
    }
}