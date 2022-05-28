import React from 'react'
import styles from './Navbar.module.scss'
import Button from '../UI/Button/Button';
import IconUser from '../UI/IconUser/IconUser'
import { authLogout } from '../../store/user/userSlice'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = () => {
   const dispatch = useDispatch();
   const isLoggedIn = useSelector((state)=> state.users.isLoggedIn)
   const urlImg = 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'

   return (
      <nav className={styles.nav}>
         <h3 className={styles.logo}>Network</h3>
         {isLoggedIn
            ?<div className={styles.nav_left}>
               <Button type="fill">
                  <span className={styles.plus}>+</span>
                  <span>Create</span>
               </Button>
               <div className={styles.icon_user}>
                  <IconUser img = {urlImg}/>
                  <input type="checkbox" className={styles.toggle}/>
                  <ul className={styles.menu}>
                     <li><Link to={'myprofile'}>Мой профиль</Link></li>
                     <li><Link onClick={()=>dispatch(authLogout())} to={'/auth/login'}>Выйти</Link></li>
                  </ul>
               </div>
            </div>
            :<div className={styles.nav_left}>
               <Link to={'/auth/login'}>
                  <Button type="fill"><span>Войти</span></Button>
               </Link>
            </div>
         }
      </nav>
   );
};
export default Navbar