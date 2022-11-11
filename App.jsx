import React from 'react';
import './App.css';
import { auth, db } from './firebase/init'
import {collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  async function updatePost(){
    const hardCodedID = "0h5P4Jojbe0XLsKTc0TI"
    const postRef = doc(db, "posts", hardCodedID)
    const post = await getPostById(hardCodedID)
    console.log(post)
    const newPost = {
      ...post,
      title:"land 400k"
    }
    console.log(newPost)
    // updateDoc(postRef, newPost)
  }

  function createPost(){
    const post = {
      title: "finish firebase",
      description: "do fes",
      uid: user.uid,
    }
    addDoc(collection(db,"posts"), post)
  }

  async function getAllPosts(){
    const { docs } = await getDocs(collection(db,"posts"))
    const posts = docs.map(elem => ({...elem.data(), id: elem.id }))
    console.log(posts)
  }

  async function getPostById(){
    const hardCodedID = "0h5P4Jojbe0XLsKTc0TI"
    const postRef = doc(db, "posts", hardCodedID)
    const postSnap = await getDoc(postRef)
    const post = postSnap.data()
    console.log(post)
  }

  async function getPostbyUID(){
    const postCollectionRef = await query(
      collection(db,"posts"),
      where("uid", "==", user.uid)
    )
    const { docs } = await getDocs(postCollectionRef)
    console.log(docs.map(doc => doc.data()))
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
      <button onClick={getPostbyUID}>uid post</button>
      <button onClick={updatePost}>update</button>
    </div>
  );
}

export default App;
