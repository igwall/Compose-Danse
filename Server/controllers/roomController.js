const mongoose = require('mongoose')
const Util = require('./Util')
const Room = mongoose.model('Room')
const Recipe = mongoose.model('Recipe')
const Material = mongoose.model('Material')
const roomController = {}

/**
 *
 *
 * @returns
 */
roomController.getAllRooms = function () {
  return new Promise((resolve, reject) => {
    Room.find().populate({
      path: 'recipes',
      model: 'Recipe',
      populate: {
        path: 'materials',
        model: 'Material'
      }
    }).exec(function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 *
 *
 * @param {any} roomId
 * @returns
 */
roomController.getOneRoom = function (roomId) {
  return new Promise((resolve, reject) => {
    Room.findOne({ '_id': roomId }).lean().populate({
      path: 'recipes',
      model: 'Recipe',
      populate: {
        path: 'materials',
        model: 'Material'
      }
    }).exec(function (err, res) {
      if (err) {
        err.status = 500
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 *
 * @param {any} room
 * @returns
 */
roomController.createRoom = function (room) {
  return new Promise((resolve, reject) => {
    const roomToAdd = new Room(room)
    roomToAdd.save((err, item) => {
      if (err) {
        reject(err)
      } else {
        resolve(item)
      }
    })
  })
}

/**
 *
 *
 * @param {any} roomId
 * @param {any} material
 * @returns
 */
roomController.addMaterialToRoom = function (roomId, material) {
  return new Promise((resolve, reject) => {
    Room.findOneAndUpdate({ '_id': roomId }, { $push: { materials: material } }, { new: true }, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 *
 *
 * @param {any} roomId
 * @param {any} recipe
 * @returns
 */
roomController.addRecipeToRoom = function (roomId, recipe) {
  return new Promise((resolve, reject) => {
    Room.findOneAndUpdate({ '_id': roomId }, { $push: { recipes: recipe } }, { new: true }, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

/**
 *
 *
 * @param {any} roomId
 * @param {any} recipeId
 * @returns
 */
roomController.removeRecipeFromRoom = function (roomId, recipeId) {
  return new Promise((resolve, reject) => {
    Room.findOneAndUpdate({ '_id': roomId }, { $pull: {recipes: recipeId} }, { new: true }, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = roomController
