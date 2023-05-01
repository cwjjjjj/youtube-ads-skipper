import { css } from "@emotion/react";

function App() {
  return (
    <div
      css={css`
        height: 200px;
        width: 200px;
        display: grid;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
      `}
    >
      <div>youtube ads skipper</div>
    </div>
  );
}

export default App;
