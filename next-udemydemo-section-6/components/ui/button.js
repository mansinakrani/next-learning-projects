import Link from "next/link";

import Styles from './button.module.css';

function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={Styles.btn}>{props.children}</a>
            </Link>
        );
    }

    return (
        <button className={Styles.btn} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;