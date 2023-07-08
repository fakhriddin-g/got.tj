import { reloadHeader } from "../../modules/header"
import { reloadRightColumn, reloadStudyPage } from "../../modules/ui"

let header = document.querySelector('.header')
let aside = document.querySelector('.aside')

reloadHeader(header)

reloadStudyPage(aside)

reloadRightColumn(0)