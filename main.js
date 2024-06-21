
    
    const addTask = (taskDescription) => {
        // Create a new <li> element
        const task = document.createElement("li");
        
        // Set the inner text of the <li> element to the task description
        task.innerText = taskDescription;

        // Create a new button for deleting tasks
        const deletebutton = document.createElement('button');
        deletebutton.innerText = 'Delete'
        deletebutton.onclick = () => {
            task.remove() // remove the li when delete button is clicked
        }

        task.appendChild(deletebutton)

        // Find the parent <ul> element with id 'list-items'
        const parent = document.getElementById('list-parent');

        // Append the <li> element as a child of the 'list-items' <ul> element
        parent.appendChild(task);
    }

    // Add an event listener to the element with id 'button'
    document.getElementById('button').onclick = () => {
        // Get the value from the input field with id 'input-task'
        const newTask = document.getElementById('input-task').value;

        // Call the addTask function and pass the new task value as the task description
        addTask(newTask);
        
    }
