const Navbar = () => {


    return ( 
        <nav className="navbar">

            <h1>WebCat</h1>

            <div className = "links">
                {/* <Link to ="/">Home</Link> */}
                {/* <Link to ="./" */}
                <a href="/" >Home</a>
                <a href="/about" >About</a>
                {/* <a href="/about">Home</a> */}
            </div>
        </nav>



     );




}
 
export default Navbar;