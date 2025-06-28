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
export const IpsMaceIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-mace ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-mace" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M244.8 95l28-84.1C275 4.4 281.1 0 288 0s13 4.4 15.2 10.9l28 84.1c40.4 13.5 72.3 45.4 85.8 85.8l84.1 28c6.5 2.2 10.9 8.3 10.9 15.2s-4.4 13-10.9 15.2l-84.1 28c-13.5 40.4-45.4 72.3-85.8 85.8l-28 84.1C301 443.6 294.9 448 288 448s-13-4.4-15.2-10.9l-28-84.1c-9.8-3.3-19-7.6-27.7-12.9L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L171.9 294.9c-5.3-8.6-9.6-17.9-12.9-27.7l-84.1-28C68.4 237 64 230.9 64 224s4.4-13 10.9-15.2l84.1-28c13.5-40.4 45.4-72.3 85.8-85.8zM288 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })] })));
};
export default IpsMaceIcon;
//# sourceMappingURL=ips-mace.js.map