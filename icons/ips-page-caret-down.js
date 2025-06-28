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
export const IpsPageCaretDownIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-page-caret-down ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-page-caret-down" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M320 512c35.3 0 64-28.7 64-64l0-309.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0zM192 352c-4.5 0-8.8-1.9-11.8-5.2l-75.7-82.6c-14.1-15.4-3.2-40.2 17.7-40.2l139.6 0c20.9 0 31.8 24.8 17.7 40.2l-75.7 82.6c-3 3.3-7.3 5.2-11.8 5.2z" })] })));
};
export default IpsPageCaretDownIcon;
//# sourceMappingURL=ips-page-caret-down.js.map