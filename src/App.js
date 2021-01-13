import React from 'react';

import Form from './containers/Form/Form';
import Layout from './components/Layout/Layout'
import Header from './containers/Header/Header'
import Footer from './containers/Footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Form/>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
