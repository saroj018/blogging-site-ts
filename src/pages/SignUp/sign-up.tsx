import styles from './style.module.css'
import { FaEnvelope, FaLock, FaGoogle, FaFacebook,FaUser } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className={styles.main}>
      <p className={styles.head}>Sign Up</p>
      <div className={styles.container}>
        <div className={styles.email}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Enter Your Email' />
          <FaEnvelope className={styles.icon} />
        </div>

        <div className={styles.email}>
          <label htmlFor="">Username</label>
          <input type="text" placeholder='Enter Your Username' />
          <FaUser className={styles.icon} />
        </div>

        <div className={styles.password}>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Enter Your Password' />
          <FaLock className={styles.icon} />
        </div>

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, perferendis ut, rerum obcaecati repellat velit et veniam eaque ab consequuntur magni optio! Porro odit, ullam provident perferendis rerum ipsam vero?


        <button className={styles.btn}>Sign Up</button>
        <FaGoogle className={styles.google} />
        <FaFacebook className={styles.facebook} />

        <p className={styles.other}>SignUp With</p>

      </div>
    </div>
  )
}

export default SignUp