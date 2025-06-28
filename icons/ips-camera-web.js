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
export const IpsCameraWebIcon = (_a) => {
    var { size = 24, color = 'currentColor', className = '', style = {}, title, onClick } = _a, props = __rest(_a, ["size", "color", "className", "style", "title", "onClick"]);
    return (_jsxs("svg", Object.assign({ width: size, height: size, viewBox: "0 0 448 512", fill: color, className: `react-icon solid-icon ips-camera-web ${className}`, style: style, onClick: onClick, "data-category": "solid", "data-prefix": "ips", "data-icon": "ips-camera-web" }, props, { children: [title && _jsx("title", { children: title }), _jsx("path", { d: "M344.2 413.1C406.6 373.3 448 303.5 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224c0 79.5 41.4 149.3 103.8 189.1L45.6 453.8c-11.4 8-16.4 22.5-12.2 35.8S50 512 64 512l320 0c14 0 26.3-9.1 30.5-22.4s-.7-27.8-12.2-35.8l-58.2-40.7zM224 352a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-288a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM176 224c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48z" })] })));
};
export default IpsCameraWebIcon;
//# sourceMappingURL=ips-camera-web.js.map