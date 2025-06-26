import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/NavBar';
import  React, {lazy, Suspense} from 'react'
import { Loader } from '@react-three/drei';

const Home = lazy(() => import("./pages/home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"));
const Projects= lazy(() => import("./pages/Projects"))

const App = () => {
    return (
       <main className='bg-slate-300/20 text-white'>
        <Router>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Routes>
                <Route path= "/" element={<Home />} />
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </Suspense>
            
        </Router>
       </main>
    )
}

export default App;