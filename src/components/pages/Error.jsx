import {Spacer} from "../common/Section.jsx";

export const Error = () => {
    return (
        <>
            <div className="container-info jumbotron">
                <Spacer />
                <Spacer />
                <span className="section-label"> Sorry, the page you are looking for is not available</span><br />
                <span className="card-text">The address entered is not a valid page for this site, please use one of the links in the top bar</span>
            </div>
        </>
    )
}