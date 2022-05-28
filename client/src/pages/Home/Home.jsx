import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from "react-redux";

const Home = () => {
   const { user } = useSelector((state) => state.users);

   useEffect(() => {
      axios
        .get('http://localhost:5000/api/user/all/', {
            headers: {
               Authorization: `Bearer ${user.token}` 
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
          console.log("Ошибка получения данных");
        })
   }, [user.token])

   return (
      <main className="contant box">
         Home
      </main>
   );
};
export default Home