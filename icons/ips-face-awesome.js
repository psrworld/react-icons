var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const IpsFaceAwesomeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-face-awesome ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-face-awesome" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm203.5-95.6c-5.6 9.4-15.8 15.6-27.5 15.6c-17.7 0-32-14.3-32-32c0-9.1 3.8-17.4 10-23.2c-3.3-.5-6.6-.8-10-.8c-35.3 0-64 28.7-64 64l0 10.3c0 16.4 13.3 29.7 29.7 29.7l68.6 0c16.4 0 29.7-13.3 29.7-29.7l0-10.3c0-8.3-1.6-16.3-4.5-23.6zM384 176c-17.7 0-32-14.3-32-32c0-8.5 3.3-16.3 8.8-22c-5.4-1.3-11-2-16.8-2c-39.8 0-72 32.2-72 72l0 7.5c0 13.5 11 24.5 24.5 24.5l95.1 0c13.5 0 24.5-11 24.5-24.5l0-7.5c0-10.4-2.2-20.2-6.1-29.1c-5.8 8-15.2 13.1-25.9 13.1zM245.5 447.8c2.7 .1 5.4 .2 8.1 .2l4.9 0c55.1 0 105.1-26.1 137-67.5c0 0 0 0 0 0c15.7-20.5 27-44.6 32.4-71.3c2.2-11-6.2-21.2-17.4-21.2c0 0 0 0 0 0l-308.8 0s0 0 0 0c-11.2 0-19.6 10.2-17.4 21.2c15.6 78.1 82.4 135 161.2 138.6zm-5.4-32.5c1.5-44.1 37.8-79.4 82.2-79.4c19.9 0 38.1 7 52.3 18.7C349 392.1 306.1 416 258.4 416l-4.9 0c-4.6 0-9.1-.2-13.5-.6z" })] })));
};
export default IpsFaceAwesomeIcon;
//# sourceMappingURL=ips-face-awesome.js.map