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
export const IpsCardsBlankIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-cards-blank ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-cards-blank" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M27.8 118.8C1.2 134.2-7.9 168.2 7.5 194.9l167 289.3c15.4 26.6 49.4 35.8 76.1 20.4L443.4 393.2c26.6-15.4 35.8-49.4 20.4-76.1L296.8 27.8C281.4 1.2 247.3-7.9 220.7 7.5L27.8 118.8zM459.4 420.9L324.1 499c9.7 8.1 22.2 13 35.9 13l224 0c30.9 0 56-25.1 56-56l0-336c0-30.9-25.1-56-56-56L360 64c-1.8 0-3.5 .1-5.3 .2L491.5 301.1c24.2 41.9 9.8 95.6-32.1 119.8z" })] })));
};
export default IpsCardsBlankIcon;
//# sourceMappingURL=ips-cards-blank.js.map