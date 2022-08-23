import React, {useState} from 'react';
import './App.css';
import BookOverview from "./components/BookOverview";
import {Book} from "./model/Book";


function App() {

    const [books, setBooks] = useState<Book[]>([])

    const addBook = (book: Book) => {
        setBooks([...books, book])
    }

    return (
        <div className="App">
            <BookOverview books={books} addBook={addBook} />
        </div>
    );
}

export default App;
