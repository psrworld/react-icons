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
export const IpsJugIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-jug ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-jug" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 0L288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L160 64c-17.7 0-32-14.3-32-32s14.3-32 32-32zM400 168c0-13.3-10.7-24-24-24c-10.3 0-19.1 6.5-22.5 15.6l25.1 32.2c12.1-1.3 21.4-11.5 21.4-23.9zm-89.3-63.3l11.8 15.1C335.7 105.2 354.8 96 376 96c39.8 0 72 32.2 72 72c0 29.2-17.4 54.3-42.3 65.6c6.8 15.8 10.3 32.9 10.3 50.3L416 448c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-164.1c0-28.5 9.5-56.1 27-78.6l78.3-100.7c2.1-2.6 3.7-5.6 4.8-8.7l163.9 0c1.1 3.1 2.7 6 4.8 8.7zM128 288c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-192 0z" })] })));
};
export default IpsJugIcon;
//# sourceMappingURL=ips-jug.js.map