/* eslint-disable react/prop-types */
import {Section, Spacer} from "../common/Section";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons";

const experienceList = [
    {label:"Concentrix / WebHelp", period:"(03/2022 - Present)", role:"Java FullStack Developer - Tonalá, Jalisco", 
        experiences:[
            {item:"I’ve been working as a consultant for T-Mobile. We maintain the Customer Support Tool that provides the phone reps a platform to solve the customer’s issues and inquiries about their accounts."},
            {item:"The team I work with is responsible for gathering information from other business units to improve and expand the tool functionality. "},
            {item:"We take the requirements and from them we design, develop and send the new feature for testing so the business unit can accept or ask for adjustments. "},
            {item:"Our tool uses a REST API as backend to interact with the other business units APIs"},
        ], key:0
    },
    {label:"SSDE", period:"(01/2020 - Present)", role:"Co-Founder - Sao Paolo, Brazil", 
        experiences:[
            {item:"Developed Documents Manager backend using Node and Express to expose the services via sequalize to connect with a MySQL database, built to be DB agnostic, it can be changed for any relational DB by simply use a different config file"},
            {item:"Developed Documents Manager frontend using angular 13 and RxJs to connect with the backend"},
            {item:"Set production server to host the documents manager application, build with AlmaLinux and nginx to expose the app. Installed and configured the MySQL server instance"},
            {item:"Changed Documents Manager backend to use MongoDB instead of a relational DB"}
        ], key:1
    },
    {label:"MedInReal", period:"(10/2017 - 12/2019)", role:"Co-Founder - Amsterdam, Netherlands", 
        experiences:[
            {item:"Built Medical Assistant backend using Python, Django and Django REST Framework to expose the services, used serializer to interact with a MySQL DB"},
            {item:"Medical Assistant was build to interact with EHR standar software for the European Union"},
            {item:"Defined Medical Assistant database structure based on the specs for the application"},
            {item:"Built Medical Assistant frontend using Django templates, HTML, CSS and jQuery"},
            {item:"Built a library to connect with Google services to set appointments using google calendar"}
        ], key:2
    },
    {label:"QAD México", period:"(07/2009 - 03/2022)", role:"IT Engineer / Software Developer - CDMX", 
        experiences:[
            {item:"Computer equipment configuration and maintenance. Windows XP, 7, 10, Server 2003, 2008, 20012"},
            {item:"Development of custom web applications for the company portals (Liferay based: Java + Struts), custom apps/services for windows and Google App Engine"},
            {item:"8+ years as Full stack developer"},
            {item:"Liferay expertise", sub:[
                {item:"Developing custom portlets, themes, structures and templates for several in-house and customer related sites"},
                {item:"Proficient using service builder to connect to external databases and local databases, custom queries and dynamic queries"},
                {item:"Proficient working with Web services, API’s REST and SOAP"},
                {item:"Lead developer for several projects, responsible for gathering requirements, doing tests, talking to stakeholders and delivering the final product"},
                {item:"Worked as part of development teams (2 – 5 developers) and performed several roles in gathering requirements and doing acceptance tests"}
            ]},
            {item:"Google Cloud Platform", sub:[
                {item:"We had an Alert system in Liferay, I was in charge of it, then the company decided to move it away from Liferay to an independent platform based on Google Cloud to avoid downtime when our liferay servers were offline"},
                {item:"Google proposed a 3rd party to develop and deploy the new application using Angular 6 as front end and Spring Framework to manage the backend, after the 3rd party completed the new system, the project was returned to me for maintenance and further development."},
                {item:"I took over the maintenance, so far, I have migrated the system to Angular 10, upgraded the email templates, I’ve made several upgrades to the UI and fixed several issues with the legacy data related to the migration from Liferay to Google App Engine"}
            ]},
            {item:"Other programming languages and tools used on a regular basis: jQuery, CSS3, HTML5, Python, AngularJS, Angular 2+, Django, MS SQL, MySQL, SQLite, MS Visual Studio, Apache Tomcat"}
        ], key:3
    },
    {label:"Syncretic Solutions", period:"(10/2007 - 06/2009)", role:"Software Developer / Technical Support Executive - Cuernavaca, Morelos", 
        experiences:[
            {item:"Technical Support Executive for Eruditus (Servlet based) software, bug fixes, patches"},
            {item:"Developed and checked MS SQL and Oracle procedures"},
            {item:"Other programming languages and tools: Javascript, HTML, CSS2, jQuery, ajax"}
        ], key:4
    },
    {label:"CAAT UAEM", period:"(06/2007 - 07/2007)", role:"Instructor - Cuernavaca, Morelos",
        experiences:[
            {item:"Object Oriented Programming paradigm introduction with Java for beginners"},
            {item:"Drafted course contents and developed course exercises and tests"}
        ], key:5
    }
]

export const Experience = () => {
    let experienceRows = [];

    experienceRows = experienceList.map(item => {
        // let exp = <ExperienceBullets list={item.experiences} />;
        let exp = "";
        return <ExperienceItem label={item.label} period={item.period} role={item.role} description={exp} key={item.key} />;
    });
    
    return (
        <>
            <div className="container-fluid" key="expRows">
                <Section label="Experience" />
                {experienceRows}
                <DetailExperience />
            </div>
            <hr />
        </>
    )    
}

export const DetailExperience = () => {
    return (
        <>
            <div className="row left-align">
                <div className="col-12 subtitle-tag left-align">Experience details are in the resume below &nbsp;</div>
            </div>
            <div className="row">
                <div className="col-12 details-tag right-align">Download resumé&nbsp;
                    <span className="important">
                        <a href='https://drive.google.com/file/d/1-ooHnNKs5FCh2ZWhYdFSuTf5iO6oYIBw/view?usp=sharing'
                           target='_blank' className='important' rel="noreferrer">
                            <FontAwesomeIcon icon={faFilePdf} className='important'/>
                        </a>
                    </span>
                </div>
            </div>
            <Spacer />
        </>
    )
}

export const ExperienceItem = (props) => {
    return (
        <div className="row left-align">
            <div className="col-12 details-tag left-align">
                <span className="label">{props.label} {props.period}</span>
                <br />
                <span className="sub-label">{props.role}</span>
            </div>
            <div className="col-12 subtitle-tag left-align">{props.description}&nbsp;</div>
        </div>
    )
}

export const ExperienceBullets = (props) => {
    let bullets = [];
    let count = 0;

    props.list.forEach(item => {
        bullets.push(<li key={count}>{item.item}</li>);
        if(item.sub != undefined) {
            bullets.push(<ExperienceBullets list={item.sub} />);
        }
        count++;
    })

    return (
        <ul>
            {bullets}
        </ul>
    )
}
