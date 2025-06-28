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
export const IpsGarageCarIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-garage-car ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-garage-car" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M0 488L0 171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4L640 488c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-264c0-17.7-14.3-32-32-32l-384 0c-17.7 0-32 14.3-32 32l0 264c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM254.3 293.4L242.2 328l155.6 0-12.1-34.6c-1.1-3.2-4.2-5.4-7.6-5.4l-116.3 0c-3.4 0-6.4 2.2-7.6 5.4zM188.9 335L209 277.5c7.9-22.5 29.1-37.5 52.9-37.5l116.3 0c23.8 0 45 15.1 52.9 37.5L451.1 335c17.2 9.5 28.9 27.9 28.9 49l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16-192 0 0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-21.1 11.7-39.5 28.9-49zM240 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm184-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" })] })));
};
export default IpsGarageCarIcon;
//# sourceMappingURL=ips-garage-car.js.map