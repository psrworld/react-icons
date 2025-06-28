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
export const IpsSimCardIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-sim-card ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sim-card" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M64 0L242.7 0c17 0 33.3 6.7 45.3 18.7L365.3 96c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zM96 192c-17.7 0-32 14.3-32 32l0 32 64 0 0-64-32 0zM64 352l80 0 96 0 80 0 0-64-80 0-96 0-80 0 0 64zM320 224c0-17.7-14.3-32-32-32l-32 0 0 64 64 0 0-32zM160 192l0 64 64 0 0-64-64 0zM288 448c17.7 0 32-14.3 32-32l0-32-64 0 0 64 32 0zM160 384l0 64 64 0 0-64-64 0zM64 416c0 17.7 14.3 32 32 32l32 0 0-64-64 0 0 32z" })] })));
};
export default IpsSimCardIcon;
//# sourceMappingURL=ips-sim-card.js.map