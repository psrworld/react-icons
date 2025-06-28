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
export const IpsPlaneTailIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-plane-tail ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-plane-tail" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M61.5 308.8L.8 39C-3.7 19 11.5 0 32 0l76.9 0c17.3 0 33.9 7 46 19.5L384 256l104 0 24 0 0 24 0 24 0 160 0 24 0 24-24 0-220.3 0c-10.7 0-21.2-1.9-31.2-5.7L40.4 431.9C16.1 422.7 0 399.4 0 373.4c0-28.2 18.8-52.8 45.9-60.3l15.5-4.3zM216 352c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" })] })));
};
export default IpsPlaneTailIcon;
//# sourceMappingURL=ips-plane-tail.js.map