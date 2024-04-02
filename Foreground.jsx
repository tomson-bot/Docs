import React from 'react';
import Card from './Card';

function Foreground() {
  //  const ref=UseRef(null);
 const data=[
  {
    desc:"Thomas" ,filesize:".4mb",close:false,tag:{isOpen:true,tagTitle:"Dowload NOw",tagColor:"green"},
  },
  {
    desc:"Hi this my first project using react " ,filesize:".4mb",close:false,tag:{isOpen:true,tagTitle:"Dowload NOw",tagColor:"green"},
  },
  {
    desc:"I learned components,Hooks...etc" ,filesize:".4mb",close:false,tag:{isOpen:true,tagTitle:"Dowload NOw",tagColor:"green"},
  },
 ];


  return (
        <div className='fixed w-full h-full top-0 left-0  z-[3] flex gap-5 p-5 '>
         {data.map((items,index)=>(
             <Card data={items}/>
         ))}
         </div>
  )
}

export default Foreground