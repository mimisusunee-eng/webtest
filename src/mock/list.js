export function getList({ page = 1, pageSize = 10 }) {
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

  return Promise.resolve({
    list,
    total
  })
}
