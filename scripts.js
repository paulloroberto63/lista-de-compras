const item = document.getElementById("item");
const form = document.querySelector("form");
const label = document.querySelector("label");
const button = document.getElementById("add-item")
const list = document.getElementById("list")
const remove = document.getElementById("remove")
const exit = document.getElementById('exit-notification')


item.addEventListener("input", () => {
 const regex = /[0-9]/g
item.value = item.value.replace(regex, "");
})


button.addEventListener("click", (event) => {
    event.preventDefault()

    let div_item = document.createElement('div')
    let div_recycle = document.createElement('div')
    div_recycle.classList.add('remove')
    div_item.classList.add('list-inner')
    
    let  div = document.createElement('div')
    div.classList.add('list-radio')
    
    let input_checkbox = document.createElement('input')
    input_checkbox.type = 'checkbox'

    let recycle = document.createElement('img')
    recycle.src = './assets/recycle.svg'

    let textNode = document.createTextNode(item.value)

    div_item.append(div,div_recycle)
    div_recycle.append(recycle)
    div.append(input_checkbox,textNode)

    if(item.value.length < 1) {
        alert("digite um item, por favor!!!")
        remove_item.remove()
     }

list.append(div_item)

div_recycle.addEventListener("click", () =>{
    remove_item = div_recycle.parentElement
    remove_item.remove()

    let footer = document.querySelector('footer')
    footer.classList.add('item-remove')
   
    exit.addEventListener("click", () => {
        footer.classList.remove('item-remove')
    })
})
})

