// const microphoneIcon = document.getElementById('microphoneIcon');
// const textbox = document.getElementById('myTextbox');
// const languageSelect = document.getElementById('languageSelect');
// let recognition = null;
// // let isListening = false;

// // =========================================================
// // function handleVoiceInput() {
// //   if (!isListening) {
// //     microphoneIcon.classList.add('active'); // Change microphone icon background color
// //     recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Create speech recognition object
// //     recognition.lang = languageSelect.value; // Set selected language
// //     recognition.interimResults = true; // Enable interim results for real-time conversion
// //     recognition.continuous = true; // Enable continuous recognition
// //     recognition.start(); // Start speech recognition
// //     recognition.onresult = function (event) {
// //       // const speechToText =
// //       // event.results[event.results.length - 1][0].transcript;
// //       // inputField.value = speechToText + ' '; // Update input field with the latest recognized text

// //       const speechToText =
// //         event.results[event.results.length - 1][0].transcript;
// //       // const speechToText = event.results[0][0].transcript;
// //       console.log('line 82', speechToText);
// //       console.log('line 83', event.results.length);
// //       // console.log('line 84', event.results[1][0]);
// //       console.log('line 85', event.results[event.results.length - 1][0]);

// //       inputField.value += speechToText + ' '; // Append recognized text to the input field
// //     };

// //     recognition.onend = function () {
// //       microphoneIcon.classList.remove('active'); // Restore microphone icon background color
// //       isListening = false; // Reset the listening state
// //     };
// //   } else {
// //     microphoneIcon.classList.remove('active'); // Restore microphone icon background color
// //     recognition.stop(); // Stop speech recognition
// //     isListening = false; // Reset the listening state
// //   }
// //   isListening = !isListening; // Toggle the listening state
// // }

// // // Event listener for microphone icon click
// // microphoneIcon.addEventListener('click', function () {
// //   handleVoiceInput();
// // });

// // =========================================================

// // Check if the browser supports the necessary APIs
// if ('webkitSpeechRecognition' in window && 'fetch' in window) {
//   microphoneIcon.addEventListener('click', toggleRecognition);
// }

// function toggleRecognition() {
//   if (recognition && recognition.isListening) {
//     recognition.stop();
//     microphoneIcon.classList.remove('active');
//   }
//   //  else {
//   //   microphoneIcon.classList.add('active');
//   // }

//   const selectedLanguage = languageSelect.value;

//   recognition = new webkitSpeechRecognition();
//   recognition.lang = selectedLanguage;
//   recognition.continuous = true; // Enable continuous recognition

//   recognition.onresult = function (event) {
//     const speechToText = event.results[event.results.length - 1][0].transcript;
//     textbox.value += ' ' + speechToText; // Append spoken words to the existing text
//   };

//   recognition.start();

//   // microphoneIcon.classList.remove('active');
// }

// // =======================================================

// // this is comment option for no-use
// // this is comment option for no-use
// // this is comment option for no-use

// // microphoneIcon.addEventListener('click', function () {
// //   // Add 'active' class to the microphone icon
// //   // microphoneIcon.classList.add('active');

// //   // Start voice input functionality here
// //   // ...

// //   // Simulating voice input finish after 3 seconds
// //   setTimeout(function () {
// //     // Remove 'active' class from the microphone icon
// //     microphoneIcon.classList.remove('active');

// //     // Perform actions after voice input is finished
// //     // ...
// //   }, 3000);
// // });

// // =======================================================

// // last modified option
// // // JavaScript code
// // const inputField = document.getElementById('myTextbox');
// // const languageSelect = document.getElementById('languageSelect');
// // const microphoneIcon = document.getElementById('microphoneIcon');
// // let isListening = false; // Variable to track if microphone is active or not
// // let recognition = null; // Variable to store the speech recognition object

// // // Function to handle voice input
// // function handleVoiceInput() {
// //   if (!isListening) {
// //     microphoneIcon.classList.add('active'); // Change microphone icon background color
// //     recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Create speech recognition object
// //     recognition.lang = languageSelect.value; // Set selected language
// //     recognition.interimResults = true; // Enable interim results for real-time conversion
// //     recognition.continuous = true; // Enable continuous recognition
// //     recognition.start(); // Start speech recognition
// //     recognition.onresult = function (event) {
// //       // const speechToText =
// //       // event.results[event.results.length - 1][0].transcript;
// //       // inputField.value = speechToText + ' '; // Update input field with the latest recognized text

// //       const speechToText =
// //         event.results[event.results.length - 1][0].transcript;
// //       // const speechToText = event.results[0][0].transcript;
// //       console.log('line 82', speechToText);
// //       console.log('line 83', event.results.length);
// //       // console.log('line 84', event.results[1][0]);
// //       console.log('line 85', event.results[event.results.length - 1][0]);

// //       inputField.value += speechToText + ' '; // Append recognized text to the input field
// //     };

