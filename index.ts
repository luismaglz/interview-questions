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

// endpoint
const IMDB_API_SEARCH = 'https://imdb-api.com/en/API/SearchMovie/k_d3adyy0g/';

// search keyword
const searchKeyword = 'batman';

// I movie interface returned by IMDB
interface IMovie {
  title: string;
  description: string;
  image: string;
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
