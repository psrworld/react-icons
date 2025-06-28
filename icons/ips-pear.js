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
export const IpsPearIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-pear ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pear" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M505 7c9.4 9.4 9.4 24.6 0 33.9L457.9 88.1c14 20.5 22.1 45.3 22.1 71.9c0 30.7-10.8 58.9-28.9 81c-29.9 36.5-61.4 81.8-73.3 127.4c-8.3 32-25 62.3-50.1 87.3c-75 75-196.5 75-271.5 0s-75-196.5 0-271.5c25.1-25.1 55.3-41.8 87.3-50.1c45.7-11.8 90.9-43.4 127.4-73.3c22.1-18 50.3-28.9 81-28.9c26.7 0 51.4 8.2 71.9 22.1L471 7c9.4-9.4 24.6-9.4 33.9 0zM320 320c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 53-43 96-96 96c-8.8 0-16 7.2-16 16s7.2 16 16 16c70.7 0 128-57.3 128-128z" })] })));
};
export default IpsPearIcon;
//# sourceMappingURL=ips-pear.js.map