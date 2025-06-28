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
export const IpsPersonPinballIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-person-pinball ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-person-pinball" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM96 241.7l0 65.1 49.9 49.9c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L18.7 320C6.7 308 0 291.7 0 274.7l0-88.1C0 154.2 26.2 128 58.6 128c24.1 0 46.5 12 59.9 32l42.6 64 62.9 0c12.9 0 24.1 7.7 29.1 18.7l295-49.2L515.3 95c-2.2-6.5-3.3-13.4-3.3-20.2L512 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 146.2 0 37.8 0 8 0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-320 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192-39.4 0c-16 0-31-8-39.9-21.4L96 241.7zM0 480L0 346.5l64 64L64 480s0 0 0 0c0 17.7-14.3 32-32 32s-32-14.3-32-32zM280 336a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" })] })));
};
export default IpsPersonPinballIcon;
//# sourceMappingURL=ips-person-pinball.js.map