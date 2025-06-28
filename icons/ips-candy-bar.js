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
export const IpsCandyBarIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-candy-bar ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-candy-bar" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 320l128 0 0-96L0 224l0 96zm0 64c0 35.3 28.7 64 64 64l64 0 0-96L0 352l0 32zm288 64l0-96-128 0 0 96 128 0zm0-224l-128 0 0 96 128 0 0-96zm0-160L160 64l0 128 128 0 0-128zm288 0L320 64l0 384 256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64zM44.2 192l75.8 0s0 0 0 0l8 0 0-32s0 0 0 0l0-51.8c0-7.1-9-11.1-15-7.4C101 107.9 87 112 72 112c-4 0-7.9-.3-11.7-.9c-7-1-14.2 6.2-13.1 13.1c.6 3.8 .9 7.7 .9 11.7c0 15-4.1 29-11.3 41c-3.6 6.1 .4 15 7.4 15z" })] })));
};
export default IpsCandyBarIcon;
//# sourceMappingURL=ips-candy-bar.js.map