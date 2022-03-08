const keyList = document.querySelectorAll('.tecla')
const audioFiles = document.querySelectorAll('audio')

function playSound(idAudioElement) {
  const element = document.querySelector(idAudioElement)
  console.log(element.localName) // Retorna o tipo do elemento
  if (element /* != null */ && element.localName === 'audio') {
    element.play()
  } else {
    console.log('Elemento não encontrado')
  }
}

for (let counter = 0; counter < keyList.length; counter++) {
  const key = keyList[counter]
  const instruments = key.classList[1]
  const audioId = `#som_${instruments}`
  key.onclick = function () {
    playSound(audioId)
  }

  key.onkeydown = function (event) {
    if (
      event.code === 'Enter' ||
      event.code === 'Space' ||
      event.code === 'NumpadEnter'
    ) {
      key.classList.add('ativa')
    }
  }

  key.onkeyup = function () {
    key.classList.remove('ativa')
  }
}

// let counter = 0

// while (counter < keyList.length) {
//   const key = keyList[counter]
//   // instrument gets the second class of each element in html
//   const instruments = key.classList[1]
//   // dinamic names of ids
//   const audioId = `#som_${instruments}`

//   key.onclick = function () {
//     playSound(audioId)
//   }
//   counter++
// }
