import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    color: #222222;
    font-family: 'Proxima Nova', 'Helvetica', 'Arial', sans-serif;
    font-size: 18px;
    margin: 0;
  }

  input, select {
    padding: 5px 15px;
    color: #444444;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
  }

  .form-group input[type="text"], .form-group select {
    width: 100%;
  }

  .answer {
    display: flex;
    justify-content: stretch;
    align-items: center;
  }

  .answer > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

  .answer > div input {
    margin-right: 15px;
  }

  .answer button {
    display: flex;
    align-items: center;
  }

  .actions {
    background: rgba(255,255,255, 0.8);
    position: fixed;
    width: 100%;
    right: 0;
    bottom: 0;
    padding: 25px;
    text-align: center;
    border: 1px solid #ccc;
  }
  .text-right {
    text-align: right;
  }
`;

export default GlobalStyle;
