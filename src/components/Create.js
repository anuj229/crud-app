import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams,useHistory } from "react-router-dom";
import { useGlobalContext } from "../Context";
import "../App.css";

const Create = () => {
    let history = useHistory();
    const{users,setUsers} = useGlobalContext();
    const [data,setData] = useState({
           id:"",
           name:"",
           position:"",
           salary:""
    })

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data,[name]:value})
    }

    const handleSubmit=(e)=>{
       e.preventDefault();
       setUsers([...users, data])
       console.log(users);
       history.push("/")
    }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Id"
            name="id"
            value={data.id}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
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
            value={data.salaray}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <div className="submit">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          
            <Link to="/">
              <Button variant="warning">Back Home</Button>{" "}
            </Link>
         
        </div>
      </Form>
    </div>
  );
};

export default Create;
