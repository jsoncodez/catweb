const Navbar = () => {


    return ( 
        <nav className="navbar">

            <h1>WebCat</h1>

            <div className = "links">
                {/* <Link to ="/">Home</Link> */}
                <a href="/" >Home</a>
                <a href="/create" >New Blog</a>
                {/* <a href="/">Home</a> */}
            </div>
        </nav>



     );




    }
 
export default Navbar;