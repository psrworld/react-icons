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
export const IpsFaceThinkingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-face-thinking ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-face-thinking" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M512 256c0 141.4-114.6 256-256 256c-10.6 0-21.1-.6-31.4-1.9c4-5.7 7.3-12 9.8-18.8l21-57.7 35.8-13c23.9-8.7 38.3-32 36.8-56.1c-1.3-24.4-16.5-46.1-39.2-55.6L166.2 257.3c-8.1-3.4-17.5 .4-21 8.5s.4 17.5 8.5 21l82.4 34.7L144 355l0-3c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 28C11.6 343.3 0 301 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256zM208.4 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm128 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM143 121.9c23.5-13.4 52.9-10.6 73.4 7l13.2 11.3c6.7 5.8 16.8 5 22.6-1.7s5-16.8-1.7-22.6l-13.2-11.3C206.4 78.1 162.3 74 127.1 94.1l-7.1 4c-7.7 4.4-10.3 14.2-6 21.8s14.2 10.3 21.8 6l7.1-4zM112 352l0 48.6 151.8-55.2c12.5-4.5 26.2 1.9 30.8 14.4s-1.9 26.2-14.4 30.8l-49.8 18.1-26.1 71.7c-6.9 19-24.9 31.6-45.1 31.6L112 512c-26.5 0-48-21.5-48-48l0-112c0-13.3 10.7-24 24-24s24 10.7 24 24z" })] })));
};
export default IpsFaceThinkingIcon;
//# sourceMappingURL=ips-face-thinking.js.map