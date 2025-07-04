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
export const IpsPenFieldIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-pen-field ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pen-field" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M601.9 16c-18.8-18.8-49.2-18.7-67.9 0L494.4 55.7l89.3 89.3 39.8-38.9c19.1-18.7 19.2-49.4 .4-68.2L601.9 16zM328.5 221.8c-7 7-12.3 15.6-15.4 25l-23.8 71.3c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l71.5-23.9c9.2-3.1 17.6-8.2 24.5-15L560.8 167.5 471.7 78.4 328.5 221.8zM80 128c-44.2 0-80 35.8-80 80L0 432c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 128zm80 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })] })));
};
export default IpsPenFieldIcon;
//# sourceMappingURL=ips-pen-field.js.map