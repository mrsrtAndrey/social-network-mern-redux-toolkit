import React, { useState, useEffect } from 'react'
import styles from './SidebarUser.module.scss'
import { PersonFill, HouseDoorFill, GearFill, ArrowRightCircleFill } from 'react-bootstrap-icons'
import {Link, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {authLogout} from '../../store/user/userSlice'
import IconUser from '../UI/IconUser/IconUser'
import { useSelector } from 'react-redux'

const SidebarUser = () => {
   const location = useLocation()
   const dispatch = useDispatch();
   const name = useSelector((state)=> state.users.user.name)
   const [ list, setList ] = useState([
      {
         id: 1, 
         title: 'Новости',
         active: false,
         icon: <HouseDoorFill className={styles.border_icon}/>,
         link: '/',
         onClick: ()=>{}
      },
      {
         id: 2, 
         title: 'Профиль',
         active: false,
         icon: <PersonFill className={styles.border_icon}/>,
         link: '/myprofile',
         onClick: ()=>{}
      },
      {
         id: 3, 
         title: 'Настройки',
         active: false,
         icon: <GearFill className={styles.border_icon}/>,
         link: '/settings',
         onClick: ()=>{}
      },
      {
         id: 4, 
         title: 'Выйти',
         active: false,
         icon: <ArrowRightCircleFill className={styles.border_icon}/>,
         link: '',
         onClick: ()=>dispatch(authLogout())
      },
   ])

   const isActive = (id) => {
      setList(list.map(item=> {
         if(item.id === id){
            return { ...item, active: true }
         }
         return { ...item, active: false }
      }))
   }

   useEffect(()=>{
      list.forEach(item => {
         if(item.link === location.pathname){
            isActive(item.id)
         }
      })
   }, [location.pathname])

   return (
      <div className={styles.sidebar}>
         <div className={styles.user_block}>
            <Link to="/myprofile" onClick={()=>isActive(2)}>
               <IconUser/>
               <p>{name?name:"Неизвестный"}</p>
            </Link>
         </div>
         <nav className={styles.menu}>
            <ul className={styles.ul}>
               {list.length && list.map((item, index)=>
                  <li 
                     key={index} 
                     className={item.active?styles.active:''}
                     onClick={item.onClick}
                  >
                     <Link to={item.link} onClick={()=>isActive(item.id)}>
                        {item.icon}
                        {item.title}
                     </Link>
                  </li>
               )}
            </ul>
         </nav>
      </div>
   );
};
export default SidebarUser