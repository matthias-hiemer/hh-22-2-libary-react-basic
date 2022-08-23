import {Book} from "../model/Book";

type BookProps = {
    books: Book[]
    addBook: (newBook : Book ) => void
}

export default function BookOverview(props: BookProps) {

    const onAdd = () => {

        let additionalBook = {
            isbn: "randomisbn",
            title: "randomtitle"
        }

        props.addBook(additionalBook)
    }

    return (
        <>
            <h1>Books</h1>
            {
                props.books.map((book) => <p>{book.title} (isbn: {book.isbn})</p>)
            }

            <button onClick={onAdd}>Add</button>
        </>
    );
}