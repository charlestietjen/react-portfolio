import { useState } from 'react';
import './styles.css';
import { isEmailValid } from '../../utils/validate';

export default function ContactMe(){
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        body: ''
    });

    const { name, email, body } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){
        if(e.target.name === 'email'){
            const isValid = isEmailValid(e.target.value);
            if(!isValid){
                setErrorMessage("Invalid email entered.");
            } else {
                setErrorMessage("");
            }
        } else {
            setErrorMessage("");
        }
        if (!errorMessage){
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const { name, email, body } = e.target;
        if (!errorMessage && name.value && body.value){
            window.open(`mailto:tietjen.charles@gmail.com&?subject=Re:Your%20Portfolio&body=${body.value}%0A%0ARegards,%0A%0A${name.value}`);
        }
    }

    return(
        <div className='contactme'>
            <form onSubmit={handleSubmit} name='contact'>
                <label className='label' htmlFor='name'>Your Name:</label>
                <input onBlur={handleChange} className='input primary-bg dark-text' name='name' type='text' required/>
                <label className='label' htmlFor='email'>Your Email:</label>
                <input onBlur={handleChange} className='input primary-bg dark-text' name='email' type='email' />
                {errorMessage && (
                    <div className='error-container dark-bg'>
                        <p className='primary-text'>{errorMessage}</p>
                    </div>
                )}
                <label className='label' htmlFor='body'>Your Message:</label>
                <textarea onBlur={handleChange} className='textarea primary-bg dark-text' name='body' rows="12"></textarea>
                <button className='button dark-bg primary-text' type='submit'>Send</button>
            </form>
        </div>
    )
}

// <a href="mailto:someone@yoursite.com&subject=Big%20News&body=Body-goes-here">Email Us</a>