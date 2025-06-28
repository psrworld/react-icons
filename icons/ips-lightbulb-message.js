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
export const IpsLightbulbMessageIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-lightbulb-message ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lightbulb-message" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 288l0 96-144 0c-9.6-31.9-29.5-59.1-49.2-86.2c0 0 0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 16.6-2.3 32.7-6.6 48L320 224c-35.3 0-64 28.7-64 64zM112 416l144 0c0 14.4 4.8 27.7 12.8 38.4C259.1 487.7 228.4 512 192 512c-44.2 0-80-35.8-80-80l0-16zm0-240c0-44.2 35.8-80 80-80c8.8 0 16-7.2 16-16s-7.2-16-16-16C130.1 64 80 114.1 80 176c0 8.8 7.2 16 16 16s16-7.2 16-16zm432 80c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0 0 48c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L393.4 448 320 448c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l224 0z" })] })));
};
export default IpsLightbulbMessageIcon;
//# sourceMappingURL=ips-lightbulb-message.js.map