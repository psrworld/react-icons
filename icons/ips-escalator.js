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
export const IpsEscalatorIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-escalator ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-escalator" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM405.9 175.8C417.5 165.6 432.5 160 448 160l96 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-72 0L234.1 496.2C222.5 506.4 207.5 512 192 512l-96 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l72 0L405.9 175.8zM320 192l0 16.4-128 112L192 192c0-35.3 28.7-64 64-64s64 28.7 64 64z" })] })));
};
export default IpsEscalatorIcon;
//# sourceMappingURL=ips-escalator.js.map