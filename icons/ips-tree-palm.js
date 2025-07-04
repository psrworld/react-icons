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
export const IpsTreePalmIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-tree-palm ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-tree-palm" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M102.9 91.4l30.3 50.5c-4 3.5-8 7.2-12 11.2c-71 71-60.2 151-32.7 191.3c5 7.3 15.2 7.3 21.4 1L248.4 206.9c4 10.8 7.8 26.2 9.7 47.2c4.2 46.5-1.6 116.8-32.7 216.4c-3 9.7-1.3 20.3 4.8 28.5s15.6 13 25.8 13l64 0c16.1 0 29.8-12 31.8-28c12.4-99-2.3-207.2-31.7-292l126.6 0c2.8 0 5.4-1.5 6.9-3.9l19.6-32.7c3.1-5.2 10.6-5.2 13.7 0l19.6 32.7c1.4 2.4 4 3.9 6.9 3.9l46.7 0c8.8 0 16.1-7.2 14.4-15.9C565.3 128.2 516.4 64 416 64c-43.7 0-77.6 12.2-102.8 29.8C296.5 49.4 248 0 160 0C59.6 0 10.7 64.2 1.6 112.1C-.1 120.8 7.2 128 16 128l46.7 0c2.8 0 5.4-1.5 6.9-3.9L89.1 91.4c3.1-5.2 10.6-5.2 13.7 0z" })] })));
};
export default IpsTreePalmIcon;
//# sourceMappingURL=ips-tree-palm.js.map