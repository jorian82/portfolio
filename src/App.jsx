import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Projects } from './components/pages/Projects'
import { Skills } from "./components/pages/Skills.jsx";
import { Profile } from './components/pages/Profile.jsx'
import { Layout } from "./components/pages/Layout.jsx";
import { Home } from "./components/pages/Home.jsx";
import { Error } from './components/pages/Error.jsx';

function App() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Layout />}>
                        <Route index element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="skills" element={<Skills />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default App
