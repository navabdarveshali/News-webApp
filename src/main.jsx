import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/NavBar.jsx'
import News from './assets/News.jsx'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <Router>
<StrictMode>
<NavBar/>
<Routes>
<Route path="/home" element={<News category="sports" />} />
<Route path="/general" element={<News category="general" />} />
<Route path="/business" element={<News category="business" />} />
<Route path="/entertainment" element={<News category="entertainment" />} />
<Route path="/health" element={<News category="health" />} />
<Route path="/science" element={<News category="science" />} />
<Route path="/technology" element={<News category="technology" />} />

  </Routes>
  </StrictMode>
  </Router>
  
)