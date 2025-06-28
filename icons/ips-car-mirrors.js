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
export const IpsCarMirrorsIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 576 512", fill: color, className: `react-icon solid-icon ips-car-mirrors ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-car-mirrors" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M167.2 117.4c4.5-12.8 16.6-21.4 30.2-21.4l181.2 0c13.6 0 25.7 8.6 30.2 21.4L434.9 192l-293.8 0 26.1-74.6zM32 224l8.6 0c-5.4 9.4-8.6 20.3-8.6 32l0 144 0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48 320 0 0 48c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-48 0-144c0-11.7-3.1-22.6-8.6-32l8.6 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-52.5 0L469.2 96.3C455.7 57.8 419.4 32 378.6 32L197.4 32c-40.8 0-77.1 25.8-90.6 64.3L84.5 160 32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32zm64 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" })] })));
};
export default IpsCarMirrorsIcon;
//# sourceMappingURL=ips-car-mirrors.js.map