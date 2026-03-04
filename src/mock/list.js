import Mock from 'mockjs'

Mock.mock('/api/house/list', 'get', (options) => {
  const url = new URL('http://dummy.com' + options.url)
  const page = Number(url.searchParams.get('page')) || 1
  const pageSize = Number(url.searchParams.get('pageSize')) || 10

  const total = 50

  const list = Array.from({ length: pageSize }).map((_, i) => {
    const index = (page - 1) * pageSize + i + 1

    return {
      id: 'H' + index,
      city: index % 2 ? '曼谷' : '芭提雅'
    }
  })

  return {
    list,
    total
  }
})