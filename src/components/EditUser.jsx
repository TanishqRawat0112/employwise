import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/EditUser.css";

const EditUser = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Get user ID from URL

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error("Failed to fetch user data", error);
        alert("Failed to fetch user data.");
        navigate("/users"); // Redirect back to the users list if fetch fails
      }
    };

    fetchUser();
  }, [id, navigate]);

  // Handle form submission to update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/", { replace: true });
        return;
      }

      const response = await axios.put(`https://reqres.in/api/users/${id}`, {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
      });
      alert("User updated successfully!");
      navigate("/users"); // Redirect to users list after successful update
    } catch (error) {
      console.error("Failed to update user", error);
      setError("Failed to update user!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="edit-user-container">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          className="input-field"
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          className="input-field"
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="input-field"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <button className="btn-primary-edit" type="submit">
          Update
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default EditUser;
