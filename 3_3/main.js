const DEFAULT_COLOR = 'yellow';
const COLORS = ['yellow', 'chartreuse', 'green', 'red', 'pink', 'coral', 'chocolate'];

const Note = React.createClass({
    handleDelete() {
        this.props.onDelete(this.props.id);
    },

    render() {
        const {
            color,
            children,
            onDelete
        } = this.props;

        return (
            <div className="note" style={{ backgroundColor: color }}>
                <span className="note__delete-icon" onClick={this.handleDelete}> × </span>
                {children}
            </div>
        );
    }
});

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            text: '',
            color: DEFAULT_COLOR
        };
    },

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    },

    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);

        this.resetState();
    },

    handleClickColor(color) {
      this.setState({
          color
      });
    },

    resetState() {
        this.setState({
            text: ''
        });
    },

    render() {
        return (
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter your note here..."
                    className="editor__textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className="selectContainer">
                    { COLORS.map( color =>
                        <div className="colorSelect"
                             key={color}
                             style={{ backgroundColor: color }}
                             onClick={() => this.handleClickColor(color)} >
                          {this.state.color === color ? 'v' : null}
                        </div>
                    )}
                </div>
                <button className="editor__button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
});

const NotesGrid = React.createClass({
    componentDidMount() {
        const grid = this.grid;

        this.msnry = new Masonry(grid, {
            columnWidth: 240,
            gutter: 10,
            isFitWidth: true
        });
    },

    componentDidUpdate(prevProps) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render() {
        const {
            notes,
            onNoteDelete
        } = this.props;

        return (
            <div className="grid" ref={c => this.grid = c}>
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            onDelete={onNoteDelete}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </div>
        );
    }
});

const NotesApp = React.createClass({
    getInitialState() {
        return {
            notes: []
        };
    },

    componentDidMount() {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));

        if (savedNotes) {
            this.setState({ notes: savedNotes });
        }
    },

    componentDidUpdate() {
        const notes = JSON.stringify(this.state.notes);

        localStorage.setItem('notes', notes);
    },

    handleNoteDelete(noteId) {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    },

    handleNoteAdd(newNote) {
        this.setState({
            notes: [newNote, ...this.state.notes]
        });
    },

    render() {
        return (
            <div className="app">
                <h2 className="app__header">NotesApp</h2>

                <NoteEditor onNoteAdd={this.handleNoteAdd} />

                <NotesGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <NotesApp />,
    document.getElementById('root')
);
