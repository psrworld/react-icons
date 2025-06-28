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
export const IpsScalpelIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-scalpel ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-scalpel" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M387.4 25.1C400.8 9.2 420.6 0 441.4 0c39 0 70.6 31.6 70.6 70.6l0 4c0 17.6-6.2 34.6-17.6 48.1L369.3 271c-9.1 10.8-22.5 17-36.7 17L200 288c-6.2 0-11.9-3.6-14.5-9.3s-1.7-12.3 2.3-17.1L387.4 25.1zM169.4 320l6.6 0 96 0 16 0 0 16c0 74.9-65.5 118.6-126.1 142.9C100.1 503.6 34.1 512 16 512c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l160-160 4.7-4.7z" })] })));
};
export default IpsScalpelIcon;
//# sourceMappingURL=ips-scalpel.js.map