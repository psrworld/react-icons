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
export const IpsRectangleVerticalHistoryIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-rectangle-vertical-history ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-rectangle-vertical-history" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 0c-35.3 0-64 28.7-64 64l0 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L256 0zM96 72l0 368c0 13.3 10.7 24 24 24s24-10.7 24-24l0-368c0-13.3-10.7-24-24-24s-24 10.7-24 24zM0 120L0 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-272c0-13.3-10.7-24-24-24S0 106.7 0 120z" })] })));
};
export default IpsRectangleVerticalHistoryIcon;
//# sourceMappingURL=ips-rectangle-vertical-history.js.map