/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faPython, faJava, faJs, faJira, faBitbucket, faSass, faGithub, faAngular, faCss3, faGitlab, faLinux, faWindows, faApple, faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faClipboard, faDatabase, faServer, faCubes, faComputer } from "@fortawesome/free-solid-svg-icons";

import {Section, Spacer} from "../common/Section.jsx";

const prevSkills = [
    {key:17, icon: faJava,       label: "Java"},
    {key:13, icon: faDatabase,   label: "Relational DBs"},
    {key:14, icon: faJs,         label: "Javascript"},
    {key:15, icon: faAngular,    label: "Angular 2+"},
    {key:16, icon: faGithub,     label: "GitHub"},
    {key:12, icon: faGoogleDrive,label: "Drive"},
    {key:18, icon: faServer,     label: "WebServices"},
]

const skillPairs = [
    {key:10,icon: faCubes,     label: "Maven"},    {key:0,  icon: faNodeJs,    label: "NodeJs"},
    {key:1, icon: faPython,    label: "Python"},   {key:11, icon: faGithub,    label: "GitHub"},
    {key:2, icon: faCss3,      label: "CSS"},      {key:21, icon: faSass,      label: "Sass"},
    {key:3, icon: faDatabase,  label: "Oracle"},   {key:31, icon: faDatabase,  label: "MySQL"},
    {key:4, icon: faDatabase,  label: "MongoDB"},  {key:41, icon: faServer,    label: "REST API"},
    {key:5, icon: faServer,    label: "SOAP"},     {key:51, icon: faCloud,     label: "GCP"},
    {key:6, icon: faJira,      label: "Jira"},     {key:61, icon: faBitbucket, label: "Bitbucket"},
    {key:7, icon: faGitlab,    label: "GitLab"},   {key:71, icon: faClipboard, label: "Agile"},
    {key:8, icon: faLinux,     label: "Linux"},    {key:81, icon: faWindows,   label: "Windows"},
    {key:9, icon: faApple,     label: "MacOS"}    
]

const skillDetails = [
    {key:0, icon: faJava, detail:"Java: 15+ years working with java frameworks, Struts2, Hibernate, Liferay (last 8). Built several libraries to connect/interact with Atlassian (Jira) and Google products (Slides, Sheets, Docs)."},
    {key:1, icon: faJava, detail:"Spring, Spring Boot: 2 years experience maintaining an AppEngine application that uses spring boot as backend. 2+ years of experience maintaining and developing a backend for customer support tool application."},
    {key:9, icon: faGoogleDrive, detail:"Google Products: Build a slides, sheets and docs generator (3 separate libraries) to create slides using a selected template, folder destination and a data source for the new documents."},
    {key:2, icon: faDatabase, detail:"SQL: 10+ years experience performing CRUD operations and working with procedures, triggers and views in MySQL, Oracle, MSSSQL."},
    {key:3, icon: faJs,   detail:"Javascript: 10+ years experience working with javascript. Started with simple jQuery to inject dynamic content to static pages and then I moved to more advanced frameworks. Recently I’m taking a nodejs course to build APIs in pirple.com."},
    {key:4, icon: faAngular, detail:"Angular: Started with AngularJS, I created a couple of modules in Liferay first and then I’ve been working with Angular 2+. I've migrated a couple of Liferay modules to Angular 2 for the front end, the Liferay background is still the source of data. I have been building a document manager as a side project. I've been using Angular heavily for the las 2 years as part of my daily activities at Concentrix. I’ve been studying Vue, React and NativeScript separately as a personal project."},
    {key:5, icon: faGithub, detail:"Git: 6+ years of experience using git and it’s different implementations (github, gitlab, bitbucket and google source repositories) I’ve configured a couple of git servers as freelancer to keep track of the code I developed for a startup."},
    {key:6, icon: faServer, detail:"WebServices: 7+ years of experience consuming REST and SOAP services, I’ve created django APIs using Django REST Framework and lately I’ve been playing around with FastAPI. I’ve been working for the last 18 months building APIs with Node+Express and jwt authentication."},
    {key:7, icon: faCubes, detail:"Maven: 5+ years of experience. I’ve developed several java libraries to connect to Atlassian products using maven as package and dependency manager. The last AppEngine application that I maintained used maven heavily to build and deploy the code to the Google Cloud Platform."},
    {key:8, icon: faComputer, detail:"OS: I have used Windows, Linux and MacOS devices on my daily tasks for the last 15 years. I have admin experience in both windows and unix environments."}
]

export const Skills = (props) => {
    let details = [];
    let rows = [];
    let moreAvailable = <span />;
    let titleAvailable = <span />;

    titleAvailable = <Section label="Skills"/>;
    rows = prevSkills.map(item => <Skill icon={item.icon} label={item.label}  key={item.key} />)
    details = skillDetails.map(item => <DetailedSkills icon={item.icon} detail={item.detail} key={props.key} /> )
    rows.push(...skillPairs.map(item => <Skill icon={item.icon} label={item.label}  key={item.key} />));

    return (
        <div className="container-fluid container-info">
            {titleAvailable}
            <div className="row align-items-center g-3">
                {details}
            </div>
            <Spacer />
            <div className="row align-items-center g-3">
                {rows}
            </div>
            {moreAvailable}
        </div>
    )
}

export const Skill = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 skill-label p-3" >
            <FontAwesomeIcon icon={props.icon} /> {props.label}
        </div>
    )
}

export const DetailedSkills = (props) => {
    return (
        <div className="col-12 left-align">
            <ul>
                <li><FontAwesomeIcon icon={props.icon} /> {props.detail}</li>
            </ul>
        </div>
    )
}