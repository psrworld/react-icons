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
export const IpsGiftCardIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-gift-card ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-gift-card" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M353.5 68.8C361.1 55.9 374.9 48 389.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-72 0-1.3 0 34.8-59.2zm-131 0L257.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zm89.6-24.3L288 85.5l-24.1-41C247.7 16.9 218.1 0 186.2 0L184 0C135.4 0 96 39.4 96 88c0 14.4 3.5 28 9.6 40L64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4zM512 384l0 64L64 448l0-64 448 0zm0-64L64 320l0-128 166.1 0-40.5 48.6c-8.5 10.2-7.1 25.3 3.1 33.8s25.3 7.1 33.8-3.1L288 197.5l61.6 73.9c8.5 10.2 23.6 11.6 33.8 3.1s11.6-23.6 3.1-33.8L345.9 192 512 192l0 128z" })] })));
};
export default IpsGiftCardIcon;
//# sourceMappingURL=ips-gift-card.js.map