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
export const IpsPompebledIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-pompebled ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pompebled" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M460.3 172c-46.2-33.2-117-14.1-165.1 44.3c-5.9 8.6-17.2 10.6-25.6 4.5s-10.3-17.6-4.4-26.2c36.9-66.9 29-141.3-17.7-173.5C188.6-20.6 103.1 1.5 56.9 70.4c-85.5 126.3-77.6 313.4 44.2 400.4c121.4 87 296.3 27.7 381.8-98.6c46.2-68.4 36.4-158.5-22.6-200.2z" })] })));
};
export default IpsPompebledIcon;
//# sourceMappingURL=ips-pompebled.js.map