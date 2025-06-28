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
export const IpsMelonIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-melon ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-melon" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 512c-38.5 0-75-8.5-107.7-23.7c67.1-5.8 149.8-48.2 220.8-119.2s113.4-153.8 119.2-220.8C503.5 181 512 217.5 512 256c0 141.4-114.6 256-256 256zM74.7 436.8c-19.1-19.4-26.8-55.8-11.9-108c14.6-51.2 49.6-110.2 102.7-163.3s112.1-88.1 163.3-102.7c52.4-15 88.9-7.1 108.2 12.2s27.2 55.9 12.2 108.2c-14.6 51.2-49.6 110.2-102.7 163.3s-112.1 88.1-163.3 102.7c-52.1 14.9-88.6 7.2-108-11.9c-.2-.2-.4-.4-.5-.5zm-51-73.1C8.5 331 0 294.5 0 256C0 114.6 114.6 0 256 0c38.5 0 75 8.5 107.7 23.7c-67.1 5.8-149.8 48.2-220.8 119.2s-113.4 153.8-119.2 220.8z" })] })));
};
export default IpsMelonIcon;
//# sourceMappingURL=ips-melon.js.map