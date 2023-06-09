import {useState, useEffect} from 'react';
import { auth } from '../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



export default function AuthState() {
    const [authUser, setAuthUser] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user)
          } else {
            setAuthUser('')
          }
        });
          

    }, [authUser])

    const HandleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/SignIn')
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
  return (
      <div>{ authUser ? <><p>Hello, {authUser.displayName}</p><Button variant="outlined" color="error" onClick = {HandleSignOut}> Sign Out </Button></>: <p>Signed Out</p>} </div>
      )
}
