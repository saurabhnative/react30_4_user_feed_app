import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import Header from "./components/Header";
export default function App() {
  const [data, updateData] = useState([])
  useEffect(()=>{
    // API call to get user list: https://randomuser.me/api/?results=50
    axios.request({
      method: 'GET',
      url: 'https://randomuser.me/api/?results=50',
    }).then((res) => {
      if (res.data.results.length === 50) {
        updateData(res.data.results);
      } else {
        console.log('Error in API request')
      }
    }).catch((err) => console.log(err));
  },[]);

  console.log(data[0]);

  return (
      <div className="App">
        <Header title={"UserList"} />
        <div className="row d-flex justify-content-center">
          {data.map((item, index) => (
            <UserList key={index} item={item} />
          ))}
        </div>
      </div>
    );
}
