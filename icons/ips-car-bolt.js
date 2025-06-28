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
export const IpsCarBoltIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-car-bolt ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-car-bolt" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M74.8 96.3L39.6 196.8C16.4 206.4 0 229.3 0 256L0 400l0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48 320 0 0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48 0-144c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32L165.4 32c-40.8 0-77.1 25.8-90.6 64.3zM96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm288 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM318.3 119.2L281.9 192l54.1 0c6.9 0 13 4.4 15.2 10.9s-.1 13.7-5.6 17.9l-128 96c-5.9 4.5-14.2 4.2-19.9-.5s-7.4-12.8-4.1-19.4L230.1 224 176 224c-6.9 0-13-4.4-15.2-10.9s.1-13.7 5.6-17.9l128-96c5.9-4.5 14.2-4.2 19.9 .5s7.4 12.8 4.1 19.4z" })] })));
};
export default IpsCarBoltIcon;
//# sourceMappingURL=ips-car-bolt.js.map