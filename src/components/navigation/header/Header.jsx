import {LinkLaunchModal} from "../../common/Dialog.jsx";

export const Header = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-light navbar-bg">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">Jorge Rivera</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav">
                        <NavItem id="#profileModal" target="#profile">Profile</NavItem>
                        <NavItem id="#projectsModal" target="#projects">Projects</NavItem>
                        <NavItem id="#skillsModal" target="#skills">Skills</NavItem>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export const NavItem = (props) => {
    return (
        <li className="nav-item">
            <span className={"nav-link"}>
                <LinkLaunchModal modalId={props.id} label={props.children} />
            </span>
        </li>
    )
}
