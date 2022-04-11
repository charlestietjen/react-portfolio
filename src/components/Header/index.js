import './styles.css';
import Navigation from '../Navigation';

export default function Hero({ currentPage, updatePage }){
    const handleClick = (page) => {
        updatePage(page);
    }
    const selected = 'nav-item tertiary-text bold-text';
    const unselected = 'nav-item secondary-text';
    return (
        <header className='header dark-bg'>
            <div className='title-container'>
                <h1 className='title primary-text'>Charles Tietjen</h1>      
            </div>
            <Navigation currentPage={currentPage} handleClick={handleClick} selected={selected} unselected={unselected}/>
        </header>
    )
}