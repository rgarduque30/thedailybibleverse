const proverbs = {
    "bookname": "Proverbs",
    1: {
        1: "These are the proverbs of Solomon, David’s son, king of Israel.",
        2: "Their purpose is to teach people wisdom and discipline, to help them understand the insights of the wise.",
        3: "Their purpose is to teach people to live disciplined and successful lives, to help them do what is right, just, and fair.",
        4: "These proverbs will give insight to the simple, knowledge and discernment to the young."
    },
    2: {
        1: "My child, listen to what I say, and treasure my commands.",
        2: "Tune your ears to wisdom, and concentrate on understanding.",
        3: "Cry out for insight, and ask for understanding."
    },
    3: {
        1: "My child, never forget the things I have taught you. Store my commands in your heart.",
        2: "If you do this, you will live many years, and your life will be satisfying."
    }
};

const getRandomBookChapter = book => {
    let number = 0;

    do { 
        number = Math.floor(Math.random() * Object.keys(book).length) 
    } while (number == 0);

    return number;
};

const getRandomBookChapterVerse = (book, chapter) => Math.floor(Math.random() * Object.keys(book[chapter]).length) + 1;

/* Generate Random Verse */
const book = proverbs;
const chapter = getRandomBookChapter(book);
const verse = getRandomBookChapterVerse(book, chapter);
console.log(`${book.bookname} ${chapter}:${verse}`);
console.log(`${book[chapter][verse]}`);