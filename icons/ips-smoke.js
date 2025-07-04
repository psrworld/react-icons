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
export const IpsSmokeIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-smoke ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-smoke" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M172.3 194.3c-9.2-1.5-18.7-2.3-28.3-2.3c-29.2 0-56.7 7.1-80.9 19.6C43.7 189.2 32 160 32 128C32 57.3 89.3 0 160 0c40.1 0 75.9 18.4 99.3 47.3C277.4 37.5 298 32 320 32c44.3 0 83.4 22.5 106.4 56.8c-11.5 7.3-22 16-31.2 25.9C372.7 102.8 347.2 96 320 96c-66.5 0-123.5 40.6-147.7 98.3zm276.3 62.5C419.5 217.5 372.7 192 320 192c-31.5 0-60.9 9.1-85.7 24.9c-9.6-5.8-19.8-10.6-30.5-14.5C224 158.5 268.4 128 320 128c31.3 0 60.1 11.3 82.3 30c22.4-37.1 63.1-62 109.7-62c70.7 0 128 57.3 128 128c0 42.2-20.4 79.6-51.9 102.9C563.1 284.5 516.9 256 464 256c-5.2 0-10.3 .3-15.4 .8zM144 512C64.5 512 0 447.5 0 368s64.5-144 144-144c34.5 0 66.1 12.1 90.9 32.3C257.6 236.2 287.4 224 320 224c49.1 0 91.8 27.7 113.2 68.3c9.8-2.8 20.1-4.3 30.8-4.3c61.9 0 112 50.1 112 112s-50.1 112-112 112l-320 0z" })] })));
};
export default IpsSmokeIcon;
//# sourceMappingURL=ips-smoke.js.map