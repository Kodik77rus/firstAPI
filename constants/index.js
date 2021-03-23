exports.URL_FOR_CONNECT_TO_DB = 'mongodb+srv://george:Z34vE8Nm3xaiifoF@cluster0.fihkq.mongodb.net/ads?retryWrites=true&w=majority'

exports.URL_REGEX = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/

exports.PAGE_SIZE = 10

exports.VALID_QUERY_REQ_SORT = [
  'byPriceAsc', 'byPriceDesc',
  'byDateAsc', 'byDateDesc'
]

exports.VALID_QUERY_GET_AD = [
  'description', 'imgURLs'
]

exports.DICTIONARY = {
  schema: {
    title: 'Ad title required',
    description: 'Ad description required',
    price: 'Ad price required',
    imgURLs: 'You must pass an array of more than 1 url and no more than 3 urls.',
    validationUrl: 'Invalid URL, URL must contains http or https',
  },
  errors: {
    badRequest: 'Bad request'
  }
}
