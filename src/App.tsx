import React from "react";
import "./App.css";
import { ButtonControlViewModel } from "./viewModels/ButtonControlViewModel";
import ButtonControl from "./components/ButtonControl";
import AutoCompleteControl from "./components/AutoCompleteControl";
import { AutoCompleteViewModel } from "./viewModels/AutoCompleteViewModel";

function App() {
  const buttonViewModel1 = new ButtonControlViewModel();
  const buttonViewModel2 = new ButtonControlViewModel();
  const autoCompleteViewModel = new AutoCompleteViewModel();

  return (
    <div style={{display: "flex", flexDirection: "column", height: "100dvh", justifyContent: "center", alignItems: "center"}}>
      <h1>Контролы</h1>
      <ButtonControl
        viewModel={buttonViewModel1}
        rightButtons={[
          { text: "Очистить", callback: () => buttonViewModel1.clearText() },
          {
            text: "Привет!",
            callback: () => buttonViewModel1.setTextToHelloWorld(),
          },
        ]}
      />
      <ButtonControl
        viewModel={buttonViewModel2}
        rightButtons={[
          {
            text: "Показать текст",
            callback: () => buttonViewModel2.showAlert(),
          },
          { text: "Очистить", callback: () => buttonViewModel2.clearText() },
        ]}
      />
      <div style={{marginTop: "20px"}}>
        <button onClick={() => autoCompleteViewModel.setMaxSuggestions(3)}>
          Максимум 3 подсказки
        </button>
        <button onClick={() => autoCompleteViewModel.setMaxSuggestions(10)}>
          Максимум 10 подсказок
        </button>
        <AutoCompleteControl viewModel={autoCompleteViewModel} />
      </div>
    </div>
  );
}

export default App;
