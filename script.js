const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch (type) {
      case "text":
        appendText(label, placeholder)
        break
      case "radio":
        appendRadio(label, placeholder)
        break
      case "button":
        appendButton(label, placeholder)
        break
    }
  }
  
  const appendText = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("input")
    el.setAttribute("class", "form-control mt-1")
    el.setAttribute("placeholder", placeholder)
    el.setAttribute("type", "text")
    el.setAttribute("value", "")
    
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("class", "btn btn-danger ms-2")
    deleteBtn.addEventListener("click", () => {
      el.remove()
      deleteBtn.remove()
    })
    
    let div = document.createElement("div")
    div.setAttribute("class", "d-flex flex-row align-items-center mt-1")
    div.append(el, deleteBtn)
    document.querySelector("#elements").append(div)
  }
  
  const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("input")
    let lb = document.createElement('label')
    
    el.setAttribute("class", "mt-1")
    el.setAttribute("placeholder", placeholder)
    el.setAttribute("type", "radio")
    el.textContent = label
    lb.textContent = label
 
    document.querySelector("#elements").append(lb)
    document.querySelector("#elements").append(el)
  
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("class", "btn btn-danger ms-2")
    deleteBtn.addEventListener("click", () => {
      el.remove()
      lb.remove()
      deleteBtn.remove()
    })
    
    let div = document.createElement("div")
    div.setAttribute("class", "d-flex flex-row align-items-center mt-1")
    div.append(el, lb, deleteBtn)
    document.querySelector("#elements").append(div)
  }
  
  const appendButton = (label = "No label", placeholder = "No placeholder") => {
    let el = document.createElement("button")
    el.setAttribute("class", "mt-1 btn btn-primary")
    el.innerHTML = placeholder
    el.type = "submit"
    el.name = label
  
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("class", "btn btn-danger ms-2")
    deleteBtn.addEventListener("click", () => {
      el.remove()
      deleteBtn.remove()
    })
    
    let div = document.createElement("div")
    div.setAttribute("class", "d-flex flex-row align-items-center mt-1")
    div.append(el, deleteBtn)
    document.querySelector("#elements").append(div)
  }
  