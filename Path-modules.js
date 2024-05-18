const mod= require('path')

//"Path method- Returns the delimiter used by system to showcase folder, file path
console.log(mod.sep)

//returns normalised path by concatening string of folder name or any string for that matter using system delimiter
const filePath=mod.join('Folder','subfolder','test.txt')
console.log(filePath)

//e.g to show module works on any method but is usually used to normalised path of directories, folder, files from user input or 3rd party since they may have errors
console.log(mod.join(__dirname,'hello','world'))

//e.g to show normalising(error removal)
console.log(mod.join('a/','b'))
console.log(mod.join('a/','/b'))
console.log(mod.join('a','b'))

//"Base method"- Returns basefile name
const base_fileName=mod.basename(filePath)
console.log(base_fileName)

//"Resolve method"- Returns absolute path of current working directory plus normalised sequence of string(generally directory, folder, file name)
const absolute=mod.resolve('Folder','subfolder','test.txt')
console.log(absolute) 