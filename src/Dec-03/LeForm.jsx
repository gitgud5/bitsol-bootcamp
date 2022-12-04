import React from "react";

export default function LeForm({ setLeDeets, leDeets, setsubmitted }) {
  return (
    <div>
      <form>
        <label>Name</label>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(x) => {
              setLeDeets({ ...leDeets, email: `${x.target.value}` });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(x) => {
              setLeDeets({ ...leDeets, password: x.target.value });
            }}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="satisfaction"
            id="Yes"
            onChange={(e) => {
              setLeDeets({ ...leDeets, satisfied: e.target.id });
            }}
          />
          <label className="form-check-label">Satisfied</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="satisfaction"
            id="No"
            onChange={(e) => {
              setLeDeets({ ...leDeets, satisfied: e.target.id });
            }}
          />
          <label className="form-check-label">Not Satisfied</label>
        </div>
      </form>
      <button className="btn btn-primary" onClick={() => {setsubmitted(true)}}>
        SUBMIT FORM
      </button>
    </div>
  );
}
