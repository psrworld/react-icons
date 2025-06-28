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
export const IpsBoxCircleCheckIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-box-circle-check ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-box-circle-check" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M93.7 32L208 32l0 128L0 160 50.7 58.5C58.9 42.3 75.5 32 93.7 32zM240 32l114.3 0c18.2 0 34.8 10.3 42.9 26.5L448 160l-32 0-176 0 0-128zM0 416L0 192l416 0 0 .7c-89.7 8.1-160 83.5-160 175.3c0 42.5 15.1 81.6 40.2 112L64 480c-35.3 0-64-28.7-64-64zm288-48a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3-43.3c-6.2-6.2-16.4-6.2-22.6 0L416 385.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" })] })));
};
export default IpsBoxCircleCheckIcon;
//# sourceMappingURL=ips-box-circle-check.js.map