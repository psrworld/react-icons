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
export const IpsCarpoolIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 512 512", fill: color, className: `react-icon solid-icon ips-carpool ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-carpool" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M104.6 122.9L80.4 224l36.4 0c7.3-14.2 22.1-24 39.2-24l40 0c17.1 0 31.9 9.8 39.2 24l41.6 0c7.3-14.2 22.1-24 39.2-24l40 0c17.1 0 31.9 9.8 39.2 24l36.4 0L407.4 122.9c-6-25.2-28.6-42.9-54.5-42.9L159.1 80c-25.9 0-48.4 17.8-54.5 42.9zM28.4 234.8L57.9 111.7C69.2 65 111 32 159.1 32l193.9 0c48.1 0 89.9 33 101.1 79.7l29.5 123.1c17.1 11.5 28.4 31 28.4 53.2l0 112 0 16 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32L96 416l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32 0-16L0 288c0-22.2 11.3-41.7 28.4-53.2zM176 104a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM96 352a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM296 144a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z" })] })));
};
export default IpsCarpoolIcon;
//# sourceMappingURL=ips-carpool.js.map