import { NavLink } from "react-router";

function aboutPage() {
    return (
        <div className=" text-3xl">
            <NavLink to='/'>Main</NavLink>
            <div>About Page</div>
        </div>
    );
}

export default aboutPage;