/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { Box, Card, Image, Heading,Text } from 'rebass'
const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const handleProductClick = (productId) => {
        navigate(`/product-detail/${productId}`)
    };
    return (
    <div className="container">
        <Box width={256} onClick={() => handleProductClick(product.id)}>
            <Card p={1} borderRadius={2} boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
                <Image src={product.image?product.image : "https://via.placeholder.com/350x150"} />
                <Box px={2}>
                    <Heading as='h3'>
                        Card {product?.id}
                    </Heading>
                    <Text fontSize={0}>
                        {product?.name}
                    </Text>
                </Box>
            </Card>
        </Box>
    </div>
    );
}
export default ProductCard