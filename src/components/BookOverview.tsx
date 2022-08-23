import {Book} from "../model/Book";

type BookProps = {
    books: Book[]
}

export default function BookOverview(props: BookProps) {

    return (
        <>
            <h1>Books</h1>
            {
                props.books.map((book) => <p>{book.title} (isbn: {book.isbn})</p>)
            }
        </>
    );
}