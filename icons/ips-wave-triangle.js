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
export const IpsWaveTriangleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-wave-triangle ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-wave-triangle" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M176 32c10.1 0 19.6 4.7 25.6 12.8L464 394.7 582.4 236.8c10.6-14.1 30.7-17 44.8-6.4s17 30.7 6.4 44.8l-144 192c-6 8.1-15.5 12.8-25.6 12.8s-19.6-4.7-25.6-12.8L176 117.3 57.6 275.2c-10.6 14.1-30.7 17-44.8 6.4s-17-30.7-6.4-44.8l144-192c6-8.1 15.5-12.8 25.6-12.8z" })] })));
};
export default IpsWaveTriangleIcon;
//# sourceMappingURL=ips-wave-triangle.js.map