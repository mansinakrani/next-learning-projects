import { Fragment } from "react";

function Layout() {
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;