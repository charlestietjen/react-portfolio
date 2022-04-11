import './styles.css';

const Navigation = ({ currentPage, handleClick, selected, unselected }) => {
    return (
        <nav className='nav-container'>
            <a className={currentPage==='aboutme'? selected : unselected} onClick={() => handleClick('aboutme')}>About Me</a>
            <a className={currentPage==='projects'?selected:unselected} onClick={() => handleClick('projects')}>Projects</a>
            <a className={currentPage==='contactme'?selected:unselected} onClick={() => handleClick('contactme')}>Contact Me</a>
            <a className={currentPage==='resume'?selected:unselected} onClick={() => handleClick('resume')}>Resumé</a>
        </nav>
    )
}

export default Navigation;