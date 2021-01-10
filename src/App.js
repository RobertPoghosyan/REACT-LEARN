import React from 'react';
import './App.css';
import Form from './containers/Form/Form';
import Layout from './components/Layout/Layout'
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <main className="app-main-content">
          <Form/>
        </main>
        <Footer />
      </Layout>
      
      
    </div>
  );
}

export default App;
