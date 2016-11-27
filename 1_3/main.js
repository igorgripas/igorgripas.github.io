const MOVIE_SETTINGS = {
  url: 'https://api.themoviedb.org/3/',
  mode: 'search/movie',
  key: '78e944efc39282cef8d86b760fd4cdcf'
};
/*
 SETTINGS.url + SETTINGS.mode + '?query=' + title + '&api_key=' + SETTINGS.key
 */
let searchTimeout = null;
const COLUMNS = [
  {name: 'id', title: 'ID'},
  {name: 'title', title: 'Title'},
  {name: 'original_language', title: 'Language'},
  {name: 'vote_count', title: 'Vote count'},
  {name: 'popularity', title: 'Popularity'},
  {name: 'release_date', title: 'Release'}];

const Movie = React.createClass({
  render() {
    const {
        movie
    } = this.props;

    return (
        <tr>
          {COLUMNS.map(column => <td key={movie.id + '' + movie[column.name]}>{movie[column.name]}</td>)}
        </tr>
    );
  }
});

const Movies = React.createClass({
  getInitialState() {
    return {
      sort: {
        column: 'title',
        asc: true
      },
      search: '',
      movies: []
    };
  },

  getData() {
    const sortMovies = this.sortMovies;
    let requestPromise =
        fetch(`${MOVIE_SETTINGS.url}${MOVIE_SETTINGS.mode}?query=${this.state.search}&api_key=${MOVIE_SETTINGS.key}`);
    requestPromise.then(request => {
      request.json().then((result) => {
        this.setState({
          movies: sortMovies(result.results, this.state.sort.column, this.state.sort.asc)
        });
      });
    });
  },

  sortMovies(movies, sortColumn, asc) {
    console.log('sortMovies', sortColumn, asc);
    const ascKoef = asc ? 1 : -1;
    return movies.sort((movie1, movie2) => {
      if (movie1[sortColumn] > movie2[sortColumn]) {
        return 1 * ascKoef;
      }
      if (movie1[sortColumn] < movie2[sortColumn]) {
        return -1 * ascKoef;
      }
      return 0;
    });
  },

  handleSearchChange(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      this.getData()
    }, 500);
    this.setState({search: e.target.value});
  },

  handleHeaderClick(column) {
    const sort = {
      column,
      asc: column === this.state.sort.column ? !this.state.sort.asc : true
    };
    const movies = this.sortMovies(this.state.movies, sort.column, sort.asc);
    this.setState({
      sort,
      movies
    });
  },

  render() {
    const {sort} = this.state;
    return (
        <div>
          <div className="search">
            Search:<input placeholder="Search" value={this.state.search} onChange={this.handleSearchChange}/>
          </div>
          <table>
            <thead>
            <tr>
              {COLUMNS.map(column => (
                  <th onClick={this.handleHeaderClick.bind(this, column.name)} key={column.name}>
                    {column.title} {sort.column === column.name ? sort.asc ? '↑' : '↓' : null}
                  </th>)
              )}
            </tr>
            </thead>
            <tbody>
            { this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>)  }
            </tbody>
          </table>
        </div>
    );
  }
});

ReactDOM.render(
    <Movies />,
    document.getElementById('root')
);
