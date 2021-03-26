const Ad = require('../model/ad')
const { querySortValidator, queryAdValidator } = require('../utils')
const { PAGE_SIZE, DICTIONARY, PARSED_OBJECTS } = require('../constants')

exports.createAd = async ad => {
  try {
    const postedAd = await new Ad(ad).save()
    return postedAd
  } catch (err) {
    return err
  }
}

exports.getAds = async query => {
  try {
    const isValid = querySortValidator(query)
    if (isValid) {
      return await Ad.find({}, PARSED_OBJECTS.withoutParams)
        .sort(isValid)
        .skip(PAGE_SIZE * (query.page - 1))
        .limit(PAGE_SIZE)
    } else {
      throw new Error(DICTIONARY.errors.badRequest)
    }
  } catch (err) {
    return err
  }
}

exports.getAd = async (adId, query) => {
  try {
    if (Object.keys(query).length === 0) {
      const ad = await Ad.findById(adId, PARSED_OBJECTS.withoutParam)
      return ad
    } else if (query.fields && Object.keys(query).length === 1) {
      const isValid = queryAdValidator(query.fields)
      if (isValid) {
        return await Ad.findById(adId, isValid)
      } else {
        throw new Error(DICTIONARY.errors.badRequest)
      }
    } else {
      throw new Error(DICTIONARY.errors.badRequest)
    }
  } catch (err) {
    return err
  }
}
