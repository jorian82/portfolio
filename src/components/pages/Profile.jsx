/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Section, Spacer } from "../common/Section"
import { Experience } from "./Experience";

const infoList = [
    {key:0, label:"Name", details:"Jorge Rivera Andrade"},
    {key:1, label:"Email", details:"jorge.rivera@ssde.com.mx"},
    {key:2, label:"Phone", details:"+5233 2226 1517 / +5233 2773 1504"},
    {key:3, label:"Address", details:"Marmol #40, Pedregal de Santa Martha, CP 45422, Tonalá, Jalisco, México"},
    {key:4, label:"Languages", details:"Spanish native / English near native"}
]

const education = [
    {key:0, school:"Universidad Autónoma del Estado de Morelos", period:"Sep 2001 - Jun 2007", grade:"Computer Sciences"},
    {key:1, school:"Centro de Estudios Técnicos en Computación", period:"Sep 1996 - Jun 1999", grade:"Graphics Design / PC Maintenance"}
];


// const educationList = [];

export const Profile = () => {
    const contactRows = infoList.map(item => <ContactItem label={item.label} details={item.details} key={item.key} />);

    const educationRows = education.map(item => <EducationItem school={item.school} grade={item.grade} period={item.period} key={item.key} />);

    return (
        <>
            <Spacer />
            <div className="">
                <div className="container-fluid">
                    <Section label="Contact" />
                    {contactRows}
                </div>
                <hr />
                <div className="container-fluid">
                    <Section label="Education" />
                    {educationRows}
                </div>
                <hr />
                <Experience />
            </div>
        </>
    )
}

export const ContactItem = (props) => {
    return (
        <div className="row">
            <div className="col-md-2 col-sm-12 details-tag left-align label">{props.label}</div>
            <div className="col-md-10 col-sm-12 subtitle-tag left-align">{props.details}</div>
        </div>
    )
}

export const EducationItem = (props) => {
    return (
        <div className="row">
            <div className="col-12 details-tag left-align label">{props.school} ({props.period})</div>
            <div className="col-12 subtitle-tag left-align">{props.grade}</div>
            <div className="col-12">&nbsp;</div>
        </div>
    )
}