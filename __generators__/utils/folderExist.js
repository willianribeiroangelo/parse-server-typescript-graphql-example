/**
* componentExists
*
* Check whether the given component exist in either the components or containers directory
*/

const fs = require('fs')

function folderExist(comp, folder = 'components') {
    const pageComponents = fs.readdirSync(`src/${folder}`)
    const pageContainers = fs.readdirSync('src/containers')
    const components = pageComponents.concat(pageContainers)
    return components.indexOf(comp) >= 0
}

module.exports = folderExist
