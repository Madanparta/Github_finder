import React,{useState} from "react";
import axios from "axios";

import "./index.css";
import Users from "./components/Users";
import Search from "./components/Search";

function App() {
  const [users, setUsers] = useState([]);
  const [showClear, setshowClear] = useState(false);

  // useEffect(()=>{
  //   // fetchData()

  // },[])

  // const fetchData = async ()=>{
  //   const res = await axios.get("https://api.github.com/users");
  //   // console.log(data)
  //   setUsers(res?.data);
  // }

  const SearchNames = async (text) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    setUsers(res?.data?.items)
    setshowClear(!showClear)
  }

  // console.log(users)

  const clearUsers = () => {
    setUsers([])
  }
  return (
    <div className="container">
      <Search SearchNames={SearchNames} ShowClear={showClear} clearUsers={clearUsers}/>
      <Users users={users}/>
    </div>
  );
}

export default App;
