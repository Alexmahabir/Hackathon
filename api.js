const form = document.querySelector('#search-form');
          const input = document.querySelector('#cocktail-name');
          const container = document.querySelector('#cocktails-container');
    
          const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    
          form.addEventListener('submit', (event) => {
            event.preventDefault();
    
            // Get the value from the input field
            const query = input.value.trim();
    
            // Construct the full API URL
            const apiUrl = `${baseUrl}${query}`;
    
            // Use fetch to retrieve data from the API
            fetch(apiUrl)
              .then(response => response.json())
              .then(data => {
                container.innerHTML = '';
    
                // Check to ensure that results were returned
                if (data.drinks) {
                  const drinks = data.drinks;
    
                  // Loop through each drink and display its name
                  drinks.forEach(drink => {
                    const name = drink.strDrink;
                    const p = document.createElement('p');
                    p.textContent = name;
    
                    container.appendChild(p);
                  });
    
                } else {
                  // If no results were returned, show an appropriate message to the user
                  const p = document.createElement('p');
                  p.textContent = 'No cocktails found with that name.';
                  container.appendChild(p);
                }
              })
              .catch(error => console.error(error));
          });