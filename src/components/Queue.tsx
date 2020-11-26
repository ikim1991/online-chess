import React from 'react';

const Queue = () => {
    return(
        <div className="queue">
            <div className="server-link">
                <h2>/TGbvmMcV</h2>
                <div className="user">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Input name..."/>
                    <button id="ready">READY</button>
                    <h3 id="status">Waiting on Opponent...</h3>
                </div>
            </div>
        </div>
    )
}

export default Queue;