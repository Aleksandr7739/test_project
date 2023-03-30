import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { Stack, Button } from 'react-bootstrap';

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item == null) return null

    return (
        <Stack direction='horizontal' gap={2} className="d-flex aligh-items-center" >
            <img src={item.imgUrl} style={{ width: "125px", height: "75", objectFit: 'cover' }} />
            <div className='me-auto'>
                <div>
                    {item.name}
                </div>
                <div className='text-muted' style={{ fontSize: '.75rem' }}>
                    {item.price}
                </div>
            </div>
            <Button variant='outline-danger' size='lg' onClick={() => removeFromCart(item.id)} ></Button>
        </Stack>
    )
}