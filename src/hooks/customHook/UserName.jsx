import React from "react";
import useFetch from "./UseFetch";

const UserName = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>loading...</p>;
  if (error) return <p>error: {error}</p>;
  return (
    <>
      <ul>
        {data.length > 0 ? (
          data.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <p>no users found</p>
        )}
      </ul>
    </>
  );
};

export default UserName;
