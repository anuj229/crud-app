import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../Context';

const View = () => {
    const {id} = useParams();
    const {users,setUsers} = useGlobalContext();
    const user = users.filter((user)=>user.id==id)
    return (
      <>
      <div className="container view">
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{user[0].name}</Card.Title>
            <Card.Text>{user[0].position}</Card.Text>
            <Card.Text>{user[0].salary}</Card.Text>
            <Link to="/">
              <Button variant="primary">back home</Button>
            </Link>
          </Card.Body>
        
        </Card>
        </div>
      </>
    );
}

export default View


