import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import { useGlobalContext } from '../Context'

const Delete = () => {
    const{id} = useParams();
     const { users, setUsers } = useGlobalContext();
     const deleteUser = (id)=>{
         setUsers(users.filter((user)=> user.id!=id))
         
         
     }
    return (
      <div className="container">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Are you sure to delete User?</p>
          </Modal.Body>

          <Modal.Footer>
            <Link to="/">
              <Button variant="warning">Back Home</Button>
            </Link>

            <Link to="/">
              {" "}
              <Button variant="danger" onClick={() => deleteUser(id)}>
                Delete
              </Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
}

export default Delete
