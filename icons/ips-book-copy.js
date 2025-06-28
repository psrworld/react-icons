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
export const IpsBookCopyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-book-copy ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-book-copy" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M160 96L96 96C43 96 0 139 0 192L0 416c0 53 43 96 96 96l224 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0-32 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l81.1 0c-10.9-18.8-17.1-40.7-17.1-64l0-224zM320 416l32 0 160 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L512 0 288 0c-53 0-96 43-96 96l0 224c0 24.6 9.2 47 24.4 64c17.6 19.6 43.1 32 71.6 32l32 0zm-64-96c0-17.7 14.3-32 32-32l96 0 96 0 0 64-96 0-96 0c-17.7 0-32-14.3-32-32z" })] })));
};
export default IpsBookCopyIcon;
//# sourceMappingURL=ips-book-copy.js.map