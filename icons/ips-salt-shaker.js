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
export const IpsSaltShakerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-salt-shaker ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-salt-shaker" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M319.4 448L64.6 448l36.6-256 181.6 0 36.6 256zM59.8 512l264.5 0c33 0 59.8-26.8 59.8-59.8c0-2.8-.2-5.7-.6-8.5L338.1 126.7C327.7 54 265.4 0 192 0S56.3 54 45.9 126.7L.6 443.8c-.4 2.8-.6 5.6-.6 8.5c0 33 26.8 59.8 59.8 59.8zM192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM128 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM240 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" })] })));
};
export default IpsSaltShakerIcon;
//# sourceMappingURL=ips-salt-shaker.js.map