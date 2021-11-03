import Progress from './Progress';
import React from 'react';

function InProgress() {
    return (
        <div>
            <div className="mb-3 ">
                            <a className="h6 text-white" data-toggle="collapse" data-target="#submenu-2"><i className="fas fa-spinner text-white pr-3"></i> In Progress</a>
                            <div id="submenu-2" className="collapse">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                      <div className="carousel-item active">
                                        {/* <div className="card border-primary mb-3 img-fluid">
                                            <img className="card-img-top" src="./img/swimming.jpeg" style={{maxWidth: '100%'}}/>
                                              <div className="card-img-overlay card-body">
                                                  <div className="">
                                                      <h4 className="card-text text-white">Swimming</h4>
                                                  </div>
                                                  
                                                  <p id="ss2" className="card-text text-white">25 Mins</p>
                                                  <p className="card-text text-wbrhite">Description</p>
                                                  <div className="progress">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '40%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                              </div>
                                              
                                          </div> */}
                                          
                                      </div>
                                      <div className="carousel-item">
                                        <div className="card border-primary mb-3 img-fluid">
                                            <img className = "card-img-top" src="./img/cycling.jpeg" style={{maxWidth: '100%'}}/>
                                            <div className="card-img-overlay card-body">
                                                <div className="">
                                                    <h4 className="card-text text-white">Cycling</h4>
                                                </div>
                                                
                                                <p id="ss2" className="card-text text-white">30 Mins</p>
                                                <p className="card-text text-white">Description</p>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '20%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                  </div>
                                            </div>
                                            
                                      </div>  
                                       
                                      </div>
                                      <div className="carousel-item">
                                        <div className="card border-primary mb-3 img-fluid">
                                            <img className="card-img-top" src="./img/walking.jpeg" style={{maxWidth: '100%'}}/>
                                            <div className=" card-img-overlay card-body">
                                                <div className="">
                                                    <h4 className="card-text text-white">Walking</h4>
                                                </div>
                                                <p id="ss2" className="card-text text-white">45 Mins</p>
                                                <p className="card-text text-white">Description</p>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '70%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>   
                                        </div>
                                        
                                      </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span className="sr-only">Next</span>
                                    </a>
                                  </div>
                            </div>
                        </div>
            
        </div>
    )
}

export default InProgress;
;