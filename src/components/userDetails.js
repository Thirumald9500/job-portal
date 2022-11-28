import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Welcome_post } from "../service/apiservice";


const Userpage = () => {
  const [is_auth,set_auth] = useState("no")
  let navigate = useNavigate();
  useEffect(()=>{
    Welcome_post().then((res)=>{
      console.log(res,'hit')
      if(res.data['status'] === 'success'){
        set_auth("yes")
      }else{
        navigate('/')
      }
      
    });
  },[])
  
  
  console.log('next');
  
  return (
    <div>
      <h1>heloo you logged in</h1>{is_auth}
    </div>
  )
}
export default Userpage;