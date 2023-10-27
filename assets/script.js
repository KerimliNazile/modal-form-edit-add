let modal = document.querySelector('.modal')
const image = document.getElementById('image');
const film = document.getElementById('film');
const rejissor = document.getElementById('rejissor');
const category = document.getElementById('category');
const imdb = document.getElementById('film_imdb');
const table = document.getElementById('userTable');
const button = document.getElementById('button')
const tbody = document.querySelector('tbody')
const edit = document.querySelector('.edit')
const add = document.querySelector('.add')


const save = document.querySelector(".save")




add.addEventListener('click', () => {
    modal.classList.toggle('active')
})

save.addEventListener('click', (e) => {
    e.preventDefault()



    let tr = document.createElement('tr')
    let image1 = document.createElement('img')
    let film1 = document.createElement('td')
    let imdb1 = document.createElement('td')
    let category1 = document.createElement('td')
    let rejissor1 = document.createElement('td')
    let editTd = document.createElement("td")
    let deleteTd = document.createElement("td")

    let editButton = document.createElement("button")
    let deleteButton = document.createElement("button")
    editButton.classList.add("edit")
    deleteButton.classList.add("delete")

    image1.src = image.value
    image1.append(image)
    film1.textContent = film.value
    imdb1.textContent = imdb.value
    category1.textContent = category.value
    rejissor1.textContent = rejissor.value
    

    editButton.textContent = "Edit"
    deleteButton.textContent = "X"


    editButton.addEventListener('click', () => {
        image.value = image1.src
        film.value = film1.textContent
        imdb.value = imdb1.textContent
        category.value = category1.textContent
        rejissor.value = rejissor1.textContent

        save.textContent = "Edit"
        
        save.addEventListener('click', ()=>{

            tr.remove()

            save.textContent = "Save"
        })

    })

    filmValue = film.value

    deleteButton.addEventListener('click', () => {

        tr.remove()
    })

    
    editTd.append(editButton)
    deleteTd.append(deleteButton)
    tr.append(image1, film1, imdb1, category1, rejissor1, editTd, deleteTd)
    tbody.append(tr)

    userForm.reset();

})


