import membershipArr from "./modules/db"
import { reloadHeader } from "./modules/header"
import { management, reloadLeftColumn, reloadRightColumn } from "./modules/ui"

let header = document.querySelector('.header')
let aside = document.querySelector('.aside')
let membership = document.querySelector('.grid')

reloadHeader(header)
reloadLeftColumn(aside)

reloadRightColumn(0)

management(membershipArr ,membership)