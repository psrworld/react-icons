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
export const IpsChartBulletIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-chart-bullet ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-chart-bullet" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M264 32c13.3 0 24 10.7 24 24l0 8 176 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-176 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8L48 224c-26.5 0-48-21.5-48-48l0-64C0 85.5 21.5 64 48 64l192 0 0-8c0-13.3 10.7-24 24-24zM160 128l0 32 80 0 0-32-80 0zm128 0l0 32 160 0 0-32-160 0zm48 256l0-32-80 0 0 32 80 0zm0 64L48 448c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48l288 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 80 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-80 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8zm48-96l0 32 64 0 0-32-64 0z" })] })));
};
export default IpsChartBulletIcon;
//# sourceMappingURL=ips-chart-bullet.js.map