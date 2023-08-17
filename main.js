
function play(event){

    //remove the playing class from previous played audiotrack
    soundButtons = document.querySelectorAll('.sound-btn')
    soundButtons.forEach(soundButton => {
        soundButton.classList.remove('playing')
    });

    keyPressed = event.code;
    let soundTrack = "";
    switch (keyPressed){
        case 'KeyA':
            soundTrack = "clap";
            break;
        case 'KeyS':
            soundTrack = "hihat";
            break;
        case 'KeyD':
            soundTrack = "kick";
            break;
        case 'KeyF':
            soundTrack = "openhat";
            break;
        case 'KeyG':
            soundTrack = "boom";
            break;
        case 'KeyH':
            soundTrack = "ride";
            break;
        case 'KeyJ':
            soundTrack = "snare";
            break;
        case 'KeyK':
            soundTrack = "tom";
            break;
        case 'KeyL':
            soundTrack = "tink";
            break;

    }
    audioPlayer = document.querySelector(`#${soundTrack}`)
    audioPlayer.play()
    audioCard = document.querySelector(`div[data-key="${soundTrack}"]`)
    audioCard.classList.add('playing')
}

window.addEventListener('keydown', play)