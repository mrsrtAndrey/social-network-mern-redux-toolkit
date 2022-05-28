import React from 'react'
import styles from './IconUser.module.scss'
import userImg from '../../../assets/images/user-icon.webp'

const IconUser = ({img}) => {
   return (
      <img className={styles.icon} src={img === undefined?userImg:img} alt="User"/>
   );
};
export default IconUser