import styles from './landing-page.module.css';


function Main() {
  
  return (
    <div className={styles.main_container} id='home-page'>
      <div className={styles.middle}>
        <div className={styles.name}>
          Abhishek Tayal
        </div>
        <div className={styles.short_note}>
          Branding | Design | Development | Vision
        </div>
      </div>
    </div>
  );
}

export default Main;
