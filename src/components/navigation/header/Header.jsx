import {LinkLaunchModal} from "../../common/Dialog.jsx";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-light navbar-bg">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">Jorge Rivera</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav">
                        <LinkItem target="/">Home</LinkItem>
                        <LinkItem target="/profile">Profile</LinkItem>
                        <LinkItem target="/projects">Projects</LinkItem>
                        <LinkItem target="/skills">Skills</LinkItem>
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

export const LinkItem = (props) => {
    return (
        <li className="nav-item">
            <span className={"nav-link"}>
                <Link to={props.target}>{props.children}</Link>
            </span>
        </li>
    )
}

export const LinkToPage = (props) => {
    return (
        <div className="row">
            <div className="col-12 right-align">
                {/*<span className="modal-link" data-bs-toggle="modal" data-bs-target={props.modalId}>{props.label}</span>*/}
                <Link to={props.target}>{props.children}</Link>
            </div>
        </div>

    )
}