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
export const IpsCannonIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-cannon ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-cannon" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M49.1 353.8L26.5 365.1C2.8 376.9-6.8 405.8 5.1 429.5s40.7 33.3 64.4 21.5L92 439.7c42.7 41.2 108.3 53.2 164.4 25.1c6.1-3.2 14.8-8.1 25.4-14.5C265.5 427 256 398.6 256 368c0-79.5 64.5-144 144-144c52.4 0 98.3 28 123.5 69.9c32.9-21.9 62.9-41.9 86-57.4c26.7-17.9 35.7-52.7 21.4-81.5L600.2 93.5c-14.4-28.7-47.7-42.4-78-31.8C414.8 99.3 177.1 183.2 127.6 207.2c-56.1 28-85.9 87.7-78.5 146.6zM400 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-144a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" })] })));
};
export default IpsCannonIcon;
//# sourceMappingURL=ips-cannon.js.map