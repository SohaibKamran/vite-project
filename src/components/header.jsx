import { Outlet } from 'react-router-dom'
import { Flex,Heading,Box,Button } from 'rebass'
const Header = () => (
    <div className="container">
        <Flex px={4} py={4} alignItems='center'>
            <Heading fontSize={[4, 5]} color='blue'>Live Demo</Heading>
            <Box mx='auto'/>
            <Button>Beep</Button>
            <Button ml={2}>Boop</Button>
        </Flex>
        <Outlet/>
    </div>
)
export default Header