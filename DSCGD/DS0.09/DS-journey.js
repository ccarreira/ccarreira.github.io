// This would run on every page to setup navigation
window.onload = function() {
    // Get navigation array from localStorage
    let navArr = JSON.parse(localStorage.getItem('navArr')) || [];

    // Define a function to go to the previous page
    window.goBack = function() {
        // Pop the last navigation object
        let prevPage = navArr.pop();

        // Save the updated navigation array
        localStorage.setItem('navArr', JSON.stringify(navArr));

        // Use the data in prevPage to navigate back
        // This might involve setting form values, etc.
        // Here we'll just change location
        if (prevPage) {
            window.location.href = prevPage.url;
        }
    }

    // Push the current page state to the navigation array
    navArr.push({
        // Use window.location.href to get the current page's URL
        url: window.location.href,

        // You could add any other data here that you need
        // to restore when navigating back to this page
    });

    // Save the navigation array
    localStorage.setItem('navArr', JSON.stringify(navArr));
}
