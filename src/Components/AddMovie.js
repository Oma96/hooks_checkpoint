import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'




 export default function AddMovie({movies,setMovies}) {

   const[title,setTitle]= useState("")
   const[desc,setDesc]= useState("")
   const[poster, setPoster]=useState("")
   const[rate,setRate]=useState("")


   

   const addHandler=()=>{
    
    setMovies([...movies,{id: Math.random(),title:title,description:desc,image:poster}])
   
   handleClose()
   }
 

   

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>

      <Button variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <h1 className="title"> Edit your Movie </h1>
        <input type="text" placeholder="Add a movie "  onClick={(e)=>{
      setTitle (e.target.value)}}/> 
         <input type="text" placeholder="Add description" onClick={(e)=>{
      setDesc (e.target.value)}}/>
         <input type="url"placeholder="Add a poster" onClick={(e)=>{
      setPoster (e.target.value)}}/>
        <input type="text" placeholder="Add a rate" onClick={(e)=>{
      setRate (e.target.value)}}/>
        <Button variant="secondary" onClick={handleClose}> Close </Button>
        <Button variant="primary" onClick={addHandler}> Save Changes </Button>
        
      </Modal>    
     </div>
    )
}




