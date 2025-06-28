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
export const IpsHeatIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-heat ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-heat" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M176 32c17.7 0 32 14.3 32 32l0 80c0 34.6 11.2 68.3 32 96l19.2 25.6C288.3 304.4 304 351.5 304 400l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-34.6-11.2-68.3-32-96l-19.2-25.6C159.7 239.6 144 192.5 144 144l0-80c0-17.7 14.3-32 32-32zM32 96c17.7 0 32 14.3 32 32l0 32c0 34.6 11.2 68.3 32 96l19.2 25.6C144.3 320.4 160 367.5 160 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-34.6-11.2-68.3-32-96L44.8 294.4C15.7 255.6 0 208.5 0 160l0-32c0-17.7 14.3-32 32-32zm320 32l0 32c0 34.6 11.2 68.3 32 96l19.2 25.6C432.3 320.4 448 367.5 448 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-34.6-11.2-68.3-32-96l-19.2-25.6C303.7 255.6 288 208.5 288 160l0-32c0-17.7 14.3-32 32-32s32 14.3 32 32z" })] })));
};
export default IpsHeatIcon;
//# sourceMappingURL=ips-heat.js.map