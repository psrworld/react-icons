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
export const IpsSterlingSignIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 320 512", fill: color, className: `react-icon solid-icon ips-sterling-sign ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-sterling-sign" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M112 160.4c0-35.5 28.8-64.4 64.4-64.4c6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4L48 224l-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 44.5c0 17.4-4.7 34.5-13.7 49.4L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L88.5 416l.7-1.1C104.1 390 112 361.5 112 332.5l0-44.5 112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0 0-63.6z" })] })));
};
export default IpsSterlingSignIcon;
//# sourceMappingURL=ips-sterling-sign.js.map