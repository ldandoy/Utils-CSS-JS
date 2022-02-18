import {atom} from 'recoil'

const ThemeState = atom({
    key: "ThemeMode",
    default: (localStorage.getItem('isDark') === 'true')
})

export default ThemeState