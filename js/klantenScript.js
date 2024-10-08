fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
        const customerContainer = document.getElementById('customer-container');

        data.results.forEach(customer => {
            const customerCard = document.createElement('section');
            customerCard.classList.add('customer-card');

            const customerImage = document.createElement('img');
            customerImage.src = customer.picture.large;
            customerImage.alt = 'Customer Image';
            customerImage.classList.add('customer-image');

            const customerTitle = document.createElement('p');
            customerTitle.textContent = `${customer.name.title}.`;

            const customerName = document.createElement('p');
            customerName.textContent = `${customer.name.first} ${customer.name.last}`;

            const customerCountry = document.createElement('p');
            customerCountry.textContent = `From ${customer.location.country}` ;

            customerCard.appendChild(customerImage);
            customerCard.appendChild(customerTitle);
            customerCard.appendChild(customerName);
            customerCard.appendChild(customerCountry);

            customerContainer.appendChild(customerCard);
        });
    })


