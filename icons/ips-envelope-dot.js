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
export const IpsEnvelopeDotIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-envelope-dot ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-envelope-dot" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M496 0a80 80 0 1 1 0 160A80 80 0 1 1 496 0zM48 64l337.1 0c-.7 5.2-1.1 10.6-1.1 16c0 45.6 27.2 84.8 66.3 102.3L275.2 313.6c-11.4 8.5-27 8.5-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112C0 85.5 21.5 64 48 64zM294.4 339.2L490.8 191.9c1.7 .1 3.4 .1 5.2 .1c5.4 0 10.8-.4 16-1.1L512 384c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 176 217.6 339.2c22.8 17.1 54 17.1 76.8 0z" })] })));
};
export default IpsEnvelopeDotIcon;
//# sourceMappingURL=ips-envelope-dot.js.map