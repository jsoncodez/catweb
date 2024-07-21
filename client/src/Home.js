import {useState, useEffect} from 'react';
import  BlogList from './BlogList';

const Home = () => {

    // let varOutput = 'output variable';
    const [var1, setVar1] = useState('Variable1');
    const [var2, setVar2] = useState(2);
    const [name, setName] = useState('mario');

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: '1111oisadjfoasidjfosaijf', author: 'steve', id: 1},
        {title: 'Join the party', body: '2222oisadjfoasidjfosaijf', author: 'paul', id: 2},
        {title: 'react practice blog post', body: '3333oisadjfoasidjfosaijf', author: 'mario', id: 3}
    ]);


    const handleClick = () => {
        console.log("HELLO WORLD");
    }

    const handleClickPassVar = (variable) => {
        console.log("hello, this is variable = " + variable);
    }


    const handleDelete = (id)=> {
        const newBlogs = blogs.filter(blog => blog.id !== id);

        setBlogs(newBlogs);

    }


    useEffect(() => {
        
    }, [name]);


    // useEffect(() => {
    //     fetch('http://localhost:8000/blogs')
    //         .then(res=> {
    //             return res.json();

    //         })
    //         .then(data=> {
    //             setBlogs(data);
    //         });
    // }, []);


    return ( 
        <div className="home">
            <h2>Home Page</h2>

            {blogs && <BlogList blogs={blogs} title ="My Blogs" handleDelete={handleDelete}/>}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author==="mario")} title="Mario's blogs" handleDelete={handleDelete}/>}|

            <button onClick={()=>setName('luigi')}>change name</button>
            <p>{name}</p>

            <button onClick={handleClick}>CLICK ME</button>
            <button onClick={() => {handleClickPassVar('A variable clicked')}}>CLICK PASS VARIABLE</button>

            <p>{var1} is {var2}</p>

        </div>
     );
}
 
export default Home;