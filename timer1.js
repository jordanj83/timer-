// process.stdout.write('\x07');

let input = process.argv.slice(2)

for(const step of input) {
  if (step >= 0 ) {
  let delay = step * 1000 
  setTimeout(() => process.stdout.write('\x07'), step)
  } else if ( step < 0) {
    return}
  

}