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
export const IpsHouseTurretIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-house-turret ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-house-turret" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M256 464l0-186.9c0-13.5 5.6-26.3 15.6-35.4l144-132c18.4-16.8 46.5-16.8 64.9 0l144 132c9.9 9.1 15.6 21.9 15.6 35.4L640 464c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48zM424 272c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0zM24 0C10.7 0 0 10.7 0 24L0 96l0 8 0 93.5c0 17 6.7 33.3 18.7 45.3L64 288l0 176c0 26.5 21.5 48 48 48l128 0c-10-13.4-16-30-16-48l0-186.9c0-22.4 9.4-43.8 25.9-59L352 124.6l0-20.6 0-8 0-72c0-13.3-10.7-24-24-24L280 0c-13.3 0-24 10.7-24 24l0 72-32 0 0-72c0-13.3-10.7-24-24-24L152 0c-13.3 0-24 10.7-24 24l0 72L96 96l0-72C96 10.7 85.3 0 72 0L24 0zM176 160c22.1 0 40 17.9 40 40l0 24c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-24c0-22.1 17.9-40 40-40z" })] })));
};
export default IpsHouseTurretIcon;
//# sourceMappingURL=ips-house-turret.js.map