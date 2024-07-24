// const BlogList = ({blogs, title, handleDelete}) => {
// const BlogList = ({blogs, title}) => {
const BlogList = ({items, title}) => {
 
    return (

        <div className = "blog-list">
            <h2 className="blog-list-title">{title}</h2>
                {items.map((item,i)=> (
                <div className="blog-preview" key={i}>
                    <h2>{item.title}</h2>
                    <p>Written by {item.author}</p>
                    {/* <button onClick={()=>handleDelete(blog.id)}>delete blog</button> */}
                </div>

            ))}
        </div>
    );
}
export default BlogList;
// const BlogList = ({blogs, title}) => {
   
//     return (

//         <div className = "blog-list">
//             <h2 className="blog-list-title">{title}</h2>
//             {blogs.map((blog, i) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>Written by {blog.author}</p>
//                     {/* <button onClick={()=>handleDelete(blog.id)}>delete blog</button> */}
//                 </div>

//             ))}
//         </div>
//     );
// }
// export default BlogList;