import { useEffect } from 'react';
import './styles.css';

export default function Hero({ currentPage, updatePage }){
    const handleClick = (page) => {
        updatePage(page);
    }
    const selected = 'nav-item tertiary-text bold-text';
    const unselected = 'nav-item secondary-text';
    return (
        <div className='header dark-bg'>
            <div className='title-container'>
                <h1 className='title primary-text'>Charles Tietjen</h1>      
            </div>
                <nav className='nav-container'>
                    <a className={currentPage==='aboutme'? selected : unselected} onClick={() => handleClick('aboutme')}>About Me</a>
                    <a className={currentPage==='projects'?selected:unselected} onClick={() => handleClick('projects')}>Projects</a>
                    <a className={currentPage==='contactme'?selected:unselected} onClick={() => handleClick('contactme')}>Contact Me</a>
                    <a className={currentPage==='resume'?selected:unselected} onClick={() => handleClick('resume')}>Resumé</a>
                </nav>
        </div>
    )
}