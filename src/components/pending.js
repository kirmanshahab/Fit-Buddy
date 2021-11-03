
import React from 'react'

function Pending() {
    return (
        <div>
            <div className="mb-3 ">
                <a className="h6 text-white" href="#" data-toggle="collapse" data-target="#submenu-3"><i className="fas fa-exclamation text-white pr-4"></i> Pending </a>
                <div id="submenu-3" className="collapse">
                    <p>Activites yet to be started </p>
                </div>
            </div>
            
        </div>
    )
}

export default Pending
