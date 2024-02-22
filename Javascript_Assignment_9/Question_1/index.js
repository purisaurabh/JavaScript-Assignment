

async function submitBlog() {

    const url = 'https://reqres.in/api/blogs'

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const content = document.getElementById('content').value;

    try{
        const response = await axios.post(url, {
            title: title,
            description: description,
            content: content
        });

        console.log("Response : " , response.data)
    }catch(err){
        console.log("Error is : " , err);
    }
}

