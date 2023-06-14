
import styles from './style.module.css'
import { FaEnvelope, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className={styles.main}>
      <p className={styles.head}>Sign In</p>
      <div className={styles.container}>
        <div className={styles.email}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Enter Your Email' />
          <FaEnvelope className={styles.icon} />
        </div>

        <div className={styles.password}>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Enter Your Password' />
          <FaLock className={styles.icon} />
        </div>

        <p className={styles.forpass}>Forgot Password</p>

        <button className={styles.btn}>Sign In</button>
        <FaGoogle className={styles.google} />
        <FaFacebook className={styles.facebook} />

        <p className={styles.other}>SignUp With</p>

        <p className={styles.newacc}>Not account</p>
      </div>
    </div>
  )
}

export default SignIn