import Link from "next/link";

import Styles from './button.module.css';

function Button(props) {
    return (
        <Link href={props.link}>
            <a className={Styles.btn}>{props.children}</a>
        </Link>
    );
}

export default Button;