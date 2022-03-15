import React, {useLayoutEffect, useState} from "react";
import Home from "./pages/home/Home";


const App: React.FC = () => {

  const [isWidgetVisible, setWidgetVisibility] = useState(false)

  const toggleHyphenWidgetVisibility = () => {
    setWidgetVisibility(value => !value)
  }

  useLayoutEffect(() => {
    //@ts-ignore
    window.toggleHyphenWidgetVisibility = toggleHyphenWidgetVisibility
  }, [])

  if(!isWidgetVisible) return <span/>

  return (
      <Home/>
  );
};

export default App;
