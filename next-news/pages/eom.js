/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

// import jsonData from '../db.json'
import { Navbar } from '../components/navbar';
import styles from '../styles/EOM.module.css';

export const EOM = ({ employee }) => {
    console.log(employee)
    return(
        <div className='page-container'>
            <Navbar />
            <div className={styles.main}>
                <h1>Employee of The Month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{ employee.name }</h3>
                    <h6>{ employee.position }</h6>
                    {/* <Image src={employee.image} alt="employee" /> */}
                    <img src={employee.image} alt="employee" />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',);
    
    const employee = await apiResponse.json();

    return {
      props: {
        employee,
      },
    };
};

export default EOM;