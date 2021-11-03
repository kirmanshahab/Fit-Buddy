import Sidebar from './sidebar';
import React from 'react';
import RightPanel from './RightPanel';
import Center from './Center';

function Main() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 bg-primary">
                        <Sidebar/>
                    </div>
                    <div className="col-md-7">
                        <Center/>
                    </div>
                    <div className="col-md-2">
                        <RightPanel/>
                    </div>

                </div>

            </div>
            
        </div>
    );
}

export default Main;
