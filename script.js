last_btn_class = ""

// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;

  const current_button = document.getElementById(code);

  if (code == "Backspace"){

    last_btn_class = current_button.className

    current_button.className = last_btn_class+" activebtn"
  
    var audio = new Audio(`redink/press/BACKSPACE.mp3`);
    audio.play();

  }
  if (code == "Enter"){

    last_btn_class = current_button.className

    current_button.className = last_btn_class+" activebtn"
  
    var audio = new Audio(`redink/press/ENTER.mp3`);
    audio.play();

  }
  if (code == "Space"){

    last_btn_class = current_button.className

    current_button.className = last_btn_class+" activebtn"
  
    var audio = new Audio(`redink/press/SPACE.mp3`);
    audio.play();

  }
  else{
    last_btn_class = current_button.className

    current_button.className = last_btn_class+" activebtn"
  
    var audio = new Audio(`redink/press/GENERIC_R0.mp3`);
    audio.play();
  }


}, false);

// Add event listener on keyup
document.addEventListener('keyup', (event) => {
  var name = event.key;
  var code = event.code;

  const current_button = document.getElementById(code);

  if (code == "Backspace"){

    current_button.className = last_btn_class
  
    var audio = new Audio(`redink/release/BACKSPACE.mp3`);
    audio.play();

  }
  if (code == "Enter"){

    current_button.className = last_btn_class
  
    var audio = new Audio(`redink/release/ENTER.mp3`);
    audio.play();

  }

  if (code == "Space"){

    current_button.className = last_btn_class
  
    var audio = new Audio(`redink/release/SPACE.mp3`);
    audio.play();

  }

  else{
    
    
  current_button.className = last_btn_class
  
  var audio = new Audio(`redink/release/GENERIC.mp3`);
  audio.play();

  }

}, false);

// Add event listener on keydown
//document.addEventListener('keydown', (event) => {
  //var name = event.key;
  //var code = event.code;
  // Alert the key name and key code on keydown
  //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//}, false);

// Add event listener on keyup
//document.addEventListener('keyup', (event) => {
  //var name = event.key;
  //var code = event.code;
  // Alert the key name and key code on keydown
  //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//}, false);

// Add event listener on keypress
//document.addEventListener('keypress', (event) => {
  //var name = event.key;
  //var code = event.code;
  // Alert the key name and key code on keydown
  //alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//}, false);