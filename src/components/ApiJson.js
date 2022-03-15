import axios from 'axios';
import { useState,useEffect } from "react";
const ApiJson = () => {
    
    const [post,setPost] = useState([]);

    useEffect(()=>{
        getPosts()
    }, [])
    const getPosts=()=>{  
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
        setPost(res.data.slice(0,5));
        })
    }
    return(
        <div>
            <h1>API  DATA</h1>
            {
                post.map(post => (
                    <div key={post.id}>
                      <h5>Title: {post.title}</h5>
                      <p>{post.body}</p>
                    </div>
                ))
            }
        </div>   
    )
}
export default ApiJson;