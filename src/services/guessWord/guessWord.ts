type wordGuessDto = { word: string; score: number }

export function guessWord(word: string): Promise<string[]> {
  return fetch(`https://api.datamuse.com/sug?s=${word}`)
    .then((resp) => resp.json() as Promise<wordGuessDto[]>)
    .then((guesses) =>
      guesses.sort((a, b) => b.score - a.score).map((guess) => guess.word)
    )
}
