const remarkable = new Remarkable();
remarkable.set({
  html: true,
  breaks: true
});

function generateClassName(classNameStr, classNamesProperties) {
  let result = classNameStr;
  Object.keys(classNamesProperties).forEach(key => {
    if (classNamesProperties[key]) {
      result += ' ' + key;
    }
  });
  return result;
}

const Article = React.createClass({
  getInitialState() {
    return { expanded: true };
  },

  componentDidUpdate() {
    this.renderRemarkableText();
  },

  componentDidMount() {
    this.renderRemarkableText();
  },

  renderRemarkableText() {
    this.text.innerHTML = remarkable.render(this.props.text);
  },

  handleDelete() {
    this.props.onDelete(this.props.id);
  },

  handleExpand() {
    this.setState({
      expanded: !this.state.expanded
    })
  },

  handleEdit() {
    this.setState({
      editMode: true
    })
  },

  handleArticlePublish(article) {
     let updatedArticle = {...article, id: this.props.id};

     this.props.onUpdate(updatedArticle);
     this.setState({ editMode: false });
  },

  renderEditMode() {
    const { title, text, onUpdate } = this.props;

    return (
        <ArticleEditor title={this.props.title} text={this.props.text} onArticlePublish={this.handleArticlePublish} />
    );
  },

  renderViewMode() {
    const {
        title
    } = this.props;

    const {
        expanded
    } = this.state;

    return (<div className="article">
      <h3>{title}</h3>
      <span className="article__delete-icon" onClick={this.handleDelete}> × </span>
      <span className='article__expand-icon' onClick={this.handleExpand}> {expanded ? '-' : '+'} </span>
      <span className='article__edit-icon' onClick={this.handleEdit}></span>
      <div className={generateClassName('articleText', { hidden: !expanded})}>
        <div ref={c => this.text = c} />
      </div>
    </div>);
  },


  render() {
    return (
        this.state.editMode ? this.renderEditMode() : this.renderViewMode()
    );
  }
});

const ArticleEditor = React.createClass({
  getInitialState() {

    return {
      currentTab: 'editor',
      title: this.props.title || '',
      text: this.props.text ||''
    };
  },

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  },

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  },

  handleArticlePublish() {
    const newArticle = {
      text: this.state.text,
      title: this.state.title,
      id: Date.now()
    };

    this.props.onArticlePublish(newArticle);

    this.resetState();
  },

  handleClickEdit() {
    this.setState({ currentTab: 'editor' });
  },

  handleClickView() {
    this.setState({ currentTab: 'preview' });
  },

  componentDidUpdate(prevProps, prevState) {
    if(this.state.currentTab === 'preview' && this.state.currentTab !== prevState.currentTab) {
      this.previewText.innerHTML = remarkable.render(this.state.text);
    }
  },

  resetState() {
    this.setState({
      currentTab: 'editor',
      text: '',
      title: ''
    });
  },

  renderEdit() {
    return (
        <div className="tabContent">
          <div className="title">
            Title:
            <input placeholder="Enter your title here..." value={this.state.title} onChange={this.handleTitleChange}/>
          </div>
          <textarea
              rows={20}
              placeholder="Enter your text here..."
              className="editor__textarea"
              value={this.state.text}
              onChange={this.handleTextChange}
          />

          <button className="editor__button" onClick={this.handleArticlePublish}>Опубликовать</button>
        </div>
    );
  },

  renderPreview() {
    return (
        <div className="tabContent">
          <div>
            <div ref={c => this.previewText = c}/>
          </div>
        </div>
    );
  },

  render() {
    const { currentTab } = this.state;
    const tabContent = currentTab === 'editor' ? this.renderEdit() : this.renderPreview();

    return (
        <div>
          <ul className="tab">
            <li><a className={generateClassName('tablinks', {active: this.state.currentTab === 'editor'})}
                   onClick={this.handleClickEdit}>Edit</a></li>
            <li><a className={generateClassName('tablinks', {active: this.state.currentTab === 'preview'})}
                   onClick={this.handleClickView}>Live Preview</a></li>
          </ul>
          {tabContent}
        </div>
    );
  }
});

const ArticlesList = React.createClass({
  render() {
    const {
        articles,
        onArticleDelete,
        onArticleUpdate
    } = this.props;

    return (
        <div className="list" >
          {
            articles.map(article =>
                <Article
                    key={article.id}
                    id={article.id}
                    onDelete={onArticleDelete}
                    onUpdate={onArticleUpdate}
                    title={article.title}
                    text={article.text} />
            )
          }
        </div>
    );
  }
});

const Blog = React.createClass({
  getInitialState() {
    return {
      articles: [],
      search: '',
    };
  },

  componentDidMount() {
    const savedArticles = JSON.parse(localStorage.getItem('articles'));

    if (savedArticles) {
      this.setState({ articles: savedArticles });
    }
  },

  componentDidUpdate() {
    const articles = JSON.stringify(this.state.articles);

    localStorage.setItem('articles', articles);
  },

  handleArticleDelete(articleId) {
    this.setState({
      articles: this.state.articles.filter(article => article.id !== articleId)
    });
  },

  handleArticleAdd(newArticle) {
    this.setState({
      articles: [newArticle, ...this.state.articles]
    });
  },

  handleArticleUpdate(updatedArticle) {
    let articles = [...this.state.articles];
    let oldArticle = articles.find(article => article.id === updatedArticle.id);
    oldArticle.title = updatedArticle.title;
    oldArticle.text = updatedArticle.text;

    this.setState({
      articles: articles
    });
  },

  handleSearchChange(e) {
    this.setState({
      search: e.target.value
    });
  },

  render() {
    const { search, articles } = this.state;
    return (
        <div className="app">
          <h2 className="app__header">Blog</h2>

          <ArticleEditor onArticlePublish={this.handleArticleAdd} />
          <div className="search">
            Search:
            <input placeholder="Search" value={search} onChange={this.handleSearchChange}/>
          </div>

          <ArticlesList
              articles={articles.filter(article =>
                article.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
                || article.text.toLowerCase().indexOf(search.toLowerCase()) !== -1)}
              onArticleDelete={this.handleArticleDelete}
              onArticleUpdate={this.handleArticleUpdate}
          />
        </div>
    );
  }
});

ReactDOM.render(
    <Blog />,
    document.getElementById('root')
);
