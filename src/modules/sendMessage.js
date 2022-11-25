import { render, createRoot } from 'react-dom'

export default function sendMessage(message, bgColor, txtColor, time) {
    const verify = document.getElementById('message_box')
    let time_2 = 0
    if (verify) {
        verify.classList.remove('show')
        setTimeout(() => verify.remove(), 200)
        time_2 = 200
    }
    setTimeout(() => {
        const div = document.createElement('div')
        const span = document.createElement('span')
        div.id = 'message_box'
        div.style.backgroundColor = bgColor
        span.textContent = message
        span.style.color = txtColor
        div.appendChild(span)
        document.querySelector('.App').appendChild(div)
        const el = document.getElementById('message_box')
        el.classList.add('show')
        setTimeout(() => {
            el.classList.remove('show')
            setTimeout(() => el.remove(), 200)
        }, time)
    }, time_2)
}