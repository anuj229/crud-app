import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Edit = () => {
    const {id} = useParams();
    
  let history = useHistory();
  const { users, setUsers } = useGlobalContext();
  const user = users.filter((user) => user.id == id);
  const [data, setData] = useState({
    id: id,
    name: user[0].name,
    position: user[0].position,
    salary: user[0].salary,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users,data]);
    console.log(users);
    history.push("/");
  };

  return (
    <div className="container">
      <Form onSubmit={() => handleSubmit()}>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Position"
            name="position"
            value={data.position}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Salary"
            name="salary"
            value={data.salary}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
        <Link to="/">
          <Button variant="warning">Back Home</Button>{" "}
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
