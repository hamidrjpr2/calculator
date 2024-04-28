let btns = document.querySelectorAll('.btn:not(.result)')
const viewer = document.querySelector('.viewer')
let nums = document.querySelectorAll('.number')
let ops = document.querySelectorAll('.op')
const resulter = document.getElementById('result')
const removeText = document.getElementById('clear')
const showText = document.getElementById('popup')
const calculator = document.querySelector('.cal')

removeText.addEventListener('click', () => {
    viewer.innerHTML = '0'
    viewer.setAttribute('data-txt', '')
})

nums.forEach(num => {
    viewer.innerHTML = 0
    num.addEventListener('click', () => {
        let newValue = num.getAttribute('data-num')
        let oldValue = viewer.getAttribute('data-txt')
        oldValue += newValue
        setViewer('data-txt', oldValue)
        viewer.innerHTML = oldValue
    })
})

ops.forEach(op => {
    op.addEventListener('click', () => {
        if (getViewer('data-txt') == '') {
            resulter.getAttribute('data-conatainer', viewer.innerHTML)
        } else {
            resulter.setAttribute('data-container', viewer.getAttribute('data-txt'))
        }
        setViewer('data-txt', '')
        let myType = op.getAttribute('data-op')
        resulter.setAttribute('data-res', myType)
    })
})

resulter.addEventListener('click', () => {
    let operator = resulter.getAttribute('data-res')
    let firstNum = resulter.getAttribute('data-container')
    let secondNum = getViewer('data-txt')
    let result = firstNum + operator + secondNum
    let intResult = eval(result)
    resulter.setAttribute('data-container', intResult)
    setViewer('data-txt', intResult)
    viewer.innerHTML = intResult

    if (firstNum == '0' || secondNum == '0' && operator == '/') {
        let trashTalk = 'I told you not to do that idiot'
        viewer.innerHTML = trashTalk
        viewer.classList.add('viewerWarning')

        setTimeout(() => {
            calculator.classList.add('calVanish')
            calculator.style
        }, 2500)
    } else {
        popup(intResult)
    }

})

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let data = btn.getAttribute('data-num')
        popup(data)
    })
})

function popup(text) {
    showText.innerHTML = text
    showText.classList.add('popup')

    setTimeout(() => {
        showText.classList.remove('popup')
    }, 400)
    return text
}

function setViewer(name, value) {
    viewer.setAttribute(name, value)
}

function getViewer(name) {
    return viewer.getAttribute(name)
}