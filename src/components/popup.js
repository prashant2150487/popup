import React, { useState } from 'react'

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);
    function handleClick() {
        setShowPopup(!showPopup)
    }
    return (
        <div>
            <button type='button' onClick={handleClick}>Popup</button>
            {
                showPopup && <div style={{ boxShadow: "10px 10px 5px #aaaaaa", maxWidth: '50%', p: '20px', height: 'auto', margin: 'auto', marginTop: '20%' }}>

                    <button onClick={() => { handleClick(!showPopup) }} style={{ fontSize: "33px", display: "flex", justifyContent: 'right', border: 'none', borderRadius: '50%', backgroundColor: '#ffff', width: '100%' }}>
                        &times;
                    </button>
                    <h1>Name: Prashant</h1>
                    <h2>Last Name : Sachan</h2>
                </div>
            }

        </div>

    )
}

export default Popup