// //     recognition.onend = function () {
// //       microphoneIcon.classList.remove('active'); // Restore microphone icon background color
// //       isListening = false; // Reset the listening state
// //     };
// //   } else {
// //     microphoneIcon.classList.remove('active'); // Restore microphone icon background color
// //     recognition.stop(); // Stop speech recognition
// //     isListening = false; // Reset the listening state
// //   }
// //   isListening = !isListening; // Toggle the listening state
// // }

// // // Event listener for microphone icon click
// // microphoneIcon.addEventListener('click', function () {
// //   handleVoiceInput();
// // });

// // ============================================================

// // // JavaScript code
// // const inputField = document.getElementById('myTextbox');
// // const languageSelect = document.getElementById('languageSelect');
// // const microphoneIcon = document.getElementById('microphoneIcon');
// // let isListening = false; // Variable to track if microphone is active or not
// // let recognition = null; // Variable to store the speech recognition object
// // let finalSentence = ''; // Variable to store the final constructed sentence

// // // Function to handle voice input
// // function handleVoiceInput() {
// //   if (!isListening) {
// //     microphoneIcon.classList.add('active'); // Change microphone icon background color
// //     recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Create speech recognition object
// //     recognition.lang = languageSelect.value; // Set selected language
// //     recognition.interimResults = true; // Enable interim results for real-time conversion
// //     recognition.continuous = true; // Enable continuous recognition
// //     recognition.start(); // Start speech recognition
// //     recognition.onresult = function (event) {
// //       const interimSentence = Array.from(event.results)
// //         .map((result) => result[0])
// //         .map((result) => result.transcript)
// //         .join(' ');
// //       inputField.value = finalSentence + interimSentence; // Update input field with the constructed sentence
// //       // console.log(inputField.value);

// //       // if (finalSentence.length > 0) {
// //       //   inputField.value = finalSentence + interimSentence; // Update input field with the constructed sentence
// //       // } else {
// //       //   inputField.value = interimSentence; // Update input field with the constructed sentence
// //       // }
// //     };
// //     recognition.onend = function () {
// //       microphoneIcon.classList.remove('active'); // Restore microphone icon background color
// //       isListening = false; // Reset the listening state
// //     };
// //   } else {
// //     microphoneIcon.classList.remove('active'); // Restore microphone icon background color
// //     recognition.stop(); // Stop speech recognition
// //     isListening = false; // Reset the listening state

// //     finalSentence += inputField.value.trim() + ' '; // Append the finalized sentence
// //     // console.log(finalSentence);

// //     // inputField.value = finalSentence; // Update input field with the finalized sentence
// //     console.log(inputField.value);
// //   }
// //   isListening = !isListening; // Toggle the listening state
// // }

// // // Event listener for microphone icon click
// // microphoneIcon.addEventListener('click', function () {
// //   handleVoiceInput();
// // });

// // ============================================================

// // // JavaScript code
// // const inputField = document.getElementById('myTextbox');
// // const languageSelect = document.getElementById('languageSelect');
// // const microphoneIcon = document.getElementById('microphoneIcon');
// // const messageBox = document.getElementById('myTextbox'); // Element to display the converted message
// // let isListening = false; // Variable to track if microphone is active or not
// // let recognition = null; // Variable to store the speech recognition object

// // // Function to handle voice input
// // function handleVoiceInput() {
// //   if (!isListening) {
// //     microphoneIcon.classList.add('active'); // Change microphone icon background color
// //     recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Create speech recognition object
// //     recognition.lang = languageSelect.value; // Set selected language
// //     recognition.interimResults = true; // Enable interim results for real-time conversion
// //     recognition.continuous = true; // Enable continuous recognition
// //     recognition.start(); // Start speech recognition
// //     recognition.onresult = function (event) {
// //       let interimSentence = '';
// //       for (let i = event.resultIndex; i < event.results.length; i++) {
// //         if (event.results[i].isFinal) {
// //           inputField.value += event.results[i][0].transcript + ' '; // Append finalized sentence
// //         } else {
// //           interimSentence += event.results[i][0].transcript; // Accumulate interim sentence
// //         }
// //       }
// //       messageBox.textContent = inputField.value; // Display the converted message in the message box
// //       inputField.value += interimSentence; // Append interim sentence to the input field
// //     };
// //     recognition.onend = function () {
// //       microphoneIcon.classList.remove('active'); // Restore microphone icon background color
// //       isListening = false; // Reset the listening state
// //     };
// //   } else {
// //     microphoneIcon.classList.remove('active'); // Restore microphone icon background color
// //     recognition.stop(); // Stop speech recognition
// //     isListening = false; // Reset the listening state
// //   }
// //   isListening = !isListening; // Toggle the listening state
// // }

// // // Event listener for microphone icon click
// // microphoneIcon.addEventListener('click', function () {
// //   handleVoiceInput();
// // });

// // // ==============================================================

// // working but not dynamic

