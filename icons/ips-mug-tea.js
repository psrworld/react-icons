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
export const IpsMugTeaIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-mug-tea ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-mug-tea" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M144 64l0 50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6L96 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-66.7c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6L176 64l208 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0 0 32c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L32 96c0-17.7 14.3-32 32-32l80 0zM416 256l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128z" })] })));
};
export default IpsMugTeaIcon;
//# sourceMappingURL=ips-mug-tea.js.map