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
export const IpsCarGarageIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 640 512", fill: color, className: `react-icon solid-icon ips-car-garage ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-car-garage" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M343.8 8.8c-14.8-8.4-32.9-8.4-47.6 0L24.1 164.2C8.8 173 3.5 192.5 12.2 207.9s28.3 20.7 43.7 11.9L320 68.9 584.1 219.8c15.3 8.8 34.9 3.4 43.7-11.9s3.4-34.9-11.9-43.7L343.8 8.8zM249.8 224l140.3 0c6.8 0 12.8 4.3 15.1 10.6L424.3 288l-208.6 0 19.1-53.4c2.3-6.4 8.3-10.6 15.1-10.6zm-75.3-10.9l-28.3 79.3C126.1 300.9 112 320.8 112 344l0 40 0 64 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 256 0 0 32c0 17.7 14.3 32 32 32l16 0c17.7 0 32-14.3 32-32l0-32 0-64 0-40c0-23.2-14.1-43.1-34.2-51.6l-28.3-79.3C454.1 181.3 424 160 390.2 160l-140.3 0c-33.8 0-64 21.3-75.3 53.1zM192 344a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm232 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" })] })));
};
export default IpsCarGarageIcon;
//# sourceMappingURL=ips-car-garage.js.map