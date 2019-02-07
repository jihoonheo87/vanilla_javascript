const items = [
    { name: 'Bike', price: 100},
    { name: 'TV', price: 200},
    { name: 'Album', price: 10},
    { name: 'Book', price: 5},
    { name: 'Phone', price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25}
  ] 
  console.log(items)
  
  '1.0 filter'
  const filteredItem = items.filter((item) => {
    return item.price <= 300
  })
  console.log(filteredItem);
  
  '2.0 Map'
  const itemNames = items.map((item) => {
    return item.price 
  })
  console.log(itemNames);
  
  '3.0 find'
  const findItem = items.find((item) => {
    return item.name === 'Book'
  })
  console.log(findItem);
  
  '4.0 for each -> not making new array' 
  items.forEach((item) => {
    console.log(item.name)
  })
  
  '5.0 some - > true or false for item'
  const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
  })
  console.log(hasInexpensiveItems)
  
  '6.0 every -> true or false for all'
  const hasExpensiveItems = items.every((item) => {
    return item.price >= 500
  })
  console.log(hasExpensiveItems)
  
  '7.0 total - > accumulated number of array'
  const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
  } , 0)
  
  console.log(total)
  
  '8.0 include - > Check the array'
  const numbers = [ 1,2,3,4,5]
  const includeTwo = numbers.includes(2)
  console.log(includeTwo)