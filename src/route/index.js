// Підключаємо технологію express для back-end сервера
const express = require('express')
// Створюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з container
  res.render('index', {
    layout: "default",
  })  
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
