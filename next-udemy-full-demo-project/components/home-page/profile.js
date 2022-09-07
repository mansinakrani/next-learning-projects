import Image from 'next/image';

import classes from './profile.module.css';

function Profile() {
  return (
    <section className={classes.profile}>
      <div className={classes.image}>
        <Image
          src='/images/site/bp-cartoon.jpeg'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
      {/* `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. */}
      <h1>Hi, I&apos;m Mansi</h1> 
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Profile;