import './styles.css';

export default function Resume(){
    const qualities = ['- Experience working in a wide range of environments and roles.',
    '- Adept multi-tasker with strong organizational skills.',
    '- Fast learner and highly adaptive.']
    const experience = [
        '- Trained in full stack web development.',
        '- Created and deployed a number of example projects using current web technologies including but not limited to React, Node, Express to environments like Heroku and GitHub pages.',
        '- Led multiple group projects to completion, resulting in deployed, functioning applications on each occasion.',
        '- Capable of writing JavaScript, CSS and HTML in both front and back-end environments.',
        '- 2+ years of call center support experience and 9 years of sales experience.',
        '- Providing ongoing coaching and assistance to new and current agents in a team lead role.',
        '- Experience providing a high standard of customer support over telephone, live chat and email.',
        '- Assisting with maintaining support articles for both customers and agents as well as more recently assisting chat agents with time saving shortcut messages to use.',
        '- Experience identifying problems with and compiling information about consumer products, then ensuring those reports reach the appropriate personnel, utilizing Jira to do so.',
        '- Experience explaining and selling consumer electronics and services for consumer electronics as well as warranty services.',
        '- 5+ years in competitive retail sales where customer experience was key.'
    ]
    function handleClick(e){
        e.preventDefault();
    };
    return (
        <div className='resume'>
            <div className='heading-container'>
                <h2 className='title'>Charles Tietjen</h2>
            </div>
            <div className='body-container'>
                <h3 className='subtitle'>Summary of Qualities and Abilities</h3>
                <ul className='list'>
                    {qualities.map((item, i) => (
                        <li className='list-item' key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='body-container'>
                <h3 className='subtitle'>Experience and Accomplishments</h3>
                <ul className='list'>
                    {experience.map((item, i) => (
                        <li className='list-item' key={i}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='button-container'>
                <a className='dark-bg primary-text button' href={require('../../assets/docs/charles_tietjen_resume.pdf')} download='Charles Tietjen - Resume.pdf'>Download my Full Resume</a>
            </div>
        </div>
    )
}