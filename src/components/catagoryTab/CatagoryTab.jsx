import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToy from './CategoryToy';
// import CategoryToy from './CategoryToy';

const CatagoryTab = () => {

const [category,setcategory] = useState('car');
const [allToys, setAllToys] = useState([]);

useEffect(()=>{
    fetch(`https://children-toy-server.vercel.app/alltoys/${category}`)
   .then(res=>res.json())
   .then(data=>setAllToys(data))
},[category]);

const handelTabClick = (tab) =>{
    setcategory(tab)
}
return (
<div className='container mx-auto'>
    <Tabs>
    <TabList>
<div className='grid grid-flow-col items-center'>
      <Tab><div  onClick={() => handelTabClick('car')} className='text-center font-black'>Super Car</div></Tab>
      <Tab><div  onClick={() => handelTabClick('truck')} className='text-center font-black'>Truck</div></Tab>
      <Tab><div  onClick={() => handelTabClick('bus')} className='text-center font-black'>Bus</div></Tab>
</div>
    </TabList>
    <TabPanel>
        <div className='grid grid-flow-row md:grid-flow-col gap-4 m-4 items-center justify-around'>
        {allToys.map((toy,index)=>(
            <CategoryToy key={index} toy={toy}/>
        ))}
        </div>
    </TabPanel>
    <TabPanel>
        <div className='grid grid-flow-row md:grid-flow-col gap-4 m-4  items-center justify-around'>
        {allToys.map((toy,index)=>(
            <CategoryToy key={index} toy={toy}/>
        ))}
        </div>
    </TabPanel>
    <TabPanel>
        <div className='grid grid-flow-row md:grid-flow-col gap-4 m-4 items-center justify-around'>
        {allToys.map((toy,index)=>(
            <CategoryToy key={index} toy={toy}/>
        ))}
        </div>
    </TabPanel>

{/* <div className='grid grid-flow-col'>
{allToys.map((toy)=>{
        return (
            <TabPanel key={toy._id} className='flex'>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={toy.picture_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{toy.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </TabPanel>
        )
    })}
</div> */}
    {/* {allToys.map((toy)=>{
        return (
            <TabPanel key={toy._id}>
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </TabPanel>
        )
    })}
    {/* <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel> */}
    {/* <TabPanel> */}
      {/* {
        allToys.map((toy)=>{
            return (
                <CategoryToy key={toy._id} toy={toy}/>
            )
        })
      }
    </TabPanel>  */}
  </Tabs>
</div>)
};

export default CatagoryTab