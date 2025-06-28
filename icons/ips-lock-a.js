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
export const IpsLockAIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-lock-a ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lock-a" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 64c44.2 0 80 35.8 80 80l0 48-160 0 0-48c0-44.2 35.8-80 80-80zM80 144l0 48-16 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-16 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144zm49.7 280.8L209.6 265c.8-1.6 1.8-3 3-4.3c1.4-1.5 3.1-2.6 5-3.4c2.1-.9 4.2-1.3 6.4-1.3s4.3 .4 6.4 1.3c1.8 .8 3.5 1.9 5 3.4c1.3 1.3 2.3 2.7 3.1 4.3l79.9 159.9c4 7.9 .7 17.5-7.2 21.5s-17.5 .7-21.5-7.2L270.1 400l-92.2 0-19.6 39.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5zM193.9 368l60.2 0L224 307.8 193.9 368z" })] })));
};
export default IpsLockAIcon;
//# sourceMappingURL=ips-lock-a.js.map