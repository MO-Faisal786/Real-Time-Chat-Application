import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Join from './components/join/Join';
import Chat from './components/chat/Chat';


const App = () => {
    return( <Router>
        <Routes>
            <Route path='/' exact element={<Join/>} />
            <Route path='/chat' exact element={<Chat/>} />
        </Routes>
    </Router>
    )
}

export default App;