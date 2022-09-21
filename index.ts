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

async function fetchData(): Promise<void> {
  // endpoint
  const IMDB_API_SEARCH = 'https://jsonplaceholder.typicode.com/albums';

  axios.get<IMDB_Response>().then((response) => {});

  console.log(response);
  // createAndRenderTable(response.data.results);
}

function createAndRenderTable(movies: IMovie[]): void {
  const tableContainer = document.getElementById('create-table-here');

  // CREATE YOUR TABLE
  // tableContainer.innerHTML = table;
}

function initialize(): void {
  const buttonElement = document.getElementById('fetch-data-button');
  buttonElement.addEventListener('click', fetchData);
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<button id="fetch-data-button">Fetch Data</button>
<div id="create-table-here">
create your table here
</div>
`;

initialize();
