
let toCamelCase = str => str.split('')
                            .map((current,index,array) => array[index-1].match(/-|_/)?current=current.toUpperCase():current)
                            .filter(current => current!==('_')).join('');                            
console.log(`  ${toCamelCase('Snow_on_the_golan')}`);
