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
export const IpsPersonSeatIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-person-seat ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-person-seat" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M144 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 160l0-32 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-66.7 0c-6.6-18.6-24.4-32-45.3-32c-26.5 0-48 21.5-48 48l0 80c0 35.3 28.7 64 64 64l85.6 0c8.1 0 14.9 6 15.9 14l10.7 86c2 16 15.6 28 31.8 28l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-19.8 0L325 358.1c-5-40-39-70.1-79.4-70.1L192 288zM64 160c0-17.7-14.3-32-32-32s-32 14.3-32 32L0 320c0 70.7 57.3 128 128 128l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-35.3 0-64-28.7-64-64l0-160z" })] })));
};
export default IpsPersonSeatIcon;
//# sourceMappingURL=ips-person-seat.js.map