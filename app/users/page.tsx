import Link from "next/link";
import { use } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <div>
      <h1 className="text-4xl text-center ">Users</h1>
      <table className="table table-zebra my-5">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="underline text-purple-600" href="/">
        Back Home
      </Link>
    </div>
  );
};

export default UserPage;
