import React from "react";
import "./App.css";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { useSelector } from "react-redux";

function App() {
  // const names = ["soerjo", "hastomo", "tomo"];
  const { users } = useSelector((state) => state.storing);
  // console.log(users);

  return (
    <div>
      <Form />
      <div>
        {users.map((user, index) => (
          <UserList key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
