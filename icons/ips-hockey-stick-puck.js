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
export const IpsHockeyStickPuckIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-hockey-stick-puck ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-hockey-stick-puck" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M462.3 3.4c15.8 7.9 22.2 27.1 14.3 42.9L261.5 476.6c-10.8 21.7-33 35.4-57.2 35.4L160 512l-32 0-32 0 0-32 0-128 156.2 0L419.4 17.7c7.9-15.8 27.1-22.2 42.9-14.3zM0 384c0-17.7 14.3-32 32-32l32 0 0 160-32 0c-17.7 0-32-14.3-32-32l0-96zm416 32l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32z" })] })));
};
export default IpsHockeyStickPuckIcon;
//# sourceMappingURL=ips-hockey-stick-puck.js.map