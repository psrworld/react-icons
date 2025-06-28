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
export const IpsDryerIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-dryer ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-dryer" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM368 304A144 144 0 1 0 80 304a144 144 0 1 0 288 0zM88 112a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM208 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM336 304c0 61.9-50.1 112-112 112c-56.4 0-103.1-41.7-110.9-96l62.9 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-62.9 0c7.8-54.3 54.4-96 110.9-96c61.9 0 112 50.1 112 112z" })] })));
};
export default IpsDryerIcon;
//# sourceMappingURL=ips-dryer.js.map