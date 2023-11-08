   
import React, { Component } from 'react';
 import { useState,useEffect } from 'react';
import Element from '../Upload/Element.js';
import Add from '../Upload/AddNew.js';
 import { createWorker } from 'tesseract.js';
 import Tesseract from 'tesseract.js';
 import { collection, getDocs } from "firebase/firestore"; 
 import { getFirestore } from "firebase/firestore"
import { async } from '@firebase/util';
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


export default function Upload(props) {

    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  const [safetyIndex, setSafetyIndex] = useState([]);
  const [d, setD] = useState([]);
    const [data, setData] = useState([]);
    var y=[1,2,3];
    const menuElements=d
    .map((c,i)=>   
  
    <Add e={c} ></Add>); 
    const safetyElements=safetyIndex
    .map((c,i)=>   
  
    <Element e={c} ></Element>); 

  //var safetyIndex=[];
  
  var s=[];
  var x=1;
    const [e,setE]=useState([]);
    const db = getFirestore();
	const changeHandler = (event) => {
		//setSelectedFile(event.target.files[0]);
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
		setIsFilePicked(true);
	};
    useEffect(async() => {
  var temp=[];
        const querySnapshot = await getDocs(collection(db, "list"));
querySnapshot.forEach((doc) => {
  //var data=`${doc.id} => ${doc.data()}`
  var data=doc.data();
  console.log(`${doc.id} => ${doc.data()}`);
  temp.push(data);
});
setData(temp);
  },[x]);
  const[finalscore,setFinalScore] =useState(y);

const handleAvg= (array) =>{
    let temp= array.reduce((a, b) => a + b) / array.length;
    setFinalScore(temp);
    console.log('finalscore '+temp)
}
var m=[];
var p=[];
	const addNewData = () => {
      //  console.log('data'+data);
        Tesseract.recognize(
            selectedFile,
            'eng',
            { logger: m => console.log(m) }
          ).then(({ data: { text } }) => {
     m  =    text.split(',');
     //console.log(m);
    // console.log('data1'+data[0].id);
       m.forEach(element=> {
p.push(element);
        // data.forEach(d=>{
        // //  console.log(((d.name).toLowerCase()).trim()+' '+((element).toLowerCase()).trim());
        //     if(((d.name).toLowerCase()).trim()===((element).toLowerCase()).trim())
        //     {
        //       s.push(d);
        //       //safetyIndex.push(parseInt(d.safetyIndex));

             
        //       console.log('match found');
        //     }
        // })

       
    })
    console.log("pP"+p);
    setD(p);
            
            console.log('data: ' + text);
            
            console.log('safetyIndex'+safetyIndex)
         // check   handleAvg(safetyIndex)
          }).then(
            console.log('safetyIndex'+safetyIndex)
        // handleAvg(safetyIndex)
          )
         // .then(handleAvg(safetyIndex))
          //)
	};
  const handleSubmission = () => {
    //  console.log('data'+data);
      Tesseract.recognize(
          selectedFile,
          'eng',
          { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
   m  =    text.split(',');
   //console.log(m);
  // console.log('data1'+data[0].id);
     m.forEach(element=> {
       e.push(element);
      data.forEach(d=>{
      //  console.log(((d.name).toLowerCase()).trim()+' '+((element).toLowerCase()).trim());
          if(((d.name).toLowerCase()).trim()===((element).toLowerCase()).trim())
          {
            s.push(d);
            //safetyIndex.push(parseInt(d.safetyIndex));

           
            console.log('match found');
          }
      })

     
  })
  console.log(s);
  setSafetyIndex(s);
          
          console.log('data: ' + text);
          
          console.log('safetyIndex'+safetyIndex)
       // check   handleAvg(safetyIndex)
        }).then(
          console.log('safetyIndex'+safetyIndex)
      // handleAvg(safetyIndex)
        )
       // .then(handleAvg(safetyIndex))
        //)
};


    const getData= async()=>{
        const querySnapshot = await getDocs(collection(db, "list"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
    }
    function getComponent(count){

        console.log(count);
       // console.log(selectedFile);
        switch(Math.round(count)){
          case 1: 
            return <div><img src={img1} alt="Image"/><br></br></div>
          case 2: 
            return <div><img style={{width:"200px",height:"160px"}}  src={img2} alt="Image2"/><br/></div>;
          case 3: 
            return <div><img style={{width:"200px",height:"160px"}}    src={img3} alt="Image3"/><br/></div>;
          case 4: 
            return <div><img style={{width:"200px",height:"160px"}}    src={img4} alt="Image4"/><br/></div>;
          case 5: 
            return <div><img style={{width:"200px",height:"160px"}}    src={img5} alt="Image5"/><br/></div>;
          case 6: 
            return <div><img style={{width:"200px",height:"160px"}}     src={img6} alt="Image6"/><br/></div>;
          case 7: 
            return <div><img style={{width:"200px",height:"160px"}}   src={img7} alt="Image7"/><br/></div>;
          case 8: 
            return <div><img style={{width:"200px",height:"160px"}}     src={img8} alt="Image8"/><br/></div>;
          case 9: 
            return <div><img style={{width:"200px",height:"160px"}}   src={img9} alt="Image9"/><br/></div>;
          case 10: 
            return <div><img  style={{width:"200px",height:"160px"}}      src={img10} alt="Image10"/><br/></div>;
           

          // .. etcdefault: 
            return <img src="" alt="Image default"/>;
        }
      }
     

    
	return(
   <div>
       <div style={{display:"flex",flexDirection:"column",margin:"auto"}}>
       
       <div 
            style={{display:"flex",flexDirection:"row",margin:"auto"}}>
                
	    <div style={{flex:1}}>
        <input type="file" name="file"  onChange={changeHandler} />
				
			</div>
            <div  style={{flex:1}}>
                <img src={selectedFile} alt="cannot display" ></img>
            </div>

             
            
            </div>
            <button style={{width:"100px",margin:"auto"}}onClick={handleSubmission}>View Safety index</button>
            <button style={{width:"100px",margin:"auto"}}onClick={addNewData}>Scan and Add</button>
            
            {/* <div style={{margin:"auto"}}>
            {getComponent(finalscore)}

                </div> */}
                
       </div>
		<div>
       {/* {safetyIndex.map((value,index)=>()} */}
       {/* {finalscore.map(e => {
        <li>{e}</li>
        // <Element key={e} e={e}>{e}</Element>
      })} */}
      {/* {
        safetyIndex.forEach(e=>{
          console.log("value"+e);
          getComponent(e);
        })
      } */}
      {menuElements}
      {safetyElements}
      </div>   
       
          
{/*          
            {e.map(e => (
        <Element key={e} e={e}>{e}</Element>
      ))} */}
          
		
        </div>
	)
}