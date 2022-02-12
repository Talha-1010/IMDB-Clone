import { useEffect } from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function Home() {
    
    
    const [data,setData] = useState([]); 
    const [search,setSearch] = useState("game of thr");
 

    
  
    useEffect(() => {
        //Runs only on the first render                            
        fetch("https://imdb8.p.rapidapi.com/auto-complete?q="+search, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "e2d3a4d960mshfcca661df78c207p1f83dajsn4d8a0555c30f"
            }
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data.d);
            setData(data.d);

        })
        .catch(err => {
            console.error(err);
        });

    
    }, [search]);

    
    
    
    return (
      <div>
        <h1>IMDB |Home Page</h1>
        <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        filterOptions={(x) => x}
        onChange={(event)=>{
            setSearch(event.target.value);
        }}
        options={data.map((option) => option.l)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            
          />
        )}
        />

          <h2>Search Results</h2>
          {
              
              data.map((element)=>(
                <div className="title" key={element.id}  >
                {  
                   <h4>
                       {element.l}
                       
                   </h4>
                }
                
                 </div>  
              ))
          }              
      </div>
    );

  }
  
  export default Home;
  