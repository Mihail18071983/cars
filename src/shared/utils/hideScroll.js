export const hideScroll = (func) => { 
    const body = document.querySelector("body");
    func
        ? body.classList.add("overflow-hidden")
        : body.classList.remove("overflow-hidden");
}

