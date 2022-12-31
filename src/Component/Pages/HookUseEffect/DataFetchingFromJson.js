import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

export default function DataFetchingFromJson() {
    const Url = 'https://jsonplaceholder.typicode.com/todos'
    // const Url = 'http://localhost:8080/SpringMVCCRUDSimple/viewemp'
    const [posts,setPost] =useState([])
    const [id,setId] =useState(1)
    useEffect(() => {
        axios.get(Url)
             .then(response => {
                                console.log(response)
                                setPost(response.data)
                     })
                     .catch(err => {console.error(err)})
 
    },[]  ) // [] - If you you will not put this array "[]" , yow will get infine result in your 
  return (
    <div>
        <h1>Student Record</h1>
      <ul>  {
                posts.map(post => <li key={post.id}> {post.id} ---- {post.title}</li>)
            }
      </ul>
    </div>
  )
}
