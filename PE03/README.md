# Input

The program input includes the task description typed by the user and the user’s button clicks. The input field allows the user to enter a new ToDo item. The Add Task button provides an input event that tells the program to add the typed description to the ToDo list. Each Delete button also provides an input event that identifies which task should be removed.

# Process

The program processes the input using React state and event handlers. The useState Hook stores both the current task description and the list of ToDos. When the user types, the input state updates. When Add Task is clicked, the program creates a new array containing the existing ToDos and the new task. When Delete is clicked, the program filters out the selected task.

# Output

The output is an updated ToDo list displayed in the browser. The list changes dynamically whenever tasks are added or removed.