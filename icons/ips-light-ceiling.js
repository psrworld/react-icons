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
export const IpsLightCeilingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-light-ceiling ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-light-ceiling" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 0c17.7 0 32 14.3 32 32l0 130c115.8 14.4 207.6 106.3 222 222.1c2.2 17.5-12.4 31.9-30 31.9L32 416C14.3 416-.2 401.6 2 384.1C16.4 268.2 108.2 176.4 224 162l0-130c0-17.7 14.3-32 32-32zm0 512c-35.3 0-64-28.7-64-64l128 0c0 35.3-28.7 64-64 64z" })] })));
};
export default IpsLightCeilingIcon;
//# sourceMappingURL=ips-light-ceiling.js.map