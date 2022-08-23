import {Book} from "../model/Book";
import {useState} from "react";

type BookProps = {
    books: Book[]
    addBook: (newBook : Book ) => void
}

export default function BookOverview(props: BookProps) {

    const [newIsbn, setNewIsbn] = useState<string>("")
    const [newTitle, setNewTitle] = useState<string>("")

    const onAdd = () => {

        let additionalBook = {
            isbn: newIsbn,
            title: newTitle
        }

        props.addBook(additionalBook)

        // reset input fields
        setNewIsbn("")
        setNewTitle("")
    }

    return (
        <>
            <h1>Books</h1>
            {
                props.books.map((book) => <p>{book.title} (isbn: {book.isbn})</p>)
            }

            <label>
                ISBN:
                <input
                    type="text"
                    name="isbn"
                    value={newIsbn}
                    onChange={(e) => setNewIsbn(e.target.value)} />
            </label>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)} />
            </label>

            <button onClick={onAdd}>Add</button>
        </>
    );
}