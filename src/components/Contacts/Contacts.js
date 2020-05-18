import React, { useState } from 'react';
import style from './contacts.module.css';
import FeedbackForm from './Form';



const Contacts = (props) =>{
    
    const [showOverlay, setShowOverlay] = useState(false);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    
    const handleSumbit = (e) => {
        e.preventDefault();
        props.setNewMessage({
            name,
            email,
            comment
        })
        setShowOverlay(true);
    }

    console.log("props: ", props)

    const handleUserInput = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        switch(fieldName) {
            case "name":
                setName(fieldValue);
                break;
            case "email":
                setEmail(fieldValue);
                break;
            case "comment":
                setComment(fieldValue);
                break;
            default:
                break;
        }
    }
    
    return (
        <div className={style.contactsWrapper}>
            <div className={style.overlay} style={showOverlay ? {display:'block'} : {display:'none'}}
                 onClick ={()=>{setShowOverlay(false)}}>
                <div className={style.text}>Thanks for your feedback!</div>
            </div>
            <div className={style.contactsHeader}>
                <h2>LEAVE YOUR FEEDBACK!</h2>
            </div>
            <div className={style.formWrapper}>
                <FeedbackForm handleSumbit={handleSumbit}
                     handleUserInput={handleUserInput} 
                     name={name} email={email} comment={comment} />
            </div>
        </div>
    )
}

export default Contacts;