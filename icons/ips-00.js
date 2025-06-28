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
export const Ips00Icon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-00 ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-00" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M144 32C64.5 32 0 96.5 0 176L0 336c0 79.5 64.5 144 144 144s144-64.5 144-144l0-160c0-79.5-64.5-144-144-144zM64 176c0-44.2 35.8-80 80-80s80 35.8 80 80l0 160c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-160zM496 32c-79.5 0-144 64.5-144 144l0 160c0 79.5 64.5 144 144 144s144-64.5 144-144l0-160c0-79.5-64.5-144-144-144zM416 176c0-44.2 35.8-80 80-80s80 35.8 80 80l0 160c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-160z" })] })));
};
export default Ips00Icon;
//# sourceMappingURL=ips-00.js.map