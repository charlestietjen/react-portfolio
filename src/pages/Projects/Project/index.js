import { useState } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { IconContext } from 'react-icons';
import './styles.css';
import Modal from './Modal';

export default function Project(props){
    const { title, description, repoLink, deployedLink } = props.projData;
    const imageUrl = `https://github.com/charlestietjen${repoLink}/raw/main/img/project-ss.png`;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div className='project-container primary-bg'>
            <div className='title-container'>
                <h3 className='subtitle'>{title}</h3>
            </div>
            <div className='links-container'>
                <a href={`https://github.com/charlestietjen${repoLink}/`} target='_blank' className='project-link'><IconContext.Provider value={{ size: '3vh' }}><GoMarkGithub /></IconContext.Provider></a>
                {deployedLink && (<a href={deployedLink} className='project-link' target='_blank'>Deployed</a>)}
            </div>
            <div className='screenshot-container'>
                {isModalOpen && (<Modal imageUrl={imageUrl} onClose={toggleModal} />)}
                <img className='screenshot' src={imageUrl} onClick={toggleModal} />
            </div>
            <div className='description-container'>
                <p>{description}</p>
            </div>
        </div>
    )
}

