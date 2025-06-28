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
export const IpsPawSimpleIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-paw-simple ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-paw-simple" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zm1.7 206c6.2-2.3 11.8-6.3 15-12.2l40-71.9c14.4-25.9 41.7-42 71.3-42s56.9 16.1 71.3 42l40 71.9c3.2 5.8 8.8 9.9 15 12.2c38.3 14 65.7 50.8 65.7 94c0 55.2-44.8 100-100 100c-21.2 0-40.8-6.6-56.9-17.8c-17.4-12-52.8-12-70.1 0C172.8 473.4 153.2 480 132 480C76.8 480 32 435.2 32 380c0-43.2 27.4-80 65.7-94zM304 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm48 160a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 144a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" })] })));
};
export default IpsPawSimpleIcon;
//# sourceMappingURL=ips-paw-simple.js.map