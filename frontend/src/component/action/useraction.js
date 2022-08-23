import axios from "axios"


export const loginUser=(email,password)=>async(dispatch)=>{
    
    try{

        dispatch({type:"LoginRequest"})
       
        const {data}=await axios.post("/api/v1/login",{email,password},)
        console.log(data)
        // localStorage.setItem("id",JSON.stringify(data.data.user._id))        

        // if(data.data.user.role==='admin'){
            
        //     localStorage.setItem("admin",JSON.stringify(data.data.user.role))        
        // }

        // else{
            
        //     localStorage.setItem("user",JSON.stringify(data.data.user.role))        
        // }
        dispatch({
            type:"LoginSuccess",
            payload:data.user
        })
        // localStorage.setItem("islogin",true)
        // window.location.reload()

    //   localStorage.setItem("id",JSON.stringify(data.data.user._id))        

    //     if(data.data.user.role==='admin'){
            
    //         localStorage.setItem("admin",JSON.stringify(data.data.user.role))        
    //     }

    //     else{
            
    //         localStorage.setItem("user",JSON.stringify(data.data.user.role))        
    //     }



    }catch(e){
        
        dispatch({
            type:"LoginFailure",
            payload: e
        })

    }

    

}



export const registerUser=(formData,config)=>async(dispatch)=>{
    
    try{

        dispatch({type:"LoginRequest"})
       
        const {data}=await axios.post('/api/v1/register',formData,config)
        console.log(data)
        // localStorage.setItem("id",JSON.stringify(data.data.user._id))        

        // if(data.data.user.role==='admin'){
            
        //     localStorage.setItem("admin",JSON.stringify(data.data.user.role))        
        // }

        // else{
            
        //     localStorage.setItem("user",JSON.stringify(data.data.user.role))        
        // }
        dispatch({
            type:"LoginSuccess",
            payload:data.user
        })
        // localStorage.setItem("islogin",true)
        // window.location.reload()

    //   localStorage.setItem("id",JSON.stringify(data.data.user._id))        

    //     if(data.data.user.role==='admin'){
            
    //         localStorage.setItem("admin",JSON.stringify(data.data.user.role))        
    //     }

    //     else{
            
    //         localStorage.setItem("user",JSON.stringify(data.data.user.role))        
    //     }



    }catch(e){
        
        dispatch({
            type:"LoginFailure",
            payload: e
        })

    }

    

}

export const getuserData=()=>async(dispatch)=>{
    try{
        // const id=JSON.parse(localStorage.getItem('id'))
        dispatch({type:'LoadRequest'})
        const {data}=await axios.get('api/v1/me',)
        console.log(data)

        dispatch({
            type:"LoadSuccess",
            payload: data.user
        })


    }catch(err){
        console.log(err)
        dispatch({
            type:"LoadFailure",
            payload: err
        })

    


    }
}

export const Logouthandler=()=>async(dispatch)=>{
    try{
        dispatch(
            {type:"LogoutUserRequest", })
            await axios.get('api/v1/logout')

            
        dispatch({
            type:"LogoutUserSuccess",
            
        })

    }catch(error){
        dispatch({
            type: "LogoutUserFailure",
            payload: error.response.data.message,
          });


    }
}
