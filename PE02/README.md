# Input

The program input includes the movie data and the user’s genre selection. The movie data is stored in the MovieList component as an array of objects. Each movie object contains a title, genre, and release year. The user provides input by selecting a genre from the dropdown menu. The user can also click on a movie card, which provides another input event for the program to handle.

# Process

The program processes the data using React state, JSX, and event handlers. The selected genre is stored in a state variable. When the dropdown value changes, the program updates the selected genre and filters the movie array. If the user selects All Genres, the full movie list is displayed. If a specific genre is selected, only matching movies are shown. When a movie is clicked, an event handler displays an alert.

# Output

The output is a filtered movie list displayed in the browser as individual movie cards.
