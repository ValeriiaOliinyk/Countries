import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

function showMessage() {
  PNotify.error({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 4000,
    stack: {
      dir1: 'down',
      dir2: 'right',
      firstpos1: 100,
      firstpos2: 900,
    },
  });
}

export default showMessage;
