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
export const IpsHoseIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-hose ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-hose" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M288 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-2.3 80.2-11.5C417.3 98 423.9 104 432 104c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16c-8.1 0-14.7 6-15.8 13.7L336 26.3l0-2.3c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 80zM64 176c0-44.2 35.8-80 80-80l112 0 0-64L144 32C64.5 32 0 96.5 0 176s64.5 144 144 144l272 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-272 0c-44.2 0-80-35.8-80-80zM32 352c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 352zm0 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" })] })));
};
export default IpsHoseIcon;
//# sourceMappingURL=ips-hose.js.map