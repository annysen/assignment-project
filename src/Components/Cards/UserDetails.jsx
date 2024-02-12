import React from "react";

const UserDetails = (props) => {
  const { id, firstName, lastName, address, image, email, company } =
    props.user;

  console.log(props.user);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="User" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          <p>
            {" "}
            <span className="font-bold">Email:</span> {email}
          </p>
          <p>
            {" "}
            <span className="font-bold"> Address: </span>
            Address:
            {address.address}, {address.city}
          </p>
          <p>
            <span className="font-bold">Company Name:</span> {company.name}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a href="/">Back</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
