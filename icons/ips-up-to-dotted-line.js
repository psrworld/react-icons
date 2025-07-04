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
export const IpsUpToDottedLineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-up-to-dotted-line ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-up-to-dotted-line" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 64A32 32 0 1 1 0 64a32 32 0 1 1 64 0zm64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM256 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm96 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM73.9 262.1L196.7 139.3c7.2-7.2 17.1-11.3 27.3-11.3s20.1 4.1 27.3 11.3L374.1 262.1c6.4 6.4 9.9 15 9.9 24c0 18.7-15.2 33.9-33.9 33.9L288 320l0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128-62.1 0C79.2 320 64 304.8 64 286.1c0-9 3.6-17.6 9.9-24z" })] })));
};
export default IpsUpToDottedLineIcon;
//# sourceMappingURL=ips-up-to-dotted-line.js.map