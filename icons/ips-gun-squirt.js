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
export const IpsGunSquirtIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-gun-squirt ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-gun-squirt" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M128 56c0-13.3-10.7-24-24-24S80 42.7 80 56l0 9.3C34.6 72.9 0 112.4 0 160c0 47.3 34.3 86.7 79.4 94.6L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480l104 0c14.7 0 27.5-10 31-24.2L219 376l53 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-41 0 18-72 199 0c41.8 0 77.4-26.7 90.5-64l13.5 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-13.5 0C525.4 90.7 489.8 64 448 64L128 64l0-8zM96 128l352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 192c-17.7 0-32-14.3-32-32s14.3-32 32-32z" })] })));
};
export default IpsGunSquirtIcon;
//# sourceMappingURL=ips-gun-squirt.js.map