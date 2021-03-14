/* eslint-disable no-unused-vars */
import './scss/main.scss';
import Form from './components/Form';
import Header from './components/Header';
import ContactsList from './components/ContactsList';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <ContactsList />
    </div>
  );
}

export default App;
