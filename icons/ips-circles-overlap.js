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
export const IpsCirclesOverlapIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-circles-overlap ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-circles-overlap" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M192 288c0 34.2 7.7 66.6 21.4 95.7C130 378.2 64 308.8 64 224c0-88.4 71.6-160 160-160c32.2 0 62.2 9.5 87.3 25.9C240.4 127.5 192 202.1 192 288zm32 160c11.2 0 22.1-.8 32.8-2.4c40.6 41 96.9 66.4 159.2 66.4c123.7 0 224-100.3 224-224S539.7 64 416 64c-11.2 0-22.1 .8-32.8 2.4C342.6 25.4 286.3 0 224 0C100.3 0 0 100.3 0 224S100.3 448 224 448zm192 0c-32.2 0-62.2-9.5-87.3-25.9C399.6 384.5 448 309.9 448 224c0-34.2-7.7-66.6-21.4-95.7C510 133.8 576 203.2 576 288c0 88.4-71.6 160-160 160z" })] })));
};
export default IpsCirclesOverlapIcon;
//# sourceMappingURL=ips-circles-overlap.js.map