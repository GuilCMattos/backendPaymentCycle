const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', {useNewUrlParser: true})

mongoose.Error.messages.general.required = 'O atributo {PATH} é obrigatório'
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que limite '{MIN}'."

mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que limite '{MAX}'."