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
export const IpsSensorOnIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-sensor-on ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sensor-on" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm88 0c-13.3 0-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24zm96 0c-13.3 0-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24zm413.3 12l-48 32c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l48-32c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3zM536 232l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm13.3 140l48 32c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32c-11-7.4-14-22.3-6.7-33.3s22.3-14 33.3-6.7z" })] })));
};
export default IpsSensorOnIcon;
//# sourceMappingURL=ips-sensor-on.js.map