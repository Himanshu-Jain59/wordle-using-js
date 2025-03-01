// api for fetching a five letter word
const url = `https://random-word-api.vercel.app/api?length=5`;
// api for finding words description
const dictionary = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
// var that stores the fetched word
let word;

// method of generating word
const generate = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data[0]);
  meaning(data[0]);
  word = data[0];
};

// method of generating words description
const meaning = async (text) => {
  const response = await fetch(`${dictionary}${text}`);
  const data = await response.json();
  description.innerText = data[0].meanings[0].definitions[0].definition;
};

//method that validates user entry
async function validate(entry) {
  const response = await fetch(
    `${dictionary}${entry[0]}${entry[1]}${entry[2]}${entry[3]}${entry[4]}`
  );
  if (!response.ok) {
    alert("Enter a Five Letter Valid Word.");
    return false;
  } else {
    return true;
  }
}
