const fs = require('fs')
const Path = require('path')
const ts = require('typescript')

const clearFileImportScss = (currentPath) => {
    const fsContent = fs.readFileSync(currentPath, 'utf-8')
    const sourceFile = ts.createSourceFile(currentPath, fsContent, ts.ScriptTarget.ES2020)
    // console.log(sourceFile, 'sourceFile')
    sourceFile.forEachChild(v => {
        if (ts.isImportDeclaration(v)) {
            const { text }= v.moduleSpecifier
            if (text.split('.').at(-1) === 'scss') {
                const importText = fsContent.slice(v.pos, v.end)
                const newContent = fsContent.replace(importText, '')
                fs.writeFileSync(currentPath, newContent, 'utf-8')
            }
        }
    })
}

const clearJsxClassName = (currentPath) => {
    const fsContent = fs.readFileSync(currentPath, 'utf-8')
    const allClassName = /className=\{styles\[.+?\]\}/g
    const classNameAssign = /className=\>/

    // const newContent = fsContent.replace(allClassName, '')
    const newContent = fsContent.replace(classNameAssign, '>')
    fs.writeFileSync(currentPath, newContent, 'utf-8')
    // const classNames = fsContent.matchAll(/className=\{styles\[.+?\]\}/g)
    // for(let className of classNames ) {
    //     console.log(className, 'className')
    //     const newContent = fsContent.replace(className[0], '')
    //     fs.writeFileSync(currentPath, newContent, 'utf-8')
    // }
}

function clearSrcFileScss(path) {
    const files = fs.readdirSync(path)

    files.forEach((v, i) => {
        const currentPath = `${path}/${v}`
        const stat = fs.statSync(currentPath)
        if (stat.isDirectory()) {
            clearSrcFileScss(currentPath) 
        } else if (stat.isFile()){
            const fileExt = Path.extname(v) 
            if (fileExt === '.tsx') {
                // console.log(fsContent, 'fsContent')
                // clearFileImportScss(currentPath)
                clearJsxClassName(currentPath)
            }
        } else {
            return
        }
    })
}

clearSrcFileScss('./src')