const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
function appendCat(name) {
    const copie = cats.slice()
    copie.push(name)
    return copie
}
function prependCat(name) {
    const copie = cats.slice()
    copie.unshift(name)
    return copie
}
function removeLastCat(name) {
    const copie = cats.slice(0,2)
  return copie
}
function removeFirstCat(name) {
    const copie = cats.slice(1,3)
  return copie
}
