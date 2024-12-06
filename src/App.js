
import Tile from "./components/Tile";
const api=[
  {lastupdated:"6/12/24",createdby:"ashank", website:" abcd.com" ,src:"./favicon.ico"},
  {lastupdated:"7/12/24",createdby:"yipee", website:"efgh.com " ,src:"./logo192.png"},
  {lastupdated:"8/12/24",createdby:"amazon", website:"amazon.com " ,src:"./logo512.png"}
]
function App() {
  return (
    <div>
     { api.map((ele)=>{
      return(

        <Tile lastupdated={ele.lastupdated} createdby={ele.createdby} website={ele.website} src={ele.src}/>
      
      )
      })
    }
      

    </div>
    
  );
}

export default App;
