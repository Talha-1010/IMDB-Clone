import { useEffect } from 'react';
import { useState } from 'react';



function TopShows() {
    
    
    const [data,setData] = useState([]); 
  
    useEffect(() => {
        

        fetch("https://imdb8.p.rapidapi.com/title/get-top-rated-tv-shows", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "e2d3a4d960mshfcca661df78c207p1f83dajsn4d8a0555c30f"
            }
        })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setData(data);

        })
        .catch(err => {
            console.error(err);
        });
        

    
    }, []);

    
    
    
    return (
      <div>
          <h2> Ratings</h2>
          {
              
              data.map((element)=>(
                <div className="title" key={element.id}  >
                {  
                   <h4>
                       {element.chartRating}
                   </h4>
                }
                 </div>  
              ))
          }              
      </div>
    );
  }
  export default TopShows;