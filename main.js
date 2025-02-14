window.onload = function() {
    // Obtenir l'image par sa classe
    var image = document.querySelector('.image-rotative');
    
    // Déclenchement du zoom au bout de 100ms pour être sûr que l'image est prête
    setTimeout(function() {
        image.style.visibility = "visible"; // Rendre l'image visible
        image.style.transform = "scale(1)";  // Appliquer l'échelle normale sur 30 secondes
    }, 3000);  // 100ms pour laisser le temps au navigateur de charger l'image
}


const playlist = [
    "Voyager's Golden Record - Bach - Gavotte en Rondo - A  Grumiaux.mp3",
    "Voyager's Golden Record - Bach - WTK 2, no 1, Glenn Gould.mp3",
    "Voyager's Golden Record - Bach, Brandenburg no  2, part 1.mp3",
    "Voyager's Golden Record - Beethoven 5th, part 1, Otto Klemperer.mp3",
    "Voyager's Golden Record - Fairie Round - cond  David Munroe.mp3",
    "Voyager's Golden Record - Flowing Streams - China.mp3",
    "Voyager's Golden Record - Iziel je Delyo Hagdutin - Bulgaria.mp3",
    "Voyager's Golden Record - Jaat Kahan Ho - India - Surshri.mp3",
    "Voyager's Golden Record - Johnny B  Goode - Chuck Berry.mp3",
    "Voyager's Golden Record - Kinds of Flowers.mp3",
    "Voyager's Golden Record - Melanesian panpipes.mp3",
    "Voyager's Golden Record - Men's house song - Papua New Guinea.mp3",
    "Voyager's Golden Record - Mozart - Queen of the night- Eda Moser.mp3",
    "Voyager's Golden Record - Navajo Night Chant - America.mp3",
    "Voyager's Golden Record - Panpipes and drum song - Peru.mp3",
    "Voyager's Golden Record - Sacrificial dance-comp&cond Stravinsky.mp3",
    "Voyager's Golden Record - Tchakrulo - Choir - Georgia.mp3",
    "Voyager's Golden Record - Tchenhoukoumen, percussion Senegal.mp3",
    "Voyager's Golden Record - Ugam - Azerbaijan bagpipes.mp3",
    "Voyager's Golden Record - Wedding song - Peru.mp3",
    "Voyager's Golden Record -Cranes in their nest-Japan(Shakuhachi).mp3",
    "Voyager's Golden Record -Dark was the night-Blind Willie Johnson.mp3",
    "Voyager's Golden Record -El Cascabel-Lorenzo Barcelata&the Mari.mp3",
    "Voyager's Golden Record -Morning Star and Devil Bird- Australia.mp3",
    "Voyager's Golden Record-Melancholy Blues-L Armstrong&HisHotSeven.mp3"
  ];
  
  let currentTrack = 0;
  const audioPlayer = document.getElementById('iframeAudio');
  const nowPlaying = document.getElementById('nowPlaying');
  
  function loadTrack(trackIndex) {
    if (trackIndex >= 0 && trackIndex < playlist.length) {
      currentTrack = trackIndex;
      audioPlayer.src = `http://161.97.97.47:3000/music/${encodeURIComponent(playlist[currentTrack])}`;
      nowPlaying.textContent = `Now playing: ${playlist[currentTrack]}`;
    }
  }
  
  function playPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }
  
  function nextTrack() {
    loadTrack((currentTrack + 1) % playlist.length);
    audioPlayer.play();
  }
  
  function prevTrack() {
    loadTrack((currentTrack - 1 + playlist.length) % playlist.length);
    audioPlayer.play();
  }
  
  // Load the first track
  loadTrack(24);
  