import Sidebar from './sidebar';
import React from 'react';

function Main() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 bg-primary">
                        <Sidebar/>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>

                </div>

            </div>
            
        </div>
    );
}

export default Main;
