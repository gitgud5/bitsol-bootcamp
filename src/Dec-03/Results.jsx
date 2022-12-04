import React from "react";

export default function Results(params) {
        const {email,password, satisfied} = params.deets;
  return (
    <>
    <div className="card">
        <div className="card-header">
            Customer Review
        </div>
        <div className="card-body">
        <p className="card-text">Email:</p>

            <h4 className="card-title">{email}</h4>
            <p className="card-text">Password:</p>
            <p className="card-text">{password}</p>
        </div>
        <div className="card-footer text-muted">
        <p className="card-text">Satisfied:</p>
        <span className="badge bg-primary">{satisfied}</span>
        </div>
    </div>
    

    </>
  );
}
