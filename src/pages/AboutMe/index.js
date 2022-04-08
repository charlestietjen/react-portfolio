import './styles.css';

export default function AboutMe(){
    return(
        <div className='aboutme'>
            <div className='side-by-side'>
                <p>Welcome to my portfolio! Pleasantries first, my name is Charles, I'm a full-stack developer with fingers in many development hobby fields.</p>
            </div>
            <div className='image-container'>
                <img className='profile-image' src={require('../../assets/img/profile.jpg')} alt='Charles and his adorable son.'/>
            </div>
            <div className='lower-container'>
                <p>Just some of my 'hats':</p>
                <ul>
                    <li>- Full Stack Developer</li>
                    <li>- Hobbyist Video Game Developer</li>
                    <li>- Mod Developer</li>
                    <li>- 3D 'Artist'</li>
                    <li>- Rare Twitch Streamer</li>
                    <li>- Extremely Cool Dad</li>
                </ul>
            </div>
        </div>
    )
}