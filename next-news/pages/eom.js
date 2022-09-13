/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Navbar } from '../components/navbar';
import styles from '../styles/EOM.module.css';

export const EOM = ({ employee }) => {
    console.log(employee)
    return(
        <>
        <Head>
            <title>Employee Of The Month</title>
            <meta
            name="description"
            content={`This month's employee of the month is ${employee.name}`}
            />

            <meta property="og:image" content={employee.image} />
            <meta property="og:title" content="Employee Of The Month" />
            <meta
            property="og:description"
            content={`This month's employee of the month is ${employee.name}`}
            />

            <meta property="twitter:image" content={employee.image} />
            <meta property="twitter:title" content="Employee Of The Month" />
            <meta
            property="twitter:description"
            content={`This month's employee of the month is ${employee.name}`}
            />
        </Head>
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
        </>
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