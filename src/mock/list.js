import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600'
})

/* ===============================
   🗄️ Mock Database
=================================*/
let houseDB = Array.from({ length: 50 }).map((_, i) => {
  return {
    id: 'H' + (i + 1),
    name: '房源 ' + (i + 1),
    area: Mock.Random.integer(30, 120) + '㎡',
    price: Mock.Random.integer(8000, 35000),
    city: i % 2 ? '曼谷' : '芭提雅'
  }
})

/* ===============================
   📋 GET List
=================================*/
Mock.mock(/\/api\/house\/list/, 'get', (options) => {

  const url = new URL('http://dummy.com' + options.url)

  const page = Number(url.searchParams.get('page')) || 1
  const pageSize = Number(url.searchParams.get('pageSize')) || 10
  const keyword = url.searchParams.get('keyword') || ''
  const city = url.searchParams.get('city') || ''

  let data = houseDB

  /* keyword search */
  if (keyword) {
    data = data.filter(item =>
      item.name.includes(keyword)
    )
  }

  /* city filter */
  if (city) {
    data = data.filter(item =>
      item.city === city
    )
  }

  const start = (page - 1) * pageSize
  const end = start + pageSize

  return {
    list: data.slice(start, end),
    total: data.length
  }

})

/* ===============================
   🗑️ DELETE
=================================*/
Mock.mock(/\/api\/house\/delete\/.*/, 'delete', (options) => {

  const id = options.url.split('/').pop()

  houseDB = houseDB.filter(item => item.id !== id)

  return {
    success: true,
    message: '删除成功'

    
  }
})


/* ===============================
   ➕ ADD
=================================*/
Mock.mock('/api/house/add', 'post', (options) => {

  const data = JSON.parse(options.body)

  houseDB.unshift({
    id: 'H' + (houseDB.length + 1),
    ...data
  })

  return {
    success: true
  }
})