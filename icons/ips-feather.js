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
export const IpsFeatherIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-feather ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-feather" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57 68 0c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330l0 55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z" })] })));
};
export default IpsFeatherIcon;
//# sourceMappingURL=ips-feather.js.map