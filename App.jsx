import React from 'react';
import './App.css';
import { auth, db } from './firebase/init'
import {collection, addDoc, getDocs, getDocm, doc } from "firebase/firestore"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  function createPost(){
    const post = {
      title: "land a 200k job",
      description: "finish FES",
    }
    addDoc(collection(db,"posts"), post)
  }

  async function getAllPosts(){
    const { docs } = await getDocs(collection(db,"posts"))
    const posts = docs.map(elem => ({...elem.data(), id: elem.id }))
    console.log(posts)
  }

  function getPostById(){
    const hardCodedID = "0h5P4Jojbe0XLsKTc0TI"
    const postRef = doc(db, "posts", hardCodedID)
    console.log(postRef)
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      console.log(user)
      if (user){
        setUser(user)
      }
    })
  }, [])

  function register(){
    createUserWithEmailAndPassword(auth, 'email@email.com', "test123")
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function login(){
    signInWithEmailAndPassword(auth, 'email@email.com', "test123")
      .then(({user}) => {
        console.log(user)
        setUser(user)
      })
    .catch((error) => {
      console.log(error)
    });
  }

  function logout(){
    signOut(auth)
    setUser({})
  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      { loading ? 'loading' : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>get Posts</button>
      <button onClick={getPostById}>get specific post</button>
    </div>
  );
}

export default App;
