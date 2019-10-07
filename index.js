const btns = document.querySelectorAll('.btns')
const screen = document.querySelectorAll('.screen')
const equalBtn = document.querySelectorAll('.btn-equal')
const clearBtn = document.querySelectorAll('.btn-clear')

for(i = 0; i < btns.length; i ++) {
    btns[i].addEventListener('click', function(){
        let number = btns[i].getAttribute('data-num')
        screen.value += number
    })
}

equalBtn.addEventListener('click', function() {
    let value = eval(screen.value)
    screen.value = value
})

