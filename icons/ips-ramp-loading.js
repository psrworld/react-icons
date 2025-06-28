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
export const IpsRampLoadingIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-ramp-loading ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-ramp-loading" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M32 48C32 21.5 53.5 0 80 0L368 0c26.5 0 48 21.5 48 48l0 392.4-64-128L352 64 96 64l0 248.4-64 128L32 48zM404.4 488.8c.8 1.5 1.2 3 1.5 4.6c1.5 9.3-5.6 18.6-15.8 18.6L368 512 80 512l-22.1 0c-10.2 0-17.4-9.2-15.8-18.6c.3-1.5 .7-3.1 1.5-4.6L96 384l32-64 192 0 32 64 52.4 104.8z" })] })));
};
export default IpsRampLoadingIcon;
//# sourceMappingURL=ips-ramp-loading.js.map