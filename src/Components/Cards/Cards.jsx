import { useEffect, useState } from "react";
import Card from "./Card";
import UserDetails from "./UserDetails";

const Cards = (props) => {
  const userId = props.userId;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <>
      <div className=" mt-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 justify-items-center  ">
        {users.map((user) => (
          <Card key={user.id} user={user} userId={userId} />
        ))}
      </div>
    </>
  );
};

export default Cards;
