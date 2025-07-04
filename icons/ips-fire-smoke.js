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
export const IpsFireSmokeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-fire-smoke ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-fire-smoke" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M283.7 0c-3.6 0-7.2 1.2-10 3.7c-33.2 29.7-61.4 63.4-81.4 95.8c-19.7 31.9-32.4 66.2-32.4 92.6c0 30 8.2 58.3 22.7 82.4c4.6 2.6 9 5.4 13.3 8.5c13.7-16.8 30.7-30.8 50.1-40.9c-3.9-9.4-6-20.2-6-32.1c0-24 15-45 45-82c4 5 62 79 62 79l36-42c3 4 5 8 7 12c11.3 20.7 12.3 44.9 4.2 65.2c19.3 10.1 36.2 24 49.9 40.8c4.2-3 8.5-5.8 12.9-8.3c14.6-24.1 23-52.4 23-82.5c0-20.2-9.6-50.9-24.2-79C441.1 84.7 420.2 54.7 395.5 32c-5.6-5.1-14.4-5.2-20 0c-9.6 8.8-18.6 19.6-26.5 29.5c-17.3-20.7-35.8-39.9-55.5-57.7c-2.8-2.5-6.3-3.7-9.8-3.8zM0 400c0 61.9 50.1 112 112 112l208 0 208 0c61.9 0 112-50.1 112-112s-50.1-112-112-112c-37 0-69.9 18-90.3 45.7C418.2 288 372.8 256 320 256s-98.2 32-117.7 77.7C181.9 306 149 288 112 288C50.1 288 0 338.1 0 400z" })] })));
};
export default IpsFireSmokeIcon;
//# sourceMappingURL=ips-fire-smoke.js.map