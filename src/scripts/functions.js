

export const randomQuote = async () => {
    const url = "../../type.fit_api_quotes.txt";
    const response = await fetch(url);
    const quoteCollection = await response.json();
    const index = Math.floor(Math.random() * quoteCollection.length);
    const { text, author } = quoteCollection[index];
    const authorName = author || "Unknown";
    return [text, authorName];
}
