import { BsLinkedin, BsTwitch, BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import './styles.css';

export default function Footer(){
    return(
        <footer className='footer-container dark-bg'>
            <IconContext.Provider value={{ size: '3vh' }}>
                <a href='https://github.com/charlestietjen' target='_blank'><BsGithub className='social-link' /></a>
                <a href='https://www.linkedin.com/in/charles-tietjen-001/' target='_blank'><BsLinkedin className='social-link' /></a>
                <a href='https://www.twitch.tv/lowlevelgoblinhours' target='_blank'><BsTwitch className='social-link' /></a>
            </IconContext.Provider>
        </footer>
    )
}