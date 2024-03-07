let box = document.querySelector('.box') as HTMLDivElement | null;
const input = document.querySelector('input')
const button = document.querySelector('button') as HTMLButtonElement

let node = box?.cloneNode(true) as HTMLElement
box?.remove()
box = null
function isHidden(){
    let hidden = false

    return () => {
        console.log(hidden)
        return hidden = !hidden
    }
}
const setVisibility = isHidden()
button.addEventListener('click', (e: MouseEvent) => {
    const visible = setVisibility()
    if(visible){
        document.body.append(node)
        button.textContent = 'Remove'
    }
    else {
        button.textContent = 'Show'
        node.remove()


    }
})




