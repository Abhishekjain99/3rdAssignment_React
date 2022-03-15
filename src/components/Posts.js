import axios from 'axios';
import { useState,useEffect } from "react";
const Posts = () => {
    
    const [post,setPost] = useState([]);

    useEffect(()=>{
        getPosts()
    }, [])
    const getPosts=()=>{  
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
        console.log(res.data);
        setPost(res.data.slice(0,5));
        })
    }
    return(
        <div>
            <h1>API  DATA</h1>
            {
                post.map(post => (
                    <div key={post.id}>
                       <table style = {{border : "1"}}>
                <tr>
                    <th >Title</th>
                    <th >Details</th>
                </tr>
                <tr>
                    <th >{post.title}</th>
                    <th >{post.body}</th>
                </tr>
            </table>
                    </div>
                ))
            }
        </div>   
    )
}
export default Posts;