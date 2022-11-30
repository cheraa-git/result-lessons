class Dictionary {
  #name
  #words

  constructor(name) {
    this.#name = name
    this.#words = {}
  }

  add(word, description) {
    if (!this.#words[word]) {
      this._addNewWord(word, {word, description})
    }
  }

  remove(word) {
    delete this.#words[word]
  }

  get(word) {
    if (!this.#words[word]) return 'Этого слова нет в словаре'
    return this.#words[word]
  }

  showAllWords() {
    Object.keys(this.#words).forEach(word => console.log(`${word} - ${this.#words[word].description}`))
  }

  get mainName() {
    return this.#name
  }

  set mainName(name) {
    this.#name = name
  }

  get allWords() {
    return this.#words
  }

  _addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = wordObj
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name)
  }

  add(word, description) {
    if (!this.allWords[word]) {
      this._addNewWord(word, {word, description, isDifficult: true})
    }
  }
}


// Task 3
console.log('\n---------- Task 3 ----------')
const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
dictionary.remove('JavaScript')
dictionary.showAllWords()

// Task 4
console.log('\n---------- Task 4 ----------')
const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством безспециальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новоезначение старого слова.')
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.')
hardWordsDictionary.remove('неологизм')
hardWordsDictionary.showAllWords()

// Task extra
console.log('\n---------- Task extra ----------')
const hardWordsDictionary2 = new HardWordsDictionary('Сложные слова')
hardWordsDictionary2.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary2.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
hardWordsDictionary2.add('квант', 'Неделимая часть какой-либо величины в физике.')
hardWordsDictionary2.remove('неологизм')
hardWordsDictionary2.showAllWords()
console.log(hardWordsDictionary2.mainName) // Сложные слова
hardWordsDictionary2.mainName = 'Новый Словарь'
console.log(hardWordsDictionary2.mainName) // Новый Словарь
console.log(hardWordsDictionary2.allWords) // выводит объект в котором есть слова дилетант и квант
