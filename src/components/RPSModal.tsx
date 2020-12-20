import React from 'react';

const RPSModal = () => {
    return(
        <div className="modal">
            <div className="container">
                <div className="content">
                    <h2>You Selected {"rock"}</h2>
                    <i className={`fa fa-hand-${"rock"}-o`}></i>
                    <h2>Waiting on Opposition...</h2>
                </div>
            </div>
        </div>
    )
}

export default RPSModal;