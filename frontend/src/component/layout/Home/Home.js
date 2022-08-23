
import React from 'react'
import { useEffect,useState} from 'react'
import axios from 'axios'
// import { ImageList } from '@mui/material'
import { useDispatch } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import { carthandler } from '../../action/productaction'
// import { AirlineSeatLegroomReducedTwoTone } from '@mui/icons-material'
import Alert from '../../alert/Alert'
import Crousel from '../crousel/Crousel'

const Home = () => {
  
  const [data, setdata] = useState([])
  const [cart, setcart] = useState(1)
  const [filter, setfilter] = useState(false)
  const [alert, setalert] = useState(false)
  var [page, setpage] = useState(1)

  const dispatch=useDispatch()
  const pagenext=async()=>{
    ++page;
    setpage(page)
    console.log(page)
    const res=await axios.get(`/api/v1/products?page=${page}`)
    console.log(res.data)
    setdata(res.data.products)
  }
  const pageprevious=async()=>{
    --page;

    setpage(page)
    console.log(page)
    const res=await axios.get(`/api/v1/products?page=${page}`)
    console.log(res.data)
    setdata(res.data.products)

  }

  
  const onchangehandler=()=>{
    // setfilter(e.target.value)
    // localStorage.removeItem('search')
    console.log(filter)
    if(filter==1)
    {
      localStorage.removeItem('filter')
      
    }
    if(filter==2)
    {
      localStorage.setItem('filter','electronics')
    }
    if(filter==3)
    {
      localStorage.setItem('filter','sports')
    }
     if(filter==4)
    {
      localStorage.setItem('filter','cloth')
    }
    if(filter==5)
    {
      localStorage.setItem('filter','cosmetics')
    }
    if(filter==6)
    {
      localStorage.setItem('filter','innerwear')
    }

  }
  

   
const fetchuserdata=async()=>{
  const search=localStorage.getItem('search')
  if(search){
    const res=await axios.get(`/api/v1/products?keyword=${search}`)
    console.log(res.data)
    setdata(res.data.products)
    localStorage.removeItem('search')
    return

  }
  

  const filter=localStorage.getItem('filter')
  console.log(filter)
  if(filter){
    const res=await axios.get(`/api/v1/products?category=${filter}`)
    console.log(res.data)
    setdata(res.data.products)
    return
    
  }
  // if(search && filter){
  //   const res=await axios.get(`/api/v1/products?keyword=${search}&&${filter}`)
  //   console.log(res.data)
  //   setdata(res.data.products)

  // }
  else{

    const res=await axios.get('/api/v1/products')
    console.log(res.data)
    setdata(res.data.products)
  }
  // setfetch(true)
  // localStorage.removeItem('search')

  if(page){
    const res=await axios.get(`/api/v1/products?page=${page}`)
    console.log(res.data)
    setdata(res.data.products)

  }
  
}


useEffect(() => {

  // dispatch()

  
// const fetchuserdata=async()=>{
//   const filter=localStorage.getItem('filter')
//   console.log(filter)
//   if(filter){
//     const res=await axios.get(`/api/v1/products?category=${filter}`)
//     console.log(res.data)
//     setdata(res.data.products)
    
//   }
//   else{

//     const res=await axios.get('/api/v1/products')
//     console.log(res.data)
//     setdata(res.data.products)
//   }
  
// }

onchangehandler()

fetchuserdata()
  const cart=localStorage.getItem('cart')
  if(cart==null){
    setcart(1)
  }
  // onchangehandler()
  // setcart(cart)

  // else{
  //   setcart(cart)
  // }
  

  
}, [filter])

const addtocarthandler=(elem)=>{
  window.scrollTo(0, 0)
  setalert(true)


  // dispatch(carthandler(elem))


  let data=localStorage.getItem('data');
  console.log(data)
  if(data===null)
  {
      dataobj=[];
  }
  else
  {
      var dataobj=JSON.parse(data);
      console.log(dataobj)
  }
  dataobj.push(elem);
  
  localStorage.setItem('data',JSON.stringify(dataobj));

  // // if(data!=null){
    
    setcart(cart+1)
  //   console.log(cart)
    localStorage.setItem('cart',cart)
  // // }
  //  const data1=JSON.parse(localStorage.getItem(data))
  // console.log(data1)
  // const length=data1.length


  // console.log(elem)
  // let arr=[]
  // arr.push(...elem)

  
  
  
  // localStorage.setItem('arr',JSON.stringify(arr))

  setalert(true)

  setTimeout(()=>{
    setalert(false)

  },3000)
  

}


  return (
    <>
    {/* {alert&& */}

    {/* <Navbar Cart={cart}/> */}
     {/* } */}
    {alert&& <Alert result="success" message="Item added to cart successfully"/>}
   
    <div className='container7'>

    <div className='container6 align-items-center my-1'>
      <div className='select'>


     <select className="select"  onChange={(e)=>{setfilter(e.target.value)}}>
                    <option value="1">Filter Product</option>
                    {/* <option value="2">Ecommerce</option> */}
                    <option value="2">Electronics</option>
                    <option value="3">sports</option>
                    <option value="4">cloths</option>
                    <option value="5">cosmetics</option>
                    <option value="6">Innerwear</option>

                  </select>
      </div>
    </div>
    {/* <Navbar/> */}
    {/* <i classNameName="bi bi-filter"></i> */}
      <div className='contanier'>  
      <Crousel/>

      </div>  

    
    
    

    <div className='container5 '>
     {
      data && data.map((elem)=>{
        return(
          <div className='containe' key={elem._id}>
          
        <div className="card" style={{width: '18rem'}} >
  <img src={elem.images.url} className="card-img-top" alt="..."  />
  <div className="card-body"style={{width: '18rem',height:'8rem'}}>
    <h5 className="card-title text-center"> {elem.name}  </h5>
    
    <p className="center" ></p>
    <h6 className="center  text-center">Price: Rs {elem.price}</h6>

    {/* <p classNameName="center" >Description: {elem.description}</p> */}
    {/* <p classNameName="center" >Category: {elem.category}</p> */}
    {/* <p classNameName="center" >Rating: {elem.ratings}</p> */}
    {/* <p classNameName="center" >Stock: {elem.Stock}</p> */}
    <div className='align-items-center'>
    <a  className="btn btn-primary " onClick={()=>{addtocarthandler(elem)}}>Add to Cart</a>
    </div>
  </div>
</div>


    {/* </div> */}

          </div>
        )
        
      })
    } 
    </div>

      
    </div>
    <nav aria-label="Page navigation example d-flex-center align-items-center ">
  <ul className="pagination d-flex-center align-items-center my-3">
    <li className="page-item"><a className="page-link" href="#"onClick={pageprevious}>Previous</a></li>
    <li className="page-item"><a className="page-link" href="#"onClick={pagenext}>Next</a></li>
  </ul>
</nav>

    </>
   
    
  )
}

export default Home