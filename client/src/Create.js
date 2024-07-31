import { useState } from "react";
// import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle]=useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
   


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author };

        setIsPending(true);

        // setTitle(title);
        // setBody(body);
        // setAuthor(author);

        // console.log(blog);
        fetch('http://localhost:5000/api/items', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
            
        }).then(() => {
            console.log('new blog added');
      
        
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required/>
                <label>Blog Body:</label>

                <textarea required name="" id="" cols="30" rows="10"></textarea>
                <label>Blog Author:</label>
                <select>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create;