# Input

The Cities application receives user input through the Add City form. The user enters a city name, country, population, and additional details. The application also receives input when the user clicks navigation links or selects a city from the Cities List. These clicks determine which route React Router should display.

# Process

The program uses React state to store the city records. When the Add City form is submitted, the program creates a new city object, adds it to the existing city list, and redirects the user back to the Cities List route. React Router manages the application routes, including the Add City route, Cities List route, and nested City Details route. The useParams hook reads the selected city identifier from the route.

# Output

The application displays the Cities List, the Add City form, and selected City Details. After a city is added, the updated list appears and the selected city’s details display on the same page.