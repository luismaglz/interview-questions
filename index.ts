// Import stylesheets
import './style.css';
import axios from 'axios';

// Tasks

// 1. Fetch data from IMDB API - link is provided - when AppComponent loads
// 2. Save results from HTTP response in component state
// 3. Display results in AppComponent template in table format displaying `title` and `description` fields in 2 columns
// 4. Format title to be ALL CAPS
// 5. Add some borders to the table
// 6. (optional) Add input + button to make dynamic queries to IMDB API (searchKeyword)
// 7. (optional) Display small image 50px wide in a new (first) column

// I movie interface returned by IMDB
interface IMovie {
  title: string;
  description: string;
  image: string;
  id: string;
  resultType: string;
}

interface IMDB_Response {
  errorMessage: string;
  expression: string;
  results: IMovie[];
}

async function fetchData(this: HTMLElement, ev: MouseEvent): Promise<IMovie[]> {
  const input = document.getElementById('data-input') as HTMLInputElement;
  const inputValue = input.value;
  const searchKeyword = 'batman';
  // endpoint
  const IMDB_API_SEARCH = 'https://imdb-api.com/en/API/SearchMovie/k_d3adyy0g/';

  const response = await axios.get<IMDB_Response>(
    `${IMDB_API_SEARCH}${inputValue || searchKeyword}`
  );

  console.log(response);
  createAndRenderTable(response.data.results);
}

function createAndRenderTable(movies: IMovie[]): void {
  const tableContainer = document.getElementById('create-table-here');
  const movieRows = movies.map((movie) => {
    return `
    <tr>
      <td><img src="${movie.image}" class="movie-image" width="50px" height="50px"></td>
      <td>${movie.title}</td>
      <td>${movie.description}</td>
   </tr>`;
  });
  const table = `
  <table class="movie-table">
    <tr>
      <td>Title</td>
      <td>description</td>
    </tr>
    ${movieRows.join('')}
  </table>
  `;
  tableContainer.innerHTML = table;
}

function initialize(): void {
  const buttonElement = document.getElementById('fetch-data-button');
  buttonElement.addEventListener('click', fetchData);
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Interview Question</h1>
<ol>
  <li>Fetch data from IMDB API - link is provided - when AppComponent loads</li>
  <li>Save results from HTTP response in component state</li>
  <li>Display results in AppComponent template in table format displaying "title" and "description" fields in 2 columns</li>
  <li>Format title to be ALL CAPS</li>
  <li>Add some borders to the table</li>
  <li>(optional) Add input + button to make dynamic queries to IMDB API (searchKeyword)</li>
  <li>(optional) Display small image 50px wide in a new (first) column</li>
</ol>
<button id="fetch-data-button">Fetch Data</button><input id="data-input" placeholder="movie title goes here"></input>
<div id="create-table-here">
create your table here
</div>
`;

setTimeout(initialize, 10);
