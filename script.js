import { movies } from './movies.js';

function parseRange(rangeStr) {
  const [start, end] = rangeStr.split('-').map(Number);
  return { start, end };
}

window.suggestMovies = function () {
  const genre = document.getElementById('moodSelect').value;
  const language = document.getElementById('languageSelect').value;
  const start = parseInt(document.getElementById('fromYear').value);
  const end = parseInt(document.getElementById('toYear').value);

  const filtered = movies.filter(movie =>
    movie.genre === genre &&
    movie.language === language &&
    movie.year >= start &&
    movie.year <= end
  );

  const resultsEl = document.getElementById('results');
  resultsEl.innerHTML = filtered.length
    ? filtered.map(movie => `<li>${movie.title} (${movie.year})</li>`).join('')
    : '<li>No matching movies found.</li>';
};
