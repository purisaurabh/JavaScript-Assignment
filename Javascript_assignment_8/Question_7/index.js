const fetchData = async () =>{
    try {
        const response = await fetch("https://reqres.in/api/users")
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        await new Promise ((resolve) => setTimeout(resolve , 2000));
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}


async function getData(){
    try {
        const result = await fetchData()
        console.log("Fetch data :" , result);
    } catch (error) {
        console.log("Error while fetching : " , error);
    }
}

getData()