import React from 'react'
import { useGlobalContext } from '../Context'
import {Table, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../App.css'

const Home = () => {
    const {users,setUsers}  = useGlobalContext();
    return (
      <>
        <div className="container">
          <div className="create">
            <Link to="/create">
              <Button variant="warning">Create User</Button>{" "}
            </Link>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Postion</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.position}</td>
                    <td>{user.salary}</td>
                    <td>
                      <Link to={"/view/" + user.id}>
                        <Button variant="success">View</Button>{" "}
                      </Link>
                      <Link to={"/edit/" + user.id}>
                        <Button variant="info">Edit</Button>{" "}
                      </Link>
                      <Link to={"/delete/" + user.id}>
                        <Button variant="danger">delete</Button>{" "}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </>
    );
}

export default Home
