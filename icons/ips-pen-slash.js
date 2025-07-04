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
export const IpsPenSlashIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-pen-slash ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-pen-slash" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L409.9 296l75.7-75.7L355.7 90.3l-91.5 91.5L38.8 5.1zm78 324.1c-6.6 6.6-11.5 14.8-14.1 23.8L65 481.2c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l128.2-37.7c9-2.6 17.2-7.5 23.8-14.1l94.4-94.4L195.8 250.3l-79 79zM426.7 19.3L378.3 67.7 508.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L517.3 19.3c-25-25-65.5-25-90.5 0z" })] })));
};
export default IpsPenSlashIcon;
//# sourceMappingURL=ips-pen-slash.js.map