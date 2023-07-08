import { reloadHeader } from "../../modules/header"
import { reloadActivityPage, reloadRightColumn } from "../../modules/ui"

let header = document.querySelector('.header')
let aside = document.querySelector('.aside')

reloadHeader(header)

reloadActivityPage(aside)

reloadRightColumn(0)