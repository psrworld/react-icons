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
export const IpsGalaxyIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-galaxy ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-galaxy" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M320 0l11.5 0C342.8 0 352 9.2 352 20.5c0 7.1-3.7 13.7-9.8 17.5l-12.5 7.7c-35.2 21.7-60.9 54.9-73.3 93.1c19.9-7 41.3-10.8 63.5-10.8c106 0 192 86 192 192l0 11.5c0 11.3-9.2 20.5-20.5 20.5c-7.1 0-13.7-3.7-17.5-9.8l-7.7-12.5c-21.7-35.2-54.9-60.9-93.1-73.3c7 19.9 10.8 41.3 10.8 63.5c0 106-86 192-192 192l-11.5 0c-11.3 0-20.5-9.2-20.5-20.5c0-7.1 3.7-13.7 9.8-17.5l12.5-7.7c35.2-21.7 60.9-54.9 73.3-93.1c-19.9 7-41.3 10.8-63.5 10.8C86 384 0 298 0 192l0-11.5C0 169.2 9.2 160 20.5 160c7.1 0 13.7 3.7 17.5 9.8l7.7 12.5c21.7 35.2 54.9 60.9 93.1 73.3c-7-19.9-10.8-41.3-10.8-63.5C128 86 214 0 320 0zM256 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" })] })));
};
export default IpsGalaxyIcon;
//# sourceMappingURL=ips-galaxy.js.map