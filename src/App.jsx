import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import Sidebar from './components/Sidebar';

import Header from './components/Header';

import Home from './pages/Home';

import Organizations from './pages/Organizations';

import LocalPantries from './pages/LocalPantries';

import FeedingAmerica from './pages/FeedingAmerica';

import RRFM from './pages/RRFM';

import ChatBot from './components/ChatBot';

import QRCodePage from './pages/QRCodePage';



function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);



  return (

    <Router>

      <div className="flex h-screen bg-gray-50">

        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        

        <div className="flex-1 flex flex-col overflow-hidden">

          <Header onMenuClick={() => setSidebarOpen(true)} />

          

          <main className="flex-1 overflow-y-auto">

            <Routes>

              <Route path="/" element={<Home />} />

              <Route path="/organizations" element={<Organizations />} />

              <Route path="/pantries" element={<LocalPantries />} />

              <Route path="/feeding-america" element={<FeedingAmerica />} />

              <Route path="/rrfm" element={<RRFM />} />

              <Route path="/qr-code" element={<QRCodePage />} />

            </Routes>

          </main>

        </div>



        <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

        

        {/* Floating Chat Button */}

        <button

          onClick={() => setChatOpen(true)}

          className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 z-40"

          aria-label="Open chat assistant"

        >

          <svg

            xmlns="http://www.w3.org/2000/svg"

            className="h-6 w-6"

            fill="none"

            viewBox="0 0 24 24"

            stroke="currentColor"

          >

            <path

              strokeLinecap="round"

              strokeLinejoin="round"

              strokeWidth={2}

              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"

            />

          </svg>

        </button>

      </div>

    </Router>

  );

}



export default App;

