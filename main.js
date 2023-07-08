import { reloadHeader } from "./modules/header"
import { reloadLeftColumn, reloadRightColumn } from "./modules/ui"

let header = document.querySelector('.header')
let aside = document.querySelector('.aside')

reloadHeader(header)
reloadLeftColumn(aside)

reloadRightColumn(0)
