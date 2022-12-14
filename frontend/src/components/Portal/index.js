import ReactDOM from "react-dom";

export const Portal = ({children}) => {
    const container = document.createElement('div')
    return ReactDOM.createPortal(container, children)
}
