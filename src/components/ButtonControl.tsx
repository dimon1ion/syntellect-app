import {
  ButtonControlViewModel,
  ButtonProps,
} from "../viewModels/ButtonControlViewModel";
import { observer } from "mobx-react-lite";

interface ButtonControlProps {
  leftButtons?: ButtonProps[];
  rightButtons?: ButtonProps[];
  viewModel: ButtonControlViewModel;
}

const ButtonControl: React.FC<ButtonControlProps> = observer(({
  leftButtons = [],
  rightButtons = [],
  viewModel,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginTop: "6px" }}>
      {leftButtons.map((button, index) => (
        <button key={`l-${index}`} onClick={button.callback}>
          {button.text}
        </button>
      ))}

      <input
        type="text"
        value={viewModel.text}
        onChange={(e) => viewModel.setText(e.target.value)}
      />

      {rightButtons.map((button, index) => (
        <button key={`r-${index}`} onClick={button.callback}>
            {button.text}
        </button>
      ))}
    </div>
  );
});

export default ButtonControl;