// Get the search input and search button elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Get the books container element
const booksContainer = document.getElementsByClassName("books-container")[0];

// Attach an event listener to the search button
searchButton.addEventListener("click", function() {
    // Fetch the books.json file
    fetch("./books.json")
        .then(response => response.json())
        .then(data => {
            // Get the search input value
            const searchValue = searchInput.value.toLowerCase();

            // Clear the books container
            booksContainer.innerHTML = "";

            // Loop through the books data
            data.forEach(book => {
                // Check if the book name or author contains the search value
                if (book.name.toLowerCase().includes(searchValue) || book.author.toLowerCase().includes(searchValue)) {
                    // Create a new book element
                    const newBook = document.createElement("div");
                    newBook.className = "book";
                    newBook.innerHTML = `
                        <img class="book-image" src="${book.image}" alt="${book.name}">
                        <h3>${book.name}</h3>
                        <p>${book.author}</p>
                        <p>${book.category}</p>
                    `;

                    // Append the new book element to the books container
                    booksContainer.appendChild(newBook);
                }
                if (booksContainer.innerHTML === ""){
                    booksContainer.innerHTML=`<h3 class="error">Sorry, the book "${searchValue}" doesn't exist</h3>`
                }
            });
        })
        .catch(error => {
            console.error(error);
        });
        
});
