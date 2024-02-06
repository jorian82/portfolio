/* eslint-disable react/prop-types */
import sysStatus from '../../assets/sysStatus.png'; //qad_ss.jpg';
import docMan from '../../assets/docMan.png'; //ssde_dm.jpg';
import medAssist from '../../assets/medAssist.png'; //medinreal_ma';
import { Section } from '../common/Section';
import { LinkLaunchModal, Modal } from '../common/Dialog';
import { CardLaunchModal } from '../common/Dialog';
import { Picture } from "./Home.jsx";

import '../../styles/project.css';
import { faAngular, faJava, faLinux, faNodeJs, faPython, faUbuntu } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { Skill } from "./Skills.jsx";

const previewList = [
    {img: sysStatus, alt: "System Status project", title: "QAD System Status",
        description: "Application/Offices Status Dashboard. Proprietary app. Allows users to subscribe to particular alerts, " +
            "systems and offices to monitor health status, current outages and scheduled maintenance on worldwide apps and offices. " +
            "Hosted in Google Cloud Servers",
        technologies:[
            {key: 0, icon: faJava, label: "Spring Boot"},{key: 1, icon: faDatabase, label: "Cloud MySQL"},{key: 2, icon: faCloud, label:"App Engine"},
            {key: 3, icon: faAngular, label: "Angular"},{key: 4, icon: faCloud, label: "GCP"},{key: 5, icon: faServer, label:"OneLogin"},
        ], source: "not available, proprietary software",
        short:"Applications/Offices Health Dashboard", modalId:"ssModal", key: 0
    },
    {img: docMan,    alt: "Documents Manager",     title: "SSDE Documents Manager",
        description: "Document repository for MapleBear franchises. Stores procedure, suppliers and standard publicity manuals. " +
            "Controlled document access by user roles. Hosted on our company server configured with AlmaLinux and Nginx",
        technologies: [
            {key: 0, icon: faNodeJs, label: "NodeJs"},{key: 1, icon: faDatabase, label: "MySQL"},{key: 2, icon: faAngular, label: "Angular"},
            {key: 3, icon: faServer, label: "REST API"},{key: 4, icon: faLinux, label: "AlmaLinux"}
        ], source: "not available, proprietary software",
        short:"Documents Manager application", modalId:"docManModal",key: 1
    },
    {img: medAssist, alt: "Medical Assistant",     title: "MedInReal Medical Assistant",
        description: "Medical Assistant application, built with Django and Django Rest framework, uses Google Calendar to " +
            "schedule appointments, interacts with CERNER API to fill patients information to EHR systems. Hosted in our own " +
            "company server configured with Ubuntu Server, MySQL server and Nginx",
        technologies: [
            {key: 0, icon: faPython, label: "Python"},{key: 1, icon: faDatabase, label: "MySQL"},{key: 2, icon: faPython, label: "Django"},
            {key: 3, icon: faServer, label: "CERNER API"},{key: 4, icon: faUbuntu, label: "Ubuntu Server"},{key: 5, icon: faServer, label: "REST API"}
        ], source: "not available, proprietary software",
        short:"Virtual Medical assistant", modalId:"medAssistModal",key: 2
    }
]

