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
export const IpsLocationSmileIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-location-smile ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-location-smile" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM128 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-95.4 84.9c6.2 9.4 29.1 31.1 63.4 31.1s57.1-21.7 63.4-31.1c6.1-9.2 18.5-11.7 27.7-5.5s11.7 18.5 5.5 27.7C277.1 284.4 243.1 316 192 316s-85.1-31.6-96.6-48.9c-6.1-9.2-3.6-21.6 5.5-27.7s21.6-3.6 27.7 5.5z" })] })));
};
export default IpsLocationSmileIcon;
//# sourceMappingURL=ips-location-smile.js.map