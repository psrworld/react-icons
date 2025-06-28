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
export const IpsAlienIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-alien ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-alien" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M224 0C100.3 0 0 100.3 0 224C0 359.3 148.8 471.7 194.7 503.2c8.6 5.9 18.9 8.8 29.3 8.8s20.7-2.9 29.3-8.8C299.2 471.7 448 359.3 448 224C448 100.3 347.7 0 224 0zm32 306.3c0-45.4 36.8-82.3 82.3-82.3l32 0c7.6 0 13.7 6.1 13.7 13.7c0 45.4-36.8 82.3-82.3 82.3l-32 0c-7.6 0-13.7-6.1-13.7-13.7zM109.7 224c45.4 0 82.3 36.8 82.3 82.3c0 7.6-6.1 13.7-13.7 13.7l-32 0C100.8 320 64 283.2 64 237.7c0-7.6 6.1-13.7 13.7-13.7l32 0z" })] })));
};
export default IpsAlienIcon;
//# sourceMappingURL=ips-alien.js.map