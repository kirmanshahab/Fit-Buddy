
import React from 'react'

function EditExerciseModal() {
    return (
        <div>

            <div className="mb-3 ">
                            <a className=" h6 text-white" data-toggle="modal" data-target="#submenu-1"><i class="far fa-edit text-white pr-3"></i> Edit excercises</a>
                            
                            <div className="modal fade" id="submenu-1" tabindex="-1" role="dialog" aria-labelledby="submenu-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="exampleModalLongTitle">Edit Exercise</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <form>
                                                <div className="">
                                                    <div className="col-auto my-1">
                                                        <label className="mr-sm-2" for="inlineFormCustomSelect">Exercises: </label>
                                                        <select className="custom-select mr-sm-2 bg-primary text-white" id="inlineFormCustomSelect">
                                                             <option selected>Choose An Exercise</option>
                                                            <option value="Run">Running</option>  
                                                             <option value="Cycle">Cycling</option>
                                                            <option value="Swim">Swimming</option>
                                                            <option value="Hike">Hiking</option>
                                                            <option value="Walk">Walking</option>
                                                        </select>                      
                                                        <label for ="amount">Duration: </label>
                                                        <input type="text" name="amount" id="amount" placeholder="00:00:00.." className="bg-primary text-white placeholder-white form-control"/>
                                                        <label for="date">Date: </label>
                                                        <input type="date" id="date" className="bg-primary text-white form-control"/>
                                                    </div>
                                                </div>
                                                </form>
                                          </div>
                                              <div className="col-md-8">
                                                <div className="form-group">
                                                    <label for="exampleFormControlTextarea1">Description of Exercise: </label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
                                                </div>    
                                              </div>
                                          
                                          </div>
                                          <button type="button" className="btn btn-primary btn-block mt-3">Submit</button>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                      <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
            
        </div>
    )
}

export default EditExerciseModal;
