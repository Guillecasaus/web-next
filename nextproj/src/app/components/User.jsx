"use client";
import Link from "next/link";

async function getUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data;
}

async function Users() {
  const users = await getUsers();

  return (
    <div className="p-4 flex flex-col items-center">
      {users.map((user) => (
        <div key={user.id} className="p-4 m-4 border border-gray-300 rounded-md">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="rounded-full"
          />
          <p className="text-lg font-bold">
            {user.first_name} {user.last_name}
          </p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
