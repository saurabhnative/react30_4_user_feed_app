import React from "react";
function UserList({ item, index }) {
    return (
        <div className="col-sm-12 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                <img
                    className="card-img-top"
                    src={item.picture.large}
                    height="200"
                    alt={`${item.name.first}profile`}
                />
                <div className="card-body">
                    <h5 className="card-title">{item.name.first}</h5>
                    <p className="card-text">{item.location.country}</p>
                    <button className="btn btn-primary">
                        Contact
                    </button>
                </div>
            </div>
        </div>    
    )
}
export default UserList;