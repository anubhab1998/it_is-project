module.exports = ({
    name: "meme",
    aliases: ['memes'],
    code: `$title[Memes]$description[[u/$jsonRequest[https://meme-api.herokuapp.com/gimme;subreddit]\\]($jsonRequest[https://meme-api.herokuapp.com/gimme;url])]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]
$footer[👍 - $jsonRequest[https://meme-api.herokuapp.com/gimme;ups] | $jsonRequest[https://meme-api.herokuapp.com/gimme;comment] | u/$jsonRequest[https://meme-api.herokuapp.com/gimme;subreddit]]`
});