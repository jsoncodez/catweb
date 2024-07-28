import { useEffect,useState } from "react";


const useFetch = () => {

    const [items, setItems] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(()=> {
          // fetch("/api/items")
          fetch("http://localhost:5000/api/items")
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

    //   return {items, isPending, error};
}

export default useFetch;