
import React from 'react';

function Completed() {
    return (
        <div>
            <div className="mb-3">
                            <a className="h6 text-white" href="#" data-toggle="collapse" data-target="#submenu-4"><i className="fas fa-check-circle text-white pr-3"></i> Completed</a>
                            <div id="submenu-4" className="collapse">
                                <div id="carousel-2" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                      <div className="carousel-item active">
                                        <div className="card border-primary mb-3 img-fluid">
                                            <img className="card-img-top" src="./img/Running.jpeg" style={{maxWidth: '100%'}}/>
                                            <div className="card-img-overlay card-body">
                                                <h4 className="card-text text-white">Running</h4>
                                                <p id="ss2" className="card-text text-white">25 Mins</p>
                                                <p className="card-text text-white">Description</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="carousel-item">
                                        <div className="card border-primary mb-3 img-fluid">
                                            <img className = "card-img-top" src="./img/cycling.jpeg" style={{maxWidth: '100%'}}/>
                                            <div className="card-img-overlay card-body">
                                                <h4 className="card-text text-white">Cycling</h4>
                                                <p id="ss2" className="card-text text-white">20 Mins</p>
                                                <p className="card-text text-white">Description</p>
                                            </div>
                                        
                                        </div> 
                                      </div>
                                      <div className="carousel-item">
                                        <div className="card border-primary mb-3 img-fluid">
                                            <img className="card-img-top" src="./img/hiking.jpeg" style={{maxWidth: '100%'}}/>
                                            <div className=" card-img-overlay card-body">
                                                <h4 className="card-text text-white">Hiking</h4>
                                                <p id="ss2" className="card-text text-white">45 Mins</p>                           
                                                <p className="card-text text-white">Description</p>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-2" role="button" data-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </div>
                            </div>
                        </div>
            
        </div>
    )
}

export default Completed;
