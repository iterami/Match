'use strict';

function repo_escape(){
    stop();
}

function repo_init(){
    core_repo_init({
      'audios': {
        'boop': {
          'duration': .1,
        },
      },
      'info-events': {
        'start-button': {
          'todo': start,
        },
      },
      'keybinds': {
        72: {
          'todo': function(){
              stop();
              start();
          },
        },
      },
      'storage': {
        'display': 1,
        'max-time': 0,
      },
      'storage-menu': '<table><tr><td><select id=display><option value=0>Letters</option><option value=1>Numbers</option><option value=2>Symbols</option></select><td>Display<tr><td><input id=max-time><td>Max Time</table>',
      'title': 'Match.htm',
    });

    // Setup buttons in game-div.
    var output = '';
    for(var loop_counter = 0; loop_counter < 20; loop_counter++){
        if(loop_counter % 5 === 0
          && loop_counter !== 0){
            output += '<br>';
        }
        output +=
          '<input class=gridbuttonclickable disabled id=' + loop_counter
          + ' onclick=button_click(' + loop_counter
          + ') type=button value=" ">';
    }
    document.getElementById('game-div').innerHTML = output + '<br>';

    var loop_counter = 19;
    do{
        document.getElementById(loop_counter).style.background = colors['default'];
    }while(loop_counter--);

    stop();
}
