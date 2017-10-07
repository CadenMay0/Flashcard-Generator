// JavaScript source code

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;

    this.partial = fullText.replace(cloze, '');

    if (fullText.indexOf(cloze) === -1) {
        console.log("The Cloze Delete does not appear in the Full Text");
    }
}



module.exports = ClozeCard;