// // JavaScript code
// const inputField = document.getElementById('myTextbox');
// const microphoneIcon = document.getElementById('microphoneIcon');
// const languageSelect = document.getElementById('languageSelect');
// let isListening = false; // Variable to track if microphone is active or not
// let recognition = null; // Variable to store the speech recognition object

// // Function to handle voice input
// function handleVoiceInput() {
//   if (!isListening) {
//     microphoneIcon.classList.add('active'); // Change microphone icon background color
//     recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Create speech recognition object
//     recognition.lang = languageSelect.value;
//     recognition.interimResults = true; // Enable interim results for real-time conversion
//     recognition.continuous = true; // Enable continuous recognition
//     recognition.onresult = function (event) {
//       let transcript = '';
//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         const result = event.results[i];
//         if (result.isFinal) {
//           transcript += result[0].transcript;
//         }
//       }
//       inputField.value = inputField.value + ' ' + transcript; // Append the transcript to the input field
//     };
//     recognition.onend = function () {
//       microphoneIcon.classList.remove('active'); // Restore microphone icon background color
//       isListening = false; // Reset the listening state
//     };
//     recognition.start(); // Start speech recognition
//   } else {
//     microphoneIcon.classList.remove('active'); // Restore microphone icon background color
//     recognition.stop(); // Stop speech recognition
//     isListening = false; // Reset the listening state
//   }
//   isListening = !isListening; // Toggle the listening state
// }

// // Event listener for microphone icon click
// microphoneIcon.addEventListener('click', function () {
//   handleVoiceInput();
// });

// // ==============================================================
// this is working also

// JavaScript code
// const inputField = document.getElementById('myTextbox');
// const microphoneIcon = document.getElementById('microphoneIcon');
// let isListening = false; // Variable to track if microphone is active or not
// let recognition = null; // Variable to store the speech recognition object

// // Function to handle voice input
// function handleVoiceInput() {
//   const languageSelect = document.getElementById('languageSelect');
//   const selectedLanguage = languageSelect.value;

//   if (!isListening) {
//     microphoneIcon.classList.add('active'); // Change microphone icon background color
//     recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Create speech recognition object
//     recognition.interimResults = true; // Enable interim results for real-time conversion
//     recognition.continuous = true; // Enable continuous recognition
//     recognition.onresult = function (event) {
//       let transcript = '';
//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         const result = event.results[i];
//         if (result.isFinal) {
//           transcript += result[0].transcript;
//         }
//       }
//       inputField.value = inputField.value + ' ' + transcript; // Append the transcript to the input field
//     };
//     recognition.onend = function () {
//       microphoneIcon.classList.remove('active'); // Restore microphone icon background color
//       isListening = false; // Reset the listening state
//     };
//     recognition.lang = selectedLanguage; // Set the selected language for speech recognition
//     recognition.start(); // Start speech recognition
//   } else {
//     microphoneIcon.classList.remove('active'); // Restore microphone icon background color
//     recognition.stop(); // Stop speech recognition
//     isListening = false; // Reset the listening state
//   }
//   isListening = !isListening; // Toggle the listening state
// }

// // Event listener for microphone icon click
// microphoneIcon.addEventListener('click', function () {
//   handleVoiceInput();
// });

// ==========================================================

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// const inputField = document.getElementById('inputField');
// const languageSelect = document.getElementById('languageSelect');
// const microphoneIcon = document.getElementById('microphoneIcon');
// let isListening = false;

// recognition.interimResults = true; // Enable interim results for real-time conversion
// recognition.continuous = true; // Enable continuous recognition

// recognition.onresult = function (event) {
//   let finalTranscript = '';
//   for (let i = event.resultIndex; i < event.results.length; i++) {
//     const result = event.results[i];
//     if (result.isFinal) {
//       finalTranscript += result[0].transcript + ' ';
//     }
//   }
//   inputField.value += finalTranscript; // Append new transcript to existing input
// };

// function toggleSpeechRecognition() {
//   if (isListening) {
//     recognition.stop();
//     isListening = false;
//     microphoneIcon.classList.remove('active');
//   } else {
//     recognition.lang = languageSelect.value;
//     recognition.start();
//     isListening = true;
//     microphoneIcon.classList.add('active');
//   }
// }

// ===================================================

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const inputField = document.getElementById('inputField');
const languageSelect = document.getElementById('languageSelect');
const microphoneIcon = document.getElementById('microphoneIcon');
let isListening = false;

recognition.interimResults = true; // Enable interim results for real-time conversion
recognition.continuous = true; // Enable continuous recognition

recognition.onresult = function (event) {
  let finalTranscript = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    const result = event.results[i];
    if (result.isFinal) {
      finalTranscript += result[0].transcript + ' ';
    }
  }
  inputField.value += finalTranscript; // Append new transcript to existing input
};

function toggleSpeechRecognition() {
  if (isListening) {
    recognition.stop();
    isListening = false;
    microphoneIcon.classList.remove('active');
  } else {
    recognition.lang = languageSelect.value;
    recognition.start();
    isListening = true;
    microphoneIcon.classList.add('active');
  }
}
