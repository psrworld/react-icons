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
export const IpsPaperPlaneTopIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-paper-plane-top ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-paper-plane-top" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M57.6 35.8C23.1 20.6-11.3 57.4 6.1 90.9l63 121.2c4.4 8.4 12.6 14.1 22 15.3c0 0 0 0 0 0L266 249.3c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7L91.1 284.6s0 0 0 0c-9.4 1.2-17.6 6.9-22 15.3L6.1 421.1c-17.4 33.5 17 70.2 51.6 55.1L492.9 285.3c25.5-11.2 25.5-47.4 0-58.6L57.6 35.8z" })] })));
};
export default IpsPaperPlaneTopIcon;
//# sourceMappingURL=ips-paper-plane-top.js.map