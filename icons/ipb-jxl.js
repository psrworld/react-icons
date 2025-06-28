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
export const IpbJxlIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon brands-icon ipb-jxl ${className}`, style: style, onClick: onClick, "data-category": "brands", "data-prefix": "ipb", "data-icon": "ipb-jxl" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M412.2 32H35.8C16 32 0 48 0 67.8V444.2C0 464 16 480 35.8 480H412.2c19.8 0 35.8-16 35.8-35.8V67.8C448 48 432 32 412.2 32zM378.6 333.7c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6zm0-113.9c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6zm0-113.9c0 40.2-32.6 72.8-72.8 72.8H70.2c0-40.2 32.6-72.8 72.8-72.8H378.6z" })] })));
};
export default IpbJxlIcon;
//# sourceMappingURL=ipb-jxl.js.map