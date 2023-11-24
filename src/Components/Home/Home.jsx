import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../UserReducer/UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <div>
      <div className="container">
        <h2>Crud App with Redux</h2>
        <Link to="/create">
          <button className="btn btn-success my-3">Create +</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((users, index) => (
              <tr key={index}>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>
                  <Link to={`/edit/${users.id}`}>
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => handleDelete(users.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
