import React from 'react';
import Header from './components/Header';
import DeveloperPortal from './components/DeveloperPortal';
import DeveloperRegistration from './components/DeveloperRegistration';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <DeveloperPortal />
      <DeveloperRegistration />
      <Footer/>
    </div>
  );

}

export default App;
