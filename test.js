const token = 'HxODjcxCrS6CWuxBHFrLZ0iRnZPsyWSV';
const apiUrl = 'https://blr1.blynk.cloud/external/api/get?token=' + token + '&v1';

fetch(apiUrl)
    .then(response => {
        // Check if response is successful (status code 200)
        if (response.ok) {
            // Parse response body as JSON
            return response.json();
        } else {
            // Handle non-successful response
            throw new Error('Failed to fetch data');
        }
    })
    .then(data => {
        // Process retrieved data
        console.log('Retrieved data:', data);
        document.write("Retrived Data:", data);
        // Handle data as needed
    })
    .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
    });
