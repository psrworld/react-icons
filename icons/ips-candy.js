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
export const IpsCandyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-candy ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-candy" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M318.1 64c-24.5 .2-47.9 5.1-69.4 13.7L419.9 420c20.3-12.4 38.2-28.5 52.6-47.3L318.1 64zM492.3 340.8c4.7-9.6 8.7-19.6 11.8-30l93.2 46.6c10.5 5.3 23.3 2.1 30.2-7.4s5.8-22.7-2.5-31l-29.6-29.6 29.1-10.9C633.8 275 640 266 640 256s-6.2-19-15.6-22.5l-29.1-10.9L625 193c8.3-8.3 9.4-21.5 2.5-31s-19.7-12.7-30.2-7.4L504 201.1C483.7 132.9 426.5 80.6 355.5 67.3L492.3 340.8zm-101 93.5L220.1 92c-20.3 12.4-38.2 28.5-52.6 47.3L321.9 448c24.5-.2 47.9-5.1 69.4-13.7zM284.5 444.7L147.7 171.2c-4.7 9.6-8.7 19.6-11.8 30L42.7 154.5c-10.5-5.3-23.3-2.1-30.2 7.4s-5.8 22.7 2.5 31l29.6 29.6L15.6 233.5C6.2 237 0 246 0 256s6.2 19 15.6 22.5l29.1 10.9L15 319c-8.3 8.3-9.4 21.5-2.5 31s19.7 12.7 30.2 7.4L136 310.9c20.3 68.2 77.5 120.6 148.5 133.9z" })] })));
};
export default IpsCandyIcon;
//# sourceMappingURL=ips-candy.js.map