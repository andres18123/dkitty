function openCard(event) {
  const card = event.currentTarget;
  const header = document.querySelector('.header');
  
  card.classList.remove('closed');
  card.classList.add('open');
  card.style.cursor = 'auto';

  header.classList.add('hidden');
  document.querySelectorAll('.flower-border').forEach(flower => {
    flower.style.opacity = '0';
  });
  document.getElementById('hearts').style.display = 'none';
  document.querySelector('.back-button').style.display = 'block';
  
  // Reproducir el audio si no está sonando
  const audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
  }
  
  // Ocultar el mensaje original y mostrar el nuevo mensaje
  const leftMsg = document.querySelector('.left-message');
  if (leftMsg) {
    leftMsg.style.display = 'none';
  }
  const bestadcMsg = document.querySelector('.bestadcmessage');
  if (bestadcMsg) {
    bestadcMsg.style.display = 'block';
  }
}

function closeCard() {
  const card = document.querySelector('.valentine-card');
  
  card.classList.remove('open');
  card.classList.add('closed');
  
  document.querySelector('.header').classList.remove('hidden');
  document.querySelectorAll('.flower-border').forEach(flower => {
    flower.style.opacity = '1';
  });
  document.getElementById('hearts').style.display = 'block';
  document.querySelector('.back-button').style.display = 'none';
  
  const audio = document.getElementById("myAudio");
  audio.pause();
  audio.currentTime = 0;
  
  // Revertir la visibilidad de los mensajes
  const leftMsg = document.querySelector('.left-message');
  if (leftMsg) {
    leftMsg.style.display = 'block';
  }
  const bestadcMsg = document.querySelector('.bestadcmessage');
  if (bestadcMsg) {
    bestadcMsg.style.display = 'none';
  }
}

function showLove(event) {
  event.stopPropagation();
  alert("TE QUIERO MUCHO :) CUPÓN VÁLIDO PARA: UN REGALO, ABRAZO, SALIDA O LO QUE SEA jiji :p");
}

function toggleMusic() {
  const audio = document.getElementById("myAudio");
  const musicToggleButton = document.getElementById("musicToggle");
  if (audio.paused) {
    audio.play();
    musicToggleButton.innerText = "Pausar";
  } else {
    audio.pause();
    musicToggleButton.innerText = "Reproducir";
  }
}

// Función para iniciar la experiencia cuando se haga clic en "Iniciar"
document.getElementById("startButton").addEventListener("click", function() {
  // Ocultar la pantalla de bienvenida
  document.getElementById("welcomeScreen").style.display = "none";
  // Intentar reproducir el audio
  const audio = document.getElementById("myAudio");
  audio.play();
});

window.onload = function () {
  const heartsContainer = document.getElementById('hearts');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-fall';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heartsContainer.appendChild(heart);
  }
  
  const flowerCount = 5;
  const flowerSpacing = 150;
  const flowerOffset = 20;
  
  [['left', 'floatLeft'], ['right', 'floatRight']].forEach(([side, animation]) => {
    for (let i = 0; i < flowerCount; i++) {
      const flower = document.createElement('img');
      flower.src = "https://images.freeimages.com/fic/images/icons/1243/hello_kitty/256/flowers.png";
      flower.className = 'flower-border';
      flower.style[side] = `${flowerOffset}px`;
      flower.style.top = `${50 + i * flowerSpacing}px`;
      flower.style.transform = `rotate(${side === 'left' ? 20 : -20}deg)`;
      flower.style.animation = `${animation} 4s ease-in-out infinite`;
      document.body.appendChild(flower);
    }
  });
  
  const setupFlowers = (verticalPosition, animation) => {
    const windowWidth = window.innerWidth;
    const flowerWidth = 80;
    const spacing = flowerWidth + 20;
    const start = flowerOffset + flowerWidth;
    const end = windowWidth - flowerOffset - flowerWidth;
    const count = Math.floor((end - start) / spacing);
    
    for (let i = 0; i < count; i++) {
      const flower = document.createElement('img');
      flower.src = "https://images.freeimages.com/fic/images/icons/1243/hello_kitty/256/flowers.png";
      flower.className = 'flower-border';
      flower.style.left = `${start + i * spacing}px`;
      flower.style[verticalPosition] = `${flowerOffset}px`;
      flower.style.animation = `${animation} 4s ease-in-out infinite`;
      document.body.appendChild(flower);
    }
  };
  
  setupFlowers('top', 'floatTop');
  setupFlowers('bottom', 'floatBottom');
};
