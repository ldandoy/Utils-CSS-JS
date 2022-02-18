import {atom} from 'recoil'

const ThemeState = atom({
    key: "ThemeMode",
    default: parseBool(localStorage.getItem('isDark'))
})

export default ThemeState