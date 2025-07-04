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
export const IpsBowlSoftServeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-bowl-soft-serve ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bowl-soft-serve" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M257.2 9.9c2.5-6 8.3-9.9 14.8-9.9l36.6 0C367.9 0 416 48.1 416 107.4c0 19.9-6.9 38.1-18.3 52.6l18.3 0c35.3 0 64 28.7 64 64s-28.7 64-64 64L96 288c-35.3 0-64-28.7-64-64s28.7-64 64-64l8.6 0c-5.4-9.4-8.6-20.3-8.6-32c0-35.3 28.7-64 64-64l94.1 0C264 64 272 56 272 46.1c0-4.8-1.9-9.3-5.3-12.7l-6.1-6.1c-4.6-4.6-5.9-11.5-3.5-17.4zM64 320l384 0c8.8 0 16 7.2 16 16l0 8c0 57.4-46.6 104-104 104l-30.1 0 20.4 40.8c1.1 2.3 1.7 4.7 1.7 7.2c0 2.9-.8 5.8-2.4 8.4c-2.9 4.7-8.1 7.6-13.6 7.6l-160 0c-5.5 0-10.7-2.9-13.6-7.6c-1.6-2.6-2.4-5.5-2.4-8.4c0-2.4 .6-4.9 1.7-7.2L182.1 448 152 448C94.6 448 48 401.4 48 344l0-8c0-8.8 7.2-16 16-16z" })] })));
};
export default IpsBowlSoftServeIcon;
//# sourceMappingURL=ips-bowl-soft-serve.js.map