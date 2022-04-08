import './styles.css';

export default function Modal({ onClose, imageUrl }){
    return (
        <div className='modalBackdrop'>
            <img className='modalImage' src={imageUrl} />
            <button className='modalButton' type="button" onClick={onClose}>
                X
            </button>
        </div>
    )
}