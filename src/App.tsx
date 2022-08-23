import React, {useState} from 'react';
import './App.css';
import BookOverview from "./components/BookOverview";


function App() {

    const [books, setBooks] = useState([
        {
            isbn : "1",
            title : "Moby Dick"
        },        {
            isbn : "2",
            title : "Harry Potter"
        },
    ])

    return (
        <div className="App">
            <BookOverview books={books} />
        </div>
    );
}

export default App;
