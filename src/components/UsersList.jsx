import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/UserList.css";

const UserList = ({ setIsAuthenticated }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  // Fetch users when the component mounts or the page changes
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/", { replace: true });
        return;
      }

      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();
  }, [page, navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/", { replace: true });
  };

  // Handle Delete User
  const handleDelete = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/", { replace: true });
        return;
      }

      await axios.delete(`https://reqres.in/api/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Failed to delete user", error);
      alert("Failed to delete user!");
    }
  };

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <button className="btn-logout" onClick={handleLogout}>
        Logout
      </button>
      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img className="user-card-image" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <div className="user-info">
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
            </div>
            <div className="btn-container">
            <button className="btn-edit" onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</button>
            <button className="btn-delete" onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className=" btn-primary-list btn-list-prev"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="btn-primary-list"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
