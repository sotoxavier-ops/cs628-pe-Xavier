# Input

The Recipe Finder application receives input from the user through the Add Recipe and Edit Recipe forms. Users can enter a recipe name, ingredients, cooking instructions, category, and cook time. The application also receives input when users click recipe links, edit buttons, delete buttons, or navigation links.

# Process

The React frontend uses React Router to display the recipe list, add recipe form, edit recipe form, and nested recipe details. When users create, update, or delete recipes, the frontend sends requests to the backend using fetch. The Node.js and Express backend receives those requests through recipe routes. The MongoDB Node.js driver then communicates with MongoDB Atlas to create, read, update, or delete recipe documents.

# Output

The application displays an updated recipe list, individual recipe details, and form screens for adding or editing recipes. After each database action, the user sees the updated recipe information in the browser.