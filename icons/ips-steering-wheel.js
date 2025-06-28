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
export const IpsSteeringWheelIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-steering-wheel ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-steering-wheel" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 358.9l0 86.5C143.6 431.9 80.1 368.4 66.7 288l102.2 0L224 358.9zm64 0L343.1 288l102.2 0C431.9 368.4 368.4 431.9 288 445.3l0-86.5zM352 224l-7.2-14.3c-5.4-10.8-16.5-17.7-28.6-17.7l-120.4 0c-12.1 0-23.2 6.8-28.6 17.7L160 224l-93.3 0C81.9 133.2 160.9 64 256 64s174.1 69.2 189.3 160L352 224zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" })] })));
};
export default IpsSteeringWheelIcon;
//# sourceMappingURL=ips-steering-wheel.js.map