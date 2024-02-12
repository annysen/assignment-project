import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, firstName, lastName, address, image, email, company } =
    props.user;
  // const showUser = props.showUser;
  const userId = props.userId;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="p-5">
        <img className="w-24 md:w-36" src={image} alt="avater" />
      </figure>
      <div className="card-body">
        <h2 className="card-title hover:text-violet-600">
          <Link to={`/user-details/${id}`} onClick={() => userId(id)}>
            {firstName} {lastName}
          </Link>
        </h2>
        {/* to={`/user-details/${id}`} */}
        <p>{email}</p>
        <p>
          {address.address}, {address.city}
        </p>
        <p>{company.name}</p>
      </div>
    </div>
  );
};

export default Card;
