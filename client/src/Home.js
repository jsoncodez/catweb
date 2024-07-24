import {useState, useEffect} from 'react';
import  BlogList from './BlogList';

const Home = () => {

  /*------------*//*------------*/
    //server stuff:
    const [items, setItems] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

/*------------*//*------------*/
    // let varOutput = 'output variable';
    const [var1, setVar1] = useState('Variable1');
    const [var2, setVar2] = useState(2);
    const [name, setName] = useState('mario');

    /*------------*/
    //server useeffect:
    useEffect(() => {
      setTimeout(()=> {
        fetch("/api/items")
          .then((res) => 
            
            {if(!res.ok) {
              throw Error('Could not fetch data...');
            }

            return res.json();
          })

          .then(data => {
            setItems(data);
            setIsPending(false);
            setError(null);
          })
          //if there is any network error. i.e. can't connect to server.
          .catch((err)=>{
            setIsPending(false);            
            setError(err.message);
          })
        

      }, 1000);
    },[]);

    
    /*------------*/

    function renderItems() {
      return items.map((item, i)=>{
        return <div key={i}>
          <h5>{item.title}</h5>
          <p>{item.author}</p>
          <p>{item.body}</p>
        </div>
      })
    }
    const handleClick = () => {
        console.log("HELLO WORLD");
    }

    const handleClickPassVar = (variable) => {
        console.log("hello, this is variable = " + variable);
    }

    return ( 
        <div className="home">
            
            {isPending && <div>Loading...</div>}


            {isPending === false && <div>
              <h2>Welcome</h2>
              {items && <BlogList items={items} title = "MY BLOGS"/>}
              <button onClick={()=>setName('luigi')}>change name</button>
              <p>{name}</p>

              <button onClick={handleClick}>CLICK ME</button>
              <button onClick={() => {handleClickPassVar('A variable clicked')}}>CLICK PASS VARIABLE</button>
              
              {/* {renderItems()} */}
              
              <p>{var1} is {var2}</p>
            </div>}


        </div>
     );
}
 
export default Home;