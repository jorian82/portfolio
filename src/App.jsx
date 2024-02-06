import './App.css'
import { Modal } from './components/common/Dialog.jsx'
import { Footer } from './components/navigation/footer/Footer'
import { Header } from './components/navigation/header/Header'
import { Home } from './components/pages/Home'
import { Projects } from './components/pages/Projects'
import { Skills } from "./components/pages/Skills.jsx";
import { Profile } from './components/pages/Profile.jsx'

function App() {

    const skillsContent = <Skills />
    const profileContent = <Profile />
    const projectsContent = <Projects />

    return (
        <>
            <Header />
            <div className="container-fluid container-home">
                <Home />
                <Modal modalId="profileModal" title="Profile" content={profileContent} />
                <Projects type="preview" items={3} />
                <Modal modalId="projectsModal" title="Projects" content={projectsContent} />
                <Skills type='preview' items={6} />
                <Modal modalId="skillsModal" title="Skills" content={skillsContent}/>
                {/* <Profile /> */}
            </div>
            <Footer />
        </>
    )
}

export default App