const complementaryList = [
    {img: sysStatus, alt: "CST Sprint Legacy",    title: "Customer Support Tool (T-Mobile)",
        description: "The application provides a way for the phone representatives to check the status of the Legacy Spring customers " +
            "lines and their billing information to provide technical support on any issue or complication they have with their service." +
            "It interacts with other business units using REST and SOAP APIs to gather all pertinent information",
        technologies: [
            {key: 0, icon: faJava, label: "Spring Boot"},{key: 1, icon: faDatabase, label: "Oracle"},{key: 2, icon: faAngular, label: "Angular"},
            {key: 3, icon: faNodeJs, label: "REST API"},{key: 4, icon: faServer, label: "SOAP API"}
        ], source: "not available, proprietary software",
        short:"Applications/Offices Health Dashboard", modalId:"medAssist1",key: 3
    }
    // {img: docMan,    alt: "Project #5 holder",     title: "Project #5 holder",
    //     description: "Application/Offices Status Dashboard. Allows users to subscribe to alerts and monitor health status and scheduled maintenance on worldwide apps and offices.",
    //     technologies: [
    //         {key: 0, icon: faPython, label: "Python"},{key: 1, icon: faDatabase, label: "MySQL"},{key: 2, icon: faAngular, label: "Angular"},
    //         {key: 3, icon: faNodeJs, label: "NodeJs"},{key: 4, icon: faDatabase, label: "MySQL"},{key: 5, icon: faAngular, label: "Angular"}
    //     ], source: "not available, proprietary software",
    //     short:"Applications/Offices Health Dashboard", modalId:"docMan1",key: 4
    // },
    // {img: sysStatus, alt: "Project #6 holder",     title: "Project #6 holder",
    //     description: "Application/Offices Status Dashboard. Allows users to subscribe to alerts and monitor health status and scheduled maintenance on worldwide apps and offices.",
    //     technologies: [
    //         {key: 0, icon: faPython, label: "Python"},{key: 1, icon: faDatabase, label: "MySQL"},{key: 2, icon: faAngular, label: "Angular"},
    //         {key: 3, icon: faNodeJs, label: "NodeJs"},{key: 4, icon: faDatabase, label: "MySQL"},{key: 5, icon: faAngular, label: "Angular"}
    //     ], source: "not available, proprietary software",
    //     short:"Applications/Offices Health Dashboard", modalId:"ssModal1",key: 5
    // }
];

export const Projects = (props) => {
    let projRows = [];
    let modalRows = [];
    let modalContent = <ProjectDetails />;

    // const count = props.type==='preview'?props.items:projectsList.length;
    let showSection = <span />
    // const showMore = props.type=='preview'?<LinkLaunchModal label="More..." modalId="#projectsModal" />:<span />
    let showMore = <span />

    if(props.type==='preview') {
        showSection = <Section label={"Projects"} />
        showMore = <LinkLaunchModal label="More ..." modalId="#projectsModal" />
        projRows = previewList.map(item => {
            let tempId = '#'+item.modalId;
            return <ProjectItem
                    image={item.img}
                    alt={item.alt}
                    title={item.title}
                    description={item.short}
                    modalId={tempId}
                    refText="Details"
                    key={item.key}
            />
        });
    } else {
        projRows = complementaryList.map(item => {
            let tempId = '#'+item.modalId;
            return <ProjectItem
                image={item.img}
                alt={item.alt}
                title={item.title}
                description={item.short}
                modalId={tempId}
                refText="Details"
                key={item.key}
            />
        });
    }

    let modals = previewList.map(item => {
        modalContent = <ProjectDetails imgsrc={item.img} cssClass="modal-img" title={item.title}
                                       description={item.description} technologies={item.technologies}
                                       sourceCode={item.source} />;
        return <Modal modalId={item.modalId} title={item.title} content={modalContent} key={item.key}/>
    });

    modalRows.push(...modals);

    modals = complementaryList.map(item => {
        modalContent = <ProjectDetails imgsrc={item.img} cssClass="modal-img" title={item.title}
                                       description={item.description} technologies={item.technologies}
                                       sourceCode={item.source} />;
        return <Modal modalId={item.modalId} title={item.title} content={modalContent} key={item.key}/>
    });

    modalRows.push(...modals);

    return (
        <>
            <div className="container-fluid container-info">
                {showSection}
                <div className="row">
                    {projRows}
                </div>
                {modalRows}
                {showMore}
            </div>
        </>
    )
}

export const ProjectItem = (props) => {
    return (
        <div className="col-md-4 col-12 item-spacer">
            <div className="card card-full-width">
                <img src={props.image} className="project-img" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <CardLaunchModal modalId={props.modalId} label={props.refText} />
                </div>
            </div>
        </div>
    )
}

export const ProjectDetails = (props) => {
    const technologies = props.technologies.map(item => <Skill icon={item.icon} label={item.label} key={item.key}/> )
    return (
        <>
            <Picture imgsrc={props.imgsrc} cssClass={props.cssClass}/>
            <hr />
            <Section label="Description" />
            <div className='container-fluid justify-align'>{props.description}</div>
            <hr />
            <Section label="Technologies" />
            <div className="row">
                {technologies}
            </div>
            <hr />
            <div className="row">
                <div className="col-12 right-align">
                    <span className="label">Source code: </span> {props.sourceCode}
                </div>
            </div>
        </>
    )
}
