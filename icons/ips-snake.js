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
export const IpsSnakeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-snake ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-snake" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M483.4 65.7L403.6 25.8c-30.8-15.4-68-9.4-92.3 15L288 64 176 64C96.5 64 32 128.5 32 208s64.5 144 144 144l144 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-63.9 0-.1 0-144.4 0c-10.3 0-20.6 1.7-30.4 4.9l-66 22C6.1 446 0 454.4 0 464s6.1 18 15.2 21.1l66 22c9.8 3.3 20 4.9 30.4 4.9l64.3 0 .1 0 144 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-144 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l112 0 23.2 23.2c24.3 24.3 61.5 30.4 92.3 15l79.8-39.9c17.5-8.8 28.6-26.7 28.6-46.3s-11.1-37.5-28.6-46.3zM352 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" })] })));
};
export default IpsSnakeIcon;
//# sourceMappingURL=ips-snake.js.map