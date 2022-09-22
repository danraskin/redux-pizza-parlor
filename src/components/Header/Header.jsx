import { useSelector } from 'react-redux';
function Header() {
    const order  = useSelector(store=>store.orderDetails)
    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <p>Total: ${order.total}</p>
        </header>
    )
};

export default Header;