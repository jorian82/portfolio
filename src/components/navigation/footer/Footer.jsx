// import { Switch } from "../../helpers/Switch";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DarkModeToggle } from "../../helpers/DarkModeToggle.jsx";

export const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <nav className="navbar fixed-bottom navbar-bg footer">
            <div className="container-fluid">
                <div>
                    <a href="https://www.linkedin.com/in/jorge-rivera-50616632/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>&nbsp;&nbsp;
                    <a href="https://github.com/jorian82" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <span><FontAwesomeIcon icon={faCopyright} /> {year}. Jorge Rivera</span>
                <DarkModeToggle />
            </div>
        </nav>
    )
}
