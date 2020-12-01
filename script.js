

var ul = document.getElementById('myUL')
var li;
function addTask() {
    var input = document.getElementById('myInput')
    var item = input.value;
    var textNode = document.createTextNode(item)
    if (item == '') {
        alert("Enter your Task")
        return false

    } else {
        li = document.createElement('li')
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        let label = document.createElement('label')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        // li.className = 'visual'
        input.value = " "
    }
}
function removeLI() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }

    }
}