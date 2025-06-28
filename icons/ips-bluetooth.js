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
export const IpsBluetoothIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 384 512", fill: color, className: `react-icon solid-icon ips-bluetooth ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-bluetooth" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M178.8 2.9c11.4-5.2 24.8-3.2 34.3 5.1l128 112C348 126 352 134.8 352 144s-4 18-10.9 24.1L240.6 256l100.5 87.9C348 350 352 358.8 352 368s-4 18-10.9 24.1l-128 112c-9.4 8.3-22.9 10.2-34.3 5.1S160 492.6 160 480l0-153.5L85.1 392.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2L143.4 256 42.9 168.1c-13.3-11.6-14.6-31.9-3-45.2s31.9-14.6 45.2-3L160 185.5 160 32c0-12.6 7.3-24 18.8-29.1zM224 326.5l0 83L271.4 368 224 326.5zm0-141L271.4 144 224 102.5l0 83z" })] })));
};
export default IpsBluetoothIcon;
//# sourceMappingURL=ips-bluetooth.js.map