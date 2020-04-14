export const addStyle = (id, styleString) => {
    const style = document.createElement('style');
    style.id = id;
    style.textContent = styleString;
    document.head.append(style);
};

export const removeStyle = (id) => {
    const elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
};
