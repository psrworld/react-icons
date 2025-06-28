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
export const IpsAcornIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-acorn ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-acorn" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M262.4 4.8c10.6 8 12.8 23 4.8 33.6l-4.8 6.4c-4.4 5.9-7.9 12.4-10.3 19.2L352 64c53 0 96 43 96 96c0 17.7-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32c0-53 43-96 96-96l106.4 0C206 46.7 213.3 30.3 224 16l4.8-6.4c8-10.6 23-12.8 33.6-4.8zM213.9 476.4C78.5 425.9 48 302.1 48 224l176 0 176 0c0 78.1-30.5 201.9-165.9 252.4c-6.5 2.4-13.7 2.4-20.2 0z" })] })));
};
export default IpsAcornIcon;
//# sourceMappingURL=ips-acorn.js.map