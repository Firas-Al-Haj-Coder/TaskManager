import { useEffect, useState } from "react"

export const Header = () => {

  // für die Themes nutzen wir ebenfalls einen Zustand, der auch im LocalStorage gespeichert wird für längere Zeit
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // default theme als light ansonsten, aus dem localstorage

  useEffect(() => {
    document.documentElement.className = theme; //     document.documentElement ist unser <html> root Element
    localStorage.setItem("theme", theme);
  }, [theme]);  // jedes mal wählt ein User ein Theme aus, updaten wir die Class Attribute des HTML Tags


  return (

    <header>

      <div className="logo">
        <img src="/logo512.png" alt="logo"/>
        <span>Taskmanager</span>
      </div> {/*linke Headerseite als einzige Divition mit Space-between Effekt in css*/}

      <div className="themeSelector">
        {/* Man sollte via OnClick das theme ändern, indem man das Theme Zustand settet somit wird via useEffect die klasse gesetzt 
        Die Idee für die Änderung ist in im html Tag Prop <html lang="de" class="theme"></html>
        da soll die Klasse gesetzt werden 
        */}
        <span className= { theme === "light" ? "light active" : "light"} onClick={() => setTheme("light")} ></span> 
        <span className={ theme === "dark" ? "dark active" : "dark"} onClick={() => setTheme("dark")}></span>
        <span className={ theme === "gOne" ? "gOne active" : "gOne"} onClick={() => setTheme("gOne")}></span>
        <span className={ theme === "gTwo" ? "gTwo active" : "gTwo"} onClick={() => setTheme("gTwo")}></span>
        <span className={ theme === "gThree" ? "gThree active" : "gThree"} onClick={() => setTheme("gThree")}></span>
      </div>
      
    </header>
    
    
  )
}
