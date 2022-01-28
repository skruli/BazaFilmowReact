import React from "react";

const Search = () => {
    return (
    <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-10">
            <div className="search"> <i className="fa fa-search"></i> <input type="text" className="form-control" placeholder="Szukaj"/>  </div>
        </div>
        <div className="col-2">
        <button className="btn btn-secondary">szukaj</button>
        </div>
    </div>


    

    )
}

export default Search;