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
export const IpsLeftLongToLineIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-left-long-to-line ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-left-long-to-line" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32L64 96c0-17.7-14.3-32-32-32S0 78.3 0 96zM279.5 409.4c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-72 288 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-288 0 0-72c0-9.6-5.7-18.2-14.5-22s-19-2-26 4.6l-144 136c-4.8 4.5-7.5 10.8-7.5 17.4s2.7 12.9 7.5 17.4l144 136z" })] })));
};
export default IpsLeftLongToLineIcon;
//# sourceMappingURL=ips-left-long-to-line.js.map