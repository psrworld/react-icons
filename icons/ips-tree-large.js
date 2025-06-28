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
export const IpsTreeLargeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-tree-large ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tree-large" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M62 169.4L210.6 5.9C214 2.1 218.9 0 224 0s10 2.1 13.4 5.9L386 169.4c3.9 4.2 6 9.8 6 15.5c0 12.7-10.3 23.1-23.1 23.1H344l75.5 105.7c2.9 4.1 4.5 9 4.5 14.1c0 13.4-10.9 24.2-24.2 24.2H368l76.2 122c2.5 4 3.8 8.5 3.8 13.2c0 13.7-11.1 24.9-24.9 24.9H24.9C11.1 512 0 500.9 0 487.1c0-4.7 1.3-9.2 3.8-13.2L80 352H48.2C34.8 352 24 341.1 24 327.8c0-5 1.6-10 4.5-14.1L104 208H79.1C66.3 208 56 197.7 56 184.9c0-5.7 2.1-11.3 6-15.5z" })] })));
};
export default IpsTreeLargeIcon;
//# sourceMappingURL=ips-tree-large.js.map