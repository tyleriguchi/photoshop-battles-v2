
const formatData = ({data: {data}}) => {
  console.log('data', data)
  return data.children.map( child => {
    return child.data
  })
}

export default formatData
