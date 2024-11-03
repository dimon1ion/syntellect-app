import { observer } from "mobx-react-lite";
import { AutoCompleteViewModel } from "../viewModels/AutoCompleteViewModel";

interface AutoCompleteControlProps {
  viewModel: AutoCompleteViewModel;
}

const AutoCompleteControl: React.FC<AutoCompleteControlProps> = observer(
  ({ viewModel }) => (
    <div>
      <input
        type="text"
        value={viewModel.input}
        onChange={(e) => viewModel.updateInput(e.target.value)}
      />
      <ul>
        {viewModel.suggestions.map((suggestion, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              columnGap: "10px",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => viewModel.updateInput(suggestion.fullName)}
          >
            <span>{suggestion.name}</span>
            <span>{suggestion.fullName}</span>
            <img
              src={suggestion.flag}
              alt="flag"
              height={"16px"}
              width={"24px"}
            />
          </li>
        ))}
      </ul>
    </div>
  )
);

export default AutoCompleteControl;
