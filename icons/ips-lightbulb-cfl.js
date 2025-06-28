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
export const IpsLightbulbCflIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 320 512", fill: color, className: `react-icon solid-icon ips-lightbulb-cfl ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lightbulb-cfl" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M167.8 63c17.1-4.3 27.6-21.7 23.3-38.8S169.4-3.3 152.2 1L24.2 33C7.1 37.2-3.3 54.6 1 71.8S22.6 99.3 39.8 95l128-32zM319 88.2c-4.3-17.1-21.7-27.6-38.8-23.3l-256 64C7.1 133.2-3.3 150.6 1 167.8s21.7 27.6 38.8 23.3l256-64c17.1-4.3 27.6-21.7 23.3-38.8zM295.8 223c17.1-4.3 27.6-21.7 23.3-38.8s-21.7-27.6-38.8-23.3l-256 64C7.1 229.2-3.3 246.6 1 263.8s21.7 27.6 38.8 23.3l256-64zM64 416l0 32c0 17.7 14.3 32 32 32l32 0c0 17.7 14.3 32 32 32s32-14.3 32-32l32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-80 0 0-90L96 306l0 78c-17.7 0-32 14.3-32 32zM319 280.2c-4.3-17.1-21.7-27.6-38.8-23.3l-64 16-16 4c-13.2 3.3-22.4 14.3-24 27l-.2 0 0 3.3c0 .5 0 .9 0 1.4l0 75.3 48 0 0-47 7.8-1.9 64-16c17.1-4.3 27.6-21.7 23.3-38.8z" })] })));
};
export default IpsLightbulbCflIcon;
//# sourceMappingURL=ips-lightbulb-cfl.js.map