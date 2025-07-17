const BASE_URL = 'https://api.telegram.org/bot7143031403:AAFu3s_DqsQn52w10vOHig3VBzS8_CH8SI4/',
    CHAT_ID = '-1002285143191'

const sendMessage = async text => {
    const encodedText = encodeURIComponent(text)
    const url = `${BASE_URL}sendMessage?chat_id=${CHAT_ID}&text=${encodedText}`
    const response = await fetch(url)
    console.log('response', response)
    alert('Сообщение успешно отправлено! Ожидайте ответа менеджера.')
}

export default sendMessage
