const url = 'https://jsonplaceholder.typicode.com/user'

const fetchData = async(url:string) => {
    const results = await fetch(url)
    if (!results.ok) {
        throw new Error(`HTTP error! status: ${results.status}`);

    }
    return await results.json()
}

// chain method
fetchData(url).then((data) => {
    console.log(data)
}).catch(error => {
    console.error(error)
})

// async await method
const processData = async () => {
    try {
        const usersData = await fetchData(url);
        console.log('Fetched users:', usersData);
    } catch (error) {
        console.error('Error processing data:', error);
    }
};

// function call
// processData();