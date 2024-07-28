import { useEffect,useState } from "react";
import  BlogList from './BlogList';

const useFetch = (url) => {

    // const [items, setItems] = useState([]);
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(()=> {
          // fetch("/api/items")
          fetch(url)
            .then((res) => 
              
              {if(!res.ok) {
                throw Error('Could not fetch data...');
              }
  
              return res.json();
            })
  
            .then(data => {
              // setItems(data);
              setData(data);
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



    return {data, isPending, error};
}

export default useFetch;