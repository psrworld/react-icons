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
export const IpsSealExclamationIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-seal-exclamation ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-seal-exclamation" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M222.1 17.9c18.7-18.7 49.1-18.7 67.9 0L336 64l64 0c26.5 0 48 21.5 48 48l0 64 45.6 45.6c18.7 18.7 18.7 49.1 0 67.9L448 335.1l0 64.9c0 26.5-21.5 48-48 48l-64.9 0-45.1 45.1c-18.7 18.7-49.1 18.7-67.9 0L176.9 448 112 448c-26.5 0-48-21.5-48-48l0-64.9L18.4 289.5c-18.7-18.7-18.7-49.1 0-67.9L64 176l0-64c0-26.5 21.5-48 48-48l64 0 46.1-46.1zM256 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" })] })));
};
export default IpsSealExclamationIcon;
//# sourceMappingURL=ips-seal-exclamation.js.map