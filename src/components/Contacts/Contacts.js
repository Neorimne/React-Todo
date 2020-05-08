import React, { useState } from 'react';
import style from './contacts.module.css';



const Contacts = (props) =>{
    
    const [showOverlay, setShowOverlay] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        setShowOverlay(true);
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
                <form className={style.form} onSubmit={handleSumbit}>
                    <label>
                        <div>YOUR NAME:</div>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <div>YOUR EMAIL:</div>
                        <input type="text" name="name" />
                    </label>
                    <label>
                        <div>YOUR COMMENT:</div>
                        <textarea rows="10" cols="50" />
                    </label>
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    )
}

export default Contacts;