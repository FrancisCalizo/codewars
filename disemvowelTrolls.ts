// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

export class Kata {
  static disemvowel(str: string) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // Convert String into Array
    const phraseToArray = str.split('');

    // Remove all vowels
    const result = phraseToArray.filter(
      (letter) => !vowels.some((vowel) => vowel === letter)
    );

    // Convert Vowel-less Array back to String
    return result.join('');
  }
}
