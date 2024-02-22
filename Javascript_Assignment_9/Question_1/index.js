

function submitBlog(event) {
    event.preventDefault()
    const url = 'https://reqres.in/api/blogs'

    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    const content = document.getElementById('content').value



    const name = document.getElementById('name').value
    const job = document.getElementById('job').value

    axios.post(url, {
        name: name,
        job: job
    })
        .then((res) => {
            console.log("Response : ", res)
        })
        .catch((err) => console.log(err))
}

