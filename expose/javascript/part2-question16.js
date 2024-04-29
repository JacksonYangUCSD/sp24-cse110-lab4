for (let prop in statistics) {
  let value = statistics[prop];
  if(prop.startsWith('r') || value% 2 !== 0){
    console.log(value);
  }
}