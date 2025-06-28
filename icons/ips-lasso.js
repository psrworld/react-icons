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
export const IpsLassoIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-lasso ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-lasso" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M576 176c0 97.2-128.9 176-288 176c-13.2 0-26.3-.5-39-1.6c4.6 12.8 7 26.5 7 40.6c0 66.8-54.2 121-121 121l-71 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l71 0c31.5 0 57-25.5 57-57c0-21.6-12.2-41.3-31.5-51l-46.8-23.4 .2-.4C44.7 284.1 0 233.2 0 176C0 78.8 128.9 0 288 0S576 78.8 576 176zM288 288c123.7 0 224-50.1 224-112s-100.3-112-224-112S64 114.1 64 176s100.3 112 224 112z" })] })));
};
export default IpsLassoIcon;
//# sourceMappingURL=ips-lasso.js.map