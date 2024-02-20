/* eslint-disable react/prop-types */
import '../../styles/home.css'
import jra_square from '../../assets/jra_square.png'
import { LinkLaunchModal } from '../common/Dialog.jsx';

export const Home = () => {
    return (
        <div className="container-info">
            <div className="row align-items-center">
                <div className="col-md-3 col-sm-12">
                    <Picture imgsrc={jra_square} cssClass="user-picture" />
                </div>
                <div className='col-md-1 col-sm-12'></div>
                <div className="col-md-8 col-sm-12">
                    <GeneralInfo />
                </div>
            </div>
            <LinkLaunchModal modalId="#profileModal" label="More..." />
        </div>
    )
}

export const Picture = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <img src={props.imgsrc} className={props.cssClass} />
                </div>
            </div>
        </div>
    )
}

export const GeneralInfo = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 title-tag left-align">
                    Jorge Rivera
                </div>
            </div>
            <div className="row">
                <div className="col-12 subtitle-tag left-align">
                    About me
                </div>
            </div>
            <div className="row">
                <div className="col-12 justify-align">
                    <ul>
                        <li>I&apos;m a computer Scientist, studied at UAEMorelos</li>
                        <li>Currently I work at Concentrix as a FullStack Engineer consulting for T-Mobile</li>
                        <li>As of January 2022 I&apos;m co-founder of a startup based in Brazil with a friend of mine </li>
                        <li>I&apos;m a big fan of the development process, I love the planning, the preparation and the execution</li>
                        <li>My goal is to build secure and scalable top quality software</li>
                    </ul>
                    <br />
                </div>
            </div>
        </div>
    )
}