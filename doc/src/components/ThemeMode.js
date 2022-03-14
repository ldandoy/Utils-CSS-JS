import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Icon } from '@iconify/react';

import ThemeState from '../atoms/theme'
import '../styles/ThemeMode.css'

const ThemeMode = () => {
  const [themeMode, setThemeMode] = useRecoilState(ThemeState);
  const [iconColorSun, setIconColorSun] = useState("gold")
  const [iconColorMoon, setIconColorMoon] = useState("808080")


  useEffect(() => {
    const bodyElement = document.querySelector("body");

    themeMode ? bodyElement.classList.add("dark") : bodyElement.classList.remove("dark");
    themeMode ? setIconColorSun("808080") : setIconColorSun(`var(--overconsulting-green-color)`);
    themeMode ? setIconColorMoon(`var(--overconsulting-green-color)`) : setIconColorMoon("808080");

  }, [themeMode]);

  return (
    <div>
      <div className="switch-container">
      <input
            type="checkbox"
            id="switch"
            checked={themeMode || false}
            onChange={() => {
              setThemeMode(!themeMode);
              localStorage.setItem('isDark', !themeMode)
            }}
          />
        <label htmlFor="switch">
            <Icon className="sun" icon="eva:sun-fill" color= {iconColorSun}/>
            <Icon className="moon" icon="eva:moon-fill" color={iconColorMoon}/>
        </label>
      </div>
    </div>
  );
};

export default ThemeMode;
