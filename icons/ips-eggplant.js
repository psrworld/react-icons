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
export const IpsEggplantIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-eggplant ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-eggplant" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M505 7c9.4 9.4 9.4 24.6 0 33.9l-9 9L496 192c0 8.8-7.2 16-16 16c-26.5 0-48-21.5-48-48c0-5.8-4-10.7-9.4-12.6c-13.3-4.8-25.4-13-35.1-22.8s-18-21.9-22.8-35.1c-2-5.4-6.9-9.4-12.6-9.4c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16l142.1 0 9-9c9.4-9.4 24.6-9.4 33.9 0zM169.9 139.3c40.3-19.6 81-39.3 113.4-66.6c11.8 20 32.1 34.4 55.9 38.3c6.7 14 15.8 26.3 25.8 36.2s22.2 19.1 36.2 25.8c5 30.4 27.1 55.1 56.2 63.8C410.6 362.7 311.1 512.2 176.4 512C79.9 511.9 1.4 431.3 0 336C-1.6 222.5 83.4 181.3 169.9 139.3z" })] })));
};
export default IpsEggplantIcon;
//# sourceMappingURL=ips-eggplant.js.map