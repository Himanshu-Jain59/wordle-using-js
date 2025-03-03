# Wordle Game

This is a simple version of **Wordle** that fetches a random 5-letter word from an API. In this game, you will have six attempts to guess a 5-letter word, with feedback provided after each guess to guide you.
.

![Wordle Game](<./Screenshot%20(196).png>)

## How to Play

1. You will be shown a 5-letter word to guess.
2. After entering your guess, the game will provide feedback:
   - **Green**: The letter is in the correct position.
   - **Yellow**: The letter is in the word but in the wrong position.
   - **Gray**: The letter is not in the word.
3. You have six attempts to guess the correct word.
4. The game will notify you if you win or lose after completing your attempts.

## Features

- Simple, responsive design.
- Color-coded feedback for each guess.
- 5-letter word and 6 attempts per round.
- Supports guessing by pressing Enter or clicking the "Submit Guess" button.
- Hint (description or sysnonyms of word).

## Technologies Used

- **HTML**: Markup for the game structure.
- **CSS**: Styling for the game interface and layout.
- **JavaScript**: Game logic, including guessing, validation, and feedback. Fetches a random word from an external API.

## API Used

This game fetches a random word from the following API:

- **API**: [Random Word API](https://random-word-api.vercel.app/)

  The API provides a random 5 letter word . The game picks the word. This word is used as the target word that players need to guess.

- **Endpoint URL**: `https://random-word-api.vercel.app/api?length=5`

This game uses following API for validation and hint of word :

- **API**: [Dictionary API](https://api.dictionaryapi.dev/api/v2/entries/en/)

  The API checks that the entered 5 letter word is valid or not.It also generates description and synonyms for the hint.

- **Endpoint URL**: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

## Installation

To run this game locally on your machine, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Himanshu-Jain59/wordle-using-js.git
   ```

2. Navigate to the project directory:

3. Open the `index.html` file in your web browser to start playing:

   ```bash
   open index.html
   ```

## Contributing

Feel free to fork this project and make improvements! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Open a pull request with a description of your changes.

## Acknowledgments

- Inspired by the original [Wordle](https://www.powerlanguage.co.uk/wordle/) game.
- Thanks to the open-source community for their contributions and support!
