import Panel from "./Panel";

function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className="content">
            <Panel />
            <div className="app-sidebar">
                <div className="app-sidebar-header">
                    <h1>
                        Note<i>fy</i>
                    </h1>
                    <button onClick={onAddNote}>Add</button>
                </div>

                <div className="app-sidebar-search" type="input">
                    <div className="app-sidebar-searchbox">
                        <div className="app-sidebar-searchbox-icon">
                            <svg height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.855 10.145L9.00001 8.305C9.72006 7.4072 10.0688 6.26765 9.97442 5.12065C9.88007 3.97365 9.34985 2.90639 8.49277 2.13832C7.6357 1.37025 6.51692 0.959753 5.36647 0.991233C4.21603 1.02271 3.12137 1.49378 2.30758 2.30757C1.49379 3.12136 1.02273 4.21602 0.991248 5.36646C0.959768 6.5169 1.37027 7.63568 2.13834 8.49276C2.9064 9.34983 3.97366 9.88006 5.12066 9.9744C6.26766 10.0687 7.40722 9.72005 8.30501 9L10.145 10.84C10.1915 10.8869 10.2468 10.9241 10.3077 10.9494C10.3687 10.9748 10.434 10.9879 10.5 10.9879C10.566 10.9879 10.6314 10.9748 10.6923 10.9494C10.7532 10.9241 10.8085 10.8869 10.855 10.84C10.9451 10.7468 10.9955 10.6222 10.9955 10.4925C10.9955 10.3628 10.9451 10.2382 10.855 10.145ZM5.50001 9C4.80778 9 4.13109 8.79473 3.55552 8.41014C2.97995 8.02556 2.53134 7.47893 2.26643 6.83939C2.00153 6.19985 1.93222 5.49612 2.06726 4.81718C2.20231 4.13825 2.53566 3.51461 3.02514 3.02512C3.51462 2.53564 4.13826 2.2023 4.8172 2.06725C5.49613 1.9322 6.19986 2.00151 6.83941 2.26642C7.47895 2.53133 8.02557 2.97993 8.41016 3.5555C8.79474 4.13107 9.00001 4.80776 9.00001 5.5C9.00001 6.42826 8.63126 7.31849 7.97489 7.97487C7.31851 8.63125 6.42827 9 5.50001 9Z"
                                    fill="#E5E5E5"
                                />
                            </svg>
                        </div>
                        <input placeholder="Search notes"></input>
                    </div>
                </div>

                <div className="app-sidebar-title">
                    <b>All Notes</b>
                </div>

                <div className="app-sidebar-notes">
                    {sortedNotes.map((note) => (
                        <div key={note.id}
                            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                            onClick={() => setActiveNote(note.id)}
                        >
                            <div className="sidebar-note-title">
                                <strong>{note.title}</strong>
                                <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                            </div>
                            <p>{note.body && note.body.substr(0, 50) + "..."}</p>
                            <small className="note-meta">
                                Last modified{" "}
                                {new Date(note.lastModified).toLocaleDateString("en", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </small>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
