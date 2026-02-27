import Mock from 'mockjs'

Mock.setup({
  timeout: '300-800'
})

Mock.mock(/\/api\/house\/list.*/, 'get', (options) => {
  const url = new URL('http://x.com' + options.url)
  const page = Number(url.searchParams.get('page')) || 1
  const pageSize = Number(url.searchParams.get('pageSize')) || 10

  const total = 87

  const list = Array.from({ length: pageSize }).map((_, i) => {
    const index = (page - 1) * pageSize + i + 1
    return {
      id: 'A' + index,
      name: `房源 ${index}`,
      city: index % 2 ? '曼谷' : '芭提雅',
      price: 1000000 + index * 1000
    }
  })

  return {
    code: 200,
    data: {
      list,
      total
    }
  }
})