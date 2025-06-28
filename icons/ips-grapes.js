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
export const IpsGrapesIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-grapes ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-grapes" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM304 152a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zM112 232a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm32 80A56 56 0 1 0 32 312a56 56 0 1 0 112 0zM112 456A56 56 0 1 0 0 456a56 56 0 1 0 112 0zm144-32a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm80 32a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM280 288a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm80 32a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" })] })));
};
export default IpsGrapesIcon;
//# sourceMappingURL=ips-grapes.js.map