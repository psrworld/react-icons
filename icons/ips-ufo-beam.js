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
export const IpsUfoBeamIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-ufo-beam ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ufo-beam" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M184 152s24 40 104 40s104-40 104-40c0-48-33.3-104-104-104s-104 56-104 104zm-42.6-40.4C159.1 47.2 218.1 0 288 0s128.9 47.2 146.6 111.6C519.2 131.1 576 167 576 208c0 61.9-128.9 112-288 112S0 269.9 0 208c0-41 56.8-76.9 141.4-96.4zM120 208a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM312 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM74.3 325.7l4.2-8.9c14.3 5.6 29.7 10.6 46 15l-6.8 14.5-72 152c-5.7 12-20 17.1-32 11.4s-17.1-20-11.4-32l72-152zm384 20.6l-6.8-14.5c16.3-4.4 31.7-9.4 46-15l4.2 8.9 72 152c5.7 12 .6 26.3-11.4 32s-26.3 .6-32-11.4l-72-152z" })] })));
};
export default IpsUfoBeamIcon;
//# sourceMappingURL=ips-ufo-beam.js.map