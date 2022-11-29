class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }

  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {word, description}
    }
  }

  remove(word) {
    delete this.words[word]
  }

  get(word) {
    if (!this.words[word]) return 'Этого слова нет в словаре'
    return this.words[word]
  }

  showAllWords() {
    Object.keys(this.words).forEach(word => console.log(`${word} - ${this.words[word].description}`))
  }
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name)
  }

  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {word, description, isDifficult: true}
    }
  }
}


// Task 3
const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
dictionary.remove('JavaScript')
dictionary.showAllWords()

// Task 4
const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством безспециальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новоезначение старого слова.')
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.')
hardWordsDictionary.remove('неологизм')
hardWordsDictionary.showAllWords()
