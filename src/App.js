import './App.css';
import { firebase, FieldValue } from './lib/firebase'
import FirebaseContext from './context/firebase'

function App() {
  return (
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <h1 className="text-red-500">Hello, World</h1>
  </FirebaseContext.Provider>
  );
}

export default App;
