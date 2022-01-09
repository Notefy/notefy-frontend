import ReactMarkdown from "react-markdown";

function Main({ activeNote, onUpdateNote }) {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        });
    };

    if (!activeNote) return <div className="no-active-note">No note selected</div>;

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input
                    type="text"
                    id="title"
                    value={activeNote.title}
                    onChange={(e) => onEditField("title", e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    id="body"
                    value={activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)}
                    placeholder="Take a note..."
                ></textarea>
            </div>
            <div className="app-main-note-preview">
                <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
                <div className="space"></div>
            </div>
        </div>
    );
}

export default Main;
