import axios from "axios";
import React, { Component, useEffect, useState } from "react";

// const User = () => {
//   return (
//     <h1>Users</h1>
//   );
// };

// class User extends Component {
//   state = {
//     users: [],
//   };
//
//   componentDidMount() {
//     let responseData = [
//       { id: 0, name: "Sourav" },
//       { id: 1, name: "Singh" },
//     ];
//     console.log("Component is mounted");
//     this.setState({ users: responseData });
//   }
//
//   render() {
//     return <h1>Users</h1>;
//   }
// }

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // let responseData = [
    //   { id: 0, name: "Sourab" },
    //   { id: 1, name: "Singha" },
    // ];
    // setUsers(responseData);
    // console.log("Fetching Data!");
    // for (let i = 0; i < 4; i++) {
    //   console.log(`Fetching Data!! ${i}\'th time`);
    //   setTimeout(() => {
    //     console.log(`Fetching Data Finished!! ${i}\'th time`);
    //   }, 3000);
    // }

    const controller = new AbortController();
    for (let requestNo = 0; requestNo < 10; requestNo++) {
      setTimeout(() => {
        axios
          .get(`http://localhost:8080/api/getData`, {
            signal: controller.signal,
          })
          .then((data) => {
            console.log(data.data.data);
            console.log(
              `Finished request number:${requestNo} at ${new Date().toLocaleString()}`
            );
            setUsers((oldUsers) => [...oldUsers, data.data.data]);
          })
          .catch((err) => {
            console.log(err);
          });
      }, requestNo * 5000);
    }
    return () => controller.abort();
  }, []);

  return (
    <div>
      <div>User</div>

      {users.map((ele) => {
        return (
          <p key={ele.id}>
            {ele.id} {ele.name}
          </p>
        );
      })}
    </div>
  );
};

export default User;
