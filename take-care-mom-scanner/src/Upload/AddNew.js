   
import React from 'react';
//import { restaurantData} from '../../LandingPage/LandingPage';
import './Element.scss'    
import {useState} from 'react';
import data from '../firebas.js';
import {  ref, set } from "firebase/database";
//import f from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore";
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';

const AddNew=(props)=>
{
    const [name , setName] = useState("");
    const [safetyIndex , setSafetyIndex] = useState("");
    const [isBanned , setIsBanned] = useState(false);
    const [cas , setCAS] = useState("");
    //const db = data.firestore();
    const db = getFirestore();

    function getComponent(count){

        console.log(count);
       // console.log(selectedFile);
        switch(Math.round(count)){
          case 1: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}} src={img1} alt="Image"/><br></br></div>
          case 2: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}}  src={img2} alt="Image2"/><br/></div>;
          case 3: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}}    src={img3} alt="Image3"/><br/></div>;
          case 4: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}}    src={img4} alt="Image4"/><br/></div>;
          case 5: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}}    src={img5} alt="Image5"/><br/></div>;
          case 6: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}}     src={img6} alt="Image6"/><br/></div>;
          case 7: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}}   src={img7} alt="Image7"/><br/></div>;
          case 8: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}}     src={img8} alt="Image8"/><br/></div>;
          case 9: 
            return <div><img style={{width:"100px",height:"80px",float:"right"}}   src={img9} alt="Image9"/><br/></div>;
          case 10: 
            return <div><img  style={{width:"100px",height:"80px",float:"right"}}      src={img10} alt="Image10"/><br/></div>;
           

          // .. etcdefault: 
            return <img src="" alt="Image default"/>;
        }
      }
     
    
    const onClick=()=>{
       // e.preventDefault();
        //props.onClick(props.restaurantData);  //passing restaurant Data to landing page
        if(safetyIndex!="" ){
       

        // set(ref(db, 'ingredients' ), {
        //        name : name,
        //     safetyIndex : safetyIndex,
        //     isBanned:isBanned,
        //     casNumber: cas,
        //   })
        //   .then(() => {
        //     // Data saved successfully!
        //   })
        //   .catch((error) => {
        //     // The write failed...
        //   });

        // db.collection("list")
        // .doc(name)
        // .set({
        //         name : name,
        //             safetyIndex : safetyIndex,
        //             isBanned:isBanned,
        //             casNumber: cas,
        // })
        // .then(function () {
        // console.log("Value added to list successfully!");
        // })
        // .catch(function (error) {
        // console.error("Error adding Value: ", error);
        // });
//add trim
        const cityRef = doc(db, 'list', ''+name+'');
        setDoc(cityRef, 
            {
                         name : name,
                    safetyIndex : safetyIndex,
                    isBanned:isBanned,
                    casNumber: cas,
            }
            );
            alert("Element added successfully!");

    }
    else
    {
        alert("Please enter Safety index number!");
    }
        }
    return (
        <div>
        <div className="card-res">
            {/* <div style={{display:"flex",flexDirection:"row"}}> */}
           <div>
           <div style={{marginTop:"10px",display:"table"}}>
           <div className="card_body_res" style={{display:"table-row"}}>
               <label style={{display:"table-cell"}}>Name: </label>&nbsp; 
               {/* <label style={{height:"20px"}}><b>{props.e.name}</b></label> */}
               <input type="text" defaultValue={props.e.trim()} style={{height:"20px",width:"200px",display:"table-cell"}} onChange={(e)=>{setName(e.target.value)}}/>
               </div> 
             
              
                <br/>
                <br/>
                <div className="card_body_res" style={{display:"table-row"}}>
               <label style={{display:"table-cell"}}>Safety Index Score: </label>&nbsp; 
               <input type="text" style={{display:"table-cell"}} onChange={(e)=>{setSafetyIndex(e.target.value)}} ></input>
               </div>
               {/* <div style={{flex:"5"}}> 
                   {getComponent(props.e.safetyIndex)}
               </div> */}
             
               <br/>
               <div className="card_body_res" style={{display:"table-row"}}>
               <label style={{display:"table-cell"}}>Is Banned?: </label>&nbsp; 
               <input type="checkbox" style={{display:"table-cell"}} onChange={(e)=>{setIsBanned(e.target.value)}}></input>
                </div>
               <br/>
               <div className="card_body_res" style={{display:"table-row"}}>
               <label style={{display:"table-cell"}}>CAS Number: </label>&nbsp; 
               <input type="text" style={{display:"table-cell"}} onChange={(e)=>{setCAS(e.target.value)}} ></input>
           </div>
            </div>
            <button onClick={()=>{onClick()}} className="order_button_res" >ADD</button> 
            </div>
             {/* push to firebase */}
            </div>
           
           <br/>
              
           <div className="card_button_res">
           
           </div>
        </div>
        
    )
}

export default AddNew;