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
export const IpsSimCardsIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-sim-cards ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sim-cards" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 0C124.7 0 96 28.7 96 64l0 288c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-210.7c0-17-6.7-33.3-18.7-45.3L352 18.7C340 6.7 323.7 0 306.7 0L160 0zm48 144l0 48-48 0 0-16c0-17.7 14.3-32 32-32l16 0zm-48 80l64 0 96 0 64 0 0 48-64 0-96 0-64 0 0-48zm224-32l-48 0 0-48 16 0c17.7 0 32 14.3 32 32l0 16zm-80-48l0 48-64 0 0-48 64 0zm80 160l0 16c0 17.7-14.3 32-32 32l-16 0 0-48 48 0zm-80 48l-64 0 0-48 64 0 0 48zm-96 0l-16 0c-17.7 0-32-14.3-32-32l0-16 48 0 0 48zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 376c0 75.1 60.9 136 136 136l224 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-224 0c-48.6 0-88-39.4-88-88l0-256z" })] })));
};
export default IpsSimCardsIcon;
//# sourceMappingURL=ips-sim-cards.js.map