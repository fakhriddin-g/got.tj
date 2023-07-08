import { reloadHeader } from "../../modules/header"
import { reloadActivityPage, reloadContactPage, reloadRightColumn } from "../../modules/ui"

let header = document.querySelector('.header')
let aside = document.querySelector('.aside')

reloadHeader(header)

reloadContactPage(aside)

reloadRightColumn(0)