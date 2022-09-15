import { useSession } from 'next-auth/react';
import Link from 'next/link';

import classes from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status } = useSession() //while using useSession add sessionProvider in _app.js file
  const loading = status === "loading" //v4
  console.log({ session, loading })

  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && (<li>
            <Link href='/auth'>Login</Link>
          </li>)}
          {session && (<li>
            <Link href='/profile'>Profile</Link>
          </li>)}
          {session && (<li>
            <button>Logout</button>
          </li>)}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
