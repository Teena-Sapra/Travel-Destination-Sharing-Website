import React from "react";
import UsersLists from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      image:
        "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg",
      name: "Teena Sapra",
      places: 3,
    },
    {
      id: "u2",
      image:
        "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-1170x780.jpg",
      name: "Sachi Sachdeva",
      places: 1,
    },
  ];
  return <UsersLists items={USERS} />;
};
export default Users;
