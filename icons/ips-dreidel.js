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
export const IpsDreidelIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-dreidel ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-dreidel" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M438.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 146.7 225.9 84.7c-18.7-18.7-49.1-18.7-67.9 0l-57.4 57.4L337.9 379.3l57.4-57.4c18.7-18.7 18.7-49.1 0-67.9L333.3 192 438.6 86.6zM315.3 401.9L78.1 164.7 18.7 224C6.7 236 0 252.3 0 269.3L0 416c0 35.3 28.7 64 64 64l146.7 0c17 0 33.3-6.7 45.3-18.7l59.3-59.3z" })] })));
};
export default IpsDreidelIcon;
//# sourceMappingURL=ips-dreidel.js.map