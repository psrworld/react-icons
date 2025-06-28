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
export const IpsFieldHockeyStickBallIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-field-hockey-stick-ball ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-field-hockey-stick-ball" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M491.2 8.5c21.8 15.1 27.3 45 12.2 66.8l-52.2 75.5L371.3 97.5l53.1-76.8c15.1-21.8 45-27.3 66.8-12.2zM353.1 123.9L433 177.2 241 454.9c-24.6 35.5-64.9 56.8-108.1 56.9C59.5 512 .1 452.3 .6 378.9l0-2.2c.2-25.7 7.8-50.8 21.8-72.4l17.3-26.5c14.5-22.2 44.2-28.4 66.4-13.9s28.4 44.2 13.9 66.4l-17.3 26.5c-4 6.1-6.2 13.3-6.2 20.6l0 2.2c-.1 20 16 36.2 36 36.1c11.7 0 22.7-5.8 29.4-15.5L353.1 123.9zM432 352a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" })] })));
};
export default IpsFieldHockeyStickBallIcon;
//# sourceMappingURL=ips-field-hockey-stick-ball.js.map