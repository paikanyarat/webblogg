const { where } = require('sequelize')
const{Menu} = require('../models')
module.exports = {
  //get all user
  async index (req, res) {
    try {
      const menus = await Menu.findAll()
      res.send(menus)
    } catch (error) {
      res.status(500).send({
         error: 'The menus information was incorrect'
        })
    }
   
  },
    
  //create user
  async create(req, res) {
    try {
      const menu = await Menu.create(req.body)
      res.send(menu.toJSON())
    } catch (error) {
      res.status(500).send({
         error: 'The menus information was incorrect'
        })
    }
  },

  //edit user
  async put(req, res) {
    try {
      await Menu.update(req.body,{
      where: {
        id: req.params.menusId
      }
    })
    res.send(req.body)
    } catch (error) {
      res.status(500).send({
         error: 'Update menu information was incorrect'
        })
    }
  },

  // delete user
  async delete(req, res) {
    try {
      const menu = await Menu.findOne({
        where: {
          id: req.params.menuId
        }
      })
      if (!menu) {
        return res.status(403).send({
          error: 'The menu id is not found'
        })
      }
      await menu.destroy()
      res.send(menu)
    } catch (error) {
      res.status(500).send({
        error: 'Delete menu information was incorrect'
       })
    }
  },

  // show user by id
  async show (req, res) {
    try {
      const menu = await Menu.findOne({
        where: {
          id: req.params.menusId
        }
      })
      if (!menu) {
        return res.status(403).send({
          error: 'The menu id is not found'
        })
      }

      res.send(menu)
    } catch (error) {
      res.status(500).send({
        error: 'Menus information was incorrect'
       })
    }
  }
}
