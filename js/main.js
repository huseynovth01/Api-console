 const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const fetchNASAData = async () => {
  const response = await fetch(`${BASE_URL}`, {
    method: "GET"
  })
  const data = await response.json()
  displayData(data)
}

fetchNASAData()
let divim = document.querySelector("#mydiv")
function displayData(data){
  for (let index = 0; index < 10; index++) {
    let title = document.createElement("h2");
    title.textContent = data[index]?.title 
    let body = document.createElement("h2");
    body.textContent = data[index]?.body
    let id = document.createElement("h2");
    id.textContent = data[index]?.id
    divim.appendChild(title)
    divim.appendChild(body)
    divim.appendChild(id)
  }
}



