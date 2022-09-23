import { useSelector } from 'react-redux';
function Header() {
    const totalCost  = useSelector(store=>store.totalCost)
    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <p>Total: ${totalCost}</p>
        </header>
    )
};

export default Header;