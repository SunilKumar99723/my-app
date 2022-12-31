import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

export default function DataFetchingFromJsonWithIdOnButtonClick() {

    const [post, setPost] = useState({}) // remove arrray for ID result
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const Url = `https://jsonplaceholder.typicode.com/todos/${idFromButtonClick}`
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(Url)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(err => { console.error(err) })

    }, [idFromButtonClick]) // [] - If you you will not put this array "[]" , yow will get infine result in your 
    // As per ID if you want result put - [idFromButtonClick]
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />  {/* // Add input element, this will be controlled element */}
            <button type="button" onClick={handleClick}> Submit to fetch post </button>
            <div>{post.title}</div>

            {/* <ul>  {
                posts.map(post => <li key={post.id}> {post.id} ---- {post.title}</li>)
            }
      </ul> */}
        </div>
    )
}
