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
export const IpsClockDeskIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-clock-desk ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-clock-desk" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 224a224 224 0 1 1 448 0A224 224 0 1 1 0 224zM224 96c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 0-94.1c0-13.3-10.7-24-24-24zm0 384c96.4 0 180.3-53.3 224-132l0 116c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 348c43.7 78.7 127.6 132 224 132z" })] })));
};
export default IpsClockDeskIcon;
//# sourceMappingURL=ips-clock-desk.js.map